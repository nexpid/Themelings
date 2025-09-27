// app/modules/client_themes/ClientThemesTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.PROTO_THEME_MAP_WEB_REFRESH;
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'backgroundGradientPreset';
    var4['BACKGROUND_GRADIENT_PRESET'] = var5;
    var5 = 'standardBackgroundTheme';
    var4['STANDARD_BACKGROUND_THEME'] = var5;
    var5 = 'customBackgroundGradient';
    var4['CUSTOM_BACKGROUND_GRADIENT'] = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/ClientThemesTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ClientThemeType'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var3 = global;
            var6 = var3.Object;
            var5 = var6.entries;
            var4 = _closure1_slot3;
            var5 = var5.bind(var6)(var4);
            var4 = var5.find;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 49; continue _fun0002 }
 24:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0002_ip = 49; continue _fun0002 }
 43:
                    var2 = var5;
                    var3 = var4;
 49:
                    if(var3) { _fun0002_ip = 55; continue _fun0002 }
 52:
                    var1.return();
 55:
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var6 = var4.bind(var5)(var1);
            var4 = undefined;
            if(!(var4 !== var6)) { _fun0001_ip = 76; continue _fun0001 }
 57:
            var5 = var3.parseInt;
            var1 = 0;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            _fun0001_ip = 183; continue _fun0001;
 76:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 1;
            var6 = var5[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.captureException;
            var9 = var3.Error;
            var3 = var3.HermesInternal;
            var8 = var3.concat;
            var3 = 'No ProtoTheme found for base theme: ';
            var11 = var8.bind(var3)(var10);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var12 = var8;
            var3 = new var12[var9](var11, var10);
            var3 = var3 instanceof Object ? var3 : var8;
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot0;
            var2 = 2;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.Theme;
            var1 = var2.UNSET;
 183:
            return var1;
        }
    };
    var3['getProtoThemeFromBaseTheme'] = var2;
    return var1;
})();