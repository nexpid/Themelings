// app/modules/user_settings/native/UserSettingsAppearanceThemeUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var9;
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
        var1 = 6;
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
    var7 = 7;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_settings/native/UserSettingsAppearanceThemeUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot6;
            var1 = {};
            var3 = true;
            var1['isPersisted'] = var3;
            var3 = arg3;
            var1['isSynced'] = var3;
            var4 = var5.colors;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 77; continue _fun0001 }
 38:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var8.bind(var4)(var7);
            var7 = var4.BackgroundGradientPresetId;
            var4 = var5.id;
            var4 = var7[var4];
            _fun0001_ip = 107; continue _fun0001;
 77:
            var9 = var5.theme;
            var7 = global;
            var7 = var7.HermesInternal;
            var8 = var7.concat;
            var7 = 'default ';
            var4 = var8.bind(var7)(var9);
 107:
            var1['themeName'] = var4;
            var4 = arg2;
            var1['analyticsLocations'] = var4;
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var6 = var5.theme;
            var1 = _closure1_slot4;
            var1 = var1.MIDNIGHT;
            if(!(var6 === var1)) { _fun0001_ip = 180; continue _fun0001 }
 147:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var7 = var6.bind(var4)(var1);
            var6 = var7.setShouldSyncAppearanceSettings;
            var1 = false;
            var1 = var6.bind(var7)(var1);
 180:
            var6 = var5.theme;
            var1 = 'system';
            if(!(var1 !== var6)) { _fun0001_ip = 287; continue _fun0001 }
 194:
            var1 = var5.colors;
            if(!(var3 != var1)) { _fun0001_ip = 287; continue _fun0001 }
 203:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var8 = var3.bind(var4)(var1);
            var7 = var8.updateBackgroundGradientPreset;
            var1 = var5.id;
            var1 = var7.bind(var8)(var1);
            var1 = 4;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.saveClientTheme;
            var1 = {};
            var7 = var5.id;
            var1['backgroundGradientPresetId'] = var7;
            var7 = var5.theme;
            var1['theme'] = var7;
            var1 = var3.bind(var6)(var1);
            _fun0001_ip = 353; continue _fun0001;
 287:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.resetBackgroundGradientPreset;
            var2 = var2.bind(var7)();
            var2 = 4;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.saveClientTheme;
            var2 = {};
            var5 = var5.theme;
            var2['theme'] = var5;
            var1 = var3.bind(var4)(var2);
 353:
            return var1;
        }
    };
    var3['handleSaveTheme'] = var7;
    var3['trackClientThemeUpdated'] = var6;
    var3['STANDARD_BACKGROUND_THEME_BUFFER'] = var5;
    var3['PRESET_ID_TO_CAROUSEL_INDEX_MAP'] = var4;
    var2 = function(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = arg3;
            var5 = arg4;
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 66; continue _fun0002 }
 17:
            var3 = 'system';
            var6 = arg2;
            if(var6) { _fun0002_ip = 30; continue _fun0002 }
 27:
            var3 = var5;
 30:
            var _closure2_slot0 = var3;
            var3 = var4.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.theme;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = 0;
            var4 = var3 >= var2;
            if(!var4) { _fun0002_ip = 64; continue _fun0002 }
 61:
            var2 = var3;
 64:
            return var2;
 66:
            var2 = _closure1_slot8;
            var1 = var1.id;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['getUserThemeIndex'] = var2;
    return var1;
})();