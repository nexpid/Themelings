// app/modules/favorites/hooks/useIsFavoritesGuildEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function computeIsFavoritesGuildEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var1 = arg1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.favoriteGuildEnabled;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var2.favoriteGuildExplicitlyHidden;
            var1 = !var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/favorites/hooks/useIsFavoritesGuildEnabled.tsx';
    var5 = var6.bind(var7)(var5);
    var3['computeIsFavoritesGuildEnabled'] = var4;
    var4 = function getIsFavoritesGuildEnabled() {
        var4 = _closure1_slot3;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var2 = var3[var2];
        var3 = undefined;
        var5 = var5.bind(var3)(var2);
        var2 = var5.getFavoritesAccess;
        var2 = var2.bind(var5)();
        var2 = var2.isFreemium;
        var1 = _closure1_slot2;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['getIsFavoritesGuildEnabled'] = var4;
    var2 = function useIsFavoritesGuildEnabled() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 1;
        var3 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var7 = var8.useFavoritesAccess;
        var3 = 'useIsFavoritesGuildEnabled';
        var3 = var7.bind(var8)(var3);
        var3 = var3.isFreemium;
        var _closure2_slot0 = var3;
        var3 = 2;
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsFavoritesGuildEnabled'] = var2;
    return var1;
})();