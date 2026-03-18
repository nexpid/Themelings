// app/utils/DateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var11 = function resetCache() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.create;
        var1 = null;
        var2 = var2.bind(var3)(var1);
        _closure1_slot5 = var2;
        var1 = undefined;
        return var1;
    };
    var12 = function syncHourCycleToIntlConfig() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var4 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var4);
            var5 = var4.TimestampHourCycle;
            var4 = var5.getSetting;
            var11 = var4.bind(var5)();
            var10 = 4;
            var2 = var2[var10];
            var2 = var3.bind(var1)(var2);
            var2 = var2.TimestampHourCycle;
            var2 = var2.AUTO;
            var9 = var11 !== var2;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.getCurrentConfig;
            var2 = {};
            var5 = 'intlTimeFormat';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var9 = var2.enable24HourPref;
case 2:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.intl;
            var2 = var2.formatConfig;
            var2 = var2.time;
            var8 = var3.bind(var4)(var2);
            var2 = var8.length;
            var7 = 0;
            var2 = var7 < var2;
            var6 = 'h12';
            var5 = 'h23';
            var4 = 'hour';
            var3 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var8[var7];
            var13 = var3 != var2;
            if(!var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var4 in var2;
case 6:
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var10];
            var13 = var14.bind(var1)(var13);
            var13 = var13.TimestampHourCycle;
            var13 = var13.H12;
            if(!(var11 !== var13)) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            if(!var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var10];
            var13 = var14.bind(var1)(var13);
            var13 = var13.TimestampHourCycle;
            var13 = var13.H23;
            if(!(var11 !== var13)) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var13 = delete var2.hourCycle;
            _fun0001_ip = 8; continue _fun0001;
case 15:
            var2['hourCycle'] = var5;
            _fun0001_ip = 8; continue _fun0001;
case 12:
            var2['hourCycle'] = var6;
case 8:
            var7 = var7 + 1;
            var2 = var8.length;
            if(var7 < var2) { _fun0001_ip = 5; continue _fun0001 }
case 4:
            return var1;
        }
    };
    var1 = function startOfDay(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = arguments[1];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = true;
case 16:
            var5 = typeof var1;
            var3 = 'string';
            var3 = var3 === var5;
            if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = 'number';
            var3 = var4 === var5;
case 18:
            if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = global;
            var4 = var4.Date;
            var3 = var1 instanceof var4;
case 20:
            var5 = var1;
            if(var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
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
case 22:
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
            if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var2 = var4.getTimezoneOffset;
            var4 = var2.bind(var4)();
            var2 = 60000;
            var2 = var2 * var4;
            var5 = var3 - var2;
case 24:
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
    var6 = function differenceInCalendarDays(arg1, arg2) {
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
    var _closure1_slot8 = var6;
    var5 = function dateFormat(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var10 = arg3;
            var2 = _closure1_slot11;
            var3 = undefined;
            var5 = var2.bind(var3)(var4);
            var2 = var5.locale;
            var9 = var2.bind(var5)();
            var5 = null;
            if(!(var5 == var10)) { _fun0003_ip = 26; continue _fun0003 }
case 21:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var6 = var2.TimestampHourCycle;
            var2 = var6.getSetting;
            var10 = var2.bind(var6)();
case 26:
            var2 = global;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var16 = '';
            var2 = ':';
            var15 = var9;
            var14 = var2;
            var13 = var8;
            var12 = var2;
            var11 = var10;
            var7 = var16[var7](var15, var14, var13, var12, var11, var10);
            var2 = _closure1_slot5;
            var2 = var2[var7];
            if(!(var5 == var2)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var6 = _closure1_slot5;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.bind(var3)(var8);
            var6[var7] = var5;
            var2 = var5;
case 27:
            var1 = _closure1_slot12;
            var1 = var1.bind(var3)(var4);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function dateStringToMoment(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = var3.length;
            var1 = 200;
            if(!(!(var2 >= var1))) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var1 = var1.bind(var2)(var3);
            return var1;
case 29:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var5 = 'Date string exceeds maximum length';
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function toMoment(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 9;
            var1 = var1[var6];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.isMoment;
            var5 = var1.bind(var5)(var4);
            var1 = var4;
            if(var5) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var1 = var2.bind(var3)(var4);
case 31:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function toDate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.isMoment;
            var2 = var1.bind(var2)(var3);
            var1 = var3;
            if(!var2) { _fun0006_ip = 33; continue _fun0006 }
case 32:
            var2 = var3.toDate;
            var1 = var2.bind(var3)();
case 33:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var7 = global;
    var15 = var7.Object;
    var14 = var15.defineProperty;
    var13 = {};
    var1 = true;
    var13['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var13);
    var1 = 0;
    var13 = var9[var1];
    var1 = undefined;
    var13 = var10.bind(var1)(var13);
    var14 = 1;
    var14 = var9[var14];
    var16 = var10.bind(var1)(var14);
    var14 = var16.prototype;
    var15 = Object.create(var14, {constructor: {value: var16}});
    var19 = 'DateUtils';
    var20 = var15;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot3 = var14;
    var14 = 86400000;
    var _closure1_slot4 = var14;
    var15 = var7.Object;
    var14 = var15.create;
    var7 = null;
    var7 = var14.bind(var15)(var7);
    var _closure1_slot5 = var7;
    var7 = var13.addChangeListener;
    var7 = var7.bind(var13)(var11);
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.bind(var1)(var11);
    var7 = 7;
    var11 = var9[var7];
    var14 = var10.bind(var1)(var11);
    var13 = var14.subscribe;
    var11 = 'USER_SETTINGS_PROTO_UPDATE';
    var11 = var13.bind(var14)(var11, var12);
    var7 = var9[var7];
    var11 = var10.bind(var1)(var7);
    var10 = var11.subscribe;
    var7 = 'CONNECTION_OPEN';
    var7 = var10.bind(var11)(var7, var12);
    var7 = new Array(4);
    var10 = {'key': 'days', 'millisecondsInUnit': 86400000};
    var7[0] = var10;
    var10 = {'key': 'hours', 'millisecondsInUnit': 3600000};
    var7[1] = var10;
    var10 = {'key': 'minutes', 'millisecondsInUnit': 60000};
    var7[2] = var10;
    var10 = {'key': 'seconds', 'millisecondsInUnit': 1000};
    var7[3] = var10;
    var _closure1_slot6 = var7;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/DateUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['differenceInCalendarDays'] = var6;
    var6 = function differenceInDays(arg1, arg2) {
        var2 = arg1;
        var3 = arg2;
        var1 = var2.getTime;
        var2 = var1.bind(var2)();
        var1 = var3.getTime;
        var1 = var1.bind(var3)();
        var2 = var2 - var1;
        var1 = _closure1_slot4;
        var1 = var2 / var1;
        return var1;
    };
    var3['differenceInDays'] = var6;
    var6 = function isSameHourMoment(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            if(!var1) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            var2 = var3.getHours;
            var3 = var2.bind(var3)();
            var2 = var4.getHours;
            var2 = var2.bind(var4)();
            var1 = var3 === var2;
case 34:
            return var1;
        }
    };
    var3['isSameHourMoment'] = var6;
    var6 = function isSameDay(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(!var1) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var2 = var3.getDate;
            var3 = var2.bind(var3)();
            var2 = var4.getDate;
            var2 = var2.bind(var4)();
            var1 = var3 === var2;
case 36:
            return var1;
        }
    };
    var3['isSameDay'] = var6;
    var6 = function isWithinInterval(arg1, arg2, arg3) {
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
    var3['isWithinInterval'] = var6;
    var3['dateFormat'] = var5;
    var5 = function calendarFormat(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var2 = arguments[1];
            var4 = arguments[2];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0009_ip = 38; continue _fun0009 }
case 30:
            var2 = false;
case 38:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 9;
            var9 = var8[var6];
            var10 = var7.bind(var3)(var9);
            var9 = var10.localeData;
            var10 = var9.bind(var10)();
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var9 = var6.bind(var3)();
            var8 = _closure1_slot8;
            var6 = _closure1_slot12;
            var7 = var6.bind(var3)(var5);
            var6 = var9.toDate;
            var6 = var6.bind(var9)();
            var7 = var8.bind(var3)(var7, var6);
            var6 = -1;
            if(!(!(var7 < var6))) { _fun0009_ip = 39; continue _fun0009 }
case 40:
            var6 = 0;
            var6 = var7 < var6;
            var8 = 'lastDay';
            if(var6) { _fun0009_ip = 41; continue _fun0009 }
case 22:
            var6 = 1;
            if(!(!(var7 < var6))) { _fun0009_ip = 42; continue _fun0009 }
case 43:
            var6 = 2;
            var7 = var7 < var6;
            var6 = 'sameElse';
            if(!var7) { _fun0009_ip = 44; continue _fun0009 }
case 45:
            var6 = 'nextDay';
case 44:
            var8 = var6;
            _fun0009_ip = 41; continue _fun0009;
case 42:
            var8 = 'sameDay';
            if(!var2) { _fun0009_ip = 41; continue _fun0009 }
case 46:
            var6 = _closure1_slot9;
            var2 = 'LT';
            var2 = var6.bind(var3)(var5, var2, var4);
            return var2;
case 41:
            var6 = _closure1_slot9;
            var7 = var10.calendar;
            var2 = _closure1_slot11;
            var2 = var2.bind(var3)(var5);
            var2 = var7.bind(var10)(var8, var2, var9);
            var2 = var6.bind(var3)(var5, var2, var4);
            return var2;
case 39:
            var2 = _closure1_slot9;
            var1 = 'L LT';
            var1 = var2.bind(var3)(var5, var1, var4);
            return var1;
        }
    };
    var3['calendarFormat'] = var5;
    var5 = function calendarFormatCompact(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var7 = var3[var1];
            var4 = undefined;
            var8 = var2.bind(var4)(var7);
            var7 = var8.localeData;
            var10 = var7.bind(var8)();
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.bind(var4)();
            var3 = _closure1_slot8;
            var1 = _closure1_slot12;
            var2 = var1.bind(var4)(var5);
            var1 = var9.toDate;
            var1 = var1.bind(var9)();
            var7 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot9;
            var2 = 'LT';
            var1 = 0;
            if(!(var1 !== var7)) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var1 = -1;
            if(!(var1 !== var7)) { _fun0010_ip = 49; continue _fun0010 }
case 50:
            var1 = -7;
            var7 = var7 > var1;
            var1 = 'L';
            if(!var7) { _fun0010_ip = 28; continue _fun0010 }
case 2:
            var1 = 'dddd';
case 28:
            _fun0010_ip = 51; continue _fun0010;
case 49:
            var8 = var10.calendar;
            var6 = _closure1_slot11;
            var7 = var6.bind(var4)(var5);
            var6 = 'lastDay';
            var1 = var8.bind(var10)(var6, var7, var9);
case 51:
            var2 = var1;
case 47:
            var1 = arg2;
            var1 = var3.bind(var4)(var5, var2, var1);
            return var1;
        }
    };
    var3['calendarFormatCompact'] = var5;
    var3['dateStringToMoment'] = var4;
    var4 = function accessibilityLabelCalendarFormat(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var12 = 9;
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
            if(var1) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var1 = 0;
            var7 = var13 < var1;
            var1 = 'lastDay';
            if(var7) { _fun0011_ip = 54; continue _fun0011 }
case 55:
            var7 = 1;
            var11 = var13 < var7;
            var7 = 'sameDay';
            if(var11) { _fun0011_ip = 56; continue _fun0011 }
case 28:
            var11 = 2;
            var13 = var13 < var11;
            var11 = var6;
            if(!var13) { _fun0011_ip = 57; continue _fun0011 }
case 44:
            var11 = 'nextDay';
case 57:
            var7 = var11;
case 56:
            var1 = var7;
case 54:
            var8 = var1;
case 52:
            var1 = 'LLL';
            if(!(var6 !== var8)) { _fun0011_ip = 58; continue _fun0011 }
case 59:
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
case 58:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['accessibilityLabelCalendarFormat'] = var4;
    var4 = function diffAsUnits(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var3 = arguments[2];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0012_ip = 60; continue _fun0012 }
case 38:
            var3 = false;
case 60:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var1 = {'days': 0, 'hours': 0, 'minutes': 0};
            var4 = 0;
            if(!var3) { _fun0012_ip = 37; continue _fun0012 }
case 61:
            var4 = 1;
case 37:
            var1['seconds'] = var4;
            _closure2_slot0 = var1;
            if(!(!(var6 > var7))) { _fun0012_ip = 59; continue _fun0012 }
case 62:
            if(!var3) { _fun0012_ip = 63; continue _fun0012 }
case 64:
            var3 = global;
            var4 = var3.Number;
            var8 = var4.bind(var5)(var6);
            var4 = 1200;
            var4 = var8 + var4;
            var3 = var3.Number;
            var3 = var3.bind(var5)(var7);
            if(!(!(var4 > var3))) { _fun0012_ip = 65; continue _fun0012 }
case 63:
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
case 65:
            return var1;
case 59:
            return var1;
        }
    };
    var3['diffAsUnits'] = var4;
    var4 = function unitsAsStrings(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var1 = var6.days;
            var3 = 0;
            if(!(!(var1 > var3))) { _fun0013_ip = 66; continue _fun0013 }
case 67:
            var1 = var6.hours;
            if(!(!(var1 > var3))) { _fun0013_ip = 22; continue _fun0013 }
case 68:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
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
            _fun0013_ip = 24; continue _fun0013;
case 22:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 6;
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
case 24:
            _fun0013_ip = 69; continue _fun0013;
case 66:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 6;
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
case 69:
            return var1;
        }
    };
    var3['unitsAsStrings'] = var4;
    var2 = function formatDateForDatetimeLocal(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var1 = '';
            if(var2) { _fun0014_ip = 61; continue _fun0014 }
case 70:
            var3 = _closure1_slot10;
            var2 = undefined;
            var4 = var3.bind(var2)(var4);
            var3 = var4.format;
            var2 = 'YYYY-MM-DDTHH:mm';
            var1 = var3.bind(var4)(var2);
case 61:
            return var1;
        }
    };
    var3['formatDateForDatetimeLocal'] = var2;
    return var1;
})();