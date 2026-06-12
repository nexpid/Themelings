// app/modules/client_themes/native/useColorThemeBackground.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getGuildThemeName() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 3;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.CFzDOG;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/useColorThemeBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useColorThemeBackground() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var8 = var1.bind(var6)();
            var _closure2_slot0 = var8;
            var5 = _closure1_slot0;
            var1 = 7;
            var2 = var9[var1];
            var11 = var5.bind(var6)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.theme;
                return var1;
            };
            var7 = var10.bind(var11)(var7, var2);
            var _closure2_slot1 = var7;
            var1 = var9[var1];
            var11 = var5.bind(var6)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.gradientPreset;
                return var1;
            };
            var1 = var10.bind(var11)(var2, var1);
            var2 = 8;
            var2 = var9[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.useCustomBackgroundGradient;
            var2 = var2.bind(var5)();
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var7;
            var3 = function() {
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = function getGuildThemeBackground(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var12 = arg2;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = var2.type;
                        var3 = 'custom';
                        if(!(var3 !== var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 5;
                        var3 = var10[var3];
                        var8 = undefined;
                        var7 = var9.bind(var8)(var3);
                        var5 = var7.getGuildThemePresetAppearance;
                        var3 = var2.preset;
                        var5 = var5.bind(var7)(var3, var12);
                        var3 = {};
                        var7 = 4;
                        var7 = var10[var7];
                        var7 = var9.bind(var8)(var7);
                        var7 = var7.ClientThemeType;
                        var7 = var7.CUSTOM_BACKGROUND_GRADIENT;
                        var3['type'] = var7;
                        var4 = _closure1_slot6;
                        var3['getName'] = var4;
                        var3['theme'] = var12;
                        var4 = {};
                        var9 = var5.colors;
                        var8 = var9.map;
                        var7 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.hex;
                            return var1;
                        };
                        var7 = var8.bind(var9)(var7);
                        var4['colors'] = var7;
                        var7 = var5.angle;
                        var4['gradientAngle'] = var7;
                        var8 = var5.colors;
                        var7 = var8.map;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.stop;
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
                        var4['gradientColorStops'] = var6;
                        var5 = var5.baseMix;
                        var4['baseMix'] = var5;
                        var3['customThemeSettings'] = var4;
                        return var3;
case 4:
                        var4 = var2.customUserThemeSettings;
                        var2 = var4.colors;
                        var6 = 0;
                        var11 = var2[var6];
                        var2 = {};
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 4;
                        var3 = var9[var3];
                        var7 = undefined;
                        var3 = var10.bind(var7)(var3);
                        var3 = var3.ClientThemeType;
                        var3 = var3.CUSTOM_BACKGROUND_GRADIENT;
                        var2['type'] = var3;
                        var3 = _closure1_slot6;
                        var2['getName'] = var3;
                        var2['theme'] = var12;
                        var3 = {};
                        var8 = 5;
                        var9 = var9[var8];
                        var10 = var10.bind(var7)(var9);
                        var9 = var10.getSingleColorGuildThemeGradientColors;
                        var14 = var9.bind(var10)(var11, var12);
                        var9 = new Array(0);
                        var15 = var9;
                        var13 = 0;
                        var10 = arraySpread(var15, var14, var13);
                        var3['colors'] = var9;
                        var9 = new Array(0);
                        var3['gradientColorStops'] = var9;
                        var9 = var4.gradientAngle;
                        var10 = var1 != var9;
                        if(!var10) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var6 = var9;
case 6:
                        var3['gradientAngle'] = var6;
                        var4 = var4.baseMix;
                        if(!(var1 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var5 = var6.bind(var7)(var5);
                        var4 = var5.GUILD_THEME_DEFAULT_BASE_MIX;
case 8:
                        var3['baseMix'] = var4;
                        var2['customThemeSettings'] = var3;
                        return var2;
case 2:
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var4 = var5.bind(var6)(var3, var4);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var4;
case 10:
            if(!(var3 != var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();