// app/modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var11 = 3;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot5 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Millis;
    var9 = var7.DAY;
    var7 = 90;
    var9 = var7 * var9;
    var _closure1_slot6 = var9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.DAY;
    var4 = var7 * var4;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2026-07-smag-wishlist-recommendations-dismiss-threshold', 'kind': 'user'};
    var9 = {};
    var9['minItemsToDismiss'] = var12;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['minItemsToDismiss'] = var12;
    var9[0] = var10;
    var10 = {};
    var10['minItemsToDismiss'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useWishlistSuggestionsDismissibleContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.userId;
            var _closure2_slot0 = var1;
            var17 = var3.wishlist;
            var _closure2_slot1 = var17;
            var5 = var3.hasFetchedWishlist;
            var10 = undefined;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var7 = _closure1_slot8;
            var6 = var7.useConfig;
            var4 = {};
            var8 = 'user_profile_wishlist_suggestions_grid';
            var4['location'] = var8;
            var4 = var6.bind(var7)(var4);
            var6 = var4.minItemsToDismiss;
            var4 = null;
            var7 = var4 == var17;
            var8 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var17.items;
            var8 = var7.length;
case 2:
            var9 = var4 != var8;
            var7 = 0;
            var4 = 0;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var8;
case 4:
            var4 = var4 >= var6;
            var9 = _closure1_slot3;
            var8 = var9.useState;
            var6 = false;
            var8 = var8.bind(var9)(var6);
            var6 = _closure1_slot2;
            var14 = 2;
            var6 = var6.bind(var10)(var8, var14);
            var8 = var6[var7];
            var12 = 1;
            var9 = var6[var12];
            _closure2_slot2 = var9;
            var6 = !var5;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var4;
case 6:
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var8;
case 8:
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = true;
            var6 = var9.bind(var10)(var6);
case 10:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 6;
            var6 = var11[var6];
            var16 = var9.bind(var10)(var6);
            var15 = var16.useStateFromStores;
            var6 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = new Array(2);
            var6[0] = var17;
            var6[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 != var1;
                    var1 = 0;
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = global;
                    var2 = var2.Date;
                    var8 = _closure1_slot4;
                    var7 = var8.getWishlistSettings;
                    var6 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var6 = var7.bind(var8)(var6, var3);
                    var7 = var5 == var6;
                    var3 = undefined;
                    if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = var6.updated_at;
case 14:
                    var5 = var5 != var3;
                    var4 = 0;
                    if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var4 = var3;
case 16:
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var11 = var3;
                    var10 = var4;
                    var2 = new var11[var2](var10, var9);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = var3.valueOf;
                    var1 = var2.bind(var3)();
case 12:
                    return var1;
                }
            };
            var18 = var15.bind(var16)(var13, var1, var6);
            var1 = 7;
            var1 = var11[var1];
            var17 = var9.bind(var10)(var1);
            var16 = var17.useSelectedTimeRecurringDismissibleContent;
            var1 = 8;
            var6 = var11[var1];
            var6 = var9.bind(var10)(var6);
            var6 = var6.DismissibleContent;
            var22 = var6.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            var13 = {};
            var6 = _closure1_slot7;
            var6 = var18 + var6;
            var13['showAfterTimestamp'] = var6;
            var6 = _closure1_slot6;
            var13['cooldownDurationMs'] = var6;
            var19 = true;
            var23 = var17;
            var21 = var13;
            var20 = undefined;
            var13 = var23[var16](var22, var21, var20, var19, var18);
            var6 = _closure1_slot2;
            var6 = var6.bind(var10)(var13, var14);
            var7 = var6[var7];
            var6 = var6[var12];
            _closure2_slot3 = var6;
            var1 = var11[var1];
            var1 = var9.bind(var10)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            var7 = var7 === var1;
            var1 = {};
            if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var8;
case 20:
            if(var7) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = !var4;
case 22:
            var5 = var7;
case 18:
            var1['isVisible'] = var5;
            var1['isDismissible'] = var4;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var4 = _closure2_slot2;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot3;
                var2 = _closure1_slot5;
                var2 = var2.USER_DISMISS;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['markAsDismissed'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();