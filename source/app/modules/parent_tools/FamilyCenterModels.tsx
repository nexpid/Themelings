// app/modules/parent_tools/FamilyCenterModels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot13;
            var1 = var1.bind(var3)();
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var3);
            _fun0004_ip = 9; continue _fun0004;
case 36:
            var6 = global;
            var8 = var6.Reflect;
            var7 = var8.construct;
            var6 = new Array(0);
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 9:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
case 38: // try_start_0
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
case 35: // try_end0
            _fun0005_ip = 39; continue _fun0005;
case 40: // catch_target0
            CatchBlockStart(arg_register=1);
case 39:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function timeOfDayToMinutes(arg1) {
        var1 = arg1;
        var3 = var1.hours;
        var2 = 60;
        var2 = var2 * var3;
        var1 = var1.minutes;
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot14 = var1;
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
            var1 = _closure1_slot12;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg1;
                var2 = arg2;
                var3 = this;
                var1 = var3.startTime;
                var4 = null;
                if(!(var4 != var1)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var1 = var3.endTime;
                if(!(var4 != var1)) { _fun0006_ip = 41; continue _fun0006 }
case 43:
                var1 = var3.days;
                var4 = var1.length;
                var1 = 0;
                if(!(var1 !== var4)) { _fun0006_ip = 41; continue _fun0006 }
case 44:
                var1 = var3.enabled;
                if(!var1) { _fun0006_ip = 41; continue _fun0006 }
case 45:
                var5 = _closure1_slot14;
                var1 = var3.startTime;
                var7 = undefined;
                var8 = var5.bind(var7)(var1);
                var1 = var3.endTime;
                var1 = var5.bind(var7)(var1);
                var5 = var8 > var1;
                var10 = var3.days;
                var9 = var10.includes;
                var9 = var9.bind(var10)(var6);
                if(!var9) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                if(var5) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                if(!(var2 >= var8)) { _fun0006_ip = 46; continue _fun0006 }
case 50:
                if(!(var2 < var1)) { _fun0006_ip = 46; continue _fun0006 }
case 51:
                var9 = true;
                return var9;
case 48:
                if(!(!(var2 >= var8))) { _fun0006_ip = 18; continue _fun0006 }
case 46:
                if(!var5) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var8 = 6;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.DayOfWeek;
                var5 = var5.MONDAY;
                if(!(var6 !== var5)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                var5 = 1;
                var5 = var6 - var5;
                _fun0006_ip = 56; continue _fun0006;
case 54:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var4 = var6.bind(var7)(var4);
                var4 = var4.DayOfWeek;
                var5 = var4.SUNDAY;
case 56:
                var4 = var3.days;
                var3 = var4.includes;
                var3 = var3.bind(var4)(var5);
                if(!var3) { _fun0006_ip = 52; continue _fun0006 }
case 57:
                if(!(!(var2 < var1))) { _fun0006_ip = 58; continue _fun0006 }
case 52:
                var1 = false;
                return var1;
case 58:
                var1 = true;
                return var1;
case 18:
                var1 = true;
                return var1;
case 41:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'getEndMinutes';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var3 = var2.endTime;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var4 = _closure1_slot14;
                var3 = var2.endTime;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 59:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getStartMinutes';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var3 = var2.startTime;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var4 = _closure1_slot14;
                var3 = var2.startTime;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 59:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var6 = {};
        var1 = 'fromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                if(!var8) { _fun0009_ip = 61; continue _fun0009 }
case 5:
                var5 = var7;
case 61:
                var1['startTime'] = var5;
                var5 = var2.end_time;
                var6 = var6 != var5;
                var4 = undefined;
                if(!var6) { _fun0009_ip = 62; continue _fun0009 }
case 40:
                var4 = var5;
case 62:
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
            var1 = _closure1_slot12;
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arguments[0];
                var2 = this;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0010_ip = 63; continue _fun0010 }
case 32:
                var4 = global;
                var4 = var4.Date;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var8 = var6;
                var4 = new var8[var4](var7);
                var5 = var4 instanceof Object ? var4 : var6;
case 63:
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var3;
                var3 = var2.rules;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0010_ip = 64; continue _fun0010 }
case 30:
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
case 64:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'getNextEndTime';
        var1['key'] = var6;
        var6 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var11 = arguments[0];
                var3 = this;
                var10 = undefined;
                if(!(var11 === var10)) { _fun0011_ip = 63; continue _fun0011 }
case 32:
                var1 = global;
                var1 = var1.Date;
                var4 = var1.prototype;
                var4 = Object.create(var4, {constructor: {value: var1}});
                var17 = var4;
                var1 = new var17[var1](var16);
                var11 = var1 instanceof Object ? var1 : var4;
case 63:
                var _closure3_slot0 = var10;
                var _closure3_slot1 = var10;
                var1 = var3.rules;
                var1 = var1.length;
                var6 = 0;
                if(!(var6 !== var1)) { _fun0011_ip = 65; continue _fun0011 }
case 35:
                var5 = _closure1_slot7;
                var4 = var11.getDay;
                var4 = var4.bind(var11)();
                var4 = var5[var4];
                _closure3_slot0 = var4;
                var4 = var11.getHours;
                var4 = var4.bind(var11)();
                var9 = 60;
                var5 = var9 * var4;
                var4 = var11.getMinutes;
                var4 = var4.bind(var11)();
                var8 = var5 + var4;
                _closure3_slot1 = var8;
                var4 = var3.rules;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.isActiveAt;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1 = _closure1_slot10;
                var5 = var1.bind(var10)(var2);
                var3 = var5.bind(var10)();
                var2 = var3.done;
                var1 = null;
                if(var2) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                var7 = var3.value;
                var2 = var7.getEndMinutes;
                var4 = var2.bind(var7)();
                var2 = var7.getStartMinutes;
                var7 = var2.bind(var7)();
                if(!(var1 != var4)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                if(!(var1 == var7)) { _fun0011_ip = 21; continue _fun0011 }
case 68:
                var12 = var5.bind(var10)();
                var2 = var12.done;
                var3 = var12;
                if(var2) { _fun0011_ip = 66; continue _fun0011 }
case 70:
                _fun0011_ip = 67; continue _fun0011;
case 21:
                var3 = var7 > var4;
                var5 = global;
                var2 = var5.Date;
                var10 = var2.prototype;
                var10 = Object.create(var10, {constructor: {value: var2}});
                var17 = var10;
                var16 = var11;
                var2 = new var17[var2](var16, var15);
                var2 = var2 instanceof Object ? var2 : var10;
                var11 = var5.Math;
                var10 = var11.floor;
                var5 = var4 / var9;
                var5 = var10.bind(var11)(var5);
                var4 = var4 % var9;
                if(!var3) { _fun0011_ip = 71; continue _fun0011 }
case 72:
                var3 = var8 >= var7;
case 71:
                if(!var3) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                var7 = var2.setDate;
                var3 = var2.getDate;
                var8 = var3.bind(var2)();
                var3 = 1;
                var3 = var8 + var3;
                var3 = var7.bind(var2)(var3);
case 73:
                var3 = var2.setHours;
                var17 = var2;
                var16 = var5;
                var15 = var4;
                var14 = 0;
                var13 = 0;
                var3 = var17[var3](var16, var15, var14, var13, var12);
                return var2;
case 66:
                return var1;
case 65:
                var1 = null;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var6 = {};
        var1 = 'fromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0012_ip = 75; continue _fun0012 }
case 76:
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
case 75:
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0013_ip = 75; continue _fun0013 }
case 76:
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
case 75:
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            var2 = var1 == var7;
            if(var2) { _fun0014_ip = 53; continue _fun0014 }
case 77:
            var2 = _closure1_slot9;
            var3 = var7 instanceof var2;
            var2 = var7;
            if(var3) { _fun0014_ip = 46; continue _fun0014 }
case 78:
            var3 = var7.rules;
            var3 = var3.length;
            var5 = 0;
            if(!(var5 !== var3)) { _fun0014_ip = 79; continue _fun0014 }
case 5:
            var3 = var7.rules;
            var5 = var3[var5];
            var3 = 'ruleId';
            var3 = var3 in var5;
            var6 = _closure1_slot9;
            if(var3) { _fun0014_ip = 80; continue _fun0014 }
case 39:
            var3 = var6.fromServer;
            var3 = var3.bind(var6)(var7);
            _fun0014_ip = 81; continue _fun0014;
case 80:
            var5 = var6.fromCache;
            var3 = var5.bind(var6)(var7);
case 81:
            _fun0014_ip = 82; continue _fun0014;
case 79:
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
case 82:
            var2 = var3;
case 46:
            var1 = var2;
case 53:
            return var1;
        }
    };
    var3['ensureRestrictedScheduleRecord'] = var2;
    return var1;
})();