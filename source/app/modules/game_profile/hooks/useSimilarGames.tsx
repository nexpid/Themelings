// app/modules/game_profile/hooks/useSimilarGames.tsx
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
    var4 = new Array(0);
    var _closure1_slot4 = var4;
    var4 = new Array(0);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useSimilarGames.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSimilarGames(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var11 = undefined;
            var5 = var4.bind(var11)(var3);
            var4 = var5.useSimilarGameIds;
            var3 = arg1;
            var3 = var4.bind(var5)(var3, var7);
            var8 = var3.data;
            var6 = var3.isLoading;
            var4 = var3.error;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            var12 = var8;
            if(!(var3 == var12)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var12 = _closure1_slot4;
case 4:
            var _closure2_slot0 = var12;
            var10 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 3;
            var3 = var13[var3];
            var5 = var10.bind(var11)(var3);
            var3 = var5.useGames;
            var3 = var3.bind(var5)(var12);
            var9 = 4;
            var3 = var13[var9];
            var17 = var10.bind(var11)(var3);
            var16 = var17.useStateFromStores;
            var3 = _closure1_slot2;
            var15 = new Array(1);
            var15[0] = var3;
            var14 = new Array(1);
            var14[0] = var12;
            var5 = function() {
                var3 = _closure2_slot0;
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot2;
                        var1 = var3.getGame;
                        var3 = var1.bind(var3)(var4);
                        var1 = null;
                        var1 = var1 == var3;
                        if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var5 = _closure1_slot2;
                        var3 = var5.hasNoData;
                        var3 = var3.bind(var5)(var4);
                        var1 = !var3;
case 5:
                        if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var3 = _closure1_slot2;
                        var2 = var3.didFetchingFail;
                        var2 = var2.bind(var3)(var4);
                        var1 = !var2;
case 7:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var16.bind(var17)(var15, var5, var14);
            var9 = var13[var9];
            var11 = var10.bind(var11)(var9);
            var10 = var11.useStateFromStoresArray;
            var9 = new Array(2);
            var9[0] = var3;
            var3 = _closure1_slot3;
            var9[1] = var3;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.getCurrentUser;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var2 = var3.nsfwAllowed;
case 9:
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot0;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var3 = _closure1_slot2;
                        var2 = var3.getGame;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = arg1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 5;
                            var1 = var4[var1];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.gameIsAcceptable;
                            var1 = var1.bind(var3)(var5);
                            if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 6;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.isGameProfileObscured;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var4)(var5, var2);
                            var1 = !var2;
case 11:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var9, var2, var3);
            var2 = {};
            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = false;
            var2['isFetching'] = var7;
            var1 = _closure1_slot5;
            var2['similarGames'] = var1;
            var1 = var2;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var7 = null;
            var4 = var7 == var4;
            if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var7 == var8;
case 16:
            if(var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var6;
case 18:
            if(var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = var5;
case 20:
            var2['isFetching'] = var4;
            var2['similarGames'] = var3;
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();