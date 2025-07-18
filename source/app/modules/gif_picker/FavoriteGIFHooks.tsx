// app/modules/gif_picker/FavoriteGIFHooks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function useFavoriteGIFs() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var5) { _fun0001_ip = 56; continue _fun0001 }
 50:
            var1 = var4.gifs;
 56:
            if(!(var3 == var1)) { _fun0001_ip = 64; continue _fun0001 }
 60:
            var1 = _closure1_slot4;
 64:
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
    var5 = native4;
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
 0:
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
                    if(var6) { _fun0002_ip = 63; continue _fun0002 }
 47:
                    var6 = _closure2_slot0;
                    var5 = var2.src;
                    var3 = var6.bind(var7)(var5, var8);
 63:
                    if(!(var4 == var3)) { _fun0002_ip = 73; continue _fun0002 }
 67:
                    var3 = var2.src;
 73:
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
 0:
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
            if(var4) { _fun0003_ip = 56; continue _fun0003 }
 50:
            var2 = var3.hideTooltip;
 56:
            var1 = var1 != var2;
            if(!var1) { _fun0003_ip = 66; continue _fun0003 }
 63:
            var1 = var2;
 66:
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