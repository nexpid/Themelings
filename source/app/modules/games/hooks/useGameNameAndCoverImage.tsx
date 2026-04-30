// app/modules/games/hooks/useGameNameAndCoverImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/hooks/useGameNameAndCoverImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGameNameAndCoverImage(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var8 = undefined;
            var5 = var2.bind(var8)(var1);
            var2 = var5.useGame;
            var1 = arg1;
            var1 = var2.bind(var5)(var1);
            var7 = var1.data;
            var2 = var1.isLoading;
            var1 = {};
            var5 = null;
            var9 = var5 == var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var7.getCoverURL;
            var9 = arg3;
            var6 = var10.bind(var7)(var9);
case 2:
            var1['coverImageUrl'] = var6;
            var9 = var5 == var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7.name;
case 4:
            if(!(var5 != var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var6;
case 6:
            if(!(var5 == var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 1;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.GIWFlF;
            var3 = var5.bind(var6)(var4);
case 8:
            var1['gameName'] = var3;
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();