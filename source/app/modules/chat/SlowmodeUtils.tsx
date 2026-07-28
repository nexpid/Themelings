// app/modules/chat/SlowmodeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function canBypassSlowmodeHelper(arg1, arg2) {
        var4 = arg2;
        var3 = var4.can;
        var1 = _closure1_slot4;
        var2 = var1.BYPASS_SLOWMODE;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot4 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat/SlowmodeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['canBypassSlowmodeHelper'] = var4;
    var4 = function canBypassSlowmode(arg1) {
        var4 = _closure1_slot5;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var3['canBypassSlowmode'] = var4;
    var4 = function useCanBypassSlowmode(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanBypassSlowmode'] = var4;
    var4 = function getSlowmodeIndicatorText(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var2 = var2.Millis;
            var2 = var2.HOUR;
            if(!(!(var4 >= var2))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 0;
            if(!(!(var4 > var2))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 3;
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var6 = var3.intl;
            var3 = var6.string;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Icu3bf;
            var2 = var3.bind(var6)(var2);
            return var2;
case 6:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.duration;
            var6 = var2.bind(var3)(var4);
            var2 = var6.seconds;
            var7 = var2.bind(var6)();
            var2 = global;
            var3 = var2.HermesInternal;
            var3 = var3.concat;
            var8 = '';
            var10 = var3.bind(var8)(var7);
            var9 = var10.padStart;
            var7 = 2;
            var3 = '0';
            var7 = var9.bind(var10)(var7, var3);
            var3 = var6.minutes;
            var6 = var3.bind(var6)();
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var2 = var3.bind(var8)(var6, var2, var7);
            return var2;
case 4:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.duration;
            var4 = var2.bind(var3)(var4);
            var2 = var4.minutes;
            var5 = var2.bind(var4)();
            var2 = global;
            var3 = var2.HermesInternal;
            var3 = var3.concat;
            var7 = '';
            var5 = var3.bind(var7)(var5);
            var3 = var5.padStart;
            var9 = 2;
            var8 = '0';
            var13 = var3.bind(var5)(var9, var8);
            var3 = var4.seconds;
            var5 = var3.bind(var4)();
            var3 = var2.HermesInternal;
            var3 = var3.concat;
            var5 = var3.bind(var7)(var5);
            var3 = var5.padStart;
            var11 = var3.bind(var5)(var9, var8);
            var3 = var4.hours;
            var15 = var3.bind(var4)();
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var16 = var7;
            var14 = var2;
            var12 = var2;
            var2 = var16[var3](var15, var14, var13, var12, var11, var10);
            return var2;
case 2:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["8+NidX"];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSlowmodeIndicatorText'] = var4;
    var2 = function getSlowmodeDescription(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg1;
            var2 = arguments[1];
            var9 = undefined;
            if(!(var2 === var9)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = false;
case 8:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 4;
            var3 = var3[var4];
            var3 = var5.bind(var9)(var3);
            var3 = var3.Seconds;
            var3 = var3.HOUR;
            if(!(!(var10 >= var3))) { _fun0002_ip = 10; continue _fun0002 }
case 5:
            var11 = 60;
            if(!(!(var10 >= var11))) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 3;
            var3 = var3[var8];
            var3 = var5.bind(var9)(var3);
            var7 = var3.intl;
            var6 = var7.formatToPlainString;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var5.bind(var9)(var3);
            var3 = var3.t;
            if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var3.IWntYg;
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var5 = var3["9yE8Ga"];
case 15:
            var3 = {};
            var3['seconds'] = var10;
            var3 = var6.bind(var7)(var5, var3);
            return var3;
case 11:
            var3 = global;
            var6 = var3.Math;
            var5 = var6.floor;
            var3 = var10 / var11;
            var8 = var5.bind(var6)(var3);
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = 3;
            var3 = var3[var12];
            var3 = var5.bind(var9)(var3);
            var7 = var3.intl;
            var6 = var7.formatToPlainString;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var5.bind(var9)(var3);
            var3 = var3.t;
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = var3.sY3wlG;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var5 = var3.DARKYm;
case 18:
            var3 = {};
            var3['minutes'] = var8;
            var8 = var11 * var8;
            var8 = var10 - var8;
            var3['seconds'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            return var3;
case 10:
            var5 = global;
            var11 = var5.Math;
            var7 = var11.floor;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = var3[var4];
            var6 = var8.bind(var9)(var6);
            var6 = var6.Seconds;
            var6 = var6.HOUR;
            var6 = var10 / var6;
            var7 = var7.bind(var11)(var6);
            var11 = var5.Math;
            var6 = var11.floor;
            var5 = var3[var4];
            var5 = var8.bind(var9)(var5);
            var5 = var5.Seconds;
            var5 = var5.HOUR;
            var5 = var7 * var5;
            var12 = var10 - var5;
            var5 = var3[var4];
            var5 = var8.bind(var9)(var5);
            var5 = var5.Seconds;
            var5 = var5.MINUTE;
            var5 = var12 / var5;
            var6 = var6.bind(var11)(var5);
            var5 = var3[var4];
            var5 = var8.bind(var9)(var5);
            var5 = var5.Seconds;
            var5 = var5.HOUR;
            var5 = var7 * var5;
            var5 = var10 - var5;
            var4 = var3[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.Seconds;
            var4 = var4.MINUTE;
            var4 = var6 * var4;
            var5 = var5 - var4;
            var4 = _closure1_slot0;
            var10 = 3;
            var3 = var3[var10];
            var3 = var4.bind(var9)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var8.bind(var9)(var1);
            var1 = var1.t;
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = var1["3hz51F"];
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var2 = var1.oEwLez;
case 21:
            var1 = {};
            var1['hours'] = var7;
            var1['minutes'] = var6;
            var1['seconds'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getSlowmodeDescription'] = var2;
    return var1;
})();