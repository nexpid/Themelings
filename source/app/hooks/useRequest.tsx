// app/hooks/useRequest.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useRequest.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRequest(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot5;
        var4 = var6.useState;
        var3 = false;
        var3 = var4.bind(var6)(var3);
        var11 = _closure1_slot4;
        var8 = undefined;
        var10 = 2;
        var5 = var11.bind(var8)(var3, var10);
        var3 = 0;
        var4 = var5[var3];
        var9 = 1;
        var5 = var5[var9];
        var _closure2_slot1 = var5;
        var12 = var6.useState;
        var5 = null;
        var5 = var12.bind(var6)(var5);
        var5 = var11.bind(var8)(var5, var10);
        var3 = var5[var3];
        var5 = var5[var9];
        var _closure2_slot2 = var5;
        var5 = var6.useCallback;
        var2 = _closure1_slot3;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 323; continue _fun0001 }
 10:
                    var14 = 0;
                    var3 = copyRestArgs(var14);
                    var6 = undefined;
                    SaveGenerator(address=22);
 20:
                    return var6;
 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 320; continue _fun0001 }
 31: // try_start_0 // try_start_1
                    var8 = _closure2_slot2;
                    var7 = null;
                    var7 = var8.bind(var6)(var7);
                    var8 = _closure2_slot1;
                    var7 = true;
                    var7 = var8.bind(var6)(var7);
                    var7 = _closure2_slot0;
                    var13 = var3;
                    var3 = new Array(0);
                    var14 = var3;
                    var12 = 0;
                    var8 = arraySpread(var14, var13, var12);
                    var14 = var7;
                    var13 = var3;
                    var12 = undefined;
                    var3 = apply(var14, var13, var12);
                    SaveGenerator(address=92);
 90:
                    return var3;
 92:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 112; continue _fun0001 }
 98: // try_end0 // try_end1
                    var8 = _closure2_slot1;
                    var7 = false;
                    var7 = var8.bind(var6)(var7);
                    return var3;
 112:
                    var7 = _closure2_slot1;
                    var4 = false;
                    var4 = var7.bind(var6)(var4);
                    return var3;
 126: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = var3;
                    var7 = var3.message;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 3;
                    var8 = var11[var4];
                    var8 = var10.bind(var6)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var4 = var11[var4];
                    var4 = var10.bind(var6)(var4);
                    var4 = var4.t;
                    var4 = var4.N2yb9f;
                    var4 = var8.bind(var9)(var4);
                    if(!(var7 !== var4)) { _fun0001_ip = 285; continue _fun0001 }
 198:
                    var4 = _closure2_slot2;
                    var9 = var5;
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var8 = 4;
                    var7 = var7[var8];
                    var7 = var10.bind(var6)(var7);
                    var7 = var9 instanceof var7;
                    if(var7) { _fun0001_ip = 277; continue _fun0001 }
 235:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var8 = var7.bind(var6)(var3);
                    var14 = var5;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var15 = var7;
                    var3 = new var15[var8](var14, var13);
                    var3 = var3 instanceof Object ? var3 : var7;
                    _fun0001_ip = 280; continue _fun0001;
 277:
                    var3 = var5;
 280:
                    var3 = var4.bind(var6)(var3);
 285: // try_end2
                    var4 = _closure2_slot1;
                    var3 = false;
                    var3 = var4.bind(var6)(var3);
                    return var6;
 302: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var5 = _closure2_slot1;
                    var4 = false;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
 320:
                    return var2;
 323:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var2.bind(var8)(var1);
        var1 = new Array(1);
        var1[0] = var7;
        var2 = var5.bind(var6)(var2, var1);
        var1 = new Array(2);
        var1[0] = var2;
        var2 = {};
        var2['loading'] = var4;
        var2['error'] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();