// app/modules/collectibles/native/useWishlistNUXActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function useHasNeverWishlisted() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var3 = var7[var4];
            var5 = undefined;
            var10 = var6.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var _closure2_slot0 = var3;
            var3 = var7[var4];
            var10 = var6.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getFirstWishlistId;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getUserProfile;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var2.fetchEndedAt;
                    var2 = 0;
                    var1 = var3 > var2;
case 2:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = null;
            var1 = var2 == var3;
case 4:
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
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
    var5 = var5.ContentDismissActionType;
    var _closure1_slot7 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/useWishlistNUXActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useWishlistNUXActionSheet() {
        var3 = _closure1_slot8;
        var8 = undefined;
        var3 = var3.bind(var8)();
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var6 = var5.useMemo;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var1 = new Array(0);
                _fun0003_ip = 8; continue _fun0003;
case 6:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.DismissibleContent;
                var3 = var2.WISHLIST_MOBILE_NUX_ACTION_SHEET;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 8:
                return var1;
            }
        };
        var10 = var6.bind(var5)(var3, var4);
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 7;
        var3 = var9[var3];
        var6 = var7.bind(var8)(var3);
        var4 = var6.useSelectedDismissibleContent;
        var3 = true;
        var4 = var4.bind(var6)(var10, var8, var3);
        var3 = _closure1_slot3;
        var1 = 2;
        var3 = var3.bind(var8)(var4, var1);
        var1 = 0;
        var4 = var3[var1];
        var1 = 1;
        var6 = var3[var1];
        var _closure2_slot1 = var6;
        var1 = {};
        var3 = 6;
        var3 = var9[var3];
        var3 = var7.bind(var8)(var3);
        var3 = var3.DismissibleContent;
        var3 = var3.WISHLIST_MOBILE_NUX_ACTION_SHEET;
        var3 = var4 === var3;
        var1['shouldShowWishlistNUXActionSheet'] = var3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg1) {
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var4 = var3[var1];
            var1 = undefined;
            var8 = var5.bind(var1)(var4);
            var7 = var8.openLazy;
            var5 = _closure1_slot0;
            var4 = 10;
            var4 = var3[var4];
            var5 = var5.bind(var1)(var4);
            var4 = 9;
            var4 = var3[var4];
            var3 = var3.paths;
            var12 = var5.bind(var1)(var4, var3);
            var5 = {};
            var3 = arg1;
            var5['product'] = var3;
            var11 = 'WishlistNUXAddedItemActionSheet';
            var9 = 'stack';
            var13 = var8;
            var10 = var5;
            var3 = var13[var7](var12, var11, var10, var9, var8);
            var3 = _closure2_slot1;
            var2 = _closure1_slot7;
            var2 = var2.USER_DISMISS;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['showWishlistNUXActionSheet'] = var2;
        return var1;
    };
    var3['default'] = var4;
    var3['useHasNeverWishlisted'] = var2;
    return var1;
})();