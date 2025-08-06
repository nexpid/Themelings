// app/modules/themes/RootThemeContextProvider.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.ThemeTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/themes/RootThemeContextProvider.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RootThemeContextProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.children;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var6 = var7.useStateFromStoresObject;
            var2 = _closure1_slot3;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot4;
            var3[1] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot3;
                var4 = var3.saturation;
                var1['saturation'] = var4;
                var3 = var3.contrast;
                var1['contrast'] = var3;
                var2 = _closure1_slot4;
                var2 = var2.theme;
                var1['theme'] = var2;
                return var1;
            };
            var2 = var6.bind(var7)(var3, var2);
            var7 = var2.saturation;
            var6 = var2.contrast;
            var9 = var2.theme;
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = null;
            var3 = var3 != var2;
            var11 = 0;
            var12 = 0;
            if(!var3) { _fun0001_ip = 257; continue _fun0001 }
 127:
            var3 = var2.theme;
            var2 = _closure1_slot5;
            var2 = var2.LIGHT;
            if(!(var3 !== var2)) { _fun0001_ip = 201; continue _fun0001 }
 146:
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 7;
            var3 = var13[var2];
            var8 = var10.bind(var4)(var3);
            var3 = var8.setThemeFlag;
            var2 = var13[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.ThemeContextFlags;
            var2 = var2.MOBILE_DARK_GRADIENT_THEME_ENABLED;
            var2 = var3.bind(var8)(var11, var2);
            _fun0001_ip = 254; continue _fun0001;
 201:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 7;
            var8 = var14[var3];
            var10 = var13.bind(var4)(var8);
            var8 = var10.setThemeFlag;
            var3 = var14[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.ThemeContextFlags;
            var3 = var3.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
            var2 = var8.bind(var10)(var11, var3);
 254:
            var12 = var2;
 257:
            var2 = 1;
            var11 = var12;
            if(!(var2 !== var7)) { _fun0001_ip = 320; continue _fun0001 }
 267:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 7;
            var8 = var14[var3];
            var10 = var13.bind(var4)(var8);
            var8 = var10.setThemeFlag;
            var3 = var14[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.ThemeContextFlags;
            var3 = var3.REDUCE_SATURATION_ENABLED;
            var11 = var8.bind(var10)(var12, var3);
 320:
            var8 = var11;
            if(!(var2 !== var6)) { _fun0001_ip = 423; continue _fun0001 }
 327:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 7;
            var3 = var3[var14];
            var10 = var10.bind(var4)(var3);
            var3 = var10.setThemeFlag;
            if(!(!(var6 > var2))) { _fun0001_ip = 388; continue _fun0001 }
 357:
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var12.bind(var4)(var2);
            var2 = var2.ThemeContextFlags;
            var2 = var2.REDUCED_CONTRAST_ENABLED;
            _fun0001_ip = 417; continue _fun0001;
 388:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var12 = var13.bind(var4)(var12);
            var12 = var12.ThemeContextFlags;
            var2 = var12.INCREASED_CONTRAST_ENABLED;
 417:
            var8 = var3.bind(var10)(var11, var2);
 423:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.RootThemeContextProvider;
            var1 = {};
            var1['theme'] = var9;
            var1['flags'] = var8;
            var1['saturation'] = var7;
            var1['contrast'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RootThemeContextProvider'] = var2;
    return var1;
})();