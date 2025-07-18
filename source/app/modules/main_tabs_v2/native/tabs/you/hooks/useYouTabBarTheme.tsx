// app/modules/main_tabs_v2/native/tabs/you/hooks/useYouTabBarTheme.tsx
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
    var8 = var6[var1];
    var4 = native4;
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
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/hooks/useYouTabBarTheme.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useYouTabBarTheme() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var4 = var6[var3];
            var7 = undefined;
            var9 = var5.bind(var7)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var8.bind(var9)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 5;
            var4 = var6[var4];
            var5 = var5.bind(var7)(var4);
            var9 = null;
            var6 = var9 == var10;
            var4 = undefined;
            if(var6) { _fun0001_ip = 89; continue _fun0001 }
 84:
            var4 = var10.id;
 89:
            if(!(var9 == var4)) { _fun0001_ip = 97; continue _fun0001 }
 93:
            var4 = _closure1_slot6;
 97:
            var6 = var5.bind(var7)(var4);
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = var8[var3];
            var11 = var4.bind(var7)(var3);
            var5 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var5 = var5.bind(var11)(var4, var3);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = {};
            var11 = var9 != var10;
            var8 = undefined;
            if(!var11) { _fun0001_ip = 183; continue _fun0001 }
 180:
            var8 = var10;
 183:
            var3['user'] = var8;
            var3['displayProfile'] = var6;
            var3 = var4.bind(var7)(var3);
            var8 = var3.theme;
            var10 = var3.primaryColor;
            var _closure2_slot1 = var10;
            var6 = var3.secondaryColor;
            var _closure2_slot2 = var6;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 7;
            var3 = var11[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.useProfileThemeValues;
            var8 = var3.bind(var4)(var8);
            var _closure2_slot3 = var8;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var10;
            var11 = var9 == var8;
            var10 = undefined;
            if(var11) { _fun0001_ip = 289; continue _fun0001 }
 283:
            var10 = var8.overlay;
 289:
            var2[1] = var10;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 308; continue _fun0001 }
 302:
            var7 = var8.overlaySyncedWithUserTheme;
 308:
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var4 = _closure2_slot3;
                    var2 = null;
                    var4 = var2 == var4;
                    var6 = undefined;
                    if(var3) { _fun0002_ip = 39; continue _fun0002 }
 22:
                    var7 = undefined;
                    if(var4) { _fun0002_ip = 37; continue _fun0002 }
 27:
                    var3 = _closure2_slot3;
                    var7 = var3.overlay;
 37:
                    _fun0002_ip = 57; continue _fun0002;
 39:
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 54; continue _fun0002 }
 44:
                    var4 = _closure2_slot3;
                    var3 = var4.overlaySyncedWithUserTheme;
 54:
                    var7 = var3;
 57:
                    var3 = _closure2_slot2;
                    if(!(var2 == var3)) { _fun0002_ip = 71; continue _fun0002 }
 65:
                    var5 = _closure2_slot1;
                    _fun0002_ip = 75; continue _fun0002;
 71:
                    var5 = _closure2_slot2;
 75:
                    var1 = var2 != var5;
                    var4 = null;
                    if(!var1) { _fun0002_ip = 128; continue _fun0002 }
 84:
                    var1 = var2 != var7;
                    var4 = null;
                    if(!var1) { _fun0002_ip = 128; continue _fun0002 }
 93:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 8;
                    var1 = var8[var1];
                    var3 = var3.bind(var6)(var1);
                    var1 = var3.calculateOverlayedColor;
                    var4 = var1.bind(var3)(var5, var7);
 128:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 8;
                    var1 = var1[var8];
                    var5 = var5.bind(var6)(var1);
                    var1 = var5.getProfileTheme;
                    var10 = var1.bind(var5)(var4);
                    var1 = var2 != var4;
                    if(!var1) { _fun0002_ip = 173; continue _fun0002 }
 169:
                    var1 = var2 != var10;
 173:
                    var5 = var4;
                    if(!var1) { _fun0002_ip = 281; continue _fun0002 }
 179:
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var1 = 9;
                    var1 = var11[var1];
                    var1 = var7.bind(var6)(var1);
                    var9 = var1.bind(var6)(var4);
                    var7 = var9.set;
                    var4 = _closure1_slot0;
                    var1 = 10;
                    var1 = var11[var1];
                    var4 = var4.bind(var6)(var1);
                    var1 = var4.isThemeLight;
                    var1 = var1.bind(var4)(var10);
                    var4 = 0.1;
                    if(!var1) { _fun0002_ip = 259; continue _fun0002 }
 249:
                    var4 = 0.9;
 259:
                    var1 = 'hsl.l';
                    var4 = var7.bind(var9)(var1, var4);
                    var1 = var4.num;
                    var5 = var1.bind(var4)();
 281:
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var7 = var7.bind(var6)(var4);
                    var4 = var7.getProfileTheme;
                    var4 = var4.bind(var7)(var5);
                    var1['theme'] = var4;
                    var4 = var2 != var5;
                    var2 = null;
                    if(!var4) { _fun0002_ip = 355; continue _fun0002 }
 324:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 11;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.int2hex;
                    var2 = var3.bind(var4)(var5);
 355:
                    var1['primaryColor'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();