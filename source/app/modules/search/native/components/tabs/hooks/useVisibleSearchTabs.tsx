// app/modules/search/native/components/tabs/hooks/useVisibleSearchTabs.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
    var _closure1_slot16 = var1;
    var4 = function createSearchTabsLayoutManager(arg1) {
        var6 = arg1;
        var3 = _closure1_slot15;
        var1 = {};
        var1['searchContext'] = var6;
        var8 = _closure1_slot10;
        var7 = var8.getState;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = var2.isInitialSearchQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var7.bind(var8)(var6, var5);
        var1['isInitialSearchQuery'] = var5;
        var8 = _closure1_slot10;
        var7 = var8.getState;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = var2.hasUserAddedTags;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var7.bind(var8)(var6, var5);
        var1['hasUserAddedTags'] = var5;
        var5 = _closure1_slot10;
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
    var _closure1_slot17 = var4;
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
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var10);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.SearchTabs;
    var _closure1_slot11 = var9;
    var9 = var5.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot12 = var9;
    var5 = var5.SEARCH_TYPE_TO_SEARCH_RESULT_TABS;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SearchTypes;
    var _closure1_slot14 = var5;
    var5 = function SearchTabsLayoutManager(arg1) {
        var1 = arg1;
        var3 = this;
        var _closure2_slot0 = var3;
        var2 = var1.searchContext;
        var7 = var1.isInitialSearchQuery;
        var6 = var1.hasUserAddedTags;
        var5 = var1.isTagsEmpty;
        var10 = _closure1_slot4;
        var9 = _closure1_slot18;
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
case 0:
                var1 = arg1;
                var3 = var1.isInitialSearchQuery;
                var4 = var1.hasUserAddedTags;
                var _closure3_slot0 = var4;
                var1 = var1.isTagsEmpty;
                var _closure3_slot1 = var1;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot13;
                var3 = _closure2_slot0;
                var3 = var3.searchContext;
                var3 = var3.type;
                var4 = var4[var3];
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var5 = _closure1_slot12;
                var3 = _closure2_slot0;
                var3 = var3.searchContext;
                var3 = var3.type;
                var4 = var5[var3];
case 4:
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var1 = _closure2_slot0;
                        var1 = var1.searchContext;
                        var4 = var1.type;
                        var3 = _closure1_slot14;
                        var3 = var3.THREAD;
                        if(!(var4 === var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 11;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.getCurrentConfig;
                        var3 = {};
                        var6 = 'computeCandidateTabs';
                        var3['location'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.enabled;
                        if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                        var3 = _closure1_slot11;
                        var5 = var3.MEMBERS;
                        var4 = new Array(2);
                        var4[0] = var5;
                        var3 = var3.PINS;
                        var4[1] = var3;
                        var3 = var4.includes;
                        var3 = var3.bind(var4)(var2);
                        if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 8:
                        var3 = false;
                        return var3;
case 5:
                        var3 = _closure1_slot11;
                        var3 = var3.MEMBERS;
                        if(!(var3 !== var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var3 = _closure1_slot11;
                        var3 = var3.RECENT;
                        if(!(var3 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var3 = _closure1_slot11;
                        var3 = var3.GUILD_CHANNELS;
                        if(!(var3 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                        var1 = _closure1_slot11;
                        var1 = var1.PEOPLE;
                        if(!(var1 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 14:
                        var1 = true;
                        return var1;
case 11:
                        var1 = _closure3_slot1;
                        return var1;
case 9:
                        var1 = _closure3_slot0;
                        var1 = !var1;
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var6 = _closure1_slot16;
                var5 = undefined;
                var4 = var6.bind(var5)(var3);
                var1 = _closure2_slot0;
                var1 = var1.candidateTabs;
                var1 = var6.bind(var5)(var1);
                var1 = var4 !== var1;
                if(!var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                var2 = _closure2_slot0;
                var2['candidateTabs'] = var3;
                var1 = true;
case 15:
                return var1;
            }
        };
        var3['computeCandidateTabs'] = var9;
        var9 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var5 = var1.nextTabs;
                var3 = var1.nextTabCounts;
                var7 = _closure1_slot16;
                var4 = undefined;
                var6 = var7.bind(var4)(var5);
                var1 = _closure2_slot0;
                var1 = var1.visibleTabs;
                var4 = var7.bind(var4)(var1);
                var1 = false;
                if(!(var6 !== var4)) { _fun0003_ip = 2; continue _fun0003 }
case 17:
                var4 = _closure2_slot0;
                var4['visibleTabs'] = var5;
                var1 = true;
case 2:
                var4 = _closure2_slot0;
                var4 = var4.visibleTabCounts;
                if(!(var3 !== var4)) { _fun0003_ip = 4; continue _fun0003 }
case 18:
                var2 = _closure2_slot0;
                var2['visibleTabCounts'] = var3;
                var1 = true;
case 4:
                return var1;
            }
        };
        var3['updateVisibleTabs'] = var9;
        var8 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var5 = var2.isInitialSearchQuery;
                var1 = var2.isPendingSearchResults;
                var7 = var2.searchTabCounts;
                var _closure3_slot0 = var7;
                var2 = undefined;
                var _closure3_slot1 = var2;
                var3 = _closure2_slot0;
                if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var6 = var3.candidateTabs;
                var5 = var6.every;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var1 = var5.bind(var6)(var1);
                var5 = !var1;
                var1 = !var5;
                if(var5) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var6 = _closure2_slot0;
                var2 = false;
                var6['isInitialSearchQuery'] = var2;
                var5 = var6.updateVisibleTabs;
                var2 = {};
                var10 = var6.candidateTabs;
                var9 = var10.filter;
                var8 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = 0;
                    var1 = var1 !== var2;
                    return var1;
                };
                var8 = var9.bind(var10)(var8);
                var2['nextTabs'] = var8;
                var2['nextTabCounts'] = var7;
                var1 = var5.bind(var6)(var2);
case 23:
                return var1;
case 21:
                var1 = var3.isInitialSearchQuery;
                _closure3_slot1 = var1;
                var1 = false;
                var3['isInitialSearchQuery'] = var1;
                var2 = var3.updateVisibleTabs;
                var1 = {};
                var6 = var3.candidateTabs;
                var5 = var6.filter;
                var4 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure3_slot1;
                        if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var2 = _closure2_slot0;
                        var4 = var2.visibleTabs;
                        var3 = var4.includes;
                        var2 = arg1;
                        var1 = var3.bind(var4)(var2);
case 25:
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var1['nextTabs'] = var4;
                var4 = null;
                var1['nextTabCounts'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
case 19:
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
        var4 = _closure1_slot12;
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
    var _closure1_slot18 = var5;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/components/tabs/hooks/useVisibleSearchTabs.tsx';
    var5 = var6.bind(var7)(var5);
    var3['createSearchTabsLayoutManager'] = var4;
    var2 = function useVisibleSearchTabs(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var6 = _closure1_slot5;
        var4 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            var3 = _closure1_slot17;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var9 = var4.bind(var6)(var2, var3);
        var _closure2_slot1 = var9;
        var3 = var6.useState;
        var2 = var9.getCandidateTabs;
        var2 = var2.bind(var9)();
        var2 = var3.bind(var6)(var2);
        var13 = _closure1_slot3;
        var11 = undefined;
        var12 = 2;
        var3 = var13.bind(var11)(var2, var12);
        var2 = 0;
        var4 = var3[var2];
        var _closure2_slot2 = var4;
        var10 = 1;
        var3 = var3[var10];
        var _closure2_slot3 = var3;
        var7 = var6.useState;
        var3 = var9.getVisibleTabs;
        var3 = var3.bind(var9)();
        var3 = var7.bind(var6)(var3);
        var7 = var13.bind(var11)(var3, var12);
        var3 = var7[var2];
        var7 = var7[var10];
        var _closure2_slot4 = var7;
        var14 = var6.useState;
        var7 = null;
        var7 = var14.bind(var6)(var7);
        var7 = var13.bind(var11)(var7, var12);
        var2 = var7[var2];
        var7 = var7[var10];
        var _closure2_slot5 = var7;
        var12 = var6.useEffect;
        var10 = new Array(1);
        var10[0] = var9;
        var7 = function() {
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
        var7 = var12.bind(var6)(var7, var10);
        var12 = var6.useEffect;
        var10 = new Array(2);
        var10[0] = var9;
        var10[1] = var8;
        var7 = function() {
            var6 = _closure1_slot10;
            var5 = var6.subscribeState;
            var4 = _closure2_slot0;
            var3 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
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
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var7 = var2.isInitialSearchQuery;
                    var1 = var2.isAutocompleteVisible;
                    var6 = var2.hasUserAddedTags;
                    var5 = var2.isTagsEmpty;
                    if(var1) { _fun0006_ip = 27; continue _fun0006 }
case 25:
                    var4 = _closure2_slot1;
                    var3 = var4.computeCandidateTabs;
                    var2 = {};
                    var2['isInitialSearchQuery'] = var7;
                    var2['hasUserAddedTags'] = var6;
                    var2['isTagsEmpty'] = var5;
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 29:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var1 = var2.getCandidateTabs;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 27:
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
        var7 = var12.bind(var6)(var7, var10);
        var12 = var6.useMemo;
        var10 = new Array(1);
        var10[0] = var4;
        var7 = function() {
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
        var16 = var12.bind(var6)(var7, var10);
        var10 = _closure1_slot0;
        var13 = _closure1_slot2;
        var7 = 13;
        var7 = var13[var7];
        var15 = var10.bind(var11)(var7);
        var14 = var15.useAutoSearchGuildChannelTab;
        var17 = var16.has;
        var7 = _closure1_slot11;
        var12 = var7.GUILD_CHANNELS;
        var12 = var17.bind(var16)(var12);
        var12 = !var12;
        var12 = var14.bind(var15)(var8, var12);
        var12 = 14;
        var12 = var13[var12];
        var15 = var10.bind(var11)(var12);
        var14 = var15.useAutoSearchMembersTab;
        var17 = var16.has;
        var12 = var7.MEMBERS;
        var12 = var17.bind(var16)(var12);
        var12 = !var12;
        var12 = var14.bind(var15)(var8, var12);
        var12 = 15;
        var12 = var13[var12];
        var14 = var10.bind(var11)(var12);
        var12 = var14.useAutoSearchPeopleTab;
        var15 = var16.has;
        var7 = var7.PEOPLE;
        var7 = var15.bind(var16)(var7);
        var7 = !var7;
        var7 = var12.bind(var14)(var8, var7);
        var14 = _closure1_slot10;
        var12 = var14.useState;
        var7 = function(arg1) {
            var2 = arg1;
            var1 = var2.getSearchResultsQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var12 = var12.bind(var14)(var8, var7);
        var _closure2_slot6 = var12;
        var7 = var6.useRef;
        var7 = var7.bind(var6)(var12);
        var _closure2_slot7 = var7;
        var15 = var6.useEffect;
        var14 = new Array(1);
        var14[0] = var12;
        var7 = function() {
            var2 = _closure2_slot7;
            var1 = _closure2_slot6;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var7 = var15.bind(var6)(var7, var14);
        var7 = 16;
        var7 = var13[var7];
        var11 = var10.bind(var11)(var7);
        var10 = var11.useStateFromStoresObject;
        var13 = _closure1_slot6;
        var7 = new Array(4);
        var7[0] = var13;
        var13 = _closure1_slot8;
        var7[1] = var13;
        var13 = _closure1_slot7;
        var7[2] = var13;
        var5 = _closure1_slot9;
        var7[3] = var5;
        var5 = new Array(3);
        var5[0] = var12;
        var5[1] = var8;
        var5[2] = var4;
        var4 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getSearchContextId;
            var1 = _closure2_slot0;
            var1 = var4.bind(var5)(var1);
            var _closure3_slot0 = var1;
            var1 = {};
            var _closure3_slot1 = var1;
            var4 = _closure2_slot2;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure1_slot11;
                    var1 = var1.MEMBERS;
                    if(!(var1 !== var3)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var1 = _closure1_slot11;
                    var1 = var1.GUILD_CHANNELS;
                    if(!(var1 !== var3)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var1 = _closure1_slot11;
                    var1 = var1.PEOPLE;
                    if(!(var1 !== var3)) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var1 = _closure1_slot11;
                    var1 = var1.MESSAGES;
                    if(!(var1 !== var3)) { _fun0007_ip = 8; continue _fun0007 }
case 36:
                    var1 = _closure1_slot11;
                    var1 = var1.PINS;
                    if(!(var1 !== var3)) { _fun0007_ip = 8; continue _fun0007 }
case 37:
                    var1 = _closure1_slot11;
                    var1 = var1.MEDIA;
                    if(!(var1 !== var3)) { _fun0007_ip = 8; continue _fun0007 }
case 27:
                    var1 = _closure1_slot11;
                    var1 = var1.LINKS;
                    if(!(var1 !== var3)) { _fun0007_ip = 8; continue _fun0007 }
case 38:
                    var1 = _closure1_slot11;
                    var1 = var1.FILES;
                    if(!(var1 === var3)) { _fun0007_ip = 39; continue _fun0007 }
case 8:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.getSearchTabFetchId;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot6;
                    var6 = var5.bind(var6)(var2, var3, var1);
                    var2 = _closure3_slot1;
                    var5 = _closure1_slot6;
                    var1 = var5.getTotalCount;
                    var1 = var1.bind(var5)(var6);
                    var2[var3] = var1;
                    _fun0007_ip = 39; continue _fun0007;
case 34:
                    var2 = _closure3_slot1;
                    var6 = _closure1_slot9;
                    var5 = var6.getCount;
                    var1 = _closure3_slot0;
                    var1 = var5.bind(var6)(var1);
                    var2[var3] = var1;
                    _fun0007_ip = 39; continue _fun0007;
case 32:
                    var2 = _closure3_slot1;
                    var6 = _closure1_slot7;
                    var5 = var6.getCount;
                    var1 = _closure3_slot0;
                    var1 = var5.bind(var6)(var1);
                    var2[var3] = var1;
                    _fun0007_ip = 39; continue _fun0007;
case 30:
                    var2 = _closure3_slot1;
                    var5 = _closure1_slot8;
                    var4 = var5.getCount;
                    var1 = _closure3_slot0;
                    var1 = var4.bind(var5)(var1);
                    var2[var3] = var1;
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var7 = var10.bind(var11)(var7, var4, var5);
        var _closure2_slot8 = var7;
        var5 = var6.useEffect;
        var4 = new Array(3);
        var4[0] = var9;
        var4[1] = var8;
        var4[2] = var7;
        var1 = function() {
            var6 = _closure1_slot10;
            var5 = var6.subscribeState;
            var4 = _closure2_slot0;
            var3 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var6 = var1.isInitialSearchQuery;
                    var5 = var1.isPendingSearchResults;
                    var7 = var1.searchResultsQuery;
                    var1 = var1.isAutocompleteVisible;
                    if(var1) { _fun0008_ip = 40; continue _fun0008 }
case 42:
                    var4 = _closure2_slot1;
                    var3 = var4.computeVisibleTabs;
                    var2 = {};
                    var2['isInitialSearchQuery'] = var6;
                    if(var5) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var6 = _closure2_slot7;
                    var6 = var6.current;
                    var5 = var6 !== var7;
case 43:
                    var2['isPendingSearchResults'] = var5;
                    var5 = _closure2_slot8;
                    var2['searchTabCounts'] = var5;
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0008_ip = 40; continue _fun0008 }
case 45:
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
case 40:
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