// app/modules/profile_effects/useScrollableProfileEffects.tsx
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/useScrollableProfileEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var7 = _closure1_slot3;
        var1 = var7.useState;
        var1 = var1.bind(var7)(var8);
        var12 = _closure1_slot2;
        var11 = undefined;
        var10 = 2;
        var1 = var12.bind(var11)(var1, var10);
        var13 = 0;
        var3 = var1[var13];
        var9 = 1;
        var1 = var1[var9];
        var _closure2_slot1 = var1;
        var6 = var7.useState;
        var1 = _closure1_slot4;
        var2 = var1.getProfileEffectById;
        var2 = var2.bind(var1)(var8);
        var2 = var6.bind(var7)(var2);
        var6 = var12.bind(var11)(var2, var10);
        var2 = var6[var13];
        var6 = var6[var9];
        var _closure2_slot2 = var6;
        var6 = _closure1_slot0;
        var14 = _closure1_slot1;
        var5 = 3;
        var5 = var14[var5];
        var15 = var6.bind(var11)(var5);
        var5 = var15.useProfileEffectPreset;
        var5 = var5.bind(var15)(var8);
        var5 = 4;
        var5 = var14[var5];
        var14 = var6.bind(var11)(var5);
        var6 = var14.useStateFromStores;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() {
            var1 = _closure1_slot4;
            var1 = var1.profileEffects;
            return var1;
        };
        var1 = var6.bind(var14)(var5, var1);
        var _closure2_slot3 = var1;
        var6 = var1.reduce;
        var5 = function(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var2 = arg3;
                var3 = arg2;
                var4 = var3.id;
                var3 = _closure2_slot0;
                if(!(var4 === var3)) { _fun0001_ip = 28; continue _fun0001 }
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var6 = var6.bind(var1)(var5, var13);
        var5 = var7.useState;
        var5 = var5.bind(var7)(var6);
        var5 = var12.bind(var11)(var5, var10);
        var5 = var5[var9];
        var _closure2_slot4 = var5;
        var5 = var7.useRef;
        var5 = var5.bind(var7)(var6);
        var _closure2_slot5 = var5;
        var6 = var7.useEffect;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var1;
        var1 = function() {
            var3 = _closure2_slot1;
            var5 = _closure2_slot0;
            var1 = undefined;
            var3 = var3.bind(var1)(var5);
            var3 = _closure2_slot2;
            var4 = _closure1_slot4;
            var2 = var4.getProfileEffectById;
            var2 = var2.bind(var4)(var5);
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var5 = function increment() {
            var1 = _closure2_slot5;
            var4 = var1.current;
            var2 = 1;
            var5 = var4 + var2;
            var4 = _closure2_slot3;
            var2 = var4.length;
            var2 = var5 % var2;
            var1['current'] = var2;
            var5 = _closure2_slot4;
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var6 = _closure2_slot1;
            var5 = var4[var2];
            var5 = var5.id;
            var5 = var6.bind(var1)(var5);
            var3 = _closure2_slot2;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['increment'] = var5;
        var4 = function decrement() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot5;
                var2 = var1.current;
                var1 = 0;
                if(!(var1 !== var2)) { _fun0002_ip = 36; continue _fun0002 }
 18:
                var1 = _closure2_slot5;
                var2 = var1.current;
                var1 = 1;
                var4 = var2 - var1;
                _fun0002_ip = 52; continue _fun0002;
 36:
                var1 = _closure2_slot3;
                var2 = var1.length;
                var1 = 1;
                var4 = var2 - var1;
 52:
                var1 = _closure2_slot5;
                var1['current'] = var4;
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)(var4);
                var6 = _closure2_slot1;
                var2 = _closure2_slot3;
                var5 = var2[var4];
                var5 = var5.id;
                var5 = var6.bind(var1)(var5);
                var3 = _closure2_slot2;
                var2 = var2[var4];
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['decrement'] = var4;
        var1['id'] = var3;
        var1['preset'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();