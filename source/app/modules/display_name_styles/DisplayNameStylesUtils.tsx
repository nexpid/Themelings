// app/modules/display_name_styles/DisplayNameStylesUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/DisplayNameStylesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function generateColorVariants(arg1) {
        var2 = arg1;
        var4 = _closure1_slot0;
        var1 = _closure1_slot1;
        var8 = 0;
        var1 = var1[var8];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var5 = var1.bind(var3)(var2);
        var1 = var5.get;
        var4 = 'hsl.l';
        var9 = var1.bind(var5)(var4);
        var1 = {};
        var1['main'] = var2;
        var6 = var5.set;
        var2 = global;
        var10 = var2.Math;
        var7 = var10.min;
        var3 = 1.2;
        var3 = var3 * var9;
        var11 = 1;
        var3 = var7.bind(var10)(var11, var3);
        var6 = var6.bind(var5)(var4, var3);
        var3 = var6.hex;
        var3 = var3.bind(var6)();
        var1['light1'] = var3;
        var6 = var5.set;
        var10 = var2.Math;
        var7 = var10.min;
        var3 = 1.6;
        var3 = var3 * var9;
        var3 = var7.bind(var10)(var11, var3);
        var6 = var6.bind(var5)(var4, var3);
        var3 = var6.hex;
        var3 = var3.bind(var6)();
        var1['light2'] = var3;
        var6 = var5.set;
        var10 = var2.Math;
        var7 = var10.max;
        var3 = 0.6;
        var3 = var3 * var9;
        var3 = var7.bind(var10)(var8, var3);
        var6 = var6.bind(var5)(var4, var3);
        var3 = var6.hex;
        var3 = var3.bind(var6)();
        var1['dark1'] = var3;
        var3 = var5.set;
        var7 = var2.Math;
        var6 = var7.max;
        var2 = 0.2;
        var2 = var2 * var9;
        var2 = var6.bind(var7)(var8, var2);
        var3 = var3.bind(var5)(var4, var2);
        var2 = var3.hex;
        var2 = var2.bind(var3)();
        var1['dark2'] = var2;
        return var1;
    };
    var3['generateColorVariants'] = var4;
    var2 = function parseServerDisplayNameStyles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0001_ip = 52; continue _fun0001 }
 12:
            var2 = {};
            var4 = var3.font_id;
            var2['fontId'] = var4;
            var4 = var3.effect_id;
            var2['effectId'] = var4;
            var3 = var3.colors;
            var2['colors'] = var3;
            var1 = var2;
 52:
            return var1;
        }
    };
    var3['parseServerDisplayNameStyles'] = var2;
    return var1;
})();