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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SIMILAR_GAMES_BLOCKED_GAME_IDS;
    var _closure1_slot4 = var4;
    var4 = new Array(0);
    var _closure1_slot5 = var4;
    var4 = new Array(0);
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useSimilarGames.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSimilarGames(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot4;
            var1 = var4.has;
            var1 = var1.bind(var4)(var6);
            var3 = !var1;
case 2:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var4 = var7[var4];
            var11 = undefined;
            var5 = var5.bind(var11)(var4);
            var4 = var5.useSimilarGameIds;
            var4 = var4.bind(var5)(var6, var3);
            var8 = var4.data;
            var6 = var4.isLoading;
            var4 = var4.error;
            var7 = var3;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = null;
            var12 = var8;
            if(!(var3 == var12)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var12 = _closure1_slot5;
case 6:
            var _closure2_slot0 = var12;
            var10 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 4;
            var3 = var13[var3];
            var5 = var10.bind(var11)(var3);
            var3 = var5.useGames;
            var3 = var3.bind(var5)(var12);
            var9 = 5;
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
                        if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var5 = _closure1_slot2;
                        var3 = var5.hasNoData;
                        var3 = var3.bind(var5)(var4);
                        var1 = !var3;
case 7:
                        if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var3 = _closure1_slot2;
                        var2 = var3.didFetchingFail;
                        var2 = var2.bind(var3)(var4);
                        var1 = !var2;
case 9:
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
                    if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = var3.nsfwAllowed;
case 11:
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
                            var1 = 6;
                            var1 = var4[var1];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.gameIsAcceptable;
                            var1 = var1.bind(var3)(var5);
                            if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 7;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.isGameProfileObscured;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var4)(var5, var2);
                            var1 = !var2;
case 13:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var9, var2, var3);
            var2 = {};
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var7 = false;
            var2['isFetching'] = var7;
            var1 = _closure1_slot6;
            var2['similarGames'] = var1;
            var1 = var2;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var7 = null;
            var4 = var7 == var4;
            if(!var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var7 == var8;
case 18:
            if(var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = var6;
case 20:
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = var5;
case 22:
            var2['isFetching'] = var4;
            var2['similarGames'] = var3;
            var1 = var2;
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();