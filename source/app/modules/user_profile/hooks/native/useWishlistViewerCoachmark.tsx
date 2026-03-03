// app/modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useWishlistViewerCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useWishlistViewerCoachmark(arg1) {
        var1 = arg1;
        var7 = var1.isCurrentUser;
        var _closure2_slot0 = var7;
        var6 = var1.shouldShowWishlistTab;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.DismissibleContent;
                var2 = var1.WISHLIST_MOBILE_VIEWER_COACHMARK;
                var1 = new Array(1);
                var1[0] = var2;
                _fun0001_ip = 5; continue _fun0001;
case 2:
                var1 = new Array(0);
case 5:
                return var1;
            }
        };
        var4 = var4.bind(var5)(var2, var3);
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 3;
        var2 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var2);
        var2 = var3.useSelectedDismissibleContent;
        var2 = var2.bind(var3)(var4);
        var1 = _closure1_slot2;
        var3 = 2;
        var2 = var1.bind(var5)(var2, var3);
        var1 = 0;
        var4 = var2[var1];
        var1 = 1;
        var2 = var2[var1];
        var1 = {};
        var3 = var7[var3];
        var3 = var6.bind(var5)(var3);
        var3 = var3.DismissibleContent;
        var3 = var3.WISHLIST_MOBILE_VIEWER_COACHMARK;
        var3 = var4 === var3;
        var1['isVisible'] = var3;
        var1['markAsDismissed'] = var2;
        return var1;
    };
    var3['useWishlistViewerCoachmark'] = var2;
    return var1;
})();