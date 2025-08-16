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
            var4 = _closure1_slot4;
            var2 = var4.useState;
            var11 = var2.bind(var4)(var9);
            var7 = _closure1_slot3;
            var4 = undefined;
            var2 = 2;
            var11 = var7.bind(var4)(var11, var2);
            var2 = 0;
            var2 = var11[var2];
            var7 = 1;
            var7 = var11[var7];
            var _closure2_slot0 = var7;
            var12 = _closure1_slot4;
            var11 = var12.useEffect;
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
            var3 = var11.bind(var12)(var7, var3);
            if(var2) { _fun0001_ip = 117; continue _fun0001 }
 113:
            var2 = null;
            return var2;
 117:
            var2 = _closure1_slot7;
            var2 = var2.RECENT;
            if(!(var2 !== var10)) { _fun0001_ip = 732; continue _fun0001 }
 134:
            var2 = _closure1_slot7;
            var2 = var2.PEOPLE;
            if(!(var2 !== var10)) { _fun0001_ip = 688; continue _fun0001 }
 151:
            var2 = _closure1_slot7;
            var2 = var2.MEMBERS;
            if(!(var2 !== var10)) { _fun0001_ip = 644; continue _fun0001 }
 168:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_CHANNELS;
            if(!(var2 !== var10)) { _fun0001_ip = 600; continue _fun0001 }
 185:
            var2 = _closure1_slot7;
            var2 = var2.MEDIA;
            if(!(var2 !== var10)) { _fun0001_ip = 546; continue _fun0001 }
 202:
            var2 = _closure1_slot7;
            var2 = var2.FILES;
            if(!(var2 !== var10)) { _fun0001_ip = 492; continue _fun0001 }
 219:
            var2 = _closure1_slot7;
            var2 = var2.LINKS;
            if(!(var2 !== var10)) { _fun0001_ip = 438; continue _fun0001 }
 236:
            var2 = _closure1_slot7;
            var2 = var2.THREADS;
            if(!(var2 !== var10)) { _fun0001_ip = 393; continue _fun0001 }
 253:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGES;
            if(!(var2 !== var10)) { _fun0001_ip = 339; continue _fun0001 }
 267:
            var2 = _closure1_slot7;
            var2 = var2.PINS;
            if(!(var2 !== var10)) { _fun0001_ip = 285; continue _fun0001 }
 281:
            var2 = null;
            return var2;
 285:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 16;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 339:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 15;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 393:
            var7 = _closure1_slot8;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 14;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.SearchTabsThreadScreen;
            var2 = {};
            var2['searchContext'] = var5;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 438:
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
 492:
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
 546:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['tab'] = var10;
            var2['searchContext'] = var5;
            var2['isFocused'] = var9;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 600:
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
 644:
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
 688:
            var7 = _closure1_slot8;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['searchContext'] = var5;
            var2['onViewableItemsChanged'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 732:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 7;
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
    var5 = 20;
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
        var1 = 17;
        var1 = var3[var1];
        var4 = undefined;
        var7 = var2.bind(var4)(var1);
        var1 = null;
        var6 = var1 != var11;
        var1 = '[SearchTabsPageContext] Context should not be null.';
        var1 = var7.bind(var4)(var6, var1);
        var1 = _closure1_slot9;
        var6 = var1.bind(var4)();
        var1 = 18;
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
        var1 = 19;
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