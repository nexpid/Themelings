// app/modules/directory_channels/GuildDirectorySearchStore.tsx
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = new Array(0);
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildDirectorySearchStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getSearchState';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure1_slot8;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0003_ip = 34; continue _fun0003 }
 20:
                var1 = {'mostRecentQuery': '', 'fetching': false};
 34:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSearchResults';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var5 = var3[var1];
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0004_ip = 47; continue _fun0004 }
 25:
                var4 = arg2;
                var4 = var5[var4];
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0004_ip = 47; continue _fun0004 }
 41:
                var1 = var4.results;
 47:
                if(!(var3 == var1)) { _fun0004_ip = 55; continue _fun0004 }
 51:
                var1 = _closure1_slot7;
 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldFetch';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                var2 = var1 == var4;
                var3 = undefined;
                if(var2) { _fun0005_ip = 47; continue _fun0005 }
 25:
                var2 = arg2;
                var2 = var4[var2];
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0005_ip = 47; continue _fun0005 }
 41:
                var3 = var2.lastSearchedAt;
 47:
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 85; continue _fun0005 }
 54:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var3 = var2 - var3;
                var2 = 120000;
                var1 = var3 > var2;
 85:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildDirectorySearchStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSearchStart(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var4 = var1.query;
        var2 = _closure1_slot8;
        var1 = {};
        var5 = true;
        var1['fetching'] = var5;
        var1['mostRecentQuery'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_SEARCH_START'] = var9;
    var9 = function handleSearchSuccess(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var6 = var1.query;
        var5 = var1.results;
        var7 = _closure1_slot8;
        var3 = {};
        var10 = var7[var4];
        var11 = var3;
        var8 = copyDataProperties(var11, var10);
        var9 = false;
        var8 = 'fetching';
        var3[var8] = var9;
        var7[var4] = var3;
        var9 = new Array(0);
        var _closure2_slot0 = var9;
        var3 = var5.forEach;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildDirectoryEntryFromServer;
            var2 = arg1;
            var4 = var3.bind(var4)(var2);
            var3 = _closure2_slot0;
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var2 = var3.bind(var5)(var2);
        var3 = _closure1_slot9;
        var2 = {};
        var10 = var3[var4];
        var11 = var2;
        var5 = copyDataProperties(var11, var10);
        var5 = {};
        var8 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 5;
        var7 = var7[var1];
        var1 = undefined;
        var8 = var8.bind(var1)(var7);
        var7 = var8.orderByTotalMemberCount;
        var7 = var7.bind(var8)(var9);
        var5['results'] = var7;
        var7 = global;
        var8 = var7.Date;
        var7 = var8.now;
        var7 = var7.bind(var8)();
        var5['lastSearchedAt'] = var7;
        var2[var6] = var5;
        var3[var4] = var2;
        return var1;
    };
    var2['GUILD_DIRECTORY_SEARCH_SUCCESS'] = var9;
    var9 = function handleSearchFailure(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot8;
        var1 = {};
        var6 = var2[var3];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var5 = false;
        var4 = 'fetching';
        var1[var4] = var5;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_SEARCH_FAILURE'] = var9;
    var9 = function handleSearchClear(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot8;
        var1 = {'fetching': false, 'mostRecentQuery': ''};
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_SEARCH_CLEAR'] = var9;
    var9 = function handleUpdateQuery(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var4 = var1.query;
        var2 = _closure1_slot8;
        var1 = {};
        var5 = false;
        var1['fetching'] = var5;
        var1['mostRecentQuery'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DIRECTORY_CACHED_SEARCH'] = var9;
    var4 = function handleDeleteEntry(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot8;
            var6 = var1[var4];
            var3 = null;
            var8 = var3 == var6;
            var1 = undefined;
            var7 = undefined;
            if(var8) { _fun0006_ip = 49; continue _fun0006 }
 43:
            var7 = var6.mostRecentQuery;
 49:
            if(!(var3 != var7)) { _fun0006_ip = 151; continue _fun0006 }
 53:
            var6 = _closure1_slot9;
            var6 = var6[var4];
            var7 = var6[var7];
            if(!(var3 != var7)) { _fun0006_ip = 151; continue _fun0006 }
 69:
            var6 = var7.results;
            var3 = var6.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.guildId;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var8 = var3.bind(var6)(var2);
            var3 = _closure1_slot9;
            var2 = {};
            var9 = var3[var4];
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var5 = _closure1_slot8;
            var5 = var5[var4];
            var6 = var5.mostRecentQuery;
            var5 = {};
            var10 = var5;
            var9 = var7;
            var7 = copyDataProperties(var10, var9);
            var7 = 'results';
            var5[var7] = var8;
            var2[var6] = var5;
            var3[var4] = var2;
 151:
            return var1;
        }
    };
    var2['GUILD_DIRECTORY_ENTRY_DELETE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/GuildDirectorySearchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();