// app/modules/search_v2/native/components/tabs/hooks/useVisibleSearchTabs.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function getSearchTabsKey(arg1) {
        var3 = arg1;
        var2 = var3.join;
        var1 = '-';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = function createSearchTabsLayoutManager(arg1) {
        var6 = arg1;
        var3 = _closure1_slot10;
        var1 = {};
        var1['searchContext'] = var6;
        var8 = _closure1_slot6;
        var7 = var8.getState;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = var2.isInitialSearchQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var7.bind(var8)(var6, var5);
        var1['isInitialSearchQuery'] = var5;
        var8 = _closure1_slot6;
        var7 = var8.getState;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = var2.hasUserAddedTags;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var7.bind(var8)(var6, var5);
        var1['hasUserAddedTags'] = var5;
        var5 = _closure1_slot6;
        var4 = var5.getState;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.isTagsEmpty;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var4.bind(var5)(var6, var2);
        var1['isTagsEmpty'] = var2;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var11 = var2;
        var10 = var1;
        var1 = new var11[var3](var10, var9);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var8 = var9.bind(var1)(var5);
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var10 = var7[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var10);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.SearchTabs;
    var _closure1_slot7 = var9;
    var9 = var5.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot8 = var9;
    var5 = var5.SEARCH_TYPE_TO_SEARCH_RESULT_TABS;
    var _closure1_slot9 = var5;
    var5 = function SearchTabsLayoutManager(arg1) {
        var1 = arg1;
        var3 = this;
        var _closure2_slot0 = var3;
        var2 = var1.searchContext;
        var7 = var1.isInitialSearchQuery;
        var6 = var1.hasUserAddedTags;
        var5 = var1.isTagsEmpty;
        var10 = _closure1_slot4;
        var9 = _closure1_slot13;
        var1 = undefined;
        var9 = var10.bind(var1)(var3, var9);
        var9 = null;
        var3['visibleTabCounts'] = var9;
        var9 = false;
        var3['isInitialSearchQuery'] = var9;
        var9 = function() {
            var1 = _closure2_slot0;
            var1 = var1.candidateTabs;
            return var1;
        };
        var3['getCandidateTabs'] = var9;
        var9 = function() {
            var1 = _closure2_slot0;
            var1 = var1.visibleTabs;
            return var1;
        };
        var3['getVisibleTabs'] = var9;
        var9 = function() {
            var1 = _closure2_slot0;
            var1 = var1.visibleTabCounts;
            return var1;
        };
        var3['getVisibleTabCounts'] = var9;
        var9 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var3 = var1.isInitialSearchQuery;
                var4 = var1.hasUserAddedTags;
                var _closure3_slot0 = var4;
                var1 = var1.isTagsEmpty;
                var _closure3_slot1 = var1;
                if(var3) { _fun0001_ip = 65; continue _fun0001 }
 37:
                var4 = _closure1_slot9;
                var3 = _closure2_slot0;
                var3 = var3.searchContext;
                var3 = var3.type;
                var4 = var4[var3];
                _fun0001_ip = 91; continue _fun0001;
 65:
                var5 = _closure1_slot8;
                var3 = _closure2_slot0;
                var3 = var3.searchContext;
                var3 = var3.type;
                var4 = var5[var3];
 91:
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = arg1;
                        var2 = _closure1_slot7;
                        var2 = var2.MEMBERS;
                        if(!(var2 !== var3)) { _fun0002_ip = 130; continue _fun0002 }
 20:
                        var2 = _closure1_slot7;
                        var2 = var2.RECENT;
                        if(!(var2 !== var3)) { _fun0002_ip = 121; continue _fun0002 }
 34:
                        var2 = _closure1_slot7;
                        var2 = var2.GUILD_CHANNELS;
                        if(!(var2 !== var3)) { _fun0002_ip = 121; continue _fun0002 }
 48:
                        var2 = _closure1_slot7;
                        var2 = var2.PEOPLE;
                        if(!(var2 !== var3)) { _fun0002_ip = 121; continue _fun0002 }
 62:
                        var2 = _closure1_slot7;
                        var2 = var2.THREADS;
                        if(!(var2 !== var3)) { _fun0002_ip = 80; continue _fun0002 }
 76:
                        var2 = true;
                        return var2;
 80:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isChannelDetailsHeaderExperimentV2Enabled;
                        var1 = 'getSearchInitialTabs';
                        var1 = var2.bind(var3)(var1);
                        return var1;
 121:
                        var1 = _closure3_slot1;
                        return var1;
 130:
                        var1 = _closure3_slot0;
                        var1 = !var1;
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var6 = _closure1_slot11;
                var5 = undefined;
                var4 = var6.bind(var5)(var3);
                var1 = _closure2_slot0;
                var1 = var1.candidateTabs;
                var1 = var6.bind(var5)(var1);
                var1 = var4 !== var1;
                if(!var1) { _fun0001_ip = 156; continue _fun0001 }
 144:
                var2 = _closure2_slot0;
                var2['candidateTabs'] = var3;
                var1 = true;
 156:
                return var1;
            }
        };
        var3['computeCandidateTabs'] = var9;
        var9 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var5 = var1.nextTabs;
                var3 = var1.nextTabCounts;
                var7 = _closure1_slot11;
                var4 = undefined;
                var6 = var7.bind(var4)(var5);
                var1 = _closure2_slot0;
                var1 = var1.visibleTabs;
                var4 = var7.bind(var4)(var1);
                var1 = false;
                if(!(var6 !== var4)) { _fun0003_ip = 65; continue _fun0003 }
 53:
                var4 = _closure2_slot0;
                var4['visibleTabs'] = var5;
                var1 = true;
 65:
                var4 = _closure2_slot0;
                var4 = var4.visibleTabCounts;
                if(!(var3 !== var4)) { _fun0003_ip = 91; continue _fun0003 }
 79:
                var2 = _closure2_slot0;
                var2['visibleTabCounts'] = var3;
                var1 = true;
 91:
                return var1;
            }
        };
        var3['updateVisibleTabs'] = var9;
        var8 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var6 = var1.isInitialSearchQuery;
                var3 = var1.isPendingSearchResults;
                var2 = var1.peopleTabCount;
                var7 = var1.memberTabCount;
                var5 = var1.channelTabCount;
                var1 = var1.messageTabCounts;
                var8 = undefined;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var8;
                if(var6) { _fun0004_ip = 294; continue _fun0004 }
 57:
                if(var3) { _fun0004_ip = 219; continue _fun0004 }
 63:
                var6 = {};
                var11 = var6;
                var10 = var1;
                var1 = copyDataProperties(var11, var10);
                var1 = _closure1_slot7;
                var3 = var1.MEMBERS;
                var6[var3] = var7;
                var3 = var1.GUILD_CHANNELS;
                var6[var3] = var5;
                var1 = var1.PEOPLE;
                var6[var1] = var2;
                _closure3_slot1 = var6;
                var1 = _closure2_slot0;
                var5 = var1.candidateTabs;
                var3 = var5.every;
                var1 = function(arg1) {
                    var2 = _closure3_slot1;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var1 = var3.bind(var5)(var1);
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0004_ip = 217; continue _fun0004 }
 159:
                var5 = _closure2_slot0;
                var2 = false;
                var5['isInitialSearchQuery'] = var2;
                var3 = var5.updateVisibleTabs;
                var2 = {};
                var9 = var5.candidateTabs;
                var8 = var9.filter;
                var7 = function(arg1) {
                    var2 = _closure3_slot1;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = 0;
                    var1 = var1 !== var2;
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
                var2['nextTabs'] = var7;
                var2['nextTabCounts'] = var6;
                var1 = var3.bind(var5)(var2);
 217:
                return var1;
 219:
                var3 = _closure2_slot0;
                var1 = var3.isInitialSearchQuery;
                _closure3_slot0 = var1;
                var1 = false;
                var3['isInitialSearchQuery'] = var1;
                var2 = var3.updateVisibleTabs;
                var1 = {};
                var6 = var3.candidateTabs;
                var5 = var6.filter;
                var4 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure3_slot0;
                        if(var1) { _fun0005_ip = 36; continue _fun0005 }
 10:
                        var2 = _closure2_slot0;
                        var4 = var2.visibleTabs;
                        var3 = var4.includes;
                        var2 = arg1;
                        var1 = var3.bind(var4)(var2);
 36:
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var1['nextTabs'] = var4;
                var4 = null;
                var1['nextTabCounts'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
 294:
                var3 = _closure2_slot0;
                var1 = true;
                var3['isInitialSearchQuery'] = var1;
                var2 = var3.updateVisibleTabs;
                var1 = {};
                var4 = var3.candidateTabs;
                var1['nextTabs'] = var4;
                var4 = null;
                var1['nextTabCounts'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3['computeVisibleTabs'] = var8;
        var3['searchContext'] = var2;
        var4 = _closure1_slot8;
        var2 = var2.type;
        var2 = var4[var2];
        var3['candidateTabs'] = var2;
        var4 = var3.computeCandidateTabs;
        var2 = {};
        var2['isInitialSearchQuery'] = var7;
        var2['hasUserAddedTags'] = var6;
        var2['isTagsEmpty'] = var5;
        var2 = var4.bind(var3)(var2);
        var12 = var3.candidateTabs;
        var2 = new Array(0);
        var11 = 0;
        var13 = var2;
        var4 = arraySpread(var13, var12, var11);
        var3['visibleTabs'] = var2;
        return var1;
    };
    var _closure1_slot13 = var5;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search_v2/native/components/tabs/hooks/useVisibleSearchTabs.tsx';
    var5 = var6.bind(var7)(var5);
    var3['createSearchTabsLayoutManager'] = var4;
    var2 = function useVisibleSearchTabs(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot5;
        var5 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            var3 = _closure1_slot12;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var11 = var5.bind(var6)(var2, var3);
        var _closure2_slot1 = var11;
        var3 = var6.useState;
        var2 = var11.getCandidateTabs;
        var2 = var2.bind(var11)();
        var2 = var3.bind(var6)(var2);
        var12 = _closure1_slot3;
        var13 = undefined;
        var10 = 2;
        var3 = var12.bind(var13)(var2, var10);
        var2 = 0;
        var5 = var3[var2];
        var _closure2_slot2 = var5;
        var9 = 1;
        var3 = var3[var9];
        var _closure2_slot3 = var3;
        var8 = var6.useState;
        var3 = var11.getVisibleTabs;
        var3 = var3.bind(var11)();
        var3 = var8.bind(var6)(var3);
        var8 = var12.bind(var13)(var3, var10);
        var3 = var8[var2];
        var8 = var8[var9];
        var _closure2_slot4 = var8;
        var14 = var6.useState;
        var8 = null;
        var8 = var14.bind(var6)(var8);
        var8 = var12.bind(var13)(var8, var10);
        var2 = var8[var2];
        var8 = var8[var9];
        var _closure2_slot5 = var8;
        var10 = var6.useEffect;
        var9 = new Array(1);
        var9[0] = var11;
        var8 = function() {
            var5 = _closure2_slot3;
            var4 = _closure2_slot1;
            var1 = var4.getCandidateTabs;
            var3 = var1.bind(var4)();
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var5 = _closure2_slot4;
            var3 = var4.getVisibleTabs;
            var3 = var3.bind(var4)();
            var3 = var5.bind(var1)(var3);
            var3 = _closure2_slot5;
            var2 = var4.getVisibleTabCounts;
            var2 = var2.bind(var4)();
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8 = var10.bind(var6)(var8, var9);
        var10 = var6.useEffect;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var7;
        var8 = function() {
            var6 = _closure1_slot6;
            var5 = var6.subscribeState;
            var4 = _closure2_slot0;
            var3 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var7 = var7[var2];
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            var2 = var2.shallow;
            var3['equalityFn'] = var2;
            var2 = true;
            var3['fireImmediately'] = var2;
            var11 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var2 = var3.isInitialSearchQuery;
                var2 = var2.bind(var3)();
                var1['isInitialSearchQuery'] = var2;
                var2 = var3.isAutocompleteVisible;
                var2 = var2.bind(var3)();
                var1['isAutocompleteVisible'] = var2;
                var2 = var3.hasUserAddedTags;
                var2 = var2.bind(var3)();
                var1['hasUserAddedTags'] = var2;
                var2 = var3.isTagsEmpty;
                var2 = var2.bind(var3)();
                var1['isTagsEmpty'] = var2;
                return var1;
            };
            var10 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 99; continue _fun0006 }
 9:
                    var7 = var2.isInitialSearchQuery;
                    var1 = var2.isAutocompleteVisible;
                    var6 = var2.hasUserAddedTags;
                    var5 = var2.isTagsEmpty;
                    if(var1) { _fun0006_ip = 99; continue _fun0006 }
 36:
                    var4 = _closure2_slot1;
                    var3 = var4.computeCandidateTabs;
                    var2 = {};
                    var2['isInitialSearchQuery'] = var7;
                    var2['hasUserAddedTags'] = var6;
                    var2['isTagsEmpty'] = var5;
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0006_ip = 99; continue _fun0006 }
 74:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var1 = var2.getCandidateTabs;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var6;
            var12 = var4;
            var9 = var3;
            var1 = var13[var5](var12, var11, var10, var9, var8);
            return var1;
        };
        var8 = var10.bind(var6)(var8, var9);
        var9 = var6.useMemo;
        var8 = new Array(1);
        var8[0] = var5;
        var5 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = _closure2_slot2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var15 = var9.bind(var6)(var5, var8);
        var9 = var15.has;
        var5 = _closure1_slot7;
        var8 = var5.GUILD_CHANNELS;
        var8 = var9.bind(var15)(var8);
        var10 = !var8;
        var9 = _closure1_slot1;
        var14 = _closure1_slot2;
        var8 = 8;
        var8 = var14[var8];
        var8 = var9.bind(var13)(var8);
        var12 = var8.bind(var13)(var7, var10);
        var _closure2_slot6 = var12;
        var10 = var15.has;
        var8 = var5.MEMBERS;
        var8 = var10.bind(var15)(var8);
        var10 = !var8;
        var8 = 9;
        var8 = var14[var8];
        var8 = var9.bind(var13)(var8);
        var10 = var8.bind(var13)(var7, var10);
        var _closure2_slot7 = var10;
        var8 = var15.has;
        var5 = var5.PEOPLE;
        var5 = var8.bind(var15)(var5);
        var8 = !var5;
        var5 = 10;
        var5 = var14[var5];
        var5 = var9.bind(var13)(var5);
        var8 = var5.bind(var13)(var7, var8);
        var _closure2_slot8 = var8;
        var15 = _closure1_slot6;
        var9 = var15.useState;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = var2.getSearchResultsQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var9 = var9.bind(var15)(var7, var5);
        var _closure2_slot9 = var9;
        var5 = var6.useRef;
        var5 = var5.bind(var6)(var9);
        var _closure2_slot10 = var5;
        var16 = var6.useEffect;
        var15 = new Array(1);
        var15[0] = var9;
        var5 = function() {
            var2 = _closure2_slot10;
            var1 = _closure2_slot9;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var5 = var16.bind(var6)(var5, var15);
        var5 = _closure1_slot0;
        var4 = 11;
        var4 = var14[var4];
        var5 = var5.bind(var13)(var4);
        var4 = var5.useMessageSearchTabCounts;
        var9 = var4.bind(var5)(var7, var9);
        var _closure2_slot11 = var9;
        var5 = var6.useEffect;
        var4 = new Array(6);
        var4[0] = var12;
        var4[1] = var11;
        var4[2] = var10;
        var4[3] = var9;
        var4[4] = var8;
        var4[5] = var7;
        var1 = function() {
            var6 = _closure1_slot6;
            var5 = var6.subscribeState;
            var4 = _closure2_slot0;
            var3 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var7 = var7[var2];
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            var2 = var2.shallow;
            var3['equalityFn'] = var2;
            var2 = true;
            var3['fireImmediately'] = var2;
            var11 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var2 = var3.isInitialSearchQuery;
                var2 = var2.bind(var3)();
                var1['isInitialSearchQuery'] = var2;
                var2 = var3.getSearchResultsQuery;
                var4 = var2.bind(var3)();
                var2 = var3.getQueryString;
                var2 = var2.bind(var3)();
                var2 = var4 !== var2;
                var1['isPendingSearchResults'] = var2;
                var2 = var3.getSearchResultsQuery;
                var2 = var2.bind(var3)();
                var1['searchResultsQuery'] = var2;
                var2 = var3.isAutocompleteVisible;
                var2 = var2.bind(var3)();
                var1['isAutocompleteVisible'] = var2;
                return var1;
            };
            var10 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0007_ip = 171; continue _fun0007 }
 12:
                    var6 = var1.isInitialSearchQuery;
                    var5 = var1.isPendingSearchResults;
                    var7 = var1.searchResultsQuery;
                    var1 = var1.isAutocompleteVisible;
                    if(var1) { _fun0007_ip = 171; continue _fun0007 }
 42:
                    var4 = _closure2_slot1;
                    var3 = var4.computeVisibleTabs;
                    var2 = {};
                    var2['isInitialSearchQuery'] = var6;
                    if(var5) { _fun0007_ip = 78; continue _fun0007 }
 65:
                    var6 = _closure2_slot10;
                    var6 = var6.current;
                    var5 = var6 !== var7;
 78:
                    var2['isPendingSearchResults'] = var5;
                    var5 = _closure2_slot8;
                    var2['peopleTabCount'] = var5;
                    var5 = _closure2_slot7;
                    var2['memberTabCount'] = var5;
                    var5 = _closure2_slot6;
                    var2['channelTabCount'] = var5;
                    var5 = _closure2_slot11;
                    var2['messageTabCounts'] = var5;
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0007_ip = 171; continue _fun0007 }
 127:
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot1;
                    var2 = var4.getVisibleTabs;
                    var2 = var2.bind(var4)();
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = _closure2_slot5;
                    var1 = var4.getVisibleTabCounts;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
 171:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var6;
            var12 = var4;
            var9 = var3;
            var1 = var13[var5](var12, var11, var10, var9, var8);
            return var1;
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var1['visibleTabs'] = var3;
        var1['visibleTabCounts'] = var2;
        return var1;
    };
    var3['useVisibleSearchTabs'] = var2;
    return var1;
})();