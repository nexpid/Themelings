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
    var15 = 2;
    var2 = var8[var15];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var14 = 3;
    var2 = var8[var14];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var13 = 4;
    var2 = var8[var13];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var12 = 5;
    var2 = var8[var12];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var11 = 6;
    var2 = var8[var11];
    var2 = var7.bind(var1)(var2);
    var2 = var2.PermissionPromptType;
    var _closure1_slot9 = var2;
    var6 = 7;
    var2 = var8[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var4 = {};
    var4['NotificationsNudge'] = var10;
    var2 = 'NotificationsNudge';
    var4[var10] = var2;
    var4['NotificationsNudgeSeparator'] = var9;
    var2 = 'NotificationsNudgeSeparator';
    var4[var9] = var2;
    var4['IncomingRequests'] = var15;
    var2 = 'IncomingRequests';
    var4[var15] = var2;
    var4['FavoriteChannels'] = var14;
    var2 = 'FavoriteChannels';
    var4[var14] = var2;
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
    var _closure1_slot11 = var2;
    var6 = 17;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useMessagesData() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 8;
            var3 = var8[var6];
            var16 = undefined;
            var7 = var11.bind(var16)(var3);
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
            var15 = var3.connected;
            var _closure2_slot0 = var15;
            var14 = var3.connectedToGateway;
            var _closure2_slot1 = var14;
            var3 = var8[var6];
            var7 = var11.bind(var16)(var3);
            var5 = var7.useStateFromStoresArray;
            var3 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getSortedChannels;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var5.bind(var7)(var4, var3);
            var3 = _closure1_slot3;
            var18 = 2;
            var3 = var3.bind(var16)(var4, var18);
            var4 = 0;
            var13 = var3[var4];
            var _closure2_slot2 = var13;
            var9 = 1;
            var12 = var3[var9];
            var _closure2_slot3 = var12;
            var7 = _closure1_slot1;
            var21 = 9;
            var3 = var8[var21];
            var10 = var7.bind(var16)(var3);
            var5 = var10.useExperiment;
            var3 = {};
            var17 = 'DM List';
            var3['location'] = var17;
            var3 = var5.bind(var10)(var3);
            var10 = var3.showInDMs;
            var3 = var3.removeItemAfterAck;
            var5 = var8[var6];
            var19 = var11.bind(var16)(var5);
            var17 = var19.useStateFromStoresArray;
            var5 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var5;
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
                        var6 = 10;
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
            var19 = var17.bind(var19)(var11, var5);
            var5 = 11;
            var5 = var8[var5];
            var7 = var7.bind(var16)(var5);
            var5 = {};
            var8 = 'Messages Tab';
            var5['location'] = var8;
            var8 = var15;
            if(!var8) { _fun0001_ip = 284; continue _fun0001 }
 281:
            var8 = var14;
 284:
            var5['isConnected'] = var8;
            var7 = var7.bind(var16)(var5);
            var5 = var7.setAdded;
            var _closure2_slot4 = var5;
            var8 = var7.friendSuggestions;
            var _closure2_slot5 = var8;
            var11 = var7.numFriendSuggestions;
            var _closure2_slot6 = var11;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 12;
            var7 = var17[var7];
            var7 = var20.bind(var16)(var7);
            var22 = var7.HappeningNowCardsDisabled;
            var7 = var22.useSetting;
            var7 = var7.bind(var22)();
            var _closure2_slot7 = var7;
            var6 = var17[var6];
            var24 = var20.bind(var16)(var6);
            var23 = var24.useStateFromStores;
            var6 = _closure1_slot8;
            var22 = new Array(1);
            var22[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFriendCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var23.bind(var24)(var22, var6);
            var _closure2_slot8 = var6;
            var17 = var17[var21];
            var21 = var20.bind(var16)(var17);
            var20 = var21.useNumFriendRequestsForBadging;
            var17 = 'DMs';
            var17 = var20.bind(var21)(var17);
            if(!var10) { _fun0001_ip = 445; continue _fun0001 }
 436:
            var19 = var19.length;
            var10 = var19 > var4;
 445:
            if(!var10) { _fun0001_ip = 468; continue _fun0001 }
 448:
            var3 = !var3;
            if(var3) { _fun0001_ip = 458; continue _fun0001 }
 454:
            var3 = var17 > var4;
 458:
            if(var3) { _fun0001_ip = 465; continue _fun0001 }
 461:
            var3 = var4 === var6;
 465:
            var10 = var3;
 468:
            var _closure2_slot9 = var10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = 13;
            var3 = var20[var21];
            var23 = var19.bind(var16)(var3);
            var22 = var23.useShouldSeePushNotificationNudge;
            var3 = _closure1_slot9;
            var17 = var3.DM_SPACE;
            var17 = var22.bind(var23)(var17);
            var21 = var20[var21];
            var22 = var19.bind(var16)(var21);
            var21 = var22.useNudgeExperimentConfigWithoutExposure;
            var3 = var3.DM_SPACE;
            var24 = var21.bind(var22)(var3);
            var3 = 14;
            var3 = var20[var3];
            var21 = var19.bind(var16)(var3);
            var20 = var21.useSelectedTimeRecurringDismissibleContent;
            var3 = null;
            var19 = null;
            if(!var17) { _fun0001_ip = 596; continue _fun0001 }
 564:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 15;
            var17 = var23[var17];
            var17 = var22.bind(var16)(var17);
            var17 = var17.DismissibleContent;
            var19 = var17.NOTIFICATION_NUDGE_DM_HOME_BANNER;
 596:
            var17 = {};
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 16;
            var22 = var25[var22];
            var23 = var23.bind(var16)(var22);
            var22 = var23.getNotificationNudgeCooldownMs;
            var25 = var3 == var24;
            var3 = undefined;
            if(var25) { _fun0001_ip = 639; continue _fun0001 }
 633:
            var3 = var24.timing;
 639:
            var3 = var22.bind(var23)(var3);
            var17['cooldownDurationMs'] = var3;
            var26 = true;
            var30 = var21;
            var29 = var19;
            var28 = var17;
            var27 = undefined;
            var17 = var30[var20](var29, var28, var27, var26, var25);
            var3 = _closure1_slot3;
            var3 = var3.bind(var16)(var17, var18);
            var4 = var3[var4];
            var3 = var3[var9];
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 15;
            var3 = var17[var3];
            var3 = var9.bind(var16)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.NOTIFICATION_NUDGE_DM_HOME_BANNER;
            var9 = var4 === var3;
            var _closure2_slot10 = var9;
            var4 = _closure1_slot4;
            var3 = var4.useRef;
            var2 = -1;
            var2 = var3.bind(var4)(var2);
            var _closure2_slot11 = var2;
            var3 = var4.useMemo;
            var2 = new Array(11);
            var2[0] = var15;
            var2[1] = var14;
            var2[2] = var13;
            var2[3] = var12;
            var2[4] = var11;
            var2[5] = var10;
            var2[6] = var9;
            var2[7] = var8;
            var2[8] = var7;
            var2[9] = var6;
            var2[10] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot11;
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
                    var2 = _closure2_slot11;
                    var1 = var2.current;
                    var1 = var1 + 1;
                    var2['current'] = var1;
                    _fun0003_ip = 68; continue _fun0003;
 56:
                    var2 = _closure2_slot11;
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
                    var8 = _closure2_slot10;
                    var1 = 0;
                    if(!var8) { _fun0003_ip = 188; continue _fun0003 }
 185:
                    var1 = 1;
 188:
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var8 = _closure2_slot9;
                    var1 = 0;
                    if(var8) { _fun0003_ip = 219; continue _fun0003 }
 207:
                    var8 = _closure2_slot10;
                    var1 = 0;
                    if(!var8) { _fun0003_ip = 219; continue _fun0003 }
 216:
                    var1 = 1;
 219:
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var8 = _closure2_slot9;
                    var1 = 0;
                    if(!var8) { _fun0003_ip = 241; continue _fun0003 }
 238:
                    var1 = 1;
 241:
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
                    if(!var4) { _fun0003_ip = 297; continue _fun0003 }
 294:
                    var1 = 1;
 297:
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var1 = 0;
                    if(!var4) { _fun0003_ip = 339; continue _fun0003 }
 312:
                    var8 = _closure2_slot0;
                    var1 = 0;
                    if(!var8) { _fun0003_ip = 339; continue _fun0003 }
 321:
                    var8 = _closure2_slot1;
                    var1 = 0;
                    if(!var8) { _fun0003_ip = 339; continue _fun0003 }
 330:
                    var8 = _closure2_slot5;
                    var1 = var8.length;
 339:
                    var1 = var7.bind(var2)(var1);
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    if(var5) { _fun0003_ip = 377; continue _fun0003 }
 357:
                    var3 = null;
                    if(!var4) { _fun0003_ip = 375; continue _fun0003 }
 362:
                    var1 = _closure1_slot11;
                    var3 = var1.EmptyState;
 375:
                    _fun0003_ip = 402; continue _fun0003;
 377:
                    var8 = _closure2_slot7;
                    var1 = null;
                    if(var8) { _fun0003_ip = 399; continue _fun0003 }
 386:
                    var8 = _closure1_slot11;
                    var1 = var8.HappeningNow;
 399:
                    var3 = var1;
 402:
                    var1 = {};
                    var8 = _closure2_slot3;
                    var1['channels'] = var8;
                    var8 = _closure2_slot2;
                    var1['channelFavorites'] = var8;
                    var8 = _closure2_slot11;
                    var8 = var8.current;
                    var8 = var8 > var9;
                    var7 = null;
                    if(!var8) { _fun0003_ip = 471; continue _fun0003 }
 440:
                    var8 = _closure2_slot11;
                    var10 = var8.current;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = '';
                    var7 = var9.bind(var8)(var10);
 471:
                    var1['dataKey'] = var7;
                    var7 = !var5;
                    if(var5) { _fun0003_ip = 486; continue _fun0003 }
 482:
                    var7 = _closure2_slot0;
 486:
                    if(!var7) { _fun0003_ip = 492; continue _fun0003 }
 489:
                    var7 = !var4;
 492:
                    if(!var7) { _fun0003_ip = 502; continue _fun0003 }
 495:
                    var8 = _closure2_slot9;
                    var7 = !var8;
 502:
                    var1['showFullscreenEmptyState'] = var7;
                    var7 = _closure2_slot4;
                    var1['setAddedFriendSuggestions'] = var7;
                    var7 = _closure2_slot5;
                    var1['friendSuggestions'] = var7;
                    var1['renderHeader'] = var3;
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0003_ip = 548; continue _fun0003 }
 537:
                    var7 = _closure2_slot8;
                    var6 = 4;
                    var3 = var7 < var6;
 548:
                    if(!var3) { _fun0003_ip = 554; continue _fun0003 }
 551:
                    var3 = var5;
 554:
                    if(var3) { _fun0003_ip = 560; continue _fun0003 }
 557:
                    var3 = var4;
 560:
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