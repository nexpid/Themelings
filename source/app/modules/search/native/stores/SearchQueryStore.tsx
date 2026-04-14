// app/modules/search/native/stores/SearchQueryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function getState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var6 = _closure1_slot17;
            var5 = var6.get;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var3 = undefined;
            var7 = var7.bind(var3)(var1);
            var1 = var7.getSearchContextId;
            var1 = var1.bind(var7)(var4);
            var1 = var5.bind(var6)(var1);
            var5 = null;
            if(!(var5 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot18;
            var1 = var2.bind(var3)(var4);
case 6:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var9 = var8.bind(var1)(var2);
    var _closure1_slot6 = var9;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot11 = var10;
    var2 = var2.SearchQueryTagTypes;
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.SearchFilterAddLocations;
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.SearchTokenTypes;
    var _closure1_slot14 = var10;
    var2 = var2.SearchTypes;
    var _closure1_slot15 = var2;
    var2 = function SearchQueryStateManager(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = this;
            var _closure2_slot0 = var3;
            var7 = _closure1_slot7;
            var6 = _closure1_slot21;
            var1 = undefined;
            var6 = var7.bind(var1)(var3, var6);
            var6 = false;
            var3['isExplicitSearchSubmitted'] = var6;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arguments[0];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var4 = false;
case 8:
                    var1 = _closure2_slot0;
                    var3 = var1.tagsManager;
                    var1 = var3.getQueryString;
                    var6 = var1.bind(var3)(var4);
                    var3 = var6.length;
                    var1 = 0;
                    if(!(var1 === var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var1 = _closure2_slot0;
                    var1 = var1.textInputValue;
                    _fun0004_ip = 12; continue _fun0004;
case 10:
                    var2 = _closure2_slot0;
                    var5 = var2.textInputValue;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = ' ';
                    var1 = var4.bind(var3)(var6, var2, var5);
case 12:
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
                    if(!(var2 === var1)) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                    var2 = false;
case 8:
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
                    if(!var1) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                    var2 = _closure2_slot0;
                    var4 = var2.textInputValue;
                    var2 = var4.trim;
                    var2 = var2.bind(var4)();
                    var4 = var2.length;
                    var2 = 0;
                    var2 = var2 === var4;
                    if(!var2) { _fun0006_ip = 4; continue _fun0006 }
case 15:
                    var3 = _closure2_slot0;
                    var4 = var3.tagsManager;
                    var3 = var4.hasUserAddedTags;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
case 4:
                    var1 = var2;
case 13:
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
                    if(var2) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                    var4 = _closure2_slot0;
                    var3 = var4.isTextInputValueEmpty;
                    var2 = var3.bind(var4)();
case 16:
                    if(var2) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                    var2 = _closure2_slot0;
                    var1 = var2.textInputValue;
                    var2['draftTextInputValue'] = var1;
case 18:
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
                    if(!(var2 != var3)) { _fun0008_ip = 20; continue _fun0008 }
case 14:
                    var1 = _closure2_slot0;
                    var3 = var1.draftTextInputValue;
                    var1['textInputValue'] = var3;
                    var3 = false;
                    var1['textInputChangedFromInput'] = var3;
                    var1['draftTextInputValue'] = var2;
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['restoreDraftTextInputValue'] = var7;
            var4 = function() {
                var1 = _closure2_slot0;
                var3 = _closure1_slot11;
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
            var4 = _closure1_slot11;
            var3['textInputValue'] = var4;
            var3['textInputChangedFromInput'] = var6;
            var3['searchResultsQuery'] = var4;
            var6 = var5.type;
            var4 = _closure1_slot15;
            var4 = var4.THREAD;
            if(!(var4 !== var6)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = _closure1_slot15;
            var4 = var4.GUILD_CHANNEL;
            if(!(var4 !== var6)) { _fun0003_ip = 21; continue _fun0003 }
case 23:
            var4 = new Array(0);
            _fun0003_ip = 24; continue _fun0003;
case 21:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var6 = var5.channelId;
            var12 = var7.bind(var8)(var6);
            var6 = null;
            if(!(var6 != var12)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var7 = var12.isObfuscated;
            var7 = var7.bind(var12)();
            if(var7) { _fun0003_ip = 27; continue _fun0003 }
case 25:
            var7 = var6 != var12;
            var9 = undefined;
            if(!var7) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 11;
            var7 = var10[var7];
            var11 = var8.bind(var1)(var7);
            var10 = var11.computeChannelName;
            var8 = _closure1_slot10;
            var7 = _closure1_slot9;
            var9 = var10.bind(var11)(var12, var8, var7);
case 28:
            if(!(var6 != var9)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var6 = {};
            var7 = _closure1_slot12;
            var7 = var7.COMPLETE;
            var6['type'] = var7;
            var7 = _closure1_slot14;
            var7 = var7.FILTER_IN;
            var6['searchTokenType'] = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 12;
            var11 = var10[var7];
            var11 = var8.bind(var1)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var10[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.WNpFHa;
            var11 = var11.bind(var12)(var7);
            var7 = 13;
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
            var5 = _closure1_slot13;
            var5 = var5.CLIENT_AUTO_ADD;
            var6['location'] = var5;
            var5 = new Array(1);
            var5[0] = var6;
            _fun0003_ip = 32; continue _fun0003;
case 30:
            var5 = new Array(0);
case 32:
            var4 = var5;
            _fun0003_ip = 24; continue _fun0003;
case 27:
            var4 = new Array(0);
case 24:
            var3['initialTagsSnapshot'] = var4;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 14;
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
    var _closure1_slot21 = var2;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var14 = var9;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var7[var4];
    var10 = var6.bind(var1)(var4);
    var9 = var10.cachedFunction;
    var4 = function(arg1) {
        var3 = _closure1_slot16;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = arg1;
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var4 = var9.bind(var10)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function NativeSearchQueryStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 35; continue _fun0009;
case 33:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 35:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot8;
            var2 = _closure1_slot10;
            var1 = _closure1_slot9;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'getManager';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getQueryString';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arguments[1];
                var4 = undefined;
                if(!(var3 === var4)) { _fun0010_ip = 8; continue _fun0010 }
case 9:
                var3 = false;
case 8:
                var2 = _closure1_slot20;
                var1 = arg1;
                var2 = var2.bind(var4)(var1);
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isQueryStringEmpty';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.isQueryStringEmpty;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getTextInputValue';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isInitialSearchQuery';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.isInitialSearchQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSearchResultsQuery';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getSearchResultsQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isTextInputValueEmpty';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.isTextInputValueEmpty;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getTextValueChangedFromInput';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getTextValueChangedFromInput;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'hasUserAddedTags';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.hasUserAddedTags;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getTags';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getTags;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getPrefixTag';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getPrefixTag;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isAutocompleteVisible';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.isAutocompleteVisible;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getChannelIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getUserIds';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var2 = var3.getUserIds;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isTagsEmpty';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.isTagsEmpty;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'NativeSearchQueryStore';
    var9['displayName'] = var4;
    var4 = 17;
    var4 = var7[var4];
    var13 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleSearchQueryNativeUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var8 = var1.searchContext;
            var3 = var1.updater;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.getSearchContextId;
            var7 = var2.bind(var4)(var8);
            var4 = _closure1_slot17;
            var2 = var4.get;
            var2 = var2.bind(var4)(var7);
            var4 = null;
            if(!(var4 == var2)) { _fun0011_ip = 36; continue _fun0011 }
case 37:
            var4 = _closure1_slot16;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var11 = var6;
            var10 = var8;
            var4 = new var11[var4](var10, var9);
            var4 = var4 instanceof Object ? var4 : var6;
            var6 = _closure1_slot17;
            var5 = var6.set;
            var5 = var5.bind(var6)(var7, var4);
            var2 = var4;
case 36:
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4['SEARCH_QUERY_NATIVE_UPDATE'] = var10;
    var5 = function handleSearchQueryNativeDelete(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot17;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['SEARCH_QUERY_NATIVE_DELETE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/stores/SearchQueryStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SearchQueryStateManager'] = var2;
    return var1;
})();