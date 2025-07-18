// app/modules/auth/native/useLoginReset.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var5[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/useLoginReset.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLoginReset() {
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = function() {
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure1_slot3;
                    var2 = var3.isAuthenticated;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0001_ip = 52; continue _fun0001 }
 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.loginReset;
                    var1 = var1.bind(var2)();
 52:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();