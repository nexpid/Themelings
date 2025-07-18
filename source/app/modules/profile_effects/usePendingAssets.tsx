// app/modules/profile_effects/usePendingAssets.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/usePendingAssets.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        var5 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var8;
        var7 = _closure1_slot1;
        var3 = var7.useState;
        var6 = -1;
        var9 = var3.bind(var7)(var6);
        var4 = _closure1_slot0;
        var3 = undefined;
        var2 = 2;
        var3 = var4.bind(var3)(var9, var2);
        var2 = 0;
        var4 = var3[var2];
        var _closure2_slot2 = var4;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot3 = var2;
        var3 = var7.useRef;
        var3 = var3.bind(var7)(var6);
        var _closure2_slot4 = var3;
        var9 = var7.useEffect;
        var6 = new Array(3);
        var6[0] = var5;
        var6[1] = var3;
        var6[2] = var2;
        var5 = function() {
            var5 = _closure2_slot0;
            var4 = var5.reduce;
            var2 = function(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var2 = arg2;
                    var4 = var1.includes;
                    var3 = var2.src;
                    var3 = var4.bind(var1)(var3);
                    if(var3) { _fun0001_ip = 41; continue _fun0001 }
 25:
                    var3 = var1.push;
                    var2 = var2.src;
                    var2 = var3.bind(var1)(var2);
 41:
                    return var1;
                }
            };
            var1 = new Array(0);
            var2 = var4.bind(var5)(var2, var1);
            var5 = _closure2_slot3;
            var4 = var2.length;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var3 = _closure2_slot4;
            var2 = var2.length;
            var3['current'] = var2;
            return var1;
        };
        var5 = var9.bind(var7)(var5, var6);
        var6 = var7.useEffect;
        var5 = new Array(2);
        var5[0] = var4;
        var5[1] = var8;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot2;
                var2 = 0;
                if(!(var2 === var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
 23:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['pending'] = var4;
        var1['pendingRef'] = var3;
        var1['setPending'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();