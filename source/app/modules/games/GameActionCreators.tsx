// app/modules/games/GameActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function requestGames() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _requestGames() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = arg1;
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 3;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.GAMES;
                    var2['url'] = var8;
                    var8 = {};
                    var9 = var5;
                    var8['game_ids'] = var9;
                    var2['query'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=94);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = var2.body;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 4;
                    var3 = var8[var3];
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var8 = 'GAME_FETCH_SUCCESS';
                    var3['type'] = var8;
                    var8 = var5;
                    var3['gameIds'] = var8;
                    var3['games'] = var7;
                    var3 = var4.bind(var6)(var3);
case 9: // try_end0
                    _fun0001_ip = 10; continue _fun0001;
case 7:
                    return var2;
case 11: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'GAME_FETCH_FAILURE';
                    var2['type'] = var6;
                    var2['gameIds'] = var5;
                    var2 = var3.bind(var4)(var2);
case 10:
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _fetchGamesWithSupplementalData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 3:
                    var3 = var4.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var3 = _closure1_slot6;
                    var2 = var3.queue;
                    var2 = var2.bind(var3)(var4);
                    SaveGenerator(address=43);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 13:
                    var3 = undefined;
                    return var3;
case 17:
                    return var2;
case 12:
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.BatchInvocationManager;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = global;
                    var5 = var2.Promise;
                    var4 = var5.all;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var6 = var6[var3];
                    var3 = undefined;
                    var9 = var7.bind(var3)(var6);
                    var8 = var9.chunk;
                    var7 = arg1;
                    var6 = 20;
                    var7 = var8.bind(var9)(var7, var6);
                    var6 = var7.map;
                    var2 = _closure1_slot7;
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=87);
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    return var3;
case 22:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var12 = var4.bind(var1)();
    var4 = {};
    var7 = function predicate(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.hasNoData;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = !var1;
        return var1;
    };
    var4['predicate'] = var7;
    var7 = function onQueued(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GAME_FETCH';
        var1['type'] = var4;
        var4 = arg1;
        var1['gameIds'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['onQueued'] = var7;
    var7 = function onCancelled(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GAME_FETCH_CANCELLED';
        var1['type'] = var4;
        var4 = arg1;
        var1['gameIds'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['onCancelled'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var13 = var7;
    var11 = var4;
    var4 = new var13[var9](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/GameActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchGamesWithSupplementalData() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGamesWithSupplementalData'] = var2;
    return var1;
})();