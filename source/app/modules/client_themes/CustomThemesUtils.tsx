// app/modules/client_themes/CustomThemesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var6 = function findCustomThemeCompatibleDefaultTheme(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isThemeDark;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var2 = _closure1_slot11;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.LIGHT;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = var2.DARK;
case 4:
            return var1;
        }
    };
    var _closure1_slot13 = var6;
    var5 = function updateDefaultThemePreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.ClientThemeSettings;
            var3 = var4.getSetting;
            var4 = var3.bind(var4)();
            var5 = var4.backgroundGradientPresetId;
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var7 = var4.backgroundGradientPresetId;
            var5 = _closure1_slot10;
            var3 = var7 in var5;
case 5:
            if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var5 = _closure1_slot10;
            var4 = var4.backgroundGradientPresetId;
            var4 = var5[var4];
            var4 = var4.theme;
            var3 = var4 !== var6;
case 7:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 11;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.setThemeOverride;
            var4 = var4.bind(var5)(var6);
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.resetPreviewClientTheme;
            var2 = var2.bind(var3)();
case 9:
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var4 = function adjustDefaultTheme() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot13;
            var1 = _closure1_slot4;
            var3 = var1.theme;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot4;
            var4 = var4.theme;
            if(!(var3 !== var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var2 = _closure1_slot14;
            var2 = var2.bind(var1)(var3);
case 11:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = function getResetValues(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var14 = arg1;
            var1 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var4 = var3.ClientThemeSettings;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            var6 = var3.customUserThemeSettings;
            var4 = _closure1_slot9;
            var3 = var4.getSavedCustomTheme;
            var7 = var3.bind(var4)();
            var3 = _closure1_slot12;
            var3 = var3.RESET_BUTTON;
            if(!(var14 !== var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var13 = new Array(0);
            _fun0004_ip = 15; continue _fun0004;
case 13:
            var4 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var4;
            var13 = var3;
case 15:
            var12 = _closure1_slot7;
            var10 = null;
            var3 = var10 == var6;
            var2 = undefined;
            if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var2 = var6.colors;
case 16:
            if(!(var10 == var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var2 = _closure1_slot12;
            var8 = var2.RESET_BUTTON;
            var5 = var13;
            var4 = 0;
            var3 = var12;
            var2 = var1;
            if(!(var14 === var8)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var8 = var10 != var7;
            var5 = var13;
            var4 = 0;
            var3 = var12;
            var2 = var1;
            if(!var8) { _fun0004_ip = 20; continue _fun0004 }
case 22:
            var12 = var7.colors;
            var8 = var7.gradient_angle;
            var13 = var10 != var8;
            var11 = 0;
            if(!var13) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var11 = var8;
case 23:
            var8 = var7.base_mix;
            if(!(var10 == var8)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var8 = _closure1_slot7;
case 25:
            var2 = var7.base_theme;
            var3 = var8;
            var5 = var12;
            var4 = var11;
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var8 = var6.colors;
            var11 = var6.gradientAngle;
            var12 = var10 != var11;
            var7 = 0;
            if(!var12) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var7 = var11;
case 27:
            var6 = var6.baseMix;
            if(!(var10 == var6)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var6 = _closure1_slot7;
case 29:
            var3 = var6;
            var5 = var8;
            var4 = var7;
            var2 = var1;
case 20:
            var1 = {};
            var1['resetColors'] = var5;
            var1['resetGradientAngle'] = var4;
            var1['resetChassisMixAmount'] = var3;
            var1['resetBaseTheme'] = var2;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var10[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var11 = var10[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.useClientThemeColorPickerStore;
    var _closure1_slot6 = var11;
    var11 = var7.DEFAULT_COLOR_INTENSITY;
    var _closure1_slot7 = var11;
    var7 = var7.DEFAULT_COLOR;
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.BACKGROUND_GRADIENT_PRESETS_MAP;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.ThemeTypes;
    var _closure1_slot11 = var7;
    var7 = {};
    var8 = 'reset_button';
    var7['RESET_BUTTON'] = var8;
    var8 = 'editor_close';
    var7['EDITOR_CLOSE'] = var8;
    var _closure1_slot12 = var7;
    var8 = 15;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/client_themes/CustomThemesUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function shouldIgnoreThemeChange() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var5 = var1.appearance;
            var3 = null;
            var6 = var3 == var5;
            var4 = undefined;
            var1 = undefined;
            if(var6) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var5 = var5.clientThemeSettings;
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0005_ip = 31; continue _fun0005 }
case 11:
            var1 = var5.customUserThemeSettings;
case 31:
            var1 = var3 != var1;
            if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.isCustomThemeMobileRenderingEnabled;
            var2 = 'shouldIgnoreThemeChange';
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 33:
            return var1;
        }
    };
    var3['shouldIgnoreThemeChange'] = var8;
    var3['ResetLocation'] = var7;
    var3['findCustomThemeCompatibleDefaultTheme'] = var6;
    var3['updateDefaultThemePreview'] = var5;
    var5 = function useCustomThemeReset() {
        var4 = _closure1_slot3;
        var5 = var4.useState;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.theme;
            return var1;
        };
        var6 = var5.bind(var4)(var3);
        var5 = _closure1_slot2;
        var3 = undefined;
        var2 = 1;
        var3 = var5.bind(var3)(var6, var2);
        var2 = 0;
        var5 = var3[var2];
        var _closure2_slot0 = var5;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var5 = _closure1_slot16;
                var3 = _closure2_slot0;
                var1 = undefined;
                var3 = var5.bind(var1)(var4, var3);
                var10 = var3.resetColors;
                var9 = var3.resetGradientAngle;
                var8 = var3.resetChassisMixAmount;
                var5 = var3.resetBaseTheme;
                var6 = _closure1_slot6;
                var3 = var6.getState;
                var7 = var3.bind(var6)();
                var6 = var7.setAll;
                var3 = {};
                var3['colors'] = var10;
                var3['gradientAngle'] = var9;
                var3['chassisMixAmount'] = var8;
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot12;
                var3 = var3.RESET_BUTTON;
                if(!(var4 !== var3)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 11;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.clearThemeOverride;
                var3 = var3.bind(var4)();
                _fun0006_ip = 36; continue _fun0006;
case 34:
                var4 = _closure1_slot14;
                var3 = _closure1_slot13;
                var6 = null;
                if(!(var6 == var5)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                var6 = _closure1_slot4;
                var5 = var6.theme;
case 37:
                var3 = var3.bind(var1)(var5);
                var3 = var4.bind(var1)(var3);
case 36:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 10;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.ClientThemeSettings;
                var3 = var4.getSetting;
                var3 = var3.bind(var4)();
                var4 = var3.backgroundGradientPresetId;
                var3 = null;
                if(!(var3 != var4)) { _fun0006_ip = 27; continue _fun0006 }
case 39:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 12;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.updateBackgroundGradientPreset;
                var2 = var2.bind(var3)(var4);
case 27:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCustomThemeReset'] = var5;
    var3['adjustDefaultTheme'] = var4;
    var4 = function setInitialCustomTheme(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var3 = new Array(1);
            var1 = arg2;
            var3[0] = var1;
            var2 = arg3;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 40:
            var2 = _closure1_slot15;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var3['setInitialCustomTheme'] = var4;
    var4 = function useIsResetButtonDisabled() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot6;
            var6 = undefined;
            var3 = var3.bind(var6)();
            var11 = var3.colors;
            var7 = var3.chassisMixAmount;
            var5 = var3.gradientAngle;
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 13;
            var3 = var8[var3];
            var9 = var4.bind(var6)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.theme;
                return var1;
            };
            var3 = var8.bind(var9)(var4, var3);
            var8 = _closure1_slot3;
            var4 = var8.useState;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.theme;
                return var1;
            };
            var8 = var4.bind(var8)(var2);
            var4 = _closure1_slot2;
            var2 = 1;
            var4 = var4.bind(var6)(var8, var2);
            var2 = 0;
            var4 = var4[var2];
            var2 = _closure1_slot16;
            var1 = _closure1_slot12;
            var1 = var1.RESET_BUTTON;
            var1 = var2.bind(var6)(var1, var4);
            var10 = var1.resetColors;
            var4 = var1.resetGradientAngle;
            var6 = var1.resetChassisMixAmount;
            var2 = var1.resetBaseTheme;
            var1 = global;
            var9 = var1.JSON;
            var8 = var9.stringify;
            var8 = var8.bind(var9)(var11);
            var9 = var1.JSON;
            var1 = var9.stringify;
            var1 = var1.bind(var9)(var10);
            var1 = var8 === var1;
            if(!var1) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var1 = var7 === var6;
case 25:
            if(!var1) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var1 = var5 === var4;
case 42:
            if(!var1) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var1 = var3 === var2;
case 44:
            return var1;
        }
    };
    var3['useIsResetButtonDisabled'] = var4;
    var2 = function useShouldShowCustomThemesMarketing(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 14;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var7 = var1.CustomThemesNitroHomeTileExperiment;
            var2 = var7.useExperiment;
            var1 = {};
            var1['location'] = var5;
            var1 = var2.bind(var7)(var1);
            var1 = var1.enabled;
            var2 = 8;
            var2 = var6[var2];
            var2 = var4.bind(var3)(var2);
            var4 = var2.ClientThemeColorPickerExperiment;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.v2EditorEnabled;
            if(!var1) { _fun0009_ip = 46; continue _fun0009 }
case 7:
            var1 = var2;
case 46:
            return var1;
        }
    };
    var3['useShouldShowCustomThemesMarketing'] = var2;
    return var1;
})();