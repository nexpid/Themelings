// app/modules/favorites/FavoritesHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var6 = function useFavoritesAccess(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var7 = undefined;
            var4 = var5.bind(var7)(var2);
            var3 = var4.useFavoritesGuildConfig;
            var2 = {};
            var6 = arg1;
            var2['location'] = var6;
            var2 = var3.bind(var4)(var2);
            var3 = var2.enabled;
            var2 = var2.hasHigherPrivileges;
            var4 = 9;
            var4 = var8[var4];
            var9 = var5.bind(var7)(var4);
            var6 = var9.useStateFromStores;
            var4 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var9)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 10;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.isPremiumExactly;
            var1 = _closure1_slot10;
            var1 = var1.TIER_2;
            var5 = var4.bind(var5)(var6, var1);
            var1 = {};
            var4 = var3;
            if(!var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = var5;
case 36:
            var1['hasAccess'] = var4;
            var1['isExperimentEnabled'] = var3;
            var1['hasHigherPrivileges'] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var6;
    var5 = function useFavorites() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 9;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot7;
            var1 = var2.getFavoriteChannels;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var5;
    var4 = function useIsFavoritesGuildSelected() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 9;
        var3 = var5[var2];
        var2 = undefined;
        var7 = var4.bind(var2)(var3);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getGuildId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var6.bind(var7)(var3, var1);
        var1 = 13;
        var1 = var5[var1];
        var2 = var4.bind(var2)(var1);
        var1 = var2.isFavoritesGuildId;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.useFavoritesNotificationStore;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.FAVORITES;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.PremiumTypes;
    var _closure1_slot10 = var7;
    var7 = 14;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/favorites/FavoritesHooks.tsx';
    var7 = var8.bind(var9)(var7);
    var3['useFavoritesAccess'] = var6;
    var3['useFavorites'] = var5;
    var5 = function useFavorite(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 9;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot7;
            var2 = var3.getFavorite;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useFavorite'] = var5;
    var5 = function useFavoritedChannels() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 9;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot7;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot7;
                var1 = var2.getFavoriteChannels;
                var5 = var1.bind(var2)();
                var1 = new Array(0);
                var3 = _closure1_slot11;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var6 = undefined;
                var4 = var4.bind(var6)(var2);
                var2 = var4.keys;
                var2 = var2.bind(var4)(var5);
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var9 = var3.value;
                var8 = _closure1_slot3;
                var2 = var8.getChannel;
                var8 = var2.bind(var8)(var9);
                if(!(var4 != var8)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var2 = var1.push;
                var2 = var2.bind(var1)(var8);
case 40:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0005_ip = 39; continue _fun0005 }
case 38:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useFavoritedChannels'] = var5;
    var5 = function useFavoritedChannelIds() {
        var2 = _closure1_slot14;
        var4 = undefined;
        var3 = var2.bind(var4)();
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 11;
        var1 = var5[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.keys;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['useFavoritedChannelIds'] = var5;
    var5 = function useFavoritesCategories() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 9;
        var3 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getChannels;
            var1 = _closure1_slot9;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var7.bind(var8)(var3, var2);
        var2 = 12;
        var2 = var6[var2];
        var2 = var5.bind(var4)(var2);
        var2 = var2.ChannelTypes;
        var2 = var2.GUILD_CATEGORY;
        var3 = var3[var2];
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var3 = var2.channel;
                var5 = var3.id;
                var4 = 'null';
                var3 = null;
                if(!(var4 !== var5)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var4 = var2.channel;
                var3 = var4.id;
case 42:
                var1['id'] = var3;
                var2 = var2.channel;
                var2 = var2.name;
                var1['name'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useFavoritesCategories'] = var5;
    var3['useIsFavoritesGuildSelected'] = var4;
    var4 = function useFavoritesAwareChannel(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot15;
            var8 = undefined;
            var1 = var1.bind(var8)();
            var6 = _closure1_slot13;
            var5 = arg2;
            var5 = var6.bind(var8)(var5);
            var5 = var5.hasAccess;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 9;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var6 = _closure1_slot7;
                    var3 = var6.isFavorite;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var6)(var2);
                    if(var2) { _fun0008_ip = 46; continue _fun0008 }
case 2:
                    var6 = _closure2_slot0;
                    var3 = var6.isThread;
                    var3 = var3.bind(var6)();
                    if(!var3) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var6 = _closure1_slot7;
                    var5 = var6.isFavorite;
                    var4 = _closure2_slot0;
                    var4 = var4.parent_id;
                    var3 = var5.bind(var6)(var4);
case 47:
                    var2 = var3;
case 46:
                    var1 = var2;
case 44:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var6, var3, var4);
            if(!var1) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var1 = null;
            if(!var5) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var1 = null;
            if(!var3) { _fun0007_ip = 51; continue _fun0007 }
case 49:
            var4 = null;
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0007_ip = 51; continue _fun0007 }
case 53:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var3['useFavoritesAwareChannel'] = var4;
    var2 = function useFavoriteAdded() {
        var1 = {};
        var4 = _closure1_slot8;
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