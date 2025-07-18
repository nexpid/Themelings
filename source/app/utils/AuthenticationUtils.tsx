// app/utils/AuthenticationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var4 = function getToken() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getToken;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/AuthenticationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getToken'] = var4;
    var4 = function isAuthenticated() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['isAuthenticated'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = null;
            var2 = var3 != var5;
            var1 = null;
            if(!var2) { _fun0001_ip = 68; continue _fun0001 }
 14:
            var4 = /^\\/developers/;
            var2 = var4.test;
            var2 = var2.bind(var4)(var5);
            var1 = null;
            if(!var2) { _fun0001_ip = 68; continue _fun0001 }
 43:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 68:
            return var1;
        }
    };
    var3['getArtForPath'] = var2;
    return var1;
})();