// app/modules/client_themes/native/useCustomThemeDisplaySettings.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/useCustomThemeDisplaySettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 2;
            var3 = var2[var5];
            var2 = undefined;
            var8 = var4.bind(var2)(var3);
            var7 = var8.useStateFromStoresArray;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot3;
                var1 = var3.getCustomTheme;
                var2 = var1.bind(var3)();
                var1 = new Array(3);
                var1[0] = var2;
                var2 = var3.getBaseTheme;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                var2 = var3.getPreviewTheme;
                var2 = var2.bind(var3)();
                var1[2] = var2;
                return var1;
            };
            var4 = var7.bind(var8)(var4, var3);
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3.bind(var2)(var4, var1);
            var3 = 0;
            var3 = var1[var3];
            var4 = 1;
            var4 = var1[var4];
            var1 = var1[var5];
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var2 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var5 = null;
            if(!(var5 == var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            return var2;
case 7:
            var5 = {};
            var2 = var6.colors;
            var5['colors'] = var2;
            var2 = var6.gradient_angle;
            var5['gradientAngle'] = var2;
            var2 = var6.base_mix;
            var5['baseMix'] = var2;
            var2 = new Array(0);
            var5['gradientColorStops'] = var2;
            var2 = {};
            var6 = var6.base_theme;
            var2['baseTheme'] = var6;
            var2['customTheme'] = var5;
            return var2;
case 6:
            var2 = {};
            var2['baseTheme'] = var4;
            var2['customTheme'] = var3;
            return var2;
case 2:
            return var1;
        }
    };
    var3['useCustomThemeDisplaySettings'] = var2;
    return var1;
})();