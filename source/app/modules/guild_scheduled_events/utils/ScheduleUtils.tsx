// app/modules/guild_scheduled_events/utils/ScheduleUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var14;
    var11 = function getNextBucketedTime(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var1 = var3.minutes;
        var1 = var1.bind(var3)();
        var1 = var1 % var2;
        var4 = var2 - var1;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var5.bind(var2)(var1);
        var3 = var1.bind(var2)(var3);
        var2 = var3.add;
        var1 = 'minutes';
        var3 = var2.bind(var3)(var4, var1);
        var2 = var3.seconds;
        var1 = 0;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot17 = var11;
    var10 = function convertJSDayToRRuleDay(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var3 = var2.Weekday;
        var2 = _closure1_slot13;
        var1 = arg1;
        var5 = var2[var1];
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot18 = var10;
    var1 = function _getSchedule(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var5 = arg2;
            var6 = null;
            var2 = var6 != var9;
            var4 = undefined;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var7 = 5;
            var8 = var8[var7];
            var8 = var10.bind(var4)(var8);
            var8 = var8.bind(var4)(var9);
            var2['startDate'] = var8;
            var2['endDate'] = var4;
            var1 = var2;
            if(!(var6 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var5);
            var2['endDate'] = var3;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var9 = function getScheduleFromEvent(arg1) {
        var1 = arg1;
        var4 = _closure1_slot19;
        var3 = var1.scheduled_start_time;
        var2 = var1.scheduled_end_time;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot20 = var9;
    var8 = function areDatesIdentical(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = arg2;
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            if(!(var3 != var4)) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var1 = var2.isSame;
            var1 = var1.bind(var2)(var4);
            _fun0002_ip = 8; continue _fun0002;
case 5:
            var2 = var3 == var2;
            if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var3 == var4;
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot21 = var8;
    var7 = function getRRule(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.byWeekday;
            var4 = null;
            var1 = var4 != var1;
            var6 = null;
            if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var13 = var2.byWeekday;
            var1 = new Array(0);
            var12 = 0;
            var14 = var1;
            var3 = arraySpread(var14, var13, var12);
            var6 = var1;
case 11:
            var7 = var2.byNWeekday;
            var1 = var4 == var7;
            var10 = undefined;
            var5 = undefined;
            if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = var7.map;
            var1 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Weekday;
                var6 = var1.day;
                var5 = var1.n;
                var2 = var4.prototype;
                var2 = Object.create(var2, {constructor: {value: var4}});
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var5 = var3.bind(var7)(var1);
case 13:
            var9 = global;
            var7 = var9.Date;
            var14 = var2.start;
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var15 = var3;
            var1 = new var15[var7](var14, var13);
            var8 = var1 instanceof Object ? var1 : var3;
            var1 = var8.setMilliseconds;
            var7 = 0;
            var1 = var1.bind(var8)(var7);
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 3;
            var1 = var11[var1];
            var1 = var3.bind(var10)(var1);
            var3 = var1.RRule;
            var1 = {};
            var1['dtstart'] = var8;
            var8 = var2.end;
            var10 = var4 != var8;
            var8 = null;
            if(!var10) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var11 = var9.Date;
            var14 = var2.end;
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var15 = var10;
            var9 = new var15[var11](var14, var13);
            var8 = var9 instanceof Object ? var9 : var10;
case 15:
            var1['until'] = var8;
            var8 = var2.frequency;
            var1['freq'] = var8;
            var8 = var2.interval;
            var1['interval'] = var8;
            if(!(var4 != var6)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var5 = var6;
case 17:
            var1['byweekday'] = var5;
            var5 = var2.byMonth;
            var6 = var4 != var5;
            var5 = null;
            if(!var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var13 = var2.byMonth;
            var6 = new Array(0);
            var14 = var6;
            var12 = 0;
            var8 = arraySpread(var14, var13, var12);
            var5 = var6;
case 19:
            var1['bymonth'] = var5;
            var5 = var2.byMonthDay;
            var6 = var4 != var5;
            var5 = null;
            if(!var6) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var13 = var2.byMonthDay;
            var6 = new Array(0);
            var14 = var6;
            var12 = 0;
            var8 = arraySpread(var14, var13, var12);
            var5 = var6;
case 21:
            var1['bymonthday'] = var5;
            var5 = var2.byYearDay;
            var5 = var4 != var5;
            var4 = null;
            if(!var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var13 = var2.byYearDay;
            var5 = new Array(0);
            var14 = var5;
            var12 = 0;
            var6 = arraySpread(var14, var13, var12);
            var4 = var5;
case 23:
            var1['byyearday'] = var4;
            var2 = var2.count;
            var1['count'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var15 = var2;
            var14 = var1;
            var1 = new var15[var3](var14, var13);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot22 = var7;
    var6 = function getNextRecurrenceInEvent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.recurrence_rule;
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var3 = global;
            var4 = var3.Date;
            var5 = var2.scheduled_start_time;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var1 = var2 instanceof Object ? var2 : var3;
case 25:
            return var1;
        }
    };
    var _closure1_slot23 = var6;
    var5 = function getValidWeekdays(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = _closure1_slot18;
            var1 = var6.toDate;
            var3 = var1.bind(var6)();
            var1 = var3.getDay;
            var1 = var1.bind(var3)();
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var3 = var6.toDate;
            var6 = var3.bind(var6)();
            var3 = var6.getUTCDay;
            var3 = var3.bind(var6)();
            var4 = var5.bind(var4)(var3);
            var5 = var4.weekday;
            var3 = var1.weekday;
            var5 = var5 - var3;
            var3 = 0;
            if(!(!(var5 > var3))) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var4 = var4.weekday;
            var1 = var1.weekday;
            var1 = var4 - var1;
            if(!(!(var1 < var3))) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var1 = _closure1_slot7;
            _fun0005_ip = 31; continue _fun0005;
case 29:
            var1 = _closure1_slot8;
case 31:
            _fun0005_ip = 32; continue _fun0005;
case 27:
            var1 = _closure1_slot9;
case 32:
            return var1;
        }
    };
    var _closure1_slot24 = var5;
    var4 = function getValidWeekends(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var5 = _closure1_slot18;
            var1 = var6.toDate;
            var3 = var1.bind(var6)();
            var1 = var3.getDay;
            var1 = var1.bind(var3)();
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var3 = var6.toDate;
            var6 = var3.bind(var6)();
            var3 = var6.getUTCDay;
            var3 = var3.bind(var6)();
            var4 = var5.bind(var4)(var3);
            var5 = var4.weekday;
            var3 = var1.weekday;
            var5 = var5 - var3;
            var3 = 0;
            if(!(!(var5 > var3))) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var4 = var4.weekday;
            var1 = var1.weekday;
            var1 = var4 - var1;
            if(!(!(var1 < var3))) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var1 = _closure1_slot10;
            _fun0006_ip = 31; continue _fun0006;
case 29:
            var1 = _closure1_slot11;
case 31:
            _fun0006_ip = 32; continue _fun0006;
case 27:
            var1 = _closure1_slot12;
case 32:
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var12 = global;
    var18 = var12.Object;
    var17 = var18.defineProperty;
    var15 = {};
    var1 = true;
    var15['value'] = var1;
    var1 = '__esModule';
    var1 = var17.bind(var18)(var3, var1, var15);
    var1 = 0;
    var15 = var14[var1];
    var1 = undefined;
    var15 = var16.bind(var1)(var15);
    var _closure1_slot3 = var15;
    var15 = 1;
    var15 = var14[var15];
    var15 = var13.bind(var1)(var15);
    var15 = var15.RecurrenceOptions;
    var _closure1_slot4 = var15;
    var15 = 2;
    var15 = var14[var15];
    var15 = var13.bind(var1)(var15);
    var16 = var15.GuildScheduledEventEntityTypes;
    var _closure1_slot5 = var16;
    var15 = var15.GuildScheduledEventStatus;
    var _closure1_slot6 = var15;
    var16 = 3;
    var15 = var14[var16];
    var15 = var13.bind(var1)(var15);
    var15 = var15.RRule;
    var15 = var15.MO;
    var17 = var15.weekday;
    var15 = new Array(5);
    var15[0] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.TU;
    var17 = var17.weekday;
    var15[1] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.WE;
    var17 = var17.weekday;
    var15[2] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.TH;
    var17 = var17.weekday;
    var15[3] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.FR;
    var17 = var17.weekday;
    var15[4] = var17;
    var _closure1_slot7 = var15;
    var15 = var14[var16];
    var15 = var13.bind(var1)(var15);
    var15 = var15.RRule;
    var15 = var15.SU;
    var17 = var15.weekday;
    var15 = new Array(5);
    var15[0] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.MO;
    var17 = var17.weekday;
    var15[1] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.TU;
    var17 = var17.weekday;
    var15[2] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.WE;
    var17 = var17.weekday;
    var15[3] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.TH;
    var17 = var17.weekday;
    var15[4] = var17;
    var _closure1_slot8 = var15;
    var15 = var14[var16];
    var15 = var13.bind(var1)(var15);
    var15 = var15.RRule;
    var15 = var15.TU;
    var17 = var15.weekday;
    var15 = new Array(5);
    var15[0] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.WE;
    var17 = var17.weekday;
    var15[1] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.TH;
    var17 = var17.weekday;
    var15[2] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.FR;
    var17 = var17.weekday;
    var15[3] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.SA;
    var17 = var17.weekday;
    var15[4] = var17;
    var _closure1_slot9 = var15;
    var15 = var14[var16];
    var15 = var13.bind(var1)(var15);
    var15 = var15.RRule;
    var15 = var15.SA;
    var17 = var15.weekday;
    var15 = new Array(2);
    var15[0] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.SU;
    var17 = var17.weekday;
    var15[1] = var17;
    var _closure1_slot10 = var15;
    var15 = var14[var16];
    var15 = var13.bind(var1)(var15);
    var15 = var15.RRule;
    var15 = var15.FR;
    var17 = var15.weekday;
    var15 = new Array(2);
    var15[0] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.SA;
    var17 = var17.weekday;
    var15[1] = var17;
    var _closure1_slot11 = var15;
    var15 = var14[var16];
    var15 = var13.bind(var1)(var15);
    var15 = var15.RRule;
    var15 = var15.SU;
    var17 = var15.weekday;
    var15 = new Array(2);
    var15[0] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.MO;
    var17 = var17.weekday;
    var15[1] = var17;
    var _closure1_slot12 = var15;
    var15 = var14[var16];
    var15 = var13.bind(var1)(var15);
    var15 = var15.RRule;
    var15 = var15.SU;
    var17 = var15.weekday;
    var15 = new Array(7);
    var15[0] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.MO;
    var17 = var17.weekday;
    var15[1] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.TU;
    var17 = var17.weekday;
    var15[2] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.WE;
    var17 = var17.weekday;
    var15[3] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.TH;
    var17 = var17.weekday;
    var15[4] = var17;
    var17 = var14[var16];
    var17 = var13.bind(var1)(var17);
    var17 = var17.RRule;
    var17 = var17.FR;
    var17 = var17.weekday;
    var15[5] = var17;
    var16 = var14[var16];
    var16 = var13.bind(var1)(var16);
    var16 = var16.RRule;
    var16 = var16.SA;
    var16 = var16.weekday;
    var15[6] = var16;
    var _closure1_slot13 = var15;
    var16 = var12.Set;
    var12 = var16.prototype;
    var15 = Object.create(var12, {constructor: {value: var16}});
    var21 = [0, 6];
    var22 = var15;
    var12 = new var22[var16](var21, var20);
    var12 = var12 instanceof Object ? var12 : var15;
    var _closure1_slot14 = var12;
    var12 = function formatDatePreferShorter(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var7 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dateFormat;
            var1 = var4.get;
            var5 = 'years';
            var6 = var1.bind(var4)(var5);
            var1 = var7.get;
            var5 = var1.bind(var7)(var5);
            var1 = 'ddd MMM Do, YYYY · LT';
            if(!(var6 === var5)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var1 = 'ddd MMM Do · LT';
case 33:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var12;
    var12 = function formatDatePrefersRelativeTime(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 6;
            var1 = var1[var8];
            var3 = undefined;
            var9 = var6.bind(var3)(var1);
            var7 = var9.differenceInCalendarDays;
            var1 = var5.toDate;
            var6 = var1.bind(var5)();
            var1 = var4.toDate;
            var1 = var1.bind(var4)();
            var10 = var7.bind(var9)(var6, var1);
            var1 = 1;
            if(!(!(var10 > var1))) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var6 = 0;
            if(!(!(var10 < var6))) { _fun0008_ip = 35; continue _fun0008 }
case 13:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var7 = var7.bind(var3)(var6);
            var6 = var7.dateFormat;
            var8 = var5.localeData;
            var9 = var8.bind(var5)();
            var8 = var9.calendar;
            var10 = var10 < var1;
            var1 = 'nextDay';
            if(!var10) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var1 = 'sameDay';
case 37:
            var1 = var8.bind(var9)(var1, var5, var4);
            var1 = var6.bind(var7)(var5, var1);
            _fun0008_ip = 39; continue _fun0008;
case 35:
            var2 = _closure1_slot15;
            var1 = var2.bind(var3)(var5, var4);
case 39:
            return var1;
        }
    };
    var _closure1_slot16 = var12;
    var12 = 10;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/guild_scheduled_events/utils/ScheduleUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var12 = 365;
    var3['MAX_DAYS_AHEAD_AN_EVENT_CAN_START'] = var12;
    var12 = 366;
    var3['MAX_DAYS_AHEAD_AN_EVENT_CAN_END'] = var12;
    var12 = 4;
    var3['MAX_YEARS_AHEAD_RECURRING_EVENT'] = var12;
    var12 = function getRecurrenceOptions(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var1 = var3.toDate;
            var6 = var1.bind(var3)();
            var1 = global;
            var4 = var1.Math;
            var2 = var4.ceil;
            var1 = var6.getDate;
            var5 = var1.bind(var6)();
            var1 = 7;
            var1 = var5 / var1;
            var15 = var2.bind(var4)(var1);
            var2 = var3.format;
            var1 = 'dddd';
            var14 = var2.bind(var3)(var1);
            var2 = {};
            var3 = _closure1_slot4;
            var1 = var3.NONE;
            var2['value'] = var1;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 4;
            var1 = var11[var9];
            var8 = undefined;
            var1 = var12.bind(var8)(var1);
            var7 = var1.intl;
            var5 = var7.string;
            var1 = var11[var9];
            var1 = var12.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.0bK0Bw;
            var1 = var5.bind(var7)(var1);
            var2['label'] = var1;
            var1 = new Array(5);
            var1[0] = var2;
            var2 = {};
            var5 = var3.WEEKLY;
            var2['value'] = var5;
            var5 = var11[var9];
            var5 = var12.bind(var8)(var5);
            var13 = var5.intl;
            var10 = var13.formatToPlainString;
            var5 = var11[var9];
            var5 = var12.bind(var8)(var5);
            var5 = var5.t;
            var7 = var5.B8/yfn;
            var5 = {};
            var5['weekday'] = var14;
            var5 = var10.bind(var13)(var7, var5);
            var2['label'] = var5;
            var1[1] = var2;
            var2 = {};
            var5 = var3.BIWEEKLY;
            var2['value'] = var5;
            var5 = var11[var9];
            var5 = var12.bind(var8)(var5);
            var13 = var5.intl;
            var10 = var13.formatToPlainString;
            var5 = var11[var9];
            var5 = var12.bind(var8)(var5);
            var5 = var5.t;
            var7 = var5.z+aIub;
            var5 = {};
            var5['weekday'] = var14;
            var5 = var10.bind(var13)(var7, var5);
            var2['label'] = var5;
            var1[2] = var2;
            var2 = {};
            var5 = var3.MONTHLY;
            var2['value'] = var5;
            var5 = var11[var9];
            var5 = var12.bind(var8)(var5);
            var13 = var5.intl;
            var10 = var13.formatToPlainString;
            var5 = var11[var9];
            var5 = var12.bind(var8)(var5);
            var5 = var5.t;
            var7 = var5.mjOEBg;
            var5 = {};
            var5['nth'] = var15;
            var5['weekday'] = var14;
            var5 = var10.bind(var13)(var7, var5);
            var2['label'] = var5;
            var1[3] = var2;
            var2 = {};
            var3 = var3.YEARLY;
            var2['value'] = var3;
            var3 = var11[var9];
            var3 = var12.bind(var8)(var3);
            var10 = var3.intl;
            var7 = var10.formatToPlainString;
            var3 = var11[var9];
            var3 = var12.bind(var8)(var3);
            var3 = var3.t;
            var5 = var3.5DFcVl;
            var3 = {};
            var13 = var6.toLocaleString;
            var11 = var11[var9];
            var11 = var12.bind(var8)(var11);
            var11 = var11.intl;
            var12 = var11.currentLocale;
            var11 = {'month': 'short', 'day': '2-digit'};
            var11 = var13.bind(var6)(var12, var11);
            var3['date'] = var11;
            var3 = var7.bind(var10)(var5, var3);
            var2['label'] = var3;
            var1[4] = var2;
            var5 = _closure1_slot14;
            var3 = var5.has;
            var2 = var6.getDay;
            var2 = var2.bind(var6)();
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0009_ip = 40; continue _fun0009 }
case 41:
            var3 = var1.push;
            var2 = {};
            var5 = _closure1_slot4;
            var5 = var5.WEEKDAY_ONLY;
            var2['value'] = var5;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var9];
            var6 = var10.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var9];
            var5 = var10.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.jYR/MT;
            var5 = var6.bind(var7)(var5);
            var2['label'] = var5;
            var2 = var3.bind(var1)(var2);
            _fun0009_ip = 42; continue _fun0009;
case 40:
            var3 = _closure1_slot3;
            var2 = var3.getCurrentUser;
            var5 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            var3 = var5.isStaff;
            var2 = var3.bind(var5)();
case 43:
            if(!var2) { _fun0009_ip = 42; continue _fun0009 }
case 45:
            var3 = var1.push;
            var2 = {};
            var5 = _closure1_slot4;
            var5 = var5.WEEKEND_ONLY;
            var2['value'] = var5;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = var4[var9];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var4[var9];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.hRpynZ;
            var4 = var5.bind(var6)(var4);
            var2['label'] = var4;
            var2 = var3.bind(var1)(var2);
case 42:
            return var1;
        }
    };
    var3['getRecurrenceOptions'] = var12;
    var12 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var3 = var1.bind(var2)();
            var2 = var3.add;
            var4 = 1;
            var1 = 'hour';
            var3 = var2.bind(var3)(var4, var1);
            var1 = var3.hour;
            var1 = var1.bind(var3)();
            var2 = var3.minutes;
            var6 = var2.bind(var3)();
            var5 = 30;
            var2 = var1;
            if(!(var6 >= var5)) { _fun0010_ip = 46; continue _fun0010 }
case 33:
            var2 = var1 + var4;
case 46:
            var1 = var3.hour;
            var2 = var1.bind(var3)(var2);
            var1 = var2.minutes;
            var3 = 0;
            var2 = var1.bind(var2)(var3);
            var1 = var2.seconds;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getInitialEventStartDate'] = var12;
    var12 = function getInitialEventEndDate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot17;
            var2 = null;
            if(!(var2 == var3)) { _fun0011_ip = 47; continue _fun0011 }
case 7:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var5 = var2.bind(var5)();
            _fun0011_ip = 34; continue _fun0011;
case 47:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var6.bind(var2)(var1);
            var5 = var1.bind(var2)(var3);
case 34:
            var3 = var5.add;
            var2 = 1;
            var1 = 'hour';
            var3 = var3.bind(var5)(var2, var1);
            var2 = undefined;
            var1 = 60;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        }
    };
    var3['getInitialEventEndDate'] = var12;
    var3['getNextBucketedTime'] = var11;
    var11 = function getEventTimeData(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg2;
            var5 = arg3;
            var6 = null;
            if(!(var6 == var5)) { _fun0012_ip = 48; continue _fun0012 }
case 6:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var5 = var2.bind(var3)();
case 48:
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 5;
            var4 = var3[var7];
            var3 = undefined;
            var8 = var8.bind(var3)(var4);
            var4 = arg1;
            var4 = var8.bind(var3)(var4);
            var8 = var6 != var1;
            var11 = undefined;
            if(!var8) { _fun0012_ip = 49; continue _fun0012 }
case 50:
            var8 = '';
            var11 = undefined;
            if(!(var8 !== var1)) { _fun0012_ip = 49; continue _fun0012 }
case 51:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var3)(var8);
            var11 = var8.bind(var3)(var1);
case 49:
            var8 = var6 != var1;
            if(!var8) { _fun0012_ip = 52; continue _fun0012 }
case 53:
            var9 = var4.isSame;
            var1 = 'day';
            var8 = var9.bind(var4)(var11, var1);
case 52:
            var1 = {};
            var9 = _closure1_slot16;
            var9 = var9.bind(var3)(var4, var5);
            var1['startDateTimeString'] = var9;
            var9 = var6 != var11;
            var6 = undefined;
            if(!var9) { _fun0012_ip = 54; continue _fun0012 }
case 55:
            if(var8) { _fun0012_ip = 56; continue _fun0012 }
case 57:
            var8 = _closure1_slot15;
            var8 = var8.bind(var3)(var11, var5);
            _fun0012_ip = 58; continue _fun0012;
case 56:
            var10 = var11.format;
            var9 = 'LT';
            var8 = var10.bind(var11)(var9);
case 58:
            var6 = var8;
case 54:
            var1['endDateTimeString'] = var6;
            var6 = var4 <= var5;
            var1['currentOrPastEvent'] = var6;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var8 = var2[var7];
            var8 = var6.bind(var3)(var8);
            var11 = var8.bind(var3)();
            var10 = var11.add;
            var9 = 1;
            var8 = 'hour';
            var8 = var10.bind(var11)(var9, var8);
            var8 = var4 <= var8;
            var1['upcomingEvent'] = var8;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var7 = var2.bind(var3)();
            var6 = var7.add;
            var3 = 15;
            var2 = 'minute';
            var2 = var6.bind(var7)(var3, var2);
            var2 = var4 <= var2;
            var1['withinStartWindow'] = var2;
            var3 = var4.diff;
            var2 = 'minutes';
            var2 = var3.bind(var4)(var5, var2);
            var1['diffMinutes'] = var2;
            return var1;
        }
    };
    var3['getEventTimeData'] = var11;
    var3['convertJSDayToRRuleDay'] = var10;
    var10 = function getBaseScheduleForRecurrence(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = _closure1_slot20;
            var2 = undefined;
            var1 = arg2;
            var1 = var4.bind(var2)(var1);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var4 = var5.bind(var2)(var3);
            var3 = 7;
            var3 = var6[var3];
            var6 = var5.bind(var2)(var3);
            var5 = var6.extractTimestamp;
            var3 = arg1;
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var2)(var3);
            var5 = null;
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0013_ip = 59; continue _fun0013 }
case 60:
            var4 = var1.endDate;
case 59:
            var4 = var5 != var4;
            var2 = undefined;
            if(!var4) { _fun0013_ip = 61; continue _fun0013 }
case 62:
            var4 = var3.clone;
            var5 = var4.bind(var3)();
            var4 = var5.add;
            var7 = var1.endDate;
            var6 = var7.diff;
            var1 = var1.startDate;
            var1 = var6.bind(var7)(var1);
            var2 = var4.bind(var5)(var1);
case 61:
            var1 = {};
            var1['startDate'] = var3;
            var1['endDate'] = var2;
            return var1;
        }
    };
    var3['getBaseScheduleForRecurrence'] = var10;
    var10 = function getScheduleForRecurrenceWithException(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = null;
            if(!(var3 != var5)) { _fun0014_ip = 52; continue _fun0014 }
case 63:
            var6 = var5.scheduled_end_time;
            if(!(var3 == var6)) { _fun0014_ip = 64; continue _fun0014 }
case 65:
            var6 = var1.endDate;
case 64:
            var2 = {};
            var4 = var5.scheduled_start_time;
            if(!(var3 == var4)) { _fun0014_ip = 66; continue _fun0014 }
case 8:
            var4 = var1.startDate;
            _fun0014_ip = 67; continue _fun0014;
case 66:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var7 = 5;
            var7 = var8[var7];
            var8 = undefined;
            var7 = var9.bind(var8)(var7);
            var5 = var5.scheduled_start_time;
            var4 = var7.bind(var8)(var5);
case 67:
            var2['startDate'] = var4;
            var4 = var3 != var6;
            var5 = undefined;
            var3 = undefined;
            if(!var4) { _fun0014_ip = 68; continue _fun0014 }
case 69:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 5;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var3 = var4.bind(var5)(var6);
case 68:
            var2['endDate'] = var3;
            return var2;
case 52:
            return var1;
        }
    };
    var3['getScheduleForRecurrenceWithException'] = var10;
    var10 = function getScheduleFromEventData(arg1) {
        var1 = arg1;
        var4 = _closure1_slot19;
        var3 = var1.scheduledStartTime;
        var2 = var1.scheduledEndTime;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['getScheduleFromEventData'] = var10;
    var3['getScheduleFromEvent'] = var9;
    var9 = function hasValidSchedule(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.startDate;
            var6 = var1.endDate;
            var5 = null;
            var1 = var5 != var3;
            if(!var1) { _fun0015_ip = 70; continue _fun0015 }
case 71:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var7 = undefined;
            var2 = var8.bind(var7)(var2);
            var2 = var2.bind(var7)();
            var7 = var3 < var2;
            var2 = !var7;
            if(var7) { _fun0015_ip = 29; continue _fun0015 }
case 72:
            var7 = var5 != var6;
            if(!var7) { _fun0015_ip = 73; continue _fun0015 }
case 36:
            var7 = var6 < var3;
case 73:
            var3 = !var7;
            if(var7) { _fun0015_ip = 74; continue _fun0015 }
case 75:
            var4 = _closure1_slot5;
            var7 = var4.EXTERNAL;
            var4 = arg2;
            var4 = var4 !== var7;
            if(var4) { _fun0015_ip = 30; continue _fun0015 }
case 76:
            var4 = var5 != var6;
case 30:
            var3 = var4;
case 74:
            var2 = var3;
case 29:
            var1 = var2;
case 70:
            return var1;
        }
    };
    var3['hasValidSchedule'] = var9;
    var3['areDatesIdentical'] = var8;
    var8 = function areSchedulesIdentical(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var4 = arg2;
            var3 = null;
            if(!(var3 != var2)) { _fun0016_ip = 36; continue _fun0016 }
case 6:
            if(!(var3 != var4)) { _fun0016_ip = 36; continue _fun0016 }
case 7:
            var7 = _closure1_slot21;
            var6 = var2.startDate;
            var1 = var4.startDate;
            var8 = undefined;
            var1 = var7.bind(var8)(var6, var1);
            if(!var1) { _fun0016_ip = 77; continue _fun0016 }
case 78:
            var7 = _closure1_slot21;
            var6 = var2.endDate;
            var5 = var4.endDate;
            var1 = var7.bind(var8)(var6, var5);
case 77:
            _fun0016_ip = 28; continue _fun0016;
case 36:
            var2 = var3 == var2;
            if(!var2) { _fun0016_ip = 46; continue _fun0016 }
case 33:
            var2 = var3 == var4;
case 46:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['areSchedulesIdentical'] = var8;
    var3['getRRule'] = var7;
    var7 = function generateNextRecurrences(arg1, arg2, arg3) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var9 = arg2;
            var5 = arg3;
            var1 = arguments[3];
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0017_ip = 79; continue _fun0017 }
case 71:
            var1 = false;
case 79:
            var4 = global;
            var6 = var4.Date;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var15 = var7;
            var6 = new var15[var6](var14);
            var6 = var6 instanceof Object ? var6 : var7;
            var8 = var5;
            if(!(!(var8 > var6))) { _fun0017_ip = 67; continue _fun0017 }
case 80:
            var6 = var4.Date;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var15 = var7;
            var6 = new var15[var6](var14);
            var8 = var6 instanceof Object ? var6 : var7;
case 67:
            var4 = var4.Date;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var15 = var6;
            var4 = new var15[var4](var14);
            var7 = var4 instanceof Object ? var4 : var6;
            var6 = var7.setFullYear;
            var4 = var7.getFullYear;
            var10 = var4.bind(var7)();
            var4 = 4;
            var4 = var10 + var4;
            var4 = var6.bind(var7)(var4);
            var6 = var9.between;
            var12 = true;
            var11 = function(arg1, arg2) {
                var2 = _closure2_slot0;
                var1 = 1;
                var2 = var2 + var1;
                var1 = arg2;
                var1 = var1 < var2;
                return var1;
            };
            var15 = var9;
            var14 = var8;
            var13 = var7;
            var4 = var15[var6](var14, var13, var12, var11, var10);
            if(!var1) { _fun0017_ip = 81; continue _fun0017 }
case 82:
            var2 = var4.length;
            var1 = 0;
            if(!(var2 > var1)) { _fun0017_ip = 81; continue _fun0017 }
case 83:
            var2 = var5.getTime;
            var2 = var2.bind(var5)();
            var5 = var4[var1];
            var1 = var5.getTime;
            var1 = var1.bind(var5)();
            if(!(var2 !== var1)) { _fun0017_ip = 84; continue _fun0017 }
case 81:
            var2 = var4.slice;
            var1 = 0;
            var1 = var2.bind(var4)(var1, var3);
            _fun0017_ip = 17; continue _fun0017;
case 84:
            var3 = var4.slice;
            var2 = 1;
            var1 = var3.bind(var4)(var2);
case 17:
            return var1;
        }
    };
    var3['generateNextRecurrences'] = var7;
    var3['getNextRecurrenceInEvent'] = var6;
    var6 = function getNextRecurrenceIdInEvent(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0018_ip = 85; continue _fun0018 }
case 6:
            var2 = _closure1_slot23;
            var8 = undefined;
            var6 = var2.bind(var8)(var4);
            var4 = var1 != var6;
            var2 = null;
            if(!var4) { _fun0018_ip = 86; continue _fun0018 }
case 87:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var5 = var7.bind(var8)(var3);
            var4 = var5.fromTimestamp;
            var3 = global;
            var11 = var3.Math;
            var10 = var11.floor;
            var3 = var6.getTime;
            var12 = var3.bind(var6)();
            var3 = 8;
            var6 = var9[var3];
            var6 = var7.bind(var8)(var6);
            var6 = var6.Millis;
            var6 = var6.SECOND;
            var6 = var12 / var6;
            var6 = var10.bind(var11)(var6);
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.Millis;
            var3 = var3.SECOND;
            var3 = var6 * var3;
            var2 = var4.bind(var5)(var3);
case 86:
            return var2;
case 85:
            return var1;
        }
    };
    var3['getNextRecurrenceIdInEvent'] = var6;
    var6 = function isValidRecurrence(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var1 = null;
            if(!(var1 != var8)) { _fun0019_ip = 88; continue _fun0019 }
case 63:
            if(!(var1 != var4)) { _fun0019_ip = 88; continue _fun0019 }
case 89:
            var3 = global;
            var5 = var3.Date;
            var9 = var4.start;
            var2 = var5.prototype;
            var2 = Object.create(var2, {constructor: {value: var5}});
            var10 = var2;
            var1 = new var10[var5](var9, var8);
            var2 = var1 instanceof Object ? var1 : var2;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 7;
            var5 = var6[var5];
            var6 = undefined;
            var7 = var7.bind(var6)(var5);
            var5 = var7.extractTimestamp;
            var9 = var5.bind(var7)(var8);
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var10 = var5;
            var3 = new var10[var3](var9, var8);
            var3 = var3 instanceof Object ? var3 : var5;
            var5 = var2.getUTCHours;
            var7 = var5.bind(var2)();
            var5 = var3.getUTCHours;
            var5 = var5.bind(var3)();
            if(!(var7 === var5)) { _fun0019_ip = 90; continue _fun0019 }
case 91:
            var5 = var2.getUTCMinutes;
            var7 = var5.bind(var2)();
            var5 = var3.getUTCMinutes;
            var5 = var5.bind(var3)();
            if(!(var7 === var5)) { _fun0019_ip = 90; continue _fun0019 }
case 92:
            var5 = var2.getUTCSeconds;
            var7 = var5.bind(var2)();
            var5 = var3.getUTCSeconds;
            var5 = var5.bind(var3)();
            if(!(var7 === var5)) { _fun0019_ip = 90; continue _fun0019 }
case 93:
            var4 = var4.frequency;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 3;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.RRule;
            var5 = var5.WEEKLY;
            if(!(var5 !== var4)) { _fun0019_ip = 94; continue _fun0019 }
case 95:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.RRule;
            var1 = var1.YEARLY;
            if(!(var1 !== var4)) { _fun0019_ip = 96; continue _fun0019 }
case 97:
            var1 = true;
            return var1;
case 96:
            var1 = var2.getUTCDate;
            var4 = var1.bind(var2)();
            var1 = var3.getUTCDate;
            var1 = var1.bind(var3)();
            var1 = var4 === var1;
            return var1;
case 94:
            var1 = var2.getUTCDay;
            var2 = var1.bind(var2)();
            var1 = var3.getUTCDay;
            var1 = var1.bind(var3)();
            var1 = var2 === var1;
            return var1;
case 90:
            var1 = false;
            return var1;
case 88:
            var1 = false;
            return var1;
        }
    };
    var3['isValidRecurrence'] = var6;
    var3['getValidWeekdays'] = var5;
    var3['getValidWeekends'] = var4;
    var4 = function recurrenceOptionToRecurrenceRule(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var10 = arg1;
            var2 = arg2;
            var1 = _closure1_slot24;
            var11 = undefined;
            var5 = var1.bind(var11)(var2);
            var1 = _closure1_slot25;
            var6 = var1.bind(var11)(var2);
            var4 = _closure1_slot18;
            var1 = var2.toDate;
            var7 = var1.bind(var2)();
            var1 = var7.getUTCDay;
            var1 = var1.bind(var7)();
            var9 = var4.bind(var11)(var1);
            var1 = global;
            var7 = var1.Math;
            var4 = var7.ceil;
            var1 = var2.toDate;
            var8 = var1.bind(var2)();
            var1 = var8.getUTCDate;
            var8 = var1.bind(var8)();
            var1 = 7;
            var1 = var8 / var1;
            var7 = var4.bind(var7)(var1);
            var1 = var2.toDate;
            var8 = var1.bind(var2)();
            var2 = var8.setMilliseconds;
            var1 = 0;
            var1 = var2.bind(var8)(var1);
            var1 = _closure1_slot4;
            var4 = var1.NONE;
            var1 = null;
            var2 = null;
            if(!(var4 !== var10)) { _fun0020_ip = 98; continue _fun0020 }
case 86:
            var4 = _closure1_slot4;
            var4 = var4.WEEKLY;
            if(!(var4 !== var10)) { _fun0020_ip = 99; continue _fun0020 }
case 100:
            var4 = _closure1_slot4;
            var4 = var4.BIWEEKLY;
            if(!(var4 !== var10)) { _fun0020_ip = 101; continue _fun0020 }
case 102:
            var4 = _closure1_slot4;
            var4 = var4.MONTHLY;
            if(!(var4 !== var10)) { _fun0020_ip = 103; continue _fun0020 }
case 104:
            var4 = _closure1_slot4;
            var4 = var4.YEARLY;
            if(!(var4 !== var10)) { _fun0020_ip = 105; continue _fun0020 }
case 106:
            var4 = _closure1_slot4;
            var4 = var4.WEEKDAY_ONLY;
            if(!(var4 !== var10)) { _fun0020_ip = 24; continue _fun0020 }
case 107:
            var4 = _closure1_slot4;
            var4 = var4.WEEKEND_ONLY;
            var2 = undefined;
            if(!(var4 === var10)) { _fun0020_ip = 98; continue _fun0020 }
case 108:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 3;
            var4 = var14[var12];
            var4 = var13.bind(var11)(var4);
            var10 = var4.RRule;
            var4 = {};
            var4['dtstart'] = var8;
            var12 = var14[var12];
            var12 = var13.bind(var11)(var12);
            var12 = var12.RRule;
            var12 = var12.DAILY;
            var4['freq'] = var12;
            var4['byweekday'] = var6;
            var6 = var10.prototype;
            var6 = Object.create(var6, {constructor: {value: var10}});
            var17 = var6;
            var16 = var4;
            var4 = new var17[var10](var16, var15);
            var2 = var4 instanceof Object ? var4 : var6;
            _fun0020_ip = 98; continue _fun0020;
case 24:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 3;
            var4 = var13[var10];
            var4 = var12.bind(var11)(var4);
            var6 = var4.RRule;
            var4 = {};
            var4['dtstart'] = var8;
            var10 = var13[var10];
            var10 = var12.bind(var11)(var10);
            var10 = var10.RRule;
            var10 = var10.DAILY;
            var4['freq'] = var10;
            var4['byweekday'] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var17 = var5;
            var16 = var4;
            var4 = new var17[var6](var16, var15);
            var2 = var4 instanceof Object ? var4 : var5;
            _fun0020_ip = 98; continue _fun0020;
case 105:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 3;
            var4 = var12[var5];
            var4 = var10.bind(var11)(var4);
            var6 = var4.RRule;
            var4 = {};
            var4['dtstart'] = var8;
            var5 = var12[var5];
            var5 = var10.bind(var11)(var5);
            var5 = var5.RRule;
            var5 = var5.YEARLY;
            var4['freq'] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var17 = var5;
            var16 = var4;
            var4 = new var17[var6](var16, var15);
            var2 = var4 instanceof Object ? var4 : var5;
            _fun0020_ip = 98; continue _fun0020;
case 103:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 3;
            var4 = var12[var5];
            var4 = var10.bind(var11)(var4);
            var6 = var4.RRule;
            var4 = {};
            var4['dtstart'] = var8;
            var5 = var12[var5];
            var5 = var10.bind(var11)(var5);
            var5 = var5.RRule;
            var5 = var5.MONTHLY;
            var4['freq'] = var5;
            var5 = var9.nth;
            var7 = var5.bind(var9)(var7);
            var5 = new Array(1);
            var5[0] = var7;
            var4['byweekday'] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var17 = var5;
            var16 = var4;
            var4 = new var17[var6](var16, var15);
            var2 = var4 instanceof Object ? var4 : var5;
            _fun0020_ip = 98; continue _fun0020;
case 101:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
            var4 = var9[var5];
            var4 = var7.bind(var11)(var4);
            var6 = var4.RRule;
            var4 = {};
            var4['dtstart'] = var8;
            var5 = var9[var5];
            var5 = var7.bind(var11)(var5);
            var5 = var5.RRule;
            var5 = var5.WEEKLY;
            var4['freq'] = var5;
            var5 = 2;
            var4['interval'] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var17 = var5;
            var16 = var4;
            var4 = new var17[var6](var16, var15);
            var2 = var4 instanceof Object ? var4 : var5;
            _fun0020_ip = 98; continue _fun0020;
case 99:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var3 = var7[var4];
            var3 = var6.bind(var11)(var3);
            var5 = var3.RRule;
            var3 = {};
            var3['dtstart'] = var8;
            var4 = var7[var4];
            var4 = var6.bind(var11)(var4);
            var4 = var4.RRule;
            var4 = var4.WEEKLY;
            var3['freq'] = var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var17 = var4;
            var16 = var3;
            var3 = new var17[var5](var16, var15);
            var2 = var3 instanceof Object ? var3 : var4;
case 98:
            if(!(var1 != var2)) { _fun0020_ip = 109; continue _fun0020 }
case 110:
            var2 = var2.options;
            var14 = var2.dtstart;
            var13 = var2.until;
            var10 = var2.freq;
            var9 = var2.interval;
            var8 = var2.byweekday;
            var15 = var2.bynweekday;
            var6 = var2.bymonth;
            var5 = var2.bymonthday;
            var4 = var2.byyearday;
            var3 = var2.count;
            var2 = var1 == var15;
            var7 = undefined;
            if(var2) { _fun0020_ip = 111; continue _fun0020 }
case 112:
            var12 = var15.map;
            var2 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var2 = 1;
                var2 = var3[var2];
                var1['n'] = var2;
                var2 = 0;
                var2 = var3[var2];
                var1['day'] = var2;
                return var1;
            };
            var7 = var12.bind(var15)(var2);
case 111:
            var2 = {};
            var12 = var14.toISOString;
            var12 = var12.bind(var14)();
            var2['start'] = var12;
            var12 = var1 == var13;
            var11 = undefined;
            if(var12) { _fun0020_ip = 113; continue _fun0020 }
case 114:
            var12 = var13.toISOString;
            var11 = var12.bind(var13)();
case 113:
            var2['end'] = var11;
            var2['frequency'] = var10;
            var2['interval'] = var9;
            var2['byWeekday'] = var8;
            var2['byNWeekday'] = var7;
            var2['byMonth'] = var6;
            var2['byMonthDay'] = var5;
            var2['byYearDay'] = var4;
            var2['count'] = var3;
            return var2;
case 109:
            return var1;
        }
    };
    var3['recurrenceOptionToRecurrenceRule'] = var4;
    var4 = function recurrenceRuleToOption(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var8 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0021_ip = 115; continue _fun0021 }
case 63:
            var1 = _closure1_slot22;
            var7 = undefined;
            var1 = var1.bind(var7)(var3);
            var3 = var1.options;
            var4 = var3.freq;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 3;
            var3 = var3[var6];
            var3 = var5.bind(var7)(var3);
            var3 = var3.RRule;
            var3 = var3.WEEKLY;
            if(!(var3 !== var4)) { _fun0021_ip = 116; continue _fun0021 }
case 60:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var7)(var3);
            var3 = var3.RRule;
            var3 = var3.YEARLY;
            if(!(var3 !== var4)) { _fun0021_ip = 117; continue _fun0021 }
case 49:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var7)(var3);
            var3 = var3.RRule;
            var3 = var3.MONTHLY;
            if(!(var3 !== var4)) { _fun0021_ip = 118; continue _fun0021 }
case 119:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var7)(var3);
            var3 = var3.RRule;
            var3 = var3.DAILY;
            if(!(var3 !== var4)) { _fun0021_ip = 54; continue _fun0021 }
case 120:
            var3 = _closure1_slot4;
            var3 = var3.NONE;
            return var3;
case 54:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 9;
            var3 = var3[var5];
            var9 = var4.bind(var7)(var3);
            var6 = var9.isEqual;
            var3 = var1.options;
            var4 = var3.byweekday;
            var3 = _closure1_slot24;
            var3 = var3.bind(var7)(var8);
            var3 = var6.bind(var9)(var4, var3);
            if(var3) { _fun0021_ip = 121; continue _fun0021 }
case 122:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var6 = var4.bind(var7)(var3);
            var5 = var6.isEqual;
            var3 = var1.options;
            var4 = var3.byweekday;
            var3 = _closure1_slot25;
            var3 = var3.bind(var7)(var8);
            var3 = var5.bind(var6)(var4, var3);
            var4 = _closure1_slot4;
            if(var3) { _fun0021_ip = 123; continue _fun0021 }
case 124:
            var3 = var4.NONE;
            _fun0021_ip = 21; continue _fun0021;
case 123:
            var3 = var4.WEEKEND_ONLY;
case 21:
            _fun0021_ip = 88; continue _fun0021;
case 121:
            var4 = _closure1_slot4;
            var3 = var4.WEEKDAY_ONLY;
case 88:
            return var3;
case 118:
            var3 = _closure1_slot4;
            var3 = var3.MONTHLY;
            return var3;
case 117:
            var3 = _closure1_slot4;
            var3 = var3.YEARLY;
            return var3;
case 116:
            var3 = var1.options;
            var4 = var3.interval;
            var3 = 1;
            if(!(!(var4 < var3))) { _fun0021_ip = 125; continue _fun0021 }
case 126:
            var4 = var1.options;
            var5 = var4.interval;
            var4 = 2;
            if(!(!(var5 > var4))) { _fun0021_ip = 125; continue _fun0021 }
case 127:
            var1 = var1.options;
            var1 = var1.interval;
            if(!(var3 !== var1)) { _fun0021_ip = 128; continue _fun0021 }
case 129:
            var1 = _closure1_slot4;
            var1 = var1.BIWEEKLY;
            _fun0021_ip = 130; continue _fun0021;
case 128:
            var3 = _closure1_slot4;
            var1 = var3.WEEKLY;
case 130:
            _fun0021_ip = 131; continue _fun0021;
case 125:
            var2 = _closure1_slot4;
            var1 = var2.NONE;
case 131:
            return var1;
case 115:
            var1 = _closure1_slot4;
            var1 = var1.NONE;
            return var1;
        }
    };
    var3['recurrenceRuleToOption'] = var4;
    var4 = function hasScheduleChanges(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = null;
            var1 = var1 == var3;
            var6 = undefined;
            var4 = undefined;
            if(var1) { _fun0022_ip = 65; continue _fun0022 }
case 3:
            var4 = var3.scheduled_start_time;
case 65:
            var1 = var2.scheduledStartTime;
            var1 = var4 !== var1;
            if(var1) { _fun0022_ip = 132; continue _fun0022 }
case 133:
            var5 = var3.scheduled_end_time;
            var4 = var2.scheduledEndTime;
            var1 = var5 !== var4;
case 132:
            if(var1) { _fun0022_ip = 74; continue _fun0022 }
case 134:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isEqual;
            var3 = var3.recurrence_rule;
            var2 = var2.recurrenceRule;
            var2 = var4.bind(var5)(var3, var2);
            var1 = !var2;
case 74:
            return var1;
        }
    };
    var3['hasScheduleChanges'] = var4;
    var2 = function getRecurrenceStatus(arg1, arg2, arg3) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0023_ip = 26; continue _fun0023 }
case 135:
            var3 = var2.is_canceled;
            if(var3) { _fun0023_ip = 136; continue _fun0023 }
case 26:
            var4 = arg2;
            var3 = arg3;
            if(!(!(var4 < var3))) { _fun0023_ip = 25; continue _fun0023 }
case 137:
            var2 = var1 != var2;
            var1 = null;
            if(!var2) { _fun0023_ip = 138; continue _fun0023 }
case 139:
            var2 = _closure1_slot6;
            var1 = var2.SCHEDULED;
case 138:
            _fun0023_ip = 140; continue _fun0023;
case 25:
            var2 = _closure1_slot6;
            var1 = var2.COMPLETED;
case 140:
            _fun0023_ip = 75; continue _fun0023;
case 136:
            var2 = _closure1_slot6;
            var1 = var2.CANCELED;
case 75:
            return var1;
        }
    };
    var3['getRecurrenceStatus'] = var2;
    return var1;
})();