// app/modules/favorites/FavoritesHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var1 = function computeFavoritesAccess(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.isExperimentEnabled;
            var3 = var1.hasHigherPrivileges;
            var4 = var1.isFreemium;
            var7 = var1.isPremiumTier2;
            var6 = var5;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var7;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4;
case 4:
            var6 = var1;
case 2:
            var2 = 0;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = 0;
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 6;
            var8 = var8[var7];
            var7 = undefined;
            var7 = var9.bind(var7)(var8);
            var1 = var7.FREE_FAVORITE_LIMIT;
case 10:
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var1 = _closure1_slot7;
case 12:
            var2 = var1;
case 6:
            var1 = {};
            var1['hasAccess'] = var6;
            var1['isExperimentEnabled'] = var5;
            var1['isFreemium'] = var4;
            var1['hasHigherPrivileges'] = var3;
            var1['favoriteLimit'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var7 = function useFavoritesAccess(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var2.bind(var3)(var1);
            var2 = var5.useFavoritesGuildConfig;
            var1 = {};
            var6 = arg1;
            var1['location'] = var6;
            var1 = var2.bind(var5)(var1);
            var9 = var1.enabled;
            var6 = var1.hasHigherPrivileges;
            var1 = var1.isFreemium;
            var5 = var3 !== var1;
            if(!var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var1;
case 13:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var10 = var2.bind(var3)(var1);
            var7 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var10)(var2, var1);
            var2 = _closure1_slot9;
            var1 = {};
            var1['isExperimentEnabled'] = var9;
            var1['hasHigherPrivileges'] = var6;
            var1['isFreemium'] = var5;
            var6 = _closure1_slot1;
            var5 = 9;
            var5 = var8[var5];
            var6 = var6.bind(var3)(var5);
            var5 = var6.isPremiumExactly;
            var4 = _closure1_slot8;
            var4 = var4.TIER_2;
            var4 = var5.bind(var6)(var7, var4);
            var1['isPremiumTier2'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var7;
    var6 = function useFavorites() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getFavoriteChannels;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var6;
    var5 = function getFavoritesCategories() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var14 = arguments[0];
            var13 = undefined;
            if(!(var14 === var13)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = _closure1_slot5;
            var1 = var3.getFavoriteChannels;
            var14 = var1.bind(var3)();
case 15:
            var _closure2_slot0 = var14;
            var12 = null;
            var11 = '';
            var1 = new Array(1);
            var3 = {'id': null, 'name': ''};
            var1[0] = var3;
            var9 = var14;
            var4 = 11;
            var3 = undefined;
            for(var6 in var9)
case 17:
            {
case 18:
                var15 = var6;
                var17 = var14[var15];
                var16 = var17.type;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var4];
                var15 = var18.bind(var13)(var15);
                var15 = var15.FavoriteChannelType;
                var15 = var15.CATEGORY;
                if(var16 !== var15) { _fun0003_ip = 17; continue _fun0003 }
case 19:
                var16 = var1.push;
                var15 = {};
                var18 = var17.id;
                var15['id'] = var18;
                var3 = var17.nickname;
                var18 = var12 != var3;
                var17 = var11;
                if(!var18) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var17 = var3;
case 20:
                var15['name'] = var17;
                var15 = var16.bind(var1)(var15);
                _fun0003_ip = 17; continue _fun0003;
            }
case 22:
            var3 = var1.sort;
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2[var1];
                    var4 = null;
                    var2 = var4 == var1;
                    var6 = undefined;
                    if(var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var6 = var1.order;
case 23:
                    var7 = var4 != var6;
                    var1 = 0;
                    if(!var7) { _fun0004_ip = 25; continue _fun0004 }
case 2:
                    var1 = var6;
case 25:
                    var6 = _closure2_slot0;
                    var5 = arg2;
                    var5 = var5.id;
                    var5 = var6[var5];
                    var6 = var4 == var5;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 17; continue _fun0004 }
case 26:
                    var3 = var5.order;
case 17:
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0004_ip = 8; continue _fun0004 }
case 18:
                    var2 = var3;
case 8:
                    var1 = var1 - var2;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function useIsFavoritesGuildSelected() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 8;
        var3 = var5[var2];
        var2 = undefined;
        var7 = var4.bind(var2)(var3);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getGuildId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var6.bind(var7)(var3, var1);
        var1 = 12;
        var1 = var5[var1];
        var2 = var4.bind(var2)(var1);
        var1 = var2.isFavoritesGuildId;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.useFavoritesNotificationStore;
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.MAX_FAVORITE_CHANNELS;
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.PremiumTypes;
    var _closure1_slot8 = var8;
    var8 = 13;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/favorites/FavoritesHooks.tsx';
    var8 = var9.bind(var10)(var8);
    var3['useFavoritesAccess'] = var7;
    var7 = function getFavoritesAccess() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var2.bind(var3)(var1);
            var2 = var5.getFavoritesGuildConfig;
            var1 = {};
            var6 = 'getFavoritesAccess';
            var1['location'] = var6;
            var1 = var2.bind(var5)(var1);
            var7 = var1.enabled;
            var5 = var1.hasHigherPrivileges;
            var6 = var1.isFreemium;
            var2 = _closure1_slot9;
            var1 = {};
            var1['isExperimentEnabled'] = var7;
            var1['hasHigherPrivileges'] = var5;
            var5 = var3 !== var6;
            if(!var5) { _fun0005_ip = 10; continue _fun0005 }
case 27:
            var5 = var6;
case 10:
            var1['isFreemium'] = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.isPremiumExactly;
            var8 = _closure1_slot4;
            var5 = var8.getCurrentUser;
            var5 = var5.bind(var8)();
            var4 = _closure1_slot8;
            var4 = var4.TIER_2;
            var4 = var6.bind(var7)(var5, var4);
            var1['isPremiumTier2'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getFavoritesAccess'] = var7;
    var3['useFavorites'] = var6;
    var6 = function useFavorite(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getFavorite;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useFavorite'] = var6;
    var6 = function useFavoritedChannelIds() {
        var2 = _closure1_slot11;
        var4 = undefined;
        var3 = var2.bind(var4)();
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 10;
        var1 = var5[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.keys;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['useFavoritedChannelIds'] = var6;
    var3['getFavoritesCategories'] = var5;
    var5 = function useFavoritesCategories() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = var2.getFavoriteChannels;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useFavoritesCategories'] = var5;
    var3['useIsFavoritesGuildSelected'] = var4;
    var4 = function useFavoritesAwareChannel(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot13;
            var8 = undefined;
            var1 = var1.bind(var8)();
            var6 = _closure1_slot10;
            var5 = arg2;
            var5 = var6.bind(var8)(var5);
            var5 = var5.hasAccess;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 8;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(1);
            var4[0] = var3;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var6 = _closure1_slot5;
                    var3 = var6.isFavorite;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var6)(var2);
                    if(var2) { _fun0007_ip = 8; continue _fun0007 }
case 30:
                    var6 = _closure2_slot0;
                    var3 = var6.isThread;
                    var3 = var3.bind(var6)();
                    if(!var3) { _fun0007_ip = 18; continue _fun0007 }
case 31:
                    var6 = _closure1_slot5;
                    var5 = var6.isFavorite;
                    var4 = _closure2_slot0;
                    var4 = var4.parent_id;
                    var3 = var5.bind(var6)(var4);
case 18:
                    var2 = var3;
case 8:
                    var1 = var2;
case 28:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var6, var2, var4);
            if(!var1) { _fun0006_ip = 19; continue _fun0006 }
case 32:
            var4 = null;
            var1 = null;
            if(!var5) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var1 = null;
            if(!var2) { _fun0006_ip = 33; continue _fun0006 }
case 35:
            if(!(var4 != var3)) { _fun0006_ip = 19; continue _fun0006 }
case 36:
            var2 = var3.isCategory;
            var2 = var2.bind(var3)();
            var1 = null;
            if(var2) { _fun0006_ip = 33; continue _fun0006 }
case 19:
            var2 = null;
            var4 = var2 != var3;
            if(!var4) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var2 = var3;
case 37:
            var1 = var2;
case 33:
            return var1;
        }
    };
    var3['useFavoritesAwareChannel'] = var4;
    var2 = function useFavoriteAdded() {
        var1 = {};
        var4 = _closure1_slot6;
        var3 = undefined;
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.favoriteAdded;
            return var1;
        };
        var5 = var4.bind(var3)(var5);
        var1['favoriteAdded'] = var5;
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.notifyFavoriteAdded;
            return var1;
        };
        var5 = var4.bind(var3)(var5);
        var1['notifyFavoriteAdded'] = var5;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.clearFavoriteAdded;
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var1['clearFavoriteAdded'] = var2;
        return var1;
    };
    var3['useFavoriteAdded'] = var2;
    return var1;
})();