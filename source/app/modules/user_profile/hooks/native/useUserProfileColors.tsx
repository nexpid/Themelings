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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useUserProfileColors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileColors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.theme;
            var6 = var1.primaryColor;
            var15 = var1.secondaryColor;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 1;
            var1 = var12[var1];
            var9 = undefined;
            var1 = var10.bind(var9)(var1);
            var8 = var1.bind(var9)();
            var7 = _closure1_slot0;
            var1 = 2;
            var1 = var12[var1];
            var2 = var7.bind(var9)(var1);
            var1 = var2.useProfileThemeValues;
            var2 = var1.bind(var2)(var4);
            var1 = 3;
            var1 = var12[var1];
            var11 = var7.bind(var9)(var1);
            var5 = var11.useStateFromStores;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var11 = var5.bind(var11)(var4, var1);
            var1 = {};
            var5 = 4;
            var4 = var12[var5];
            var16 = var7.bind(var9)(var4);
            var14 = var16.useToken;
            var4 = 5;
            var13 = var12[var4];
            var13 = var10.bind(var9)(var13);
            var13 = var13.colors;
            var13 = var13.BG_BASE_SECONDARY;
            var13 = var14.bind(var16)(var13, var8);
            var1['gradientFallbackBackground'] = var13;
            var13 = var12[var5];
            var16 = var7.bind(var9)(var13);
            var14 = var16.useToken;
            var13 = var12[var4];
            var13 = var10.bind(var9)(var13);
            var13 = var13.colors;
            var13 = var13.BG_BASE_SECONDARY;
            var13 = var14.bind(var16)(var13, var8);
            var1['gradientSecondaryBackground'] = var13;
            var13 = var12[var5];
            var16 = var7.bind(var9)(var13);
            var14 = var16.useToken;
            var13 = var12[var4];
            var13 = var10.bind(var9)(var13);
            var13 = var13.colors;
            var13 = var13.BG_SURFACE_RAISED;
            var13 = var14.bind(var16)(var13, var8);
            var1['containerBackground'] = var13;
            var13 = var12[var5];
            var16 = var7.bind(var9)(var13);
            var14 = var16.useToken;
            var13 = var12[var4];
            var13 = var10.bind(var9)(var13);
            var13 = var13.colors;
            var13 = var13.BG_BASE_SECONDARY;
            var13 = var14.bind(var16)(var13, var8);
            var1['avatarBackground'] = var13;
            var5 = var12[var5];
            var7 = var7.bind(var9)(var5);
            var5 = var7.useToken;
            var4 = var12[var4];
            var4 = var10.bind(var9)(var4);
            var4 = var4.colors;
            var4 = var4.BACKGROUND_FLOATING;
            var4 = var5.bind(var7)(var4, var8);
            var1['statusBackground'] = var4;
            var4 = null;
            if(!(var4 != var6)) { _fun0001_ip = 601; continue _fun0001 }
 365:
            if(!(var4 != var15)) { _fun0001_ip = 601; continue _fun0001 }
 372:
            if(!(var4 != var2)) { _fun0001_ip = 601; continue _fun0001 }
 379:
            var8 = var2.sectionBox;
            var14 = var2.overlay;
            var7 = var2.overlaySyncedWithUserTheme;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 6;
            var2 = var2[var10];
            var5 = var4.bind(var9)(var2);
            var4 = var5.calculateOverlayedColor;
            var2 = var14;
            if(!var11) { _fun0001_ip = 432; continue _fun0001 }
 429:
            var2 = var7;
 432:
            var7 = var4.bind(var5)(var6, var2);
            var2 = {};
            var18 = var2;
            var17 = var1;
            var4 = copyDataProperties(var18, var17);
            var4 = 'containerBackground';
            var2[var4] = var8;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 7;
            var5 = var3[var4];
            var12 = var6.bind(var9)(var5);
            var11 = var12.int2hex;
            var5 = var3[var10];
            var13 = var6.bind(var9)(var5);
            var5 = var13.calculateOverlayedColor;
            var5 = var5.bind(var13)(var15, var14);
            var11 = var11.bind(var12)(var5);
            var5 = 'gradientSecondaryBackground';
            var2[var5] = var11;
            var5 = var3[var4];
            var11 = var6.bind(var9)(var5);
            var5 = var11.int2hex;
            var11 = var5.bind(var11)(var7);
            var5 = 'avatarBackground';
            var2[var5] = var11;
            var4 = var3[var4];
            var5 = var6.bind(var9)(var4);
            var4 = var5.int2hex;
            var3 = var3[var10];
            var6 = var6.bind(var9)(var3);
            var3 = var6.calculateOverlayedColor;
            var3 = var3.bind(var6)(var7, var8);
            var4 = var4.bind(var5)(var3);
            var3 = 'statusBackground';
            var2[var3] = var4;
            return var2;
 601:
            return var1;
        }
    };
    var3['useUserProfileColors'] = var2;
    return var1;
})();