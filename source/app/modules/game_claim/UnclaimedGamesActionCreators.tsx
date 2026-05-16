// app/modules/game_claim/UnclaimedGamesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var10;
    var6 = function fetchUnclaimedGames() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var6;
    var1 = function _fetchUnclaimedGames() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var7 = _closure1_slot5;
                    var7 = var7.UNCLAIMED_GAMES;
                    var2['url'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=80);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var7 = var2.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'UNCLAIMED_GAMES_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['guildIdToGameIds'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function useUnclaimedGameIdsForGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arguments[1];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = true;
case 8:
            var3 = _closure1_slot7;
            var3 = var3.bind(var1)(var4);
            var5 = var3.data;
            var3 = null;
            var4 = var3 == var5;
            var1 = undefined;
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = arg1;
            var1 = var5[var4];
case 10:
            if(!(var3 == var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = _closure1_slot6;
case 12:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var10[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var11 = var13.bind(var1)(var5);
    var _closure1_slot4 = var11;
    var5 = 2;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot5 = var5;
    var5 = new Array(0);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var10[var5];
    var8 = var9.bind(var1)(var5);
    var7 = var8.createFetchStore;
    var5 = {};
    var12 = function getQueryId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = 'unclaimed-games';
case 14:
            return var1;
        }
    };
    var5['getQueryId'] = var12;
    var12 = function get() {
        var2 = _closure1_slot4;
        var1 = var2.getMap;
        var1 = var1.bind(var2)();
        return var1;
    };
    var5['get'] = var12;
    var12 = function load() {
        var2 = _closure1_slot8;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var5['load'] = var12;
    var12 = 6;
    var12 = var10[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.Seconds;
    var12 = var12.DAY;
    var5['staleAfter'] = var12;
    var12 = {};
    var13 = function backoff() {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 7;
        var1 = var5[var1];
        var2 = undefined;
        var3 = var4.bind(var2)(var1);
        var1 = 6;
        var1 = var5[var1];
        var1 = var4.bind(var2)(var1);
        var1 = var1.Millis;
        var2 = var1.MINUTE;
        var1 = 5;
        var6 = var1 * var2;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var7 = var2;
        var1 = new var7[var3](var6, var5);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var12['backoff'] = var13;
    var13 = 10;
    var12['maxRetries'] = var13;
    var5['retryConfig'] = var12;
    var5 = var7.bind(var8)(var11, var5);
    var _closure1_slot7 = var5;
    var7 = {};
    var7['fetch'] = var6;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/game_claim/UnclaimedGamesActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['fetchUnclaimedGames'] = var6;
    var3['useUnclaimedGames'] = var5;
    var3['useUnclaimedGameIdsForGuild'] = var4;
    var2 = function useHasUnclaimedGames(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var4 = true;
case 8:
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        }
    };
    var3['useHasUnclaimedGames'] = var2;
    return var1;
})();