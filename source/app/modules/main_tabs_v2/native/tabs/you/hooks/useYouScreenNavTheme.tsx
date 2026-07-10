// app/modules/main_tabs_v2/native/tabs/you/hooks/useYouScreenNavTheme.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/hooks/useYouScreenNavTheme.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useYouScreenNavTheme() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var5 = var7[var4];
            var3 = undefined;
            var9 = var6.bind(var3)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var8.bind(var9)(var6, var5);
            var6 = _closure1_slot1;
            var5 = 5;
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var7 = null;
            var8 = var7 == var10;
            var5 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var10.id;
case 2:
            if(!(var7 == var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot6;
case 4:
            var8 = var6.bind(var3)(var5);
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = var9[var4];
            var11 = var5.bind(var3)(var4);
            var6 = var11.useStateFromStores;
            var4 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var5 = var6.bind(var11)(var5, var4);
            var6 = _closure1_slot1;
            var4 = 6;
            var4 = var9[var4];
            var6 = var6.bind(var3)(var4);
            var4 = {};
            var11 = var7 != var10;
            var9 = undefined;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var10;
case 6:
            var4['user'] = var9;
            var4['displayProfile'] = var8;
            var4 = var6.bind(var3)(var4);
            var10 = var4.theme;
            var6 = var4.primaryColor;
            var8 = var4.secondaryColor;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 7;
            var4 = var11[var4];
            var9 = var9.bind(var3)(var4);
            var4 = var9.useProfileThemeValues;
            var4 = var4.bind(var9)(var10);
            if(!(var7 != var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var8;
case 8:
            var _closure2_slot0 = var6;
            var7 = var7 == var4;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var4.overlay;
case 12:
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var3 = undefined;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var4.overlaySyncedWithUserTheme;
case 15:
            var5 = var3;
case 14:
            var _closure2_slot1 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var3 = var2 != var3;
                    var9 = null;
                    if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = _closure2_slot1;
                    var3 = var2 != var3;
                    var9 = null;
                    if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.calculateOverlayedColor;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var9 = var4.bind(var5)(var3, var1);
case 17:
                    var1 = var2 != var9;
                    var6 = null;
                    if(!var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var1 = var3.int2hex;
                    var6 = var1.bind(var3)(var9);
case 20:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var10 = 8;
                    var1 = var1[var10];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = var4.getProfileTheme;
                    var12 = var1.bind(var4)(var9);
                    var8 = var9;
                    if(!(var2 != var9)) { _fun0002_ip = 10; continue _fun0002 }
case 22:
                    var8 = var9;
                    if(!(var2 != var12)) { _fun0002_ip = 10; continue _fun0002 }
case 23:
                    var4 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var1 = 10;
                    var1 = var13[var1];
                    var1 = var4.bind(var5)(var1);
                    var11 = var1.bind(var5)(var9);
                    var7 = var11.set;
                    var4 = _closure1_slot0;
                    var1 = 11;
                    var1 = var13[var1];
                    var4 = var4.bind(var5)(var1);
                    var1 = var4.isThemeLight;
                    var1 = var1.bind(var4)(var12);
                    var4 = 0.1;
                    if(!var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var4 = 0.9;
case 24:
                    var1 = 'hsl.l';
                    var4 = var7.bind(var11)(var1, var4);
                    var1 = var4.num;
                    var8 = var1.bind(var4)();
case 10:
                    var1 = var2 != var8;
                    var4 = null;
                    if(!var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 9;
                    var1 = var11[var1];
                    var7 = var7.bind(var5)(var1);
                    var1 = var7.int2hex;
                    var4 = var1.bind(var7)(var8);
case 26:
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var10];
                    var7 = var7.bind(var5)(var1);
                    var1 = var7.getProfileTheme;
                    var14 = var1.bind(var7)(var8);
                    var1 = {};
                    var8 = var2 != var9;
                    var7 = null;
                    if(!var8) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 10;
                    var8 = var11[var8];
                    var8 = var10.bind(var5)(var8);
                    var10 = var8.bind(var5)(var9);
                    var9 = var10.brighten;
                    var11 = var2 != var14;
                    var12 = 0.4;
                    var8 = var12;
                    if(!var11) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 11;
                    var11 = var15[var11];
                    var13 = var13.bind(var5)(var11);
                    var11 = var13.isThemeLight;
                    var11 = var11.bind(var13)(var14);
                    var8 = var12;
                    if(!var11) { _fun0002_ip = 30; continue _fun0002 }
case 32:
                    var8 = 0.8;
case 30:
                    var9 = var9.bind(var10)(var8);
                    var8 = var9.hex;
                    var7 = var8.bind(var9)();
case 28:
                    var1['navBaseColor'] = var7;
                    var1['navGradientColor'] = var6;
                    var6 = var2 != var4;
                    var2 = null;
                    if(!var6) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 10;
                    var3 = var7[var3];
                    var3 = var6.bind(var5)(var3);
                    var5 = var3.bind(var5)(var4);
                    var4 = var5.brighten;
                    var3 = 0.2;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.hex;
                    var2 = var3.bind(var4)();
case 33:
                    var1['navBorderColor'] = var2;
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