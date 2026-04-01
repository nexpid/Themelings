// app/utils/PriceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var8 = function formatSingleCurrencyPrice(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg3;
            var6 = {};
            var7 = null;
            var2 = var1;
            if(!(var7 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var13 = var6;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = var7 == var1;
            var3 = undefined;
            var5 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var1.localeOverride;
case 4:
            if(!(var7 == var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot2;
            var5 = var1.locale;
case 6:
            var1 = 'en-US';
            var1 = var1 === var5;
            var2 = var1;
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot6;
            var8 = var9.includes;
            var4 = _closure1_slot2;
            var4 = var4.systemLocale;
            var2 = var8.bind(var9)(var4);
case 8:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = 'code';
            var6['currencyDisplay'] = var2;
case 10:
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 4;
            var2 = var8[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.isWindows;
            var1 = var2.bind(var4)();
case 12:
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot2;
            var4 = var2.systemLocale;
            var2 = 'en-GB';
            var1 = var2 === var4;
case 14:
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = 'code';
            var6['currencyDisplay'] = var1;
case 16:
            var2 = var6.maximumFractionDigits;
            var4 = var6.minimumFractionDigits;
            var1 = 0;
            var2 = var1 === var2;
            if(!var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var7 == var4;
case 18:
            if(!var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var6['minimumFractionDigits'] = var1;
case 20:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var4 = var2.bind(var3)(var1);
            var3 = var4.formatPrice;
            var13 = arg1;
            var12 = arg2;
            var14 = var4;
            var11 = var5;
            var10 = var6;
            var1 = var14[var3](var13, var12, var11, var10, var9);
            return var1;
        }
    };
    var _closure1_slot7 = var8;
    var7 = function formatDualPriceForBG(arg1, arg2) {
        var7 = arg1;
        var5 = arg2;
        var4 = _closure1_slot7;
        var2 = _closure1_slot5;
        var2 = var2.EUR;
        var3 = undefined;
        var6 = var4.bind(var3)(var7, var2, var5);
        var2 = 1.95583;
        var2 = var2 * var7;
        var1 = _closure1_slot5;
        var1 = var1.BGN;
        var9 = var4.bind(var3)(var2, var1, var5);
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var12 = '';
        var10 = ' (';
        var8 = ')';
        var11 = var6;
        var1 = var12[var4](var11, var10, var9, var8, var7);
        return var1;
    };
    var _closure1_slot8 = var7;
    var6 = function formatPrice(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var4 = arg3;
            var1 = global;
            var3 = var1.Date;
            var2 = var3.now;
            var2 = var2.bind(var3)();
            var7 = var1.Date;
            var1 = var7.prototype;
            var3 = Object.create(var1, {constructor: {value: var7}});
            var13 = '2026-08-05T22:00:00Z';
            var14 = var3;
            var1 = new var14[var7](var13, var12);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = var3.getTime;
            var1 = var1.bind(var3)();
            var2 = var2 >= var1;
            var1 = false;
            if(var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var2 = var7[var2];
            var7 = undefined;
            var8 = var8.bind(var7)(var2);
            var2 = var8.getPlatformName;
            var8 = var2.bind(var8)();
            var2 = 'android';
            if(!(var2 !== var8)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var2 = 'ios';
            if(!(var2 !== var8)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var2 = _closure1_slot3;
            var8 = var2.ipCountryCode;
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 7;
            var2 = var10[var2];
            var2 = var9.bind(var7)(var2);
            var9 = var2.default;
            var2 = var9.getStoreFront;
            var9 = var2.bind(var9)();
            var2 = null;
            var10 = var2 == var9;
            var2 = undefined;
            if(var10) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var2 = var9.country;
case 29:
            var8 = var2;
            _fun0002_ip = 28; continue _fun0002;
case 24:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 6;
            var2 = var10[var2];
            var2 = var9.bind(var7)(var2);
            var9 = var2.default;
            var2 = var9.getUserCountry;
            var8 = var2.bind(var9)();
case 28:
            var2 = 'BG';
            var2 = var2 === var8;
            if(!var2) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var8 = null;
            var8 = var8 == var6;
            var7 = undefined;
            if(var8) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var8 = var6.toLowerCase;
            var7 = var8.bind(var6)();
case 33:
            var3 = _closure1_slot5;
            var3 = var3.EUR;
            var2 = var7 === var3;
case 31:
            var1 = var2;
case 22:
            if(var1) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var3 = _closure1_slot7;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var6, var4);
            _fun0002_ip = 37; continue _fun0002;
case 35:
            var3 = _closure1_slot8;
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
case 37:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function formatRate(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var8 = arg2;
            var7 = arg3;
            var2 = _closure1_slot4;
            var2 = var2.YEAR;
            if(!(var8 !== var2)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var2 = _closure1_slot4;
            var2 = var2.MONTH;
            if(!(var8 === var2)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var2 = 1;
            if(!(var2 !== var7)) { _fun0003_ip = 42; continue _fun0003 }
case 40:
            var2 = _closure1_slot4;
            var2 = var2.MONTH;
            if(!(var8 === var2)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var2 = 1;
            if(!(!(var7 > var2))) { _fun0003_ip = 45; continue _fun0003 }
case 43:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var3 = 'Unsupported interval type: ';
            var2 = ', and interval count: ';
            var12 = var6.bind(var3)(var8, var2, var7);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var13 = var3;
            var2 = new var13[var4](var12, var11);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 45:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 8;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.Qc+9ww;
            var2 = {};
            var2['price'] = var5;
            var2['intervalCount'] = var7;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
case 42:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 8;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.AbOLNu;
            var2 = {};
            var2['price'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
case 38:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 8;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.rS8FA+;
            var1 = {};
            var1['price'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function maybeShortenPrice(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var3 = var5.length;
            var2 = 5;
            var1 = var5;
            if(!(var3 > var2)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var4 = var5.replace;
            var3 = /\.00(?=[\s)]|$)/g;
            var2 = '';
            var1 = var4.bind(var5)(var3, var2);
case 46:
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var9 = global;
    var15 = var9.Object;
    var14 = var15.defineProperty;
    var12 = {};
    var1 = true;
    var12['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var12);
    var1 = 0;
    var12 = var11[var1];
    var1 = undefined;
    var12 = var13.bind(var1)(var12);
    var _closure1_slot2 = var12;
    var12 = 1;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
    var _closure1_slot3 = var12;
    var12 = 2;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.SubscriptionIntervalTypes;
    var _closure1_slot4 = var12;
    var12 = 3;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.CurrencyCodes;
    var _closure1_slot5 = var12;
    var13 = var9.Object;
    var12 = var13.freeze;
    var9 = ['en-CA', 'en-AU', 'en-NZ'];
    var9 = var12.bind(var13)(var9);
    var _closure1_slot6 = var9;
    var9 = 10;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/PriceUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['formatSingleCurrencyPrice'] = var8;
    var3['formatDualPriceForBG'] = var7;
    var3['formatPrice'] = var6;
    var3['formatRate'] = var5;
    var5 = function formatPercent(arg1, arg2) {
        var1 = global;
        var4 = var1.Intl;
        var3 = var4.NumberFormat;
        var2 = arg1;
        var1 = {'style': 'percent', 'minimumFractionDigits': 0};
        var3 = var3.bind(var4)(var2, var1);
        var2 = var3.format;
        var1 = arg2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['formatPercent'] = var5;
    var5 = function formatSubscriptionPlanRate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = 'interval_count';
            var2 = var2 in var1;
            if(var2) { _fun0005_ip = 48; continue _fun0005 }
case 3:
            var5 = var1.intervalCount;
            _fun0005_ip = 49; continue _fun0005;
case 48:
            var5 = var1.interval_count;
case 49:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 9;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var3 = var7.getPrice;
            var2 = var1.id;
            var2 = var3.bind(var7)(var2);
            var3 = _closure1_slot10;
            var7 = _closure1_slot9;
            var6 = var2.amount;
            var2 = var2.currency;
            var2 = var7.bind(var4)(var6, var2);
            var1 = var1.interval;
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['formatSubscriptionPlanRate'] = var5;
    var3['maybeShortenPrice'] = var4;
    var2 = function shortenAndFormatPrice(arg1, arg2, arg3) {
        var3 = _closure1_slot11;
        var6 = _closure1_slot9;
        var2 = undefined;
        var5 = arg1;
        var4 = arg2;
        var1 = arg3;
        var1 = var6.bind(var2)(var5, var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['shortenAndFormatPrice'] = var2;
    return var1;
})();