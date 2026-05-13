// app/modules/game_claim/UnclaimedGamesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function ensureFetched() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot10;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot8;
            var4 = var3.fails;
            var3 = 10;
            var2 = var4 >= var3;
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot12;
            var3 = null;
            var3 = var3 != var4;
            if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var5 = var4.bind(var5)();
            var4 = _closure1_slot12;
            var3 = var5 < var4;
case 10:
            var2 = var3;
case 8:
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 5:
            var4 = _closure1_slot11;
            var3 = null;
            var3 = var3 == var4;
            if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var5 = var4.bind(var5)();
            var6 = _closure1_slot11;
            var4 = _closure1_slot7;
            var4 = var6 + var4;
            var3 = var5 >= var4;
case 13:
            var2 = !var3;
case 12:
            if(var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.fetch;
            var1 = var1.bind(var2)();
case 15:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var7 = 5;
    var2 = var5[var7];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.DAY;
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var5[var2];
    var8 = var6.bind(var1)(var2);
    var2 = var5[var7];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.MINUTE;
    var11 = var7 * var2;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var12 = var7;
    var2 = new var12[var8](var11, var10);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = false;
    var _closure1_slot10 = var2;
    var2 = null;
    var _closure1_slot11 = var2;
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function UnclaimedGamesStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 19; continue _fun0003;
case 17:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 19:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getUnclaimedGameIdsForGuild';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot14;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var2 = _closure1_slot9;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 20; continue _fun0004 }
case 9:
                var1 = new Array(0);
case 20:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasUnclaimedGames';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot14;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
case 21:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildIdsWithUnclaimedGames';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot14;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var1 = _closure1_slot9;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = _closure1_slot9;
                var1 = arg1;
                var1 = var2[var1];
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'fetching';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'lastFetchedAt';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'UnclaimedGamesStore';
    var7['displayName'] = var2;
    var2 = 9;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleLogout() {
        var2 = {};
        _closure1_slot9 = var2;
        var2 = false;
        _closure1_slot10 = var2;
        var2 = null;
        _closure1_slot11 = var2;
        _closure1_slot12 = var2;
        var2 = _closure1_slot8;
        var1 = var2.succeed;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleFetch() {
        var1 = true;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['UNCLAIMED_GAMES_FETCH'] = var8;
    var8 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var2 = var1.guildIdToGameIds;
        _closure1_slot9 = var2;
        var2 = false;
        _closure1_slot10 = var2;
        var2 = global;
        var3 = var2.Date;
        var2 = var3.now;
        var2 = var2.bind(var3)();
        _closure1_slot11 = var2;
        var2 = null;
        _closure1_slot12 = var2;
        var2 = _closure1_slot8;
        var1 = var2.succeed;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['UNCLAIMED_GAMES_FETCH_SUCCESS'] = var8;
    var4 = function handleFetchFail() {
        var1 = false;
        _closure1_slot10 = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var3 = var1.bind(var3)();
        var4 = _closure1_slot8;
        var1 = var4.fail;
        var1 = var1.bind(var4)();
        var1 = var3 + var1;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['UNCLAIMED_GAMES_FETCH_FAIL'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_claim/UnclaimedGamesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();