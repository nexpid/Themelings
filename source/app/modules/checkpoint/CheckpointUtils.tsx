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
    var7 = 0;
    var4 = var6[var7];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.TimeUnits;
    var8 = var4.HOURS;
    var4 = new Array(2);
    var4[0] = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TimeUnits;
    var7 = var7.MINUTES;
    var4[1] = var7;
    var _closure1_slot3 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/CheckpointUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getVoiceDurationString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 0;
            var1 = var7[var5];
            var4 = undefined;
            var9 = var3.bind(var4)(var1);
            var8 = var9.getTimeAndUnit;
            var6 = _closure1_slot3;
            var1 = arg1;
            var1 = var8.bind(var9)(var1, var6);
            var6 = var1.unit;
            var8 = var1.time;
            var1 = 1;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getAbbreviatedFormatter;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var7 = var3.Math;
            var3 = var7.round;
            var10 = var3.bind(var7)(var8);
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.TimeUnits;
            var3 = var3.HOURS;
            if(!(var6 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var8 = var3.intl;
            var7 = var8.formatToPlainString;
            var6 = var1.minutes;
            var3 = {};
            var3['minutes'] = var10;
            var3 = var7.bind(var8)(var6, var3);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 2;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var9 = var6.intl;
            var8 = var9.formatToPlainString;
            var7 = var1.hours;
            var6 = {};
            var6['hours'] = var10;
            var3 = var8.bind(var9)(var7, var6);
case 6:
            return var3;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.intl;
            var3 = var4.formatToPlainString;
            var2 = var1.minutes;
            var1 = {};
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
            if(!(var1 !== var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = 1;
            if(!(var1 !== var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = 2;
            if(!(var1 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = 3;
            if(!(var1 !== var2)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = 4;
            if(!(var1 !== var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = 5;
            if(!(var1 !== var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = 6;
            if(!(var1 !== var2)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = 7;
            if(!(var1 !== var2)) { _fun0002_ip = 5; continue _fun0002 }
case 21:
            var1 = 8;
            if(!(var1 !== var2)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
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
case 5:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 19:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 17:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 15:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 13:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 11:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 9:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 7:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['getCardAssetUrl'] = var4;
    var2 = function getCheckpointPowerBarUnits(arg1) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.min;
        var6 = var1.Math;
        var5 = var6.max;
        var7 = var1.Math;
        var2 = var7.round;
        var8 = arg1;
        var1 = 10;
        var1 = var8 / var1;
        var2 = var2.bind(var7)(var1);
        var1 = 1;
        var2 = var5.bind(var6)(var2, var1);
        var1 = 9;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getCheckpointPowerBarUnits'] = var2;
    return var1;
})();