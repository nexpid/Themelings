// app/modules/game_profile/GameProfileHttpUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = var2;
                    var _closure4_slot0 = var2;
                    var5 = undefined;
                    var6 = undefined;
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 3;
                    var2 = var9[var2];
                    var2 = var7.bind(var5)(var2);
                    var9 = var2.HTTP;
                    var7 = var9.get;
                    var2 = {};
                    var12 = _closure1_slot5;
                    var11 = var12.SIMILAR_GAMES;
                    var10 = var8;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var10 = false;
                    var2['rejectWithError'] = var10;
                    var2 = var7.bind(var9)(var2);
                    SaveGenerator(address=98);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = var2.body;
                    var9 = var7.similar_games;
                    var6 = var9;
                    var7 = null;
                    if(!(var7 == var9)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var7 = new Array(0);
                    _fun0001_ip = 11; continue _fun0001;
case 9:
                    var7 = var6;
case 11:
                    var6 = var7.filter;
                    var4 = function(arg1) {
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var7 = var6.bind(var7)(var4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var9 = 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS';
                    var3['type'] = var9;
                    var3['applicationId'] = var8;
                    var3['games'] = var7;
                    var3 = var4.bind(var6)(var3);
case 12: // try_end0
                    return var5;
case 7:
                    return var2;
case 13: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
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
    var5 = var4.bind(var1)();
    var4 = function addDiscordUtmSourceToUrl(arg1) {
        var4 = _closure1_slot7;
        var3 = {};
        var1 = 'discord';
        var3['utm_source'] = var1;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var _closure1_slot6 = var4;
    var6 = function addSearchParamsToUrl(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var11 = undefined;
            var4 = undefined;
            var6 = undefined;
            var7 = undefined;
case 14: // try_start_0
            var5 = global;
            var12 = var5.URL;
            var15 = var1;
            var8 = var5.window;
            var8 = var8.location;
            var14 = var8.origin;
            var9 = var12.prototype;
            var9 = Object.create(var9, {constructor: {value: var12}});
            var16 = var9;
            var8 = new var16[var12](var15, var14, var13);
            var8 = var8 instanceof Object ? var8 : var9;
            var _closure2_slot0 = var8;
            var10 = var5.Object;
            var9 = var10.entries;
            var5 = var3;
            var10 = var9.bind(var10)(var5);
            var9 = var10.forEach;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var4 = var6().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    var5 = undefined;
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var5 = var4;
case 15:
                    var4 = undefined;
                    if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var7 = var6().value;
                    var6 = var2;
                    var6 = var6 === var1;
                    var4 = undefined;
                    var3 = var6;
                    if(var6) { _fun0003_ip = 17; continue _fun0003 }
case 19:
                    var4 = var7;
                    var3 = var6;
case 17:
                    if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var2.return();
case 20:
                    var2 = _closure2_slot0;
                    var3 = var2.searchParams;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var5);
            var5 = var8.toString;
            var5 = var5.bind(var8)();
case 22: // try_end0
            return var5;
case 23: // catch_target0
            CatchBlockStart(arg_register=4);
            var8 = var1;
            var5 = var8.split;
            var9 = '#';
            var10 = var5.bind(var8)(var9);
            var8 = _closure1_slot3;
            var5 = 2;
            var8 = var8.bind(var11)(var10, var5);
            var5 = 0;
            var4 = var8[var5];
            var5 = 1;
            var6 = var8[var5];
case 24: // try_start_1
            var5 = global;
            var11 = var5.URL;
            var15 = var4;
            var4 = var5.window;
            var4 = var4.location;
            var14 = var4.origin;
            var8 = var11.prototype;
            var8 = Object.create(var8, {constructor: {value: var11}});
            var16 = var8;
            var4 = new var16[var11](var15, var14, var13);
            var4 = var4 instanceof Object ? var4 : var8;
            var7 = var4;
            var _closure2_slot1 = var4;
            var10 = var5.Object;
            var8 = var10.entries;
            var4 = var3;
            var10 = var8.bind(var10)(var4);
            var8 = var10.forEach;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var4 = var6().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    var5 = undefined;
                    if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var5 = var4;
case 15:
                    var4 = undefined;
                    if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var7 = var6().value;
                    var6 = var2;
                    var6 = var6 === var1;
                    var4 = undefined;
                    var3 = var6;
                    if(var6) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                    var4 = var7;
                    var3 = var6;
case 17:
                    if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var2.return();
case 20:
                    var2 = _closure2_slot1;
                    var3 = var2.searchParams;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
                    return var1;
                }
            };
            var4 = var8.bind(var10)(var4);
            var8 = var6;
            var4 = null;
            if(!(var4 == var8)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var8 = var7;
            var4 = var8.toString;
            var4 = var4.bind(var8)();
            _fun0002_ip = 27; continue _fun0002;
case 25:
            var8 = var7;
            var7 = var8.toString;
            var8 = var7.bind(var8)();
            var7 = var6;
            var5 = var5.HermesInternal;
            var6 = var5.concat;
            var5 = '';
            var4 = var6.bind(var5)(var8, var9, var7);
case 27: // try_end1
            return var4;
case 28: // catch_target1
            CatchBlockStart(arg_register=3);
            var5 = var1;
            var1 = var5.includes;
            var4 = '?';
            var1 = var1.bind(var5)(var4);
            if(!var1) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var4 = '&';
case 29:
            var1 = global;
            var7 = var1.Object;
            var6 = var7.entries;
            var6 = var6.bind(var7)(var3);
            var3 = var6.map;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var3 = var6().value;
                    var2 = var1;
                    var4 = undefined;
                    var2 = var2 === var4;
                    var5 = undefined;
                    if(var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var5 = var3;
case 15:
                    var3 = undefined;
                    if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var4;
                    var3 = undefined;
                    var2 = var6;
                    if(var6) { _fun0005_ip = 17; continue _fun0005 }
case 19:
                    var3 = var7;
                    var2 = var6;
case 17:
                    if(var2) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var1.return();
case 20:
                    var1 = global;
                    var2 = var1.encodeURIComponent;
                    var5 = var2.bind(var4)(var5);
                    var2 = var1.encodeURIComponent;
                    var4 = var2.bind(var4)(var3);
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = '=';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    return var1;
                }
            };
            var6 = var3.bind(var6)(var2);
            var3 = var6.join;
            var2 = '&';
            var3 = var3.bind(var6)(var2);
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '';
            var1 = var2.bind(var1)(var5, var4, var3);
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/game_profile/GameProfileHttpUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getSimilarGames'] = var5;
    var3['addDiscordUtmSourceToUrl'] = var4;
    var2 = function getGameStoreLink(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 != var7)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var3 = _closure1_slot6;
            var2 = undefined;
            var4 = var3.bind(var2)(var7);
            var6 = var7;
            var3 = undefined;
            var5 = undefined;
case 33: // try_start_0
            var2 = global;
            var8 = var2.URL;
            var9 = var6;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var6 = new var10[var8](var9, var8);
            var6 = var6 instanceof Object ? var6 : var7;
            var3 = var6;
            var7 = var6.hostname;
            var6 = 'store.steampowered.com';
            if(!(var6 === var7)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var7 = var3.pathname;
            var6 = var7.match;
            var3 = /^\\/app\\/(\d+)(\\/|$)/;
            var3 = var6.bind(var7)(var3);
            var5 = var3;
            if(!(var1 == var3)) { _fun0006_ip = 36; continue _fun0006 }
case 37: // try_end0
            var3 = null;
            _fun0006_ip = 38; continue _fun0006;
case 36: // try_start_1
            var6 = var5;
            var5 = 1;
            var6 = var6[var5];
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var2 = 'steam://store/';
            var2 = var5.bind(var2)(var6);
case 39: // try_end1
            var3 = var2;
            _fun0006_ip = 38; continue _fun0006;
case 34:
            var3 = null;
            _fun0006_ip = 38; continue _fun0006;
case 40: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=1);
            var3 = null;
case 38:
            var5 = arg2;
            var2 = var4;
            if(!var5) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var2 = var4;
            if(!(var1 != var3)) { _fun0006_ip = 41; continue _fun0006 }
case 43:
            var2 = var3;
case 41:
            return var2;
case 31:
            return var1;
        }
    };
    var3['getGameStoreLink'] = var2;
    return var1;
})();