// app/stores/billing/GuildBoostSlotStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var8 = function handleGuildBoostsUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildBoostSlot;
        var2 = {};
        var5 = _closure1_slot8;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = var4.id;
        var2[var3] = var4;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var1 = function handleSubscriptionStoreUpdate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = {};
            var1 = global;
            var5 = var1.Object;
            var4 = var5.values;
            var3 = _closure1_slot8;
            var5 = var4.bind(var5)(var3);
            var3 = var5.length;
            var4 = 0;
            var3 = var4 < var3;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var5[var4];
            var3 = var6.id;
            var2[var3] = var6;
            var8 = _closure1_slot5;
            var7 = var8.getSubscriptionById;
            var3 = var6.subscriptionId;
            var3 = var7.bind(var8)(var3);
            var6['subscription'] = var3;
            var4 = var4 + 1;
            var3 = var5.length;
            if(var4 < var3) { _fun0002_ip = 7; continue _fun0002 }
case 6:
            _closure1_slot8 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = false;
    var _closure1_slot6 = var2;
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildBoostSlotStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.syncWith;
            var5 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot10;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasFetched';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'boostSlots';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGuildBoostSlot';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot8;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GuildBoostSlotStore';
    var7['displayName'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var9 = function handleGuildBoostsFetch() {
        var1 = true;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_BOOST_SLOTS_FETCH'] = var9;
    var9 = function handleGuildBoostsFetchSuccess(arg1) {
        var1 = arg1;
        var4 = var1.guildBoostSlots;
        var1 = {};
        _closure1_slot8 = var1;
        var3 = var4.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = _closure1_slot8;
            var1 = var3.id;
            var2[var1] = var3;
            var1 = undefined;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        var1 = false;
        _closure1_slot7 = var1;
        var1 = true;
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_BOOST_SLOTS_FETCH_SUCCESS'] = var9;
    var2['GUILD_BOOST_SLOT_UPDATE_SUCCESS'] = var8;
    var2['GUILD_BOOST_SLOT_CREATE'] = var8;
    var2['GUILD_BOOST_SLOT_UPDATE'] = var8;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot8 = var1;
        var1 = false;
        _closure1_slot6 = var1;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/billing/GuildBoostSlotStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();