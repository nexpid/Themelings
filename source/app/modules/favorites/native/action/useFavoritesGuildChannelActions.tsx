// app/modules/favorites/native/action/useFavoritesGuildChannelActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/native/action/useFavoritesGuildChannelActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFavoritesGuildChannelActions(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 3;
            var4 = var11[var3];
            var8 = undefined;
            var6 = var9.bind(var8)(var4);
            var5 = var6.useFavoritesAccess;
            var4 = arg2;
            var4 = var5.bind(var6)(var4);
            var7 = var4.hasAccess;
            var6 = var4.hasHigherPrivileges;
            var4 = 4;
            var4 = var11[var4];
            var5 = var9.bind(var8)(var4);
            var4 = var5.canFavoriteChannelType;
            var5 = var4.bind(var5)(var2, var6);
            var6 = 5;
            var4 = var11[var6];
            var14 = var9.bind(var8)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var4;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isFavorite;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var13.bind(var14)(var12, var4);
            var3 = var11[var3];
            var12 = var9.bind(var8)(var3);
            var3 = var12.useIsFavoritesGuildSelected;
            var3 = var3.bind(var12)();
            var6 = var11[var6];
            var9 = var9.bind(var8)(var6);
            var8 = var9.useStateFromStores;
            var11 = _closure1_slot3;
            var6 = new Array(2);
            var6[0] = var11;
            var10 = _closure1_slot2;
            var6[1] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.guild_id;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot3;
                    var4 = var5.isMember;
                    var3 = _closure2_slot0;
                    var3 = var3.guild_id;
                    var6 = _closure1_slot2;
                    var2 = var6.getId;
                    var2 = var2.bind(var6)();
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var1);
            var1 = {};
            var1['hasFavoritesAccess'] = var7;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6;
case 4:
            var1['canFavoriteChannel'] = var5;
            var1['isChannelInFavorites'] = var4;
            var1['isFavoritesGuild'] = var3;
            var2 = var2.id;
            var1['channelId'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();