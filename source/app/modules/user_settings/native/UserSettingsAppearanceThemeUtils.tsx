// app/modules/user_settings/native/UserSettingsAppearanceThemeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var9;
    var1 = function getThemeNameForAnalytics(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = var3.type;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 3;
            var1 = var1[var8];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var1 = var1.ClientThemeType;
            var2 = var1.CUSTOM_BACKGROUND_GRADIENT;
            var1 = 'custom theme';
            if(!(var5 !== var2)) { _fun0001_ip = 162; continue _fun0001 }
 55:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var7.bind(var6)(var2);
            var2 = var2.ClientThemeType;
            var2 = var2.BACKGROUND_GRADIENT_PRESET;
            if(!(var5 !== var2)) { _fun0001_ip = 124; continue _fun0001 }
 93:
            var7 = var3.theme;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var2 = 'default ';
            var2 = var5.bind(var2)(var7);
            _fun0001_ip = 159; continue _fun0001;
 124:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.BackgroundGradientPresetId;
            var3 = var3.id;
            var2 = var4[var3];
 159:
            var1 = var2;
 162:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot3 = var5;
    var4 = var4.ThemeTypes;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var11 = var4.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    var4 = var4.REDESIGN_STANDARD_BACKGROUND_THEMES;
    var5 = 2;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.AnalyticsPremiumFeatureNames;
    var _closure1_slot5 = var5;
    var6 = function trackClientThemeUpdated(arg1) {
        var1 = arg1;
        var8 = var1.isPersisted;
        var7 = var1.isSynced;
        var9 = var1.themeName;
        var6 = var1.analyticsLocations;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.CLIENT_THEME_UPDATED;
        var2 = {};
        var10 = _closure1_slot5;
        var10 = var10.CLIENT_THEME;
        var2['feature_name'] = var10;
        var2['theme_name'] = var9;
        var2['is_persisted'] = var8;
        var2['is_synced'] = var7;
        var2['location_stack'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot6 = var6;
    var5 = var4.length;
    var _closure1_slot7 = var5;
    var10 = var11.reduce;
    var7 = function(arg1, arg2, arg3) {
        var1 = {};
        var5 = arg1;
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        var2 = arg2;
        var3 = var2.id;
        var4 = _closure1_slot7;
        var2 = arg3;
        var2 = var2 + var4;
        var1[var3] = var2;
        return var1;
    };
    var4 = {};
    var4 = var10.bind(var11)(var7, var4);
    var _closure1_slot8 = var4;
    var7 = 11;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_settings/native/UserSettingsAppearanceThemeUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var3 = var6.isCustomThemeMobileRenderingEnabled;
            var1 = 'handleSaveTheme';
            var1 = var3.bind(var6)(var1);
            var6 = _closure1_slot6;
            var3 = {};
            var7 = true;
            var3['isPersisted'] = var7;
            var7 = arg3;
            var3['isSynced'] = var7;
            var7 = _closure1_slot9;
            var7 = var7.bind(var4)(var5);
            var3['themeName'] = var7;
            var7 = arg2;
            var3['analyticsLocations'] = var7;
            var3 = var6.bind(var4)(var3);
            var6 = var5.theme;
            var3 = _closure1_slot4;
            var3 = var3.MIDNIGHT;
            if(!(var6 === var3)) { _fun0002_ip = 143; continue _fun0002 }
 110:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.setShouldSyncAppearanceSettings;
            var3 = false;
            var3 = var6.bind(var7)(var3);
 143:
            var6 = var5.theme;
            var3 = 'system';
            if(!(var3 !== var6)) { _fun0002_ip = 598; continue _fun0002 }
 159:
            if(!var1) { _fun0002_ip = 206; continue _fun0002 }
 162:
            var3 = var5.type;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ClientThemeType;
            var1 = var1.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var3 !== var1)) { _fun0002_ip = 442; continue _fun0002 }
 206:
            var3 = var5.type;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ClientThemeType;
            var1 = var1.BACKGROUND_GRADIENT_PRESET;
            if(!(var3 !== var1)) { _fun0002_ip = 335; continue _fun0002 }
 247:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.resetBackgroundGradientPreset;
            var1 = var1.bind(var7)();
            var1 = 8;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.resetCustomTheme;
            var1 = var1.bind(var7)();
            var1 = 6;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.saveClientTheme;
            var1 = {};
            var7 = var5.theme;
            var1['theme'] = var7;
            var1 = var3.bind(var6)(var1);
            _fun0002_ip = 437; continue _fun0002;
 335:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var9 = var6.bind(var4)(var3);
            var8 = var9.updateBackgroundGradientPreset;
            var3 = var5.id;
            var3 = var8.bind(var9)(var3);
            var3 = 8;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var3 = var8.resetCustomTheme;
            var3 = var3.bind(var8)();
            var3 = 6;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.saveClientTheme;
            var3 = {};
            var8 = var5.id;
            var3['backgroundGradientPresetId'] = var8;
            var8 = var5.theme;
            var3['theme'] = var8;
            var1 = var6.bind(var7)(var3);
 437:
            _fun0002_ip = 596; continue _fun0002;
 442:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var6 = var9.bind(var4)(var3);
            var3 = var6.resetBackgroundGradientPreset;
            var3 = var3.bind(var6)();
            var3 = 8;
            var3 = var10[var3];
            var8 = var9.bind(var4)(var3);
            var7 = var8.updateCustomTheme;
            var6 = var5.customThemeSettings;
            var3 = var5.theme;
            var3 = var7.bind(var8)(var6, var3);
            var3 = 6;
            var3 = var10[var3];
            var7 = var9.bind(var4)(var3);
            var6 = var7.saveClientTheme;
            var3 = {};
            var8 = var5.customThemeSettings;
            var3['customUserThemeSettings'] = var8;
            var8 = 9;
            var8 = var10[var8];
            var10 = var9.bind(var4)(var8);
            var9 = var10.isThemeDark;
            var8 = var5.theme;
            var8 = var9.bind(var10)(var8);
            var9 = _closure1_slot4;
            if(var8) { _fun0002_ip = 581; continue _fun0002 }
 573:
            var8 = var9.LIGHT;
            _fun0002_ip = 587; continue _fun0002;
 581:
            var8 = var9.DARK;
 587:
            var3['theme'] = var8;
            var1 = var6.bind(var7)(var3);
 596:
            _fun0002_ip = 684; continue _fun0002;
 598:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.resetBackgroundGradientPreset;
            var2 = var2.bind(var7)();
            var2 = 8;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.resetCustomTheme;
            var2 = var2.bind(var7)();
            var2 = 6;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.saveClientTheme;
            var2 = {};
            var5 = var5.theme;
            var2['theme'] = var5;
            var1 = var3.bind(var4)(var2);
 684:
            return var1;
        }
    };
    var3['handleSaveTheme'] = var7;
    var3['trackClientThemeUpdated'] = var6;
    var3['STANDARD_BACKGROUND_THEME_BUFFER'] = var5;
    var3['PRESET_ID_TO_CAROUSEL_INDEX_MAP'] = var4;
    var2 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = arg3;
            var7 = arg4;
            var3 = arg5;
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 98; continue _fun0003 }
 20:
            if(!var3) { _fun0003_ip = 47; continue _fun0003 }
 23:
            var5 = var6.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ClientThemeType;
                var1 = var1.CUSTOM_BACKGROUND_GRADIENT;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var5 = 0;
            if(!(!(var2 >= var5))) { _fun0003_ip = 96; continue _fun0003 }
 47:
            var5 = 'system';
            var8 = arg2;
            if(var8) { _fun0003_ip = 60; continue _fun0003 }
 57:
            var5 = var7;
 60:
            var _closure2_slot0 = var5;
            var5 = var6.findIndex;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.theme;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = 0;
            var6 = var5 >= var4;
            if(!var6) { _fun0003_ip = 94; continue _fun0003 }
 91:
            var4 = var5;
 94:
            return var4;
 96:
            return var2;
 98:
            var2 = _closure1_slot8;
            var1 = var1.id;
            var2 = var2[var1];
            var1 = 0;
            if(!var3) { _fun0003_ip = 122; continue _fun0003 }
 119:
            var1 = 1;
 122:
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['getUserThemeIndex'] = var2;
    return var1;
})();