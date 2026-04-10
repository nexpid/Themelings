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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/themes/RootThemeContextProvider.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RootThemeContextProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 5;
            var2 = var12[var2];
            var4 = undefined;
            var8 = var9.bind(var4)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var6 = new Array(2);
            var6[0] = var2;
            var2 = _closure1_slot5;
            var6[1] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var4 = var3.saturation;
                var1['saturation'] = var4;
                var3 = var3.contrast;
                var1['contrast'] = var3;
                var2 = _closure1_slot5;
                var2 = var2.theme;
                var1['theme'] = var2;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var2);
            var8 = var2.saturation;
            var7 = var2.contrast;
            var10 = var2.theme;
            var11 = _closure1_slot1;
            var2 = 6;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = 7;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var11 = 'RootThemeContextProvider';
            var13 = var6.bind(var4)(var11);
            var _closure2_slot0 = var13;
            var6 = 8;
            var6 = var12[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.useIsGuildItemSpacingEnabled;
            var12 = var6.bind(var9)(var11);
            var _closure2_slot1 = var12;
            var11 = _closure1_slot3;
            var9 = var11.useMemo;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var12;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = new Array(0);
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = var2.push;
                    var3 = 'mobile-visual-refresh';
                    var3 = var4.bind(var2)(var3);
case 2:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var2.push;
                    var1 = 'guild-item-spacing';
                    var1 = var3.bind(var2)(var1);
case 4:
                    var3 = var2.length;
                    var1 = 0;
                    var3 = var3 > var1;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var6 = var9.bind(var11)(var3, var6);
            var3 = null;
            var3 = var3 != var2;
            var12 = 0;
            var13 = 0;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var2.theme;
            var2 = _closure1_slot6;
            var2 = var2.LIGHT;
            if(!(var3 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 9;
            var3 = var14[var2];
            var9 = var11.bind(var4)(var3);
            var3 = var9.setThemeFlag;
            var2 = var14[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.ThemeContextFlags;
            var2 = var2.MOBILE_DARK_GRADIENT_THEME_ENABLED;
            var2 = var3.bind(var9)(var12, var2);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 9;
            var9 = var15[var3];
            var11 = var14.bind(var4)(var9);
            var9 = var11.setThemeFlag;
            var3 = var15[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.ThemeContextFlags;
            var3 = var3.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
            var2 = var9.bind(var11)(var12, var3);
case 12:
            var13 = var2;
case 8:
            var2 = 1;
            var12 = var13;
            if(!(var2 !== var8)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 9;
            var9 = var15[var3];
            var11 = var14.bind(var4)(var9);
            var9 = var11.setThemeFlag;
            var3 = var15[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.ThemeContextFlags;
            var3 = var3.REDUCE_SATURATION_ENABLED;
            var12 = var9.bind(var11)(var13, var3);
case 13:
            var9 = var12;
            if(!(var2 !== var7)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 9;
            var3 = var3[var15];
            var11 = var11.bind(var4)(var3);
            var3 = var11.setThemeFlag;
            if(!(!(var7 > var2))) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var13.bind(var4)(var2);
            var2 = var2.ThemeContextFlags;
            var2 = var2.REDUCED_CONTRAST_ENABLED;
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var14.bind(var4)(var13);
            var13 = var13.ThemeContextFlags;
            var2 = var13.INCREASED_CONTRAST_ENABLED;
case 19:
            var9 = var3.bind(var11)(var12, var2);
case 15:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.RootThemeContextProvider;
            var1 = {};
            var1['theme'] = var10;
            var1['flags'] = var9;
            var1['saturation'] = var8;
            var1['contrast'] = var7;
            var1['enabledExperiments'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RootThemeContextProvider'] = var2;
    return var1;
})();