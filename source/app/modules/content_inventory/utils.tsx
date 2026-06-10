// app/modules/content_inventory/utils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var16 = require;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var16;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var15;
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
    var _closure1_slot9 = var8;
    var7 = function isEntryActive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot9;
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
    var _closure1_slot10 = var7;
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
    var _closure1_slot11 = var6;
    var5 = function getEntryDuration(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot9;
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
    var _closure1_slot12 = var5;
    var4 = function getStreakCount(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot9;
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
    var _closure1_slot13 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var14 = function calculateTimestampDurations(arg1, arg2) {
        var3 = global;
        var4 = var3.Math;
        var2 = var4.max;
        var5 = arg1;
        var1 = arg2;
        var1 = var5 - var1;
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
    var _closure1_slot3 = var14;
    var13 = function calculateActiveTimestampDurations(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = 'end';
            var1 = var1 in var5;
            var3 = undefined;
            var2 = undefined;
            if(!var1) { _fun0005_ip = 9; continue _fun0005 }
case 10:
            var2 = var5.end;
case 9:
            var1 = 'isCountDown';
            var1 = var1 in var5;
            if(!var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
            var7 = var5.isCountDown;
            var6 = null;
            var1 = var6 != var7;
case 11:
            if(!var1) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var1 = var5.isCountDown;
case 13:
            if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var6 = null;
            if(!(var6 != var2)) { _fun0005_ip = 15; continue _fun0005 }
case 2:
            if(!(!(var2 > var4))) { _fun0005_ip = 17; continue _fun0005 }
case 15:
            var6 = 'id';
            var6 = var6 in var5;
            if(var6) { _fun0005_ip = 18; continue _fun0005 }
case 6:
            var6 = var5.start;
            _fun0005_ip = 19; continue _fun0005;
case 18:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 1;
            var7 = var9[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.extractTimestamp;
            var5 = var5.id;
            var6 = var7.bind(var8)(var5);
case 19:
            var7 = null;
            var5 = var4;
            if(!(var7 != var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var5 = var4;
            if(var1) { _fun0005_ip = 20; continue _fun0005 }
case 22:
            var1 = global;
            var7 = var1.Math;
            var1 = var7.min;
            var5 = var1.bind(var7)(var2, var4);
case 20:
            var1 = _closure1_slot3;
            var1 = var1.bind(var3)(var5, var6);
            return var1;
case 17:
            var1 = _closure1_slot3;
            var1 = var1.bind(var3)(var2, var4);
            return var1;
        }
    };
    var _closure1_slot4 = var13;
    var12 = function formatActiveTimestamp(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = function padNumber(arg1) {
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
            var5 = _closure1_slot4;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var1 = var5.bind(var3)(var2, var1);
            var2 = var1.seconds;
            var5 = var1.minutes;
            var7 = var1.hours;
            var1 = 0;
            var6 = var5;
            if(!(var7 > var1)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var6 = var4.bind(var3)(var5);
case 23:
            var5 = var4.bind(var3)(var2);
            if(!(!(var7 > var1))) { _fun0006_ip = 25; continue _fun0006 }
case 15:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ':';
            var1 = var3.bind(var2)(var6, var1, var5);
            _fun0006_ip = 26; continue _fun0006;
case 25:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var14 = '';
            var2 = ':';
            var13 = var7;
            var12 = var2;
            var11 = var6;
            var10 = var2;
            var9 = var5;
            var1 = var14[var4](var13, var12, var11, var10, var9, var8);
case 26:
            return var1;
        }
    };
    var _closure1_slot5 = var12;
    var11 = function formatTimestampToA11yLabel(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var8 = var1.hours;
            var12 = var1.minutes;
            var7 = var1.seconds;
            var3 = new Array(0);
            var1 = 0;
            if(!(var8 > var1)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var2 = var3.push;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 2;
            var5 = var10[var1];
            var4 = undefined;
            var5 = var9.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            var4 = var1.xCjYxK;
            var1 = {};
            var1['hours'] = var8;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
case 27:
            var5 = var3.push;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var2 = var9[var1];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var11 = var2.intl;
            var10 = var11.formatToPlainString;
            var2 = var9[var1];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var6 = var2.iXLF9W;
            var2 = {};
            var2['minutes'] = var12;
            var2 = var10.bind(var11)(var6, var2);
            var2 = var5.bind(var3)(var2);
            var2 = var3.push;
            var5 = var9[var1];
            var5 = var8.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var4 = var1.geSp4K;
            var1 = {};
            var1['seconds'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = ', ';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot6 = var11;
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
        var2 = var1.EOrEJl;
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
        var2 = var1.LRNgHp;
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
        var2 = var1.raJpz3;
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
        var2 = var1.KkvKhi;
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
        var2 = var1.sDtO6D;
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
        var2 = var1.ITymou;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1['monthsAgo'] = var9;
    var _closure1_slot7 = var1;
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
        var2 = var1.jfUoRQ;
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
        var2 = var1.DmvRVO;
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
        var2 = var1.AfXezt;
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
        var2 = var1.Lru1rV;
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
        var2 = var1.jovF+x;
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
        var2 = var1.nmSbST;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var10['monthsAgo'] = var1;
    var9 = function formatEndedTimestamp(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arguments[3];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0008_ip = 29; continue _fun0008 }
case 30:
            var1 = {};
case 29:
            var3 = var1.formatSet;
            if(!(var3 === var7)) { _fun0008_ip = 31; continue _fun0008 }
case 10:
            var3 = _closure1_slot7;
case 31:
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
            if(!(!(var6 < var5))) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var5 = var5.HOUR;
            if(!(!(var6 < var5))) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var9 = var5.HOUR;
            var5 = 12;
            var5 = var5 * var9;
            if(!(!(var6 < var5))) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var9 = var5.DAY;
            var5 = 9;
            var5 = var5 * var9;
            if(!(!(var6 < var5))) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.Seconds;
            var9 = var5.WEEK;
            var5 = 4;
            var5 = var5 * var9;
            if(!(!(var6 < var5))) { _fun0008_ip = 40; continue _fun0008 }
case 41:
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
case 40:
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
case 38:
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
case 36:
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
case 34:
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
case 32:
            var1 = var3.secondsAgo;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot8 = var9;
    var1 = 7;
    var15 = var15[var1];
    var1 = undefined;
    var17 = var16.bind(var1)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'modules/content_inventory/utils.tsx';
    var15 = var16.bind(var17)(var15);
    var3['calculateTimestampDurations'] = var14;
    var3['calculateActiveTimestampDurations'] = var13;
    var3['formatActiveTimestamp'] = var12;
    var3['formatTimestampToA11yLabel'] = var11;
    var11 = function(arg1, arg2) {
        var5 = _closure1_slot4;
        var3 = undefined;
        var4 = arg1;
        var2 = arg2;
        var2 = var5.bind(var3)(var4, var2);
        var4 = var2.seconds;
        var5 = var2.minutes;
        var6 = var2.hours;
        var2 = _closure1_slot6;
        var1 = {};
        var1['hours'] = var6;
        var1['minutes'] = var5;
        var1['seconds'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['formatActiveA11yTimestamp'] = var11;
    var3['A11Y_FORMAT_SET'] = var10;
    var3['formatEndedTimestamp'] = var9;
    var9 = function(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var4 = arguments[2];
            var7 = arguments[3];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0009_ip = 42; continue _fun0009 }
case 43:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var4 = var1.bind(var2)();
case 42:
            if(!(var7 === var3)) { _fun0009_ip = 44; continue _fun0009 }
case 45:
            var7 = {};
case 44:
            var1 = _closure1_slot10;
            var1 = var1.bind(var3)(var5);
            if(var1) { _fun0009_ip = 46; continue _fun0009 }
case 47:
            var6 = _closure1_slot8;
            var10 = 0;
            var12 = undefined;
            var11 = var5;
            var9 = var4;
            var8 = var7;
            var1 = var12[var6](var11, var10, var9, var8, var7);
            _fun0009_ip = 48; continue _fun0009;
case 46:
            var2 = _closure1_slot5;
            var1 = var2.bind(var3)(var5, var4);
case 48:
            return var1;
        }
    };
    var3['formatEntryTimestamp'] = var9;
    var3['getTrait'] = var8;
    var3['isEntryActive'] = var7;
    var7 = function isEntryNew(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = _closure1_slot9;
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
            if(var4) { _fun0010_ip = 2; continue _fun0010 }
case 3:
            var2 = var3.first_time;
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0010_ip = 4; continue _fun0010 }
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
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot10;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0011_ip = 42; continue _fun0011 }
case 49:
            var2 = _closure1_slot11;
            var2 = var2.bind(var3)(var4);
            var1 = !var2;
case 42:
            return var1;
        }
    };
    var3['isEntryLive'] = var6;
    var3['getEntryDuration'] = var5;
    var5 = function getAggregateRange(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot9;
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
            if(var3) { _fun0012_ip = 8; continue _fun0012 }
case 3:
            var1 = var2.range;
case 8:
            return var1;
        }
    };
    var3['getAggregateRange'] = var5;
    var5 = function isEntryMarathon(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = _closure1_slot9;
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
            if(var3) { _fun0013_ip = 2; continue _fun0013 }
case 3:
            var1 = var2.marathon;
case 2:
            return var1;
        }
    };
    var3['isEntryMarathon'] = var5;
    var5 = function getResurrectedEntryLastPlayTime(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = _closure1_slot9;
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
            if(var5) { _fun0014_ip = 2; continue _fun0014 }
case 16:
            var3 = var2.resurrected_last_played;
case 2:
            var3 = var4 != var3;
            var1 = undefined;
            if(!var3) { _fun0014_ip = 50; continue _fun0014 }
case 46:
            var3 = global;
            var4 = var3.Date;
            var7 = var2.resurrected_last_played;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var2 = new var8[var4](var7, var6);
            var1 = var2 instanceof Object ? var2 : var3;
case 50:
            return var1;
        }
    };
    var3['getResurrectedEntryLastPlayTime'] = var5;
    var5 = function getFullResurrectedBadgeText(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
            if(!(var9 !== var3)) { _fun0015_ip = 51; continue _fun0015 }
case 52:
            var5 = var3;
case 51:
            var3 = var2.weeks;
            var7 = 0;
            if(!(var9 !== var3)) { _fun0015_ip = 27; continue _fun0015 }
case 53:
            var7 = var3;
case 27:
            var2 = var2.days;
            var6 = 0;
            if(!(var9 !== var2)) { _fun0015_ip = 54; continue _fun0015 }
case 55:
            var6 = var2;
case 54:
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
            var2 = var1.NXBtjF;
            var1 = {};
            var1['months'] = var5;
            var10 = var5 > var8;
            var9 = 0;
            if(var10) { _fun0015_ip = 56; continue _fun0015 }
case 57:
            var9 = var7;
case 56:
            var1['weeks'] = var9;
            var9 = var5 > var8;
            var5 = 0;
            if(var9) { _fun0015_ip = 58; continue _fun0015 }
case 59:
            var7 = var7 > var8;
            var5 = 0;
            if(var7) { _fun0015_ip = 58; continue _fun0015 }
case 60:
            var5 = var6;
case 58:
            var1['days'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getFullResurrectedBadgeText'] = var5;
    var5 = function getEpisodeBadgeText(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0016_ip = 61; continue _fun0016 }
case 62:
            var2 = '';
            if(!(var2 !== var4)) { _fun0016_ip = 61; continue _fun0016 }
case 49:
            var3 = /\w+ (\d+), \w+ (\d+)/;
            var2 = var3.exec;
            var8 = var2.bind(var3)(var4);
            var3 = var1 == var8;
            var2 = null;
            if(var3) { _fun0016_ip = 63; continue _fun0016 }
case 64:
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
            var4 = var3.ijVm6y;
            var3 = {};
            var9 = 1;
            var9 = var8[var9];
            var3['seasonNum'] = var9;
            var7 = var8[var7];
            var3['episodeNum'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 63:
            return var2;
case 61:
            return var1;
        }
    };
    var3['getEpisodeBadgeText'] = var5;
    var5 = function getRichGameStateBadgeText(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var7 = arg1;
            var3 = arg2;
            var2 = null;
            var4 = var2 == var3;
            var10 = undefined;
            var1 = undefined;
            if(var4) { _fun0017_ip = 65; continue _fun0017 }
case 66:
            var5 = var3.size;
            var4 = var2 == var5;
            var1 = undefined;
            if(var4) { _fun0017_ip = 65; continue _fun0017 }
case 67:
            var4 = 0;
            var1 = var5[var4];
case 65:
            var4 = var2 != var1;
            var9 = undefined;
            if(!var4) { _fun0017_ip = 68; continue _fun0017 }
case 69:
            var9 = var1;
case 68:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0017_ip = 70; continue _fun0017 }
case 71:
            var4 = var3.size;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0017_ip = 70; continue _fun0017 }
case 5:
            var3 = 1;
            var1 = var4[var3];
case 70:
            var3 = var2 != var1;
            var8 = undefined;
            if(!var3) { _fun0017_ip = 72; continue _fun0017 }
case 73:
            var8 = var1;
case 72:
            if(!(var2 != var9)) { _fun0017_ip = 74; continue _fun0017 }
case 75:
            if(!(var2 != var8)) { _fun0017_ip = 74; continue _fun0017 }
case 25:
            var1 = 0;
            if(!(var9 > var1)) { _fun0017_ip = 74; continue _fun0017 }
case 76:
            if(!(!(var8 > var1))) { _fun0017_ip = 77; continue _fun0017 }
case 74:
            var1 = var2 != var9;
            if(!var1) { _fun0017_ip = 54; continue _fun0017 }
case 78:
            var3 = 0;
            var1 = var9 > var3;
case 54:
            var6 = undefined;
            if(!var1) { _fun0017_ip = 79; continue _fun0017 }
case 80:
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
            var3 = var1.UTYMsa;
            var1 = {};
            var1['count'] = var9;
            var6 = var4.bind(var5)(var3, var1);
            _fun0017_ip = 79; continue _fun0017;
case 77:
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
            var3 = var1.wmUSiy;
            var1 = {};
            var1['count'] = var9;
            var1['max'] = var8;
            var6 = var4.bind(var5)(var3, var1);
case 79:
            if(!(var2 != var6)) { _fun0017_ip = 81; continue _fun0017 }
case 82:
            if(!(var2 == var7)) { _fun0017_ip = 83; continue _fun0017 }
case 81:
            var1 = var6;
            if(!(var2 != var7)) { _fun0017_ip = 84; continue _fun0017 }
case 85:
            var1 = var7;
case 84:
            _fun0017_ip = 41; continue _fun0017;
case 83:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var16 = '';
            var14 = ' (';
            var12 = ')';
            var15 = var7;
            var13 = var6;
            var1 = var16[var5](var15, var14, var13, var12, var11);
case 41:
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
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot13;
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var5)) { _fun0018_ip = 86; continue _fun0018 }
case 87:
            var3 = 3;
            if(!(!(var5 < var3))) { _fun0018_ip = 88; continue _fun0018 }
case 89:
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
case 88:
            var1 = false;
            return var1;
case 86:
            var1 = false;
            return var1;
        }
    };
    var3['isValidStreak'] = var4;
    var4 = function getMarathonDescription(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = _closure1_slot12;
            var7 = undefined;
            var1 = arg1;
            var6 = var3.bind(var7)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0019_ip = 90; continue _fun0019 }
case 9:
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
            if(!(!(var6 <= var1))) { _fun0019_ip = 60; continue _fun0019 }
case 48:
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
            var5 = var4.vZaMem;
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
            var3 = var2.S5F485;
            var2 = {};
            var2['hours'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1['tooltipText'] = var2;
            _fun0019_ip = 91; continue _fun0019;
case 60:
            var1 = {'text': null, 'tooltipText': null};
case 91:
            return var1;
case 90:
            var1 = {'text': null, 'tooltipText': null};
            return var1;
        }
    };
    var3['getMarathonDescription'] = var4;
    var2 = function getTrendingType(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = _closure1_slot9;
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
            if(var3) { _fun0020_ip = 2; continue _fun0020 }
case 3:
            var1 = var2.trending;
case 2:
            return var1;
        }
    };
    var3['getTrendingType'] = var2;
    return var1;
})();