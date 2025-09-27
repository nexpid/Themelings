// app/utils/PriceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function formatPrice(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg3;
            var7 = null;
            var6 = var1;
            if(!(var7 == var6)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var6 = {};
 14:
            var2 = var7 == var1;
            var3 = undefined;
            var5 = undefined;
            if(var2) { _fun0001_ip = 33; continue _fun0001 }
 25:
            var5 = var1.localeOverride;
 33:
            if(!(var7 == var5)) { _fun0001_ip = 50; continue _fun0001 }
 37:
            var1 = _closure1_slot2;
            var5 = var1.locale;
 50:
            var1 = 'en-US';
            var1 = var1 === var5;
            if(!var1) { _fun0001_ip = 88; continue _fun0001 }
 61:
            var8 = _closure1_slot4;
            var4 = var8.includes;
            var2 = _closure1_slot2;
            var2 = var2.systemLocale;
            var1 = var4.bind(var8)(var2);
 88:
            if(!var1) { _fun0001_ip = 101; continue _fun0001 }
 91:
            var1 = 'code';
            var6['currencyDisplay'] = var1;
 101:
            var2 = var6.maximumFractionDigits;
            var4 = var6.minimumFractionDigits;
            var1 = 0;
            var2 = var1 === var2;
            if(!var2) { _fun0001_ip = 126; continue _fun0001 }
 122:
            var2 = var7 == var4;
 126:
            if(!var2) { _fun0001_ip = 135; continue _fun0001 }
 129:
            var6['minimumFractionDigits'] = var1;
 135:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = var2.bind(var3)(var1);
            var3 = var4.formatPrice;
            var12 = arg1;
            var11 = arg2;
            var13 = var4;
            var10 = var5;
            var9 = var6;
            var1 = var13[var3](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot5 = var6;
    var5 = function formatRate(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var8 = arg2;
            var7 = arg3;
            var2 = _closure1_slot3;
            var2 = var2.YEAR;
            if(!(var8 !== var2)) { _fun0002_ip = 275; continue _fun0002 }
 29:
            var2 = _closure1_slot3;
            var2 = var2.MONTH;
            if(!(var8 === var2)) { _fun0002_ip = 53; continue _fun0002 }
 43:
            var2 = 1;
            if(!(var2 !== var7)) { _fun0002_ip = 208; continue _fun0002 }
 53:
            var2 = _closure1_slot3;
            var2 = var2.MONTH;
            if(!(var8 === var2)) { _fun0002_ip = 74; continue _fun0002 }
 67:
            var2 = 1;
            if(!(!(var7 > var2))) { _fun0002_ip = 134; continue _fun0002 }
 74:
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
 134:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 3;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.Qc+9w8;
            var2 = {};
            var2['price'] = var5;
            var2['intervalCount'] = var7;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
 208:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 3;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.AbOLNj;
            var2 = {};
            var2['price'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
 275:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.rS8FAw;
            var1 = {};
            var1['price'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function maybeShortenPrice(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var3 = var5.length;
            var2 = 5;
            var1 = var5;
            if(!(var3 > var2)) { _fun0003_ip = 47; continue _fun0003 }
 18:
            var4 = var5.replace;
            var3 = /\.00$/;
            var2 = '';
            var1 = var4.bind(var5)(var3, var2);
 47:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var7 = global;
    var12 = var7.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var10);
    var1 = 0;
    var11 = var9[var1];
    var10 = metroImportDefault;
    var1 = undefined;
    var10 = var10.bind(var1)(var11);
    var _closure1_slot2 = var10;
    var10 = 1;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var10 = var10.SubscriptionIntervalTypes;
    var _closure1_slot3 = var10;
    var11 = var7.Object;
    var10 = var11.freeze;
    var7 = ['en-CA', 'en-AU', 'en-NZ'];
    var7 = var10.bind(var11)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/PriceUtils.tsx';
    var7 = var8.bind(var9)(var7);
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = 'interval_count';
            var2 = var2 in var1;
            if(var2) { _fun0004_ip = 22; continue _fun0004 }
 14:
            var5 = var1.intervalCount;
            _fun0004_ip = 28; continue _fun0004;
 22:
            var5 = var1.interval_count;
 28:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var3 = var7.getPrice;
            var2 = var1.id;
            var2 = var3.bind(var7)(var2);
            var3 = _closure1_slot6;
            var7 = _closure1_slot5;
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
        var3 = _closure1_slot7;
        var6 = _closure1_slot5;
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