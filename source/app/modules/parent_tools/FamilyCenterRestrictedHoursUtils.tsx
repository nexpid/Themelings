// app/modules/parent_tools/FamilyCenterRestrictedHoursUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var4 = function formatTime(arg1) {
        var1 = arg1;
        var4 = global;
        var2 = var4.Intl;
        var6 = var2.DateTimeFormat;
        var5 = _closure1_slot0;
        var2 = _closure1_slot2;
        var9 = 1;
        var3 = var2[var9];
        var2 = undefined;
        var2 = var5.bind(var2)(var3);
        var2 = var2.intl;
        var14 = var2.currentLocale;
        var2 = var6.prototype;
        var3 = Object.create(var2, {constructor: {value: var6}});
        var13 = {'hour': 'numeric', 'minute': '2-digit'};
        var15 = var3;
        var2 = new var15[var6](var14, var13, var12);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.format;
        var8 = var4.Date;
        var11 = var1.hours;
        var10 = var1.minutes;
        var1 = var8.prototype;
        var4 = Object.create(var1, {constructor: {value: var8}});
        var14 = 2025;
        var13 = 0;
        var15 = var4;
        var12 = var9;
        var1 = new var15[var8](var14, var13, var12, var11, var10, var9);
        var1 = var1 instanceof Object ? var1 : var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = function setsEqual(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var3 = var2.size;
            var1 = var5.size;
            if(!(var3 === var1)) { _fun0004_ip = 36; continue _fun0004 }
case 29:
            var1 = _closure1_slot7;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0004_ip = 37; continue _fun0004 }
case 2:
            var6 = var2.value;
            var1 = var5.has;
            var1 = var1.bind(var5)(var6);
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = false;
            return var1;
case 38:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0004_ip = 2; continue _fun0004 }
case 37:
            var1 = true;
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var6 = global;
    var10 = var6.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var9 = 0;
    var5 = var8[var9];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var5 = var5.DayOfWeek;
    var10 = var5.SUNDAY;
    var5 = new Array(7);
    var5[0] = var10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.MONDAY;
    var5[1] = var10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.TUESDAY;
    var5[2] = var10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.WEDNESDAY;
    var5[3] = var10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.THURSDAY;
    var5[4] = var10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.FRIDAY;
    var5[5] = var10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.DayOfWeek;
    var10 = var10.SATURDAY;
    var5[6] = var10;
    var _closure1_slot3 = var5;
    var13 = var6.Set;
    var12 = var5.slice;
    var11 = 1;
    var10 = 6;
    var16 = var12.bind(var5)(var11, var10);
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var17 = var12;
    var11 = new var17[var13](var16, var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot4 = var11;
    var11 = var6.Set;
    var12 = var5[var9];
    var9 = new Array(2);
    var9[0] = var12;
    var10 = var5[var10];
    var9[1] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var17 = var10;
    var16 = var9;
    var9 = new var17[var11](var16, var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot5 = var9;
    var6 = var6.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var17 = var9;
    var16 = var5;
    var6 = new var17[var6](var16, var15);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/parent_tools/FamilyCenterRestrictedHoursUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['DAYS_ORDERED'] = var5;
    var5 = function getShortDayLabels(arg1) {
        var2 = global;
        var2 = var2.Intl;
        var6 = var2.DateTimeFormat;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.intl;
        var8 = var3.currentLocale;
        var3 = {};
        var4 = arg1;
        var3['weekday'] = var4;
        var4 = var6.prototype;
        var4 = Object.create(var4, {constructor: {value: var6}});
        var9 = var4;
        var7 = var3;
        var3 = new var9[var6](var8, var7, var6);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot0 = var3;
        var3 = _closure1_slot3;
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            var3 = _closure2_slot0;
            var2 = var3.format;
            var1 = global;
            var7 = var1.Date;
            var4 = 5;
            var1 = arg2;
            var8 = var4 + var1;
            var1 = var7.prototype;
            var4 = Object.create(var1, {constructor: {value: var7}});
            var10 = 2025;
            var9 = 0;
            var11 = var4;
            var1 = new var11[var7](var10, var9, var8, var7);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getShortDayLabels'] = var5;
    var3['formatTime'] = var4;
    var4 = function formatDays(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = global;
            var5 = var3.Set;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var9 = arg1;
            var10 = var4;
            var1 = new var10[var5](var9, var8);
            var7 = var1 instanceof Object ? var1 : var4;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot10;
            var4 = _closure1_slot6;
            var5 = undefined;
            var4 = var6.bind(var5)(var7, var4);
            if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var6 = _closure1_slot10;
            var4 = _closure1_slot4;
            var4 = var6.bind(var5)(var7, var4);
            if(var4) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var6 = _closure1_slot10;
            var4 = _closure1_slot5;
            var4 = var6.bind(var5)(var7, var4);
            if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var3 = var3.Intl;
            var7 = var3.DateTimeFormat;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.intl;
            var9 = var3.currentLocale;
            var3 = {};
            var4 = 'short';
            var3['weekday'] = var4;
            var4 = var7.prototype;
            var4 = Object.create(var4, {constructor: {value: var7}});
            var10 = var4;
            var8 = var3;
            var3 = new var10[var7](var9, var8, var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure2_slot1 = var3;
            var6 = _closure1_slot3;
            var4 = var6.map;
            var3 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = var4.has;
                    var1 = arg1;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var4 = _closure2_slot1;
                    var3 = var4.format;
                    var2 = global;
                    var8 = var2.Date;
                    var5 = 5;
                    var2 = arg2;
                    var9 = var5 + var2;
                    var2 = var8.prototype;
                    var5 = Object.create(var2, {constructor: {value: var8}});
                    var11 = 2025;
                    var10 = 0;
                    var12 = var5;
                    var2 = new var12[var8](var11, var10, var9, var8);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var1 = var3.bind(var4)(var2);
case 46:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var3);
            var3 = var4.filter;
            var2 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.join;
            var2 = ', ';
            var2 = var3.bind(var4)(var2);
            return var2;
case 44:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2["6lTTJ+"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 42:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2["4dr9L9"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 40:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bPjqd1;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['formatDays'] = var4;
    var4 = function timeToMinutes(arg1) {
        var1 = arg1;
        var3 = var1.hours;
        var2 = 60;
        var2 = var2 * var3;
        var1 = var1.minutes;
        var1 = var2 + var1;
        return var1;
    };
    var3['timeToMinutes'] = var4;
    var4 = function formatDuration(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = 60;
            var6 = var2 / var1;
            var7 = global;
            var2 = var7.Number;
            var1 = var2.isInteger;
            var1 = var1.bind(var2)(var6);
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 1;
            var3 = var9[var3];
            var8 = undefined;
            var3 = var4.bind(var8)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var3 = _closure1_slot1;
            var2 = 2;
            var2 = var9[var2];
            var2 = var3.bind(var8)(var2);
            if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 37:
            var3 = var2.wcrXLM;
            var1 = {};
            var8 = var7.Math;
            var7 = var8.floor;
            var7 = var7.bind(var8)(var6);
            var1['hours'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0007_ip = 49; continue _fun0007;
case 48:
            var3 = var2.hFDcmZ;
            var2 = {};
            var2['hours'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 49:
            return var1;
        }
    };
    var3['formatDuration'] = var4;
    var4 = function getScheduleRuleDateRange(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = var2.startTime;
            var4 = null;
            var3 = var4 != var1;
            var6 = '';
            var1 = var6;
            if(!var3) { _fun0008_ip = 50; continue _fun0008 }
case 47:
            var3 = var2.endTime;
            var3 = var4 != var3;
            var1 = var6;
            if(!var3) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var4 = _closure1_slot9;
            var5 = var2.startTime;
            var3 = undefined;
            var5 = var4.bind(var3)(var5);
            var2 = var2.endTime;
            var4 = var4.bind(var3)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ' – ';
            var1 = var3.bind(var6)(var5, var2, var4);
case 50:
            return var1;
        }
    };
    var3['getScheduleRuleDateRange'] = var4;
    var4 = function sortRulesByStartTime(arg1) {
        var2 = arg1;
        var1 = var2.slice;
        var3 = var1.bind(var2)();
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var2 = var1.startTime;
                var5 = null;
                var3 = var5 == var2;
                var7 = undefined;
                if(var3) { _fun0009_ip = 52; continue _fun0009 }
case 31:
                var7 = var2.hours;
case 52:
                var8 = var5 != var7;
                var2 = 0;
                if(!var8) { _fun0009_ip = 51; continue _fun0009 }
case 53:
                var2 = var7;
case 51:
                var7 = 60;
                var2 = var7 * var2;
                var1 = var1.startTime;
                var9 = var5 == var1;
                var8 = undefined;
                if(var9) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                var8 = var1.minutes;
case 54:
                var9 = var5 != var8;
                var1 = 0;
                if(!var9) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                var1 = var8;
case 56:
                var2 = var2 + var1;
                var1 = var6.startTime;
                var9 = var5 == var1;
                var8 = undefined;
                if(var9) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                var8 = var1.hours;
case 58:
                var9 = var5 != var8;
                var1 = 0;
                if(!var9) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                var1 = var8;
case 60:
                var1 = var7 * var1;
                var6 = var6.startTime;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                var4 = var6.minutes;
case 62:
                var5 = var5 != var4;
                var3 = 0;
                if(!var5) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                var3 = var4;
case 64:
                var1 = var1 + var3;
                var1 = var2 - var1;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortRulesByStartTime'] = var4;
    var2 = function toTimeProto(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.hours;
        var1['hours'] = var3;
        var2 = var2.minutes;
        var1['minutes'] = var2;
        var2 = 0;
        var1['seconds'] = var2;
        var1['nanos'] = var2;
        return var1;
    };
    var3['toTimeProto'] = var2;
    return var1;
})();