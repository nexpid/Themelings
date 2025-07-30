// app/modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function BaseMessagesScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.data;
            var _closure2_slot0 = var14;
            var6 = var2.searchContext;
            var _closure2_slot1 = var6;
            var19 = var2.tab;
            var _closure2_slot2 = var19;
            var23 = var2.isFocused;
            var _closure2_slot3 = var23;
            var3 = var2.isFirstPageLoading;
            var1 = var2.isNextPageLoading;
            var13 = var2.estimatedItemSize;
            var15 = var2.contentContainerStyle;
            var10 = var2.ItemSeparatorComponent;
            var9 = var2.numColumns;
            var8 = var2.onViewableItemsChanged;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            if(var3) { _fun0001_ip = 122; continue _fun0001 }
 119:
            var3 = var1;
 122:
            _closure2_slot4 = var3;
            var7 = _closure1_slot5;
            var4 = var7.useState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getSearchResultsQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var4.bind(var7)(var6, var1);
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 4;
            var1 = var18[var1];
            var4 = var17.bind(var5)(var1);
            var1 = var4.getSearchTabFetchId;
            var1 = var1.bind(var4)(var6, var19, var7);
            _closure2_slot5 = var1;
            var7 = 6;
            var1 = var18[var7];
            var20 = var17.bind(var5)(var1);
            var16 = var20.useStateFromStores;
            var1 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var1;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getIsIndexing;
                var1 = _closure2_slot5;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var16.bind(var20)(var12, var4);
            var7 = var18[var7];
            var16 = var17.bind(var5)(var7);
            var12 = var16.useStateFromStoresObject;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot4;
                var5 = var4.getIsHistoricalIndexing;
                var3 = _closure2_slot5;
                var3 = var5.bind(var4)(var3);
                var1['isHistoricalIndexing'] = var3;
                var3 = var4.getDocumentsIndexed;
                var2 = _closure2_slot5;
                var2 = var3.bind(var4)(var2);
                var1['documentsIndexed'] = var2;
                return var1;
            };
            var1 = var12.bind(var16)(var7, var1);
            var20 = var1.isHistoricalIndexing;
            _closure2_slot6 = var20;
            var21 = var1.documentsIndexed;
            _closure2_slot7 = var21;
            var1 = 7;
            var1 = var18[var1];
            var12 = var17.bind(var5)(var1);
            var7 = var12.useMessageSearchErrorScreen;
            var1 = {};
            var1['searchContext'] = var6;
            var1['tab'] = var19;
            var12 = var7.bind(var12)(var1);
            var1 = var12.canShowErrorScreen;
            var7 = var12.errorScreenText;
            var24 = var12.canShowErrorToast;
            _closure2_slot8 = var24;
            var16 = var12.showErrorToast;
            _closure2_slot9 = var16;
            var12 = 8;
            var12 = var18[var12];
            var17 = var17.bind(var5)(var12);
            var12 = var17.useSearchFetchPendingManager;
            var17 = var12.bind(var17)(var6);
            _closure2_slot10 = var17;
            var18 = _closure1_slot3;
            var25 = var18.useCallback;
            var12 = var14.length;
            var22 = new Array(6);
            var22[0] = var12;
            var22[1] = var3;
            var22[2] = var23;
            var22[3] = var17;
            var22[4] = var19;
            var22[5] = var6;
            var12 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0002_ip = 117; continue _fun0002 }
 18:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 99; continue _fun0002 }
 25:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 52; continue _fun0002 }
 32:
                    var4 = _closure2_slot10;
                    var3 = var4.add;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 117; continue _fun0002;
 52:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.fetchNextMessages;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0002_ip = 117; continue _fun0002;
 99:
                    var3 = _closure2_slot10;
                    var2 = var3.add;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
 117:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var25.bind(var18)(var12, var22);
            var25 = var18.useEffect;
            var22 = new Array(5);
            var22[0] = var23;
            var22[1] = var3;
            var22[2] = var6;
            var22[3] = var17;
            var22[4] = var19;
            var17 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0003_ip = 27; continue _fun0003 }
 10:
                    var3 = _closure2_slot3;
                    if(!var3) { _fun0003_ip = 24; continue _fun0003 }
 17:
                    var4 = _closure2_slot4;
                    var3 = !var4;
 24:
                    var2 = var3;
 27:
                    if(!var2) { _fun0003_ip = 54; continue _fun0003 }
 30:
                    var4 = _closure2_slot10;
                    var3 = var4.flush;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var25.bind(var18)(var17, var22);
            var22 = var18.useEffect;
            var17 = new Array(5);
            var17[0] = var24;
            var24 = var14.length;
            var17[1] = var24;
            var17[2] = var23;
            var17[3] = var3;
            var17[4] = var16;
            var16 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot4;
                    var2 = !var2;
                    if(!var2) { _fun0004_ip = 17; continue _fun0004 }
 13:
                    var2 = _closure2_slot8;
 17:
                    if(!var2) { _fun0004_ip = 24; continue _fun0004 }
 20:
                    var2 = _closure2_slot3;
 24:
                    if(!var2) { _fun0004_ip = 42; continue _fun0004 }
 27:
                    var3 = _closure2_slot0;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
 42:
                    if(!var2) { _fun0004_ip = 55; continue _fun0004 }
 45:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var22.bind(var18)(var16, var17);
            var17 = var18.useMemo;
            var16 = new Array(4);
            var16[0] = var21;
            var16[1] = var20;
            var16[2] = var6;
            var16[3] = var19;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot6;
                    var3 = null;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 106; continue _fun0005 }
 14:
                    var2 = _closure2_slot7;
                    var2 = var3 != var2;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 106; continue _fun0005 }
 27:
                    var4 = _closure2_slot7;
                    var2 = 0;
                    var2 = var4 > var2;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 106; continue _fun0005 }
 42:
                    var5 = _closure1_slot6;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot1;
                    var2['searchContext'] = var7;
                    var7 = _closure2_slot7;
                    var2['documentsIndexed'] = var7;
                    var6 = _closure2_slot2;
                    var2['tab'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 106:
                    return var1;
                }
            };
            var11 = var17.bind(var18)(var11, var16);
            if(var4) { _fun0001_ip = 696; continue _fun0001 }
 568:
            if(var3) { _fun0001_ip = 623; continue _fun0001 }
 571:
            if(!var1) { _fun0001_ip = 623; continue _fun0001 }
 574:
            var3 = var14.length;
            var1 = 0;
            if(!(var1 === var3)) { _fun0001_ip = 623; continue _fun0001 }
 585:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 12;
            var1 = var16[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['text'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 694; continue _fun0001;
 623:
            var7 = _closure1_slot6;
            var4 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 13;
            var3 = var16[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['contentContainerStyle'] = var15;
            var3['data'] = var14;
            var3['estimatedItemSize'] = var13;
            var3['onEndReached'] = var12;
            var3['ListHeaderComponent'] = var11;
            var3['ItemSeparatorComponent'] = var10;
            var3['numColumns'] = var9;
            var3['onViewableItemsChanged'] = var8;
            var1 = var7.bind(var5)(var4, var3);
 694:
            _fun0001_ip = 733; continue _fun0001;
 696:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['searchContext'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 733:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function trackMessageItemPress(arg1) {
        var1 = arg1;
        var9 = var1.searchContext;
        var8 = var1.channelId;
        var7 = var1.messageId;
        var6 = var1.index;
        var12 = var1.tab;
        var4 = _closure1_slot5;
        var3 = var4.getState;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.getSearchResultsQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var11 = var3.bind(var4)(var9, var1);
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 4;
        var5 = var4[var1];
        var1 = undefined;
        var10 = var3.bind(var1)(var5);
        var5 = var10.getSearchTabFetchId;
        var10 = var5.bind(var10)(var9, var12, var11);
        var5 = _closure1_slot4;
        var2 = var5.getTotalCount;
        var5 = var2.bind(var5)(var10);
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.trackSearchResultClicked;
        var2 = {};
        var2['searchContext'] = var9;
        var2['channelId'] = var8;
        var2['messageId'] = var7;
        var2['index'] = var6;
        var2['totalSearchResults'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['trackMessageItemPress'] = var2;
    return var1;
})();