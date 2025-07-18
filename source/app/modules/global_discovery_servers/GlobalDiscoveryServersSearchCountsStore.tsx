// app/modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function getOrCreateSearchCountState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot7;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 50; continue _fun0002 }
 26:
            var3 = _closure1_slot8;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var8 = var5;
            var3 = new var8[var3](var7);
            var1 = var3 instanceof Object ? var3 : var5;
 50:
            var3 = _closure1_slot7;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function withSearchCountState(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot7;
            var2 = var3.get;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var4;
            if(!var2) { _fun0003_ip = 39; continue _fun0003 }
 29:
            var3 = arg2;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 39:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot7 = var2;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function SearchCountState() {
            var3 = this;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = false;
            var3['isInitialFetchComplete'] = var2;
            var3['isFetching'] = var2;
            var2 = null;
            var3['error'] = var2;
            var3['counts'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'handleSearchCountStart';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = null;
            var2['error'] = var1;
            var1 = true;
            var2['isFetching'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'handleSearchCountSuccess';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var2['counts'] = var1;
            var1 = false;
            var2['isFetching'] = var1;
            var1 = true;
            var2['isInitialFetchComplete'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleSearchCountFailure';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var5 = var2.APIError;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var6 = arg1;
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['error'] = var2;
            var2 = false;
            var3['isFetching'] = var2;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GlobalDiscoveryServersSearchCountStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
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
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'getIsInitialFetchComplete';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var4 = _closure1_slot11;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isInitialFetchComplete;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getIsFetchingCounts';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot11;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isFetching;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCounts';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var4 = _closure1_slot11;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.counts;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GlobalDiscoveryServersSearchCountStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var2 = _closure1_slot7;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleGlobalDiscoveryServersSearchCountStart(arg1) {
        var1 = arg1;
        var3 = var1.query;
        var2 = _closure1_slot10;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = var3.handleSearchCountStart;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START'] = var9;
    var9 = function handleGlobalDiscoveryServersSearchCountSuccess(arg1) {
        var1 = arg1;
        var3 = var1.query;
        var4 = var1.categoryCounts;
        var2 = _closure1_slot10;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = var3.handleSearchCountSuccess;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS'] = var9;
    var9 = function handleGlobalDiscoveryServersSearchCountFailure(arg1) {
        var1 = arg1;
        var3 = var1.query;
        var4 = var1.error;
        var2 = _closure1_slot10;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = var3.handleSearchCountFailure;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE'] = var9;
    var4 = function handleGlobalDiscoveryServersSearchClear(arg1) {
        var2 = arg1;
        var5 = var2.ignoreQueries;
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var6 = var3;
        var2 = new var6[var2](var5, var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = var3.forEach;
        var1 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg2;
                var2 = _closure2_slot0;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if(var1) { _fun0005_ip = 40; continue _fun0005 }
 23:
                var2 = _closure1_slot7;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
 40:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();