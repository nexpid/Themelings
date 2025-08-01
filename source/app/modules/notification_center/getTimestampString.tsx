// app/modules/notification_center/getTimestampString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var2 = function getDurationString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.seconds;
            var1 = var1.getFormatter;
            var5 = undefined;
            var2 = var1.bind(var5)();
            var8 = 60;
            if(!(!(var11 < var8))) { _fun0001_ip = 458; continue _fun0001 }
 31:
            var9 = 3600;
            if(!(!(var11 < var9))) { _fun0001_ip = 382; continue _fun0001 }
 44:
            var10 = 86400;
            if(!(!(var11 < var10))) { _fun0001_ip = 306; continue _fun0001 }
 57:
            var1 = _closure1_slot3;
            if(!(!(var11 < var1))) { _fun0001_ip = 233; continue _fun0001 }
 71:
            var1 = _closure1_slot4;
            if(!(!(var11 < var1))) { _fun0001_ip = 156; continue _fun0001 }
 79:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 0;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var7 = var1.intl;
            var6 = var7.formatToPlainString;
            var4 = var2.years;
            var1 = {};
            var12 = global;
            var14 = var12.Math;
            var13 = var14.floor;
            var12 = _closure1_slot4;
            var12 = var11 / var12;
            var12 = var13.bind(var14)(var12);
            var1['years'] = var12;
            var1 = var6.bind(var7)(var4, var1);
            _fun0001_ip = 231; continue _fun0001;
 156:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 0;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var12 = var4.intl;
            var7 = var12.formatToPlainString;
            var6 = var2.months;
            var4 = {};
            var13 = global;
            var15 = var13.Math;
            var14 = var15.floor;
            var13 = _closure1_slot3;
            var13 = var11 / var13;
            var13 = var14.bind(var15)(var13);
            var4['months'] = var13;
            var1 = var7.bind(var12)(var6, var4);
 231:
            _fun0001_ip = 304; continue _fun0001;
 233:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 0;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var7 = var3.intl;
            var6 = var7.formatToPlainString;
            var4 = var2.days;
            var3 = {};
            var12 = global;
            var13 = var12.Math;
            var12 = var13.floor;
            var10 = var11 / var10;
            var10 = var12.bind(var13)(var10);
            var3['days'] = var10;
            var1 = var6.bind(var7)(var4, var3);
 304:
            _fun0001_ip = 380; continue _fun0001;
 306:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 0;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var7 = var3.intl;
            var6 = var7.formatToPlainString;
            var4 = var2.hours;
            var3 = {};
            var10 = global;
            var12 = var10.Math;
            var10 = var12.floor;
            var9 = var11 / var9;
            var9 = var10.bind(var12)(var9);
            var3['hours'] = var9;
            var1 = var6.bind(var7)(var4, var3);
 380:
            _fun0001_ip = 456; continue _fun0001;
 382:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 0;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var7 = var3.intl;
            var6 = var7.formatToPlainString;
            var4 = var2.minutes;
            var3 = {};
            var9 = global;
            var10 = var9.Math;
            var9 = var10.floor;
            var8 = var11 / var8;
            var8 = var9.bind(var10)(var8);
            var3['minutes'] = var8;
            var1 = var6.bind(var7)(var4, var3);
 456:
            _fun0001_ip = 512; continue _fun0001;
 458:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 0;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var3 = var2.minutes;
            var2 = {};
            var6 = 1;
            var2['minutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 512:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 2592000;
    var _closure1_slot3 = var1;
    var1 = 31104000;
    var _closure1_slot4 = var1;
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notification_center/getTimestampString.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getTimestampString(arg1) {
        var1 = arg1;
        var6 = var1.since;
        var4 = var1.getFormatter;
        var3 = _closure1_slot5;
        var2 = {};
        var9 = _closure1_slot1;
        var10 = _closure1_slot2;
        var5 = 1;
        var7 = var10[var5];
        var1 = undefined;
        var7 = var9.bind(var1)(var7);
        var8 = var7.bind(var1)();
        var7 = var8.diff;
        var5 = var10[var5];
        var5 = var9.bind(var1)(var5);
        var6 = var5.bind(var1)(var6);
        var5 = 's';
        var5 = var7.bind(var8)(var6, var5);
        var2['seconds'] = var5;
        var2['getFormatter'] = var4;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['default'] = var5;
    var5 = function() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 0;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.XIGt+f;
        var1['minutes'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.rhY1Rk;
        var1['hours'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.GBLpQ0;
        var1['days'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.XzBNbW;
        var1['months'] = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.I1E8p6;
        var1['years'] = var2;
        return var1;
    };
    var3['getAbbreviatedFormatter'] = var5;
    var4 = function() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 0;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.GqQ/Y2;
        var1['minutes'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.c5zfWV;
        var1['hours'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.amjnaG;
        var1['days'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.SoON3d;
        var1['months'] = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.12B3RU;
        var1['years'] = var2;
        return var1;
    };
    var3['getFullFormatter'] = var4;
    var3['getDurationString'] = var2;
    return var1;
})();