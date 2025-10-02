// app/utils/DateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
    var1 = function startOfDay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = arguments[1];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = true;
case 2:
            var5 = typeof var1;
            var3 = 'string';
            var3 = var3 === var5;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = 'number';
            var3 = var4 === var5;
case 4:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = global;
            var4 = var4.Date;
            var3 = var1 instanceof var4;
case 6:
            var5 = var1;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot3;
            var4 = var6.error;
            var3 = {};
            var3['d'] = var1;
            var1 = 'Invalid date given to startOfDay';
            var1 = var4.bind(var6)(var1, var3);
            var1 = global;
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var5 = var1 instanceof Object ? var1 : var3;
case 8:
            var1 = global;
            var3 = var1.Date;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var9 = var4;
            var8 = var5;
            var3 = new var9[var3](var8, var7);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var4.getTime;
            var3 = var3.bind(var4)();
            var5 = var3;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var4.getTimezoneOffset;
            var4 = var2.bind(var4)();
            var2 = 60000;
            var2 = var2 * var4;
            var5 = var3 - var2;
case 10:
            var4 = var1.Math;
            var3 = var4.floor;
            var2 = _closure1_slot4;
            var2 = var5 / var2;
            var2 = var3.bind(var4)(var2);
            var1 = _closure1_slot4;
            var1 = var2 * var1;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var5 = function differenceInCalendarDays(arg1, arg2) {
        var1 = global;
        var3 = var1.Math;
        var2 = var3.floor;
        var8 = _closure1_slot7;
        var7 = undefined;
        var4 = arg1;
        var6 = false;
        var5 = var8.bind(var7)(var4, var6);
        var4 = arg2;
        var4 = var8.bind(var7)(var4, var6);
        var4 = var5 - var4;
        var1 = _closure1_slot4;
        var1 = var4 / var1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var5;
    var4 = function dateFormat(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var2 = _closure1_slot10;
            var3 = undefined;
            var5 = var2.bind(var3)(var4);
            var2 = var5.locale;
            var9 = var2.bind(var5)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var5 = var2.TimestampHourCycle;
            var2 = var5.getSetting;
            var11 = var2.bind(var5)();
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var16 = '';
            var2 = ':';
            var15 = var9;
            var14 = var2;
            var13 = var8;
            var12 = var2;
            var7 = var16[var6](var15, var14, var13, var12, var11, var10);
            var2 = _closure1_slot5;
            var2 = var2[var7];
            var5 = null;
            if(!(var5 == var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = _closure1_slot5;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 3;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.bind(var3)(var8);
            var6[var7] = var5;
            var2 = var5;
case 12:
            var1 = _closure1_slot11;
            var1 = var1.bind(var3)(var4);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = function toMoment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 4;
            var1 = var1[var6];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.isMoment;
            var5 = var1.bind(var5)(var4);
            var1 = var4;
            if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var1 = var2.bind(var3)(var4);
case 14:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function toDate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.isMoment;
            var2 = var1.bind(var2)(var3);
            var1 = var3;
            if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 15:
            var2 = var3.toDate;
            var1 = var2.bind(var3)();
case 16:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var6 = global;
    var12 = var6.Object;
    var10 = var12.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var12)(var3, var1, var9);
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var10 = var11.bind(var1)(var9);
    var9 = 1;
    var9 = var8[var9];
    var12 = var11.bind(var1)(var9);
    var9 = var12.prototype;
    var11 = Object.create(var9, {constructor: {value: var12}});
    var15 = 'DateUtils';
    var16 = var11;
    var9 = new var16[var12](var15, var14);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot3 = var9;
    var9 = 86400000;
    var _closure1_slot4 = var9;
    var11 = var6.Object;
    var9 = var11.create;
    var6 = null;
    var6 = var9.bind(var11)(var6);
    var _closure1_slot5 = var6;
    var9 = var10.addChangeListener;
    var6 = function() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.create;
        var1 = null;
        var2 = var2.bind(var3)(var1);
        _closure1_slot5 = var2;
        var1 = undefined;
        return var1;
    };
    var6 = var9.bind(var10)(var6);
    var6 = new Array(4);
    var9 = {'key': 'days', 'millisecondsInUnit': 86400000};
    var6[0] = var9;
    var9 = {'key': 'hours', 'millisecondsInUnit': 3600000};
    var6[1] = var9;
    var9 = {'key': 'minutes', 'millisecondsInUnit': 60000};
    var6[2] = var9;
    var9 = {'key': 'seconds', 'millisecondsInUnit': 1000};
    var6[3] = var9;
    var _closure1_slot6 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/DateUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['differenceInCalendarDays'] = var5;
    var5 = function isSameHourMoment(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.toDate;
            var3 = var1.bind(var3)();
            var1 = var2.toDate;
            var4 = var1.bind(var2)();
            var1 = global;
            var5 = var1.Math;
            var2 = var5.abs;
            var6 = var3 - 0;
            var1 = var4 - 0;
            var1 = var6 - var1;
            var2 = var2.bind(var5)(var1);
            var1 = 3600000;
            var1 = var2 <= var1;
            if(!var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var2 = var3.getHours;
            var3 = var2.bind(var3)();
            var2 = var4.getHours;
            var2 = var2.bind(var4)();
            var1 = var3 === var2;
case 17:
            return var1;
        }
    };
    var3['isSameHourMoment'] = var5;
    var5 = function isSameDay(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = global;
            var5 = var1.Math;
            var2 = var5.abs;
            var6 = var3 - 0;
            var1 = var4 - 0;
            var1 = var6 - var1;
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot4;
            var1 = var2 <= var1;
            if(!var1) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var2 = var3.getDate;
            var3 = var2.bind(var3)();
            var2 = var4.getDate;
            var2 = var2.bind(var4)();
            var1 = var3 === var2;
case 19:
            return var1;
        }
    };
    var3['isSameDay'] = var5;
    var5 = function isWithinInterval(arg1, arg2, arg3) {
        var4 = arg1;
        var5 = arg2;
        var1 = global;
        var3 = var1.Math;
        var2 = var3.abs;
        var1 = var4.valueOf;
        var4 = var1.bind(var4)();
        var1 = var5.valueOf;
        var1 = var1.bind(var5)();
        var1 = var4 - var1;
        var2 = var2.bind(var3)(var1);
        var1 = arg3;
        var1 = var2 < var1;
        return var1;
    };
    var3['isWithinInterval'] = var5;
    var3['dateFormat'] = var4;
    var4 = function calendarFormat(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0007_ip = 2; continue _fun0007 }
case 3:
            var2 = false;
case 2:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 4;
            var8 = var7[var5];
            var9 = var6.bind(var3)(var8);
            var8 = var9.localeData;
            var9 = var8.bind(var9)();
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var8 = var5.bind(var3)();
            var7 = _closure1_slot8;
            var5 = _closure1_slot11;
            var6 = var5.bind(var3)(var4);
            var5 = var8.toDate;
            var5 = var5.bind(var8)();
            var6 = var7.bind(var3)(var6, var5);
            var5 = -1;
            if(!(!(var6 < var5))) { _fun0007_ip = 21; continue _fun0007 }
case 22:
            var5 = 0;
            var5 = var6 < var5;
            var7 = 'lastDay';
            if(var5) { _fun0007_ip = 23; continue _fun0007 }
case 24:
            var5 = 1;
            if(!(!(var6 < var5))) { _fun0007_ip = 25; continue _fun0007 }
case 26:
            var5 = 2;
            var6 = var6 < var5;
            var5 = 'sameElse';
            if(!var6) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var5 = 'nextDay';
case 27:
            var7 = var5;
            _fun0007_ip = 23; continue _fun0007;
case 25:
            var7 = 'sameDay';
            if(!var2) { _fun0007_ip = 23; continue _fun0007 }
case 29:
            var5 = _closure1_slot9;
            var2 = 'LT';
            var2 = var5.bind(var3)(var4, var2);
            return var2;
case 23:
            var5 = _closure1_slot9;
            var6 = var9.calendar;
            var2 = _closure1_slot10;
            var2 = var2.bind(var3)(var4);
            var2 = var6.bind(var9)(var7, var2, var8);
            var2 = var5.bind(var3)(var4, var2);
            return var2;
case 21:
            var2 = _closure1_slot9;
            var1 = 'L LT';
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['calendarFormat'] = var4;
    var4 = function calendarFormatCompact(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 4;
            var7 = var5[var1];
            var3 = undefined;
            var8 = var2.bind(var3)(var7);
            var7 = var8.localeData;
            var10 = var7.bind(var8)();
            var1 = var5[var1];
            var1 = var2.bind(var3)(var1);
            var9 = var1.bind(var3)();
            var5 = _closure1_slot8;
            var1 = _closure1_slot11;
            var2 = var1.bind(var3)(var4);
            var1 = var9.toDate;
            var1 = var1.bind(var9)();
            var7 = var5.bind(var3)(var2, var1);
            var2 = _closure1_slot9;
            var1 = 'LT';
            var5 = 0;
            if(!(var5 !== var7)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
            var5 = -1;
            if(!(var5 !== var7)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var5 = -7;
            var7 = var7 > var5;
            var5 = 'L';
            if(!var7) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var5 = 'dddd';
case 34:
            _fun0008_ip = 36; continue _fun0008;
case 32:
            var8 = var10.calendar;
            var6 = _closure1_slot10;
            var7 = var6.bind(var3)(var4);
            var6 = 'lastDay';
            var5 = var8.bind(var10)(var6, var7, var9);
case 36:
            var1 = var5;
case 30:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['calendarFormatCompact'] = var4;
    var4 = function accessibilityLabelCalendarFormat(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var12 = 4;
            var1 = var1[var12];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = var2.localeData;
            var9 = var1.bind(var2)();
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var17 = var2;
            var1 = new var17[var1](var16);
            var10 = var1 instanceof Object ? var1 : var2;
            var1 = _closure1_slot8;
            var13 = var1.bind(var3)(var4, var10);
            var2 = _closure1_slot9;
            var1 = -1;
            var1 = var13 < var1;
            var6 = 'sameElse';
            var8 = var6;
            if(var1) { _fun0009_ip = 12; continue _fun0009 }
case 37:
            var1 = 0;
            var7 = var13 < var1;
            var1 = 'lastDay';
            if(var7) { _fun0009_ip = 38; continue _fun0009 }
case 39:
            var7 = 1;
            var11 = var13 < var7;
            var7 = 'sameDay';
            if(var11) { _fun0009_ip = 40; continue _fun0009 }
case 34:
            var11 = 2;
            var13 = var13 < var11;
            var11 = var6;
            if(!var13) { _fun0009_ip = 41; continue _fun0009 }
case 42:
            var11 = 'nextDay';
case 41:
            var7 = var11;
case 40:
            var1 = var7;
case 38:
            var8 = var1;
case 12:
            var1 = 'LLL';
            if(!(var6 !== var8)) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            var7 = var9.calendar;
            var11 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = var5[var12];
            var6 = var11.bind(var3)(var6);
            var6 = var6.bind(var3)(var4);
            var5 = var5[var12];
            var5 = var11.bind(var3)(var5);
            var5 = var5.bind(var3)(var10);
            var1 = var7.bind(var9)(var8, var6, var5);
case 43:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['accessibilityLabelCalendarFormat'] = var4;
    var4 = function diffAsUnits(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var3 = arguments[2];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var3 = false;
case 45:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var1 = {'days': 0, 'hours': 0, 'minutes': 0};
            var4 = 0;
            if(!var3) { _fun0010_ip = 20; continue _fun0010 }
case 47:
            var4 = 1;
case 20:
            var1['seconds'] = var4;
            _closure2_slot0 = var1;
            if(!(!(var6 > var7))) { _fun0010_ip = 44; continue _fun0010 }
case 48:
            if(!var3) { _fun0010_ip = 49; continue _fun0010 }
case 50:
            var3 = global;
            var4 = var3.Number;
            var8 = var4.bind(var5)(var6);
            var4 = 1200;
            var4 = var8 + var4;
            var3 = var3.Number;
            var3 = var3.bind(var5)(var7);
            if(!(!(var4 > var3))) { _fun0010_ip = 51; continue _fun0010 }
case 49:
            var3 = global;
            var4 = var3.Number;
            var4 = var4.bind(var5)(var7);
            var3 = var3.Number;
            var3 = var3.bind(var5)(var6);
            var3 = var4 - var3;
            _closure2_slot1 = var3;
            var4 = _closure1_slot6;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = var1.key;
                var4 = var1.millisecondsInUnit;
                var3 = _closure2_slot0;
                var1 = global;
                var7 = var1.Math;
                var6 = var7.floor;
                var1 = _closure2_slot1;
                var1 = var1 / var4;
                var1 = var6.bind(var7)(var1);
                var3[var5] = var1;
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var1[var5];
                var1 = var1 * var4;
                var1 = var3 - var1;
                _closure2_slot1 = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
case 51:
            return var1;
case 44:
            return var1;
        }
    };
    var3['diffAsUnits'] = var4;
    var2 = function unitsAsStrings(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var1 = var6.days;
            var3 = 0;
            if(!(!(var1 > var3))) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var1 = var6.hours;
            if(!(!(var1 > var3))) { _fun0011_ip = 8; continue _fun0011 }
case 54:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var5 = var1.intl;
            var4 = var5.formatToPlainString;
            var3 = var2.minutes;
            var1 = {};
            var7 = global;
            var10 = var7.Math;
            var9 = var10.max;
            var8 = var6.minutes;
            var7 = 1;
            var7 = var9.bind(var10)(var7, var8);
            var1['minutes'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0011_ip = 10; continue _fun0011;
case 8:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var7 = var3.intl;
            var5 = var7.formatToPlainString;
            var4 = var2.hours;
            var3 = {};
            var8 = var6.hours;
            var3['hours'] = var8;
            var8 = var6.minutes;
            var3['minutes'] = var8;
            var1 = var5.bind(var7)(var4, var3);
case 10:
            _fun0011_ip = 55; continue _fun0011;
case 52:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var3 = var2.days;
            var2 = {};
            var7 = var6.days;
            var2['days'] = var7;
            var6 = var6.hours;
            var2['hours'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 55:
            return var1;
        }
    };
    var3['unitsAsStrings'] = var2;
    return var1;
})();