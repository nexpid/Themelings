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
    var7 = var4.Color;
    var _closure1_slot5 = var7;
    var4 = var4.ThemeTypes;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useProfileTheme.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useProfileTheme(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.user;
            var14 = var1.displayProfile;
            var12 = var1.pendingThemeColors;
            var13 = var1.pendingAvatarSrc;
            var3 = var1.isPreview;
            var4 = var1.forceUserTheme;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var10 = undefined;
            var2 = var5.bind(var10)(var2);
            var9 = var2.bind(var10)();
            var5 = _closure1_slot0;
            var2 = 4;
            var2 = var6[var2];
            var7 = var5.bind(var10)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var5 = var6.bind(var7)(var5, var2);
            var7 = null;
            if(!(var7 == var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7 == var15;
            var2 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var15.getAvatarURL;
            var6 = var7 == var14;
            var8 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var14.guildId;
case 6:
            var6 = 80;
            var2 = var11.bind(var15)(var8, var6);
case 4:
            var13 = var2;
case 2:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var15 = var6.bind(var10)(var2);
            var11 = var15.useColorValue;
            var2 = _closure1_slot5;
            var2 = var2.PRIMARY_530;
            var2 = var11.bind(var15)(var2);
            var11 = var2.hex;
            var2 = 6;
            var2 = var8[var2];
            var8 = var6.bind(var10)(var2);
            var6 = var8.useAvatarColors;
            var2 = false;
            var8 = var6.bind(var8)(var13, var11, var2);
            var6 = _closure1_slot3;
            var2 = 2;
            var6 = var6.bind(var10)(var8, var2);
            var2 = 0;
            var13 = var6[var2];
            var8 = 1;
            var11 = var6[var8];
            if(!(var7 != var14)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var14.canEditThemes;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var3['theme'] = var9;
            return var3;
case 10:
            var3 = var7 == var14;
            var6 = undefined;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var14.getPreviewThemeColors;
            var6 = var3.bind(var14)(var12);
case 12:
            var12 = var7 == var6;
            var3 = undefined;
            if(var12) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var6[var2];
case 14:
            if(!(var7 == var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 7;
            var2 = var14[var2];
            var12 = var12.bind(var10)(var2);
            var2 = var12.hex2int;
            var3 = var2.bind(var12)(var13);
case 16:
            var12 = var7 == var6;
            var2 = undefined;
            if(var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var6[var8];
case 18:
            if(!(var7 == var2)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 7;
            var6 = var12[var6];
            var8 = var8.bind(var10)(var6);
            var6 = var8.hex2int;
            var2 = var6.bind(var8)(var11);
case 20:
            var6 = var9;
            if(var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var9;
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.getProfileTheme;
            var5 = var4.bind(var5)(var3);
            var4 = var9;
            if(!(var7 != var5)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var4 = var5;
case 25:
            var6 = var4;
case 22:
            var4 = _closure1_slot6;
            var4 = var4.DARK;
            if(!(var6 === var4)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.isThemeDark;
            var5 = var4.bind(var5)(var9);
            var4 = var9;
            if(var5) { _fun0001_ip = 29; continue _fun0001 }
case 27:
            var5 = _closure1_slot6;
            var5 = var5.DARK;
            var5 = var6 === var5;
            if(!var5) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 9;
            var7 = var11[var7];
            var8 = var8.bind(var10)(var7);
            var7 = var8.isThemeLight;
            var5 = var7.bind(var8)(var9);
case 30:
            var4 = var6;
            if(!var5) { _fun0001_ip = 29; continue _fun0001 }
case 32:
            var1 = _closure1_slot6;
            var4 = var1.DARKER;
case 29:
            var1 = {};
            var1['theme'] = var4;
            var1['primaryColor'] = var3;
            var1['secondaryColor'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();