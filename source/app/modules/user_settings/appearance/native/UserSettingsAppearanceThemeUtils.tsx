// app/modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function getThemeNameForAnalytics(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
            if(!(var5 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var7.bind(var6)(var2);
            var2 = var2.ClientThemeType;
            var2 = var2.BACKGROUND_GRADIENT_PRESET;
            if(!(var5 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var3.theme;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var2 = 'default ';
            var2 = var5.bind(var2)(var7);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.BackgroundGradientPresetId;
            var3 = var3.id;
            var2 = var4[var3];
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = function trackClientThemeUpdated(arg1) {
        var1 = arg1;
        var8 = var1.isPersisted;
        var7 = var1.isSynced;
        var9 = var1.themeName;
        var6 = var1.analyticsLocations;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.CLIENT_THEME_UPDATED;
        var2 = {};
        var10 = _closure1_slot6;
        var10 = var10.CLIENT_THEME;
        var2['feature_name'] = var10;
        var2['theme_name'] = var9;
        var2['is_persisted'] = var8;
        var2['is_synced'] = var7;
        var2['location_stack'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot3 = var8;
    var5 = var5.ThemeTypes;
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticsPremiumFeatureNames;
    var _closure1_slot6 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function handleSaveTheme(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot8;
            var1 = {};
            var4 = true;
            var1['isPersisted'] = var4;
            var4 = arg3;
            var1['isSynced'] = var4;
            var6 = _closure1_slot7;
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var1['themeName'] = var6;
            var6 = arg2;
            var1['analyticsLocations'] = var6;
            var1 = var3.bind(var4)(var1);
            var3 = var5.theme;
            var1 = 'system';
            if(!(var1 !== var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = var5.type;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 3;
            var1 = var1[var7];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ClientThemeType;
            var1 = var1.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var3 !== var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = var5.type;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ClientThemeType;
            var1 = var1.BACKGROUND_GRADIENT_PRESET;
            if(!(var3 !== var1)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.resetBackgroundGradientPreset;
            var1 = var1.bind(var7)();
            var1 = 6;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.resetCustomTheme;
            var1 = var1.bind(var7)();
            var1 = 7;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.saveClientTheme;
            var1 = {};
            var7 = var5.theme;
            var1['theme'] = var7;
            var1 = var3.bind(var6)(var1);
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var9 = var6.bind(var4)(var3);
            var8 = var9.updateBackgroundGradientPreset;
            var3 = var5.id;
            var3 = var8.bind(var9)(var3);
            var3 = 6;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var3 = var8.resetCustomTheme;
            var3 = var3.bind(var8)();
            var3 = 7;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.saveClientTheme;
            var3 = {};
            var8 = var5.id;
            var3['backgroundGradientPresetId'] = var8;
            var8 = var5.theme;
            var3['theme'] = var8;
            var1 = var6.bind(var7)(var3);
case 13:
            _fun0002_ip = 14; continue _fun0002;
case 9:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 5;
            var3 = var10[var3];
            var6 = var9.bind(var4)(var3);
            var3 = var6.resetBackgroundGradientPreset;
            var3 = var3.bind(var6)();
            var3 = 6;
            var3 = var10[var3];
            var8 = var9.bind(var4)(var3);
            var7 = var8.updateCustomTheme;
            var6 = var5.customThemeSettings;
            var3 = var5.theme;
            var3 = var7.bind(var8)(var6, var3);
            var3 = 7;
            var3 = var10[var3];
            var7 = var9.bind(var4)(var3);
            var6 = var7.saveClientTheme;
            var3 = {};
            var8 = var5.customThemeSettings;
            var3['customUserThemeSettings'] = var8;
            var8 = 8;
            var8 = var10[var8];
            var10 = var9.bind(var4)(var8);
            var9 = var10.isThemeDark;
            var8 = var5.theme;
            var8 = var9.bind(var10)(var8);
            var9 = _closure1_slot4;
            if(var8) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var8 = var9.LIGHT;
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var8 = var9.DARK;
case 17:
            var3['theme'] = var8;
            var1 = var6.bind(var7)(var3);
case 14:
            _fun0002_ip = 18; continue _fun0002;
case 7:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.resetBackgroundGradientPreset;
            var2 = var2.bind(var7)();
            var2 = 6;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.resetCustomTheme;
            var2 = var2.bind(var7)();
            var2 = 7;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.saveClientTheme;
            var2 = {};
            var5 = var5.theme;
            var2['theme'] = var5;
            var1 = var3.bind(var4)(var2);
case 18:
            return var1;
        }
    };
    var3['handleSaveTheme'] = var5;
    var3['trackClientThemeUpdated'] = var4;
    var2 = function getUserThemeIndex(arg1, arg2, arg3, arg4, arg5) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = arg3;
            var5 = arg4;
            var _closure2_slot0 = var3;
            var6 = var4.findIndex;
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
            var6 = var6.bind(var4)(var2);
            var2 = null;
            if(!(var2 == var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = arg5;
            if(!var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var3 = var4.findIndex;
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
            var2 = var3.bind(var4)(var2);
            var3 = 0;
            if(!(!(var6 >= var3))) { _fun0003_ip = 23; continue _fun0003 }
case 21:
            var3 = 'system';
            var6 = arg2;
            if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = var5;
case 24:
            var _closure2_slot1 = var3;
            var5 = var4.findIndex;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.theme;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var5.bind(var4)(var3);
            var3 = 0;
            var6 = var5 >= var3;
            if(!var6) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var3 = var5;
case 26:
            return var3;
case 23:
            return var2;
case 19:
            var3 = var4.findIndex;
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
                var1 = var1.BACKGROUND_GRADIENT_PRESET;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var4 = _closure1_slot5;
            var2 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var5 = 0;
            var4 = var3 >= var5;
            var1 = 0;
            if(!var4) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var4 = var2 >= var5;
            var1 = 0;
            if(!var4) { _fun0003_ip = 28; continue _fun0003 }
case 30:
            var1 = var3 + var2;
case 28:
            return var1;
        }
    };
    var3['getUserThemeIndex'] = var2;
    return var1;
})();