// app/modules/search/native/stores/SearchQueryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function defaultStatesAreEqual(arg1, arg2) {
        var2 = arg1;
        var1 = arg2;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot15 = var1;
    var7 = function subscribeState(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg4;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var5 = _closure1_slot14;
            var4 = var5.subscribe;
            var3 = {};
            var2 = null;
            var10 = var2 == var7;
            var6 = undefined;
            var8 = undefined;
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var7.equalityFn;
case 2:
            if(!(var2 == var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 14;
            var9 = var11[var9];
            var9 = var10.bind(var6)(var9);
            var8 = var9.shallow;
case 4:
            var3['equalityFn'] = var8;
            var8 = var2 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var7.fireImmediately;
case 6:
            var2 = var2 != var6;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var6;
case 8:
            var3['fireImmediately'] = var2;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.states;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
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
                    if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure2_slot1;
                    var1 = var2.bind(var4)(var3);
case 10:
                    return var1;
                }
            };
            var1 = arg3;
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        }
    };
    var _closure1_slot16 = var7;
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
    var9 = var10.bind(var1)(var2);
    var2 = 1;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
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
    var2 = var10.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot8 = var10;
    var2 = var2.SearchQueryTagTypes;
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SearchFilterAddLocations;
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.SearchTokenTypes;
    var _closure1_slot11 = var10;
    var2 = var2.SearchTypes;
    var _closure1_slot12 = var2;
    var2 = function SearchQueryStateManager(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = this;
            var _closure2_slot0 = var3;
            var7 = _closure1_slot3;
            var6 = _closure1_slot17;
            var1 = undefined;
            var6 = var7.bind(var1)(var3, var6);
            var6 = false;
            var3['isExplicitSearchSubmitted'] = var6;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arguments[0];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var4 = false;
case 12:
                    var1 = _closure2_slot0;
                    var3 = var1.tagsManager;
                    var1 = var3.getQueryString;
                    var6 = var1.bind(var3)(var4);
                    var3 = var6.length;
                    var1 = 0;
                    if(!(var1 === var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var1 = _closure2_slot0;
                    var1 = var1.textInputValue;
                    _fun0004_ip = 16; continue _fun0004;
case 14:
                    var2 = _closure2_slot0;
                    var5 = var2.textInputValue;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = ' ';
                    var1 = var4.bind(var3)(var6, var2, var5);
case 16:
                    return var1;
                }
            };
            var3['getQueryString'] = var7;
            var7 = function() {
                var2 = _closure2_slot0;
                var1 = var2.getQueryString;
                var2 = var1.bind(var2)();
                var1 = var2.trim;
                var1 = var1.bind(var2)();
                var2 = var1.length;
                var1 = 0;
                var1 = var1 === var2;
                return var1;
            };
            var3['isQueryStringEmpty'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var1 = var1.textInputValue;
                return var1;
            };
            var3['getTextInputValue'] = var7;
            var7 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arguments[1];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var2 = false;
case 12:
                    var3 = _closure2_slot0;
                    var4 = arg1;
                    var3['textInputValue'] = var4;
                    var3['textInputChangedFromInput'] = var2;
                    var2 = var3.resetExplicitSearchSubmitted;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var3['setTextInputValue'] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.isExplicitSearchSubmitted;
                    var1 = !var1;
                    if(!var1) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var2 = _closure2_slot0;
                    var4 = var2.textInputValue;
                    var2 = var4.trim;
                    var2 = var2.bind(var4)();
                    var4 = var2.length;
                    var2 = 0;
                    var2 = var2 === var4;
                    if(!var2) { _fun0006_ip = 19; continue _fun0006 }
case 2:
                    var3 = _closure2_slot0;
                    var4 = var3.tagsManager;
                    var3 = var4.hasUserAddedTags;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
case 19:
                    var1 = var2;
case 17:
                    return var1;
                }
            };
            var3['isInitialSearchQuery'] = var7;
            var7 = function() {
                var2 = _closure2_slot0;
                var1 = true;
                var2['isExplicitSearchSubmitted'] = var1;
                var1 = undefined;
                return var1;
            };
            var3['markExplicitSearchSubmitted'] = var7;
            var7 = function() {
                var2 = _closure2_slot0;
                var1 = false;
                var2['isExplicitSearchSubmitted'] = var1;
                var1 = undefined;
                return var1;
            };
            var3['resetExplicitSearchSubmitted'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var1 = var1.searchResultsQuery;
                return var1;
            };
            var3['getSearchResultsQuery'] = var7;
            var7 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var2['searchResultsQuery'] = var1;
                var1 = undefined;
                return var1;
            };
            var3['setSearchResultsQuery'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var2 = var1.textInputValue;
                var1 = var2.trim;
                var1 = var1.bind(var2)();
                var2 = var1.length;
                var1 = 0;
                var1 = var1 === var2;
                return var1;
            };
            var3['isTextInputValueEmpty'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var1 = var1.textInputChangedFromInput;
                return var1;
            };
            var3['getTextValueChangedFromInput'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var2 = var1.tagsManager;
                var1 = var2.hasUserAddedTags;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3['hasUserAddedTags'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var2 = var1.tagsManager;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3['getTags'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var2 = var1.tagsManager;
                var1 = var2.getPrefixTag;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3['getPrefixTag'] = var7;
            var7 = function() {
                var2 = _closure2_slot0;
                var1 = var2.getPrefixTag;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3['isAutocompleteVisible'] = var7;
            var7 = function(arg1) {
                var2 = _closure2_slot0;
                var4 = var2.tagsManager;
                var3 = var4.set;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var1 = var2.resetExplicitSearchSubmitted;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var3['setTags'] = var7;
            var7 = function(arg1) {
                var2 = _closure2_slot0;
                var4 = var2.tagsManager;
                var3 = var4.add;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var1 = var2.resetExplicitSearchSubmitted;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var3['addTag'] = var7;
            var7 = function(arg1) {
                var2 = _closure2_slot0;
                var4 = var2.tagsManager;
                var3 = var4.removeAtIndex;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var1 = var2.resetExplicitSearchSubmitted;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var3['removeTag'] = var7;
            var7 = function() {
                var2 = _closure2_slot0;
                var3 = var2.tagsManager;
                var1 = var3.removeAnyPrefixTags;
                var1 = var1.bind(var3)();
                var1 = var2.resetExplicitSearchSubmitted;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var3['removePrefixTags'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var2 = var1.tagsManager;
                var1 = var2.getChannelIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3['getChannelIds'] = var7;
            var7 = function(arg1) {
                var1 = _closure2_slot0;
                var3 = var1.tagsManager;
                var2 = var3.getUserIds;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3['getUserIds'] = var7;
            var7 = function() {
                var1 = _closure2_slot0;
                var2 = var1.tagsManager;
                var1 = var2.isEmpty;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3['isTagsEmpty'] = var7;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.draftTextInputValue;
                    var2 = null;
                    var2 = var2 != var3;
                    if(var2) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                    var4 = _closure2_slot0;
                    var3 = var4.isTextInputValueEmpty;
                    var2 = var3.bind(var4)();
case 20:
                    if(var2) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var2 = _closure2_slot0;
                    var1 = var2.textInputValue;
                    var2['draftTextInputValue'] = var1;
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['saveDraftTextInputValue'] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.draftTextInputValue;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 24; continue _fun0008 }
case 18:
                    var1 = _closure2_slot0;
                    var3 = var1.draftTextInputValue;
                    var1['textInputValue'] = var3;
                    var3 = false;
                    var1['textInputChangedFromInput'] = var3;
                    var1['draftTextInputValue'] = var2;
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['restoreDraftTextInputValue'] = var7;
            var4 = function() {
                var1 = _closure2_slot0;
                var3 = _closure1_slot8;
                var1['textInputValue'] = var3;
                var2 = false;
                var1['textInputChangedFromInput'] = var2;
                var1['searchResultsQuery'] = var3;
                var3 = null;
                var1['draftTextInputValue'] = var3;
                var1['isExplicitSearchSubmitted'] = var2;
                var3 = var1.tagsManager;
                var2 = var3.set;
                var1 = var1.initialTagsSnapshot;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3['reset'] = var4;
            var4 = _closure1_slot8;
            var3['textInputValue'] = var4;
            var3['textInputChangedFromInput'] = var6;
            var3['searchResultsQuery'] = var4;
            var6 = var5.type;
            var4 = _closure1_slot12;
            var4 = var4.THREAD;
            if(!(var4 !== var6)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var4 = _closure1_slot12;
            var4 = var4.GUILD_CHANNEL;
            if(!(var4 !== var6)) { _fun0003_ip = 25; continue _fun0003 }
case 27:
            var4 = new Array(0);
            _fun0003_ip = 28; continue _fun0003;
case 25:
            var8 = _closure1_slot5;
            var7 = var8.getChannel;
            var6 = var5.channelId;
            var12 = var7.bind(var8)(var6);
            var6 = null;
            if(!(var6 != var12)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var7 = var12.isObfuscated;
            var7 = var7.bind(var12)();
            if(var7) { _fun0003_ip = 31; continue _fun0003 }
case 29:
            var7 = var6 != var12;
            var9 = undefined;
            if(!var7) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var7 = var10[var7];
            var11 = var8.bind(var1)(var7);
            var10 = var11.computeChannelName;
            var8 = _closure1_slot7;
            var7 = _closure1_slot6;
            var9 = var10.bind(var11)(var12, var8, var7);
case 32:
            if(!(var6 != var9)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var6 = {};
            var7 = _closure1_slot9;
            var7 = var7.COMPLETE;
            var6['type'] = var7;
            var7 = _closure1_slot11;
            var7 = var7.FILTER_IN;
            var6['searchTokenType'] = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 11;
            var11 = var10[var7];
            var11 = var8.bind(var1)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var10[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.WNpFHa;
            var11 = var11.bind(var12)(var7);
            var7 = 12;
            var7 = var10[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.quoteChannelName;
            var10 = var7.bind(var8)(var9);
            var7 = global;
            var7 = var7.HermesInternal;
            var9 = var7.concat;
            var8 = '';
            var7 = ': ';
            var7 = var9.bind(var8)(var11, var7, var10);
            var6['text'] = var7;
            var5 = var5.channelId;
            var6['channelId'] = var5;
            var5 = _closure1_slot10;
            var5 = var5.CLIENT_AUTO_ADD;
            var6['location'] = var5;
            var5 = new Array(1);
            var5[0] = var6;
            _fun0003_ip = 36; continue _fun0003;
case 34:
            var5 = new Array(0);
case 36:
            var4 = var5;
            _fun0003_ip = 28; continue _fun0003;
case 31:
            var4 = new Array(0);
case 28:
            var3['initialTagsSnapshot'] = var4;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var16 = var4;
            var2 = new var16[var2](var15);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['tagsManager'] = var2;
            var5 = var3.tagsManager;
            var4 = var5.set;
            var2 = var3.initialTagsSnapshot;
            var2 = var4.bind(var5)(var2);
            var2 = null;
            var3['draftTextInputValue'] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var2;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot13 = var2;
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
    var _closure1_slot14 = var2;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var6 = var1.states;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var7 = var2.bind(var3)(var1);
                var5 = var7.getSearchContextId;
                var2 = _closure2_slot0;
                var5 = var5.bind(var7)(var2);
                var2 = var6.get;
                var2 = var2.bind(var6)(var5);
                var5 = null;
                if(!(var5 == var2)) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                var6 = _closure1_slot13;
                var8 = _closure2_slot0;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var2 = var4 instanceof Object ? var4 : var5;
case 37:
                var1 = _closure2_slot1;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        var4 = var4.bind(var5)(var2, var3);
        var3 = _closure1_slot14;
        var2 = var3.useState;
        var1 = _closure1_slot15;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2['useState'] = var8;
    var8 = function getState(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.getSearchContextId;
            var6 = var2.bind(var4)(var5);
            var7 = _closure1_slot14;
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
            if(!(var4 == var2)) { _fun0010_ip = 39; continue _fun0010 }
case 17:
            var1 = _closure1_slot13;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var9 = var4;
            var8 = var5;
            var1 = new var9[var1](var8, var7);
            var2 = var1 instanceof Object ? var1 : var4;
case 39:
            var1 = arg2;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var2['getState'] = var8;
    var8 = function setState(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot14;
            var3 = var4.getState;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.states;
                return var1;
            };
            var7 = var3.bind(var4)(var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSearchContextId;
            var6 = var3.bind(var4)(var8);
            var3 = var7.get;
            var4 = var3.bind(var7)(var6);
            var3 = null;
            if(!(var3 == var4)) { _fun0011_ip = 39; continue _fun0011 }
case 17:
            var3 = _closure1_slot13;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var11 = var5;
            var10 = var8;
            var3 = new var11[var3](var10, var9);
            var4 = var3 instanceof Object ? var3 : var5;
case 39:
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
            var4 = _closure1_slot14;
            var3 = var4.setState;
            var2 = {};
            var2['states'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['setState'] = var8;
    var8 = function deleteState(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot14;
            var3 = var4.getState;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.states;
                return var1;
            };
            var6 = var3.bind(var4)(var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getSearchContextId;
            var3 = arg1;
            var4 = var4.bind(var5)(var3);
            var3 = var6.has;
            var3 = var3.bind(var6)(var4);
            if(!var3) { _fun0012_ip = 40; continue _fun0012 }
case 19:
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
            var4 = _closure1_slot14;
            var3 = var4.setState;
            var2 = {};
            var2['states'] = var5;
            var2 = var3.bind(var4)(var2);
case 40:
            return var1;
        }
    };
    var2['deleteState'] = var8;
    var2['subscribeState'] = var7;
    var4 = function subscribeTextInputValue(arg1, arg2, arg3) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot16;
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var2 = null;
                if(!(var2 != var1)) { _fun0013_ip = 22; continue _fun0013 }
case 41:
                var5 = _closure2_slot0;
                var4 = var1.textInputValue;
                var7 = var2 == var6;
                var3 = undefined;
                var2 = undefined;
                if(var7) { _fun0013_ip = 42; continue _fun0013 }
case 20:
                var2 = var6.textInputValue;
case 42:
                var1 = var1.textInputChangedFromInput;
                var1 = var5.bind(var3)(var4, var2, var1);
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var7 = arg3;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var2['subscribeTextInputValue'] = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/stores/SearchQueryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();