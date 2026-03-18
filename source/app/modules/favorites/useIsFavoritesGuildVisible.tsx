// app/modules/favorites/useIsFavoritesGuildVisible.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function isFavoritesGuildVisible(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var7 = arg3;
            var1 = arg4;
            var4 = var1.favoritesGuildXPEnabled;
            var2 = var1.isMenuItemDCSelected;
            var1 = var1.isIntroDCDismissed;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = false;
            return var4;
case 2:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = true;
            return var1;
case 4:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var6 = undefined;
            var5 = var4.bind(var6)(var2);
            var4 = var5.isFavoritesGuildId;
            var2 = var7.getGuildId;
            var2 = var2.bind(var7)();
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var3.getCurrentUser;
            var5 = var2.bind(var3)();
            var2 = null;
            var2 = var2 == var5;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isPremiumExactly;
            var1 = _closure1_slot7;
            var1 = var1.TIER_2;
            var1 = var3.bind(var4)(var5, var1);
            var2 = !var1;
case 9:
            var1 = !var2;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = arg1;
            var1 = var2.favoriteGuildEnabled;
case 11:
            return var1;
case 7:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.useIsContentShown;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot7 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/favorites/useIsFavoritesGuildVisible.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsFavoritesGuildVisible(arg1) {
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var2);
        var7 = var8.useFavoritesGuildConfig;
        var2 = {};
        var9 = arg1;
        var2['location'] = var9;
        var2 = var7.bind(var8)(var2);
        var2 = var2.enabled;
        var _closure2_slot0 = var2;
        var8 = _closure1_slot3;
        var2 = 8;
        var7 = var6[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.DismissibleContent;
        var7 = var7.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = 9;
        var7 = var6[var7];
        var8 = var4.bind(var3)(var7);
        var7 = var8.UNSAFE_useIsDismissibleContentDismissed;
        var2 = var6[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.FAVORITES_SERVER_ONBOARDING_INTRO;
        var2 = var7.bind(var8)(var2);
        var _closure2_slot2 = var2;
        var2 = 10;
        var2 = var6[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot6;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot5;
        var2[1] = var6;
        var5 = _closure1_slot4;
        var2[2] = var5;
        var1 = function() {
            var6 = _closure1_slot8;
            var11 = _closure1_slot6;
            var10 = _closure1_slot5;
            var9 = _closure1_slot4;
            var2 = {};
            var7 = _closure2_slot0;
            var2['favoritesGuildXPEnabled'] = var7;
            var7 = _closure2_slot1;
            var2['isMenuItemDCSelected'] = var7;
            var1 = _closure2_slot2;
            var2['isIntroDCDismissed'] = var1;
            var12 = undefined;
            var8 = var2;
            var1 = var12[var6](var11, var10, var9, var8, var7);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['isFavoritesGuildVisible'] = var2;
    return var1;
})();