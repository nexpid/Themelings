// app/modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var1 = function getSearchStateId(arg1) {
        var1 = arg1;
        var4 = _closure1_slot7;
        var3 = new Array(6);
        var3[0] = var4;
        var4 = var1.query;
        var3[1] = var4;
        var4 = _closure1_slot8;
        var3[2] = var4;
        var4 = var1.categoryId;
        var3[3] = var4;
        var2 = _closure1_slot9;
        var3[4] = var2;
        var1 = var1.languageCode;
        var3[5] = var1;
        var2 = var3.join;
        var1 = '-';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function getOrCreateSearchState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot14;
            var1 = undefined;
            var4 = var3.bind(var1)(var5);
            var3 = _closure1_slot10;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot12;
            var3 = {};
            var5 = var5.query;
            var3['query'] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var8 = var3;
            var3 = new var9[var6](var8, var7);
            var1 = var3 instanceof Object ? var3 : var5;
case 6:
            var3 = _closure1_slot10;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function withSearchState(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot14;
            var4 = undefined;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot10;
            var1 = var2.get;
            var3 = var1.bind(var2)(var3);
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = arg2;
            var1 = var2.bind(var4)(var3);
case 8:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.SEARCH_RESULTS_QUERY_PREFIX;
    var _closure1_slot7 = var9;
    var9 = var8.SEARCH_RESULTS_CATEGORY_PREFIX;
    var _closure1_slot8 = var9;
    var8 = var8.SEARCH_RESULTS_LANGUAGE_CODE_PREFIX;
    var _closure1_slot9 = var8;
    var8 = var2.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot10 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot11 = var2;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function SearchState(arg1) {
            var3 = this;
            var1 = arg1;
            var2 = var1.query;
            var5 = _closure1_slot5;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = new Array(0);
            var3['guildIds'] = var4;
            var4 = null;
            var3['error'] = var4;
            var3['offset'] = var4;
            var3['total'] = var4;
            var5 = false;
            var3['isFetching'] = var5;
            var3['isInitialFetchComplete'] = var5;
            var3['lastFetchTimestamp'] = var4;
            var3['query'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'handleSearchStart';
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
        var6 = 'handleSearchFailure';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var1 = false;
            var3['isFetching'] = var1;
            var1 = true;
            var3['isInitialFetchComplete'] = var1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
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
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleSearchSuccess';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.total;
                var6 = var1.guilds;
                var1 = undefined;
                var _closure3_slot0 = var1;
                var5 = null;
                var3['error'] = var5;
                var7 = false;
                var3['isFetching'] = var7;
                var7 = true;
                var3['isInitialFetchComplete'] = var7;
                var7 = global;
                var8 = var7.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var3['lastFetchTimestamp'] = var7;
                if(!(var5 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 6:
                var3['total'] = var2;
case 10:
                var10 = var3.guildIds;
                var2 = new Array(0);
                var9 = 0;
                var11 = var2;
                var5 = arraySpread(var11, var10, var9);
                _closure3_slot0 = var2;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var3['guildIds'] = var2;
                var2 = var2.length;
                var3['offset'] = var2;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot12 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GlobalDiscoveryServersSearchResultsStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 13; continue _fun0005;
case 11:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 13:
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
        var1 = 'getGuild';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.guildIds;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getIsFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
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
        var1[2] = var5;
        var5 = {};
        var7 = 'getIsInitialFetchComplete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
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
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getOffset';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.offset;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getTotal';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.total;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getLastFetchTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.lastFetchTimestamp;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.error;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getErrorMessage';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var4 = _closure1_slot16;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.error;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                    var2 = var3.getAnyErrorMessage;
                    var1 = var2.bind(var3)();
case 14:
                    return var1;
                }
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GlobalDiscoveryServersSearchResultsStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var3 = _closure1_slot10;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot11;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleGlobalDiscoveryServersSearchStart(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var6 = var1.query;
            var5 = var1.categoryId;
            var4 = var1.languageCode;
            var3 = var1.reset;
            var8 = _closure1_slot14;
            var7 = {};
            var7['query'] = var6;
            var7['categoryId'] = var5;
            var7['languageCode'] = var4;
            var1 = undefined;
            var8 = var8.bind(var1)(var7);
            if(!var3) { _fun0007_ip = 16; continue _fun0007 }
case 17:
            var7 = _closure1_slot10;
            var3 = var7.delete;
            var3 = var3.bind(var7)(var8);
case 16:
            var3 = _closure1_slot15;
            var2 = {};
            var2['query'] = var6;
            var2['categoryId'] = var5;
            var2['languageCode'] = var4;
            var3 = var3.bind(var1)(var2);
            var2 = var3.handleSearchStart;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var2['GLOBAL_DISCOVERY_SERVERS_SEARCH_START'] = var9;
    var9 = function handleGlobalDiscoveryServersSearchSuccess(arg1) {
        var2 = arg1;
        var7 = var2.query;
        var5 = var2.categoryId;
        var1 = var2.languageCode;
        var6 = var2.total;
        var4 = var2.guilds;
        var3 = _closure1_slot15;
        var2 = {};
        var2['query'] = var7;
        var2['categoryId'] = var5;
        var2['languageCode'] = var1;
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var3 = var5.handleSearchSuccess;
        var2 = {};
        var2['total'] = var6;
        var2['guilds'] = var4;
        var2 = var3.bind(var5)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = var3.set;
            var1 = var4.id;
            var1 = var2.bind(var3)(var1, var4);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS'] = var9;
    var9 = function handleGlobalDiscoveryServersSearchFailure(arg1) {
        var2 = arg1;
        var6 = var2.query;
        var5 = var2.categoryId;
        var1 = var2.languageCode;
        var4 = var2.error;
        var3 = _closure1_slot15;
        var2 = {};
        var2['query'] = var6;
        var2['categoryId'] = var5;
        var2['languageCode'] = var1;
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.handleSearchFailure;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE'] = var9;
    var9 = function handleGlobalDiscoveryServersSearchClear(arg1) {
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
        var3 = _closure1_slot10;
        var2 = var3.forEach;
        var1 = function(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var3 = var1.query;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 17; continue _fun0008 }
case 18:
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = var1.query;
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0008_ip = 17; continue _fun0008 }
case 19:
                var3 = _closure1_slot10;
                var2 = var3.delete;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
case 17:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR'] = var9;
    var4 = function handleGuildProfileFetchSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.profile;
            var3 = _closure1_slot11;
            var2 = var3.get;
            var5 = var2.bind(var3)(var4);
            var7 = null;
            if(!(var7 != var5)) { _fun0009_ip = 20; continue _fun0009 }
case 7:
            var3 = _closure1_slot11;
            var2 = var3.set;
            var1 = {};
            var11 = var1;
            var10 = var5;
            var8 = copyDataProperties(var11, var10);
            var9 = var6.memberCount;
            if(!(var7 == var9)) { _fun0009_ip = 5; continue _fun0009 }
case 21:
            var9 = var5.memberCount;
case 5:
            var8 = 'memberCount';
            var1[var8] = var9;
            var6 = var6.onlineCount;
            if(!(var7 == var6)) { _fun0009_ip = 22; continue _fun0009 }
case 23:
            var6 = var5.presenceCount;
case 22:
            var5 = 'presenceCount';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_PROFILE_FETCH_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();