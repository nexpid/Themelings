// app/modules/user_profile/hooks/useProfileTheme.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
            var1 = arg1;
            var14 = var1.user;
            var13 = var1.displayProfile;
            var11 = var1.pendingThemeColors;
            var12 = var1.pendingAvatarSrc;
            var3 = var1.isPreview;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var10 = undefined;
            var2 = var4.bind(var10)(var2);
            var9 = var2.bind(var10)();
            var4 = _closure1_slot0;
            var2 = 4;
            var2 = var5[var2];
            var6 = var4.bind(var10)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var4 = var5.bind(var6)(var4, var2);
            var7 = null;
            if(!(var7 == var12)) { _fun0001_ip = 154; continue _fun0001 }
 113:
            var5 = var7 == var14;
            var2 = undefined;
            if(var5) { _fun0001_ip = 151; continue _fun0001 }
 122:
            var8 = var14.getAvatarURL;
            var5 = var7 == var13;
            var6 = undefined;
            if(var5) { _fun0001_ip = 142; continue _fun0001 }
 137:
            var6 = var13.guildId;
 142:
            var5 = 80;
            var2 = var8.bind(var14)(var6, var5);
 151:
            var12 = var2;
 154:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var14 = var5.bind(var10)(var2);
            var8 = var14.useColorValue;
            var2 = _closure1_slot5;
            var2 = var2.PRIMARY_530;
            var2 = var8.bind(var14)(var2);
            var8 = var2.hex;
            var2 = 6;
            var2 = var6[var2];
            var6 = var5.bind(var10)(var2);
            var5 = var6.useAvatarColors;
            var2 = false;
            var6 = var5.bind(var6)(var12, var8, var2);
            var5 = _closure1_slot3;
            var2 = 2;
            var5 = var5.bind(var10)(var6, var2);
            var2 = 0;
            var12 = var5[var2];
            var6 = 1;
            var8 = var5[var6];
            if(!(var7 != var13)) { _fun0001_ip = 268; continue _fun0001 }
 257:
            var5 = var13.canEditThemes;
            if(var5) { _fun0001_ip = 293; continue _fun0001 }
 268:
            if(var3) { _fun0001_ip = 293; continue _fun0001 }
 271:
            var3 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var3['theme'] = var9;
            return var3;
 293:
            var3 = var7 == var13;
            var5 = undefined;
            if(var3) { _fun0001_ip = 315; continue _fun0001 }
 302:
            var3 = var13.getPreviewThemeColors;
            var5 = var3.bind(var13)(var11);
 315:
            var11 = var7 == var5;
            var3 = undefined;
            if(var11) { _fun0001_ip = 328; continue _fun0001 }
 324:
            var3 = var5[var2];
 328:
            if(!(var7 == var3)) { _fun0001_ip = 363; continue _fun0001 }
 332:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 7;
            var2 = var13[var2];
            var11 = var11.bind(var10)(var2);
            var2 = var11.hex2int;
            var3 = var2.bind(var11)(var12);
 363:
            var11 = var7 == var5;
            var2 = undefined;
            if(var11) { _fun0001_ip = 376; continue _fun0001 }
 372:
            var2 = var5[var6];
 376:
            if(!(var7 == var2)) { _fun0001_ip = 411; continue _fun0001 }
 380:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 7;
            var5 = var11[var5];
            var6 = var6.bind(var10)(var5);
            var5 = var6.hex2int;
            var2 = var5.bind(var6)(var8);
 411:
            var6 = var9;
            if(var4) { _fun0001_ip = 461; continue _fun0001 }
 417:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.getProfileTheme;
            var5 = var4.bind(var5)(var3);
            var4 = var9;
            if(!(var7 != var5)) { _fun0001_ip = 458; continue _fun0001 }
 455:
            var4 = var5;
 458:
            var6 = var4;
 461:
            var4 = _closure1_slot6;
            var4 = var4.DARK;
            if(!(var6 === var4)) { _fun0001_ip = 512; continue _fun0001 }
 475:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.isThemeDark;
            var5 = var4.bind(var5)(var9);
            var4 = var9;
            if(var5) { _fun0001_ip = 576; continue _fun0001 }
 512:
            var5 = _closure1_slot6;
            var5 = var5.DARK;
            var5 = var6 === var5;
            if(!var5) { _fun0001_ip = 560; continue _fun0001 }
 529:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 9;
            var7 = var11[var7];
            var8 = var8.bind(var10)(var7);
            var7 = var8.isThemeLight;
            var5 = var7.bind(var8)(var9);
 560:
            var4 = var6;
            if(!var5) { _fun0001_ip = 576; continue _fun0001 }
 566:
            var1 = _closure1_slot6;
            var4 = var1.DARKER;
 576:
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