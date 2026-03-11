// app/modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var10 = 0;
    var2 = var8[var10];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 1;
    var6 = var8[var9];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var6);
    var _closure1_slot4 = var2;
    var12 = 2;
    var2 = var8[var12];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var11 = 3;
    var2 = var8[var11];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var6 = 4;
    var2 = var8[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var4 = {};
    var4['FavoriteChannels'] = var10;
    var2 = 'FavoriteChannels';
    var4[var10] = var2;
    var4['Channels'] = var9;
    var2 = 'Channels';
    var4[var9] = var2;
    var4['Separator'] = var12;
    var2 = 'Separator';
    var4[var12] = var2;
    var4['SuggestedFriends'] = var11;
    var2 = 'SuggestedFriends';
    var4[var11] = var2;
    var4['Placeholders'] = var6;
    var2 = 'Placeholders';
    var4[var6] = var2;
    var2 = {};
    var2['HappeningNow'] = var10;
    var6 = 'HappeningNow';
    var2[var10] = var6;
    var2['EmptyState'] = var9;
    var6 = 'EmptyState';
    var2[var9] = var6;
    var _closure1_slot9 = var2;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useMessagesData() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var14 = 6;
            var3 = var5[var14];
            var6 = undefined;
            var9 = var4.bind(var6)(var3);
            var8 = var9.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var7 = new Array(2);
            var7[0] = var3;
            var3 = _closure1_slot5;
            var7[1] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot6;
                var3 = var4.getSessionId;
                var4 = var3.bind(var4)();
                var3 = null;
                var3 = var3 != var4;
                var1['connected'] = var3;
                var3 = _closure1_slot5;
                var2 = var3.isConnected;
                var2 = var2.bind(var3)();
                var1['connectedToGateway'] = var2;
                return var1;
            };
            var3 = var8.bind(var9)(var7, var3);
            var13 = var3.connected;
            var _closure2_slot0 = var13;
            var12 = var3.connectedToGateway;
            var _closure2_slot1 = var12;
            var3 = var5[var14];
            var8 = var4.bind(var6)(var3);
            var7 = var8.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getSortedChannels;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var6)(var7, var3);
            var3 = 0;
            var11 = var4[var3];
            var _closure2_slot2 = var11;
            var3 = 1;
            var10 = var4[var3];
            var _closure2_slot3 = var10;
            var4 = _closure1_slot1;
            var3 = 7;
            var3 = var5[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var5 = 'Messages Tab';
            var3['location'] = var5;
            var5 = var13;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var12;
case 2:
            var3['isConnected'] = var5;
            var3 = var4.bind(var6)(var3);
            var5 = var3.setAdded;
            var _closure2_slot4 = var5;
            var8 = var3.friendSuggestions;
            var _closure2_slot5 = var8;
            var9 = var3.numFriendSuggestions;
            var _closure2_slot6 = var9;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 8;
            var7 = var3[var7];
            var7 = var4.bind(var6)(var7);
            var15 = var7.HappeningNowCardsDisabled;
            var7 = var15.useSetting;
            var7 = var7.bind(var15)();
            var _closure2_slot7 = var7;
            var3 = var3[var14];
            var14 = var4.bind(var6)(var3);
            var6 = var14.useStateFromStores;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getFriendCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var14)(var4, var3);
            var _closure2_slot8 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useRef;
            var2 = -1;
            var2 = var3.bind(var4)(var2);
            var _closure2_slot9 = var2;
            var3 = var4.useMemo;
            var2 = new Array(9);
            var2[0] = var13;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var9;
            var2[5] = var8;
            var2[6] = var7;
            var2[7] = var6;
            var2[8] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var2 = var1.current;
                    var1 = -1;
                    if(!(var1 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot1;
case 6:
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot9;
                    var1 = var2.current;
                    var1 = var1 + 1;
                    var2['current'] = var1;
                    _fun0002_ip = 8; continue _fun0002;
case 4:
                    var2 = _closure2_slot9;
                    var1 = 0;
                    var2['current'] = var1;
case 8:
                    var1 = _closure2_slot2;
                    var2 = var1.length;
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var1 = var2 + var1;
                    var9 = 0;
                    var5 = var1 > var9;
                    var1 = _closure2_slot6;
                    var4 = var1 > var9;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var1 = global;
                    var7 = var1.Math;
                    var3 = var7.min;
                    var2 = _closure2_slot6;
                    var1 = 5;
                    var3 = var3.bind(var7)(var2, var1);
                    _fun0002_ip = 14; continue _fun0002;
case 10:
                    if(var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var2 = _closure2_slot0;
                    var1 = 15;
                    if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 15:
                    var1 = 0;
case 17:
                    var3 = var1;
case 14:
                    var2 = new Array(0);
                    var7 = var2.push;
                    var1 = _closure2_slot2;
                    var1 = var1.length;
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var1 = 0;
                    if(!var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var1 = 1;
case 18:
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var1 = 0;
                    if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var8 = _closure2_slot0;
                    var1 = 0;
                    if(!var8) { _fun0002_ip = 20; continue _fun0002 }
case 22:
                    var8 = _closure2_slot1;
                    var1 = 0;
                    if(!var8) { _fun0002_ip = 20; continue _fun0002 }
case 23:
                    var8 = _closure2_slot5;
                    var1 = var8.length;
case 20:
                    var1 = var7.bind(var2)(var1);
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    if(var5) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var3 = null;
                    if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var1 = _closure1_slot9;
                    var3 = var1.EmptyState;
case 26:
                    _fun0002_ip = 28; continue _fun0002;
case 24:
                    var8 = _closure2_slot7;
                    var1 = null;
                    if(var8) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var8 = _closure1_slot9;
                    var1 = var8.HappeningNow;
case 29:
                    var3 = var1;
case 28:
                    var1 = {};
                    var8 = _closure2_slot3;
                    var1['channels'] = var8;
                    var8 = _closure2_slot2;
                    var1['channelFavorites'] = var8;
                    var8 = _closure2_slot9;
                    var8 = var8.current;
                    var8 = var8 > var9;
                    var7 = null;
                    if(!var8) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var8 = _closure2_slot9;
                    var10 = var8.current;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = '';
                    var7 = var9.bind(var8)(var10);
case 31:
                    var1['dataKey'] = var7;
                    var7 = !var5;
                    if(var5) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var7 = _closure2_slot0;
case 33:
                    if(!var7) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var7 = !var4;
case 35:
                    var1['showFullscreenEmptyState'] = var7;
                    var7 = _closure2_slot4;
                    var1['setAddedFriendSuggestions'] = var7;
                    var7 = _closure2_slot5;
                    var1['friendSuggestions'] = var7;
                    var1['renderHeader'] = var3;
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var7 = _closure2_slot8;
                    var6 = 4;
                    var3 = var7 < var6;
case 37:
                    if(!var3) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var3 = var5;
case 39:
                    if(var3) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var3 = var4;
case 41:
                    var1['renderFooter'] = var3;
                    var1['sections'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['MessagesDataSections'] = var4;
    var3['MessagesDataHeader'] = var2;
    return var1;
})();