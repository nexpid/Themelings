// app/modules/content_inventory/utils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var15;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var14;
    var8 = function getTrait(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg1;
        var3 = var2.traits;
        var2 = var3.find;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var8;
    var7 = function isEntryActive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.ContentInventoryTraitType;
            var3 = var1.IS_LIVE;
            var1 = arg1;
            var3 = var4.bind(var2)(var1, var3);
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.is_live;
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function isEntryExpired(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.expires_at;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = global;
            var5 = var2.Date;
            var6 = var3.expires_at;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var3 = new var7[var5](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var1 = var3 < var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function getEntryDuration(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryTraitType;
            var3 = var2.DURATION_SECONDS;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 3:
            var1 = var2.duration_seconds;
case 8:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function getStreakCount(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryTraitType;
            var3 = var2.STREAK_DAYS;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var1 = var2.streak_count_days;
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var13 = function calculateElapsedTimestampDurations(arg1) {
        var1 = arg1;
        var5 = var1.start;
        var1 = var1.now;
        var3 = global;
        var4 = var3.Math;
        var2 = var4.max;
        var1 = var1 - var5;
        var8 = 0;
        var4 = var2.bind(var4)(var1, var8);
        var7 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = var2[var8];
        var6 = undefined;
        var1 = var7.bind(var6)(var1);
        var1 = var1.Millis;
        var1 = var1.SECOND;
        var5 = var4 / var1;
        var1 = {};
        var9 = var3.Math;
        var4 = var9.floor;
        var9 = var4.bind(var9)(var5);
        var4 = var2[var8];
        var4 = var7.bind(var6)(var4);
        var4 = var4.Seconds;
        var4 = var4.MINUTE;
        var4 = var9 % var4;
        var1['seconds'] = var4;
        var10 = var3.Math;
        var9 = var10.floor;
        var4 = var2[var8];
        var4 = var7.bind(var6)(var4);
        var4 = var4.Seconds;
        var4 = var4.MINUTE;
        var4 = var5 / var4;
        var9 = var9.bind(var10)(var4);
        var4 = var2[var8];
        var4 = var7.bind(var6)(var4);
        var4 = var4.Seconds;
        var4 = var4.MINUTE;
        var4 = var9 % var4;
        var1['minutes'] = var4;
        var10 = var3.Math;
        var9 = var10.floor;
        var4 = var2[var8];
        var4 = var7.bind(var6)(var4);
        var4 = var4.Seconds;
        var4 = var4.HOUR;
        var4 = var5 / var4;
        var4 = var9.bind(var10)(var4);
        var1['hours'] = var4;
        var4 = var3.Math;
        var3 = var4.floor;
        var2 = var2[var8];
        var2 = var7.bind(var6)(var2);
        var2 = var2.Seconds;
        var2 = var2.DAY;
        var2 = var5 / var2;
        var2 = var3.bind(var4)(var2);
        var1['days'] = var2;
        return var1;
    };
    var _closure1_slot3 = var13;
    var12 = function calculateActiveTimestampDurations(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var1 = 'id';
            var1 = var1 in var2;
            if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 10:
            var4 = var2.start;
            _fun0005_ip = 8; continue _fun0005;
case 9:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.extractTimestamp;
            var1 = var2.id;
            var4 = var3.bind(var5)(var1);
case 8:
            var1 = 'end';
            var3 = var1 in var2;
            var1 = var6;
            if(!var3) { _fun0005_ip = 11; continue _fun0005 }
case 12:
            var5 = var2.end;
            var3 = null;
            var1 = var6;
            if(!(var3 != var5)) { _fun0005_ip = 11; continue _fun0005 }
case 13:
            var3 = global;
            var5 = var3.Math;
            var3 = var5.min;
            var2 = var2.end;
            var1 = var3.bind(var5)(var2, var6);
case 11:
            var3 = _closure1_slot3;
            var2 = {};
            var2['start'] = var4;
            var2['now'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot4 = var12;
    var11 = function formatActiveTimestamp(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = function padNumber(arg1) {
                var1 = global;
                var3 = var1.String;
                var2 = undefined;
                var1 = arg1;
                var4 = var3.bind(var2)(var1);
                var3 = var4.padStart;
                var2 = 2;
                var1 = '0';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var4 = _closure1_slot4;
            var6 = undefined;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var6)(var3, var2);
            var5 = var2.seconds;
            var9 = var2.minutes;
            var11 = var2.hours;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 2;
            var3 = var8[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.l5PP//;
            var1 = {};
            var1['hours'] = var11;
            var10 = 0;
            var8 = var9;
            if(!(var11 > var10)) { _fun0006_ip = 14; continue _fun0006 }
case 15:
            var8 = var7.bind(var6)(var9);
case 14:
            var1['minutes'] = var8;
            var5 = var7.bind(var6)(var5);
            var1['seconds'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot5 = var11;
    var1 = {};
    var9 = function secondsAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.EOrEJi;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1['secondsAgo'] = var9;
    var9 = function minutesAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.LRNgHh;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1['minutesAgo'] = var9;
    var9 = function hoursAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.raJpz8;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1['hoursAgo'] = var9;
    var9 = function daysAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.KkvKho;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1['daysAgo'] = var9;
    var9 = function weeksAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.sDtO6O;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1['weeksAgo'] = var9;
    var9 = function monthsAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.ITymoq;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1['monthsAgo'] = var9;
    var _closure1_slot6 = var1;
    var10 = {};
    var1 = function secondsAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.jfUoRU;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var10['secondsAgo'] = var1;
    var1 = function minutesAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.DmvRVF;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var10['minutesAgo'] = var1;
    var1 = function hoursAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.AfXezs;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var10['hoursAgo'] = var1;
    var1 = function daysAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.Lru1ra;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var10['daysAgo'] = var1;
    var1 = function weeksAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.jovF+/;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var10['weeksAgo'] = var1;
    var1 = function monthsAgo(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.nmSbSU;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var10['monthsAgo'] = var1;
    var9 = function formatEndedTimestamp(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arguments[3];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0007_ip = 16; continue _fun0007 }
case 17:
            var1 = {};
case 16:
            var3 = var1.formatSet;
            if(!(var3 === var7)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
            var3 = _closure1_slot6;
case 18:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var4 = var5[var2];
            var6 = var9.bind(var7)(var4);
            var4 = arg3;
            var8 = var6.bind(var7)(var4);
            var2 = var5[var2];
            var4 = var9.bind(var7)(var2);
            var2 = 1;
            var2 = var5[var2];
            var10 = var9.bind(var7)(var2);
            var6 = var10.extractTimestamp;
            var2 = arg1;
            var2 = var2.id;
            var2 = var6.bind(var10)(var2);
            var6 = var4.bind(var7)(var2);
            var4 = var8.diff;
            var2 = 's';
            var2 = var4.bind(var8)(var6, var2);
            var4 = global;
            var8 = var4.Math;
            var6 = var8.abs;
            var6 = var6.bind(var8)(var2);
            var8 = 0;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var5 = var5.MINUTE;
            if(!(!(var6 < var5))) { _fun0007_ip = 20; continue _fun0007 }
case 21:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var5 = var5.HOUR;
            if(!(!(var6 < var5))) { _fun0007_ip = 22; continue _fun0007 }
case 23:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var9 = var5.HOUR;
            var5 = 12;
            var5 = var5 * var9;
            if(!(!(var6 < var5))) { _fun0007_ip = 24; continue _fun0007 }
case 25:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var9 = var5.DAY;
            var5 = 9;
            var5 = var5 * var9;
            if(!(!(var6 < var5))) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var9 = var5.WEEK;
            var5 = 4;
            var5 = var5 * var9;
            if(!(!(var6 < var5))) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var9 = var4.Math;
            var6 = var9.round;
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var10.bind(var7)(var5);
            var5 = var5.Seconds;
            var5 = var5.DAYS_30;
            var5 = var2 / var5;
            var6 = var6.bind(var9)(var5);
            var5 = var3.monthsAgo;
            var5 = var5.bind(var3)(var6);
            return var5;
case 28:
            var9 = var4.Math;
            var6 = var9.round;
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var10.bind(var7)(var5);
            var5 = var5.Seconds;
            var10 = var5.DAY;
            var5 = 7;
            var5 = var5 * var10;
            var5 = var2 / var5;
            var6 = var6.bind(var9)(var5);
            var5 = var3.weeksAgo;
            var5 = var5.bind(var3)(var6);
            return var5;
case 26:
            var9 = var4.Math;
            var6 = var9.round;
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var10.bind(var7)(var5);
            var5 = var5.Seconds;
            var5 = var5.DAY;
            var5 = var2 / var5;
            var6 = var6.bind(var9)(var5);
            var5 = var3.daysAgo;
            var5 = var5.bind(var3)(var6);
            return var5;
case 24:
            var9 = var4.Math;
            var6 = var9.round;
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var10.bind(var7)(var5);
            var5 = var5.Seconds;
            var5 = var5.HOUR;
            var5 = var2 / var5;
            var6 = var6.bind(var9)(var5);
            var5 = var3.hoursAgo;
            var5 = var5.bind(var3)(var6);
            return var5;
case 22:
            var5 = var4.Math;
            var4 = var5.round;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var6.bind(var7)(var1);
            var1 = var1.Seconds;
            var1 = var1.MINUTE;
            var1 = var2 / var1;
            var4 = var4.bind(var5)(var1);
            var1 = var3.minutesAgo;
            var1 = var1.bind(var3)(var4);
            return var1;
case 20:
            var1 = var3.secondsAgo;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot7 = var9;
    var1 = 7;
    var14 = var14[var1];
    var1 = undefined;
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/content_inventory/utils.tsx';
    var14 = var15.bind(var16)(var14);
    var3['calculateElapsedTimestampDurations'] = var13;
    var3['calculateActiveTimestampDurations'] = var12;
    var3['formatActiveTimestamp'] = var11;
    var3['A11Y_FORMAT_SET'] = var10;
    var3['formatEndedTimestamp'] = var9;
    var9 = function(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var4 = arguments[2];
            var7 = arguments[3];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var4 = var1.bind(var2)();
case 30:
            if(!(var7 === var3)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var7 = {};
case 32:
            var1 = _closure1_slot9;
            var1 = var1.bind(var3)(var5);
            if(var1) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var6 = _closure1_slot7;
            var10 = 0;
            var12 = undefined;
            var11 = var5;
            var9 = var4;
            var8 = var7;
            var1 = var12[var6](var11, var10, var9, var8, var7);
            _fun0008_ip = 36; continue _fun0008;
case 34:
            var2 = _closure1_slot5;
            var1 = var2.bind(var3)(var5, var4);
case 36:
            return var1;
        }
    };
    var3['formatEntryTimestamp'] = var9;
    var3['getTrait'] = var8;
    var3['isEntryActive'] = var7;
    var7 = function isEntryNew(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.ContentInventoryTraitType;
            var3 = var1.FIRST_TIME;
            var1 = arg1;
            var3 = var4.bind(var2)(var1, var3);
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0009_ip = 2; continue _fun0009 }
case 3:
            var2 = var3.first_time;
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0009_ip = 4; continue _fun0009 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['isEntryNew'] = var7;
    var7 = function isEntryRecent(arg1) {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 1;
        var1 = var5[var1];
        var3 = undefined;
        var6 = var4.bind(var3)(var1);
        var2 = var6.age;
        var1 = arg1;
        var1 = var1.id;
        var2 = var2.bind(var6)(var1);
        var1 = 0;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.Millis;
        var1 = var1.HOUR;
        var2 = var2 / var1;
        var1 = 48;
        var1 = var2 < var1;
        return var1;
    };
    var3['isEntryRecent'] = var7;
    var3['isEntryExpired'] = var6;
    var6 = function isEntryLive(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot9;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0010_ip = 30; continue _fun0010 }
case 37:
            var2 = _closure1_slot10;
            var2 = var2.bind(var3)(var4);
            var1 = !var2;
case 30:
            return var1;
        }
    };
    var3['isEntryLive'] = var6;
    var3['getEntryDuration'] = var5;
    var5 = function getAggregateRange(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryTraitType;
            var3 = var2.AGGREGATE_RANGE;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0011_ip = 8; continue _fun0011 }
case 3:
            var1 = var2.range;
case 8:
            return var1;
        }
    };
    var3['getAggregateRange'] = var5;
    var5 = function isEntryMarathon(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryTraitType;
            var3 = var2.MARATHON;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0012_ip = 2; continue _fun0012 }
case 3:
            var1 = var2.marathon;
case 2:
            return var1;
        }
    };
    var3['isEntryMarathon'] = var5;
    var5 = function getResurrectedEntryLastPlayTime(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryTraitType;
            var3 = var2.RESURRECTED;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            var4 = null;
            var5 = var4 == var2;
            var3 = undefined;
            if(var5) { _fun0013_ip = 2; continue _fun0013 }
case 38:
            var3 = var2.resurrected_last_played;
case 2:
            var3 = var4 != var3;
            var1 = undefined;
            if(!var3) { _fun0013_ip = 39; continue _fun0013 }
case 34:
            var3 = global;
            var4 = var3.Date;
            var7 = var2.resurrected_last_played;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var2 = new var8[var4](var7, var6);
            var1 = var2 instanceof Object ? var2 : var3;
case 39:
            return var1;
        }
    };
    var3['getResurrectedEntryLastPlayTime'] = var5;
    var5 = function getFullResurrectedBadgeText(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var9 = undefined;
            var4 = var3.bind(var9)(var2);
            var3 = var4.intervalToDuration;
            var2 = {};
            var5 = arg1;
            var2['start'] = var5;
            var5 = global;
            var5 = var5.Date;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var13 = var6;
            var5 = new var13[var5](var12);
            var5 = var5 instanceof Object ? var5 : var6;
            var2['end'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = var2.months;
            var8 = 0;
            var5 = 0;
            if(!(var9 !== var3)) { _fun0014_ip = 40; continue _fun0014 }
case 41:
            var5 = var3;
case 40:
            var3 = var2.weeks;
            var7 = 0;
            if(!(var9 !== var3)) { _fun0014_ip = 42; continue _fun0014 }
case 43:
            var7 = var3;
case 42:
            var2 = var2.days;
            var6 = 0;
            if(!(var9 !== var2)) { _fun0014_ip = 44; continue _fun0014 }
case 45:
            var6 = var2;
case 44:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 2;
            var3 = var10[var1];
            var3 = var2.bind(var9)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var10[var1];
            var1 = var2.bind(var9)(var1);
            var1 = var1.t;
            var2 = var1.NXBtjI;
            var1 = {};
            var1['months'] = var5;
            var10 = var5 > var8;
            var9 = 0;
            if(var10) { _fun0014_ip = 46; continue _fun0014 }
case 47:
            var9 = var7;
case 46:
            var1['weeks'] = var9;
            var9 = var5 > var8;
            var5 = 0;
            if(var9) { _fun0014_ip = 48; continue _fun0014 }
case 49:
            var7 = var7 > var8;
            var5 = 0;
            if(var7) { _fun0014_ip = 48; continue _fun0014 }
case 50:
            var5 = var6;
case 48:
            var1['days'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getFullResurrectedBadgeText'] = var5;
    var5 = function getEpisodeBadgeText(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0015_ip = 51; continue _fun0015 }
case 52:
            var2 = '';
            if(!(var2 !== var4)) { _fun0015_ip = 51; continue _fun0015 }
case 37:
            var3 = /\w+ (\d+), \w+ (\d+)/;
            var2 = var3.exec;
            var8 = var2.bind(var3)(var4);
            var3 = var1 == var8;
            var2 = null;
            if(var3) { _fun0015_ip = 53; continue _fun0015 }
case 54:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 2;
            var5 = var3[var7];
            var4 = undefined;
            var5 = var9.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var3[var7];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.ijVm6+;
            var3 = {};
            var9 = 1;
            var9 = var8[var9];
            var3['seasonNum'] = var9;
            var7 = var8[var7];
            var3['episodeNum'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 53:
            return var2;
case 51:
            return var1;
        }
    };
    var3['getEpisodeBadgeText'] = var5;
    var5 = function getRichGameStateBadgeText(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var7 = arg1;
            var3 = arg2;
            var2 = null;
            var4 = var2 == var3;
            var10 = undefined;
            var1 = undefined;
            if(var4) { _fun0016_ip = 55; continue _fun0016 }
case 56:
            var5 = var3.size;
            var4 = var2 == var5;
            var1 = undefined;
            if(var4) { _fun0016_ip = 55; continue _fun0016 }
case 57:
            var4 = 0;
            var1 = var5[var4];
case 55:
            var4 = var2 != var1;
            var9 = undefined;
            if(!var4) { _fun0016_ip = 58; continue _fun0016 }
case 59:
            var9 = var1;
case 58:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0016_ip = 60; continue _fun0016 }
case 61:
            var4 = var3.size;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0016_ip = 60; continue _fun0016 }
case 5:
            var3 = 1;
            var1 = var4[var3];
case 60:
            var3 = var2 != var1;
            var8 = undefined;
            if(!var3) { _fun0016_ip = 13; continue _fun0016 }
case 62:
            var8 = var1;
case 13:
            if(!(var2 != var9)) { _fun0016_ip = 63; continue _fun0016 }
case 64:
            if(!(var2 != var8)) { _fun0016_ip = 63; continue _fun0016 }
case 65:
            var1 = 0;
            if(!(var9 > var1)) { _fun0016_ip = 63; continue _fun0016 }
case 66:
            if(!(!(var8 > var1))) { _fun0016_ip = 67; continue _fun0016 }
case 63:
            var1 = var2 != var9;
            if(!var1) { _fun0016_ip = 44; continue _fun0016 }
case 68:
            var3 = 0;
            var1 = var9 > var3;
case 44:
            var6 = undefined;
            if(!var1) { _fun0016_ip = 69; continue _fun0016 }
case 70:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 2;
            var4 = var11[var1];
            var4 = var3.bind(var10)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var11[var1];
            var1 = var3.bind(var10)(var1);
            var1 = var1.t;
            var3 = var1.UTYMsb;
            var1 = {};
            var1['count'] = var9;
            var6 = var4.bind(var5)(var3, var1);
            _fun0016_ip = 69; continue _fun0016;
case 67:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 2;
            var4 = var11[var1];
            var4 = var3.bind(var10)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var11[var1];
            var1 = var3.bind(var10)(var1);
            var1 = var1.t;
            var3 = var1.wmUSi4;
            var1 = {};
            var1['count'] = var9;
            var1['max'] = var8;
            var6 = var4.bind(var5)(var3, var1);
case 69:
            if(!(var2 != var6)) { _fun0016_ip = 71; continue _fun0016 }
case 72:
            if(!(var2 == var7)) { _fun0016_ip = 73; continue _fun0016 }
case 71:
            var1 = var6;
            if(!(var2 != var7)) { _fun0016_ip = 74; continue _fun0016 }
case 75:
            var1 = var7;
case 74:
            _fun0016_ip = 29; continue _fun0016;
case 73:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var16 = '';
            var14 = ' (';
            var12 = ')';
            var15 = var7;
            var13 = var6;
            var1 = var16[var5](var15, var14, var13, var12, var11);
case 29:
            return var1;
        }
    };
    var3['getRichGameStateBadgeText'] = var5;
    var5 = function isEntryTopGame(arg1) {
        var1 = arg1;
        var2 = var1.content_type;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.ContentInventoryEntryType;
        var1 = var1.TOP_GAME;
        var1 = var2 === var1;
        return var1;
    };
    var3['isEntryTopGame'] = var5;
    var3['getStreakCount'] = var4;
    var4 = function isValidStreak(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot12;
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var5)) { _fun0017_ip = 76; continue _fun0017 }
case 77:
            var3 = 3;
            if(!(!(var5 < var3))) { _fun0017_ip = 78; continue _fun0017 }
case 79:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.extractTimestamp;
            var1 = var1.id;
            var2 = var2.bind(var6)(var1);
            var1 = global;
            var6 = var1.Date;
            var1 = var6.now;
            var1 = var1.bind(var6)();
            var2 = var1 - var2;
            var1 = 0;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.Millis;
            var3 = var1.HOUR;
            var1 = 48;
            var1 = var1 * var3;
            var1 = var2 > var1;
            var1 = !var1;
            return var1;
case 78:
            var1 = false;
            return var1;
case 76:
            var1 = false;
            return var1;
        }
    };
    var3['isValidStreak'] = var4;
    var4 = function getMarathonDescription(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = _closure1_slot11;
            var7 = undefined;
            var1 = arg1;
            var6 = var3.bind(var7)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0018_ip = 80; continue _fun0018 }
case 81:
            var1 = global;
            var5 = var1.Math;
            var4 = var5.round;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 0;
            var3 = var3[var1];
            var3 = var8.bind(var7)(var3);
            var3 = var3.Seconds;
            var3 = var3.HOUR;
            var3 = var6 / var3;
            var6 = var4.bind(var5)(var3);
            if(!(!(var6 <= var1))) { _fun0018_ip = 50; continue _fun0018 }
case 36:
            var1 = {};
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var10 = var4.intl;
            var9 = var10.formatToPlainString;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var4 = var4.t;
            var5 = var4.vZaMen;
            var4 = {};
            var4['hours'] = var6;
            var4 = var9.bind(var10)(var5, var4);
            var1['text'] = var4;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.S5F48/;
            var2 = {};
            var2['hours'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1['tooltipText'] = var2;
            _fun0018_ip = 82; continue _fun0018;
case 50:
            var1 = {'text': null, 'tooltipText': null};
case 82:
            return var1;
case 80:
            var1 = {'text': null, 'tooltipText': null};
            return var1;
        }
    };
    var3['getMarathonDescription'] = var4;
    var2 = function getTrendingType(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.ContentInventoryTraitType;
            var3 = var2.TRENDING_CONTENT;
            var2 = arg1;
            var2 = var4.bind(var1)(var2, var3);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0019_ip = 2; continue _fun0019 }
case 3:
            var1 = var2.trending;
case 2:
            return var1;
        }
    };
    var3['getTrendingType'] = var2;
    return var1;
})();