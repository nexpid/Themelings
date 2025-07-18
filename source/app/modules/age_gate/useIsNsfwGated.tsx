// app/modules/age_gate/useIsNsfwGated.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/useIsNsfwGated.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsNsfwGated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = var1.nsfw;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var3 = var8[var5];
            var6 = undefined;
            var11 = var7.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 33; continue _fun0002 }
 27:
                    var1 = var2.nsfwAllowed;
 33:
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9, var3);
            var3 = false;
            var3 = var3 === var9;
            var5 = var8[var5];
            var6 = var7.bind(var6)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var7;
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = var3.didAgree;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var2 = !var2;
            if(!var1) { _fun0001_ip = 126; continue _fun0001 }
 117:
            if(var2) { _fun0001_ip = 123; continue _fun0001 }
 120:
            var2 = var3;
 123:
            var1 = var2;
 126:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();