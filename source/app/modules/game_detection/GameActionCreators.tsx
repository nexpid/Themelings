// app/modules/game_detection/GameActionCreators.tsx
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
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _requestGames() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
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
                    var2 = 4;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.GAMES;
                    var2['url'] = var8;
                    var9 = {};
                    var8 = var5;
                    var9['game_ids'] = var8;
                    var8 = true;
                    var9['with_supplemental_data'] = var8;
                    var2['query'] = var9;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=101);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = var2.body;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 5;
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
                    var2 = 5;
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
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _fetchGamesWithSupplementalData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
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
                    var3 = _closure1_slot7;
                    var2 = var3.request;
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
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = function GameFetchManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot1;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = global;
            var6 = var5.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['_promises'] = var6;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var10 = var6;
            var5 = new var10[var5](var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['_pending'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.DelayedCall;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var9 = 32;
            var8 = function() {
                var2 = _closure3_slot0;
                var1 = var2._flush;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var4;
            var2 = new var10[var6](var9, var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_flushHandler'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'request';
        var5['key'] = var2;
        var2 = function value(arg1) {
            var4 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1._pending;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = function(arg1) {
                var1 = _closure3_slot0;
                var4 = var1._promises;
                var3 = var4.add;
                var2 = {};
                var5 = arg1;
                var2['resolve'] = var5;
                var2 = var3.bind(var4)(var2);
                var3 = var1._flushHandler;
                var2 = var3.delay;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var5['value'] = var2;
        var2 = new Array(3);
        var2[0] = var5;
        var5 = {};
        var7 = '_flush';
        var5['key'] = var7;
        var8 = _closure1_slot5;
        var1 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 4:
                    var14 = var5._pending;
                    var10 = new Array(0);
                    var3 = 0;
                    var15 = var10;
                    var13 = 0;
                    var2 = arraySpread(var15, var14, var13);
                    var4 = var5._pending;
                    var2 = var4.clear;
                    var2 = var2.bind(var4)();
                    var14 = var5._promises;
                    var4 = new Array(0);
                    var15 = var4;
                    var2 = arraySpread(var15, var14, var13);
                    var6 = var5._promises;
                    var2 = var6.clear;
                    var2 = var2.bind(var6)();
                    var2 = var10.length;
                    if(!(var3 === var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = var5.resolvePromises;
                    var2 = var2.bind(var5)(var4);
                    _fun0003_ip = 21; continue _fun0003;
case 19:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 5;
                    var3 = var11[var3];
                    var8 = undefined;
                    var7 = var9.bind(var8)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var12 = 'GAME_FETCH';
                    var3['type'] = var12;
                    var3['gameIds'] = var10;
                    var3 = var6.bind(var7)(var3);
                    var3 = global;
                    var6 = var3.Promise;
                    var3 = var6.all;
                    var7 = 7;
                    var7 = var11[var7];
                    var9 = var9.bind(var8)(var7);
                    var8 = var9.chunk;
                    var7 = 20;
                    var8 = var8.bind(var9)(var10, var7);
                    var7 = var8.map;
                    var2 = _closure1_slot8;
                    var2 = var7.bind(var8)(var2);
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=224);
case 22:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var3 = var5.resolvePromises;
                    var3 = var3.bind(var5)(var4);
case 21:
                    var3 = undefined;
                    return var3;
case 24:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var7 = function _flush() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = 'resolvePromises';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = arg1;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var2[2] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_detection/GameActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchGamesWithSupplementalData() {
        var1 = undefined;
        var4 = _closure1_slot10;
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