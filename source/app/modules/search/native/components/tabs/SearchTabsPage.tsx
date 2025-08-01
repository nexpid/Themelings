// app/modules/search/native/components/tabs/SearchTabsPage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function SearchTabsPage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.tab;
            var5 = var1.searchContext;
            var9 = var1.isFocused;
            var6 = var1.selectMediaTab;
            var8 = var1.onViewableItemsChanged;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = undefined;
            var11 = var7.bind(var4)(var2);
            var7 = var11.useChannelDetailsHeaderExperimentV2Enabled;
            var2 = 'channel-details';
            var11 = var7.bind(var11)(var2);
            var7 = _closure1_slot4;
            var2 = var7.useState;
            var12 = var2.bind(var7)(var9);
            var7 = _closure1_slot3;
            var2 = 2;
            var12 = var7.bind(var4)(var12, var2);
            var2 = 0;
            var2 = var12[var2];
            var7 = 1;
            var7 = var12[var7];
            var _closure2_slot0 = var7;
            var13 = _closure1_slot4;
            var12 = var13.useEffect;
            var7 = function() {
                var1 = global;
                var4 = var1.setTimeout;
                var1 = undefined;
                var3 = function() {
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 10;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var12.bind(var13)(var7, var3);
            if(var2) { _fun0001_ip = 154; continue _fun0001 }
 150:
            var2 = null;
            return var2;
 154:
            var2 = _closure1_slot7;
            var2 = var2.RECENT;
            if(!(var2 !== var10)) { _fun0001_ip = 774; continue _fun0001 }
 171:
            var2 = _closure1_slot7;
            var2 = var2.PEOPLE;
            if(!(var2 !== var10)) { _fun0001_ip = 730; continue _fun0001 }
 188:
            var2 = _closure1_slot7;
            var2 = var2.MEMBERS;
            if(!(var2 !== var10)) { _fun0001_ip = 686; continue _fun0001 }
 205:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_CHANNELS;
            if(!(var2 !== var10)) { _fun0001_ip = 642; continue _fun0001 }
 222:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA;
            if(!(var2 !== var10)) { _fun0001_ip = 588; continue _fun0001 }
 239:
            var2 = _closure1_slot7;
            var2 = var2.FILES;
            if(!(var2 !== var10)) { _fun0001_ip = 534; continue _fun0001 }
 256:
            var2 = _closure1_slot7;
            var2 = var2.LINKS;
            if(!(var2 !== var10)) { _fun0001_ip = 480; continue _fun0001 }
 273:
            var2 = _closure1_slot7;
            var2 = var2.THREADS;
            if(!(var2 !== var10)) { _fun0001_ip = 430; continue _fun0001 }
 290:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGES;
            if(!(var2 !== var10)) { _fun0001_ip = 376; continue _fun0001 }
 304:
            var2 = _closure1_slot7;
            var2 = var2.PINS;
            if(!(var2 !== var10)) { _fun0001_ip = 322; continue _fun0001 }
 318:
            var2 = null;
            return var2;
 322:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 17;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 376:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 16;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 430:
            var7 = _closure1_slot8;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 15;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.SearchTabsThreadScreen;
            var2 = {};
            var2['searchContext'] = var5;
            var2['showFloatingActionButton'] = var11;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 480:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 14;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 534:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 13;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 588:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 12;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 642:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['searchContext'] = var5;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 686:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['searchContext'] = var5;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 730:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['searchContext'] = var5;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 774:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onJumpToMedia'] = var6;
            var1['searchContext'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var11 = 1;
    var5 = var7[var11];
    var2 = metroImportAll;
    var5 = var2.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.SearchTabs;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createStyles;
    var2 = {};
    var10 = {};
    var10['flex'] = var11;
    var2['container'] = var10;
    var2 = var8.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var2 = var5.createContext;
    var2 = var2.bind(var5)(var1);
    var _closure1_slot10 = var2;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/components/tabs/SearchTabsPage.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ConnectedSearchTabsPage(arg1) {
        var1 = arg1;
        var10 = var1.tab;
        var9 = var1.searchContext;
        var3 = _closure1_slot4;
        var2 = var3.useContext;
        var1 = _closure1_slot10;
        var11 = var2.bind(var3)(var1);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 18;
        var1 = var3[var1];
        var4 = undefined;
        var7 = var2.bind(var4)(var1);
        var1 = null;
        var6 = var1 != var11;
        var1 = '[SearchTabsPageContext] Context should not be null.';
        var1 = var7.bind(var4)(var6, var1);
        var1 = _closure1_slot9;
        var6 = var1.bind(var4)();
        var1 = 19;
        var1 = var3[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var11.selectedTab;
        var1 = var2.bind(var4)(var1);
        var12 = var1 === var10;
        var7 = _closure1_slot6;
        var2 = var7.useState;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.isInitialSearchQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var2.bind(var7)(var9, var1);
        var2 = _closure1_slot0;
        var1 = 20;
        var1 = var3[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.useSearchResultsViewedAnalytics;
        var1 = {};
        var1['searchContext'] = var9;
        var1['tab'] = var10;
        var1['isFocused'] = var12;
        var1['isInitialSearchQuery'] = var7;
        var1 = var2.bind(var3)(var1);
        var8 = var1.onViewableItemsChanged;
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.container;
        var1['style'] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot11;
        var5 = {};
        var5['isFocused'] = var12;
        var11 = var11.selectMediaTab;
        var5['selectMediaTab'] = var11;
        var5['tab'] = var10;
        var5['searchContext'] = var9;
        var5['onViewableItemsChanged'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['SearchTabsPageContext'] = var2;
    return var1;
})();