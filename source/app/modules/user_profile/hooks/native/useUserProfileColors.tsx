// app/modules/user_profile/hooks/native/useUserProfileColors.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot4 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useUserProfileColors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileColors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.theme;
            var7 = var1.primaryColor;
            var15 = var1.secondaryColor;
            var17 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var9 = undefined;
            var1 = var17.bind(var9)(var1);
            var18 = var1.bind(var9)();
            var8 = _closure1_slot0;
            var1 = 3;
            var1 = var4[var1];
            var2 = var8.bind(var9)(var1);
            var1 = var2.useProfileThemeValues;
            var2 = var1.bind(var2)(var10);
            var1 = 4;
            var1 = var4[var1];
            var11 = var8.bind(var9)(var1);
            var6 = var11.useStateFromStores;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var12 = var6.bind(var11)(var5, var1);
            var1 = 5;
            var1 = var4[var1];
            var5 = var17.bind(var9)(var1);
            var1 = 'useUserProfileColors';
            var6 = var5.bind(var9)(var1);
            var1 = {};
            var5 = 6;
            var11 = var4[var5];
            var16 = var8.bind(var9)(var11);
            var14 = var16.useToken;
            var11 = 7;
            var13 = var4[var11];
            var13 = var17.bind(var9)(var13);
            var13 = var13.colors;
            var13 = var13.USER_PROFILE_GRADIENT_BACKGROUND;
            var13 = var14.bind(var16)(var13, var18);
            var1['gradientFallbackBackground'] = var13;
            var13 = var4[var5];
            var16 = var8.bind(var9)(var13);
            var14 = var16.useToken;
            var13 = var4[var11];
            var13 = var17.bind(var9)(var13);
            var13 = var13.colors;
            var13 = var13.USER_PROFILE_GRADIENT_BACKGROUND;
            var13 = var14.bind(var16)(var13, var18);
            var1['gradientSecondaryBackground'] = var13;
            var4 = var4[var5];
            var13 = var8.bind(var9)(var4);
            var8 = var13.useToken;
            var14 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var11];
            var4 = var14.bind(var9)(var4);
            var14 = var4.colors;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var14.USER_PROFILE_CONTAINER_BACKGROUND;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var14.CARD_MUTED_BG;
case 4:
            var4 = var8.bind(var13)(var4, var18);
            var1['containerBackground'] = var4;
            var13 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = var4[var5];
            var17 = var13.bind(var9)(var8);
            var16 = var17.useToken;
            var8 = _closure1_slot1;
            var14 = var4[var11];
            var14 = var8.bind(var9)(var14);
            var14 = var14.colors;
            var14 = var14.BORDER_MUTED;
            var14 = var16.bind(var17)(var14, var18);
            var1['containerBorderColor'] = var14;
            var14 = var4[var5];
            var17 = var13.bind(var9)(var14);
            var16 = var17.useToken;
            var14 = var4[var11];
            var14 = var8.bind(var9)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_BASE_LOWER;
            var14 = var16.bind(var17)(var14, var18);
            var1['avatarBackground'] = var14;
            var14 = var4[var5];
            var17 = var13.bind(var9)(var14);
            var16 = var17.useToken;
            var14 = var4[var11];
            var14 = var8.bind(var9)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_SURFACE_HIGH;
            var14 = var16.bind(var17)(var14, var18);
            var1['statusBackground'] = var14;
            var5 = var4[var5];
            var14 = var13.bind(var9)(var5);
            var13 = var14.useToken;
            var5 = var4[var11];
            var5 = var8.bind(var9)(var5);
            var5 = var5.colors;
            var5 = var5.BACKGROUND_MOD_NORMAL;
            var5 = var13.bind(var14)(var5, var10);
            var4 = var4[var11];
            var4 = var8.bind(var9)(var4);
            var4 = var4.unsafe_rawColors;
            var4 = var4.OPACITY_WHITE_24;
            var8 = _closure1_slot4;
            var8 = var8.LIGHT;
            if(!(var10 !== var8)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = var1.containerBackground;
case 7:
            _fun0001_ip = 9; continue _fun0001;
case 5:
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var1.containerBackground;
case 10:
            var5 = var4;
case 9:
            var4 = null;
            if(!(var4 != var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!(var4 != var15)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            if(!(var4 != var2)) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var8 = var2.sectionBox;
            var14 = var2.overlay;
            var11 = var2.overlaySyncedWithUserTheme;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 8;
            var2 = var2[var10];
            var6 = var4.bind(var9)(var2);
            var4 = var6.calculateOverlayedColor;
            var2 = var14;
            if(!var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var11;
case 16:
            var7 = var4.bind(var6)(var7, var2);
            var2 = {};
            var20 = var2;
            var19 = var1;
            var4 = copyDataProperties(var20, var19);
            var4 = 'containerBackground';
            var2[3] = var5;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 9;
            var5 = var3[var4];
            var12 = var6.bind(var9)(var5);
            var11 = var12.int2hex;
            var5 = var3[var10];
            var13 = var6.bind(var9)(var5);
            var5 = var13.calculateOverlayedColor;
            var5 = var5.bind(var13)(var15, var14);
            var11 = var11.bind(var12)(var5);
            var5 = 'gradientSecondaryBackground';
            var2[4] = var11;
            var5 = var3[var4];
            var11 = var6.bind(var9)(var5);
            var5 = var11.int2hex;
            var11 = var5.bind(var11)(var7);
            var5 = 'avatarBackground';
            var2[4] = var11;
            var4 = var3[var4];
            var5 = var6.bind(var9)(var4);
            var4 = var5.int2hex;
            var3 = var3[var10];
            var6 = var6.bind(var9)(var3);
            var3 = var6.calculateOverlayedColor;
            var3 = var3.bind(var6)(var7, var8);
            var4 = var4.bind(var5)(var3);
            var3 = 'statusBackground';
            var2[2] = var4;
            return var2;
case 12:
            return var1;
        }
    };
    var3['useUserProfileColors'] = var2;
    return var1;
})();