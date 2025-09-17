// app/modules/premium/portkey/PortkeyStore.tsx
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    var1 = function getStateForGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot5;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0002_ip = 51; continue _fun0002 }
 20:
            var4 = _closure1_slot5;
            var3 = {};
            var5 = {};
            var3['catalog'] = var5;
            var5 = {};
            var3['instances'] = var5;
            var5 = {};
            var3['entitlements'] = var5;
            var4[var2] = var3;
 51:
            var1 = _closure1_slot5;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function PortkeyStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
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
        var1 = 'getState';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot5;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getStateForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0004_ip = 25; continue _fun0004 }
 14:
                var2 = _closure1_slot5;
                var1 = var2[var3];
 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasFetchedCatalog';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0005_ip = 46; continue _fun0005 }
 12:
                var2 = _closure1_slot5;
                var2 = var2[var4];
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0005_ip = 40; continue _fun0005 }
 32:
                var3 = var2.hasFetchedCatalog;
 40:
                var2 = true;
                var1 = var2 === var3;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasFetchedInstances';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0006_ip = 46; continue _fun0006 }
 12:
                var2 = _closure1_slot5;
                var2 = var2[var4];
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0006_ip = 40; continue _fun0006 }
 32:
                var3 = var2.hasFetchedInstances;
 40:
                var2 = true;
                var1 = var2 === var3;
 46:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'PortkeyStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleReset() {
        var1 = {};
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleFetchCatalogSuccess(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var7 = var1.catalog;
        var3 = {};
        var8 = _closure1_slot5;
        var9 = var3;
        var1 = copyDataProperties(var9, var8);
        var4 = {};
        var6 = _closure1_slot7;
        var1 = undefined;
        var8 = var6.bind(var1)(var5);
        var9 = var4;
        var6 = copyDataProperties(var9, var8);
        var6 = 'catalog';
        var4[var6] = var7;
        var7 = true;
        var6 = 'hasFetchedCatalog';
        var4[var6] = var7;
        var3[var5] = var4;
        _closure1_slot5 = var3;
        return var1;
    };
    var2['PORTKEY_FETCH_CATALOG_SUCCESS'] = var8;
    var8 = function handleFetchInstancesSuccess(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var7 = var1.instances;
        var3 = {};
        var8 = _closure1_slot5;
        var9 = var3;
        var1 = copyDataProperties(var9, var8);
        var4 = {};
        var6 = _closure1_slot7;
        var1 = undefined;
        var8 = var6.bind(var1)(var5);
        var9 = var4;
        var6 = copyDataProperties(var9, var8);
        var6 = 'instances';
        var4[var6] = var7;
        var7 = true;
        var6 = 'hasFetchedInstances';
        var4[var6] = var7;
        var3[var5] = var4;
        _closure1_slot5 = var3;
        return var1;
    };
    var2['PORTKEY_FETCH_INSTANCES_SUCCESS'] = var8;
    var4 = function handleFetchBoostEntitlementsSuccess(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var8 = var1.unlockedGameServers;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var4 = var1.bind(var2)(var8);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg2;
                var3 = var1.sku;
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0007_ip = 71; continue _fun0007 }
 20:
                var3 = var3.tenant_metadata;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0007_ip = 71; continue _fun0007 }
 35:
                var3 = var3.guild_monetization;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0007_ip = 71; continue _fun0007 }
 50:
                var3 = var3.game_server;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0007_ip = 71; continue _fun0007 }
 65:
                var1 = var3.boost_price;
 71:
                var3 = var2 != var1;
                var2 = 0;
                if(!var3) { _fun0007_ip = 83; continue _fun0007 }
 80:
                var2 = var1;
 83:
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            }
        };
        var1 = 0;
        var7 = var3.bind(var4)(var2, var1);
        var3 = {};
        var9 = _closure1_slot5;
        var10 = var3;
        var1 = copyDataProperties(var10, var9);
        var4 = {};
        var6 = _closure1_slot7;
        var1 = undefined;
        var9 = var6.bind(var1)(var5);
        var10 = var4;
        var6 = copyDataProperties(var10, var9);
        var6 = 'entitlements';
        var4[var6] = var8;
        var6 = 'appliedBoosts';
        var4[var6] = var7;
        var3[var5] = var4;
        _closure1_slot5 = var3;
        return var1;
    };
    var2['GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/portkey/PortkeyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();