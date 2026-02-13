// app/modules/user_profile/hooks/useProfileTheme.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffectiveThemeOverride;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useProfileTheme.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useProfileTheme(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.user;
            var15 = var1.displayProfile;
            var13 = var1.pendingThemeColors;
            var16 = var1.pendingAvatarSrc;
            var4 = var1.isPreview;
            var5 = var1.forceUserTheme;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var11 = undefined;
            var1 = var3.bind(var11)(var1);
            var10 = var1.bind(var11)();
            var1 = _closure1_slot5;
            var1 = var1.bind(var11)();
            var6 = _closure1_slot0;
            var3 = 5;
            var3 = var7[var3];
            var8 = var6.bind(var11)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var6 = var7.bind(var8)(var6, var3);
            var8 = null;
            if(!(var8 == var16)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8 == var14;
            var3 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var14.getAvatarURL;
            var7 = var8 == var15;
            var9 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var15.guildId;
case 6:
            var7 = 80;
            var3 = var12.bind(var14)(var9, var7);
case 4:
            var16 = var3;
case 2:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var18 = var7.bind(var11)(var3);
            var17 = var18.unsafe_getResolvedRawColor;
            var14 = {};
            var9 = 1;
            var14['saturation'] = var9;
            var3 = 'PRIMARY_530';
            var14 = var17.bind(var18)(var3, var14);
            var3 = 7;
            var3 = var12[var3];
            var12 = var7.bind(var11)(var3);
            var7 = var12.useAvatarColors;
            var3 = false;
            var12 = var7.bind(var12)(var16, var14, var3);
            var7 = _closure1_slot3;
            var3 = 2;
            var7 = var7.bind(var11)(var12, var3);
            var3 = 0;
            var14 = var7[var3];
            var12 = var7[var9];
            if(!(var8 == var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!(var8 != var15)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var15.canEditThemes;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var4['theme'] = var10;
            return var4;
case 12:
            var4 = var8 == var15;
            var7 = undefined;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var15.getPreviewThemeColors;
            var7 = var4.bind(var15)(var13);
case 14:
            var13 = var8 == var7;
            var4 = undefined;
            if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var7[var3];
case 16:
            if(!(var8 == var4)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 8;
            var3 = var15[var3];
            var13 = var13.bind(var11)(var3);
            var3 = var13.hex2int;
            var4 = var3.bind(var13)(var14);
case 18:
            var13 = var8 == var7;
            var3 = undefined;
            if(var13) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = var7[var9];
case 20:
            if(!(var8 == var3)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 8;
            var7 = var13[var7];
            var9 = var9.bind(var11)(var7);
            var7 = var9.hex2int;
            var3 = var7.bind(var9)(var12);
case 22:
            var7 = var10;
            if(var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = var10;
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 9;
            var5 = var9[var5];
            var6 = var6.bind(var11)(var5);
            var5 = var6.getProfileTheme;
            var6 = var5.bind(var6)(var4);
            var5 = var10;
            if(!(var8 != var6)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var5 = var6;
case 27:
            var7 = var5;
case 24:
            var5 = _closure1_slot6;
            var5 = var5.DARK;
            if(!(var7 === var5)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 10;
            var5 = var8[var5];
            var6 = var6.bind(var11)(var5);
            var5 = var6.isThemeDark;
            var6 = var5.bind(var6)(var10);
            var5 = var10;
            if(var6) { _fun0001_ip = 31; continue _fun0001 }
case 29:
            var6 = _closure1_slot6;
            var6 = var6.DARK;
            var6 = var7 === var6;
            if(!var6) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 10;
            var8 = var12[var8];
            var9 = var9.bind(var11)(var8);
            var8 = var9.isThemeLight;
            var6 = var8.bind(var9)(var10);
case 32:
            var5 = var7;
            if(!var6) { _fun0001_ip = 31; continue _fun0001 }
case 34:
            var2 = _closure1_slot6;
            var5 = var2.DARKER;
case 31:
            var2 = {};
            var2['theme'] = var5;
            var2['primaryColor'] = var4;
            var2['secondaryColor'] = var3;
            return var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();