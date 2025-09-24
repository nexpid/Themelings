// app/modules/search/native/stores/SearchPeopleTabStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = new Array(0);
    var _closure1_slot10 = var8;
    var8 = function() {
        var4 = _closure1_slot7;
        var3 = function PeopleSearchManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot6;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = null;
            var3['count'] = var5;
            var5 = '';
            var3['searchQueryString'] = var5;
            var5 = new Array(0);
            var3['groupDMs'] = var5;
            var5 = {};
            var3['userIndexes'] = var5;
            var5 = new Array(0);
            var3['results'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 9;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.UserSearch;
            var4 = var6.prototype;
            var5 = Object.create(var4, {constructor: {value: var6}});
            var8 = function() {
                var2 = _closure3_slot0;
                var1 = var2.processResults;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var5;
            var4 = new var9[var6](var8, var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['userSearch'] = var4;
            var5 = var3.userSearch;
            var4 = var5.subscribe;
            var3 = function() {
                var2 = _closure3_slot0;
                var1 = var2.processResults;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = true;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'teardown';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = var1.userSearch;
            var1 = var2.unsubscribe;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'search';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var1 = var3.toLowerCase;
                var3 = var1.bind(var3)();
                var1 = var3.trim;
                var4 = var1.bind(var3)();
                var2['searchQueryString'] = var4;
                var1 = '';
                if(!(var1 !== var4)) { _fun0002_ip = 106; continue _fun0002 }
 40:
                var3 = var2.userSearch;
                var1 = var3.filter;
                var1 = var1.bind(var3)(var4);
                var2['userIndexes'] = var1;
                var5 = var2.userSearch;
                var3 = var5.fetch;
                var1 = true;
                var1 = var3.bind(var5)(var4, var1);
                var3 = function searchGroupDMs(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var2 = var3.toLocaleLowerCase;
                        var3 = var2.bind(var3)();
                        var2 = var3.trim;
                        var2 = var2.bind(var3)();
                        var _closure4_slot0 = var2;
                        var3 = var2.length;
                        var2 = 0;
                        if(!(var2 !== var3)) { _fun0003_ip = 208; continue _fun0003 }
 43:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 7;
                        var3 = var7[var3];
                        var6 = undefined;
                        var4 = var4.bind(var6)(var3);
                        var5 = _closure1_slot8;
                        var3 = var5.getMutablePrivateChannels;
                        var3 = var3.bind(var5)();
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.values;
                        var4 = var3.bind(var4)();
                        var3 = var4.filter;
                        var5 = _closure1_slot0;
                        var2 = 8;
                        var2 = var7[var2];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.filterGroupDMs;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var2 = arg1;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 8;
                            var5 = var5[var4];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.matchGroupDM;
                            var4 = _closure4_slot0;
                            var4 = var5.bind(var6)(var2, var4);
                            var1[1] = var4;
                            var4 = _closure1_slot9;
                            var3 = var4.getScoreWithoutFetchingLatest;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            var1[2] = var2;
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.filter;
                        var2 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var4 = arg1;
                                var1 = var4[Symbol.iterator];
                                var4 = var1().next;
                                var2 = var4().value;
                                var2 = var1;
                                var6 = undefined;
                                var3 = var2 === var6;
                                var2 = undefined;
                                if(var3) { _fun0004_ip = 49; continue _fun0004 }
 24:
                                var5 = var4().value;
                                var4 = var1;
                                var4 = var4 === var6;
                                var2 = undefined;
                                var3 = var4;
                                if(var4) { _fun0004_ip = 49; continue _fun0004 }
 43:
                                var2 = var5;
                                var3 = var4;
 49:
                                if(var3) { _fun0004_ip = 55; continue _fun0004 }
 52:
                                var1.return();
 55:
                                var1 = 0;
                                var1 = var2 > var1;
                                return var1;
                            }
                        };
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.sort;
                        var2 = function(arg1, arg2) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var4 = arg1;
                                var3 = arg2;
                                var1 = 1;
                                var2 = var3[var1];
                                var1 = var4[var1];
                                var1 = var2 - var1;
                                var2 = 0;
                                if(!(var2 === var1)) { _fun0005_ip = 42; continue _fun0005 }
 27:
                                var2 = 2;
                                var3 = var3[var2];
                                var2 = var4[var2];
                                var1 = var3 - var2;
 42:
                                return var1;
                            }
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.map;
                        var1 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var1 = arg1;
                                var2 = var1[Symbol.iterator];
                                var1 = var2().next;
                                var4 = var1().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                if(var3) { _fun0006_ip = 25; continue _fun0006 }
 22:
                                var1 = var4;
 25:
                                if(var3) { _fun0006_ip = 31; continue _fun0006 }
 28:
                                var2.return();
 31:
                                return var1;
                            }
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.value;
                        var1 = var1.bind(var2)();
                        _fun0003_ip = 212; continue _fun0003;
 208:
                        var1 = new Array(0);
 212:
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var3.bind(var1)(var4);
                var2['groupDMs'] = var1;
                _fun0002_ip = 116; continue _fun0002;
 106:
                var1 = var2.processResults;
                var1 = var1.bind(var2)();
 116:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'processResults';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = this;
                var3 = var4.userSearch;
                var2 = var3.filter;
                var1 = var4.searchQueryString;
                var1 = var2.bind(var3)(var1);
                var4['userIndexes'] = var1;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var3);
                var6 = var7.parseUserSearchResults;
                var3 = {'data': null, 'withGuildMembers': true, 'withAffinitySuggestions': true, 'withFriends': true, 'withFriendSuggestions': false, 'withFriendRequests': false, 'withFriendRequestsIncoming': false, 'withFriendRequestsOutgoing': false, 'excludeCurrentUser': true};
                var8 = var4.userIndexes;
                var3['data'] = var8;
                var9 = var6.bind(var7)(var3);
                var3 = var4.groupDMs;
                var6 = var3.length;
                var7 = 0;
                var3 = var9;
                if(!(var6 > var7)) { _fun0007_ip = 327; continue _fun0007 }
 118:
                var8 = var4.searchQueryString;
                var6 = '';
                var3 = var9;
                if(!(var6 !== var8)) { _fun0007_ip = 327; continue _fun0007 }
 138:
                var8 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 10;
                var10 = var13[var6];
                var10 = var12.bind(var1)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var6 = var13[var6];
                var6 = var12.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.qGlQra;
                var6 = var10.bind(var11)(var6);
                var8['title'] = var6;
                var6 = var4.groupDMs;
                var8['items'] = var6;
                var10 = var9.findIndex;
                var6 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.title;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var3 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.y29JXl;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 === var1;
                    return var1;
                };
                var12 = var10.bind(var9)(var6);
                var6 = -1;
                if(!(var6 !== var12)) { _fun0007_ip = 296; continue _fun0007 }
 238:
                var6 = var9.slice;
                var15 = var6.bind(var9)(var7, var12);
                var6 = new Array(1);
                var16 = var6;
                var14 = 0;
                var11 = arraySpread(var16, var15, var14);
                var6[var11] = var8;
                var10 = 1;
                var14 = var11 + var10;
                var10 = var9.slice;
                var15 = var10.bind(var9)(var12);
                var16 = var6;
                var10 = arraySpread(var16, var15, var14);
                var3 = var6;
                _fun0007_ip = 327; continue _fun0007;
 296:
                var6 = new Array(1);
                var16 = var6;
                var15 = var9;
                var14 = 0;
                var9 = arraySpread(var16, var15, var14);
                var6[var9] = var8;
                var8 = 1;
                var8 = var9 + var8;
                var3 = var6;
 327:
                var6 = var4.searchQueryString;
                var6 = var6.length;
                if(!(!(var6 > var7))) { _fun0007_ip = 352; continue _fun0007 }
 342:
                var6 = null;
                var4['count'] = var6;
                _fun0007_ip = 377; continue _fun0007;
 352:
                var6 = var3.reduce;
                var5 = function(arg1, arg2) {
                    var1 = arg2;
                    var1 = var1.items;
                    var2 = var1.length;
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                };
                var5 = var6.bind(var3)(var5, var7);
                var4['count'] = var5;
 377:
                var4['results'] = var3;
                var3 = _closure1_slot13;
                var2 = var3.emitChange;
                var2 = var2.bind(var3)();
                return var1;
            }
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
        var5 = function value() {
            var1 = this;
            var1 = var1.count;
            return var1;
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var8 = var8.bind(var1)();
    var _closure1_slot11 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot12 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchPeopleTabStoreImpl() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
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
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getResults';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = _closure1_slot12;
                var3 = var4.get;
                var1 = arg1;
                var5 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0009_ip = 41; continue _fun0009 }
 31:
                var4 = var5.getResults;
                var1 = var4.bind(var5)();
 41:
                if(!(var3 == var1)) { _fun0009_ip = 49; continue _fun0009 }
 45:
                var1 = _closure1_slot10;
 49:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCount';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure1_slot12;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0010_ip = 41; continue _fun0010 }
 31:
                var3 = var4.getCount;
                var2 = var3.bind(var4)();
 41:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0010_ip = 53; continue _fun0010 }
 50:
                var1 = var2;
 53:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'SearchPeopleTabStore';
    var9['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleSearchPeopleTabSearch(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var5 = var1.id;
            var3 = var1.searchQueryString;
            var4 = _closure1_slot12;
            var2 = var4.get;
            var2 = var2.bind(var4)(var5);
            var4 = null;
            if(!(var4 == var2)) { _fun0011_ip = 61; continue _fun0011 }
 37:
            var4 = _closure1_slot11;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var9 = var6;
            var4 = new var9[var4](var8);
            var2 = var4 instanceof Object ? var4 : var6;
 61:
            var4 = _closure1_slot12;
            var1 = var4.set;
            var1 = var1.bind(var4)(var5, var2);
            var1 = var2.search;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_PEOPLE_TAB_SEARCH'] = var7;
    var7 = function handleSearchPeopleTabCleanup(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.id;
            var4 = _closure1_slot12;
            var2 = var4.get;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            if(!(var2 != var4)) { _fun0012_ip = 41; continue _fun0012 }
 31:
            var2 = var4.teardown;
            var2 = var2.bind(var4)();
 41:
            var2 = _closure1_slot12;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_PEOPLE_TAB_CLEANUP'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var14 = var7;
    var12 = var2;
    var2 = new var14[var9](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot13 = var2;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/stores/SearchPeopleTabStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();