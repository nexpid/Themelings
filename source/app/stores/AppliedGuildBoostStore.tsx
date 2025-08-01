// app/stores/AppliedGuildBoostStore.tsx
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var8 = function handleModifyingAppliedBoostStart() {
        var1 = true;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var _closure1_slot5 = var2;
    var2 = null;
    var _closure1_slot6 = var2;
    var7 = new Array(0);
    var _closure1_slot7 = var7;
    var7 = false;
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var7;
    var _closure1_slot10 = var2;
    var _closure1_slot11 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function AppliedGuildBoostStore() {
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
                var1 = _closure1_slot12;
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
        var1 = 'getAppliedGuildBoostsForGuild';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = _closure1_slot5;
                var4 = var1[var3];
                var1 = null;
                var4 = var1 != var4;
                if(!var4) { _fun0003_ip = 37; continue _fun0003 }
 23:
                var2 = _closure1_slot5;
                var2 = var2[var3];
                var1 = var2.subscriptions;
 37:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getLastFetchedAtForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var1 = _closure1_slot5;
                var4 = var1[var3];
                var1 = null;
                var4 = var1 != var4;
                if(!var4) { _fun0004_ip = 37; continue _fun0004 }
 23:
                var2 = _closure1_slot5;
                var2 = var2[var3];
                var1 = var2.lastFetchedAt;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCurrentUserAppliedBoosts';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAppliedGuildBoost';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot7;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isModifyingAppliedBoost';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'applyBoostError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'unapplyBoostError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'cooldownEndsAt';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isFetchingCurrentUserAppliedBoosts';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'AppliedGuildBoostStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var9 = function handleAppliedBoostsForGuildFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = var1.appliedBoosts;
        var2 = _closure1_slot5;
        var1 = {};
        var1['subscriptions'] = var4;
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var4 = var4.bind(var5)();
        var1['lastFetchedAt'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_APPLIED_BOOSTS_FETCH_SUCCESS'] = var9;
    var9 = function handleAppliedBoostsForuserFetchSuccess(arg1) {
        var1 = arg1;
        var2 = var1.appliedGuildBoosts;
        var3 = false;
        _closure1_slot8 = var3;
        _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var2['USER_APPLIED_BOOSTS_FETCH_SUCCESS'] = var9;
    var9 = function handleAppliedBoostCooldownFetch(arg1) {
        var1 = arg1;
        var2 = var1.endsAt;
        _closure1_slot6 = var2;
        var1 = undefined;
        return var1;
    };
    var2['APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS'] = var9;
    var2['GUILD_UNAPPLY_BOOST_START'] = var8;
    var2['GUILD_APPLY_BOOST_START'] = var8;
    var8 = function handleApplyBoostSuccess(arg1) {
        var1 = arg1;
        var4 = var1.appliedGuildBoost;
        var1 = global;
        var5 = var1.Set;
        var2 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var9 = var2.bind(var4)(var1);
        var2 = var5.prototype;
        var2 = Object.create(var2, {constructor: {value: var5}});
        var10 = var2;
        var1 = new var10[var5](var9, var8);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var7 = 0;
        var9 = var1;
        var8 = var4;
        var7 = arraySpread(var9, var8, var7);
        var6 = _closure1_slot7;
        var5 = var6.filter;
        var3 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.has;
            var1 = arg1;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var8 = var5.bind(var6)(var3);
        var9 = var1;
        var3 = arraySpread(var9, var8, var7);
        _closure1_slot7 = var1;
        var1 = null;
        _closure1_slot10 = var1;
        var1 = false;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_APPLY_BOOST_SUCCESS'] = var8;
    var8 = function handleApplyBoostFail(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = false;
        _closure1_slot9 = var3;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_APPLY_BOOST_FAIL'] = var8;
    var8 = function handleUnapplyBoostSuccess(arg1) {
        var2 = arg1;
        var2 = var2.boostId;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var3 = var4.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot7 = var1;
        var1 = false;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_UNAPPLY_BOOST_SUCCESS'] = var8;
    var8 = function handleUnapplyBoostFail(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = false;
        _closure1_slot9 = var3;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_UNAPPLY_BOOST_FAIL'] = var8;
    var4 = function handleUserAppliedBoostsFetchStart() {
        var1 = true;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_APPLIED_BOOSTS_FETCH_START'] = var4;
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
    var4 = 'stores/AppliedGuildBoostStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();