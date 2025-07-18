// app/hooks/useResettingValue.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.useState;
    var _closure1_slot4 = var7;
    var7 = var4.useCallback;
    var _closure1_slot5 = var7;
    var4 = var4.useEffect;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useResettingValue.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useResettingValue(arg1, arg2) {
        var7 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var8;
        var1 = _closure1_slot4;
        var5 = undefined;
        var4 = var1.bind(var5)(var7);
        var1 = _closure1_slot3;
        var9 = 2;
        var6 = var1.bind(var5)(var4, var9);
        var1 = 0;
        var4 = var6[var1];
        var1 = 1;
        var1 = var6[var1];
        var _closure2_slot2 = var1;
        var6 = _closure1_slot1;
        var1 = _closure1_slot2;
        var1 = var1[var9];
        var6 = var6.bind(var5)(var1);
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.Timeout;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6 = var6.bind(var5)(var1);
        var _closure2_slot3 = var6;
        var10 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var6;
        var1 = function() {
            var1 = function() {
                var2 = _closure2_slot3;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                return var1;
            };
            return var1;
        };
        var1 = var10.bind(var5)(var1, var9);
        var1 = new Array(2);
        var1[0] = var4;
        var4 = _closure1_slot5;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var3 = _closure2_slot2;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot0;
                if(!(var4 !== var3)) { _fun0001_ip = 53; continue _fun0001 }
 25:
                var5 = _closure2_slot3;
                var4 = var5.start;
                var3 = _closure2_slot1;
                var2 = function() {
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
 53:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1[1] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();