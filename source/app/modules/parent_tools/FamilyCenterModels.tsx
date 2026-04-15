// app/modules/parent_tools/FamilyCenterModels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot11;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = global;
            var8 = var6.Reflect;
            var7 = var8.construct;
            var6 = new Array(0);
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 5: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 6: // try_end0
            _fun0002_ip = 7; continue _fun0002;
case 8: // catch_target0
            CatchBlockStart(arg_register=1);
case 7:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function timeOfDayToMinutes(arg1) {
        var1 = arg1;
        var3 = var1.hours;
        var2 = 60;
        var2 = var2 * var3;
        var1 = var1.minutes;
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot12 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var8[var5];
    var6 = var6.bind(var1)(var5);
    var9 = var4.Object;
    var5 = var9.freeze;
    var4 = {};
    var10 = 6;
    var11 = var8[var10];
    var11 = var7.bind(var1)(var11);
    var11 = var11.DayOfWeek;
    var11 = var11.SUNDAY;
    var4[0] = var11;
    var11 = var8[var10];
    var11 = var7.bind(var1)(var11);
    var11 = var11.DayOfWeek;
    var11 = var11.MONDAY;
    var4[1] = var11;
    var11 = var8[var10];
    var11 = var7.bind(var1)(var11);
    var11 = var11.DayOfWeek;
    var11 = var11.TUESDAY;
    var4[2] = var11;
    var11 = var8[var10];
    var11 = var7.bind(var1)(var11);
    var11 = var11.DayOfWeek;
    var11 = var11.WEDNESDAY;
    var4[3] = var11;
    var11 = var8[var10];
    var11 = var7.bind(var1)(var11);
    var11 = var11.DayOfWeek;
    var11 = var11.THURSDAY;
    var4[4] = var11;
    var11 = var8[var10];
    var11 = var7.bind(var1)(var11);
    var11 = var11.DayOfWeek;
    var11 = var11.FRIDAY;
    var4[5] = var11;
    var10 = var8[var10];
    var10 = var7.bind(var1)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.SATURDAY;
    var4[6] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = function(arg1) {
        var5 = function ScheduleRuleRecord(arg1) {
            var2 = arg1;
            var5 = this;
            var6 = _closure1_slot2;
            var4 = _closure2_slot0;
            var3 = undefined;
            var6 = var6.bind(var3)(var5, var4);
            var1 = _closure1_slot10;
            var1 = var1.bind(var3)(var5, var4);
            var3 = var2.ruleId;
            var1['ruleId'] = var3;
            var3 = var2.label;
            var1['label'] = var3;
            var3 = var2.startTime;
            var1['startTime'] = var3;
            var3 = var2.endTime;
            var1['endTime'] = var3;
            var3 = var2.days;
            var1['days'] = var3;
            var2 = var2.enabled;
            var1['enabled'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot6;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'isActiveAt';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var6 = arg1;
                var2 = arg2;
                var3 = this;
                var1 = var3.startTime;
                var4 = null;
                if(!(var4 != var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = var3.endTime;
                if(!(var4 != var1)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var1 = var3.days;
                var4 = var1.length;
                var1 = 0;
                if(!(var1 !== var4)) { _fun0003_ip = 9; continue _fun0003 }
case 12:
                var5 = _closure1_slot12;
                var1 = var3.startTime;
                var7 = undefined;
                var8 = var5.bind(var7)(var1);
                var1 = var3.endTime;
                var1 = var5.bind(var7)(var1);
                var5 = var8 > var1;
                var10 = var3.days;
                var9 = var10.includes;
                var9 = var9.bind(var10)(var6);
                if(!var9) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                if(!(var2 >= var8)) { _fun0003_ip = 13; continue _fun0003 }
case 17:
                if(!(var2 < var1)) { _fun0003_ip = 13; continue _fun0003 }
case 18:
                var9 = true;
                return var9;
case 15:
                if(!(!(var2 >= var8))) { _fun0003_ip = 19; continue _fun0003 }
case 13:
                if(!var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var8 = 6;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.DayOfWeek;
                var5 = var5.MONDAY;
                if(!(var6 !== var5)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var5 = 1;
                var5 = var6 - var5;
                _fun0003_ip = 24; continue _fun0003;
case 22:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var4 = var6.bind(var7)(var4);
                var4 = var4.DayOfWeek;
                var5 = var4.SUNDAY;
case 24:
                var4 = var3.days;
                var3 = var4.includes;
                var3 = var3.bind(var4)(var5);
                if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 25:
                if(!(!(var2 < var1))) { _fun0003_ip = 26; continue _fun0003 }
case 20:
                var1 = false;
                return var1;
case 26:
                var1 = true;
                return var1;
case 19:
                var1 = true;
                return var1;
case 9:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var6 = {};
        var1 = 'fromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.rule_id;
                var1['ruleId'] = var4;
                var4 = var2.label;
                var1['label'] = var4;
                var7 = var2.start_time;
                var6 = null;
                var8 = var6 != var7;
                var5 = undefined;
                if(!var8) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var5 = var7;
case 27:
                var1['startTime'] = var5;
                var5 = var2.end_time;
                var6 = var6 != var5;
                var4 = undefined;
                if(!var6) { _fun0004_ip = 29; continue _fun0004 }
case 8:
                var4 = var5;
case 29:
                var1['endTime'] = var4;
                var4 = var2.days;
                var1['days'] = var4;
                var2 = var2.enabled;
                var1['enabled'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var10 = var2;
                var9 = var1;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'fromCache';
        var6['key'] = var8;
        var7 = function value(arg1) {
            var3 = _closure2_slot0;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = arg1;
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var5 = var4.bind(var1)(var6);
    var _closure1_slot8 = var5;
    var4 = function(arg1) {
        var5 = function RestrictedScheduleRecord(arg1) {
            var4 = this;
            var5 = _closure1_slot2;
            var3 = _closure2_slot0;
            var2 = undefined;
            var5 = var5.bind(var2)(var4, var3);
            var1 = _closure1_slot10;
            var1 = var1.bind(var2)(var4, var3);
            var2 = arg1;
            var2 = var2.rules;
            var1['rules'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot6;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'isInRestrictedHours';
        var1['key'] = var2;
        var2 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arguments[0];
                var2 = this;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var4 = global;
                var4 = var4.Date;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var8 = var6;
                var4 = new var8[var4](var7);
                var5 = var4 instanceof Object ? var4 : var6;
case 30:
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var3;
                var3 = var2.rules;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var4 = _closure1_slot7;
                var3 = var5.getDay;
                var3 = var3.bind(var5)();
                var3 = var4[var3];
                _closure3_slot0 = var3;
                var3 = var5.getHours;
                var4 = var3.bind(var5)();
                var3 = 60;
                var4 = var3 * var4;
                var3 = var5.getMinutes;
                var3 = var3.bind(var5)();
                var3 = var4 + var3;
                _closure3_slot1 = var3;
                var3 = var2.rules;
                var2 = var3.some;
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.isActiveAt;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
case 32:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var6 = {};
        var1 = 'fromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                var4 = _closure2_slot0;
                var2 = {};
                var6 = var3.rules;
                var5 = var6.map;
                var3 = _closure1_slot8;
                var3 = var3.fromServer;
                var3 = var5.bind(var6)(var3);
                var2['rules'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var8 = var3;
                var7 = var2;
                var2 = new var8[var4](var7, var6);
                var1 = var2 instanceof Object ? var2 : var3;
case 34:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'fromCache';
        var6['key'] = var8;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                var4 = _closure2_slot0;
                var2 = {};
                var6 = var3.rules;
                var5 = var6.map;
                var3 = _closure1_slot8;
                var3 = var3.fromCache;
                var3 = var5.bind(var6)(var3);
                var2['rules'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var8 = var3;
                var7 = var2;
                var2 = new var8[var4](var7, var6);
                var1 = var2 instanceof Object ? var2 : var3;
case 34:
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var6);
    var _closure1_slot9 = var4;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/parent_tools/FamilyCenterModels.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ScheduleRuleRecord'] = var5;
    var3['RestrictedScheduleRecord'] = var4;
    var2 = function ensureRestrictedScheduleRecord(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            var2 = var1 == var7;
            if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var2 = _closure1_slot9;
            var3 = var7 instanceof var2;
            var2 = var7;
            if(var3) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var3 = var7.rules;
            var3 = var3.length;
            var5 = 0;
            if(!(var5 !== var3)) { _fun0008_ip = 40; continue _fun0008 }
case 28:
            var3 = var7.rules;
            var5 = var3[var5];
            var3 = 'ruleId';
            var3 = var3 in var5;
            var6 = _closure1_slot9;
            if(var3) { _fun0008_ip = 41; continue _fun0008 }
case 7:
            var3 = var6.fromServer;
            var3 = var3.bind(var6)(var7);
            _fun0008_ip = 42; continue _fun0008;
case 41:
            var5 = var6.fromCache;
            var3 = var5.bind(var6)(var7);
case 42:
            _fun0008_ip = 43; continue _fun0008;
case 40:
            var6 = _closure1_slot9;
            var4 = {};
            var5 = new Array(0);
            var4['rules'] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var8 = var4;
            var4 = new var9[var6](var8, var7);
            var3 = var4 instanceof Object ? var4 : var5;
case 43:
            var2 = var3;
case 38:
            var1 = var2;
case 36:
            return var1;
        }
    };
    var3['ensureRestrictedScheduleRecord'] = var2;
    return var1;
})();