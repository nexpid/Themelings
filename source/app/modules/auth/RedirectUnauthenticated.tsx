// app/modules/auth/RedirectUnauthenticated.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getRedirectPath() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = global;
            var2 = var1.location;
            var2 = var2.pathname;
            var1 = var1.location;
            var1 = var1.search;
            var5 = var2 + var1;
            var1 = _closure1_slot3;
            if(var1) { _fun0001_ip = 78; continue _fun0001 }
 40:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getLoginPath;
            var1 = false;
            var1 = var3.bind(var4)(var5, var1);
            _fun0001_ip = 88; continue _fun0001;
 78:
            var2 = _closure1_slot2;
            var1 = var2.REGISTER;
 88:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Routes;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CONFERENCE_MODE_ENABLED;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/RedirectUnauthenticated.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function RedirectUnauthenticated() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Redirect;
        var1 = {};
        var5 = _closure1_slot5;
        var5 = var5.bind(var3)();
        var1['to'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['getRedirectPath'] = var2;
    return var1;
})();