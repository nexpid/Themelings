// app/modules/client_themes/native/useActiveTheme.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function useActiveThemeType() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var4 = var9[var3];
            var7 = undefined;
            var10 = var8.bind(var7)(var4);
            var6 = var10.useStateFromStores;
            var4 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.hasCustomTheme;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var10)(var5, var4);
            var4 = var9[var3];
            var11 = var8.bind(var7)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot3;
                var2 = var1.gradientPreset;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var4 = var10.bind(var11)(var5, var4);
            var3 = var9[var3];
            var10 = var8.bind(var7)(var3);
            var5 = var10.useStateFromStores;
            var11 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function() {
                var1 = _closure1_slot2;
                var1 = var1.useSystemTheme;
                return var1;
            };
            var3 = var5.bind(var10)(var3, var1);
            var1 = _closure1_slot5;
            var1 = var1.ON;
            var5 = 5;
            var5 = var9[var5];
            var8 = var8.bind(var7)(var5);
            var7 = var8.useIsCustomThemeMobileRenderingEnabled;
            var5 = 'useActiveTheme';
            var5 = var7.bind(var8)(var5);
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!(var3 !== var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = _closure1_slot6;
            var1 = var1.DEFAULT;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var3 = _closure1_slot6;
            var1 = var3.SYSTEM;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 5:
            var3 = _closure1_slot6;
            var1 = var3.CLIENT;
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 4:
            var2 = _closure1_slot6;
            var1 = var2.CUSTOM;
case 11:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SystemThemeState;
    var _closure1_slot5 = var8;
    var5 = var5.ActiveThemeType;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/native/useActiveTheme.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsCustomThemeActive() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var2 = var3.bind(var2)();
        var1 = _closure1_slot6;
        var1 = var1.CUSTOM;
        var1 = var2 === var1;
        return var1;
    };
    var3['useIsCustomThemeActive'] = var5;
    var4 = function useIsClientThemeOrCustomThemeActive() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var1 = _closure1_slot6;
            var1 = var1.CLIENT;
            var1 = var3 === var1;
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = _closure1_slot6;
            var2 = var2.CUSTOM;
            var1 = var3 === var2;
case 12:
            return var1;
        }
    };
    var3['useIsClientThemeOrCustomThemeActive'] = var4;
    var3['useActiveThemeType'] = var2;
    return var1;
})();