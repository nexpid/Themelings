// app/modules/leaderboards/GuildLeaderboardStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var2 = var2.Map;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot5 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildLeaderboardStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getLeaderboards';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arguments[1];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0003_ip = 11; continue _fun0003 }
 9:
                var4 = 0;
 11:
                var3 = _closure1_slot5;
                var2 = var3.get;
                var4 = var2.bind(var3)(var4);
                var2 = null;
                var2 = var2 == var4;
                var1 = undefined;
                if(var2) { _fun0003_ip = 52; continue _fun0003 }
 39:
                var3 = var4.get;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 52:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arguments[2];
                var5 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0004_ip = 14; continue _fun0004 }
 12:
                var6 = 0;
 14:
                var4 = var5.getLeaderboardResponse;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2, var6);
                var3 = null;
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 52; continue _fun0004 }
 46:
                var1 = var2.leaderboard;
 52:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getLeaderboardResponse';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arguments[2];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0005_ip = 11; continue _fun0005 }
 9:
                var4 = 0;
 11:
                var2 = _closure1_slot5;
                var1 = var2.get;
                var6 = var1.bind(var2)(var4);
                var2 = null;
                var4 = var2 == var6;
                var1 = undefined;
                if(var4) { _fun0005_ip = 74; continue _fun0005 }
 39:
                var5 = var6.get;
                var4 = arg1;
                var4 = var5.bind(var6)(var4);
                var2 = var2 == var4;
                var1 = undefined;
                if(var2) { _fun0005_ip = 74; continue _fun0005 }
 61:
                var3 = var4.get;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
 74:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GuildLeaderboardStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleConnectionOpen() {
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var3 = var2;
        var1 = new var3[var1](var2);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot5 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var8;
    var4 = function handleSetGuildLeaderboard(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.leaderboardResponse;
            var9 = var1.intervalOffset;
            var1 = var4.leaderboard;
            var7 = var1.guild_id;
            var3 = var1.leaderboard_id;
            var2 = _closure1_slot5;
            var1 = var2.get;
            var5 = var1.bind(var2)(var9);
            var1 = null;
            if(!(var1 == var5)) { _fun0006_ip = 107; continue _fun0006 }
 61:
            var2 = global;
            var2 = var2.Map;
            var8 = var2.prototype;
            var8 = Object.create(var8, {constructor: {value: var2}});
            var12 = var8;
            var2 = new var12[var2](var11);
            var2 = var2 instanceof Object ? var2 : var8;
            var8 = _closure1_slot5;
            var6 = var8.set;
            var6 = var6.bind(var8)(var9, var2);
            var5 = var2;
 107:
            var2 = var5.get;
            var2 = var2.bind(var5)(var7);
            var6 = var5;
            if(!(var1 == var2)) { _fun0006_ip = 166; continue _fun0006 }
 124:
            var1 = global;
            var1 = var1.Map;
            var5 = var1.prototype;
            var5 = Object.create(var5, {constructor: {value: var1}});
            var12 = var5;
            var1 = new var12[var1](var11);
            var1 = var1 instanceof Object ? var1 : var5;
            var5 = var6.set;
            var5 = var5.bind(var6)(var7, var1);
            var2 = var1;
 166:
            var1 = var2.set;
            var1 = var1.bind(var2)(var3, var4);
            var1 = undefined;
            return var1;
        }
    };
    var2['SET_GUILD_LEADERBOARD'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/leaderboards/GuildLeaderboardStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();