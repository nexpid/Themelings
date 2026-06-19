// app/modules/favorites/FavoritesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function isFavoritesGuildId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot2;
            var1 = var3 === var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.FAVORITES;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/favorites/FavoritesUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getFavoritesAwareGuildName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = undefined;
            return var2;
case 4:
            var4 = _closure1_slot4;
            var3 = var1.id;
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var1.name;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.wMWyci;
            var1 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var3['getFavoritesAwareGuildName'] = var5;
    var3['isFavoritesGuildId'] = var4;
    var2 = function canFavoriteChannelType(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = var4.isCategory;
            var1 = var1.bind(var4)();
            var1 = !var1;
            if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var2 = var4.isThread;
            var2 = var2.bind(var4)();
            var2 = !var2;
            if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var2 = var3;
case 11:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var3['canFavoriteChannelType'] = var2;
    return var1;
})();