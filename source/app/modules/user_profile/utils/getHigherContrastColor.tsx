// app/modules/user_profile/utils/getHigherContrastColor.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/getHigherContrastColor.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getHigherContrastColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.backgroundColor;
            var4 = var1.colors;
            var2 = _closure1_slot2;
            var8 = undefined;
            var1 = 2;
            var1 = var2.bind(var8)(var4, var1);
            var2 = 0;
            var2 = var1[var2];
            var9 = 1;
            var1 = var1[var9];
            var5 = 'string';
            var4 = typeof var10;
            var7 = var10;
            if(!(var5 === var4)) { _fun0001_ip = 86; continue _fun0001 }
 58:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var9];
            var6 = var6.bind(var8)(var4);
            var4 = var6.hex2int;
            var7 = var4.bind(var6)(var10);
 86:
            var4 = typeof var2;
            var11 = var2;
            if(!(var5 === var4)) { _fun0001_ip = 124; continue _fun0001 }
 96:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var9];
            var6 = var6.bind(var8)(var4);
            var4 = var6.hex2int;
            var11 = var4.bind(var6)(var2);
 124:
            var4 = typeof var1;
            var6 = var1;
            if(!(var5 === var4)) { _fun0001_ip = 162; continue _fun0001 }
 134:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var9];
            var5 = var5.bind(var8)(var4);
            var4 = var5.hex2int;
            var6 = var4.bind(var5)(var1);
 162:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var4 = var3[var9];
            var10 = var5.bind(var8)(var4);
            var4 = var10.getContrast;
            var4 = var4.bind(var10)(var7, var11);
            var3 = var3[var9];
            var5 = var5.bind(var8)(var3);
            var3 = var5.getContrast;
            var3 = var3.bind(var5)(var7, var6);
            if(!(var4 > var3)) { _fun0001_ip = 219; continue _fun0001 }
 216:
            var1 = var2;
 219:
            return var1;
        }
    };
    var3['getHigherContrastColor'] = var2;
    return var1;
})();