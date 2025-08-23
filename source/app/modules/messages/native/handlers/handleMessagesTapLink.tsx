// app/modules/messages/native/handlers/handleMessagesTapLink.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function handleMessagesTapURLLink(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = var6.url;
            var9 = null;
            var1 = var9 != var1;
            if(!var1) { _fun0001_ip = 30; continue _fun0001 }
 17:
            var3 = var6.url;
            var2 = '';
            var1 = var2 !== var3;
 30:
            if(!var1) { _fun0001_ip = 391; continue _fun0001 }
 36:
            var5 = var6.url;
            var11 = var6.node;
            var2 = var9 == var11;
            var3 = false;
            if(var2) { _fun0001_ip = 265; continue _fun0001 }
 59:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var7 = undefined;
            var10 = var10.bind(var7)(var2);
            var2 = var10.isLinkTrusted;
            var2 = var2.bind(var10)(var11);
            var3 = false;
            if(!var2) { _fun0001_ip = 265; continue _fun0001 }
 103:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 14;
            var2 = var11[var2];
            var2 = var10.bind(var7)(var2);
            var2 = var2.bind(var7)(var5);
            var2 = var2.payload;
            var10 = var2.type;
            var5 = _closure1_slot13;
            var5 = var5.INVITE;
            var3 = false;
            if(!(var10 === var5)) { _fun0001_ip = 265; continue _fun0001 }
 155:
            var5 = var2.inviteCode;
            var5 = var9 == var5;
            var3 = false;
            if(var5) { _fun0001_ip = 265; continue _fun0001 }
 170:
            var8 = _closure1_slot9;
            var5 = var8.getInvite;
            var2 = var2.inviteCode;
            var5 = var5.bind(var8)(var2);
            var2 = var9 == var5;
            if(var2) { _fun0001_ip = 232; continue _fun0001 }
 198:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 15;
            var8 = var11[var8];
            var10 = var10.bind(var7)(var8);
            var8 = var10.isGuildScheduledEventInviteEmbed;
            var8 = var8.bind(var10)(var5);
            var2 = !var8;
 232:
            if(var2) { _fun0001_ip = 262; continue _fun0001 }
 235:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 16;
            var4 = var10[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.bind(var7)(var5);
            var2 = 0;
 262:
            var3 = !var2;
 265:
            var1 = true;
            if(var3) { _fun0001_ip = 391; continue _fun0001 }
 270:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var10 = undefined;
            var5 = var4.bind(var10)(var3);
            var4 = var5.handleClick;
            var3 = {};
            var7 = var6.url;
            var3['href'] = var7;
            var7 = var6.node;
            var7 = var9 != var7;
            if(!var7) { _fun0001_ip = 363; continue _fun0001 }
 326:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 13;
            var8 = var11[var8];
            var10 = var9.bind(var10)(var8);
            var9 = var10.isLinkTrusted;
            var8 = var6.node;
            var7 = var9.bind(var10)(var8);
 363:
            var3['trusted'] = var7;
            var6 = var6.messageId;
            var3['messageId'] = var6;
            var6 = arg2;
            var3['channelId'] = var6;
            var3 = var4.bind(var5)(var3);
            var1 = true;
 391:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.getSection;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticsLocations;
    var _closure1_slot11 = var8;
    var8 = var5.ChannelSettingsSections;
    var _closure1_slot12 = var8;
    var8 = var5.LinkingTypes;
    var _closure1_slot13 = var8;
    var5 = var5.Routes;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AppLauncherRouteName;
    var _closure1_slot15 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.StaticChannelRoute;
    var _closure1_slot16 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NotificationTypes;
    var _closure1_slot17 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.OpenThreadAnalyticsLocations;
    var _closure1_slot18 = var5;
    var5 = 38;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/handlers/handleMessagesTapLink.tsx';
    var5 = var6.bind(var7)(var5);
    var3['handleMessagesTapURLLink'] = var4;
    var2 = function handleMessagesTapLink(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.allowWithinModal;
            var6 = var2.chatInputRef;
            var11 = var2.handleTransitionToThread;
            var12 = var2.message;
            var10 = var2.messageChannel;
            var3 = var2.selectedChannelId;
            var2 = var2.tapLinkData;
            var4 = var2.data;
            var9 = true;
            if(!(var9 !== var1)) { _fun0002_ip = 97; continue _fun0002 }
 55:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var1 = var2.isAlertOrActionSheetOpen;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0002_ip = 2603; continue _fun0002 }
 97:
            var7 = _closure1_slot19;
            var2 = null;
            var8 = var2 == var10;
            var3 = undefined;
            var5 = undefined;
            if(var8) { _fun0002_ip = 122; continue _fun0002 }
 117:
            var5 = var10.id;
 122:
            var5 = var7.bind(var3)(var4, var5);
            if(var5) { _fun0002_ip = 2603; continue _fun0002 }
 134:
            var5 = var4.action;
            if(!(var2 != var5)) { _fun0002_ip = 2603; continue _fun0002 }
 146:
            var7 = var4.action;
            var5 = 'bindUserMenu';
            if(!(var5 !== var7)) { _fun0002_ip = 2548; continue _fun0002 }
 164:
            var5 = 'bindGuildMenu';
            if(!(var5 !== var7)) { _fun0002_ip = 2420; continue _fun0002 }
 177:
            var5 = 'bindJoinStream';
            if(!(var5 !== var7)) { _fun0002_ip = 2340; continue _fun0002 }
 190:
            var5 = 'bindOpenPins';
            if(!(var5 !== var7)) { _fun0002_ip = 2268; continue _fun0002 }
 203:
            var5 = 'bindOpenGdmCustomizeActionSheet';
            if(!(var5 !== var7)) { _fun0002_ip = 2226; continue _fun0002 }
 216:
            var5 = 'bindDismissMessage';
            if(!(var5 !== var7)) { _fun0002_ip = 2083; continue _fun0002 }
 229:
            var5 = 'bindTapUsername';
            if(!(var5 !== var7)) { _fun0002_ip = 1992; continue _fun0002 }
 242:
            var5 = 'bindTapCommandName';
            if(!(var5 !== var7)) { _fun0002_ip = 1317; continue _fun0002 }
 255:
            var5 = 'bindTapActivityText';
            if(!(var5 !== var7)) { _fun0002_ip = 1064; continue _fun0002 }
 268:
            var5 = 'bindOpenThreadChannel';
            if(!(var5 !== var7)) { _fun0002_ip = 996; continue _fun0002 }
 281:
            var5 = 'bindJumpToMessage';
            if(!(var5 !== var7)) { _fun0002_ip = 923; continue _fun0002 }
 294:
            var5 = 'bindOpenRoleSubscriptionOverview';
            if(!(var5 !== var7)) { _fun0002_ip = 810; continue _fun0002 }
 307:
            var5 = 'bindUserSurvey';
            if(!(var5 !== var7)) { _fun0002_ip = 396; continue _fun0002 }
 317:
            var5 = 'bindInsertText';
            if(!(var5 === var7)) { _fun0002_ip = 2603; continue _fun0002 }
 330:
            var5 = var2 == var6;
            var13 = undefined;
            if(var5) { _fun0002_ip = 351; continue _fun0002 }
 339:
            var7 = var6.current;
            var5 = var2 == var7;
            var13 = var7;
 351:
            if(var5) { _fun0002_ip = 2603; continue _fun0002 }
 357:
            var8 = var13.insertText;
            var7 = var4.text;
            var14 = var4.addSpace;
            var5 = var2 == var14;
            if(var5) { _fun0002_ip = 384; continue _fun0002 }
 381:
            var5 = var14;
 384:
            var5 = var8.bind(var13)(var7, var2, var5);
            _fun0002_ip = 2603; continue _fun0002;
 396:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var5 = var4.message;
            var5 = var5.channel_id;
            var5 = var7.bind(var8)(var5);
            var7 = var2 == var5;
            var16 = undefined;
            if(var7) { _fun0002_ip = 434; continue _fun0002 }
 429:
            var16 = var5.guild_id;
 434:
            if(!(var2 != var16)) { _fun0002_ip = 2603; continue _fun0002 }
 441:
            var7 = var4.notificationType;
            var5 = _closure1_slot17;
            var5 = var5.TRENDING_CONTENT_PUSH;
            if(!(var5 !== var7)) { _fun0002_ip = 676; continue _fun0002 }
 464:
            var5 = _closure1_slot17;
            var5 = var5.TOP_MESSAGE_PUSH;
            if(!(var5 !== var7)) { _fun0002_ip = 614; continue _fun0002 }
 481:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 22;
            var5 = var8[var5];
            var13 = var7.bind(var3)(var5);
            var5 = 37;
            var7 = var8[var5];
            var5 = var8.paths;
            var14 = var13.bind(var3)(var7, var5);
            var7 = _closure1_slot1;
            var5 = 20;
            var5 = var8[var5];
            var13 = var7.bind(var3)(var5);
            var8 = var13.openLazy;
            var7 = {};
            var5 = _closure1_slot11;
            var5 = var5.MESSAGE_EMBED;
            var7['location'] = var5;
            var5 = var4.message;
            var5 = var5.id;
            var7['messageId'] = var5;
            var5 = var4.notificationType;
            if(!(var2 == var5)) { _fun0002_ip = 591; continue _fun0002 }
 581:
            var15 = _closure1_slot17;
            var5 = var15.TOP_MESSAGE_PUSH;
 591:
            var7['notificationType'] = var5;
            var5 = 'NotificationSurvey';
            var5 = var8.bind(var13)(var14, var5, var7);
            _fun0002_ip = 2603; continue _fun0002;
 614:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 36;
            var5 = var8[var5];
            var14 = var7.bind(var3)(var5);
            var13 = var14.openGuildHighlightNotificationForPush;
            var23 = var4.message;
            var22 = var4.notificationType;
            var5 = _closure1_slot11;
            var21 = var5.MESSAGE_EMBED;
            var25 = var14;
            var24 = var16;
            var5 = var25[var13](var24, var23, var22, var21, var20);
            _fun0002_ip = 2603; continue _fun0002;
 676:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 36;
            var5 = var8[var5];
            var15 = var7.bind(var3)(var5);
            var14 = var15.openGuildHighlightNotificationForPush;
            var13 = var4.message;
            var8 = var4.notificationType;
            var5 = _closure1_slot11;
            var7 = var5.MESSAGE_EMBED;
            var5 = {};
            var19 = _closure1_slot6;
            var18 = var19.selectedSummary;
            var17 = var4.message;
            var17 = var17.channel_id;
            var17 = var18.bind(var19)(var17);
            var19 = var2 == var17;
            var18 = undefined;
            if(var19) { _fun0002_ip = 764; continue _fun0002 }
 759:
            var18 = var17.id;
 764:
            var19 = var2 != var18;
            var17 = 'unknown';
            if(!var19) { _fun0002_ip = 778; continue _fun0002 }
 775:
            var17 = var18;
 778:
            var5['summary_id'] = var17;
            var25 = var15;
            var24 = var16;
            var23 = var13;
            var22 = var8;
            var21 = var7;
            var20 = var5;
            var5 = var25[var14](var24, var23, var22, var21, var20, var19);
            _fun0002_ip = 2603; continue _fun0002;
 810:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 34;
            var5 = var8[var5];
            var14 = var7.bind(var3)(var5);
            var13 = var14.transitionTo;
            var17 = _closure1_slot14;
            var16 = var17.CHANNEL;
            var15 = var4.guildId;
            var5 = _closure1_slot16;
            var5 = var5.ROLE_SUBSCRIPTIONS;
            var5 = var16.bind(var17)(var15, var5);
            var5 = var13.bind(var14)(var5);
            var5 = 35;
            var5 = var8[var5];
            var15 = var7.bind(var3)(var5);
            var14 = var15.trackRoleSubscriptionPurchaseMessageTierClick;
            var24 = var4.guildId;
            var23 = var4.channelId;
            var22 = var4.messageId;
            var21 = var4.roleSubscriptionListingId;
            var25 = var15;
            var5 = var25[var14](var24, var23, var22, var21, var20);
            _fun0002_ip = 2603; continue _fun0002;
 923:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 28;
            var5 = var8[var5];
            var8 = var7.bind(var3)(var5);
            var7 = var8.jumpToMessage;
            var5 = {};
            var13 = var4.targetChannelId;
            var5['channelId'] = var13;
            var13 = var4.targetMessageId;
            var5['messageId'] = var13;
            var5['flash'] = var9;
            var13 = var4.messageId;
            var5['returnMessageId'] = var13;
            var5 = var7.bind(var8)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 996:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var5 = var4.threadId;
            var5 = var7.bind(var8)(var5);
            if(!(var2 != var5)) { _fun0002_ip = 2603; continue _fun0002 }
 1023:
            var7 = var2 == var5;
            var8 = undefined;
            if(var7) { _fun0002_ip = 1037; continue _fun0002 }
 1032:
            var8 = var5.guild_id;
 1037:
            var7 = var5.id;
            var5 = _closure1_slot18;
            var5 = var5.EMBED;
            var5 = var11.bind(var3)(var8, var7, var5);
            _fun0002_ip = 2603; continue _fun0002;
 1064:
            var8 = _closure1_slot4;
            var7 = var8.getApplication;
            var5 = var4.applicationUserId;
            var13 = var7.bind(var8)(var5);
            if(!(var2 != var13)) { _fun0002_ip = 1200; continue _fun0002 }
 1089:
            var5 = var2 == var6;
            var8 = undefined;
            if(var5) { _fun0002_ip = 1110; continue _fun0002 }
 1098:
            var7 = var6.current;
            var5 = var2 == var7;
            var8 = var7;
 1110:
            if(var5) { _fun0002_ip = 2603; continue _fun0002 }
 1116:
            var7 = var8.openCustomKeyboard;
            var5 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 31;
            var11 = var15[var11];
            var11 = var14.bind(var3)(var11);
            var11 = var11.KeyboardTypes;
            var11 = var11.APP_LAUNCHER;
            var5['type'] = var11;
            var11 = {};
            var14 = _closure1_slot15;
            var14 = var14.APPLICATION_VIEW;
            var11['initialRouteName'] = var14;
            var11['application'] = var13;
            var11['initiallyExpanded'] = var9;
            var5['context'] = var11;
            var5 = var7.bind(var8)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 1200:
            var5 = var2 == var6;
            var8 = undefined;
            if(var5) { _fun0002_ip = 1221; continue _fun0002 }
 1209:
            var7 = var6.current;
            var5 = var2 == var7;
            var8 = var7;
 1221:
            if(var5) { _fun0002_ip = 2603; continue _fun0002 }
 1227:
            var7 = var8.openCustomKeyboard;
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 31;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.KeyboardTypes;
            var11 = var11.APP_LAUNCHER;
            var5['type'] = var11;
            var11 = {};
            var13 = _closure1_slot15;
            var13 = var13.APPLICATION_VIEW;
            var11['initialRouteName'] = var13;
            var13 = var4.applicationUserId;
            var11['applicationId'] = var13;
            var11['initiallyExpanded'] = var9;
            var5['context'] = var11;
            var5 = var7.bind(var8)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 1317:
            var7 = var2 == var12;
            var5 = undefined;
            if(var7) { _fun0002_ip = 1332; continue _fun0002 }
 1326:
            var5 = var12.interaction;
 1332:
            if(!(var2 != var5)) { _fun0002_ip = 1990; continue _fun0002 }
 1339:
            if(!(var2 != var10)) { _fun0002_ip = 1990; continue _fun0002 }
 1346:
            var8 = _closure1_slot10;
            var7 = var8.getUser;
            var5 = var4.userId;
            var8 = var7.bind(var8)(var5);
            if(!(var2 != var8)) { _fun0002_ip = 1988; continue _fun0002 }
 1373:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 30;
            var5 = var11[var5];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isPrimaryEntryPointCommandMessage;
            var5 = var5.bind(var7)(var12);
            if(var5) { _fun0002_ip = 1620; continue _fun0002 }
 1410:
            var7 = var2 == var12;
            var5 = undefined;
            if(var7) { _fun0002_ip = 1425; continue _fun0002 }
 1419:
            var5 = var12.author;
 1425:
            if(!(var2 != var5)) { _fun0002_ip = 2603; continue _fun0002 }
 1432:
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 32;
            var5 = var14[var5];
            var7 = var7.bind(var3)(var5);
            var5 = {};
            var13 = _closure1_slot0;
            var11 = 33;
            var11 = var14[var11];
            var14 = var13.bind(var3)(var11);
            var13 = var14.getUserAuthor;
            var11 = var12.interaction;
            var11 = var11.user;
            var11 = var13.bind(var14)(var11, var10);
            var5['author'] = var11;
            var11 = var4.messageChannelId;
            var5['channelId'] = var11;
            var5['chatInputRef'] = var6;
            var11 = var4.messageId;
            var5['messageId'] = var11;
            var5['user'] = var8;
            var13 = _closure1_slot7;
            var11 = var2 == var12;
            var8 = undefined;
            if(var11) { _fun0002_ip = 1545; continue _fun0002 }
 1539:
            var8 = var12.author;
 1545:
            var11 = var13.prototype;
            var11 = Object.create(var11, {constructor: {value: var13}});
            var25 = var11;
            var24 = var8;
            var8 = new var25[var13](var24, var23);
            var8 = var8 instanceof Object ? var8 : var11;
            var5['applicationUser'] = var8;
            var8 = var10.getGuildId;
            var10 = var8.bind(var10)();
            var11 = var2 != var10;
            var8 = undefined;
            if(!var11) { _fun0002_ip = 1595; continue _fun0002 }
 1592:
            var8 = var10;
 1595:
            var5['guildId'] = var8;
            var8 = var4.messageType;
            var5['messageType'] = var8;
            var5 = var7.bind(var3)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 1620:
            var5 = var12.applicationId;
            if(!(var2 != var5)) { _fun0002_ip = 1986; continue _fun0002 }
 1632:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var5 = var4.messageChannelId;
            var5 = var7.bind(var8)(var5);
            if(!(var2 != var5)) { _fun0002_ip = 1984; continue _fun0002 }
 1659:
            var8 = _closure1_slot3;
            var7 = {};
            var7['channel'] = var5;
            var5 = 'channel';
            var7['type'] = var5;
            var5 = var12.applicationId;
            var10 = var8.bind(var3)(var7, var5);
            var7 = var10.descriptor;
            var8 = var2 == var7;
            var5 = undefined;
            if(var8) { _fun0002_ip = 1708; continue _fun0002 }
 1703:
            var5 = var7.application;
 1708:
            if(!(var2 == var5)) { _fun0002_ip = 1836; continue _fun0002 }
 1715:
            var5 = var2 == var6;
            var8 = undefined;
            if(var5) { _fun0002_ip = 1736; continue _fun0002 }
 1724:
            var7 = var6.current;
            var5 = var2 == var7;
            var8 = var7;
 1736:
            if(var5) { _fun0002_ip = 2603; continue _fun0002 }
 1742:
            var7 = var8.openCustomKeyboard;
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 31;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.KeyboardTypes;
            var11 = var11.APP_LAUNCHER;
            var5['type'] = var11;
            var11 = {};
            var13 = _closure1_slot15;
            var13 = var13.APPLICATION_VIEW;
            var11['initialRouteName'] = var13;
            var11['initiallyExpanded'] = var9;
            var12 = var12.applicationId;
            var11['applicationId'] = var12;
            var11['installOnDemand'] = var9;
            var5['context'] = var11;
            var5 = var7.bind(var8)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 1836:
            var5 = var2 == var6;
            var7 = undefined;
            if(var5) { _fun0002_ip = 1857; continue _fun0002 }
 1845:
            var6 = var6.current;
            var5 = var2 == var6;
            var7 = var6;
 1857:
            if(var5) { _fun0002_ip = 2603; continue _fun0002 }
 1863:
            var6 = var7.openCustomKeyboard;
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 31;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.KeyboardTypes;
            var8 = var8.APP_LAUNCHER;
            var5['type'] = var8;
            var8 = {};
            var11 = _closure1_slot15;
            var11 = var11.APPLICATION_VIEW;
            var8['initialRouteName'] = var11;
            var8['initiallyExpanded'] = var9;
            var9 = var10.descriptor;
            var9 = var9.application;
            var8['application'] = var9;
            var9 = var10.isGuildInstalled;
            var9 = !var9;
            if(!var9) { _fun0002_ip = 1965; continue _fun0002 }
 1956:
            var10 = var10.isUserInstalled;
            var9 = !var10;
 1965:
            var8['installOnDemand'] = var9;
            var5['context'] = var8;
            var5 = var6.bind(var7)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 1984:
            return var3;
 1986:
            return var3;
 1988:
            return var3;
 1990:
            return var3;
 1992:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 19;
            var5 = var9[var5];
            var6 = var8.bind(var3)(var5);
            var5 = {};
            var7 = var4.userId;
            var5['userId'] = var7;
            var7 = var4.messageChannelId;
            var5['channelId'] = var7;
            var7 = var4.messageId;
            var5['messageId'] = var7;
            var7 = 29;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var8 = var7.USERNAME;
            var7 = new Array(1);
            var7[0] = var8;
            var5['sourceAnalyticsLocations'] = var7;
            var5 = var6.bind(var3)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 2083:
            var7 = _closure1_slot5;
            var6 = var7.getMessage;
            var8 = var4.message;
            var9 = var2 == var8;
            var5 = undefined;
            if(var9) { _fun0002_ip = 2112; continue _fun0002 }
 2107:
            var5 = var8.id;
 2112:
            var5 = var6.bind(var7)(var5);
            if(!(var2 != var5)) { _fun0002_ip = 2130; continue _fun0002 }
 2121:
            var5 = var5.isBlockedEdit;
            if(var5) { _fun0002_ip = 2171; continue _fun0002 }
 2130:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 28;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.dismissAutomatedMessage;
            var5 = var4.message;
            var5 = var6.bind(var7)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 2171:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 27;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.removeAutomodMessageNotice;
            var8 = var4.message;
            var9 = var2 == var8;
            var5 = undefined;
            if(var9) { _fun0002_ip = 2216; continue _fun0002 }
 2211:
            var5 = var8.id;
 2216:
            var5 = var6.bind(var7)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 2226:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 26;
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var5 = {};
            var7 = var4.messageChannelId;
            var5['channelId'] = var7;
            var5 = var6.bind(var3)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 2268:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 25;
            var8 = var7[var5];
            var10 = var6.bind(var3)(var8);
            var9 = var10.setSection;
            var8 = _closure1_slot12;
            var8 = var8.PINNED_MESSAGES;
            var8 = var9.bind(var10)(var8);
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.open;
            var5 = var4.messageChannelId;
            var5 = var6.bind(var7)(var5);
            _fun0002_ip = 2603; continue _fun0002;
 2340:
            var7 = var4.stream;
            if(!(var2 != var7)) { _fun0002_ip = 2418; continue _fun0002 }
 2350:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 23;
            var5 = var8[var5];
            var9 = var6.bind(var3)(var5);
            var6 = var9.selectVoiceChannel;
            var5 = var7.channelId;
            var5 = var6.bind(var9)(var5);
            var6 = _closure1_slot0;
            var5 = 24;
            var5 = var8[var5];
            var6 = var6.bind(var3)(var5);
            var5 = var6.watchStreamAndTransitionToStream;
            var5 = var5.bind(var6)(var7);
            _fun0002_ip = 2603; continue _fun0002;
 2418:
            return var3;
 2420:
            var5 = var4.messageReference;
            if(!(var2 != var5)) { _fun0002_ip = 2546; continue _fun0002 }
 2430:
            var5 = var4.messageReference;
            var9 = var5.guild_id;
            if(!(var2 != var9)) { _fun0002_ip = 2544; continue _fun0002 }
 2445:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 20;
            var5 = var2[var5];
            var8 = var6.bind(var3)(var5);
            var7 = var8.openLazy;
            var6 = _closure1_slot0;
            var5 = 22;
            var5 = var2[var5];
            var6 = var6.bind(var3)(var5);
            var5 = 21;
            var5 = var2[var5];
            var2 = var2.paths;
            var6 = var6.bind(var3)(var5, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var2 = 'GuildProfileActionSheet:';
            var5 = var5.bind(var2)(var9);
            var2 = {};
            var2['guildId'] = var9;
            var2 = var7.bind(var8)(var6, var5, var2);
            _fun0002_ip = 2603; continue _fun0002;
 2544:
            return var3;
 2546:
            return var3;
 2548:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 19;
            var1 = var5[var1];
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = var4.userId;
            var1['userId'] = var5;
            var5 = var4.messageChannelId;
            var1['channelId'] = var5;
            var4 = var4.messageId;
            var1['messageId'] = var4;
            var1 = var2.bind(var3)(var1);
 2603:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleMessagesTapLink'] = var2;
    return var1;
})();