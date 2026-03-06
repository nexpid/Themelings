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
            var4 = 4;
            var3 = var7[var4];
            var5 = undefined;
            var10 = var6.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var _closure2_slot0 = var3;
            var3 = var7[var4];
            var10 = var6.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getFirstWishlistId;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
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
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot6 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/useWishlistNUXActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useWishlistNUXActionSheet() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot7;
            var7 = undefined;
            var3 = var1.bind(var7)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var5 = var6.bind(var7)(var1);
            var4 = var5.UNSAFE_useIsDismissibleContentDismissed;
            var1 = 6;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.WISHLIST_MOBILE_NUX_ACTION_SHEET;
            var4 = var4.bind(var5)(var1);
            var1 = {};
            if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = !var4;
case 6:
            var1['shouldShowWishlistNUXActionSheet'] = var3;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var2 = var7[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var5 = var8.trackDismissibleContentShown;
                var2 = 6;
                var4 = var7[var2];
                var4 = var3.bind(var1)(var4);
                var4 = var4.DismissibleContent;
                var4 = var4.WISHLIST_MOBILE_NUX_ACTION_SHEET;
                var4 = var5.bind(var8)(var4);
                var5 = _closure1_slot1;
                var4 = 8;
                var4 = var7[var4];
                var11 = var5.bind(var1)(var4);
                var10 = var11.openLazy;
                var4 = 10;
                var4 = var7[var4];
                var8 = var3.bind(var1)(var4);
                var4 = 9;
                var5 = var7[var4];
                var4 = var7.paths;
                var15 = var8.bind(var1)(var5, var4);
                var8 = {};
                var4 = arg1;
                var8['product'] = var4;
                var14 = 'WishlistNUXAddedItemActionSheet';
                var12 = 'stack';
                var16 = var11;
                var13 = var8;
                var4 = var16[var10](var15, var14, var13, var12, var11);
                var4 = 5;
                var4 = var7[var4];
                var5 = var3.bind(var1)(var4);
                var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                var2 = var7[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var3 = var2.WISHLIST_MOBILE_NUX_ACTION_SHEET;
                var2 = {};
                var6 = _closure1_slot6;
                var6 = var6.USER_DISMISS;
                var2['dismissAction'] = var6;
                var6 = true;
                var2['forceTrack'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            var1['showWishlistNUXActionSheet'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useHasNeverWishlisted'] = var2;
    return var1;
})();