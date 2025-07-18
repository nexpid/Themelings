// app/modules/keyboard/native/AnimatedKeyboardProviderLegacy.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var10 = function getKeyboardHeight(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var1 = var3.getKeyboardType;
            var3 = var1.bind(var3)();
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            if(!(var3 !== var1)) { _fun0001_ip = 126; continue _fun0001 }
 63:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var1 = var3.getCustomKeyboardHeight;
            var3 = var1.bind(var3)();
            var1 = 6;
            var1 = var6[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.getSafeAreaInsets;
            var1 = var1.bind(var5)();
            var1 = var1.bottom;
            var1 = var3 + var1;
            _fun0001_ip = 159; continue _fun0001;
 126:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getSystemKeyboardHeight;
            var2 = var2.bind(var3)();
            var1 = var2;
 159:
            return var1;
        }
    };
    var _closure1_slot5 = var10;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var7 = 7;
    var4 = var6[var7];
    var11 = var5.bind(var1)(var4);
    var9 = var11.makeMutable;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var4 = var4.KeyboardState;
    var4 = var4.UNKNOWN;
    var4 = var9.bind(var11)(var4);
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var7 = var9.makeMutable;
    var2 = var10.bind(var1)(var2);
    var7 = var7.bind(var9)(var2);
    var _closure1_slot4 = var7;
    var2 = {};
    var8 = function Component(arg1) {
        var1 = arg1;
        var1 = var1.children;
        var5 = _closure1_slot2;
        var4 = var5.useEffect;
        var3 = function() {
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = var4.set;
                var5 = _closure1_slot5;
                var1 = undefined;
                var2 = true;
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['Component'] = var8;
    var2['animatedKeyboardHeight'] = var7;
    var2['animatedKeyboardState'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/AnimatedKeyboardProviderLegacy.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();