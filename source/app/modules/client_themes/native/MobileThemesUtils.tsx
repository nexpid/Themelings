// app/modules/client_themes/native/MobileThemesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function getCustomThemesName() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.yl1iMj;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function useCustomBackgroundGradient() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.useCustomThemeDisplaySettings;
            var3 = var1.bind(var2)();
            var1 = null;
            if(!(var7 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 4;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.ClientThemeType;
            var5 = var5.CUSTOM_BACKGROUND_GRADIENT;
            var2['type'] = var5;
            var4 = _closure1_slot7;
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
    var _closure1_slot8 = var4;
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
            var1 = _closure1_slot6;
            _fun0002_ip = 7; continue _fun0002;
case 6:
            var8 = _closure1_slot5;
            var2 = new Array(1);
            var7 = 0;
            var9 = var2;
            var5 = arraySpread(var9, var8, var7);
            var2[var5] = var4;
            var4 = 1;
            var7 = var5 + var4;
            var8 = _closure1_slot4;
            var9 = var2;
            var3 = arraySpread(var9, var8, var7);
            var1 = var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var10 = 0;
    var5 = var7[var10];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    var _closure1_slot4 = var9;
    var8 = var5.REDESIGN_STANDARD_BACKGROUND_THEMES;
    var _closure1_slot5 = var8;
    var5 = new Array(0);
    var13 = var5;
    var12 = var8;
    var11 = 0;
    var11 = arraySpread(var13, var12, var11);
    var13 = var5;
    var12 = var9;
    var8 = arraySpread(var13, var12, var11);
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/native/MobileThemesUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useCustomBackgroundGradient'] = var4;
    var4 = function getAllMobileThemes() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.isCustomThemeMobileRenderingEnabled;
            var1 = 'getAllMobileThemes';
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot9;
            var5 = _closure1_slot3;
            var1 = var5.getCustomThemeDisplaySettings;
            var6 = var1.bind(var5)();
            var1 = null;
            if(!(var4 !== var6)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var5 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 4;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.ClientThemeType;
            var8 = var8.CUSTOM_BACKGROUND_GRADIENT;
            var5['type'] = var8;
            var7 = _closure1_slot7;
            var5['getName'] = var7;
            var7 = var6.baseTheme;
            var5['theme'] = var7;
            var6 = var6.customTheme;
            var5['customThemeSettings'] = var6;
            var1 = var5;
case 8:
            var1 = var2.bind(var4)(var1, var3);
            return var1;
        }
    };
    var3['getAllMobileThemes'] = var4;
    var2 = function useAllMobileThemes() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 6;
        var2 = var4[var2];
        var4 = undefined;
        var5 = var3.bind(var4)(var2);
        var3 = var5.useIsCustomThemeMobileRenderingEnabled;
        var2 = 'useMobileThemes';
        var3 = var3.bind(var5)(var2);
        var2 = _closure1_slot9;
        var1 = _closure1_slot8;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var4)(var1, var3);
        return var1;
    };
    var3['useAllMobileThemes'] = var2;
    return var1;
})();