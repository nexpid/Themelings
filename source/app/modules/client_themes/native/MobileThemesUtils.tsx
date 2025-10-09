// app/modules/client_themes/native/MobileThemesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function getCustomThemesName() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 3;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 4;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.yl1iMj;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var5 = function useCustomBackgroundGradient(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.useCustomThemeDisplaySettings;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var7 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.ClientThemeType;
            var5 = var5.CUSTOM_BACKGROUND_GRADIENT;
            var2['type'] = var5;
            var4 = _closure1_slot8;
            var2['getName'] = var4;
            var4 = var3.baseTheme;
            var2['theme'] = var4;
            var3 = var3.customTheme;
            var2['customThemeSettings'] = var3;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var1 = function getMobileThemesArrayWithMaybeCustomTheme(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 4:
            var1 = _closure1_slot7;
            _fun0002_ip = 7; continue _fun0002;
case 6:
            var8 = _closure1_slot6;
            var2 = new Array(1);
            var7 = 0;
            var9 = var2;
            var5 = arraySpread(var9, var8, var7);
            var2[var5] = var4;
            var4 = 1;
            var7 = var5 + var4;
            var8 = _closure1_slot5;
            var9 = var2;
            var3 = arraySpread(var9, var8, var7);
            var1 = var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function useSavedCustomTheme() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var7 = var2.SavedCustomThemesExperiment;
            var3 = var7.useConfig;
            var2 = {};
            var8 = 'useSavedTheme';
            var2['location'] = var8;
            var2 = var3.bind(var7)(var2);
            var3 = var2.enabled;
            var2 = 9;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getSavedCustomTheme;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var5)(var2, var1);
            var4 = null;
            var1 = null;
            if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 2:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var11 = 0;
    var6 = var8[var11];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    var _closure1_slot5 = var10;
    var9 = var6.REDESIGN_STANDARD_BACKGROUND_THEMES;
    var _closure1_slot6 = var9;
    var6 = new Array(0);
    var14 = var6;
    var13 = var9;
    var12 = 0;
    var12 = arraySpread(var14, var13, var12);
    var14 = var6;
    var13 = var10;
    var9 = arraySpread(var14, var13, var12);
    var _closure1_slot7 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/client_themes/native/MobileThemesUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useCustomBackgroundGradient'] = var5;
    var5 = function getAllMobileThemes() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.isCustomThemeMobileRenderingEnabled;
            var1 = 'getAllMobileThemes';
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot10;
            var5 = _closure1_slot4;
            var1 = var5.getCustomThemeDisplaySettings;
            var6 = var1.bind(var5)();
            var1 = null;
            if(!(var4 !== var6)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var5 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 5;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.ClientThemeType;
            var8 = var8.CUSTOM_BACKGROUND_GRADIENT;
            var5['type'] = var8;
            var7 = _closure1_slot8;
            var5['getName'] = var7;
            var7 = var6.baseTheme;
            var5['theme'] = var7;
            var6 = var6.customTheme;
            var5['customThemeSettings'] = var6;
            var1 = var5;
case 10:
            var1 = var2.bind(var4)(var1, var3);
            return var1;
        }
    };
    var3['getAllMobileThemes'] = var5;
    var4 = function useAllMobileThemes() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var4 = undefined;
        var5 = var3.bind(var4)(var2);
        var3 = var5.useIsCustomThemeMobileRenderingEnabled;
        var2 = 'useMobileThemes';
        var3 = var3.bind(var5)(var2);
        var2 = _closure1_slot10;
        var5 = _closure1_slot9;
        var1 = _closure1_slot11;
        var1 = var1.bind(var4)();
        var1 = var5.bind(var4)(var1);
        var1 = var2.bind(var4)(var1, var3);
        return var1;
    };
    var3['useAllMobileThemes'] = var4;
    var3['useSavedCustomTheme'] = var2;
    return var1;
})();