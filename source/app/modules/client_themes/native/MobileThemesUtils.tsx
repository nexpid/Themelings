// app/modules/client_themes/native/MobileThemesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var1 = function getCustomThemesName() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 4;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 5;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.yl1iMm;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var7 = function getCustomBackgroundGradient() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot5;
            var1 = var2.getCustomThemeDisplaySettings;
            var3 = var1.bind(var2)();
            var7 = undefined;
            var1 = null;
            if(!(var7 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.ClientThemeType;
            var5 = var5.CUSTOM_BACKGROUND_GRADIENT;
            var2['type'] = var5;
            var4 = _closure1_slot9;
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
    var _closure1_slot10 = var7;
    var6 = function useCustomBackgroundGradient(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.useCustomThemeDisplaySettings;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var7 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.ClientThemeType;
            var5 = var5.CUSTOM_BACKGROUND_GRADIENT;
            var2['type'] = var5;
            var4 = _closure1_slot9;
            var2['getName'] = var4;
            var4 = var3.baseTheme;
            var2['theme'] = var4;
            var3 = var3.customTheme;
            var2['customThemeSettings'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot11 = var6;
    var5 = function usePerModeCustomBackgroundGradient(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = _closure1_slot3;
                var3 = var4.getSyncedClientTheme;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var3 = var1 == var2;
                var9 = undefined;
                var4 = undefined;
                if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = var2.customUserThemeSettings;
case 8:
                var3 = var1 == var4;
                var2 = null;
                if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var3 = var4.colors;
                var7 = var3.length;
                var3 = 0;
                var2 = null;
                if(!(var3 !== var7)) { _fun0003_ip = 10; continue _fun0003 }
case 12:
                var3 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 6;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.ClientThemeType;
                var7 = var7.CUSTOM_BACKGROUND_GRADIENT;
                var3['type'] = var7;
                var7 = _closure1_slot9;
                var3['getName'] = var7;
                var7 = _closure1_slot3;
                var6 = var7.themePreferenceForSystemTheme;
                var5 = _closure2_slot0;
                var5 = var6.bind(var7)(var5);
                var3['theme'] = var5;
                var3['customThemeSettings'] = var4;
                var2 = var3;
case 10:
                return var2;
case 6:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var5;
    var1 = function getMobileThemesArrayWithMaybeCustomTheme(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var6 = _closure1_slot7;
            _fun0004_ip = 15; continue _fun0004;
case 13:
            var6 = _closure1_slot8;
case 15:
            var1 = null;
            if(!(var1 == var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var1 = new Array(0);
            var7 = 0;
            var9 = var1;
            var8 = var6;
            var7 = arraySpread(var9, var8, var7);
            var8 = _closure1_slot6;
            var9 = var1;
            var2 = arraySpread(var9, var8, var7);
            _fun0004_ip = 2; continue _fun0004;
case 16:
            var2 = new Array(1);
            var7 = 0;
            var9 = var2;
            var8 = var6;
            var5 = arraySpread(var9, var8, var7);
            var2[4] = var4;
            var4 = 1;
            var7 = var5 + var4;
            var8 = _closure1_slot6;
            var9 = var2;
            var3 = arraySpread(var9, var8, var7);
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var2 = function useSavedCustomTheme() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getSavedCustomTheme;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 11:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    var _closure1_slot6 = var11;
    var11 = var8.LEGACY_STANDARD_BACKGROUND_THEMES;
    var _closure1_slot7 = var11;
    var8 = var8.REFRESH_STANDARD_BACKGROUND_THEMES;
    var _closure1_slot8 = var8;
    var8 = 10;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/client_themes/native/MobileThemesUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['getCustomBackgroundGradient'] = var7;
    var3['useCustomBackgroundGradient'] = var6;
    var3['usePerModeCustomBackgroundGradient'] = var5;
    var5 = function getAllMobileThemes() {
        var4 = _closure1_slot13;
        var2 = _closure1_slot10;
        var3 = undefined;
        var2 = var2.bind(var3)();
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var1 = var6[var1];
        var6 = var5.bind(var3)(var1);
        var5 = var6.isMobileVisualRefreshEnabled;
        var1 = 'MobileThemesUtils';
        var1 = var5.bind(var6)(var1);
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['getAllMobileThemes'] = var5;
    var4 = function useAllMobileThemes(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot11;
            var2 = _closure1_slot14;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot12;
            var5 = var3.bind(var4)(var7);
            var3 = _closure1_slot13;
            var6 = null;
            if(!(var6 != var7)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var2 = var5;
case 19:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 9;
            var1 = var6[var1];
            var5 = var5.bind(var4)(var1);
            var1 = 'MobileThemesUtils';
            var1 = var5.bind(var4)(var1);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useAllMobileThemes'] = var4;
    var3['useSavedCustomTheme'] = var2;
    return var1;
})();