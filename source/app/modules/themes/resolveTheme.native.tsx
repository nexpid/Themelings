// app/modules/themes/resolveTheme.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot6 = var7;
    var7 = var4.SystemTheme;
    var _closure1_slot7 = var7;
    var4 = var4.SystemThemeState;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/themes/resolveTheme.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function resolveTheme(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var4 = _closure1_slot2;
            var1 = var4.getPreviewTheme;
            var1 = var1.bind(var4)();
            var9 = undefined;
            if(!(var9 === var1)) { _fun0001_ip = 326; continue _fun0001 }
 32:
            var4 = _closure1_slot4;
            var6 = var4.useSystemTheme;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 5;
            var4 = var8[var4];
            var7 = var7.bind(var9)(var4);
            var4 = var7.isAuthenticated;
            var4 = var4.bind(var7)();
            if(!var4) { _fun0001_ip = 89; continue _fun0001 }
 75:
            var4 = _closure1_slot8;
            var4 = var4.ON;
            if(!(var6 === var4)) { _fun0001_ip = 106; continue _fun0001 }
 89:
            var4 = _closure1_slot7;
            var4 = var4.NO_PREFERENCE;
            if(!(var3 === var4)) { _fun0001_ip = 320; continue _fun0001 }
 106:
            var6 = _closure1_slot3;
            var4 = var6.getAppearanceSettings;
            var6 = var4.bind(var6)();
            var7 = null;
            var8 = var7 == var6;
            var4 = undefined;
            if(var8) { _fun0001_ip = 137; continue _fun0001 }
 131:
            var4 = var6.theme;
 137:
            if(!(var7 == var4)) { _fun0001_ip = 318; continue _fun0001 }
 144:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 6;
            var6 = var10[var6];
            var8 = var8.bind(var9)(var6);
            var6 = var8.shouldIgnoreThemeChange;
            var6 = var6.bind(var8)();
            if(var6) { _fun0001_ip = 313; continue _fun0001 }
 180:
            var6 = _closure1_slot5;
            var6 = var6.settings;
            var8 = var6.appearance;
            var10 = var7 == var8;
            var6 = undefined;
            if(var10) { _fun0001_ip = 211; continue _fun0001 }
 205:
            var6 = var8.theme;
 211:
            if(!(var7 == var6)) { _fun0001_ip = 247; continue _fun0001 }
 215:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 7;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.Theme;
            var6 = var7.UNSET;
 247:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 7;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.Theme;
            var7 = var7.UNSET;
            if(!(var6 === var7)) { _fun0001_ip = 297; continue _fun0001 }
 283:
            var7 = _closure1_slot7;
            var7 = var7.NO_PREFERENCE;
            if(!(var3 === var7)) { _fun0001_ip = 307; continue _fun0001 }
 297:
            var5 = _closure1_slot6;
            var5 = var5[var6];
            _fun0001_ip = 311; continue _fun0001;
 307:
            var5 = var2[var3];
 311:
            return var5;
 313:
            var5 = arg3;
            return var5;
 318:
            return var4;
 320:
            var2 = var2[var3];
            return var2;
 326:
            var1 = var1.baseTheme;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();