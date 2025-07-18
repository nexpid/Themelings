// app/utils/LazyAPIPromise.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/LazyAPIPromise.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLazyAPIPromise(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var10 = _closure1_slot4;
        var4 = var10.useState;
        var3 = false;
        var3 = var4.bind(var10)(var3);
        var8 = _closure1_slot3;
        var2 = undefined;
        var7 = 2;
        var5 = var8.bind(var2)(var3, var7);
        var3 = 0;
        var4 = var5[var3];
        var6 = 1;
        var5 = var5[var6];
        var _closure2_slot2 = var5;
        var9 = var10.useState;
        var5 = null;
        var5 = var9.bind(var10)(var5);
        var5 = var8.bind(var2)(var5, var7);
        var3 = var5[var3];
        var5 = var5[var6];
        var _closure2_slot3 = var5;
        var1 = function() {
            var4 = _closure1_slot2;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 180; continue _fun0001 }
 10:
                        var5 = undefined;
                        var4 = undefined;
                        var6 = _closure2_slot2;
                        var2 = true;
                        var2 = var6.bind(var5)(var2);
                        var6 = _closure2_slot3;
                        var2 = null;
                        var6 = var6.bind(var5)(var2);
 39: // try_start_0
                        var6 = _closure2_slot0;
                        var6 = var6.bind(var5)();
                        SaveGenerator(address=51);
 49:
                        return var6;
 51:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(var7) { _fun0001_ip = 80; continue _fun0001 }
 57:
                        var8 = _closure2_slot2;
                        var7 = false;
                        var7 = var8.bind(var5)(var7);
                        var7 = _closure2_slot3;
                        var7 = var7.bind(var5)(var2);
 77: // try_end0
                        return var6;
 80:
                        return var6;
 83: // catch_target0
                        CatchBlockStart(arg_register=7);
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 3;
                        var6 = var9[var6];
                        var6 = var7.bind(var5)(var6);
                        var6 = var6.APIError;
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {constructor: {value: var6}});
                        var11 = var7;
                        var10 = var8;
                        var6 = new var11[var6](var10, var9);
                        var4 = var6 instanceof Object ? var6 : var7;
                        var6 = _closure2_slot1;
                        if(!(var2 != var6)) { _fun0001_ip = 157; continue _fun0001 }
 145:
                        var7 = _closure2_slot1;
                        var6 = var4;
                        var6 = var7.bind(var5)(var6);
 157:
                        var6 = _closure2_slot3;
                        var4 = var6.bind(var5)(var4);
                        var4 = _closure2_slot2;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        return var2;
 180:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var2 = var1.bind(var2)();
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