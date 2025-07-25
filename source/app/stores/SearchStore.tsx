// app/stores/SearchStore.tsx
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getOrCreateSearchState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0002_ip = 44; continue _fun0002 }
 20:
            var4 = _closure1_slot11;
            var3 = {'searchId': null, 'editorState': null, 'showBlockedResults': false, 'showNoResultsAlt': false, 'searchResultsQueryString': null, 'searchResultsQuery': null, 'searchResultsOffset': null};
            var3['searchId'] = var2;
            var4[var2] = var3;
 44:
            var1 = _closure1_slot11;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
            var2 = _closure1_slot11;
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
    var _closure1_slot18 = var1;
    var1 = function setCurrentSearchId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot15;
            if(!(var2 !== var3)) { _fun0004_ip = 57; continue _fun0004 }
 14:
            var5 = null;
            var3 = var5 != var2;
            if(!var3) { _fun0004_ip = 35; continue _fun0004 }
 23:
            var4 = _closure1_slot11;
            var4 = var4[var2];
            var3 = var5 == var4;
 35:
            if(!var3) { _fun0004_ip = 49; continue _fun0004 }
 38:
            var4 = _closure1_slot17;
            var3 = undefined;
            var3 = var4.bind(var3)(var2);
 49:
            _closure1_slot15 = var2;
            var1 = undefined;
            return var1;
 57:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SearchTypes;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = false;
    var _closure1_slot12 = var2;
    var _closure1_slot13 = var2;
    var2 = {};
    var _closure1_slot14 = var2;
    var2 = null;
    var _closure1_slot15 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var6 = this;
                var5 = var6.waitFor;
                var4 = _closure1_slot9;
                var2 = _closure1_slot8;
                var1 = _closure1_slot7;
                var1 = var5.bind(var6)(var4, var2, var1);
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 9;
                var2 = var1[var5];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var6 = var2.Storage;
                var4 = var6.get;
                var2 = 'SearchStore';
                var2 = var4.bind(var6)(var2);
                var6 = null;
                var7 = var6 == var2;
                var4 = undefined;
                if(var7) { _fun0006_ip = 92; continue _fun0006 }
 86:
                var4 = var2.history;
 92:
                if(!(var6 != var4)) { _fun0006_ip = 118; continue _fun0006 }
 96:
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
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var2 = arg1;
                            var3 = global;
                            var6 = var3.Array;
                            var5 = var6.isArray;
                            var4 = _closure4_slot0;
                            var4 = var4[var2];
                            var4 = var5.bind(var6)(var4);
                            if(!var4) { _fun0007_ip = 64; continue _fun0007 }
 35:
                            var5 = _closure4_slot0;
                            var7 = var5[var2];
                            var6 = var7.filter;
                            var4 = function(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                    var3 = arg1;
                                    var2 = 'string';
                                    var1 = typeof var3;
                                    var1 = var2 === var1;
                                    if(!var1) { _fun0008_ip = 27; continue _fun0008 }
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
                            if(!var3) { _fun0007_ip = 110; continue _fun0007 }
 91:
                            var4 = _closure4_slot0;
                            var4 = var4[var2];
                            var5 = var4.length;
                            var4 = 0;
                            var3 = var4 !== var5;
 110:
                            if(var3) { _fun0007_ip = 121; continue _fun0007 }
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
                _closure1_slot14 = var2;
 118:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.get;
                var2 = 'tokenized';
                var2 = var4.bind(var5)(var2);
                var4 = !var2;
                var2 = !var4;
                if(!var4) { _fun0006_ip = 168; continue _fun0006 }
 166:
                var2 = false;
 168:
                _closure1_slot12 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCurrentSearchId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isTokenized';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getEditorState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
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
        var1[3] = var5;
        var5 = {};
        var7 = 'getHistory';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot14;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'shouldShowBlockedResults';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = _closure1_slot18;
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
                if(!var1) { _fun0009_ip = 40; continue _fun0009 }
 37:
                var1 = var2;
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'shouldShowNoResultsAlt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var5 = _closure1_slot18;
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
                if(!var1) { _fun0010_ip = 40; continue _fun0010 }
 37:
                var1 = var2;
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSearchResultsQueryString';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
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
        var1[7] = var5;
        var5 = {};
        var7 = 'getSearchResultsQuery';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
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
        var1[8] = var5;
        var5 = {};
        var7 = 'getSearchResultsOffset';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.searchResultsOffset;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'hasSearchState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0011_ip = 27; continue _fun0011 }
 12:
                var2 = _closure1_slot11;
                var2 = var2[var4];
                var1 = var3 != var2;
 27:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SearchStore';
    var8['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var2 = true;
            _closure1_slot13 = var2;
            var3 = _closure1_slot15;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0012_ip = 73; continue _fun0012 }
 22:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getSearchType;
            var3 = _closure1_slot15;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot10;
            var3 = var3.CHANNEL;
            var2 = var4 === var3;
 73:
            if(!var2) { _fun0012_ip = 121; continue _fun0012 }
 76:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 11;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getIsSearchDesktopXDMExperimentEnabled;
            var3 = {};
            var6 = 'SearchStore_handleConnectionOpen';
            var3['location'] = var6;
            var2 = var4.bind(var5)(var3);
 121:
            if(!var2) { _fun0012_ip = 145; continue _fun0012 }
 124:
            var3 = _closure1_slot19;
            var1 = _closure1_slot10;
            var2 = var1.DMS;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 145:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleSearchResultsQueryUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var6 = var1.searchId;
            var5 = var1.queryString;
            var2 = var1.query;
            var4 = var1.offset;
            var3 = _closure1_slot17;
            var1 = undefined;
            var3 = var3.bind(var1)(var6);
            var3['searchResultsQueryString'] = var5;
            var3['searchResultsQuery'] = var2;
            var2 = null;
            var5 = var2 != var4;
            var2 = 0;
            if(!var5) { _fun0013_ip = 66; continue _fun0013 }
 63:
            var2 = var4;
 66:
            var3['searchResultsOffset'] = var2;
            return var1;
        }
    };
    var2['SEARCH_RESULTS_QUERY_UPDATE'] = var9;
    var9 = function clearSearchState(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var2 = var1.searchId;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0014_ip = 38; continue _fun0014 }
 26:
            var1 = _closure1_slot11;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 38:
            var1 = false;
            return var1;
        }
    };
    var2['SEARCH_EDITOR_STATE_CLEAR'] = var9;
    var9 = function ensureEditorState(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var3 = var1.searchId;
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 29; continue _fun0015 }
 15:
            var2 = _closure1_slot17;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 29:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_ENSURE_SEARCH_STATE'] = var9;
    var9 = function setSearchState(arg1) {
        var1 = arg1;
        var4 = var1.searchId;
        var3 = var1.editorState;
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2['editorState'] = var3;
        return var1;
    };
    var2['SEARCH_EDITOR_STATE_CHANGE'] = var9;
    var9 = function setShowBlockedResults(arg1) {
        var1 = arg1;
        var4 = var1.searchId;
        var3 = var1.showBlocked;
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2['showBlockedResults'] = var3;
        return var1;
    };
    var2['SEARCH_SET_SHOW_BLOCKED_RESULTS'] = var9;
    var9 = function setShowNoResultsAlt(arg1) {
        var1 = arg1;
        var3 = var1.searchId;
        var2 = _closure1_slot17;
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
    var2['SEARCH_SET_SHOW_NO_RESULTS_ALT'] = var9;
    var9 = function handleSearchScreenOpen(arg1) {
        var1 = arg1;
        var3 = var1.searchId;
        var2 = _closure1_slot19;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_SCREEN_OPEN'] = var9;
    var9 = function handleChannelSelect(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.channelId;
            var1 = null;
            if(!(var1 == var3)) { _fun0016_ip = 107; continue _fun0016 }
 19:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var6.bind(var4)(var2);
            var6 = var7.getIsSearchDesktopXDMExperimentEnabled;
            var2 = {};
            var8 = 'SearchStore_handleChannelSelect';
            var2['location'] = var8;
            var8 = _closure1_slot13;
            var2['autoTrackExposure'] = var8;
            var6 = var6.bind(var7)(var2);
            var2 = _closure1_slot19;
            if(var6) { _fun0016_ip = 90; continue _fun0016 }
 83:
            var5 = var2.bind(var4)(var5);
            _fun0016_ip = 121; continue _fun0016;
 90:
            var1 = _closure1_slot10;
            var1 = var1.DMS;
            var1 = var2.bind(var4)(var1);
            _fun0016_ip = 121; continue _fun0016;
 107:
            var2 = _closure1_slot19;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 121:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function clearSearchHistory(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var3 = var1.searchId;
            var1 = null;
            if(!(var1 != var3)) { _fun0017_ip = 84; continue _fun0017 }
 15:
            var2 = _closure1_slot14;
            var2 = delete var2[var3];
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = {};
            var1 = _closure1_slot14;
            var2['history'] = var1;
            var1 = 'SearchStore';
            var1 = var3.bind(var4)(var1, var2);
            _fun0017_ip = 138; continue _fun0017;
 84:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = var1.Storage;
            var3 = var4.remove;
            var1 = 'SearchStore';
            var1 = var3.bind(var4)(var1);
            var1 = {};
            _closure1_slot14 = var1;
 138:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_CLEAR_HISTORY'] = var9;
    var9 = function removeQueryFromHistory(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var4 = var1.searchId;
            var1 = var1.query;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot14;
            var5 = var3[var4];
            var3 = null;
            if(!(var3 != var5)) { _fun0018_ip = 120; continue _fun0018 }
 37:
            var3 = _closure1_slot14;
            var6 = var3[var4];
            var5 = var6.filter;
            var2 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var3[var4] = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = {};
            var1 = _closure1_slot14;
            var2['history'] = var1;
            var1 = 'SearchStore';
            var1 = var3.bind(var4)(var1, var2);
 120:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_REMOVE_HISTORY'] = var9;
    var9 = function addQueryToHistory(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var5 = var1.searchId;
            var2 = var1.query;
            var3 = 'string';
            var1 = typeof var2;
            if(!(var3 === var1)) { _fun0019_ip = 268; continue _fun0019 }
 28:
            var1 = var2.trim;
            var3 = var1.bind(var2)();
            var7 = '';
            if(!(var7 !== var3)) { _fun0019_ip = 268; continue _fun0019 }
 49:
            var2 = _closure1_slot14;
            var4 = var2[var5];
            var8 = null;
            if(!(var8 == var4)) { _fun0019_ip = 70; continue _fun0019 }
 66:
            var4 = new Array(0);
 70:
            var2[var5] = var4;
            var2 = var4.indexOf;
            var6 = var2.bind(var4)(var3);
            var2 = -1;
            var5 = var4;
            if(!(var2 === var6)) { _fun0019_ip = 157; continue _fun0019 }
 98:
            var2 = 0;
            var4 = var5[var2];
            if(!(var8 != var4)) { _fun0019_ip = 134; continue _fun0019 }
 108:
            var4 = var5[var2];
            if(!(var7 !== var4)) { _fun0019_ip = 134; continue _fun0019 }
 116:
            var7 = var3.startsWith;
            var4 = var5[var2];
            var4 = var7.bind(var3)(var4);
            if(var4) { _fun0019_ip = 151; continue _fun0019 }
 134:
            if(!(var6 < var2)) { _fun0019_ip = 183; continue _fun0019 }
 138:
            var4 = var5.unshift;
            var4 = var4.bind(var5)(var3);
            _fun0019_ip = 183; continue _fun0019;
 151:
            var5[var2] = var3;
            _fun0019_ip = 183; continue _fun0019;
 157:
            var4 = var5.splice;
            var2 = 1;
            var2 = var4.bind(var5)(var6, var2);
            var2 = var5.unshift;
            var2 = var2.bind(var5)(var3);
 183:
            var2 = var5.length;
            var4 = 5;
            if(!(var2 > var4)) { _fun0019_ip = 212; continue _fun0019 }
 195:
            var3 = var5.splice;
            var2 = var5.length;
            var2 = var3.bind(var5)(var4, var2);
 212:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = {};
            var1 = _closure1_slot14;
            var2['history'] = var1;
            var1 = 'SearchStore';
            var1 = var3.bind(var4)(var1, var2);
 268:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_ADD_HISTORY'] = var9;
    var4 = function handleLogOut() {
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var5 = var2.Storage;
        var4 = var5.remove;
        var2 = 'SearchStore';
        var2 = var4.bind(var5)(var2);
        var2 = {};
        _closure1_slot14 = var2;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SearchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();