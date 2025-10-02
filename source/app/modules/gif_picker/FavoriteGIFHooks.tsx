// app/modules/gif_picker/FavoriteGIFHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function useFavoriteGIFs() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.useFrecencySettings;
            var3 = var3.bind(var4)();
            var4 = var3.favoriteGifs;
            var3 = null;
            var5 = var3 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.gifs;
case 2:
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot4;
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
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
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = {};
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/gif_picker/FavoriteGIFHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useFavoriteGIFs'] = var4;
    var4 = function useSortedFavoriteGIFs(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = undefined;
        var6 = var4.bind(var3)();
        var _closure2_slot1 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = _closure2_slot1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var8 = arg2;
                    var1 = {};
                    var10 = var1;
                    var9 = var2;
                    var3 = copyDataProperties(var10, var9);
                    var3 = 'url';
                    var1[var3] = var8;
                    var3 = _closure2_slot0;
                    var4 = null;
                    var6 = var4 == var3;
                    var7 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = _closure2_slot0;
                    var5 = var2.src;
                    var3 = var6.bind(var7)(var5, var8);
case 6:
                    if(!(var4 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var2.src;
case 8:
                    var2 = 'src';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.sortBy;
            var1 = 'order';
            var2 = var2.bind(var3)(var1);
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSortedFavoriteGIFs'] = var4;
    var4 = function useShouldShowTooltipOnFavorite() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var1 = var2[var1];
            var2 = undefined;
            var3 = var3.bind(var2)(var1);
            var1 = var3.useFrecencySettings;
            var1 = var1.bind(var3)();
            var3 = var1.favoriteGifs;
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var2 = var3.hideTooltip;
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 6:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['useShouldShowTooltipOnFavorite'] = var4;
    var2 = function useIsFavoriteGIF(arg1) {
        var2 = _closure1_slot5;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = arg1;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['useIsFavoriteGIF'] = var2;
    return var1;
})();