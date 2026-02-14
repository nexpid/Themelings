// app/modules/user_profile/useProfileThemeValues.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/useProfileThemeValues.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useProfileThemeValues(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var3 = var4[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.saturation;
            return var1;
        };
        var5 = var7.bind(var8)(var5, var3);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = {};
                var6 = _closure2_slot0;
                var7['theme'] = var6;
                var2 = _closure2_slot1;
                var7['saturation'] = var2;
                var2 = {};
                var13 = _closure1_slot1;
                var5 = _closure1_slot2;
                var10 = 3;
                var8 = var5[var10];
                var9 = undefined;
                var8 = var13.bind(var9)(var8);
                var12 = var8.internal;
                var11 = var12.resolveSemanticColor;
                var8 = var5[var10];
                var8 = var13.bind(var9)(var8);
                var8 = var8.colors;
                var8 = var8.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME;
                var8 = var11.bind(var12)(var6, var8, var7);
                var2['overlaySyncedWithUserTheme'] = var8;
                var8 = var5[var10];
                var8 = var13.bind(var9)(var8);
                var12 = var8.internal;
                var11 = var12.resolveSemanticColor;
                var8 = var5[var10];
                var8 = var13.bind(var9)(var8);
                var8 = var8.colors;
                var8 = var8.PROFILE_GRADIENT_OVERLAY;
                var8 = var11.bind(var12)(var6, var8, var7);
                var2['overlay'] = var8;
                var8 = _closure1_slot0;
                var11 = 4;
                var5 = var5[var11];
                var8 = var8.bind(var9)(var5);
                var5 = var8.getThemes;
                var5 = var5.bind(var8)();
                var5 = var5.LIGHT;
                if(!(var6 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var13 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = var5[var10];
                var6 = var13.bind(var9)(var6);
                var12 = var6.internal;
                var8 = var12.resolveSemanticColor;
                var6 = _closure2_slot0;
                var5 = var5[var10];
                var5 = var13.bind(var9)(var5);
                var5 = var5.colors;
                var5 = var5.BACKGROUND_MOD_NORMAL;
                var5 = var8.bind(var12)(var6, var5, var7);
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var8.bind(var9)(var6);
                var6 = var6.unsafe_rawColors;
                var5 = var6.OPACITY_WHITE_24;
case 6:
                var2['sectionBox'] = var5;
                var8 = _closure2_slot0;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var6 = var6.bind(var9)(var5);
                var5 = var6.getThemes;
                var5 = var5.bind(var6)();
                var6 = var5.DARK;
                var5 = 0.12;
                if(!(var8 === var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var5 = 0.24;
case 7:
                var2['dividerOpacity'] = var5;
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = var3[var10];
                var5 = var8.bind(var9)(var5);
                var6 = var5.internal;
                var5 = var6.resolveSemanticColor;
                var4 = _closure2_slot0;
                var3 = var3[var10];
                var3 = var8.bind(var9)(var3);
                var3 = var3.colors;
                var3 = var3.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND;
                var3 = var5.bind(var6)(var4, var3, var7);
                var2['rolePillBackgroundColor'] = var3;
                return var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useProfileThemeValues'] = var2;
    return var1;
})();