// app/modules/search/native/SearchPlatformUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var15;
    var10 = function performKeyboardAwareNavigation(arg1) {
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
    var9 = function delayUntilNavigationComplete(arg1) {
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
    var8 = function getUrlIcon(arg1) {
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
            var2 = _closure1_slot14;
            var2 = var2.length;
            var5 = 0;
            var2 = var5 < var2;
            if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = _closure1_slot14;
            var2 = var2[var5];
            var8 = var2.REGEX;
            var2 = var2.Icon;
            var4 = var8.exec;
            var4 = var4.bind(var8)(var7);
            if(!(var6 == var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var5 + 1;
            var4 = _closure1_slot14;
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
    var7 = function getGridItemBorderStyles(arg1) {
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
    var _closure1_slot17 = var7;
    var6 = function getMediaGridItemStyles(arg1) {
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
    var5 = function getGridItemSpacingStyles(arg1) {
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
    var _closure1_slot18 = var5;
    var4 = function toSearchBarTag(arg1) {
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
            if(!var1) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var3 = undefined;
            var7 = var6.bind(var3)(var2);
            var6 = var7.trackSearchResultMessagesEmpty;
            var2 = {};
            var2['searchContext'] = var4;
            var2 = var6.bind(var7)(var2);
            var2 = _closure1_slot1;
            var1 = 17;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.trackSearchEmptyMessageResultMobile;
            var1 = {};
            var1['searchContext'] = var4;
            var1 = var2.bind(var3)(var1);
case 36:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function onFetchMessagesStart(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var5 = var2.searchContext;
            var2 = var2.searchQueryString;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot4;
            var4 = var6.setState;
            var3 = function(arg1) {
                var3 = arg1;
                var2 = var3.setSearchResultsQuery;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var6)(var5, var3);
            var4 = _closure1_slot4;
            var3 = var4.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.hasUserAddedTags;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var3.bind(var4)(var5, var1);
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 18;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.incrementSearchCount;
            var4 = var4.bind(var6)(var5, var3);
            if(!var3) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackSearchFiltersApplied;
            var2 = {};
            var2['searchContext'] = var5;
            var2 = var3.bind(var4)(var2);
case 38:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var21 = function fetchInitialMessages(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var2 = var10.type;
            var1 = _closure1_slot16;
            var1 = var1.THREAD;
            if(!(var2 === var1)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getCurrentConfig;
            var1 = {};
            var6 = 'ChannelActionButtons';
            var1['location'] = var6;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0008_ip = 42; continue _fun0008 }
case 40:
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
            var7 = var3.bind(var6)(var10, var2);
            var _closure2_slot1 = var7;
            if(var1) { _fun0008_ip = 43; continue _fun0008 }
case 5:
            var8 = _closure1_slot7;
            _fun0008_ip = 44; continue _fun0008;
case 43:
            var2 = var10.type;
            var1 = _closure1_slot16;
            var1 = var1.GUILD_CHANNEL;
            if(!(var1 !== var2)) { _fun0008_ip = 10; continue _fun0008 }
case 45:
            var1 = _closure1_slot16;
            var1 = var1.CHANNEL;
            if(!(var1 !== var2)) { _fun0008_ip = 10; continue _fun0008 }
case 46:
            var1 = _closure1_slot8;
            _fun0008_ip = 47; continue _fun0008;
case 10:
            var1 = _closure1_slot5;
case 47:
            var8 = var1;
case 44:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var6 = undefined;
            var3 = var2.bind(var6)(var1);
            var2 = var3.getSearchTabFetchId;
            var1 = 0;
            var1 = var8[var1];
            var9 = var2.bind(var3)(var10, var1, var7);
            var2 = _closure1_slot3;
            var1 = var2.getIsFetching;
            var1 = var1.bind(var2)(var9);
            if(var1) { _fun0008_ip = 42; continue _fun0008 }
case 48:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var11 = var3[var1];
            var12 = var2.bind(var6)(var11);
            var11 = var12.clearAllSearchMesssages;
            var11 = var11.bind(var12)();
            var11 = 18;
            var11 = var3[var11];
            var12 = var2.bind(var6)(var11);
            var11 = var12.refreshSearchQueryAnalyticsId;
            var11 = var11.bind(var12)(var10);
            var12 = _closure1_slot0;
            var11 = 16;
            var11 = var3[var11];
            var13 = var12.bind(var6)(var11);
            var12 = var13.trackSearchStarted;
            var11 = {};
            var11['searchContext'] = var10;
            var11 = var12.bind(var13)(var11);
            var11 = 17;
            var11 = var3[var11];
            var13 = var2.bind(var6)(var11);
            var12 = var13.trackSearchStartedMobile;
            var11 = {};
            var11['searchContext'] = var10;
            var11 = var12.bind(var13)(var11);
            var1 = var3[var1];
            var3 = var2.bind(var6)(var1);
            var2 = var3.fetchTabMessages;
            var1 = {};
            var1['searchContext'] = var10;
            var1['searchTabs'] = var8;
            var1['searchQueryString'] = var7;
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
            var7 = var8.getCursor;
            var8 = var7.bind(var8)(var9);
            var7 = null;
            var9 = var7 != var8;
            if(!var9) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var7 = var8;
case 49:
            var5['cursor'] = var7;
            var1['pagination'] = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 15;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.SearchResultExactCountEnabled;
            var4 = var5.getSetting;
            var4 = var4.bind(var5)();
            var1['trackExactTotalHits'] = var4;
            var1 = var2.bind(var3)(var1);
case 42:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var21;
    var18 = function syncAutocomplete(arg1) {
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
        var2 = 20;
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
    var2 = function navigateToSearch(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var6 = arg3;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 20;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var4);
            var4 = var7.initializeAutocomplete;
            var4 = var4.bind(var7)(var2);
            var4 = null;
            if(!(var4 != var6)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var6 = var6.prefetch;
            if(!var6) { _fun0009_ip = 51; continue _fun0009 }
case 53:
            var7 = _closure1_slot10;
            var6 = var2.type;
            var7 = var7[var6];
            var6 = 0;
            var8 = var7[var6];
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var9 = 22;
            var9 = var7[var9];
            var10 = var6.bind(var1)(var9);
            var9 = var4 != var8;
            var13 = var2.type;
            var4 = global;
            var4 = var4.HermesInternal;
            var12 = var4.concat;
            var11 = '[SearchPlatformUtils] Initial tab missing for search context type: ';
            var4 = '.';
            var4 = var12.bind(var11)(var13, var4);
            var4 = var10.bind(var1)(var9, var4);
            var4 = 18;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.initialize;
            var4 = {};
            var4['searchContext'] = var2;
            var4['initialTab'] = var8;
            var8 = true;
            var4['initializeSearchQueryId'] = var8;
            var4 = var6.bind(var7)(var4);
            var3 = _closure1_slot24;
            var3 = var3.bind(var1)(var2);
case 51:
            var4 = var5.navigate;
            var3 = {};
            var3['searchContext'] = var2;
            var2 = 'search';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var1 = global;
    var17 = var1.Object;
    var13 = var17.defineProperty;
    var12 = {};
    var1 = true;
    var12['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var17)(var3, var1, var12);
    var1 = 0;
    var12 = var15[var1];
    var1 = undefined;
    var12 = var16.bind(var1)(var12);
    var _closure1_slot3 = var12;
    var12 = 1;
    var12 = var15[var12];
    var12 = var16.bind(var1)(var12);
    var _closure1_slot4 = var12;
    var12 = 2;
    var12 = var15[var12];
    var12 = var14.bind(var1)(var12);
    var13 = var12.CHANNEL_SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot5 = var13;
    var13 = var12.MAX_SEARCH_RESULTS_LIMIT;
    var _closure1_slot6 = var13;
    var13 = var12.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot7 = var13;
    var13 = var12.SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot8 = var13;
    var13 = var12.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot9 = var13;
    var13 = var12.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot10 = var13;
    var13 = var12.SearchFileTypes;
    var _closure1_slot11 = var13;
    var13 = var12.SearchLinkTypes;
    var _closure1_slot12 = var13;
    var12 = var12.SearchMediaTypes;
    var _closure1_slot13 = var12;
    var12 = 3;
    var12 = var15[var12];
    var12 = var14.bind(var1)(var12);
    var13 = var12.PLATFORM_REGEX_ICON_PAIRS;
    var _closure1_slot14 = var13;
    var17 = var12.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
    var12 = 4;
    var12 = var15[var12];
    var12 = var14.bind(var1)(var12);
    var13 = var12.MessageFlags;
    var _closure1_slot15 = var13;
    var12 = var12.SearchTypes;
    var _closure1_slot16 = var12;
    var12 = {};
    var12['performKeyboardAwareNavigation'] = var10;
    var12['delayUntilNavigationComplete'] = var9;
    var12['getUrlIcon'] = var8;
    var12['getGridItemBorderStyles'] = var7;
    var12['getMediaGridItemStyles'] = var6;
    var12['getGridItemSpacingStyles'] = var5;
    var12['toSearchBarTag'] = var4;
    var12['fetchInitialMessages'] = var21;
    var13 = 21;
    var19 = var15[var13];
    var20 = var16.bind(var1)(var19);
    var19 = var20.debounce;
    var19 = var19.bind(var20)(var21, var17);
    var12['fetchInitialMessagesDebounced'] = var19;
    var19 = function fetchNextMessages(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
            var8 = var2.bind(var3)(var9, var1);
            var _closure2_slot1 = var8;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var4 = var3[var1];
            var7 = undefined;
            var10 = var2.bind(var7)(var4);
            var4 = var10.getSearchTabFetchId;
            var10 = var4.bind(var10)(var9, var11, var8);
            var4 = _closure1_slot20;
            var13 = var4.bind(var7)(var11);
            var1 = var3[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.getSearchTabFetchId;
            var14 = var1.bind(var2)(var9, var11, var8);
            var2 = _closure1_slot3;
            var1 = var2.getIsInitialFetchComplete;
            var1 = var1.bind(var2)(var14);
            var4 = true;
            if(!var1) { _fun0010_ip = 54; continue _fun0010 }
case 55:
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
            var1 = var14.bind(var7)(var1);
            var14 = var1.SearchResultExactCountEnabled;
            var1 = var14.getSetting;
            var1 = var1.bind(var14)();
            if(var1) { _fun0010_ip = 56; continue _fun0010 }
case 57:
            var1 = null;
            if(!(var1 != var12)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            if(!(!(var12 < var13))) { _fun0010_ip = 56; continue _fun0010 }
case 58:
            var1 = var1 != var2;
            _fun0010_ip = 60; continue _fun0010;
case 56:
            var13 = null;
            var2 = var13 != var2;
            if(!var2) { _fun0010_ip = 61; continue _fun0010 }
case 62:
            var2 = var13 != var12;
case 61:
            if(!var2) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var2 = var13 != var3;
case 63:
            if(!var2) { _fun0010_ip = 65; continue _fun0010 }
case 48:
            var3 = var3.length;
            var2 = var3 < var12;
case 65:
            var1 = var2;
case 60:
            var4 = var1;
case 54:
            var2 = _closure1_slot3;
            var1 = var2.getIsFetching;
            var2 = var1.bind(var2)(var10);
            var3 = _closure1_slot3;
            var1 = var3.getIsInitialFetchComplete;
            var3 = var1.bind(var3)(var10);
            var1 = !var4;
            if(!var4) { _fun0010_ip = 25; continue _fun0010 }
case 66:
            var1 = !var3;
case 25:
            if(var1) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var1 = var2;
case 67:
            var1 = !var1;
            if(!var1) { _fun0010_ip = 69; continue _fun0010 }
case 70:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.fetchTabMessages;
            var2 = {};
            var2['searchContext'] = var9;
            var9 = new Array(1);
            var9[0] = var11;
            var2['searchTabs'] = var9;
            var2['searchQueryString'] = var8;
            var8 = _closure1_slot21;
            var2['getLimit'] = var8;
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
            var8 = var9.getCursor;
            var9 = var8.bind(var9)(var10);
            var8 = null;
            var10 = var8 != var9;
            if(!var10) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var8 = var9;
case 71:
            var6['cursor'] = var8;
            var2['pagination'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 15;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var6 = var5.SearchResultExactCountEnabled;
            var5 = var6.getSetting;
            var5 = var5.bind(var6)();
            var2['trackExactTotalHits'] = var5;
            var1 = var3.bind(var4)(var2);
case 69:
            return var1;
        }
    };
    var12['fetchNextMessages'] = var19;
    var12['syncAutocomplete'] = var18;
    var13 = var15[var13];
    var16 = var16.bind(var1)(var13);
    var13 = var16.debounce;
    var13 = var13.bind(var16)(var18, var17);
    var12['syncAutocompleteDebounced'] = var13;
    var12['navigateToSearch'] = var2;
    var13 = 23;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/search/native/SearchPlatformUtils.tsx';
    var13 = var14.bind(var15)(var13);
    var3['default'] = var12;
    var12 = function getMedia(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
            if(!var5) { _fun0011_ip = 73; continue _fun0011 }
case 29:
            var1 = var3;
case 73:
            var _closure2_slot0 = var1;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var1 = 0;
                    var _closure3_slot1 = var1;
                    var5 = var6.attachments;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                    var4 = var5.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                            if(var2) { _fun0013_ip = 76; continue _fun0013 }
case 27:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isValidImageAttachment;
                            var2 = var2.bind(var3)(var7);
                            if(var2) { _fun0013_ip = 77; continue _fun0013 }
case 78:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isValidVideoAttachment;
                            var2 = var2.bind(var3)(var7);
                            if(!var2) { _fun0013_ip = 76; continue _fun0013 }
case 77:
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
                            if(!(var4 != var6)) { _fun0013_ip = 76; continue _fun0013 }
case 20:
                            var5 = _closure2_slot1;
                            var4 = var5.push;
                            var2 = {};
                            var8 = _closure1_slot13;
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
case 76:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
case 74:
                    var4 = var6.embeds;
                    if(!(var1 != var4)) { _fun0012_ip = 79; continue _fun0012 }
case 52:
                    var2 = var4.forEach;
                    var1 = function(arg1, arg2) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
                            if(var2) { _fun0014_ip = 78; continue _fun0014 }
case 80:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isValidVideoEmbed;
                            var2 = var2.bind(var3)(var7);
                            if(!var2) { _fun0014_ip = 56; continue _fun0014 }
case 78:
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
                            if(!(var4 != var6)) { _fun0014_ip = 56; continue _fun0014 }
case 81:
                            var5 = _closure2_slot1;
                            var4 = var5.push;
                            var2 = {};
                            var8 = _closure1_slot13;
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
case 56:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var4)(var1);
case 79:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var5 = var8.hasFlag;
                    var4 = var6.flags;
                    var2 = _closure1_slot15;
                    var2 = var2.IS_VOICE_MESSAGE;
                    var2 = var5.bind(var8)(var4, var2);
                    if(!var2) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                    var5 = _closure2_slot1;
                    var4 = var5.push;
                    var2 = {};
                    var7 = _closure1_slot13;
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
case 82:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['getMedia'] = var12;
    var12 = function getFiles(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var4 = var3.attachments;
            var3 = null;
            if(!(var3 != var4)) { _fun0015_ip = 84; continue _fun0015 }
case 85:
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
                    if(var2) { _fun0016_ip = 86; continue _fun0016 }
case 87:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isValidVideoAttachment;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0016_ip = 86; continue _fun0016 }
case 34:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var9 = var3.bind(var1)(var2);
                    var4 = var9.hasFlag;
                    var2 = _closure2_slot0;
                    var3 = var2.flags;
                    var2 = _closure1_slot15;
                    var2 = var2.IS_VOICE_MESSAGE;
                    var10 = var4.bind(var9)(var3, var2);
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var9 = _closure1_slot11;
                    if(var10) { _fun0016_ip = 88; continue _fun0016 }
case 89:
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
                    _fun0016_ip = 90; continue _fun0016;
case 88:
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
                    _fun0016_ip = 90; continue _fun0016;
case 86:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var8 = _closure1_slot11;
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
case 90:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 84:
            return var1;
        }
    };
    var3['getFiles'] = var12;
    var11 = function getLinks(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
            if(!var7) { _fun0017_ip = 91; continue _fun0017 }
case 92:
            var1 = var4;
case 91:
            var _closure2_slot1 = var1;
            var1 = new Array(0);
            var _closure2_slot2 = var1;
            var4 = 0;
            var _closure2_slot3 = var4;
            var7 = var5.embeds;
            if(!(var3 != var7)) { _fun0017_ip = 93; continue _fun0017 }
case 94:
            var3 = var7.forEach;
            var2 = function(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                    if(var2) { _fun0018_ip = 78; continue _fun0018 }
case 80:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isValidVideoEmbed;
                    var2 = var2.bind(var3)(var6);
                    if(!var2) { _fun0018_ip = 95; continue _fun0018 }
case 78:
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
                    if(!(var2 != var7)) { _fun0018_ip = 95; continue _fun0018 }
case 96:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = {};
                    var8 = _closure1_slot12;
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
case 95:
                    return var1;
                }
            };
            var2 = var3.bind(var7)(var2);
case 93:
            var2 = var1.length;
            if(!(var4 === var2)) { _fun0017_ip = 97; continue _fun0017 }
case 98:
            var3 = var1.push;
            var2 = {};
            var6 = _closure1_slot12;
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
case 97:
            return var1;
        }
    };
    var3['getLinks'] = var11;
    var3['performKeyboardAwareNavigation'] = var10;
    var3['delayUntilNavigationComplete'] = var9;
    var3['getUrlIcon'] = var8;
    var3['getGridItemBorderStyles'] = var7;
    var3['getMediaGridItemStyles'] = var6;
    var3['getGridItemSpacingStyles'] = var5;
    var3['toSearchBarTag'] = var4;
    var3['navigateToSearch'] = var2;
    return var1;
})();