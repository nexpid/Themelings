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
 0:
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
            if(!(var7 == var13)) { _fun0001_ip = 162; continue _fun0001 }
 121:
            var6 = var7 == var15;
            var2 = undefined;
            if(var6) { _fun0001_ip = 159; continue _fun0001 }
 130:
            var11 = var15.getAvatarURL;
            var6 = var7 == var14;
            var8 = undefined;
            if(var6) { _fun0001_ip = 150; continue _fun0001 }
 145:
            var8 = var14.guildId;
 150:
            var6 = 80;
            var2 = var11.bind(var15)(var8, var6);
 159:
            var13 = var2;
 162:
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
            if(!(var7 != var14)) { _fun0001_ip = 276; continue _fun0001 }
 265:
            var6 = var14.canEditThemes;
            if(var6) { _fun0001_ip = 301; continue _fun0001 }
 276:
            if(var3) { _fun0001_ip = 301; continue _fun0001 }
 279:
            var3 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var3['theme'] = var9;
            return var3;
 301:
            var3 = var7 == var14;
            var6 = undefined;
            if(var3) { _fun0001_ip = 323; continue _fun0001 }
 310:
            var3 = var14.getPreviewThemeColors;
            var6 = var3.bind(var14)(var12);
 323:
            var12 = var7 == var6;
            var3 = undefined;
            if(var12) { _fun0001_ip = 336; continue _fun0001 }
 332:
            var3 = var6[var2];
 336:
            if(!(var7 == var3)) { _fun0001_ip = 371; continue _fun0001 }
 340:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 7;
            var2 = var14[var2];
            var12 = var12.bind(var10)(var2);
            var2 = var12.hex2int;
            var3 = var2.bind(var12)(var13);
 371:
            var12 = var7 == var6;
            var2 = undefined;
            if(var12) { _fun0001_ip = 384; continue _fun0001 }
 380:
            var2 = var6[var8];
 384:
            if(!(var7 == var2)) { _fun0001_ip = 419; continue _fun0001 }
 388:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 7;
            var6 = var12[var6];
            var8 = var8.bind(var10)(var6);
            var6 = var8.hex2int;
            var2 = var6.bind(var8)(var11);
 419:
            var6 = var9;
            if(var5) { _fun0001_ip = 475; continue _fun0001 }
 425:
            var6 = var9;
            if(var4) { _fun0001_ip = 475; continue _fun0001 }
 431:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.getProfileTheme;
            var5 = var4.bind(var5)(var3);
            var4 = var9;
            if(!(var7 != var5)) { _fun0001_ip = 472; continue _fun0001 }
 469:
            var4 = var5;
 472:
            var6 = var4;
 475:
            var4 = _closure1_slot6;
            var4 = var4.DARK;
            if(!(var6 === var4)) { _fun0001_ip = 526; continue _fun0001 }
 489:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.isThemeDark;
            var5 = var4.bind(var5)(var9);
            var4 = var9;
            if(var5) { _fun0001_ip = 590; continue _fun0001 }
 526:
            var5 = _closure1_slot6;
            var5 = var5.DARK;
            var5 = var6 === var5;
            if(!var5) { _fun0001_ip = 574; continue _fun0001 }
 543:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 9;
            var7 = var11[var7];
            var8 = var8.bind(var10)(var7);
            var7 = var8.isThemeLight;
            var5 = var7.bind(var8)(var9);
 574:
            var4 = var6;
            if(!var5) { _fun0001_ip = 590; continue _fun0001 }
 580:
            var1 = _closure1_slot6;
            var4 = var1.DARKER;
 590:
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