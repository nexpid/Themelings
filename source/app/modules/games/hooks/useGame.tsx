// app/modules/games/hooks/useGame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var11 = var5.bind(var1)(var4);
    var4 = 1;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var9 = var5.bind(var1)(var4);
    var _closure1_slot4 = var9;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var10 = var4.QueryIds;
    var4 = 4;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createFetchStore;
    var4 = {};
    var10 = var10.GAME;
    var4['getQueryId'] = var10;
    var10 = function get(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = null;
            var3 = var2 == var6;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot4;
            var4 = var5.hasNoData;
            var4 = var4.bind(var5)(var6);
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot4;
            var4 = var5.getGame;
            var4 = var4.bind(var5)(var6);
            var5 = var2 != var4;
            var2 = null;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var4;
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var2 = var3.NO_DATA;
case 8:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var4['get'] = var10;
    var10 = function* (arg1) {
        var1 = function* anon_0_(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                StartGenerator();
                var5 = arg1;
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var2 = null;
                if(!(var2 != var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.fetchGamesWithSupplementalData;
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var4)(var2);
                SaveGenerator(address=64);
case 6:
                return var2;
case 4:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 11:
                var3 = undefined;
                return var3;
case 13:
                return var2;
case 9:
                return var1;
            }
        };
        return var1;
    };
    var10 = var11.bind(var1)(var10);
    var _closure1_slot2 = var10;
    var10 = function() {
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var4['load'] = var10;
    var10 = function getIsLoading(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = _closure1_slot4;
            var2 = var3.isFetching;
            var1 = var2.bind(var3)(var4);
case 14:
            return var1;
        }
    };
    var4['getIsLoading'] = var10;
    var10 = function getError(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var2 = var3 != var5;
            var1 = null;
            if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 3:
            var4 = _closure1_slot4;
            var2 = var4.didFetchingFail;
            var2 = var2.bind(var4)(var5);
            var1 = null;
            if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var6 = 'Failed to fetch game data';
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var1 = var2 instanceof Object ? var2 : var3;
case 16:
            return var1;
        }
    };
    var4['getError'] = var10;
    var4 = var5.bind(var8)(var9, var4);
    var _closure1_slot5 = var4;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/games/hooks/useGame.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useGame'] = var4;
    var2 = function useGames(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = new Array(1);
                var2 = arg1;
                var1[0] = var2;
                return var1;
            };
            var7 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var2 = var3.fetchMany;
            var1 = new Array(0);
            var6 = 0;
            var8 = var1;
            var4 = arraySpread(var8, var7, var6);
            var8 = var2;
            var7 = var1;
            var6 = var3;
            var1 = apply(var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useGames'] = var2;
    return var1;
})();