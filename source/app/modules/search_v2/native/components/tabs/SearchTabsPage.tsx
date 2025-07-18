// app/modules/search_v2/native/components/tabs/SearchTabsPage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
            var7 = var7.bind(var4)(var2);
            var2 = var7.useIsSwipeToMemberListEnabled;
            var11 = var2.bind(var7)();
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
            if(var2) { _fun0001_ip = 147; continue _fun0001 }
 143:
            var2 = null;
            return var2;
 147:
            var2 = _closure1_slot7;
            var2 = var2.RECENT;
            if(!(var2 !== var10)) { _fun0001_ip = 767; continue _fun0001 }
 164:
            var2 = _closure1_slot7;
            var2 = var2.PEOPLE;
            if(!(var2 !== var10)) { _fun0001_ip = 723; continue _fun0001 }
 181:
            var2 = _closure1_slot7;
            var2 = var2.MEMBERS;
            if(!(var2 !== var10)) { _fun0001_ip = 679; continue _fun0001 }
 198:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_CHANNELS;
            if(!(var2 !== var10)) { _fun0001_ip = 635; continue _fun0001 }
 215:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA;
            if(!(var2 !== var10)) { _fun0001_ip = 581; continue _fun0001 }
 232:
            var2 = _closure1_slot7;
            var2 = var2.FILES;
            if(!(var2 !== var10)) { _fun0001_ip = 527; continue _fun0001 }
 249:
            var2 = _closure1_slot7;
            var2 = var2.LINKS;
            if(!(var2 !== var10)) { _fun0001_ip = 473; continue _fun0001 }
 266:
            var2 = _closure1_slot7;
            var2 = var2.THREADS;
            if(!(var2 !== var10)) { _fun0001_ip = 423; continue _fun0001 }
 283:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGES;
            if(!(var2 !== var10)) { _fun0001_ip = 369; continue _fun0001 }
 297:
            var2 = _closure1_slot7;
            var2 = var2.PINS;
            if(!(var2 !== var10)) { _fun0001_ip = 315; continue _fun0001 }
 311:
            var2 = null;
            return var2;
 315:
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
 369:
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
 423:
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
 473:
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
 527:
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
 581:
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
 635:
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
 679:
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
 723:
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
 767:
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
    var2 = native4;
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
    var5 = 'modules/search_v2/native/components/tabs/SearchTabsPage.tsx';
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