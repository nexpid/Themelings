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
    var13 = 2;
    var2 = var8[var13];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var12 = 3;
    var2 = var8[var12];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var11 = 4;
    var2 = var8[var11];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var6 = 5;
    var2 = var8[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var4 = {};
    var4['IncomingRequests'] = var10;
    var2 = 'IncomingRequests';
    var4[var10] = var2;
    var4['FavoriteChannels'] = var9;
    var2 = 'FavoriteChannels';
    var4[var9] = var2;
    var4['Channels'] = var13;
    var2 = 'Channels';
    var4[var13] = var2;
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
    var _closure1_slot10 = var2;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useMessagesData() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 7;
            var3 = var8[var6];
            var18 = undefined;
            var7 = var10.bind(var18)(var3);
            var5 = var7.useStateFromStoresObject;
            var3 = _closure1_slot7;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot5;
            var4[1] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot7;
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
            var3 = var5.bind(var7)(var4, var3);
            var14 = var3.connected;
            var _closure2_slot0 = var14;
            var13 = var3.connectedToGateway;
            var _closure2_slot1 = var13;
            var3 = var8[var6];
            var7 = var10.bind(var18)(var3);
            var5 = var7.useStateFromStoresArray;
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getSortedChannels;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var7)(var4, var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var5 = var4.bind(var18)(var5, var3);
            var4 = 0;
            var12 = var5[var4];
            var _closure2_slot2 = var12;
            var3 = 1;
            var11 = var5[var3];
            var _closure2_slot3 = var11;
            var7 = _closure1_slot1;
            var19 = 8;
            var3 = var8[var19];
            var9 = var7.bind(var18)(var3);
            var5 = var9.useExperiment;
            var3 = {};
            var15 = 'DM List';
            var3['location'] = var15;
            var3 = var5.bind(var9)(var3);
            var9 = var3.showInDMs;
            var3 = var3.removeItemAfterAck;
            var5 = var8[var6];
            var16 = var10.bind(var18)(var5);
            var15 = var16.useStateFromStoresArray;
            var5 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var1 = _closure1_slot6;
                var3 = var1.localItems;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = arg1;
                        var4 = var3.type;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 9;
                        var1 = var1[var6];
                        var5 = undefined;
                        var1 = var7.bind(var5)(var1);
                        var1 = var1.NotificationCenterLocalItems;
                        var1 = var1.INCOMING_FRIEND_REQUESTS;
                        var1 = var4 === var1;
                        if(var1) { _fun0002_ip = 90; continue _fun0002 }
 52:
                        var3 = var3.type;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var4.bind(var5)(var2);
                        var2 = var2.NotificationCenterLocalItems;
                        var2 = var2.INCOMING_GAME_FRIEND_REQUESTS;
                        var1 = var3 === var2;
 90:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var15.bind(var16)(var10, var5);
            var5 = 10;
            var5 = var8[var5];
            var7 = var7.bind(var18)(var5);
            var5 = {};
            var8 = 'Messages Tab';
            var5['location'] = var8;
            var8 = var14;
            if(!var8) { _fun0001_ip = 284; continue _fun0001 }
 281:
            var8 = var13;
 284:
            var5['isConnected'] = var8;
            var7 = var7.bind(var18)(var5);
            var5 = var7.setAdded;
            var _closure2_slot4 = var5;
            var8 = var7.friendSuggestions;
            var _closure2_slot5 = var8;
            var10 = var7.numFriendSuggestions;
            var _closure2_slot6 = var10;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var7 = var17.bind(var18)(var7);
            var20 = var7.HappeningNowCardsDisabled;
            var7 = var20.useSetting;
            var7 = var7.bind(var20)();
            var _closure2_slot7 = var7;
            var6 = var15[var6];
            var22 = var17.bind(var18)(var6);
            var21 = var22.useStateFromStores;
            var6 = _closure1_slot8;
            var20 = new Array(1);
            var20[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFriendCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var21.bind(var22)(var20, var6);
            var _closure2_slot8 = var6;
            var15 = var15[var19];
            var18 = var17.bind(var18)(var15);
            var17 = var18.useNumFriendRequestsForBadging;
            var15 = 'DMs';
            var15 = var17.bind(var18)(var15);
            if(!var9) { _fun0001_ip = 445; continue _fun0001 }
 436:
            var16 = var16.length;
            var9 = var16 > var4;
 445:
            if(!var9) { _fun0001_ip = 468; continue _fun0001 }
 448:
            var3 = !var3;
            if(var3) { _fun0001_ip = 458; continue _fun0001 }
 454:
            var3 = var15 > var4;
 458:
            if(var3) { _fun0001_ip = 465; continue _fun0001 }
 461:
            var3 = var4 === var6;
 465:
            var9 = var3;
 468:
            var _closure2_slot9 = var9;
            var4 = _closure1_slot4;
            var3 = var4.useRef;
            var2 = -1;
            var2 = var3.bind(var4)(var2);
            var _closure2_slot10 = var2;
            var3 = var4.useMemo;
            var2 = new Array(10);
            var2[0] = var14;
            var2[1] = var13;
            var2[2] = var12;
            var2[3] = var11;
            var2[4] = var10;
            var2[5] = var9;
            var2[6] = var8;
            var2[7] = var7;
            var2[8] = var6;
            var2[9] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot10;
                    var2 = var1.current;
                    var1 = -1;
                    if(!(var1 !== var2)) { _fun0003_ip = 56; continue _fun0003 }
 22:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 29:
                    var1 = _closure2_slot1;
 33:
                    if(!var1) { _fun0003_ip = 68; continue _fun0003 }
 36:
                    var2 = _closure2_slot10;
                    var1 = var2.current;
                    var1 = var1 + 1;
                    var2['current'] = var1;
                    _fun0003_ip = 68; continue _fun0003;
 56:
                    var2 = _closure2_slot10;
                    var1 = 0;
                    var2['current'] = var1;
 68:
                    var1 = _closure2_slot2;
                    var2 = var1.length;
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var1 = var2 + var1;
                    var9 = 0;
                    var5 = var1 > var9;
                    var1 = _closure2_slot6;
                    var4 = var1 > var9;
                    if(!var4) { _fun0003_ip = 149; continue _fun0003 }
 107:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0003_ip = 121; continue _fun0003 }
 114:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0003_ip = 149; continue _fun0003 }
 121:
                    var1 = global;
                    var7 = var1.Math;
                    var3 = var7.min;
                    var2 = _closure2_slot6;
                    var1 = 5;
                    var3 = var3.bind(var7)(var2, var1);
                    _fun0003_ip = 167; continue _fun0003;
 149:
                    if(var5) { _fun0003_ip = 162; continue _fun0003 }
 152:
                    var2 = _closure2_slot0;
                    var1 = 15;
                    if(!var2) { _fun0003_ip = 164; continue _fun0003 }
 162:
                    var1 = 0;
 164:
                    var3 = var1;
 167:
                    var2 = new Array(0);
                    var7 = var2.push;
                    var8 = _closure2_slot9;
                    var1 = 0;
                    if(!var8) { _fun0003_ip = 188; continue _fun0003 }
 185:
                    var1 = 1;
 188:
                    var1 = var7.bind(var2)(var1);
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
                    if(!var4) { _fun0003_ip = 244; continue _fun0003 }
 241:
                    var1 = 1;
 244:
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var1 = 0;
                    if(!var4) { _fun0003_ip = 286; continue _fun0003 }
 259:
                    var8 = _closure2_slot0;
                    var1 = 0;
                    if(!var8) { _fun0003_ip = 286; continue _fun0003 }
 268:
                    var8 = _closure2_slot1;
                    var1 = 0;
                    if(!var8) { _fun0003_ip = 286; continue _fun0003 }
 277:
                    var8 = _closure2_slot5;
                    var1 = var8.length;
 286:
                    var1 = var7.bind(var2)(var1);
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    if(var5) { _fun0003_ip = 324; continue _fun0003 }
 304:
                    var3 = null;
                    if(!var4) { _fun0003_ip = 322; continue _fun0003 }
 309:
                    var1 = _closure1_slot10;
                    var3 = var1.EmptyState;
 322:
                    _fun0003_ip = 349; continue _fun0003;
 324:
                    var8 = _closure2_slot7;
                    var1 = null;
                    if(var8) { _fun0003_ip = 346; continue _fun0003 }
 333:
                    var8 = _closure1_slot10;
                    var1 = var8.HappeningNow;
 346:
                    var3 = var1;
 349:
                    var1 = {};
                    var8 = _closure2_slot3;
                    var1['channels'] = var8;
                    var8 = _closure2_slot2;
                    var1['channelFavorites'] = var8;
                    var8 = _closure2_slot10;
                    var8 = var8.current;
                    var8 = var8 > var9;
                    var7 = null;
                    if(!var8) { _fun0003_ip = 418; continue _fun0003 }
 387:
                    var8 = _closure2_slot10;
                    var10 = var8.current;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = '';
                    var7 = var9.bind(var8)(var10);
 418:
                    var1['dataKey'] = var7;
                    var7 = !var5;
                    if(var5) { _fun0003_ip = 433; continue _fun0003 }
 429:
                    var7 = _closure2_slot0;
 433:
                    if(!var7) { _fun0003_ip = 439; continue _fun0003 }
 436:
                    var7 = !var4;
 439:
                    if(!var7) { _fun0003_ip = 449; continue _fun0003 }
 442:
                    var8 = _closure2_slot9;
                    var7 = !var8;
 449:
                    var1['showFullscreenEmptyState'] = var7;
                    var7 = _closure2_slot4;
                    var1['setAddedFriendSuggestions'] = var7;
                    var7 = _closure2_slot5;
                    var1['friendSuggestions'] = var7;
                    var1['renderHeader'] = var3;
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0003_ip = 495; continue _fun0003 }
 484:
                    var7 = _closure2_slot8;
                    var6 = 4;
                    var3 = var7 < var6;
 495:
                    if(!var3) { _fun0003_ip = 501; continue _fun0003 }
 498:
                    var3 = var5;
 501:
                    if(var3) { _fun0003_ip = 507; continue _fun0003 }
 504:
                    var3 = var4;
 507:
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