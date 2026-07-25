// app/modules/favorites/hooks/useIsFavoritesGuildVisible.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function computeIsFavoritesGuildVisible(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg2;
            var3 = arg3;
            var1 = var3.isExperimentEnabled;
            var8 = var3.isFreemium;
            var4 = var3.hasAccess;
            var2 = var3.isMenuItemDCSelected;
            var3 = var3.isIntroDCDismissed;
            var5 = !var1;
            var1 = !var5;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = !var2;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            var2 = !var2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var7 = undefined;
            var9 = var6.bind(var7)(var3);
            var6 = var9.isFavoritesGuildId;
            var3 = var10.getGuildId;
            var3 = var3.bind(var10)();
            var3 = var6.bind(var9)(var3);
            var6 = !var3;
            var3 = !var6;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = !var4;
            var4 = !var6;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 4;
            var5 = var9[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.computeIsFavoritesGuildEnabled;
            var5 = arg1;
            var4 = var6.bind(var7)(var8, var5);
case 10:
            var3 = var4;
case 8:
            var2 = var3;
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.isContentShown;
    var _closure1_slot2 = var8;
    var4 = var4.useIsContentShown;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/hooks/useIsFavoritesGuildVisible.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsFavoritesGuildVisible(arg1) {
        var5 = _closure1_slot0;
        var11 = _closure1_slot1;
        var3 = 5;
        var3 = var11[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var6 = var7.useFavoritesAccess;
        var3 = arg1;
        var3 = var6.bind(var7)(var3);
        var10 = var3.isExperimentEnabled;
        var _closure2_slot0 = var10;
        var9 = var3.isFreemium;
        var _closure2_slot1 = var9;
        var8 = var3.hasAccess;
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var3 = 6;
        var6 = var11[var3];
        var6 = var5.bind(var4)(var6);
        var6 = var6.DismissibleContent;
        var6 = var6.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
        var7 = var7.bind(var4)(var6);
        var _closure2_slot3 = var7;
        var6 = 7;
        var6 = var11[var6];
        var12 = var5.bind(var4)(var6);
        var6 = var12.useIsDismissibleContentDismissed_UNSAFE;
        var3 = var11[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.DismissibleContent;
        var3 = var3.FAVORITES_SERVER_ONBOARDING_INTRO;
        var6 = var6.bind(var12)(var3);
        var _closure2_slot4 = var6;
        var3 = 8;
        var3 = var11[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var11 = _closure1_slot5;
        var3 = new Array(2);
        var3[0] = var11;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(5);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var1 = function() {
            var5 = _closure1_slot6;
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = _closure2_slot0;
            var2['isExperimentEnabled'] = var6;
            var6 = _closure2_slot1;
            var2['isFreemium'] = var6;
            var6 = _closure2_slot2;
            var2['hasAccess'] = var6;
            var6 = _closure2_slot3;
            var2['isMenuItemDCSelected'] = var6;
            var1 = _closure2_slot4;
            var2['isIntroDCDismissed'] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function isFavoritesGuildVisible() {
        var6 = _closure1_slot0;
        var11 = _closure1_slot1;
        var2 = 5;
        var2 = var11[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var2);
        var2 = var3.getFavoritesAccess;
        var2 = var2.bind(var3)();
        var10 = var2.isExperimentEnabled;
        var9 = var2.isFreemium;
        var8 = var2.hasAccess;
        var4 = _closure1_slot2;
        var2 = 6;
        var3 = var11[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.DismissibleContent;
        var3 = var3.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
        var7 = var4.bind(var5)(var3);
        var3 = 7;
        var3 = var11[var3];
        var4 = var6.bind(var5)(var3);
        var3 = var4.UNSAFE_isDismissibleContentDismissed;
        var2 = var11[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.DismissibleContent;
        var2 = var2.FAVORITES_SERVER_ONBOARDING_INTRO;
        var6 = var3.bind(var4)(var2);
        var4 = _closure1_slot6;
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var1['isExperimentEnabled'] = var10;
        var1['isFreemium'] = var9;
        var1['hasAccess'] = var8;
        var1['isMenuItemDCSelected'] = var7;
        var1['isIntroDCDismissed'] = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var3['isFavoritesGuildVisible'] = var2;
    return var1;
})();