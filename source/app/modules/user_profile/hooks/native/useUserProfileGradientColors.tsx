// app/modules/user_profile/hooks/native/useUserProfileGradientColors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useUserProfileGradientColors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileGradientColors(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var8;
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 2;
            var4 = var11[var3];
            var3 = undefined;
            var12 = var9.bind(var3)(var4);
            var10 = var12.useStateFromStores;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot3;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var5 = var10.bind(var12)(var5, var4);
            var4 = 3;
            var4 = var11[var4];
            var10 = var9.bind(var3)(var4);
            var4 = var10.useThemeContext;
            var4 = var4.bind(var10)();
            var10 = var4.theme;
            var4 = 4;
            var4 = var11[var4];
            var9 = var9.bind(var3)(var4);
            var4 = var9.useProfileThemeValues;
            var4 = var4.bind(var9)(var10);
            var9 = null;
            var9 = var9 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var4.overlay;
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var3 = undefined;
            if(var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var4.overlaySyncedWithUserTheme;
case 7:
            var5 = var3;
case 6:
            var _closure2_slot3 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 != var2;
                    var5 = null;
                    if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var2 = _closure2_slot3;
                    var2 = var3 != var2;
                    var5 = null;
                    if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 5;
                    var4 = var4[var2];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.calculateOverlayedColor;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot3;
                    var5 = var6.bind(var7)(var4, var2);
case 9:
                    var2 = _closure2_slot1;
                    var2 = var3 != var2;
                    var4 = null;
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = _closure2_slot3;
                    var2 = var3 != var2;
                    var4 = null;
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var3);
                    var6 = var7.calculateOverlayedColor;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var4 = var6.bind(var7)(var3, var2);
case 12:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var2 = var3.getUserProfileGradientContainerColors;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var5, var4, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useUserProfileGradientColors'] = var2;
    return var1;
})();