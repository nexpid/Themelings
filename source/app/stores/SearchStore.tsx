// app/stores/SearchStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function getOrCreateSearchState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot13;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0002_ip = 48; continue _fun0002 }
 20:
            var4 = _closure1_slot13;
            var3 = {'searchId': null, 'isIndexing': false, 'isHistoricalIndexing': false, 'isSearching': false, 'analyticsId': null, 'editorState': null, 'offset': 0, 'query': null, 'hasError': false, 'searchFetcher': null, 'rawResults': null, 'totalResults': 0, 'documentsIndexed': 0, 'resultsBlocked': 0, 'showBlockedResults': false, 'showNoResultsAlt': false, 'searchResultsQueryString': null, 'searchResultsQuery': null};
            var3['searchId'] = var2;
            var4[var2] = var3;
 48:
            var1 = _closure1_slot13;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function withSearchState(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = arguments[2];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0003_ip = 14; continue _fun0003 }
 12:
            var1 = null;
 14:
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 48; continue _fun0003 }
 20:
            var2 = _closure1_slot13;
            var4 = var2[var4];
            var2 = var1;
            if(!(var3 != var4)) { _fun0003_ip = 46; continue _fun0003 }
 38:
            var3 = arg2;
            var2 = var3.bind(var5)(var4);
 46:
            return var2;
 48:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var9 = function addQueryToHistory(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var4 = var1.searchId;
            var2 = var1.query;
            var3 = 'string';
            var1 = typeof var2;
            if(!(var3 === var1)) { _fun0004_ip = 266; continue _fun0004 }
 28:
            var1 = var2.trim;
            var2 = var1.bind(var2)();
            var7 = '';
            if(!(var7 !== var2)) { _fun0004_ip = 266; continue _fun0004 }
 49:
            var1 = _closure1_slot17;
            var3 = var1[var4];
            var8 = null;
            if(!(var8 == var3)) { _fun0004_ip = 70; continue _fun0004 }
 66:
            var3 = new Array(0);
 70:
            var1[var4] = var3;
            var1 = var3.indexOf;
            var6 = var1.bind(var3)(var2);
            var1 = -1;
            var4 = var3;
            if(!(var1 === var6)) { _fun0004_ip = 157; continue _fun0004 }
 98:
            var1 = 0;
            var3 = var4[var1];
            if(!(var8 != var3)) { _fun0004_ip = 134; continue _fun0004 }
 108:
            var3 = var4[var1];
            if(!(var7 !== var3)) { _fun0004_ip = 134; continue _fun0004 }
 116:
            var7 = var2.startsWith;
            var3 = var4[var1];
            var3 = var7.bind(var2)(var3);
            if(var3) { _fun0004_ip = 151; continue _fun0004 }
 134:
            if(!(var6 < var1)) { _fun0004_ip = 183; continue _fun0004 }
 138:
            var3 = var4.unshift;
            var3 = var3.bind(var4)(var2);
            _fun0004_ip = 183; continue _fun0004;
 151:
            var4[var1] = var2;
            _fun0004_ip = 183; continue _fun0004;
 157:
            var3 = var4.splice;
            var1 = 1;
            var1 = var3.bind(var4)(var6, var1);
            var1 = var4.unshift;
            var1 = var1.bind(var4)(var2);
 183:
            var1 = var4.length;
            var3 = 5;
            if(!(var1 > var3)) { _fun0004_ip = 212; continue _fun0004 }
 195:
            var2 = var4.splice;
            var1 = var4.length;
            var1 = var2.bind(var4)(var3, var1);
 212:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var4 = var1.Storage;
            var3 = var4.set;
            var2 = _closure1_slot14;
            var1 = {};
            var5 = _closure1_slot17;
            var1['history'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 266:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var9;
    var10 = function clearSearchState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.searchId;
            var3 = _closure1_slot13;
            var3 = var3[var2];
            var5 = null;
            if(!(var5 != var3)) { _fun0005_ip = 64; continue _fun0005 }
 26:
            var4 = var3.searchFetcher;
            if(!(var5 != var4)) { _fun0005_ip = 52; continue _fun0005 }
 36:
            var4 = var3.searchFetcher;
            var3 = var4.cancel;
            var3 = var3.bind(var4)();
 52:
            var1 = _closure1_slot13;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 64:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var10;
    var1 = function setCurrentSearchId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot18;
            if(!(var2 !== var3)) { _fun0006_ip = 57; continue _fun0006 }
 14:
            var5 = null;
            var3 = var5 != var2;
            if(!var3) { _fun0006_ip = 35; continue _fun0006 }
 23:
            var4 = _closure1_slot13;
            var4 = var4[var2];
            var3 = var5 == var4;
 35:
            if(!var3) { _fun0006_ip = 49; continue _fun0006 }
 38:
            var4 = _closure1_slot20;
            var3 = undefined;
            var3 = var4.bind(var3)(var2);
 49:
            _closure1_slot18 = var2;
            var1 = undefined;
            return var1;
 57:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.FAVORITES;
    var _closure1_slot11 = var8;
    var2 = var2.SearchTypes;
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = 'SearchStore';
    var _closure1_slot14 = var2;
    var8 = false;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var8 = null;
    var _closure1_slot18 = var8;
    var8 = 16;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var11 = var8.Store;
    var8 = function(arg1) {
        var4 = function SearchStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var6 = this;
                var5 = var6.waitFor;
                var4 = _closure1_slot10;
                var2 = _closure1_slot9;
                var1 = _closure1_slot8;
                var1 = var5.bind(var6)(var4, var2, var1);
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 14;
                var2 = var1[var5];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var6 = var2.Storage;
                var4 = var6.get;
                var2 = _closure1_slot14;
                var2 = var4.bind(var6)(var2);
                var6 = null;
                var7 = var6 == var2;
                var4 = undefined;
                if(var7) { _fun0008_ip = 90; continue _fun0008 }
 84:
                var4 = var2.history;
 90:
                if(!(var6 != var4)) { _fun0008_ip = 116; continue _fun0008 }
 94:
                var2 = var2.history;
                var4 = function cleanHistory(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.keys;
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var2 = arg1;
                            var3 = global;
                            var6 = var3.Array;
                            var5 = var6.isArray;
                            var4 = _closure4_slot0;
                            var4 = var4[var2];
                            var4 = var5.bind(var6)(var4);
                            if(!var4) { _fun0009_ip = 64; continue _fun0009 }
 35:
                            var5 = _closure4_slot0;
                            var7 = var5[var2];
                            var6 = var7.filter;
                            var4 = function(arg1) {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                    var3 = arg1;
                                    var2 = 'string';
                                    var1 = typeof var3;
                                    var1 = var2 === var1;
                                    if(!var1) { _fun0010_ip = 27; continue _fun0010 }
 17:
                                    var2 = var3.trim;
                                    var1 = var2.bind(var3)();
 27:
                                    return var1;
                                }
                            };
                            var4 = var6.bind(var7)(var4);
                            var5[var2] = var4;
 64:
                            var5 = var3.Array;
                            var4 = var5.isArray;
                            var3 = _closure4_slot0;
                            var3 = var3[var2];
                            var3 = var4.bind(var5)(var3);
                            if(!var3) { _fun0009_ip = 110; continue _fun0009 }
 91:
                            var4 = _closure4_slot0;
                            var4 = var4[var2];
                            var5 = var4.length;
                            var4 = 0;
                            var3 = var4 !== var5;
 110:
                            if(var3) { _fun0009_ip = 121; continue _fun0009 }
 113:
                            var1 = _closure4_slot0;
                            var1 = delete var1[var2];
 121:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var4 = var4.bind(var1)(var2);
                _closure1_slot17 = var2;
 116:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.get;
                var2 = 'tokenized';
                var2 = var4.bind(var5)(var2);
                var4 = !var2;
                var2 = !var4;
                if(!var4) { _fun0008_ip = 166; continue _fun0008 }
 164:
                var2 = false;
 166:
                _closure1_slot15 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(24);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCurrentSearchId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isActive';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var5 = arguments[0];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0011_ip = 19; continue _fun0011 }
 12:
                var5 = _closure1_slot18;
 19:
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0011_ip = 72; continue _fun0011 }
 28:
                var2 = var4.isIndexing;
                var2 = var2.bind(var4)(var5);
                if(var2) { _fun0011_ip = 53; continue _fun0011 }
 42:
                var3 = var4.isSearching;
                var2 = var3.bind(var4)(var5);
 53:
                if(var2) { _fun0011_ip = 69; continue _fun0011 }
 56:
                var3 = var4.hasResults;
                var2 = var3.bind(var4)(var5);
 69:
                var1 = var2;
 72:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isTokenized';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getRawResults';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.rawResults;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasResults';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.rawResults;
                return var1;
            };
            var2 = var4.bind(var3)(var2, var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isIndexing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var4 = _closure1_slot21;
                var3 = undefined;
                var2 = arg1;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.isIndexing;
                    return var1;
                };
                var1 = var4.bind(var3)(var2, var1);
                if(var1) { _fun0012_ip = 30; continue _fun0012 }
 28:
                var1 = false;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isHistoricalIndexing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = _closure1_slot21;
                var3 = undefined;
                var2 = arg1;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.isHistoricalIndexing;
                    return var1;
                };
                var1 = var4.bind(var3)(var2, var1);
                if(var1) { _fun0013_ip = 30; continue _fun0013 }
 28:
                var1 = false;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isSearching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = _closure1_slot21;
                var3 = undefined;
                var2 = arg1;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.isSearching;
                    return var1;
                };
                var1 = var4.bind(var3)(var2, var1);
                if(var1) { _fun0014_ip = 30; continue _fun0014 }
 28:
                var1 = false;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getAnalyticsId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.analyticsId;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getResultsBlocked';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.resultsBlocked;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getDocumentsIndexedCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.documentsIndexed;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getSearchFetcher';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.searchFetcher;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getTotalResults';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = _closure1_slot21;
                var3 = undefined;
                var2 = arg1;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.totalResults;
                    return var1;
                };
                var2 = var4.bind(var3)(var2, var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0015_ip = 39; continue _fun0015 }
 36:
                var1 = var2;
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getEditorState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.editorState;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getHistory';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot17;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getOffset';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = _closure1_slot21;
                var3 = undefined;
                var2 = arg1;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.offset;
                    return var1;
                };
                var2 = var4.bind(var3)(var2, var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0016_ip = 39; continue _fun0016 }
 36:
                var1 = var2;
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getQuery';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.query;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'hasError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = _closure1_slot21;
                var3 = undefined;
                var2 = arg1;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.hasError;
                    return var1;
                };
                var2 = var4.bind(var3)(var2, var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0017_ip = 37; continue _fun0017 }
 34:
                var1 = var2;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'shouldShowBlockedResults';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var5 = _closure1_slot21;
                var4 = undefined;
                var3 = arg1;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.showBlockedResults;
                    return var1;
                };
                var1 = false;
                var2 = var5.bind(var4)(var3, var2, var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0018_ip = 40; continue _fun0018 }
 37:
                var1 = var2;
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'shouldShowNoResultsAlt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var5 = _closure1_slot21;
                var4 = undefined;
                var3 = arg1;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.showNoResultsAlt;
                    return var1;
                };
                var1 = false;
                var2 = var5.bind(var4)(var3, var2, var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0019_ip = 40; continue _fun0019 }
 37:
                var1 = var2;
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getSearchResultsQueryString';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.searchResultsQueryString;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getSearchResultsQuery';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot21;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.searchResultsQuery;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getResultsState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var4 = arg1;
            var3 = this;
            var1 = {};
            var2 = var3.isSearching;
            var2 = var2.bind(var3)(var4);
            var1['isSearching'] = var2;
            var2 = var3.isIndexing;
            var2 = var2.bind(var3)(var4);
            var1['isIndexing'] = var2;
            var2 = var3.isHistoricalIndexing;
            var2 = var2.bind(var3)(var4);
            var1['isHistoricalIndexing'] = var2;
            var2 = var3.getDocumentsIndexedCount;
            var2 = var2.bind(var3)(var4);
            var1['documentsIndexed'] = var2;
            var2 = var3.getOffset;
            var2 = var2.bind(var3)(var4);
            var1['offset'] = var2;
            var2 = var3.getTotalResults;
            var2 = var2.bind(var3)(var4);
            var1['totalResults'] = var2;
            var2 = var3.hasError;
            var2 = var2.bind(var3)(var4);
            var1['hasError'] = var2;
            var2 = var3.shouldShowBlockedResults;
            var2 = var2.bind(var3)(var4);
            var1['showBlockedResults'] = var2;
            var2 = var3.shouldShowNoResultsAlt;
            var2 = var2.bind(var3)(var4);
            var1['showNoResultsAlt'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[23] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var11);
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleConnectionOpen() {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var2 = true;
            _closure1_slot16 = var2;
            var3 = _closure1_slot18;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0020_ip = 73; continue _fun0020 }
 22:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getSearchType;
            var3 = _closure1_slot18;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot12;
            var3 = var3.CHANNEL;
            var2 = var4 === var3;
 73:
            if(!var2) { _fun0020_ip = 121; continue _fun0020 }
 76:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 15;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getIsSearchDesktopXDMExperimentEnabled;
            var3 = {};
            var6 = 'SearchStore_handleConnectionOpen';
            var3['location'] = var6;
            var2 = var4.bind(var5)(var3);
 121:
            if(!var2) { _fun0020_ip = 145; continue _fun0020 }
 124:
            var3 = _closure1_slot24;
            var1 = _closure1_slot12;
            var2 = var1.DMS;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 145:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var11;
    var11 = function startSearching(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var10 = var1.queryString;
            var8 = var1.searchId;
            var _closure2_slot0 = var8;
            var7 = var1.query;
            var3 = _closure1_slot20;
            var1 = undefined;
            var3 = var3.bind(var1)(var8);
            var6 = var3.searchFetcher;
            var4 = null;
            if(!(var4 != var6)) { _fun0021_ip = 74; continue _fun0021 }
 52:
            var9 = var3.searchFetcher;
            var6 = var9.cancel;
            var6 = var6.bind(var9)();
            var3['searchFetcher'] = var4;
 74:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 9;
            var6 = var13[var6];
            var9 = var9.bind(var1)(var6);
            var6 = var9.getSearchType;
            var9 = var6.bind(var9)(var8);
            var12 = _closure1_slot1;
            var6 = 10;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var11 = var6.prototype;
            var11 = Object.create(var11, {constructor: {value: var6}});
            var17 = var11;
            var16 = var8;
            var15 = var9;
            var14 = var7;
            var6 = new var17[var6](var16, var15, var14, var13);
            var6 = var6 instanceof Object ? var6 : var11;
            var3['searchFetcher'] = var6;
            var11 = true;
            var3['isSearching'] = var11;
            var3['rawResults'] = var4;
            var3['analyticsId'] = var4;
            var11 = 11;
            var11 = var13[var11];
            var13 = var12.bind(var1)(var11);
            var12 = var13.omit;
            var11 = 'type';
            var11 = var12.bind(var13)(var7, var11);
            var3['query'] = var11;
            var11 = var7.offset;
            var12 = var4 != var11;
            var7 = 0;
            if(!var12) { _fun0021_ip = 228; continue _fun0021 }
 225:
            var7 = var11;
 228:
            var3['offset'] = var7;
            var7 = false;
            var3['showBlockedResults'] = var7;
            var3['searchResultsQueryString'] = var10;
            var7 = _closure1_slot22;
            var3 = {};
            var11 = 'SEARCH_ADD_HISTORY';
            var3['type'] = var11;
            var3['searchId'] = var8;
            var3['query'] = var10;
            var3 = var7.bind(var1)(var3);
            var3 = _closure1_slot11;
            if(!(var8 !== var3)) { _fun0021_ip = 307; continue _fun0021 }
 286:
            var3 = _closure1_slot12;
            var7 = var3.GUILD;
            var3 = null;
            if(!(var9 === var7)) { _fun0021_ip = 305; continue _fun0021 }
 302:
            var3 = var8;
 305:
            _fun0021_ip = 338; continue _fun0021;
 307:
            var7 = _closure1_slot9;
            var5 = var7.getChannel;
            var5 = var5.bind(var7)(var8);
            var7 = var4 == var5;
            var4 = undefined;
            if(var7) { _fun0021_ip = 335; continue _fun0021 }
 330:
            var4 = var5.guild_id;
 335:
            var3 = var4;
 338:
            var _closure2_slot1 = var3;
            var5 = var6.fetch;
            var4 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'SEARCH_FINISH';
                    var2['type'] = var6;
                    var7 = _closure2_slot0;
                    var2['searchId'] = var7;
                    var6 = _closure2_slot1;
                    var2['guildId'] = var6;
                    var6 = var5.body;
                    var6 = var6.analytics_id;
                    var2['analyticsId'] = var6;
                    var6 = var5.body;
                    var6 = var6.total_results;
                    var2['totalResults'] = var6;
                    var6 = var5.body;
                    var6 = var6.messages;
                    var2['messages'] = var6;
                    var6 = var5.body;
                    var7 = var6.threads;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0022_ip = 132; continue _fun0022 }
 128:
                    var7 = new Array(0);
 132:
                    var2['threads'] = var7;
                    var7 = var5.body;
                    var8 = var7.members;
                    if(!(var6 == var8)) { _fun0022_ip = 156; continue _fun0022 }
 152:
                    var8 = new Array(0);
 156:
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
                    var2['members'] = var6;
                    var6 = false;
                    var2['hasError'] = var6;
                    var6 = var5.body;
                    var6 = var6.doing_deep_historical_index;
                    var2['doingHistoricalIndex'] = var6;
                    var5 = var5.body;
                    var5 = var5.documents_indexed;
                    var2['documentsIndexed'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_INDEXING';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['searchId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_FINISH';
                var2['type'] = var5;
                var6 = _closure2_slot0;
                var2['searchId'] = var6;
                var5 = _closure2_slot1;
                var2['guildId'] = var5;
                var5 = new Array(0);
                var2['messages'] = var5;
                var5 = new Array(0);
                var2['threads'] = var5;
                var5 = new Array(0);
                var2['members'] = var5;
                var5 = 0;
                var2['totalResults'] = var5;
                var6 = null;
                var2['analyticsId'] = var6;
                var6 = true;
                var2['hasError'] = var6;
                var6 = false;
                var2['doingHistoricalIndex'] = var6;
                var2['documentsIndexed'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var2['SEARCH_START'] = var11;
    var11 = function guildIsIndexing(arg1) {
        var1 = arg1;
        var3 = var1.searchId;
        var2 = _closure1_slot20;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = true;
        var3['isIndexing'] = var2;
        var3['isHistoricalIndexing'] = var2;
        var2 = false;
        var3['isSearching'] = var2;
        return var1;
    };
    var2['SEARCH_INDEXING'] = var11;
    var11 = function finishedSearch(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot20;
            var3 = var2.searchId;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = false;
            var3['isSearching'] = var5;
            var3['isIndexing'] = var5;
            var4 = var2.doingHistoricalIndex;
            if(var4) { _fun0023_ip = 48; continue _fun0023 }
 46:
            var4 = false;
 48:
            var3['isHistoricalIndexing'] = var4;
            var4 = null;
            var3['searchFetcher'] = var4;
            var5 = var2.totalResults;
            var3['totalResults'] = var5;
            var5 = var2.hasError;
            var3['hasError'] = var5;
            var5 = var2.analyticsId;
            var3['analyticsId'] = var5;
            var5 = var2.documentsIndexed;
            var6 = var4 != var5;
            var5 = 0;
            if(!var6) { _fun0023_ip = 119; continue _fun0023 }
 113:
            var5 = var2.documentsIndexed;
 119:
            var3['documentsIndexed'] = var5;
            var5 = global;
            var6 = var5.Math;
            var5 = var6.random;
            var6 = var5.bind(var6)();
            var5 = 0.05;
            var5 = var6 < var5;
            var3['showNoResultsAlt'] = var5;
            var2 = var2.messages;
            var3['rawResults'] = var2;
            var2 = var3.query;
            if(!(var4 == var2)) { _fun0023_ip = 192; continue _fun0023 }
 184:
            var2 = true;
            var3['hasError'] = var2;
 192:
            return var1;
        }
    };
    var2['SEARCH_FINISH'] = var11;
    var11 = function handleSearchResultsQueryUpdate(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var6 = var1.searchId;
            var5 = var1.queryString;
            var2 = var1.query;
            var4 = var1.offset;
            var3 = _closure1_slot20;
            var1 = undefined;
            var3 = var3.bind(var1)(var6);
            var3['searchResultsQueryString'] = var5;
            var3['query'] = var2;
            var2 = null;
            var5 = var2 != var4;
            var2 = 0;
            if(!var5) { _fun0024_ip = 66; continue _fun0024 }
 63:
            var2 = var4;
 66:
            var3['offset'] = var2;
            return var1;
        }
    };
    var2['SEARCH_RESULTS_QUERY_UPDATE'] = var11;
    var2['SEARCH_EDITOR_STATE_CLEAR'] = var10;
    var10 = function ensureEditorState(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var3 = var1.searchId;
            var1 = null;
            if(!(var1 != var3)) { _fun0025_ip = 29; continue _fun0025 }
 15:
            var2 = _closure1_slot20;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 29:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_ENSURE_SEARCH_STATE'] = var10;
    var10 = function setSearchState(arg1) {
        var1 = arg1;
        var4 = var1.searchId;
        var3 = var1.editorState;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2['editorState'] = var3;
        return var1;
    };
    var2['SEARCH_EDITOR_STATE_CHANGE'] = var10;
    var10 = function setShowBlockedResults(arg1) {
        var1 = arg1;
        var4 = var1.searchId;
        var3 = var1.showBlocked;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2['showBlockedResults'] = var3;
        return var1;
    };
    var2['SEARCH_SET_SHOW_BLOCKED_RESULTS'] = var10;
    var10 = function setShowNoResultsAlt(arg1) {
        var1 = arg1;
        var3 = var1.searchId;
        var2 = _closure1_slot20;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = global;
        var4 = var2.Math;
        var2 = var4.random;
        var4 = var2.bind(var4)();
        var2 = 0.05;
        var2 = var4 < var2;
        var3['showNoResultsAlt'] = var2;
        return var1;
    };
    var2['SEARCH_SET_SHOW_NO_RESULTS_ALT'] = var10;
    var10 = function handleSearchScreenOpen(arg1) {
        var1 = arg1;
        var3 = var1.searchId;
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_SCREEN_OPEN'] = var10;
    var10 = function handleChannelSelect(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.channelId;
            var1 = null;
            if(!(var1 == var3)) { _fun0026_ip = 107; continue _fun0026 }
 19:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var6.bind(var4)(var2);
            var6 = var7.getIsSearchDesktopXDMExperimentEnabled;
            var2 = {};
            var8 = 'SearchStore_handleChannelSelect';
            var2['location'] = var8;
            var8 = _closure1_slot16;
            var2['autoTrackExposure'] = var8;
            var6 = var6.bind(var7)(var2);
            var2 = _closure1_slot24;
            if(var6) { _fun0026_ip = 90; continue _fun0026 }
 83:
            var5 = var2.bind(var4)(var5);
            _fun0026_ip = 121; continue _fun0026;
 90:
            var1 = _closure1_slot12;
            var1 = var1.DMS;
            var1 = var2.bind(var4)(var1);
            _fun0026_ip = 121; continue _fun0026;
 107:
            var2 = _closure1_slot24;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 121:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleChannelToggleMembersSection() {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var3 = _closure1_slot18;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0027_ip = 38; continue _fun0027 }
 16:
            var4 = _closure1_slot23;
            var3 = {};
            var2 = _closure1_slot18;
            var3['searchId'] = var2;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 38:
            return var1;
        }
    };
    var2['CHANNEL_TOGGLE_MEMBERS_SECTION'] = var10;
    var10 = function clearSearchHistory(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var2 = var1.searchId;
            var1 = null;
            if(!(var1 != var2)) { _fun0028_ip = 82; continue _fun0028 }
 15:
            var1 = _closure1_slot17;
            var1 = delete var1[var2];
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var4 = var1.Storage;
            var3 = var4.set;
            var2 = _closure1_slot14;
            var1 = {};
            var5 = _closure1_slot17;
            var1['history'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0028_ip = 134; continue _fun0028;
 82:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = var1.Storage;
            var3 = var4.remove;
            var1 = _closure1_slot14;
            var1 = var3.bind(var4)(var1);
            var1 = {};
            _closure1_slot17 = var1;
 134:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_CLEAR_HISTORY'] = var10;
    var10 = function removeQueryFromHistory(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var2 = arg1;
            var3 = var2.searchId;
            var2 = var2.query;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot17;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0029_ip = 118; continue _fun0029 }
 37:
            var2 = _closure1_slot17;
            var6 = var2[var3];
            var4 = var6.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var4.bind(var6)(var1);
            var2[var3] = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var4 = var1.Storage;
            var3 = var4.set;
            var2 = _closure1_slot14;
            var1 = {};
            var5 = _closure1_slot17;
            var1['history'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 118:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_REMOVE_HISTORY'] = var10;
    var2['SEARCH_ADD_HISTORY'] = var9;
    var4 = function handleLogOut() {
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var5 = var2.Storage;
        var4 = var5.remove;
        var2 = _closure1_slot14;
        var2 = var4.bind(var5)(var2);
        var2 = {};
        _closure1_slot17 = var2;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SearchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();