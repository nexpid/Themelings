// app/modules/checkpoint/CheckpointUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var7 = 1;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TimeUnits;
    var8 = var4.DAYS;
    var4 = new Array(3);
    var4[0] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var8 = var8.TimeUnits;
    var8 = var8.HOURS;
    var4[1] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TimeUnits;
    var7 = var7.MINUTES;
    var4[2] = var7;
    var _closure1_slot4 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/CheckpointUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getVoiceDurationString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 1;
            var1 = var6[var7];
            var4 = undefined;
            var9 = var3.bind(var4)(var1);
            var8 = var9.getTimeAndUnit;
            var5 = _closure1_slot4;
            var1 = arg1;
            var1 = var8.bind(var9)(var1, var5);
            var5 = var1.unit;
            var8 = var1.time;
            var1 = 2;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getAbbreviatedFormatter;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.TimeUnits;
            var3 = var3.DAYS;
            if(!(var3 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.TimeUnits;
            var3 = var3.HOURS;
            if(!(var3 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var7 = var3.intl;
            var6 = var7.format;
            var5 = var1.minutes;
            var3 = {};
            var3['minutes'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            return var3;
case 6:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var7 = var3.intl;
            var6 = var7.format;
            var5 = var1.hours;
            var3 = {};
            var3['hours'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            return var3;
case 4:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var7 = var3.intl;
            var6 = var7.format;
            var5 = var1.days;
            var3 = {};
            var3['days'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            return var3;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.intl;
            var3 = var4.format;
            var2 = var1.minutes;
            var1 = {};
            var5 = 0;
            var1['minutes'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getVoiceDurationString'] = var4;
    var4 = function getCardAssetUrl(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = 1;
            if(!(var1 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = 2;
            if(!(var1 !== var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = 3;
            if(!(var1 !== var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = 4;
            if(!(var1 !== var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = 5;
            if(!(var1 !== var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = 6;
            if(!(var1 !== var2)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var1 = 7;
            if(!(var1 !== var2)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1 = 8;
            if(!(var1 !== var2)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 24:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 22:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 20:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 18:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 16:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 14:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 12:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 10:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 8:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['getCardAssetUrl'] = var4;
    var2 = function useCheckpointPercentileAltData(arg1, arg2, arg3) {
        var6 = arg2;
        var3 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var3;
        var1 = {};
        var5 = arg1;
        var4 = 50;
        var4 = var5 > var4;
        var1['showPercentile'] = var4;
        var5 = _closure1_slot3;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var3;
        var3 = undefined;
        var2 = function() {
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var8 = var2;
            var1 = new var8[var1](var7);
            var4 = var1 instanceof Object ? var1 : var2;
            var1 = var4.setDate;
            var5 = 1;
            var1 = var1.bind(var4)(var5);
            var3 = var4.setMonth;
            var2 = _closure2_slot0;
            var2 = var2 - var5;
            var2 = var3.bind(var4)(var2);
            var3 = var4.toLocaleString;
            var2 = _closure2_slot1;
            var1 = {};
            var5 = 'long';
            var1['month'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var5.bind(var3)(var2, var4);
        var1['monthName'] = var2;
        return var1;
    };
    var3['useCheckpointPercentileAltData'] = var2;
    return var1;
})();