// app/modules/search/managers/SearchTabsFetchManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = ['include_nsfw', 'channel_id'];
    var _closure1_slot2 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SEARCH_FILTERS_BY_TAB;
    var _closure1_slot9 = var7;
    var7 = var4.SEARCH_QUERY_BY_SEARCH_FILTER;
    var _closure1_slot10 = var7;
    var4 = var4.SEARCH_QUERY_DEFAULT_FILTERS;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AbstractSearchFetchManager;
    var2 = function(arg1) {
        var4 = function SearchTabsFetchManager() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot13;
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
                var6 = _closure1_slot7;
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
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'createRequestPayload';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var1 = arg1;
            var9 = var1.searchQuery;
            var4 = var1.searchTabs;
            var3 = var1.getLimit;
            var _closure3_slot0 = var3;
            var3 = var1.pagination;
            var _closure3_slot1 = var3;
            var3 = var1.trackExactTotalHits;
            var6 = var9.include_nsfw;
            var5 = var9.channel_id;
            var8 = _closure1_slot3;
            var7 = _closure1_slot2;
            var1 = undefined;
            var1 = var8.bind(var1)(var9, var7);
            var _closure3_slot2 = var1;
            var1 = {};
            var1['include_nsfw'] = var6;
            var1['channel_ids'] = var5;
            var5 = {};
            var1['tabs'] = var5;
            var1['track_exact_total_hits'] = var3;
            var _closure3_slot3 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var6 = var2.bind(var1)(var4);
                    var2 = _closure1_slot9;
                    var3 = var2[var4];
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 38; continue _fun0003 }
 34:
                    var7 = {};
                    _fun0003_ip = 46; continue _fun0003;
 38:
                    var2 = _closure1_slot10;
                    var7 = var2[var3];
 46:
                    var2 = _closure3_slot3;
                    var3 = var2.tabs;
                    var2 = {};
                    var9 = _closure1_slot11;
                    var10 = var2;
                    var8 = copyDataProperties(var10, var9);
                    var10 = var2;
                    var9 = var7;
                    var7 = copyDataProperties(var10, var9);
                    var9 = _closure3_slot2;
                    var10 = var2;
                    var7 = copyDataProperties(var10, var9);
                    var9 = _closure3_slot1;
                    var10 = var2;
                    var5 = copyDataProperties(var10, var9);
                    var5 = 'limit';
                    var2[var5] = var6;
                    var3[var4] = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'createWithPayload';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var1 = var2.searchContext;
                var6 = var2.searchQuery;
                var9 = var2.searchTabs;
                var8 = var2.getLimit;
                var7 = var2.pagination;
                var5 = var2.trackExactTotalHits;
                var3 = var4.createRequestPayload;
                var2 = {};
                var2['searchQuery'] = var6;
                var2['searchTabs'] = var9;
                var2['getLimit'] = var8;
                var2['pagination'] = var7;
                var2['trackExactTotalHits'] = var5;
                var5 = var3.bind(var4)(var2);
                var4 = var1.type;
                var3 = _closure1_slot12;
                var3 = var3.GUILD;
                if(!(var3 !== var4)) { _fun0004_ip = 361; continue _fun0004 }
 107:
                var3 = _closure1_slot12;
                var3 = var3.GUILD_CHANNEL;
                if(!(var3 !== var4)) { _fun0004_ip = 361; continue _fun0004 }
 124:
                var3 = _closure1_slot12;
                var3 = var3.THREAD;
                if(!(var3 !== var4)) { _fun0004_ip = 361; continue _fun0004 }
 141:
                var3 = _closure1_slot12;
                var3 = var3.CHANNEL;
                if(!(var3 !== var4)) { _fun0004_ip = 295; continue _fun0004 }
 158:
                var3 = _closure1_slot12;
                var3 = var3.DMS;
                if(!(var3 !== var4)) { _fun0004_ip = 229; continue _fun0004 }
 172:
                var3 = global;
                var7 = var3.Error;
                var8 = var1.type;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '[SearchFetchManager] Unsupported search context type: ';
                var14 = var4.bind(var3)(var8);
                var4 = var7.prototype;
                var4 = Object.create(var4, {constructor: {value: var7}});
                var15 = var4;
                var3 = new var15[var7](var14, var13);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
 229:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var8 = var3.SearchTabFetcherImpl;
                var14 = var1.type;
                var13 = var1.type;
                var4 = var8.prototype;
                var4 = Object.create(var4, {constructor: {value: var8}});
                var15 = var4;
                var12 = var6;
                var11 = var5;
                var3 = new var15[var8](var14, var13, var12, var11, var10);
                var3 = var3 instanceof Object ? var3 : var4;
                return var3;
 295:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var8 = var3.SearchTabFetcherImpl;
                var14 = var1.channelId;
                var13 = var1.type;
                var4 = var8.prototype;
                var4 = Object.create(var4, {constructor: {value: var8}});
                var15 = var4;
                var12 = var6;
                var11 = var5;
                var3 = new var15[var8](var14, var13, var12, var11, var10);
                var3 = var3 instanceof Object ? var3 : var4;
                return var3;
 361:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.SearchTabFetcherImpl;
                var14 = var1.guildId;
                var13 = var1.type;
                var2 = var4.prototype;
                var2 = Object.create(var2, {constructor: {value: var4}});
                var15 = var2;
                var12 = var6;
                var11 = var5;
                var1 = new var15[var4](var14, var13, var12, var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'create';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = arg1;
            var4 = this;
            var3 = var1.id;
            var10 = var1.searchContext;
            var9 = var1.searchQuery;
            var8 = var1.searchTabs;
            var7 = var1.getLimit;
            var6 = var1.pagination;
            var5 = var1.trackExactTotalHits;
            var1 = var4.cancel;
            var1 = var1.bind(var4)(var3);
            var2 = var4.createWithPayload;
            var1 = {};
            var1['searchContext'] = var10;
            var1['searchQuery'] = var9;
            var1['searchTabs'] = var8;
            var1['getLimit'] = var7;
            var1['pagination'] = var6;
            var1['trackExactTotalHits'] = var5;
            var1 = var2.bind(var4)(var1);
            var2 = var4.set;
            var2 = var2.bind(var4)(var3, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/managers/SearchTabsFetchManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();