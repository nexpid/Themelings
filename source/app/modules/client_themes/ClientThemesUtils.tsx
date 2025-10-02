// app/modules/client_themes/ClientThemesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot2 = var7;
    var4 = var4.PROTO_THEME_MAP_WEB_REFRESH;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/ClientThemesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getThemeForColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.l;
            var1 = 0.3;
            if(!(!(var2 <= var1))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
            var1 = var1.LIGHT;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = _closure1_slot3;
            var1 = var2.DARK;
case 4:
            return var1;
        }
    };
    var3['getThemeForColor'] = var4;
    var4 = function getLinearGradientForBackgroundGradient(arg1) {
        var1 = arg1;
        var6 = var1.angle;
        var3 = var1.colors;
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.token;
            var8 = var1.stop;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.getColor;
            var10 = var1.bind(var2)(var3);
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var11 = '';
            var9 = ' ';
            var7 = '%';
            var1 = var11[var4](var10, var9, var8, var7, var6);
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = ', ';
        var8 = var2.bind(var3)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var11 = 'linear-gradient(';
        var9 = 'deg, ';
        var7 = ')';
        var10 = var6;
        var1 = var11[var4](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getLinearGradientForBackgroundGradient'] = var4;
    var4 = function areThemesEqualForGradientThemes(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = var6 === var5;
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = _closure1_slot3;
            var2 = var2.DARK;
            var2 = var6 === var2;
            if(!var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = _closure1_slot3;
            var3 = var3.DARKER;
            var2 = var5 === var3;
case 7:
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 4:
            var3 = _closure1_slot3;
            var3 = var3.DARKER;
            var3 = var6 === var3;
            if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot3;
            var4 = var4.DARK;
            var3 = var5 === var4;
case 10:
            var2 = var3;
case 9:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['areThemesEqualForGradientThemes'] = var4;
    var2 = function(arg1) {
        var2 = _closure1_slot2;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var3['getBaseTheme'] = var2;
    return var1;
})();