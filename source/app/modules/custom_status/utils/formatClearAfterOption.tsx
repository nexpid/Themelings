// app/modules/custom_status/utils/formatClearAfterOption.tsx
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
            var3 = var1.DN91Jy;
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
    var4 = 'modules/custom_status/utils/formatClearAfterOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function formatClearAfterOption(arg1) {
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
            if(!(var3 !== var6)) { _fun0002_ip = 635; continue _fun0002 }
 34:
            var3 = _closure1_slot3;
            var3 = var3.HOURS_4;
            if(!(var3 !== var6)) { _fun0002_ip = 484; continue _fun0002 }
 51:
            var3 = _closure1_slot3;
            var3 = var3.HOURS_1;
            if(!(var3 !== var6)) { _fun0002_ip = 337; continue _fun0002 }
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
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var6 = var9[var3];
            var6 = var5.bind(var4)(var6);
            var8 = var6.intl;
            var6 = var8.formatToPlainString;
            var3 = var9[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.TS3eJS;
            var3 = {};
            var7 = 30;
            var3['minutes'] = var7;
            var10 = var6.bind(var8)(var5, var3);
            if(var1) { _fun0002_ip = 260; continue _fun0002 }
 255:
            var3 = var10;
            _fun0002_ip = 335; continue _fun0002;
 260:
            var6 = _closure1_slot4;
            var8 = _closure1_slot1;
            var5 = 3;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.Millis;
            var5 = var5.MINUTE;
            var5 = var7 * var5;
            var12 = var6.bind(var4)(var5);
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var15 = '';
            var13 = ' (';
            var11 = ')';
            var14 = var10;
            var3 = var15[var8](var14, var13, var12, var11, var10);
 335:
            return var3;
 337:
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
            var9 = 1;
            var3['hours'] = var9;
            var10 = var6.bind(var7)(var5, var3);
            if(var1) { _fun0002_ip = 411; continue _fun0002 }
 406:
            var3 = var10;
            _fun0002_ip = 482; continue _fun0002;
 411:
            var6 = _closure1_slot4;
            var7 = _closure1_slot1;
            var5 = 3;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.Millis;
            var5 = var5.HOUR;
            var12 = var6.bind(var4)(var5);
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var15 = '';
            var13 = ' (';
            var11 = ')';
            var14 = var10;
            var3 = var15[var8](var14, var13, var12, var11, var10);
 482:
            return var3;
 484:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var6 = var9[var3];
            var6 = var5.bind(var4)(var6);
            var8 = var6.intl;
            var6 = var8.formatToPlainString;
            var3 = var9[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.Rea2gY;
            var3 = {};
            var7 = 4;
            var3['hours'] = var7;
            var10 = var6.bind(var8)(var5, var3);
            if(var1) { _fun0002_ip = 558; continue _fun0002 }
 553:
            var3 = var10;
            _fun0002_ip = 633; continue _fun0002;
 558:
            var6 = _closure1_slot4;
            var8 = _closure1_slot1;
            var5 = 3;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.Millis;
            var5 = var5.HOUR;
            var5 = var7 * var5;
            var12 = var6.bind(var4)(var5);
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var15 = '';
            var13 = ' (';
            var11 = ')';
            var14 = var10;
            var3 = var15[var8](var14, var13, var12, var11, var10);
 633:
            return var3;
 635:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var8 = var7.intl;
            if(var1) { _fun0002_ip = 695; continue _fun0002 }
 663:
            var7 = var8.string;
            var1 = var6[var3];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.GQmLra;
            var1 = var7.bind(var8)(var1);
            _fun0002_ip = 807; continue _fun0002;
 695:
            var7 = var8.formatToPlainString;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.Rea2gY;
            var3 = {};
            var9 = 24;
            var3['hours'] = var9;
            var7 = var7.bind(var8)(var5, var3);
            var3 = _closure1_slot4;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.Millis;
            var2 = var2.DAY;
            var12 = var3.bind(var4)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var15 = '';
            var13 = ' (';
            var11 = ')';
            var14 = var7;
            var1 = var15[var5](var14, var13, var12, var11, var10);
 807:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();