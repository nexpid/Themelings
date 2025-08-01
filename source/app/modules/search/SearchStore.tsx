// app/modules/search/SearchStore.tsx
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getOrCreateSearchState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0002_ip = 48; continue _fun0002 }
 20:
            var4 = _closure1_slot11;
            var3 = {'searchId': null, 'editorState': null, 'showBlockedResults': false, 'showNoResultsAlt': false, 'searchResultsQueryString': null, 'searchResultsQuery': null, 'searchResultsOffset': null};
            var3['searchId'] = var2;
            var4[var2] = var3;
 48:
            var1 = _closure1_slot11;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function setCurrentSearchId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot13;
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
            var4 = _closure1_slot15;
            var3 = undefined;
            var3 = var4.bind(var3)(var2);
 49:
            _closure1_slot13 = var2;
            var1 = undefined;
            return var1;
 57:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var2 = null;
    var _closure1_slot13 = var2;
    var2 = 11;
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
                var1 = _closure1_slot14;
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
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var1 = _closure1_slot7;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCurrentSearchId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getEditorState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
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
        var1[2] = var5;
        var5 = {};
        var7 = 'shouldShowBlockedResults';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = _closure1_slot16;
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
                if(!var1) { _fun0006_ip = 40; continue _fun0006 }
 37:
                var1 = var2;
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'shouldShowNoResultsAlt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = _closure1_slot16;
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
                if(!var1) { _fun0007_ip = 40; continue _fun0007 }
 37:
                var1 = var2;
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSearchResultsQueryString';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
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
        var1[5] = var5;
        var5 = {};
        var7 = 'getSearchResultsQuery';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
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
        var1[6] = var5;
        var5 = {};
        var7 = 'getSearchResultsOffset';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot16;
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
        var1[7] = var5;
        var5 = {};
        var7 = 'hasSearchState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0008_ip = 27; continue _fun0008 }
 12:
                var2 = _closure1_slot11;
                var2 = var2[var4];
                var1 = var3 != var2;
 27:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SearchStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = true;
            _closure1_slot12 = var2;
            var3 = _closure1_slot13;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0009_ip = 73; continue _fun0009 }
 22:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getSearchType;
            var3 = _closure1_slot13;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot10;
            var3 = var3.CHANNEL;
            var2 = var4 === var3;
 73:
            if(!var2) { _fun0009_ip = 121; continue _fun0009 }
 76:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 10;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getIsSearchDesktopXDMExperimentEnabled;
            var3 = {};
            var6 = 'SearchStore_handleConnectionOpen';
            var3['location'] = var6;
            var2 = var4.bind(var5)(var3);
 121:
            if(!var2) { _fun0009_ip = 145; continue _fun0009 }
 124:
            var3 = _closure1_slot17;
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var6 = var1.searchId;
            var5 = var1.queryString;
            var2 = var1.query;
            var4 = var1.offset;
            var3 = _closure1_slot15;
            var1 = undefined;
            var3 = var3.bind(var1)(var6);
            var3['searchResultsQueryString'] = var5;
            var3['searchResultsQuery'] = var2;
            var2 = null;
            var5 = var2 != var4;
            var2 = 0;
            if(!var5) { _fun0010_ip = 66; continue _fun0010 }
 63:
            var2 = var4;
 66:
            var3['searchResultsOffset'] = var2;
            return var1;
        }
    };
    var2['SEARCH_RESULTS_QUERY_UPDATE'] = var9;
    var9 = function clearSearchState(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var2 = var1.searchId;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0011_ip = 38; continue _fun0011 }
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.searchId;
            var1 = null;
            if(!(var1 != var3)) { _fun0012_ip = 29; continue _fun0012 }
 15:
            var2 = _closure1_slot15;
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
        var2 = _closure1_slot15;
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
        var2 = _closure1_slot15;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2['showBlockedResults'] = var3;
        return var1;
    };
    var2['SEARCH_SET_SHOW_BLOCKED_RESULTS'] = var9;
    var9 = function setShowNoResultsAlt(arg1) {
        var1 = arg1;
        var3 = var1.searchId;
        var2 = _closure1_slot15;
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
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_SCREEN_OPEN'] = var9;
    var4 = function handleChannelSelect(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.channelId;
            var1 = null;
            if(!(var1 == var3)) { _fun0013_ip = 107; continue _fun0013 }
 19:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 10;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var6.bind(var4)(var2);
            var6 = var7.getIsSearchDesktopXDMExperimentEnabled;
            var2 = {};
            var8 = 'SearchStore_handleChannelSelect';
            var2['location'] = var8;
            var8 = _closure1_slot12;
            var2['autoTrackExposure'] = var8;
            var6 = var6.bind(var7)(var2);
            var2 = _closure1_slot17;
            if(var6) { _fun0013_ip = 90; continue _fun0013 }
 83:
            var5 = var2.bind(var4)(var5);
            _fun0013_ip = 121; continue _fun0013;
 90:
            var1 = _closure1_slot10;
            var1 = var1.DMS;
            var1 = var2.bind(var4)(var1);
            _fun0013_ip = 121; continue _fun0013;
 107:
            var2 = _closure1_slot17;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 121:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/SearchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();