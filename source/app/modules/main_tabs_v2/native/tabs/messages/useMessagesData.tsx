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
    var14 = 2;
    var2 = var8[var14];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var13 = 3;
    var2 = var8[var13];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var12 = 4;
    var2 = var8[var12];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var11 = 5;
    var2 = var8[var11];
    var2 = var7.bind(var1)(var2);
    var2 = var2.PermissionPromptType;
    var _closure1_slot8 = var2;
    var6 = 6;
    var2 = var8[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var4 = {};
    var4['NotificationsNudge'] = var10;
    var2 = 'NotificationsNudge';
    var4[var10] = var2;
    var4['NotificationsNudgeSeparator'] = var9;
    var2 = 'NotificationsNudgeSeparator';
    var4[var9] = var2;
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
    var _closure1_slot10 = var2;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useMessagesData() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var4 = var7[var3];
            var15 = undefined;
            var9 = var5.bind(var15)(var4);
            var8 = var9.useStateFromStoresObject;
            var4 = _closure1_slot6;
            var6 = new Array(2);
            var6[0] = var4;
            var4 = _closure1_slot5;
            var6[1] = var4;
            var4 = function() {
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
            var4 = var8.bind(var9)(var6, var4);
            var14 = var4.connected;
            var _closure2_slot0 = var14;
            var13 = var4.connectedToGateway;
            var _closure2_slot1 = var13;
            var4 = var7[var3];
            var8 = var5.bind(var15)(var4);
            var6 = var8.useStateFromStoresArray;
            var4 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getSortedChannels;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var6.bind(var8)(var5, var4);
            var4 = _closure1_slot3;
            var17 = 2;
            var5 = var4.bind(var15)(var5, var17);
            var4 = 0;
            var12 = var5[var4];
            var _closure2_slot2 = var12;
            var9 = 1;
            var11 = var5[var9];
            var _closure2_slot3 = var11;
            var6 = _closure1_slot1;
            var5 = 8;
            var5 = var7[var5];
            var6 = var6.bind(var15)(var5);
            var5 = {};
            var7 = 'Messages Tab';
            var5['location'] = var7;
            var7 = var14;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var13;
case 2:
            var5['isConnected'] = var7;
            var6 = var6.bind(var15)(var5);
            var5 = var6.setAdded;
            var _closure2_slot4 = var5;
            var8 = var6.friendSuggestions;
            var _closure2_slot5 = var8;
            var10 = var6.numFriendSuggestions;
            var _closure2_slot6 = var10;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 9;
            var6 = var19[var6];
            var6 = var18.bind(var15)(var6);
            var7 = var6.HappeningNowCardsDisabled;
            var6 = var7.useSetting;
            var7 = var6.bind(var7)();
            var _closure2_slot7 = var7;
            var3 = var19[var3];
            var20 = var18.bind(var15)(var3);
            var16 = var20.useStateFromStores;
            var3 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getFriendCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var16.bind(var20)(var6, var3);
            var _closure2_slot8 = var6;
            var20 = 10;
            var3 = var19[var20];
            var22 = var18.bind(var15)(var3);
            var21 = var22.useShouldSeePushNotificationNudge;
            var3 = _closure1_slot8;
            var16 = var3.DM_SPACE;
            var16 = var21.bind(var22)(var16);
            var20 = var19[var20];
            var21 = var18.bind(var15)(var20);
            var20 = var21.useNudgeExperimentConfigWithoutExposure;
            var3 = var3.DM_SPACE;
            var23 = var20.bind(var21)(var3);
            var3 = 11;
            var3 = var19[var3];
            var20 = var18.bind(var15)(var3);
            var19 = var20.useSelectedTimeRecurringDismissibleContent;
            var3 = null;
            var18 = null;
            if(!var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 12;
            var16 = var22[var16];
            var16 = var21.bind(var15)(var16);
            var16 = var16.DismissibleContent;
            var18 = var16.NOTIFICATION_NUDGE_DM_HOME_BANNER;
case 4:
            var16 = {};
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 13;
            var21 = var24[var21];
            var22 = var22.bind(var15)(var21);
            var21 = var22.getNotificationNudgeCooldownMs;
            var24 = var3 == var23;
            var3 = undefined;
            if(var24) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var23.timing;
case 6:
            var3 = var21.bind(var22)(var3);
            var16['cooldownDurationMs'] = var3;
            var25 = true;
            var29 = var20;
            var28 = var18;
            var27 = var16;
            var26 = undefined;
            var16 = var29[var19](var28, var27, var26, var25, var24);
            var3 = _closure1_slot3;
            var3 = var3.bind(var15)(var16, var17);
            var4 = var3[var4];
            var3 = var3[var9];
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 12;
            var3 = var16[var3];
            var3 = var9.bind(var15)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.NOTIFICATION_NUDGE_DM_HOME_BANNER;
            var9 = var4 === var3;
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
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var2 = var1.current;
                    var1 = -1;
                    if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = _closure2_slot1;
case 10:
                    if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = _closure2_slot10;
                    var1 = var2.current;
                    var1 = var1 + 1;
                    var2['current'] = var1;
                    _fun0002_ip = 12; continue _fun0002;
case 8:
                    var2 = _closure2_slot10;
                    var1 = 0;
                    var2['current'] = var1;
case 12:
                    var1 = _closure2_slot2;
                    var2 = var1.length;
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var1 = var2 + var1;
                    var9 = 0;
                    var5 = var1 > var9;
                    var1 = _closure2_slot6;
                    var4 = var1 > var9;
                    if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                    var1 = global;
                    var7 = var1.Math;
                    var3 = var7.min;
                    var2 = _closure2_slot6;
                    var1 = 5;
                    var3 = var3.bind(var7)(var2, var1);
                    _fun0002_ip = 18; continue _fun0002;
case 14:
                    if(var5) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var2 = _closure2_slot0;
                    var1 = 15;
                    if(!var2) { _fun0002_ip = 21; continue _fun0002 }
case 19:
                    var1 = 0;
case 21:
                    var3 = var1;
case 18:
                    var2 = new Array(0);
                    var7 = var2.push;
                    var8 = _closure2_slot9;
                    var1 = 0;
                    if(!var8) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var1 = 1;
case 22:
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var8 = _closure2_slot9;
                    var1 = 0;
                    if(!var8) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var1 = 1;
case 24:
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
                    if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var1 = 1;
case 26:
                    var1 = var7.bind(var2)(var1);
                    var7 = var2.push;
                    var1 = 0;
                    if(!var4) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var8 = _closure2_slot0;
                    var1 = 0;
                    if(!var8) { _fun0002_ip = 28; continue _fun0002 }
case 30:
                    var8 = _closure2_slot1;
                    var1 = 0;
                    if(!var8) { _fun0002_ip = 28; continue _fun0002 }
case 31:
                    var8 = _closure2_slot5;
                    var1 = var8.length;
case 28:
                    var1 = var7.bind(var2)(var1);
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    if(var5) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var3 = null;
                    if(!var4) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var1 = _closure1_slot10;
                    var3 = var1.EmptyState;
case 34:
                    _fun0002_ip = 36; continue _fun0002;
case 32:
                    var8 = _closure2_slot7;
                    var1 = null;
                    if(var8) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var8 = _closure1_slot10;
                    var1 = var8.HappeningNow;
case 37:
                    var3 = var1;
case 36:
                    var1 = {};
                    var8 = _closure2_slot3;
                    var1['channels'] = var8;
                    var8 = _closure2_slot2;
                    var1['channelFavorites'] = var8;
                    var8 = _closure2_slot10;
                    var8 = var8.current;
                    var8 = var8 > var9;
                    var7 = null;
                    if(!var8) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var8 = _closure2_slot10;
                    var10 = var8.current;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = '';
                    var7 = var9.bind(var8)(var10);
case 39:
                    var1['dataKey'] = var7;
                    var7 = !var5;
                    if(var5) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var7 = _closure2_slot0;
case 41:
                    if(!var7) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var7 = !var4;
case 43:
                    var1['showFullscreenEmptyState'] = var7;
                    var7 = _closure2_slot4;
                    var1['setAddedFriendSuggestions'] = var7;
                    var7 = _closure2_slot5;
                    var1['friendSuggestions'] = var7;
                    var1['renderHeader'] = var3;
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var7 = _closure2_slot8;
                    var6 = 4;
                    var3 = var7 < var6;
case 45:
                    if(!var3) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                    var3 = var5;
case 47:
                    if(var3) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                    var3 = var4;
case 49:
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