// discord_common/js/packages/code-splitting/importWithRetry.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = function _importWithRetry() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot1;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var12 = var2.createPromise;
                    var13 = var2.webpackId;
                    var11 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=35);
case 4:
                    return var11;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var14 = 500;
                    var15 = 0;
                    var10 = global;
                    var9 = 2;
                    var8 = 5000;
                    var6 = 50;
case 8: // try_start_0
                    var4 = var12;
                    var4 = var4.bind(var11)();
                    SaveGenerator(address=80);
case 9:
                    return var4;
case 10:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12: // try_end0
                    return var4;
case 11:
                    return var4;
case 13: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = var13;
                    var4 = _closure1_slot0;
                    var4 = var4.cache;
                    var4 = var5 in var4;
                    if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = var15;
                    if(!(!(var4 >= var6))) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = _closure1_slot2;
                    var4 = var14;
                    var4 = var5.bind(var11)(var4);
                    SaveGenerator(address=137);
case 18:
                    return var4;
case 19:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var11)();
                    SaveGenerator(address=155);
case 22:
                    return var5;
case 23:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=15);
                    if(var16) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var18 = var10.Math;
                    var17 = var18.min;
                    var16 = var14;
                    var16 = var9 * var16;
                    var14 = var17.bind(var18)(var8, var16);
                    var16 = var15;
                    var15 = var16 + 1;
                    _fun0001_ip = 8; continue _fun0001;
case 24:
                    return var5;
case 20:
                    return var4;
case 16:
                    var4 = var3;
                    throw var4;
case 14:
                    throw var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var8[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot1 = var4;
    var4 = function pausedPromise(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = global;
            var4 = var1.setTimeout;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot2 = var4;
    var5 = function awaitOnline() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot3 = var5;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/code-splitting/importWithRetry.tsx';
    var6 = var7.bind(var8)(var6);
    var3['awaitOnline'] = var5;
    var5 = function setAwaitOnline(arg1) {
        var1 = arg1;
        _closure1_slot3 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setAwaitOnline'] = var5;
    var3['pausedPromise'] = var4;
    var2 = function importWithRetry() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['importWithRetry'] = var2;
    return var1;
})();