// app/modules/nameplates/hooks/useNameplate.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = var4.useMemo;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nameplates/hooks/useNameplate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNameplate(arg1) {
        var2 = arg1;
        var2 = var2.user;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = undefined;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var4 = null;
                var5 = var4 == var2;
                var2 = undefined;
                var3 = undefined;
                if(var5) { _fun0001_ip = 30; continue _fun0001 }
 20:
                var5 = _closure2_slot0;
                var3 = var5.nameplate;
 30:
                if(!(var4 == var3)) { _fun0001_ip = 36; continue _fun0001 }
 34:
                return var2;
 36:
                var1 = _closure2_slot0;
                var1 = var1.nameplate;
                return var1;
            }
        };
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var3['useNameplate'] = var2;
    return var1;
})();