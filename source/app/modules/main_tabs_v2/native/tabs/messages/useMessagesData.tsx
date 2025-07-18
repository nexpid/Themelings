// app/modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var4 = native3;
    var3 = native6;
    var8 = native7;
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
    var2 = native4;
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
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var15 = 7;
            var3 = var10[var15];
            var6 = undefined;
            var7 = var8.bind(var6)(var3);
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
            var3 = var10[var15];
            var7 = var8.bind(var6)(var3);
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
            var4 = var4.bind(var6)(var5, var3);
            var5 = 0;
            var12 = var4[var5];
            var _closure2_slot2 = var12;
            var3 = 1;
            var11 = var4[var3];
            var _closure2_slot3 = var11;
            var7 = _closure1_slot1;
            var4 = 8;
            var3 = var10[var4];
            var9 = var7.bind(var6)(var3);
            var7 = var9.useExperiment;
            var3 = {};
            var16 = 'DM List';
            var3['location'] = var16;
            var3 = var7.bind(var9)(var3);
            var9 = var3.showInDMs;
            var3 = var3.removeItemAfterAck;
            var7 = var10[var15];
            var18 = var8.bind(var6)(var7);
            var17 = var18.useStateFromStoresArray;
            var7 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var7;
            var7 = function() {
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
            var7 = var17.bind(var18)(var16, var7);
            var4 = var10[var4];
            var10 = var8.bind(var6)(var4);
            var8 = var10.useNumFriendRequestsForBadging;
            var4 = 'DMs';
            var4 = var8.bind(var10)(var4);
            if(!var9) { _fun0001_ip = 289; continue _fun0001 }
 280:
            var7 = var7.length;
            var9 = var7 > var5;
 289:
            if(!var9) { _fun0001_ip = 305; continue _fun0001 }
 292:
            var3 = !var3;
            if(var3) { _fun0001_ip = 302; continue _fun0001 }
 298:
            var3 = var4 > var5;
 302:
            var9 = var3;
 305:
            var _closure2_slot4 = var9;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var5 = 'Messages Tab';
            var3['location'] = var5;
            var5 = var14;
            if(!var5) { _fun0001_ip = 350; continue _fun0001 }
 347:
            var5 = var13;
 350:
            var3['isConnected'] = var5;
            var3 = var4.bind(var6)(var3);
            var5 = var3.setAdded;
            var _closure2_slot5 = var5;
            var8 = var3.friendSuggestions;
            var _closure2_slot6 = var8;
            var10 = var3.numFriendSuggestions;
            var _closure2_slot7 = var10;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 11;
            var7 = var3[var7];
            var7 = var4.bind(var6)(var7);
            var16 = var7.HappeningNowCardsDisabled;
            var7 = var16.useSetting;
            var7 = var7.bind(var16)();
            var _closure2_slot8 = var7;
            var3 = var3[var15];
            var15 = var4.bind(var6)(var3);
            var6 = var15.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFriendCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var15)(var4, var3);
            var _closure2_slot9 = var6;
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
                    var1 = _closure2_slot7;
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
                    var2 = _closure2_slot7;
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
                    var8 = _closure2_slot4;
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
                    var8 = _closure2_slot6;
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
                    var8 = _closure2_slot8;
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
                    var1['showFullscreenEmptyState'] = var7;
                    var7 = _closure2_slot5;
                    var1['setAddedFriendSuggestions'] = var7;
                    var7 = _closure2_slot6;
                    var1['friendSuggestions'] = var7;
                    var1['renderHeader'] = var3;
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0003_ip = 485; continue _fun0003 }
 474:
                    var7 = _closure2_slot9;
                    var6 = 4;
                    var3 = var7 < var6;
 485:
                    if(!var3) { _fun0003_ip = 491; continue _fun0003 }
 488:
                    var3 = var5;
 491:
                    if(var3) { _fun0003_ip = 497; continue _fun0003 }
 494:
                    var3 = var4;
 497:
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