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
    var4 = function useCustomBackgroundGradient() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var8 = undefined;
            var4 = var2.bind(var8)(var1);
            var3 = var4.useStateFromStoresArray;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var1 = var3.getCustomTheme;
                var3 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot4;
                var2 = var3.getTheme;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var8)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var4 = var2[var1];
            var6 = null;
            var2 = var6 == var3;
            var1 = null;
            if(var2) { _fun0001_ip = 161; continue _fun0001 }
 93:
            var2 = var6 == var4;
            var1 = null;
            if(var2) { _fun0001_ip = 161; continue _fun0001 }
 102:
            var2 = {};
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.ClientThemeType;
            var6 = var6.CUSTOM_BACKGROUND_GRADIENT;
            var2['type'] = var6;
            var5 = _closure1_slot8;
            var2['getName'] = var5;
            var2['theme'] = var4;
            var2['customThemeSettings'] = var3;
            var1 = var2;
 161:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = function getMobileThemesArrayWithMaybeCustomTheme(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            if(!var1) { _fun0002_ip = 15; continue _fun0002 }
 9:
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 24; continue _fun0002 }
 15:
            var1 = _closure1_slot7;
            _fun0002_ip = 70; continue _fun0002;
 24:
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
 70:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    var _closure1_slot5 = var9;
    var8 = var5.REDESIGN_STANDARD_BACKGROUND_THEMES;
    var _closure1_slot6 = var8;
    var5 = new Array(0);
    var13 = var5;
    var12 = var8;
    var11 = 0;
    var11 = arraySpread(var13, var12, var11);
    var13 = var5;
    var12 = var9;
    var8 = arraySpread(var13, var12, var11);
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/native/MobileThemesUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useCustomBackgroundGradient'] = var4;
    var4 = function getAllMobileThemes() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var3 = var1.CustomThemeMobileRenderingExperiment;
            var2 = var3.getCurrentConfig;
            var1 = {};
            var5 = 'getAllMobileThemes';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var3 = var1.enabled;
            var2 = _closure1_slot10;
            var5 = _closure1_slot4;
            var1 = var5.hasCustomTheme;
            var5 = var1.bind(var5)();
            var1 = null;
            if(!var5) { _fun0003_ip = 167; continue _fun0003 }
 80:
            var5 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.ClientThemeType;
            var7 = var7.CUSTOM_BACKGROUND_GRADIENT;
            var5['type'] = var7;
            var7 = _closure1_slot8;
            var5['getName'] = var7;
            var8 = _closure1_slot4;
            var7 = var8.getTheme;
            var7 = var7.bind(var8)();
            var5['theme'] = var7;
            var7 = _closure1_slot4;
            var6 = var7.getCustomTheme;
            var6 = var6.bind(var7)();
            var5['customThemeSettings'] = var6;
            var1 = var5;
 167:
            var1 = var2.bind(var4)(var1, var3);
            return var1;
        }
    };
    var3['getAllMobileThemes'] = var4;
    var2 = function useAllMobileThemes() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var5 = var2.CustomThemeMobileRenderingExperiment;
        var3 = var5.useExperiment;
        var2 = {};
        var6 = 'useMobileThemes';
        var2['location'] = var6;
        var2 = var3.bind(var5)(var2);
        var3 = var2.enabled;
        var2 = _closure1_slot10;
        var1 = _closure1_slot9;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var4)(var1, var3);
        return var1;
    };
    var3['useAllMobileThemes'] = var2;
    return var1;
})();