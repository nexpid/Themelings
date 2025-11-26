// app/modules/checkpoint/CheckpointUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var5 = 1;
    var4 = var7[var5];
    var4 = var6.bind(var1)(var4);
    var4 = var4.TimeUnits;
    var8 = var4.HOURS;
    var4 = new Array(2);
    var4[0] = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TimeUnits;
    var5 = var5.MINUTES;
    var4[1] = var5;
    var _closure1_slot4 = var4;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkpoint/CheckpointUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['VALID_TIME_UNITS'] = var4;
    var4 = function getVoiceDurationString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 1;
            var1 = var6[var7];
            var5 = undefined;
            var9 = var2.bind(var5)(var1);
            var8 = var9.getTimeAndUnit;
            var4 = _closure1_slot4;
            var1 = arg1;
            var1 = var8.bind(var9)(var1, var4);
            var4 = var1.unit;
            var9 = var1.time;
            var1 = 2;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getAbbreviatedFormatter;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var6.bind(var5)(var1);
            var1 = var1.TimeUnits;
            var1 = var1.HOURS;
            if(!(var4 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var7 = var1.intl;
            var6 = var7.format;
            var4 = var2.minutes;
            var1 = {};
            var1['minutes'] = var9;
            var1 = var6.bind(var7)(var4, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var8 = var4.intl;
            var7 = var8.format;
            var6 = var2.hours;
            var4 = {};
            var4['hours'] = var9;
            var1 = var7.bind(var8)(var6, var4);
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.intl;
            var4 = var5.format;
            var3 = var2.minutes;
            var2 = {};
            var6 = 0;
            var2['minutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['getVoiceDurationString'] = var4;
    var4 = function getDurationAndUnit(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getTimeAndUnit;
            var2 = _closure1_slot4;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            var2 = var1.unit;
            var6 = var1.time;
            var1 = {};
            var3 = global;
            var5 = var3.Math;
            var4 = var5.round;
            var3 = null;
            var7 = var3 != var6;
            var3 = 0;
            if(!var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var6;
case 8:
            var3 = var4.bind(var5)(var3);
            var1['duration'] = var3;
            var1['unit'] = var2;
            return var1;
        }
    };
    var3['getDurationAndUnit'] = var4;
    var4 = function getCardAssetUrl(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = 1;
            if(!(var1 !== var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = 2;
            if(!(var1 !== var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = 3;
            if(!(var1 !== var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = 4;
            if(!(var1 !== var2)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = 5;
            if(!(var1 !== var2)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = 6;
            if(!(var1 !== var2)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = 7;
            if(!(var1 !== var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var1 = 8;
            if(!(var1 !== var2)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 26:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 24:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 22:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 20:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 18:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 16:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 14:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 12:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 10:
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
    var2 = function useCheckpointPercentileAltData(arg1, arg2) {
        var6 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var3;
        var1 = {};
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