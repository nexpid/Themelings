// app/modules/games/hooks/useResolveGame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/hooks/useResolveGame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useResolveGame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.applicationId;
            var2 = var1.gameId;
            var _closure2_slot0 = var2;
            var8 = undefined;
            var _closure2_slot1 = var8;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 1;
            var4 = var7[var4];
            var9 = var5.bind(var8)(var4);
            var7 = var9.useGetOrFetchApplication;
            var5 = null;
            var10 = var5 == var2;
            var4 = undefined;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6;
case 2:
            var4 = var7.bind(var9)(var4);
            _closure2_slot1 = var4;
            var10 = _closure1_slot2;
            var9 = var10.useMemo;
            var7 = new Array(2);
            var7[0] = var2;
            var7[1] = var4;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot1;
                    var3 = var1 == var3;
                    var1 = null;
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot1;
                    var3 = var4.getCanonicalGameId;
                    var1 = var3.bind(var4)();
case 6:
                    _fun0002_ip = 8; continue _fun0002;
case 4:
                    var1 = _closure2_slot0;
case 8:
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var3, var7);
            var3 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 2;
            var1 = var9[var1];
            var3 = var3.bind(var8)(var1);
            var1 = var3.useGame;
            var1 = var1.bind(var3)(var7);
            var8 = var1.data;
            var3 = var1.isLoading;
            var1 = {};
            var1['gameId'] = var7;
            var9 = var5 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = var8;
case 9:
            var1['gameRecord'] = var7;
            var2 = var5 == var2;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var5 != var6;
case 11:
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var5 == var4;
case 13:
            if(var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var3;
case 15:
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();