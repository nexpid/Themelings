// app/modules/search/native/components/tabs/pages/messages/PinsScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function InitialPinsScreen(arg1) {
        var1 = arg1;
        var2 = var1.searchContext;
        var _closure2_slot0 = var2;
        var11 = var1.isFocused;
        var _closure2_slot1 = var11;
        var4 = _closure1_slot6;
        var3 = var4.useState;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.isInitialSearchQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        var _closure2_slot2 = var1;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 6;
        var3 = var7[var3];
        var4 = undefined;
        var10 = var6.bind(var4)(var3);
        var9 = var10.useFullscreenPlaceholderCount;
        var3 = {};
        var12 = _closure1_slot7;
        var3['placeholderHeight'] = var12;
        var12 = 1;
        var3['numColumns'] = var12;
        var12 = var9.bind(var10)(var3);
        var _closure2_slot3 = var12;
        var10 = _closure1_slot3;
        var9 = var10.useEffect;
        var3 = new Array(3);
        var3[0] = var11;
        var3[1] = var1;
        var1 = var2.channelId;
        var3[2] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot2;
                if(!var2) { _fun0001_ip = 14; continue _fun0001 }
 10:
                var2 = _closure2_slot1;
 14:
                if(!var2) { _fun0001_ip = 62; continue _fun0001 }
 17:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchPins;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
 62:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var9.bind(var10)(var1, var3);
        var1 = 8;
        var1 = var7[var1];
        var10 = var6.bind(var4)(var1);
        var9 = var10.useStateFromStoresObject;
        var1 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot4;
                var2 = var4.getPins;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var4 = var2.bind(var4)(var1);
                var1 = {};
                var2 = null;
                var6 = var2 == var4;
                var5 = undefined;
                if(var6) { _fun0002_ip = 49; continue _fun0002 }
 43:
                var5 = var4.items;
 49:
                var1['items'] = var5;
                var2 = var2 == var4;
                if(var2) { _fun0002_ip = 80; continue _fun0002 }
 61:
                var4 = var4.state;
                var3 = _closure1_slot5;
                var3 = var3.LOADING;
                var2 = var4 === var3;
 80:
                var1['showLoading'] = var2;
                return var1;
            }
        };
        var3 = var9.bind(var10)(var3, var1);
        var1 = var3.items;
        var _closure2_slot4 = var1;
        var10 = var3.showLoading;
        var _closure2_slot5 = var10;
        var3 = 9;
        var3 = var7[var3];
        var11 = var6.bind(var4)(var3);
        var9 = var11.useOnPressMessageItem;
        var3 = {};
        var3['searchContext'] = var2;
        var13 = var9.bind(var11)(var3);
        var _closure2_slot6 = var13;
        var11 = _closure1_slot3;
        var9 = var11.useCallback;
        var3 = new Array(2);
        var3[0] = var13;
        var3[1] = var2;
        var2 = function(arg1, arg2) {
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.messageId;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var2);
            var6 = var7.trackSearchResultClicked;
            var5 = {};
            var8 = _closure2_slot0;
            var5['searchContext'] = var8;
            var5['channelId'] = var4;
            var5['messageId'] = var3;
            var8 = arg2;
            var5['index'] = var8;
            var5 = var6.bind(var7)(var5);
            var2 = _closure2_slot6;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var11 = var9.bind(var11)(var2, var3);
        var _closure2_slot7 = var11;
        var9 = _closure1_slot3;
        var3 = var9.useRef;
        var2 = {};
        var2 = var3.bind(var9)(var2);
        var _closure2_slot8 = var2;
        var9 = _closure1_slot3;
        var3 = var9.useMemo;
        var2 = new Array(4);
        var2[0] = var12;
        var2[1] = var11;
        var2[2] = var10;
        var2[3] = var1;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = _closure2_slot4;
                var3 = null;
                if(!(var3 != var4)) { _fun0003_ip = 44; continue _fun0003 }
 23:
                var4 = _closure2_slot4;
                var3 = var4.forEach;
                var2 = function(arg1, arg2) {
                    var1 = arg1;
                    var7 = var1.message;
                    var1 = arg2;
                    var _closure4_slot0 = var1;
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var4 = _closure1_slot8;
                    var4 = var4.MESSAGE;
                    var1['type'] = var4;
                    var4 = {};
                    var4['message'] = var7;
                    var6 = function onPress(arg1) {
                        var1 = arg1;
                        var2 = var1.channelId;
                        var1 = var1.messageId;
                        var4 = _closure2_slot7;
                        var3 = {};
                        var3['channelId'] = var2;
                        var3['messageId'] = var1;
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var4['onPress'] = var6;
                    var5 = _closure1_slot9;
                    var4['lineClamp'] = var5;
                    var5 = _closure2_slot8;
                    var4['messageSizeCacheRef'] = var5;
                    var1['props'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
 44:
                var2 = _closure2_slot5;
                if(!var2) { _fun0003_ip = 132; continue _fun0003 }
 51:
                var2 = _closure2_slot3;
                var6 = 0;
                var2 = var6 < var2;
                var4 = global;
                var3 = 'message-placeholder-';
                if(!var2) { _fun0003_ip = 132; continue _fun0003 }
 75:
                var8 = var1.push;
                var2 = {};
                var9 = _closure1_slot8;
                var9 = var9.MESSAGE_PLACEHOLDER;
                var2['type'] = var9;
                var9 = var4.HermesInternal;
                var9 = var9.concat;
                var9 = var9.bind(var3)(var6);
                var2['key'] = var9;
                var2 = var8.bind(var1)(var2);
                var6 = var6 + 1;
                var2 = _closure2_slot3;
                if(var6 < var2) { _fun0003_ip = 75; continue _fun0003 }
 132:
                return var1;
            }
        };
        var9 = var3.bind(var9)(var1, var2);
        var1 = 11;
        var1 = var7[var1];
        var2 = var6.bind(var4)(var1);
        var1 = var2.useContentContainerStyles;
        var10 = var1.bind(var2)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot1;
        var1 = 12;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var10 = var10.messagesContentContainer;
        var1['contentContainerStyle'] = var10;
        var1['data'] = var9;
        var8 = function onEndReached() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.fetchPins;
                var2 = _closure2_slot0;
                var3 = var2.channelId;
                var2 = {};
                var6 = _closure2_slot4;
                var8 = null;
                var9 = var8 == var6;
                var6 = undefined;
                if(var9) { _fun0004_ip = 96; continue _fun0004 }
 60:
                var10 = _closure2_slot4;
                var9 = var10.at;
                var7 = -1;
                var7 = var9.bind(var10)(var7);
                var8 = var8 == var7;
                var6 = undefined;
                if(var8) { _fun0004_ip = 96; continue _fun0004 }
 90:
                var6 = var7.pinnedAt;
 96:
                var2['before'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var1['onEndReached'] = var8;
        var5 = _closure1_slot10;
        var1['estimatedItemSize'] = var5;
        var5 = 13;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.MessageVerticalSeparator;
        var1['ItemSeparatorComponent'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot7 = var8;
    var8 = var4.SearchListItemTypes;
    var _closure1_slot8 = var8;
    var8 = var4.SEARCH_PINNED_MESSAGES_LINE_CLAMP;
    var _closure1_slot9 = var8;
    var4 = var4.MESSAGE_ESTIMATED_ITEM_SIZE;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function PinsScreen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var9 = var1.searchContext;
            var8 = var1.tab;
            var7 = var1.isFocused;
            var6 = var1.onViewableItemsChanged;
            var4 = _closure1_slot6;
            var3 = var4.useState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var4)(var9, var1);
            if(!var1) { _fun0005_ip = 149; continue _fun0005 }
 57:
            var3 = var9.type;
            var1 = _closure1_slot11;
            var1 = var1.CHANNEL;
            if(!(var3 !== var1)) { _fun0005_ip = 114; continue _fun0005 }
 76:
            var3 = var9.type;
            var1 = _closure1_slot11;
            var1 = var1.GUILD_CHANNEL;
            if(!(var3 !== var1)) { _fun0005_ip = 114; continue _fun0005 }
 95:
            var3 = var9.type;
            var1 = _closure1_slot11;
            var1 = var1.THREAD;
            if(!(var3 === var1)) { _fun0005_ip = 149; continue _fun0005 }
 114:
            var5 = _closure1_slot12;
            var4 = _closure1_slot13;
            var3 = {};
            var3['searchContext'] = var9;
            var3['tab'] = var8;
            var3['isFocused'] = var7;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3);
            _fun0005_ip = 203; continue _fun0005;
 149:
            var5 = _closure1_slot12;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['searchContext'] = var9;
            var2['tab'] = var8;
            var2['isFocused'] = var7;
            var2['onViewableItemsChanged'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 203:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/pages/messages/PinsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();