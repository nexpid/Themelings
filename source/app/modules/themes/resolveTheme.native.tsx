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
            if(!(var2 === var3)) { _fun0001_ip = 299; continue _fun0001 }
 85:
            var5 = _closure1_slot2;
            var3 = var5.getAppearanceSettings;
            var5 = var3.bind(var5)();
            var6 = null;
            var7 = var6 == var5;
            var3 = undefined;
            if(var7) { _fun0001_ip = 116; continue _fun0001 }
 110:
            var3 = var5.theme;
 116:
            if(!(var6 == var3)) { _fun0001_ip = 297; continue _fun0001 }
 123:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var5 = var9[var5];
            var7 = var7.bind(var8)(var5);
            var5 = var7.shouldIgnoreThemeChange;
            var5 = var5.bind(var7)();
            if(var5) { _fun0001_ip = 292; continue _fun0001 }
 159:
            var5 = _closure1_slot4;
            var5 = var5.settings;
            var7 = var5.appearance;
            var9 = var6 == var7;
            var5 = undefined;
            if(var9) { _fun0001_ip = 190; continue _fun0001 }
 184:
            var5 = var7.theme;
 190:
            if(!(var6 == var5)) { _fun0001_ip = 226; continue _fun0001 }
 194:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 6;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.Theme;
            var5 = var6.UNSET;
 226:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 6;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.Theme;
            var6 = var6.UNSET;
            if(!(var5 === var6)) { _fun0001_ip = 276; continue _fun0001 }
 262:
            var6 = _closure1_slot6;
            var6 = var6.NO_PREFERENCE;
            if(!(var2 === var6)) { _fun0001_ip = 286; continue _fun0001 }
 276:
            var4 = _closure1_slot5;
            var4 = var4[var5];
            _fun0001_ip = 290; continue _fun0001;
 286:
            var4 = var1[var2];
 290:
            return var4;
 292:
            var4 = arg3;
            return var4;
 297:
            return var3;
 299:
            var1 = var1[var2];
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();