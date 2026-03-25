// app/modules/collectibles/native/WishlistButtonCoachmark.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot4 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/WishlistButtonCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WishlistButtonCoachmark(arg1) {
        var2 = arg1;
        var4 = var2.anchorRef;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 3;
        var7 = var6[var2];
        var2 = undefined;
        var8 = var5.bind(var2)(var7);
        var7 = var8.useHasNeverWishlisted;
        var11 = var7.bind(var8)();
        var _closure2_slot0 = var11;
        var7 = 4;
        var7 = var6[var7];
        var9 = var5.bind(var2)(var7);
        var8 = var9.useMobileWishlistOwnerExperiment;
        var7 = 'FirstCardWishlistButtonCoachmark';
        var7 = var8.bind(var9)(var7);
        var7 = var7.showWishlistButtonInProductCard;
        var _closure2_slot1 = var7;
        var8 = _closure1_slot3;
        var10 = var8.useMemo;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var7;
        var7 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                var1 = new Array(0);
                _fun0001_ip = 5; continue _fun0001;
case 4:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.DismissibleContent;
                var3 = var2.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 5:
                return var1;
            }
        };
        var10 = var10.bind(var8)(var7, var9);
        var7 = 6;
        var7 = var6[var7];
        var9 = var5.bind(var2)(var7);
        var7 = var9.useSelectedDismissibleContent;
        var9 = var7.bind(var9)(var10);
        var7 = _closure1_slot2;
        var3 = 2;
        var9 = var7.bind(var2)(var9, var3);
        var3 = 0;
        var7 = var9[var3];
        var3 = 1;
        var9 = var9[var3];
        var _closure2_slot2 = var9;
        var3 = 5;
        var3 = var6[var3];
        var3 = var5.bind(var2)(var3);
        var3 = var3.DismissibleContent;
        var3 = var3.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
        var10 = var7 === var3;
        var _closure2_slot3 = var10;
        var3 = 7;
        var3 = var6[var3];
        var7 = var5.bind(var2)(var3);
        var3 = var7.useCollectiblesCoachmarkScrollDismissContext;
        var3 = var3.bind(var7)();
        var3 = var3.registerDismiss;
        var _closure2_slot4 = var3;
        var11 = var8.useEffect;
        var7 = new Array(3);
        var7[0] = var10;
        var7[1] = var3;
        var7[2] = var9;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot3;
                var3 = undefined;
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                return var3;
case 6:
                var2 = _closure2_slot4;
                var1 = function() {
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot4;
                    var2 = var1.INDIRECT_ACTION;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3 = var11.bind(var8)(var3, var7);
        var7 = var8.useMemo;
        var3 = new Array(2);
        var3[0] = var10;
        var3[1] = var9;
        var1 = function() {
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var8 = var3.intl;
            var4 = var8.string;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3["47Rhc3"];
            var3 = var4.bind(var8)(var3);
            var1['title'] = var3;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.PXjA0b;
            var2 = var3.bind(var4)(var2);
            var1['description'] = var2;
            var2 = 'top';
            var1['position'] = var2;
            var2 = _closure2_slot3;
            var1['visible'] = var2;
            var2 = function onDismiss() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot4;
                var2 = var1.USER_DISMISS;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onDismiss'] = var2;
            return var1;
        };
        var3 = var7.bind(var8)(var1, var3);
        var1 = 9;
        var1 = var6[var1];
        var2 = var5.bind(var2)(var1);
        var1 = var2.useCoachmark;
        var1 = var1.bind(var2)(var4, var3);
        var1 = null;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();