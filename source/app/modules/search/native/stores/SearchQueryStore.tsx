// app/modules/search/native/stores/SearchQueryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function defaultStatesAreEqual(arg1, arg2) {
        var2 = arg1;
        var1 = arg2;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot8 = var1;
    var7 = function subscribeState(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg4;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var5 = _closure1_slot7;
            var4 = var5.subscribe;
            var3 = {};
            var2 = null;
            var10 = var2 == var7;
            var6 = undefined;
            var8 = undefined;
            if(var10) { _fun0001_ip = 53; continue _fun0001 }
 47:
            var8 = var7.equalityFn;
 53:
            if(!(var2 == var8)) { _fun0001_ip = 83; continue _fun0001 }
 57:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 7;
            var9 = var11[var9];
            var9 = var10.bind(var6)(var9);
            var8 = var9.shallow;
 83:
            var3['equalityFn'] = var8;
            var8 = var2 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 103; continue _fun0001 }
 97:
            var6 = var7.fireImmediately;
 103:
            var2 = var2 != var6;
            if(!var2) { _fun0001_ip = 113; continue _fun0001 }
 110:
            var2 = var6;
 113:
            var3['fireImmediately'] = var2;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.states;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var4 = undefined;
                    var6 = var2.bind(var4)(var1);
                    var3 = var6.getSearchContextId;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var6)(var1);
                    var1 = var5.get;
                    var3 = var1.bind(var5)(var3);
                    var1 = null;
                    var5 = var1 != var3;
                    if(!var5) { _fun0002_ip = 80; continue _fun0002 }
 71:
                    var2 = _closure2_slot1;
                    var1 = var2.bind(var4)(var3);
 80:
                    return var1;
                }
            };
            var1 = arg3;
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var2);
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var8 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.createZustandStore;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot5 = var2;
    var2 = function SearchQueryStateManager(arg1) {
        var3 = this;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot3;
        var5 = _closure1_slot10;
        var1 = undefined;
        var5 = var6.bind(var1)(var3, var5);
        var5 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0003_ip = 11; continue _fun0003 }
 9:
                var4 = false;
 11:
                var1 = _closure2_slot0;
                var3 = var1.tagsManager;
                var1 = var3.getQueryString;
                var6 = var1.bind(var3)(var4);
                var3 = var6.length;
                var1 = 0;
                if(!(var1 === var3)) { _fun0003_ip = 58; continue _fun0003 }
 46:
                var1 = _closure2_slot0;
                var1 = var1.textInputValue;
                _fun0003_ip = 96; continue _fun0003;
 58:
                var2 = _closure2_slot0;
                var5 = var2.textInputValue;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = ' ';
                var1 = var4.bind(var3)(var6, var2, var5);
 96:
                return var1;
            }
        };
        var3['getQueryString'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var1 = var1.textInputValue;
            return var1;
        };
        var3['getTextInputValue'] = var5;
        var5 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0004_ip = 11; continue _fun0004 }
 9:
                var3 = false;
 11:
                var2 = _closure2_slot0;
                var4 = arg1;
                var2['textInputValue'] = var4;
                var2['textInputChangedFromInput'] = var3;
                return var1;
            }
        };
        var3['setTextInputValue'] = var5;
        var5 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure2_slot0;
                var3 = var1.textInputValue;
                var1 = var3.trim;
                var1 = var1.bind(var3)();
                var3 = var1.length;
                var1 = 0;
                var1 = var1 === var3;
                if(!var1) { _fun0005_ip = 60; continue _fun0005 }
 37:
                var2 = _closure2_slot0;
                var3 = var2.tagsManager;
                var2 = var3.hasUserAddedTags;
                var2 = var2.bind(var3)();
                var1 = !var2;
 60:
                return var1;
            }
        };
        var3['isInitialSearchQuery'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var1 = var1.searchResultsQuery;
            return var1;
        };
        var3['getSearchResultsQuery'] = var5;
        var5 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var2['searchResultsQuery'] = var1;
            var1 = undefined;
            return var1;
        };
        var3['setSearchResultsQuery'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var2 = var1.textInputValue;
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            var2 = var1.length;
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        };
        var3['isTextInputValueEmpty'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var1 = var1.textInputChangedFromInput;
            return var1;
        };
        var3['getTextValueChangedFromInput'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var2 = var1.tagsManager;
            var1 = var2.hasUserAddedTags;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['hasUserAddedTags'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var2 = var1.tagsManager;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['getTags'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var2 = var1.tagsManager;
            var1 = var2.getPrefixTag;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['getPrefixTag'] = var5;
        var5 = function() {
            var2 = _closure2_slot0;
            var1 = var2.getPrefixTag;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var3['isAutocompleteVisible'] = var5;
        var5 = function(arg1) {
            var1 = _closure2_slot0;
            var3 = var1.tagsManager;
            var2 = var3.set;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['setTags'] = var5;
        var5 = function(arg1) {
            var1 = _closure2_slot0;
            var3 = var1.tagsManager;
            var2 = var3.add;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['addTag'] = var5;
        var5 = function(arg1) {
            var1 = _closure2_slot0;
            var3 = var1.tagsManager;
            var2 = var3.removeAtIndex;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['removeTag'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var2 = var1.tagsManager;
            var1 = var2.removeAnyPrefixTags;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var3['removePrefixTags'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var2 = var1.tagsManager;
            var1 = var2.getChannelIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['getChannelIds'] = var5;
        var5 = function(arg1) {
            var1 = _closure2_slot0;
            var3 = var1.tagsManager;
            var2 = var3.getUserIds;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['getUserIds'] = var5;
        var5 = function() {
            var1 = _closure2_slot0;
            var2 = var1.tagsManager;
            var1 = var2.isEmpty;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['isTagsEmpty'] = var5;
        var4 = function() {
            var1 = _closure2_slot0;
            var2 = _closure1_slot5;
            var1['textInputValue'] = var2;
            var3 = false;
            var1['textInputChangedFromInput'] = var3;
            var1['searchResultsQuery'] = var2;
            var2 = var1.tagsManager;
            var1 = var2.reset;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var3['reset'] = var4;
        var4 = _closure1_slot5;
        var3['textInputValue'] = var4;
        var5 = false;
        var3['textInputChangedFromInput'] = var5;
        var3['searchResultsQuery'] = var4;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 5;
        var2 = var5[var2];
        var5 = var4.bind(var1)(var2);
        var2 = var5.prototype;
        var4 = Object.create(var2, {constructor: {value: var5}});
        var8 = arg1;
        var9 = var4;
        var2 = new var9[var5](var8, var7);
        var2 = var2 instanceof Object ? var2 : var4;
        var3['tagsManager'] = var2;
        return var1;
    };
    var _closure1_slot10 = var2;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = function() {
        var1 = {};
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['states'] = var2;
        return var1;
    };
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var8 = function useState(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var6 = var1.states;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var7 = var2.bind(var3)(var1);
                var5 = var7.getSearchContextId;
                var2 = _closure2_slot0;
                var5 = var5.bind(var7)(var2);
                var2 = var6.get;
                var2 = var2.bind(var6)(var5);
                var5 = null;
                if(!(var5 == var2)) { _fun0006_ip = 96; continue _fun0006 }
 68:
                var6 = _closure1_slot6;
                var8 = _closure2_slot0;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var2 = var4 instanceof Object ? var4 : var5;
 96:
                var1 = _closure2_slot1;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        var4 = var4.bind(var5)(var2, var3);
        var3 = _closure1_slot7;
        var2 = var3.useState;
        var1 = _closure1_slot8;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2['useState'] = var8;
    var8 = function getState(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.getSearchContextId;
            var6 = var2.bind(var4)(var5);
            var7 = _closure1_slot7;
            var4 = var7.getState;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.states;
                return var1;
            };
            var4 = var4.bind(var7)(var2);
            var2 = var4.get;
            var2 = var2.bind(var4)(var6);
            var4 = null;
            if(!(var4 == var2)) { _fun0007_ip = 106; continue _fun0007 }
 79:
            var1 = _closure1_slot6;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var9 = var4;
            var8 = var5;
            var1 = new var9[var1](var8, var7);
            var2 = var1 instanceof Object ? var1 : var4;
 106:
            var1 = arg2;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var2['getState'] = var8;
    var8 = function setState(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var8 = arg1;
            var4 = _closure1_slot7;
            var3 = var4.getState;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.states;
                return var1;
            };
            var7 = var3.bind(var4)(var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSearchContextId;
            var6 = var3.bind(var4)(var8);
            var3 = var7.get;
            var4 = var3.bind(var7)(var6);
            var3 = null;
            if(!(var3 == var4)) { _fun0008_ip = 106; continue _fun0008 }
 79:
            var3 = _closure1_slot6;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var11 = var5;
            var10 = var8;
            var3 = new var11[var3](var10, var9);
            var4 = var3 instanceof Object ? var3 : var5;
 106:
            var3 = arg2;
            var3 = var3.bind(var1)(var4);
            var3 = global;
            var3 = var3.Map;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var11 = var5;
            var10 = var7;
            var3 = new var11[var3](var10, var9);
            var5 = var3 instanceof Object ? var3 : var5;
            var3 = var5.set;
            var3 = var3.bind(var5)(var6, var4);
            var4 = _closure1_slot7;
            var3 = var4.setState;
            var2 = {};
            var2['states'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['setState'] = var8;
    var8 = function deleteState(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = _closure1_slot7;
            var3 = var4.getState;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.states;
                return var1;
            };
            var6 = var3.bind(var4)(var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getSearchContextId;
            var3 = arg1;
            var4 = var4.bind(var5)(var3);
            var3 = var6.has;
            var3 = var3.bind(var6)(var4);
            if(!var3) { _fun0009_ip = 139; continue _fun0009 }
 76:
            var3 = global;
            var3 = var3.Map;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var8 = var5;
            var7 = var6;
            var3 = new var8[var3](var7, var6);
            var5 = var3 instanceof Object ? var3 : var5;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            var4 = _closure1_slot7;
            var3 = var4.setState;
            var2 = {};
            var2['states'] = var5;
            var2 = var3.bind(var4)(var2);
 139:
            return var1;
        }
    };
    var2['deleteState'] = var8;
    var2['subscribeState'] = var7;
    var4 = function subscribeTextInputValue(arg1, arg2, arg3) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot9;
        var11 = undefined;
        var10 = arg1;
        var9 = function(arg1) {
            var3 = arg1;
            var1 = {};
            var2 = var3.getTextInputValue;
            var2 = var2.bind(var3)();
            var1['textInputValue'] = var2;
            var2 = var3.getTextValueChangedFromInput;
            var2 = var2.bind(var3)();
            var1['textInputChangedFromInput'] = var2;
            return var1;
        };
        var8 = function(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = arg1;
                var6 = arg2;
                var2 = null;
                if(!(var2 != var1)) { _fun0010_ip = 55; continue _fun0010 }
 12:
                var5 = _closure2_slot0;
                var4 = var1.textInputValue;
                var7 = var2 == var6;
                var3 = undefined;
                var2 = undefined;
                if(var7) { _fun0010_ip = 42; continue _fun0010 }
 36:
                var2 = var6.textInputValue;
 42:
                var1 = var1.textInputChangedFromInput;
                var1 = var5.bind(var3)(var4, var2, var1);
 55:
                var1 = undefined;
                return var1;
            }
        };
        var7 = arg3;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var2['subscribeTextInputValue'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/stores/SearchQueryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();