// app/modules/search/native/stores/SearchMemberTabStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.Permissions;
    var _closure1_slot10 = var8;
    var8 = new Array(0);
    var _closure1_slot11 = var8;
    var8 = function() {
        var4 = _closure1_slot8;
        var3 = function GuildMemberSearchManager() {
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = _closure1_slot7;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var2, var5);
            var5 = null;
            var2['count'] = var5;
            var6 = false;
            var2['isFetching'] = var6;
            var6 = '';
            var2['searchQueryString'] = var6;
            var2['targetChannelId'] = var5;
            var5 = new Array(0);
            var2['results'] = var5;
            var3 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = arg1;
                    var1 = _closure3_slot0;
                    var2 = var1.searchQueryString;
                    var1 = arg2;
                    if(!(var1 === var2)) { _fun0002_ip = 158; continue _fun0002 }
 28:
                    var4 = _closure3_slot0;
                    var1 = false;
                    var4['isFetching'] = var1;
                    var2 = new Array(0);
                    var _closure4_slot0 = var2;
                    var9 = _closure1_slot9;
                    var8 = var9.getChannel;
                    var6 = var4.targetChannelId;
                    var6 = var8.bind(var9)(var6);
                    var _closure4_slot1 = var6;
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var4 = arg1;
                            var3 = var4.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var5.bind(var1)(var2);
                            var2 = var2.AutocompleterResultTypes;
                            var2 = var2.USER;
                            if(!(var3 === var2)) { _fun0003_ip = 147; continue _fun0003 }
 49:
                            var5 = _closure4_slot1;
                            var3 = null;
                            if(!(var3 != var5)) { _fun0003_ip = 133; continue _fun0003 }
 62:
                            var5 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var3 = 8;
                            var3 = var6[var3];
                            var6 = var5.bind(var1)(var3);
                            var5 = var6.can;
                            var3 = {};
                            var7 = _closure1_slot10;
                            var7 = var7.VIEW_CHANNEL;
                            var3['permission'] = var7;
                            var7 = var4.record;
                            var3['user'] = var7;
                            var7 = _closure4_slot1;
                            var3['context'] = var7;
                            var3 = var5.bind(var6)(var3);
                            if(var3) { _fun0003_ip = 133; continue _fun0003 }
 131:
                            return var1;
 133:
                            var3 = _closure4_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 147:
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    var4['results'] = var2;
                    var4 = var4.searchQueryString;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(!(var5 > var4))) { _fun0002_ip = 129; continue _fun0002 }
 115:
                    var5 = _closure3_slot0;
                    var4 = null;
                    var5['count'] = var4;
                    _fun0002_ip = 144; continue _fun0002;
 129:
                    var3 = _closure3_slot0;
                    var2 = var2.length;
                    var3['count'] = var2;
 144:
                    var2 = _closure1_slot14;
                    var1 = var2.emitChange;
                    var1 = var1.bind(var2)();
 158:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onAutocompleterResultsChange'] = var3;
            var7 = _closure1_slot1;
            var5 = _closure1_slot3;
            var3 = 7;
            var6 = var5[var3];
            var7 = var7.bind(var1)(var6);
            var6 = var2.onAutocompleterResultsChange;
            var4 = _closure1_slot0;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.USER;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = var7.prototype;
            var4 = Object.create(var3, {constructor: {value: var7}});
            var8 = 50;
            var11 = var4;
            var10 = var6;
            var9 = var5;
            var3 = new var11[var7](var10, var9, var8, var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var2['autocompleter'] = var3;
            var3 = var2.autocompleter;
            var2 = var3.createSearchContext;
            var2 = var2.bind(var3)();
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setAutocompleteOptions';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var3 = var1.autocompleter;
            var2 = var3.setOptions;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'teardown';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.autocompleter;
            var1 = var2.clean;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'search';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var3 = arg3;
            var2 = this;
            var1 = arg2;
            var2['targetChannelId'] = var1;
            var1 = true;
            var2['isFetching'] = var1;
            var1 = var3.toLowerCase;
            var3 = var1.bind(var3)();
            var1 = var3.trim;
            var4 = var1.bind(var3)();
            var2['searchQueryString'] = var4;
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var3);
            var6 = var7.requestMembers;
            var5 = arg1;
            var3 = 50;
            var3 = var6.bind(var7)(var5, var4, var3);
            var3 = var2.autocompleter;
            var2 = var3.search;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getResults';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.results;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getCount';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.count;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getIsFetching';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var1 = var1.isFetching;
            return var1;
        };
        var1['value'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var8 = var8.bind(var1)();
    var _closure1_slot12 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchGuildMemberTabStoreImpl() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot15;
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
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'getResults';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = _closure1_slot13;
                var3 = var4.get;
                var1 = arg1;
                var5 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0005_ip = 41; continue _fun0005 }
 31:
                var4 = var5.getResults;
                var1 = var4.bind(var5)();
 41:
                if(!(var3 == var1)) { _fun0005_ip = 49; continue _fun0005 }
 45:
                var1 = _closure1_slot11;
 49:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure1_slot13;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0006_ip = 41; continue _fun0006 }
 31:
                var3 = var4.getCount;
                var2 = var3.bind(var4)();
 41:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0006_ip = 53; continue _fun0006 }
 50:
                var1 = var2;
 53:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getIsFetching';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure1_slot13;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0007_ip = 41; continue _fun0007 }
 31:
                var3 = var4.getIsFetching;
                var2 = var3.bind(var4)();
 41:
                var1 = var1 != var2;
                if(!var1) { _fun0007_ip = 51; continue _fun0007 }
 48:
                var1 = var2;
 51:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'SearchGuildMemberTabStore';
    var9['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleSearchGuildMemberTabSearch(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var8 = var1.id;
            var6 = var1.guildId;
            var5 = var1.channelId;
            var10 = var1.threadId;
            var4 = var1.searchQueryString;
            var3 = _closure1_slot13;
            var1 = var3.get;
            var3 = var1.bind(var3)(var8);
            var1 = null;
            if(!(var1 == var3)) { _fun0008_ip = 77; continue _fun0008 }
 53:
            var7 = _closure1_slot12;
            var9 = var7.prototype;
            var9 = Object.create(var9, {constructor: {value: var7}});
            var15 = var9;
            var7 = new var15[var7](var14);
            var3 = var7 instanceof Object ? var7 : var9;
 77:
            var7 = _closure1_slot13;
            var2 = var7.set;
            var2 = var2.bind(var7)(var8, var3);
            var7 = var3.setAutocompleteOptions;
            var2 = {};
            var8 = {};
            var8['guild'] = var6;
            var9 = true;
            var8['strict'] = var9;
            var11 = var1 != var10;
            var1 = undefined;
            var9 = undefined;
            if(!var11) { _fun0008_ip = 129; continue _fun0008 }
 126:
            var9 = var10;
 129:
            var8['thread'] = var9;
            var2['userFilters'] = var8;
            var2 = var7.bind(var3)(var2);
            var2 = var3.search;
            var2 = var2.bind(var3)(var6, var5, var4);
            return var1;
        }
    };
    var2['SEARCH_GUILD_MEMBER_TAB_SEARCH'] = var7;
    var7 = function handleSearchGuildMemberTabCleanup(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.id;
            var4 = _closure1_slot13;
            var2 = var4.get;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            if(!(var2 != var4)) { _fun0009_ip = 41; continue _fun0009 }
 31:
            var2 = var4.teardown;
            var2 = var2.bind(var4)();
 41:
            var2 = _closure1_slot13;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_GUILD_MEMBER_TAB_CLEANUP'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var14 = var7;
    var12 = var2;
    var2 = new var14[var9](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot14 = var2;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/stores/SearchMemberTabStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();