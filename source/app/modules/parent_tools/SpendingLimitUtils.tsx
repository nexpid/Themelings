// app/modules/parent_tools/SpendingLimitUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/SpendingLimitUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function spendingLimitEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = null;
            var1 = var3 == var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3 == var4;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3 != var5;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3 != var4;
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var5.amount;
            var3 = var4.amount;
            var3 = var6 === var3;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var5.currency;
            var4 = var4.currency;
            var3 = var5 === var4;
case 10:
            var2 = var3;
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['spendingLimitEqual'] = var4;
    var4 = function getNextRenewalDateLabel() {
        var1 = global;
        var2 = var1.Date;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var11 = var3;
        var2 = new var11[var2](var10);
        var3 = var2 instanceof Object ? var2 : var3;
        var4 = var1.Date;
        var7 = var1.Date;
        var6 = var7.UTC;
        var2 = var3.getUTCFullYear;
        var5 = var2.bind(var3)();
        var2 = var3.getUTCMonth;
        var2 = var2.bind(var3)();
        var3 = 1;
        var2 = var2 + var3;
        var10 = var6.bind(var7)(var5, var2, var3);
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var11 = var3;
        var2 = new var11[var4](var10, var9);
        var3 = var2 instanceof Object ? var2 : var3;
        var1 = var1.Intl;
        var5 = var1.DateTimeFormat;
        var1 = var5.prototype;
        var2 = Object.create(var1, {constructor: {value: var5}});
        var10 = undefined;
        var9 = {'dateStyle': 'short', 'timeZone': 'UTC'};
        var11 = var2;
        var1 = new var11[var5](var10, var9, var8);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.format;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['getNextRenewalDateLabel'] = var4;
    var4 = function getCurrencySymbol(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = undefined;
            var5 = undefined;
case 12: // try_start_0
            var4 = global;
            var4 = var4.Intl;
            var7 = var4.NumberFormat;
            var4 = {};
            var6 = 'currency';
            var4['style'] = var6;
            var8 = var1;
            var6 = var8.toUpperCase;
            var6 = var6.bind(var8)();
            var4['currency'] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var11 = var6;
            var10 = undefined;
            var9 = var4;
            var4 = new var11[var7](var10, var9, var8);
            var7 = var4 instanceof Object ? var4 : var6;
            var6 = var7.formatToParts;
            var4 = 0;
            var7 = var6.bind(var7)(var4);
            var6 = var7.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = 'currency';
                var1 = var1 === var2;
                return var1;
            };
            var6 = var6.bind(var7)(var4);
            var5 = var6;
            var4 = null;
            var6 = var4 == var6;
            var2 = undefined;
            if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = var5.value;
case 13:
            var3 = var2;
            if(!(var4 == var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = var1;
            var2 = var4.toUpperCase;
            var2 = var2.bind(var4)();
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var2 = var3;
case 17: // try_end0
            return var2;
case 18: // catch_target0
            CatchBlockStart(arg_register=1);
            var2 = var1;
            var1 = var2.toUpperCase;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['getCurrencySymbol'] = var4;
    var2 = function sanitizeAmountInput(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var9 = arg2;
            var8 = 0;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = var4.replace;
            var1 = /[^0-9.]/g;
            var7 = '';
            var1 = var2.bind(var4)(var1, var7);
            var2 = var1.split;
            var6 = '.';
            var10 = var2.bind(var1)(var6);
            var2 = var10.length;
            var3 = 1;
            if(!(var3 !== var2)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = var10[var8];
            var2 = var10.slice;
            var3 = var2.bind(var10)(var3);
            var2 = var3.join;
            var3 = var2.bind(var3)(var7);
            var2 = var3.slice;
            var3 = var2.bind(var3)(var8, var9);
            var2 = global;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var1 = var2.bind(var7)(var5, var6, var3);
case 21:
            return var1;
case 19:
            var3 = var4.replace;
            var2 = /[^0-9]/g;
            var1 = '';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['sanitizeAmountInput'] = var2;
    return var1;
})();