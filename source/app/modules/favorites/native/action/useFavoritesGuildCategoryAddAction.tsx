// app/modules/favorites/native/action/useFavoritesGuildCategoryAddAction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/native/action/useFavoritesGuildCategoryAddAction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFavoritesGuildCategoryAddAction(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var3 = _closure1_slot3;
            var8 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 4;
                        var4 = var2[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = 3;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address=54);
case 4:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var5 = var2.openAddFavoriteChannelModal;
                        var4 = {};
                        var6 = _closure2_slot0;
                        var6 = var6.id;
                        var4['parentId'] = var6;
                        var6 = 'favorites_add_to_category';
                        var4['source'] = var6;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 6:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var8)(var1);
            var7 = var2.id;
            var1 = new Array(1);
            var1[0] = var7;
            var3 = var5.bind(var6)(var3, var1);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var6 = var5.bind(var8)(var1);
            var5 = var6.isFavoritesGuildId;
            var1 = var2.getGuildId;
            var1 = var1.bind(var2)();
            var5 = var5.bind(var6)(var1);
            var1 = null;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var2.type;
            var2 = _closure1_slot5;
            var2 = var2.GUILD_CATEGORY;
            var1 = null;
            if(!(var5 === var2)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var2 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 6;
            var5 = var9[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var7 = _closure1_slot1;
            var4 = 7;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4["1QJmIL"];
            var4 = var5.bind(var6)(var4);
            var2['label'] = var4;
            var2['perform'] = var3;
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();