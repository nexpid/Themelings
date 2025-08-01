// app/utils/NumberUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/NumberUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function shortenAndLocalizeNumber(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = 1000000;
            if(!(!(var5 < var1))) { _fun0001_ip = 99; continue _fun0001 }
 13:
            var3 = var5 / var1;
            var2 = var3.toFixed;
            var1 = 1;
            var6 = var2.bind(var3)(var1);
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 0;
            var3 = var8[var1];
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var7.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.Iku48P;
            var1 = {};
            var1['value'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 99:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 0;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.OiHat7;
            var1 = {};
            var1['value'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['shortenAndLocalizeNumber'] = var4;
    var4 = function humanizeValue(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var5 = 1000;
            if(!(!(var7 < var5))) { _fun0002_ip = 280; continue _fun0002 }
 16:
            var8 = 1000000;
            if(!(!(var7 < var8))) { _fun0002_ip = 189; continue _fun0002 }
 29:
            var1 = global;
            var6 = var1.Math;
            var4 = var6.floor;
            var3 = 10;
            var2 = var3 * var7;
            var2 = var2 / var8;
            var2 = var4.bind(var6)(var2);
            var3 = var2 / var3;
            var1 = var1.Intl;
            var6 = var1.NumberFormat;
            var4 = {};
            var1 = 1;
            var4['maximumFractionDigits'] = var1;
            var1 = var6.prototype;
            var2 = Object.create(var1, {constructor: {value: var6}});
            var11 = arg2;
            var12 = var2;
            var10 = var4;
            var1 = new var12[var6](var11, var10, var9);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = var2.format;
            var6 = var1.bind(var2)(var3);
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 0;
            var3 = var9[var1];
            var2 = undefined;
            var3 = var8.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var9[var1];
            var1 = var8.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.Iku48P;
            var1 = {};
            var1['value'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 189:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 0;
            var3 = var8[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.84R4TU;
            var1 = {};
            var6 = global;
            var8 = var6.Math;
            var6 = var8.floor;
            var5 = var7 / var5;
            var5 = var6.bind(var8)(var5);
            var1['value'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 280:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.OiHat7;
            var1 = {};
            var5 = global;
            var6 = var5.Math;
            var5 = var6.floor;
            var5 = var5.bind(var6)(var7);
            var1['value'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['humanizeValue'] = var4;
    var4 = function parseInteger(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0003_ip = 20; continue _fun0003 }
 12:
            var2 = global;
            var1 = var2.NaN;
 20:
            var2 = null;
            if(!(var2 != var5)) { _fun0003_ip = 64; continue _fun0003 }
 26:
            var3 = global;
            var2 = var3.parseInt;
            var2 = var2.bind(var4)(var5);
            var4 = var3.Number;
            var3 = var4.isNaN;
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0003_ip = 62; continue _fun0003 }
 59:
            var2 = var1;
 62:
            return var2;
 64:
            return var1;
        }
    };
    var3['parseInteger'] = var4;
    var2 = function formatPercent(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arguments[2];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0004_ip = 11; continue _fun0004 }
 9:
            var1 = {};
 11:
            var2 = global;
            var4 = var2.Intl;
            var3 = var4.NumberFormat;
            var2 = {'style': 'percent', 'minimumFractionDigits': 0};
            var6 = var2;
            var5 = var1;
            var1 = copyDataProperties(var6, var5);
            var1 = arg1;
            var3 = var3.bind(var4)(var1, var2);
            var2 = var3.format;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['formatPercent'] = var2;
    return var1;
})();