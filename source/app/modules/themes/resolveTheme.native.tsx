// app/modules/themes/resolveTheme.native.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot5 = var7;
    var7 = var4.SystemTheme;
    var _closure1_slot6 = var7;
    var4 = var4.SystemThemeState;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/themes/resolveTheme.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function resolveTheme(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var3 = _closure1_slot3;
            var5 = var3.useSystemTheme;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var8 = undefined;
            var6 = var6.bind(var8)(var3);
            var3 = var6.isAuthenticated;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0001_ip = 68; continue _fun0001 }
 54:
            var3 = _closure1_slot7;
            var3 = var3.ON;
            if(!(var5 === var3)) { _fun0001_ip = 85; continue _fun0001 }
 68:
            var3 = _closure1_slot6;
            var3 = var3.NO_PREFERENCE;
            if(!(var2 === var3)) { _fun0001_ip = 297; continue _fun0001 }
 85:
            var5 = _closure1_slot2;
            var3 = var5.getAppearanceSettings;
            var5 = var3.bind(var5)();
            var6 = null;
            var7 = var6 == var5;
            var3 = undefined;
            if(var7) { _fun0001_ip = 115; continue _fun0001 }
 110:
            var3 = var5.theme;
 115:
            if(!(var6 == var3)) { _fun0001_ip = 295; continue _fun0001 }
 122:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var5 = var9[var5];
            var7 = var7.bind(var8)(var5);
            var5 = var7.shouldIgnoreThemeChange;
            var5 = var5.bind(var7)();
            if(var5) { _fun0001_ip = 290; continue _fun0001 }
 158:
            var5 = _closure1_slot4;
            var5 = var5.settings;
            var7 = var5.appearance;
            var9 = var6 == var7;
            var5 = undefined;
            if(var9) { _fun0001_ip = 188; continue _fun0001 }
 183:
            var5 = var7.theme;
 188:
            if(!(var6 == var5)) { _fun0001_ip = 224; continue _fun0001 }
 192:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 6;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.Theme;
            var5 = var6.UNSET;
 224:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 6;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.Theme;
            var6 = var6.UNSET;
            if(!(var5 === var6)) { _fun0001_ip = 274; continue _fun0001 }
 260:
            var6 = _closure1_slot6;
            var6 = var6.NO_PREFERENCE;
            if(!(var2 === var6)) { _fun0001_ip = 284; continue _fun0001 }
 274:
            var4 = _closure1_slot5;
            var4 = var4[var5];
            _fun0001_ip = 288; continue _fun0001;
 284:
            var4 = var1[var2];
 288:
            return var4;
 290:
            var4 = arg3;
            return var4;
 295:
            return var3;
 297:
            var1 = var1[var2];
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();