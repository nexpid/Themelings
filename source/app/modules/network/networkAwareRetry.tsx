// app/modules/network/networkAwareRetry.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _networkAwareRetry() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var14 = arg1;
                    var13 = undefined;
                    if(!(var2 === var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = 3;
case 4:
                    var15 = var2;
                    var16 = undefined;
                    var17 = undefined;
                    SaveGenerator(address=36);
case 6:
                    return var13;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot4;
                    var4 = var5.getId;
                    var16 = var4.bind(var5)();
                    var5 = 0;
                    var17 = 0;
                    var4 = var15;
                    var11 = 3;
                    var10 = 2;
                    var9 = 1;
                    var8 = 2000;
                    if(!(var5 < var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11: // try_start_0
                    var4 = var14;
                    var4 = var4.bind(var13)();
                    SaveGenerator(address=102);
case 12:
                    return var4;
case 13:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15: // try_end0
                    return var4;
case 14:
                    return var4;
case 16: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = var17;
                    var5 = var4 + var9;
                    var4 = var15;
                    if(!(!(var5 >= var4))) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var10];
                    var6 = var5.bind(var13)(var4);
                    var5 = var6.timeoutPromise;
                    var4 = var17;
                    var4 = var4 + var9;
                    var4 = var8 * var4;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=176);
case 19:
                    return var4;
case 20:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var6 = var6.bind(var13)(var5);
                    var5 = var6.awaitOnline;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=216);
case 23:
                    return var5;
case 24:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var7 = var16;
                    var18 = _closure1_slot4;
                    var6 = var18.getId;
                    var6 = var6.bind(var18)();
                    if(!(var7 === var6)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var6 = var17;
                    var7 = var6 + 1;
                    var17 = var7;
                    var6 = var15;
                    if(var7 < var6) { _fun0001_ip = 11; continue _fun0001 }
case 10:
                    var6 = global;
                    var8 = var6.Error;
                    var6 = var8.prototype;
                    var7 = Object.create(var6, {constructor: {value: var8}});
                    var19 = 'Unreachable code in networkAwareRetry';
                    var20 = var7;
                    var6 = new var20[var8](var19, var18);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
case 27:
                    var6 = global;
                    var8 = var6.Error;
                    var6 = var8.prototype;
                    var7 = Object.create(var6, {constructor: {value: var8}});
                    var19 = 'User changed.';
                    var20 = var7;
                    var6 = new var20[var8](var19, var18);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
case 25:
                    return var5;
case 21:
                    return var4;
case 17:
                    throw var3;
case 8:
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
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/network/networkAwareRetry.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function networkAwareRetry() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();