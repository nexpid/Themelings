// app/modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
    var4 = var4.SearchResultContentEntityTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function BaseMessagesScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var13 = var3.data;
            var _closure2_slot0 = var13;
            var6 = var3.searchContext;
            var _closure2_slot1 = var6;
            var18 = var3.tab;
            var _closure2_slot2 = var18;
            var22 = var3.isFocused;
            var _closure2_slot3 = var22;
            var1 = var3.isFirstPageLoading;
            var2 = var3.isNextPageLoading;
            var12 = var3.estimatedItemSize;
            var14 = var3.contentContainerStyle;
            var9 = var3.ItemSeparatorComponent;
            var8 = var3.numColumns;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            _closure2_slot4 = var1;
            var7 = _closure1_slot5;
            var4 = var7.useState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getSearchResultsQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var4.bind(var7)(var6, var3);
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 6;
            var3 = var21[var3];
            var4 = var17.bind(var5)(var3);
            var3 = var4.getSearchTabFetchId;
            var3 = var3.bind(var4)(var6, var18, var7);
            _closure2_slot5 = var3;
            var7 = 7;
            var3 = var21[var7];
            var16 = var17.bind(var5)(var3);
            var15 = var16.useStateFromStores;
            var3 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var3;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getIsIndexing;
                var1 = _closure2_slot5;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var15.bind(var16)(var11, var4);
            var7 = var21[var7];
            var15 = var17.bind(var5)(var7);
            var11 = var15.useStateFromStoresObject;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
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
            var3 = var11.bind(var15)(var7, var3);
            var19 = var3.isHistoricalIndexing;
            _closure2_slot6 = var19;
            var20 = var3.documentsIndexed;
            _closure2_slot7 = var20;
            var3 = 8;
            var3 = var21[var3];
            var11 = var17.bind(var5)(var3);
            var7 = var11.useMessageSearchErrorScreen;
            var3 = {};
            var3['searchContext'] = var6;
            var3['tab'] = var18;
            var16 = var13.length;
            var15 = 0;
            var15 = var16 > var15;
            var3['hasListItems'] = var15;
            var15 = var7.bind(var11)(var3);
            var11 = var15.hasError;
            _closure2_slot8 = var11;
            var7 = var15.errorText;
            var3 = var15.isErrorFullscreen;
            var23 = var15.isErrorToast;
            _closure2_slot9 = var23;
            var15 = var15.showErrorToast;
            _closure2_slot10 = var15;
            var16 = 9;
            var16 = var21[var16];
            var17 = var17.bind(var5)(var16);
            var16 = var17.useSearchFetchPendingManager;
            var16 = var16.bind(var17)(var6);
            _closure2_slot11 = var16;
            var17 = _closure1_slot3;
            var24 = var17.useCallback;
            var25 = var13.length;
            var21 = new Array(7);
            var21[0] = var25;
            var21[1] = var1;
            var21[2] = var22;
            var21[3] = var11;
            var21[4] = var6;
            var21[5] = var18;
            var21[6] = var16;
            var11 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot11;
                    var3 = var4.add;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 4; continue _fun0002;
case 8:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.fetchNextMessages;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0002_ip = 4; continue _fun0002;
case 10:
                    var4 = _closure2_slot11;
                    var3 = var4.add;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 4; continue _fun0002;
case 6:
                    var3 = _closure2_slot11;
                    var2 = var3.add;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var24.bind(var17)(var11, var21);
            var24 = var17.useEffect;
            var21 = new Array(5);
            var21[0] = var22;
            var21[1] = var1;
            var21[2] = var6;
            var21[3] = var16;
            var21[4] = var18;
            var16 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure2_slot4;
                    var2 = !var3;
case 12:
                    if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var4 = _closure2_slot11;
                    var3 = var4.flush;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var24.bind(var17)(var16, var21);
            var21 = var17.useEffect;
            var16 = new Array(4);
            var16[0] = var23;
            var16[1] = var1;
            var16[2] = var22;
            var16[3] = var15;
            var15 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = _closure2_slot4;
                    var2 = !var3;
case 12:
                    if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 15:
                    var2 = _closure2_slot3;
case 16:
                    if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var21.bind(var17)(var15, var16);
            var16 = var17.useMemo;
            var15 = new Array(4);
            var15[0] = var20;
            var15[1] = var19;
            var15[2] = var6;
            var15[3] = var18;
            var10 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var3 = null;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var2 = _closure2_slot7;
                    var2 = var3 != var2;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 18:
                    var4 = _closure2_slot7;
                    var2 = 0;
                    var2 = var4 > var2;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 21:
                    var5 = _closure1_slot7;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
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
case 19:
                    return var1;
                }
            };
            var10 = var16.bind(var17)(var10, var15);
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 13;
            var1 = var15[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['text'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 27; continue _fun0001;
case 24:
            var7 = _closure1_slot7;
            var4 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 14;
            var3 = var15[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['contentContainerStyle'] = var14;
            var3['data'] = var13;
            var3['estimatedItemSize'] = var12;
            var3['onEndReached'] = var11;
            var3['ListHeaderComponent'] = var10;
            var3['ItemSeparatorComponent'] = var9;
            var3['numColumns'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 27:
            _fun0001_ip = 28; continue _fun0001;
case 22:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['searchContext'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 28:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function trackMessageItemPress(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var10 = var1.searchContext;
            var9 = var1.channelId;
            var7 = var1.messageId;
            var6 = var1.index;
            var2 = _closure1_slot4;
            var1 = var2.getMessage;
            var8 = var1.bind(var2)(var7);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackSearchResultClicked;
            var2 = {};
            var2['searchContext'] = var10;
            var2['channelId'] = var9;
            var2['messageId'] = var7;
            var9 = null;
            var10 = var9 == var8;
            var7 = undefined;
            if(var10) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var8 = var8.author;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0006_ip = 29; continue _fun0006 }
case 31:
            var7 = var8.id;
case 29:
            var2['userId'] = var7;
            var2['index'] = var6;
            var5 = _closure1_slot6;
            var5 = var5.MESSAGE;
            var2['entityType'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['trackMessageItemPress'] = var2;
    return var1;
})();