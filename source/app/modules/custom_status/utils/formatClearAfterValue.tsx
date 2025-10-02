// app/modules/custom_status/utils/formatClearAfterValue.tsx
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
    var4 = var4.ClearAfterValues;
    var _closure1_slot3 = var4;
    var4 = function formatDuration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var3 = var1.Date;
            var2 = var3.now;
            var3 = var2.bind(var3)();
            var2 = arg1;
            var5 = var3 + var2;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var8 = undefined;
            var6 = var4.bind(var8)(var3);
            var4 = var6.isSameDay;
            var3 = var1.Date;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var12 = var7;
            var3 = new var12[var3](var11);
            var3 = var3 instanceof Object ? var3 : var7;
            var1 = var1.Date;
            var7 = var1.prototype;
            var7 = Object.create(var7, {constructor: {value: var1}});
            var12 = var7;
            var11 = var5;
            var1 = new var12[var1](var11, var10);
            var1 = var1 instanceof Object ? var1 : var7;
            var1 = var4.bind(var6)(var3, var1);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 2;
            var2 = var9[var6];
            var2 = var7.bind(var8)(var2);
            var2 = var2.intl;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.formatToPlainString;
            var1 = var9[var6];
            var1 = var7.bind(var8)(var1);
            var1 = var1.t;
            var3 = var1.bI7n9v;
            var1 = {};
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.intl;
            var8 = var6.data;
            var7 = var8.formatTime;
            var6 = {};
            var9 = 'short';
            var6['format'] = var9;
            var6 = var7.bind(var8)(var5, var6);
            var1['time'] = var6;
            var1 = var4.bind(var2)(var3, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var2.data;
            var3 = var4.formatTime;
            var2 = {};
            var6 = 'short';
            var2['format'] = var6;
            var1 = var3.bind(var4)(var5, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/utils/formatClearAfterValue.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function formatClearAfterValue(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = false;
case 5:
            var3 = _closure1_slot3;
            var3 = var3.TODAY;
            if(!(var3 !== var6)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = _closure1_slot3;
            var3 = var3.HOURS_4;
            if(!(var3 !== var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = _closure1_slot3;
            var3 = var3.HOURS_1;
            if(!(var3 !== var6)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = _closure1_slot3;
            var3 = var3.MINUTES_30;
            if(!(var3 !== var6)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = _closure1_slot3;
            var3 = var3.DONT_CLEAR;
            if(!(var3 !== var6)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.assertNever;
            var3 = var3.bind(var5)(var6);
            return var4;
case 15:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var5 = var8[var3];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.bRn8cn;
            var3 = var5.bind(var6)(var3);
            return var3;
case 13:
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var6 = var8[var3];
            var6 = var5.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.TS3eJS;
            var3 = {};
            var8 = 30;
            var3['minutes'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var6 = _closure1_slot4;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 3;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.Millis;
            var7 = var5.MINUTE;
            var5 = 30;
            var5 = var5 * var7;
            var3 = var6.bind(var4)(var5);
case 19:
            return var3;
case 11:
            if(var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var6 = var8[var3];
            var6 = var5.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.Rea2gY;
            var3 = {};
            var8 = 1;
            var3['hours'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var6 = _closure1_slot4;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 3;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.Millis;
            var5 = var5.HOUR;
            var3 = var6.bind(var4)(var5);
case 22:
            return var3;
case 9:
            if(var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var6 = var8[var3];
            var6 = var5.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.Rea2gY;
            var3 = {};
            var8 = 4;
            var3['hours'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var6 = _closure1_slot4;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 3;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.Millis;
            var7 = var5.HOUR;
            var5 = 4;
            var5 = var5 * var7;
            var3 = var6.bind(var4)(var5);
case 25:
            return var3;
case 7:
            if(var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var3 = var7[var1];
            var3 = var6.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.GQmLra;
            var1 = var3.bind(var5)(var1);
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var3 = _closure1_slot4;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.Millis;
            var2 = var2.DAY;
            var1 = var3.bind(var4)(var2);
case 28:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();