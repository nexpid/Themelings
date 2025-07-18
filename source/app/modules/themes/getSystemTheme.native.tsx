// app/modules/themes/getSystemTheme.native.tsx
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
    var4 = var4.Appearance;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SystemTheme;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/themes/getSystemTheme.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSystemTheme() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = var3.getColorScheme;
            var3 = var2.bind(var3)();
            var2 = 'light';
            if(!(var2 !== var3)) { _fun0001_ip = 57; continue _fun0001 }
 25:
            var2 = 'dark';
            if(!(var2 !== var3)) { _fun0001_ip = 45; continue _fun0001 }
 33:
            var2 = _closure1_slot1;
            var2 = var2.NO_PREFERENCE;
            return var2;
 45:
            var2 = _closure1_slot1;
            var2 = var2.DARK;
            return var2;
 57:
            var1 = _closure1_slot1;
            var1 = var1.LIGHT;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();