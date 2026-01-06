// app/modules/search/native/SearchPlatformUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var14;
    var9 = function performKeyboardAwareNavigation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 8;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.getKeyboardIsOpen;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.isIOS;
            var5 = var5.bind(var6)();
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var4 = var4.bind(var1)();
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.dismissGlobalKeyboard;
            var3 = var3.bind(var4)();
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var2 = 100;
            var2 = var4.bind(var1)(var3, var2);
case 5:
            return var1;
        }
    };
    var8 = function delayUntilNavigationComplete(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var4 = var1.setTimeout;
        var1 = undefined;
        var3 = function() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var2 = 200;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = function getUrlIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var6 = null;
            if(!(var6 != var7)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 12;
            var2 = var2[var5];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.safeParseWithQuery;
            var2 = var2.bind(var4)(var7);
            if(!(var6 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var4 = var4.bind(var3)(var2);
            var2 = var4.isDiscordUrl;
            var2 = var2.bind(var4)(var7);
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 4:
            var2 = _closure1_slot13;
            var2 = var2.length;
            var5 = 0;
            var2 = var5 < var2;
            if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = _closure1_slot13;
            var2 = var2[var5];
            var8 = var2.REGEX;
            var2 = var2.Icon;
            var4 = var8.exec;
            var4 = var4.bind(var8)(var7);
            if(!(var6 == var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var5 + 1;
            var4 = _closure1_slot13;
            var4 = var4.length;
            if(var5 < var4) { _fun0002_ip = 12; continue _fun0002 }
case 11:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 11;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var4 = var4.LinkIcon;
            return var4;
case 13:
            return var2;
case 10:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ClydeIcon;
            return var2;
case 8:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.LinkIcon;
            return var1;
case 6:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.LinkIcon;
            return var1;
        }
    };
    var6 = function getGridItemBorderStyles(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.itemIndex;
            var1 = var2.numItems;
            var4 = var2.numColumns;
            var2 = global;
            var6 = var2.Math;
            var5 = var6.ceil;
            var1 = var1 / var4;
            var1 = var5.bind(var6)(var1);
            var6 = var2.Math;
            var5 = var6.floor;
            var2 = var3 / var4;
            var6 = var5.bind(var6)(var2);
            var2 = 1;
            var5 = var1 - var2;
            var8 = 0;
            if(!(var8 !== var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var7 = var4 - var2;
            if(!(var3 !== var7)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var7 = var3 % var4;
            if(!(var7 == var8)) { _fun0003_ip = 12; continue _fun0003 }
case 19:
            if(!(var6 !== var5)) { _fun0003_ip = 20; continue _fun0003 }
case 12:
            var1 = var1 * var4;
            var2 = var1 - var2;
            var5 = undefined;
            var1 = undefined;
            if(!(var3 === var2)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var2 = {};
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderBottomRightRadius'] = var3;
            var1 = var2;
case 21:
            _fun0003_ip = 23; continue _fun0003;
case 20:
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 14;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderBottomLeftRadius'] = var3;
            var1 = var2;
case 23:
            _fun0003_ip = 24; continue _fun0003;
case 17:
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 14;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderTopRightRadius'] = var3;
            var1 = var2;
case 24:
            _fun0003_ip = 25; continue _fun0003;
case 15:
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 14;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderTopLeftRadius'] = var3;
            var1 = var2;
case 25:
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var5 = function getMediaGridItemStyles(arg1) {
        var1 = arg1;
        var7 = var1.itemIndex;
        var4 = var1.numItems;
        var5 = var1.numColumns;
        var6 = var1.spacing;
        var1 = {};
        var8 = _closure1_slot17;
        var3 = {};
        var3['itemIndex'] = var7;
        var3['numItems'] = var4;
        var3['numColumns'] = var5;
        var4 = undefined;
        var10 = var8.bind(var4)(var3);
        var11 = var1;
        var3 = copyDataProperties(var11, var10);
        var3 = _closure1_slot18;
        var2 = {};
        var2['itemIndex'] = var7;
        var2['spacing'] = var6;
        var2['numColumns'] = var5;
        var10 = var3.bind(var4)(var2);
        var11 = var1;
        var2 = copyDataProperties(var11, var10);
        return var1;
    };
    var4 = function getGridItemSpacingStyles(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.itemIndex;
            var5 = var1.spacing;
            var4 = var1.numColumns;
            var1 = 1;
            var2 = var4 - var1;
            var2 = var5 * var2;
            var2 = var2 / var4;
            var3 = var3 % var4;
            var5 = 0;
            if(!(var5 !== var3)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var1 = var4 - var1;
            if(!(var1 !== var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var1 = {};
            var3 = 2;
            var3 = var2 / var3;
            var1['marginHorizontal'] = var3;
            return var1;
case 28:
            var1 = {};
            var1['marginStart'] = var2;
            return var1;
case 26:
            var1 = {};
            var1['marginEnd'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var2 = function toSearchBarTag(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.text;
        var1['id'] = var3;
        var2 = var2.text;
        var1['text'] = var2;
        return var1;
    };
    var1 = function _getLimit(arg1) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.min;
        var2 = _closure1_slot6;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function getInitialFetchLimit(arg1) {
        var3 = _closure1_slot19;
        var2 = _closure1_slot9;
        var1 = arg1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function getNextFetchLimit(arg1) {
        var3 = _closure1_slot19;
        var2 = _closure1_slot9;
        var1 = arg1;
        var2 = var2[var1];
        var1 = 2;
        var2 = var1 * var2;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function onInitialFetchMessagesSuccess(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.searchContext;
            var3 = var1.tabEntries;
            var2 = var3.every;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0006_ip = 30; continue _fun0006 }
case 32:
                    var2 = var5;
                    var3 = var4;
case 30:
                    if(var3) { _fun0006_ip = 9; continue _fun0006 }
case 33:
                    var1.return();
case 9:
                    var3 = var2.total_results;
                    var1 = 0;
                    var1 = var1 === var3;
                    if(var1) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var3 = var2.total_results;
                    var2 = null;
                    var1 = var2 == var3;
case 34:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 36:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackSearchEmptyMessageResult;
            var1 = {};
            var1['searchContext'] = var4;
            var1 = var2.bind(var3)(var1);
case 16:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function onFetchMessagesStart(arg1) {
        var2 = arg1;
        var4 = var2.searchContext;
        var2 = var2.searchQueryString;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = var3.setState;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.setSearchResultsQuery;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var4, var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot23 = var1;
    var20 = function fetchInitialMessages(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var2 = var10.type;
            var1 = _closure1_slot16;
            var1 = var1.THREAD;
            if(!(var2 === var1)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getCurrentConfig;
            var1 = {};
            var6 = 'ChannelActionButtons';
            var1['location'] = var6;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0007_ip = 39; continue _fun0007 }
case 37:
            var3 = _closure1_slot4;
            var2 = var3.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var3)(var10, var1);
            var6 = _closure1_slot4;
            var3 = var6.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var3.bind(var6)(var10, var2);
            var _closure2_slot1 = var6;
            if(var1) { _fun0007_ip = 40; continue _fun0007 }
case 5:
            var8 = _closure1_slot7;
            _fun0007_ip = 41; continue _fun0007;
case 40:
            var2 = var10.type;
            var1 = _closure1_slot16;
            var1 = var1.GUILD_CHANNEL;
            if(!(var1 !== var2)) { _fun0007_ip = 10; continue _fun0007 }
case 42:
            var1 = _closure1_slot16;
            var1 = var1.CHANNEL;
            if(!(var1 !== var2)) { _fun0007_ip = 10; continue _fun0007 }
case 43:
            var1 = _closure1_slot8;
            _fun0007_ip = 44; continue _fun0007;
case 10:
            var1 = _closure1_slot5;
case 44:
            var8 = var1;
case 41:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.getSearchTabFetchId;
            var1 = 0;
            var1 = var8[var1];
            var9 = var2.bind(var3)(var10, var1, var6);
            var2 = _closure1_slot3;
            var1 = var2.getIsFetching;
            var1 = var1.bind(var2)(var9);
            if(var1) { _fun0007_ip = 39; continue _fun0007 }
case 45:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var11 = var3[var1];
            var12 = var2.bind(var7)(var11);
            var11 = var12.clearAllSearchMesssages;
            var11 = var11.bind(var12)();
            var11 = 16;
            var11 = var3[var11];
            var13 = var2.bind(var7)(var11);
            var12 = var13.trackSearchStarted;
            var11 = {};
            var11['searchContext'] = var10;
            var11 = var12.bind(var13)(var11);
            var1 = var3[var1];
            var3 = var2.bind(var7)(var1);
            var2 = var3.fetchTabMessages;
            var1 = {};
            var1['searchContext'] = var10;
            var1['searchTabs'] = var8;
            var1['searchQueryString'] = var6;
            var5 = function getId(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getSearchTabFetchId;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var1['getId'] = var5;
            var5 = _closure1_slot20;
            var1['getLimit'] = var5;
            var5 = _closure1_slot23;
            var1['onFetchStart'] = var5;
            var5 = _closure1_slot22;
            var1['onFetchSuccess'] = var5;
            var5 = {};
            var8 = _closure1_slot3;
            var6 = var8.getCursor;
            var8 = var6.bind(var8)(var9);
            var6 = null;
            var9 = var6 != var8;
            if(!var9) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var6 = var8;
case 46:
            var5['cursor'] = var6;
            var1['pagination'] = var5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 15;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var6 = var5.SearchResultExactCountEnabled;
            var5 = var6.getSetting;
            var5 = var5.bind(var6)();
            var1['trackExactTotalHits'] = var5;
            var4 = _closure1_slot15;
            var4 = var4.NEWEST;
            var1['searchMode'] = var4;
            var1 = var2.bind(var3)(var1);
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var20;
    var17 = function syncAutocomplete(arg1) {
        var8 = arg1;
        var4 = _closure1_slot4;
        var3 = var4.getState;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.getQueryString;
            var1 = true;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var3.bind(var4)(var8, var1);
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var7 = var4[var3];
        var1 = undefined;
        var9 = var6.bind(var1)(var7);
        var7 = var9.tokenizeQuery;
        var7 = var7.bind(var9)(var5);
        var3 = var4[var3];
        var10 = var6.bind(var1)(var3);
        var9 = var10.getSelectionScope;
        var3 = var5.length;
        var11 = 1;
        var6 = var3 - var11;
        var3 = var5.length;
        var3 = var3 - var11;
        var6 = var9.bind(var10)(var7, var6, var3);
        var3 = _closure1_slot1;
        var2 = 18;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.updateAutocompleteQuery;
        var2 = {};
        var2['searchContext'] = var8;
        var2['tokens'] = var7;
        var2['cursorScope'] = var6;
        var2['queryString'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var1 = global;
    var16 = var1.Object;
    var12 = var16.defineProperty;
    var11 = {};
    var1 = true;
    var11['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var16)(var3, var1, var11);
    var1 = 0;
    var11 = var14[var1];
    var1 = undefined;
    var11 = var15.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var11 = var14[var11];
    var11 = var15.bind(var1)(var11);
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var14[var11];
    var11 = var13.bind(var1)(var11);
    var12 = var11.CHANNEL_SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot5 = var12;
    var12 = var11.MAX_SEARCH_RESULTS_LIMIT;
    var _closure1_slot6 = var12;
    var12 = var11.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot7 = var12;
    var12 = var11.SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot8 = var12;
    var12 = var11.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot9 = var12;
    var12 = var11.SearchFileTypes;
    var _closure1_slot10 = var12;
    var12 = var11.SearchLinkTypes;
    var _closure1_slot11 = var12;
    var11 = var11.SearchMediaTypes;
    var _closure1_slot12 = var11;
    var11 = 3;
    var11 = var14[var11];
    var11 = var13.bind(var1)(var11);
    var12 = var11.PLATFORM_REGEX_ICON_PAIRS;
    var _closure1_slot13 = var12;
    var16 = var11.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
    var11 = 4;
    var11 = var14[var11];
    var11 = var13.bind(var1)(var11);
    var12 = var11.MessageFlags;
    var _closure1_slot14 = var12;
    var12 = var11.SearchModes;
    var _closure1_slot15 = var12;
    var11 = var11.SearchTypes;
    var _closure1_slot16 = var11;
    var11 = {};
    var11['performKeyboardAwareNavigation'] = var9;
    var11['delayUntilNavigationComplete'] = var8;
    var11['getUrlIcon'] = var7;
    var11['getGridItemBorderStyles'] = var6;
    var11['getMediaGridItemStyles'] = var5;
    var11['getGridItemSpacingStyles'] = var4;
    var11['toSearchBarTag'] = var2;
    var11['fetchInitialMessages'] = var20;
    var12 = 19;
    var18 = var14[var12];
    var19 = var15.bind(var1)(var18);
    var18 = var19.debounce;
    var18 = var18.bind(var19)(var20, var16);
    var11['fetchInitialMessagesDebounced'] = var18;
    var18 = function fetchNextMessages(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var9 = arg1;
            var11 = arg2;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot4;
            var2 = var3.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var2.bind(var3)(var9, var1);
            var _closure2_slot1 = var7;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var4 = var3[var1];
            var8 = undefined;
            var10 = var2.bind(var8)(var4);
            var4 = var10.getSearchTabFetchId;
            var10 = var4.bind(var10)(var9, var11, var7);
            var4 = _closure1_slot20;
            var13 = var4.bind(var8)(var11);
            var1 = var3[var1];
            var2 = var2.bind(var8)(var1);
            var1 = var2.getSearchTabFetchId;
            var14 = var1.bind(var2)(var9, var11, var7);
            var2 = _closure1_slot3;
            var1 = var2.getIsInitialFetchComplete;
            var1 = var1.bind(var2)(var14);
            var4 = true;
            if(!var1) { _fun0008_ip = 48; continue _fun0008 }
case 49:
            var2 = _closure1_slot3;
            var1 = var2.getCursor;
            var2 = var1.bind(var2)(var14);
            var3 = _closure1_slot3;
            var1 = var3.getTotalCount;
            var12 = var1.bind(var3)(var14);
            var3 = _closure1_slot3;
            var1 = var3.getMessages;
            var3 = var1.bind(var3)(var14);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var1 = var15[var1];
            var1 = var14.bind(var8)(var1);
            var14 = var1.SearchResultExactCountEnabled;
            var1 = var14.getSetting;
            var1 = var1.bind(var14)();
            if(var1) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var1 = null;
            if(!(var1 != var12)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            if(!(!(var12 < var13))) { _fun0008_ip = 50; continue _fun0008 }
case 52:
            var1 = var1 != var2;
            _fun0008_ip = 54; continue _fun0008;
case 50:
            var13 = null;
            var2 = var13 != var2;
            if(!var2) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var2 = var13 != var12;
case 55:
            if(!var2) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var2 = var13 != var3;
case 57:
            if(!var2) { _fun0008_ip = 59; continue _fun0008 }
case 45:
            var3 = var3.length;
            var2 = var3 < var12;
case 59:
            var1 = var2;
case 54:
            var4 = var1;
case 48:
            var2 = _closure1_slot3;
            var1 = var2.getIsFetching;
            var2 = var1.bind(var2)(var10);
            var3 = _closure1_slot3;
            var1 = var3.getIsInitialFetchComplete;
            var3 = var1.bind(var3)(var10);
            var1 = !var4;
            if(!var4) { _fun0008_ip = 25; continue _fun0008 }
case 60:
            var1 = !var3;
case 25:
            if(var1) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            var1 = var2;
case 61:
            var1 = !var1;
            if(!var1) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var4 = var3.bind(var8)(var2);
            var3 = var4.fetchTabMessages;
            var2 = {};
            var2['searchContext'] = var9;
            var9 = new Array(1);
            var9[0] = var11;
            var2['searchTabs'] = var9;
            var2['searchQueryString'] = var7;
            var7 = _closure1_slot21;
            var2['getLimit'] = var7;
            var6 = function getId(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getSearchTabFetchId;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var2['getId'] = var6;
            var6 = _closure1_slot23;
            var2['onFetchStart'] = var6;
            var6 = arg3;
            var2['onFetchSuccess'] = var6;
            var6 = {};
            var9 = _closure1_slot3;
            var7 = var9.getCursor;
            var9 = var7.bind(var9)(var10);
            var7 = null;
            var10 = var7 != var9;
            if(!var10) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var7 = var9;
case 65:
            var6['cursor'] = var7;
            var2['pagination'] = var6;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 15;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var7 = var6.SearchResultExactCountEnabled;
            var6 = var7.getSetting;
            var6 = var6.bind(var7)();
            var2['trackExactTotalHits'] = var6;
            var5 = _closure1_slot15;
            var5 = var5.NEWEST;
            var2['searchMode'] = var5;
            var1 = var3.bind(var4)(var2);
case 63:
            return var1;
        }
    };
    var11['fetchNextMessages'] = var18;
    var11['syncAutocomplete'] = var17;
    var12 = var14[var12];
    var15 = var15.bind(var1)(var12);
    var12 = var15.debounce;
    var12 = var12.bind(var15)(var17, var16);
    var11['syncAutocompleteDebounced'] = var12;
    var12 = function navigateToSearchWithPrefetch(arg1, arg2) {
        var5 = arg1;
        var2 = arg2;
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 18;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var4);
        var4 = var6.initializeAutocomplete;
        var4 = var4.bind(var6)(var2);
        var3 = _closure1_slot24;
        var3 = var3.bind(var1)(var2);
        var4 = var5.navigate;
        var3 = {};
        var3['searchContext'] = var2;
        var2 = 'search';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var11['navigateToSearchWithPrefetch'] = var12;
    var12 = 20;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/search/native/SearchPlatformUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var3['default'] = var11;
    var11 = function getMedia(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg2;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.getGuildIdFromSearchContext;
            var3 = arg1;
            var3 = var5.bind(var6)(var3);
            var5 = null;
            var5 = var5 != var3;
            if(!var5) { _fun0009_ip = 67; continue _fun0009 }
case 29:
            var1 = var3;
case 67:
            var _closure2_slot0 = var1;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var1 = 0;
                    var _closure3_slot1 = var1;
                    var5 = var6.attachments;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var4 = var5.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var7 = arg1;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var4 = 6;
                            var2 = var1[var4];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isThumbnailAttachment;
                            var2 = var2.bind(var3)(var7);
                            if(var2) { _fun0011_ip = 70; continue _fun0011 }
case 27:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isValidImageAttachment;
                            var2 = var2.bind(var3)(var7);
                            if(var2) { _fun0011_ip = 71; continue _fun0011 }
case 72:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isValidVideoAttachment;
                            var2 = var2.bind(var3)(var7);
                            if(!var2) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var10 = var3.bind(var1)(var2);
                            var9 = var10.extractMediaFromAttachment;
                            var13 = _closure3_slot0;
                            var11 = _closure2_slot0;
                            var12 = arg2;
                            var15 = var10;
                            var14 = var7;
                            var6 = var15[var9](var14, var13, var12, var11, var10);
                            var4 = null;
                            if(!(var4 != var6)) { _fun0011_ip = 70; continue _fun0011 }
case 20:
                            var5 = _closure2_slot1;
                            var4 = var5.push;
                            var2 = {};
                            var8 = _closure1_slot12;
                            var8 = var8.ATTACHMENT;
                            var2['type'] = var8;
                            var2['attachment'] = var7;
                            var7 = _closure3_slot0;
                            var8 = var7.id;
                            var2['messageId'] = var8;
                            var8 = var7.channel_id;
                            var2['channelId'] = var8;
                            var7 = var7.author;
                            var2['author'] = var7;
                            var7 = _closure3_slot1;
                            var2['mediaIndex'] = var7;
                            var2['sources'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure3_slot1;
                            var2 = var2 + 1;
                            _closure3_slot1 = var2;
case 70:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
case 68:
                    var4 = var6.embeds;
                    if(!(var1 != var4)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var2 = var4.forEach;
                    var1 = function(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var7 = arg1;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var4 = 6;
                            var2 = var1[var4];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isValidImageEmbed;
                            var2 = var2.bind(var3)(var7);
                            if(var2) { _fun0012_ip = 72; continue _fun0012 }
case 75:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isValidVideoEmbed;
                            var2 = var2.bind(var3)(var7);
                            if(!var2) { _fun0012_ip = 50; continue _fun0012 }
case 72:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var10 = var3.bind(var1)(var2);
                            var9 = var10.extractMediaFromEmbed;
                            var6 = _closure3_slot0;
                            var11 = _closure2_slot0;
                            var12 = arg2;
                            var16 = var10;
                            var15 = var7;
                            var14 = var6;
                            var13 = var6;
                            var6 = var16[var9](var15, var14, var13, var12, var11, var10);
                            var4 = null;
                            if(!(var4 != var6)) { _fun0012_ip = 50; continue _fun0012 }
case 76:
                            var5 = _closure2_slot1;
                            var4 = var5.push;
                            var2 = {};
                            var8 = _closure1_slot12;
                            var8 = var8.EMBED;
                            var2['type'] = var8;
                            var2['embed'] = var7;
                            var7 = _closure3_slot0;
                            var8 = var7.id;
                            var2['messageId'] = var8;
                            var8 = var7.channel_id;
                            var2['channelId'] = var8;
                            var7 = var7.author;
                            var2['author'] = var7;
                            var7 = _closure3_slot1;
                            var2['mediaIndex'] = var7;
                            var2['sources'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure3_slot1;
                            var2 = var2 + 1;
                            _closure3_slot1 = var2;
case 50:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var4)(var1);
case 73:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var5 = var8.hasFlag;
                    var4 = var6.flags;
                    var2 = _closure1_slot14;
                    var2 = var2.IS_VOICE_MESSAGE;
                    var2 = var5.bind(var8)(var4, var2);
                    if(!var2) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var5 = _closure2_slot1;
                    var4 = var5.push;
                    var2 = {};
                    var7 = _closure1_slot12;
                    var7 = var7.AUDIO;
                    var2['type'] = var7;
                    var7 = var6.id;
                    var2['messageId'] = var7;
                    var7 = var6.channel_id;
                    var2['channelId'] = var7;
                    var6 = var6.author;
                    var2['author'] = var6;
                    var6 = _closure3_slot1;
                    var2['mediaIndex'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure3_slot1;
                    var2 = var2 + 1;
                    _closure3_slot1 = var2;
case 77:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['getMedia'] = var11;
    var11 = function getFiles(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var4 = var3.attachments;
            var3 = null;
            if(!(var3 != var4)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = arg1;
                    var6 = arg2;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 6;
                    var2 = var1[var4];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isValidImageAttachment;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0014_ip = 81; continue _fun0014 }
case 82:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isValidVideoAttachment;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0014_ip = 81; continue _fun0014 }
case 34:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var9 = var3.bind(var1)(var2);
                    var4 = var9.hasFlag;
                    var2 = _closure2_slot0;
                    var3 = var2.flags;
                    var2 = _closure1_slot14;
                    var2 = var2.IS_VOICE_MESSAGE;
                    var10 = var4.bind(var9)(var3, var2);
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var9 = _closure1_slot10;
                    if(var10) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                    var10 = var9.ATTACHMENT;
                    var2['type'] = var10;
                    var10 = _closure2_slot0;
                    var11 = var10.id;
                    var2['messageId'] = var11;
                    var11 = var10.channel_id;
                    var2['channelId'] = var11;
                    var10 = var10.author;
                    var2['author'] = var10;
                    var2['fileIndex'] = var6;
                    var2['attachment'] = var5;
                    var10 = var3.bind(var4)(var2);
                    _fun0014_ip = 85; continue _fun0014;
case 83:
                    var9 = var9.AUDIO;
                    var2['type'] = var9;
                    var7 = _closure2_slot0;
                    var9 = var7.id;
                    var2['messageId'] = var9;
                    var9 = var7.channel_id;
                    var2['channelId'] = var9;
                    var7 = var7.author;
                    var2['author'] = var7;
                    var2['fileIndex'] = var6;
                    var2['attachment'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0014_ip = 85; continue _fun0014;
case 81:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var8 = _closure1_slot10;
                    var8 = var8.MEDIA_ATTACHMENT;
                    var2['type'] = var8;
                    var7 = _closure2_slot0;
                    var8 = var7.id;
                    var2['messageId'] = var8;
                    var8 = var7.channel_id;
                    var2['channelId'] = var8;
                    var7 = var7.author;
                    var2['author'] = var7;
                    var2['fileIndex'] = var6;
                    var2['attachment'] = var5;
                    var2 = var3.bind(var4)(var2);
case 85:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 79:
            return var1;
        }
    };
    var3['getFiles'] = var11;
    var10 = function getLinks(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var5 = arg2;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var4 = var7.getGuildIdFromSearchContext;
            var3 = arg1;
            var4 = var4.bind(var7)(var3);
            var3 = null;
            var7 = var3 != var4;
            if(!var7) { _fun0015_ip = 86; continue _fun0015 }
case 87:
            var1 = var4;
case 86:
            var _closure2_slot1 = var1;
            var1 = new Array(0);
            var _closure2_slot2 = var1;
            var4 = 0;
            var _closure2_slot3 = var4;
            var7 = var5.embeds;
            if(!(var3 != var7)) { _fun0015_ip = 88; continue _fun0015 }
case 89:
            var3 = var7.forEach;
            var2 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 6;
                    var2 = var1[var4];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isValidImageEmbed;
                    var2 = var2.bind(var3)(var6);
                    if(var2) { _fun0016_ip = 72; continue _fun0016 }
case 75:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isValidVideoEmbed;
                    var2 = var2.bind(var3)(var6);
                    if(!var2) { _fun0016_ip = 90; continue _fun0016 }
case 72:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var9 = var3.bind(var1)(var2);
                    var7 = var9.extractMediaFromEmbed;
                    var5 = _closure2_slot0;
                    var10 = _closure2_slot1;
                    var11 = arg2;
                    var15 = var9;
                    var14 = var6;
                    var13 = var5;
                    var12 = var5;
                    var7 = var15[var7](var14, var13, var12, var11, var10, var9);
                    var2 = null;
                    if(!(var2 != var7)) { _fun0016_ip = 90; continue _fun0016 }
case 91:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = {};
                    var8 = _closure1_slot11;
                    var8 = var8.EMBED;
                    var2['type'] = var8;
                    var8 = _closure2_slot0;
                    var9 = var8.id;
                    var2['messageId'] = var9;
                    var9 = var8.channel_id;
                    var2['channelId'] = var9;
                    var8 = var8.author;
                    var2['author'] = var8;
                    var8 = _closure2_slot3;
                    var2['linkIndex'] = var8;
                    var2['sources'] = var7;
                    var2['embed'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure2_slot3;
                    var2 = var2 + 1;
                    _closure2_slot3 = var2;
case 90:
                    return var1;
                }
            };
            var2 = var3.bind(var7)(var2);
case 88:
            var2 = var1.length;
            if(!(var4 === var2)) { _fun0015_ip = 92; continue _fun0015 }
case 93:
            var3 = var1.push;
            var2 = {};
            var6 = _closure1_slot11;
            var6 = var6.TEXT;
            var2['type'] = var6;
            var6 = var5.id;
            var2['messageId'] = var6;
            var6 = var5.channel_id;
            var2['channelId'] = var6;
            var5 = var5.author;
            var2['author'] = var5;
            var2['linkIndex'] = var4;
            var2 = var3.bind(var1)(var2);
case 92:
            return var1;
        }
    };
    var3['getLinks'] = var10;
    var3['performKeyboardAwareNavigation'] = var9;
    var3['delayUntilNavigationComplete'] = var8;
    var3['getUrlIcon'] = var7;
    var3['getGridItemBorderStyles'] = var6;
    var3['getMediaGridItemStyles'] = var5;
    var3['getGridItemSpacingStyles'] = var4;
    var3['toSearchBarTag'] = var2;
    return var1;
})();