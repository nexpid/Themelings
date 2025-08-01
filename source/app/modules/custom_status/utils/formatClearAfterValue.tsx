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
 0:
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
            if(var1) { _fun0001_ip = 227; continue _fun0001 }
 144:
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
            _fun0001_ip = 254; continue _fun0001;
 227:
            var4 = var2.data;
            var3 = var4.formatTime;
            var2 = {};
            var6 = 'short';
            var2['format'] = var6;
            var1 = var3.bind(var4)(var5, var2);
 254:
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
 0:
            var6 = arg1;
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var1 = false;
 14:
            var3 = _closure1_slot3;
            var3 = var3.TODAY;
            if(!(var3 !== var6)) { _fun0002_ip = 542; continue _fun0002 }
 34:
            var3 = _closure1_slot3;
            var3 = var3.HOURS_4;
            if(!(var3 !== var6)) { _fun0002_ip = 421; continue _fun0002 }
 51:
            var3 = _closure1_slot3;
            var3 = var3.HOURS_1;
            if(!(var3 !== var6)) { _fun0002_ip = 307; continue _fun0002 }
 68:
            var3 = _closure1_slot3;
            var3 = var3.MINUTES_30;
            if(!(var3 !== var6)) { _fun0002_ip = 186; continue _fun0002 }
 82:
            var3 = _closure1_slot3;
            var3 = var3.DONT_CLEAR;
            if(!(var3 !== var6)) { _fun0002_ip = 129; continue _fun0002 }
 96:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.assertNever;
            var3 = var3.bind(var5)(var6);
            return var4;
 129:
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
 186:
            if(var1) { _fun0002_ip = 257; continue _fun0002 }
 189:
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
            _fun0002_ip = 305; continue _fun0002;
 257:
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
 305:
            return var3;
 307:
            if(var1) { _fun0002_ip = 378; continue _fun0002 }
 310:
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
            _fun0002_ip = 419; continue _fun0002;
 378:
            var6 = _closure1_slot4;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 3;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.Millis;
            var5 = var5.HOUR;
            var3 = var6.bind(var4)(var5);
 419:
            return var3;
 421:
            if(var1) { _fun0002_ip = 492; continue _fun0002 }
 424:
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
            _fun0002_ip = 540; continue _fun0002;
 492:
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
 540:
            return var3;
 542:
            if(var1) { _fun0002_ip = 602; continue _fun0002 }
 545:
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
            _fun0002_ip = 643; continue _fun0002;
 602:
            var3 = _closure1_slot4;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.Millis;
            var2 = var2.DAY;
            var1 = var3.bind(var4)(var2);
 643:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();