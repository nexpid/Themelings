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
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isThemeDark;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var2 = _closure1_slot9;
            if(var1) { _fun0001_ip = 54; continue _fun0001 }
 46:
            var1 = var2.LIGHT;
            _fun0001_ip = 60; continue _fun0001;
 54:
            var1 = var2.DARK;
 60:
            return var1;
        }
    };
    var _closure1_slot11 = var6;
    var5 = function updateDefaultThemePreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.ClientThemeSettings;
            var3 = var4.getSetting;
            var4 = var3.bind(var4)();
            var5 = var4.backgroundGradientPresetId;
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0002_ip = 73; continue _fun0002 }
 59:
            var7 = var4.backgroundGradientPresetId;
            var5 = _closure1_slot8;
            var3 = var7 in var5;
 73:
            if(!var3) { _fun0002_ip = 100; continue _fun0002 }
 76:
            var5 = _closure1_slot8;
            var4 = var4.backgroundGradientPresetId;
            var4 = var5[var4];
            var4 = var4.theme;
            var3 = var4 !== var6;
 100:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.setThemeOverride;
            var4 = var4.bind(var5)(var6);
            if(!var3) { _fun0002_ip = 164; continue _fun0002 }
 134:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 10;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.resetPreviewClientTheme;
            var2 = var2.bind(var3)();
 164:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function adjustDefaultTheme() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot11;
            var1 = _closure1_slot3;
            var3 = var1.theme;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot3;
            var4 = var4.theme;
            if(!(var3 !== var4)) { _fun0003_ip = 47; continue _fun0003 }
 38:
            var2 = _closure1_slot12;
            var2 = var2.bind(var1)(var3);
 47:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var11 = var10[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var8 = var7.useClientThemeColorPickerStore;
    var _closure1_slot5 = var8;
    var8 = var7.DEFAULT_COLOR_INTENSITY;
    var _closure1_slot6 = var8;
    var7 = var7.DEFAULT_COLOR;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.BACKGROUND_GRADIENT_PRESETS_MAP;
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.ThemeTypes;
    var _closure1_slot9 = var7;
    var7 = {};
    var8 = 'reset_button';
    var7['RESET_BUTTON'] = var8;
    var8 = 'editor_close';
    var7['EDITOR_CLOSE'] = var8;
    var _closure1_slot10 = var7;
    var8 = 11;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/client_themes/CustomThemesUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function shouldIgnoreThemeChange() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = _closure1_slot4;
            var1 = var1.settings;
            var5 = var1.appearance;
            var3 = null;
            var6 = var3 == var5;
            var4 = undefined;
            var1 = undefined;
            if(var6) { _fun0004_ip = 53; continue _fun0004 }
 32:
            var5 = var5.clientThemeSettings;
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0004_ip = 53; continue _fun0004 }
 47:
            var1 = var5.customUserThemeSettings;
 53:
            var1 = var3 != var1;
            if(!var1) { _fun0004_ip = 98; continue _fun0004 }
 60:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 6;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.isCustomThemeMobileRenderingEnabled;
            var2 = 'shouldIgnoreThemeChange';
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
 98:
            return var1;
        }
    };
    var3['shouldIgnoreThemeChange'] = var8;
    var3['ResetLocation'] = var7;
    var3['findCustomThemeCompatibleDefaultTheme'] = var6;
    var3['updateDefaultThemePreview'] = var5;
    var5 = function useCustomThemeReset() {
        var4 = _closure1_slot2;
        var3 = var4.useRef;
        var2 = null;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var5 = var4.useEffect;
        var3 = function() {
            var2 = _closure2_slot0;
            var1 = _closure1_slot3;
            var1 = var1.theme;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = new Array(0);
        var2 = var5.bind(var4)(var3, var2);
        var3 = var4.useCallback;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg1;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 8;
                var3 = var1[var6];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.ClientThemeSettings;
                var3 = var4.getSetting;
                var3 = var3.bind(var4)();
                var10 = var3.customUserThemeSettings;
                var4 = _closure1_slot5;
                var3 = var4.getState;
                var8 = var3.bind(var4)();
                var7 = var8.setAll;
                var4 = {};
                var3 = null;
                var11 = var3 == var10;
                var9 = undefined;
                if(var11) { _fun0005_ip = 88; continue _fun0005 }
 83:
                var9 = var10.colors;
 88:
                if(!(var3 == var9)) { _fun0005_ip = 130; continue _fun0005 }
 92:
                var11 = _closure1_slot10;
                var11 = var11.RESET_BUTTON;
                if(!(var5 !== var11)) { _fun0005_ip = 112; continue _fun0005 }
 106:
                var11 = new Array(0);
                _fun0005_ip = 127; continue _fun0005;
 112:
                var13 = _closure1_slot7;
                var12 = new Array(1);
                var12[0] = var13;
                var11 = var12;
 127:
                var9 = var11;
 130:
                var4['colors'] = var9;
                var9 = var3 == var10;
                var11 = undefined;
                if(var9) { _fun0005_ip = 149; continue _fun0005 }
 143:
                var11 = var10.gradientAngle;
 149:
                var12 = var3 != var11;
                var9 = 0;
                if(!var12) { _fun0005_ip = 161; continue _fun0005 }
 158:
                var9 = var11;
 161:
                var4['gradientAngle'] = var9;
                var11 = var3 == var10;
                var9 = undefined;
                if(var11) { _fun0005_ip = 181; continue _fun0005 }
 175:
                var9 = var10.baseMix;
 181:
                if(!(var3 == var9)) { _fun0005_ip = 189; continue _fun0005 }
 185:
                var9 = _closure1_slot6;
 189:
                var4['chassisMixAmount'] = var9;
                var4 = var7.bind(var8)(var4);
                var4 = _closure1_slot10;
                var4 = var4.RESET_BUTTON;
                if(!(var5 !== var4)) { _fun0005_ip = 245; continue _fun0005 }
 213:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 9;
                var4 = var7[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.clearThemeOverride;
                var4 = var4.bind(var5)();
                _fun0005_ip = 289; continue _fun0005;
 245:
                var5 = _closure1_slot12;
                var7 = _closure1_slot11;
                var4 = _closure2_slot0;
                var4 = var4.current;
                if(!(var3 == var4)) { _fun0005_ip = 279; continue _fun0005 }
 269:
                var8 = _closure1_slot3;
                var4 = var8.theme;
 279:
                var4 = var7.bind(var1)(var4);
                var4 = var5.bind(var1)(var4);
 289:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var5.bind(var1)(var4);
                var5 = var4.ClientThemeSettings;
                var4 = var5.getSetting;
                var4 = var4.bind(var5)();
                var4 = var4.backgroundGradientPresetId;
                if(!(var3 != var4)) { _fun0005_ip = 363; continue _fun0005 }
 332:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 10;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.updateBackgroundGradientPreset;
                var2 = var2.bind(var3)(var4);
 363:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCustomThemeReset'] = var5;
    var3['adjustDefaultTheme'] = var4;
    var4 = function setInitialCustomTheme(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0006_ip = 35; continue _fun0006 }
 14:
            var3 = new Array(1);
            var1 = arg2;
            var3[0] = var1;
            var2 = arg3;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 35:
            var2 = _closure1_slot13;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var3['setInitialCustomTheme'] = var4;
    var2 = function useIsResetButtonDisabled() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = _closure1_slot5;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var9 = var2.colors;
            var5 = var2.chassisMixAmount;
            var3 = var2.gradientAngle;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 8;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var6 = var2.ClientThemeSettings;
            var2 = var6.getSetting;
            var2 = var2.bind(var6)();
            var7 = var2.customUserThemeSettings;
            var6 = null;
            var2 = var6 == var7;
            var8 = undefined;
            if(var2) { _fun0007_ip = 88; continue _fun0007 }
 83:
            var8 = var7.colors;
 88:
            if(!(var6 == var8)) { _fun0007_ip = 107; continue _fun0007 }
 92:
            var10 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var10;
            var8 = var2;
 107:
            var2 = var6 == var7;
            var10 = undefined;
            if(var2) { _fun0007_ip = 122; continue _fun0007 }
 116:
            var10 = var7.gradientAngle;
 122:
            var11 = var6 != var10;
            var2 = 0;
            if(!var11) { _fun0007_ip = 134; continue _fun0007 }
 131:
            var2 = var10;
 134:
            var10 = var6 == var7;
            var4 = undefined;
            if(var10) { _fun0007_ip = 149; continue _fun0007 }
 143:
            var4 = var7.baseMix;
 149:
            if(!(var6 == var4)) { _fun0007_ip = 157; continue _fun0007 }
 153:
            var4 = _closure1_slot6;
 157:
            var1 = global;
            var7 = var1.JSON;
            var6 = var7.stringify;
            var6 = var6.bind(var7)(var9);
            var7 = var1.JSON;
            var1 = var7.stringify;
            var1 = var1.bind(var7)(var8);
            var1 = var6 === var1;
            if(!var1) { _fun0007_ip = 204; continue _fun0007 }
 200:
            var1 = var5 === var4;
 204:
            if(!var1) { _fun0007_ip = 211; continue _fun0007 }
 207:
            var1 = var3 === var2;
 211:
            return var1;
        }
    };
    var3['useIsResetButtonDisabled'] = var2;
    return var1;
})();