// app/modules/messages/native/handlers/handleMessagesTapLink.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSection;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsLocations;
    var _closure1_slot11 = var7;
    var7 = var4.ChannelSettingsSections;
    var _closure1_slot12 = var7;
    var7 = var4.LinkingTypes;
    var _closure1_slot13 = var7;
    var4 = var4.Routes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationTypes;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OpenThreadAnalyticsLocations;
    var _closure1_slot18 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/handlers/handleMessagesTapLink.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleMessagesTapLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.allowWithinModal;
            var5 = var2.chatInputRef;
            var10 = var2.handleTransitionToThread;
            var12 = var2.message;
            var9 = var2.messageChannel;
            var3 = var2.selectedChannelId;
            var2 = var2.tapLinkData;
            var4 = var2.data;
            var8 = true;
            if(!(var8 !== var1)) { _fun0001_ip = 97; continue _fun0001 }
 55:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var1 = var2.isAlertOrActionSheetOpen;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0001_ip = 3049; continue _fun0001 }
 97:
            var2 = var4.url;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 504; continue _fun0001 }
 111:
            var3 = var4.url;
            var2 = '';
            if(!(var2 !== var3)) { _fun0001_ip = 504; continue _fun0001 }
 127:
            var7 = var4.url;
            var15 = var4.node;
            var3 = var1 != var15;
            var2 = false;
            if(!var3) { _fun0001_ip = 359; continue _fun0001 }
 150:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var11 = undefined;
            var14 = var14.bind(var11)(var3);
            var3 = var14.isLinkTrusted;
            var3 = var3.bind(var14)(var15);
            var2 = false;
            if(!var3) { _fun0001_ip = 359; continue _fun0001 }
 194:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 15;
            var3 = var15[var3];
            var3 = var14.bind(var11)(var3);
            var3 = var3.bind(var11)(var7);
            var3 = var3.payload;
            var14 = var3.type;
            var7 = _closure1_slot13;
            var7 = var7.INVITE;
            var2 = false;
            if(!(var14 === var7)) { _fun0001_ip = 359; continue _fun0001 }
 246:
            var7 = var3.inviteCode;
            var7 = var1 == var7;
            var2 = false;
            if(var7) { _fun0001_ip = 359; continue _fun0001 }
 261:
            var13 = _closure1_slot9;
            var7 = var13.getInvite;
            var3 = var3.inviteCode;
            var7 = var7.bind(var13)(var3);
            var13 = var1 == var7;
            if(var13) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 16;
            var3 = var15[var3];
            var14 = var14.bind(var11)(var3);
            var3 = var14.isGuildScheduledEventInviteEmbed;
            var3 = var3.bind(var14)(var7);
            var13 = !var3;
 323:
            var3 = !var13;
            if(var13) { _fun0001_ip = 356; continue _fun0001 }
 329:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 17;
            var6 = var14[var6];
            var6 = var13.bind(var11)(var6);
            var6 = var6.bind(var11)(var7);
            var3 = true;
 356:
            var2 = var3;
 359:
            if(var2) { _fun0001_ip = 500; continue _fun0001 }
 365:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var7 = undefined;
            var6 = var3.bind(var7)(var2);
            var3 = var6.handleClick;
            var2 = {};
            var11 = var4.url;
            var2['href'] = var11;
            var11 = var4.node;
            var11 = var1 != var11;
            if(!var11) { _fun0001_ip = 458; continue _fun0001 }
 421:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 14;
            var13 = var15[var13];
            var15 = var14.bind(var7)(var13);
            var14 = var15.isLinkTrusted;
            var13 = var4.node;
            var11 = var14.bind(var15)(var13);
 458:
            var2['trusted'] = var11;
            var11 = var4.messageId;
            var2['messageId'] = var11;
            var11 = var1 == var9;
            var7 = undefined;
            if(var11) { _fun0001_ip = 486; continue _fun0001 }
 481:
            var7 = var9.id;
 486:
            var2['channelId'] = var7;
            var2 = var3.bind(var6)(var2);
            _fun0001_ip = 3049; continue _fun0001;
 500:
            var2 = undefined;
            return var2;
 504:
            var2 = var4.action;
            if(!(var1 != var2)) { _fun0001_ip = 3049; continue _fun0001 }
 516:
            var3 = var4.action;
            var2 = 'bindUserMenu';
            if(!(var2 !== var3)) { _fun0001_ip = 2989; continue _fun0001 }
 534:
            var2 = 'bindGuildMenu';
            if(!(var2 !== var3)) { _fun0001_ip = 2849; continue _fun0001 }
 547:
            var2 = 'bindJoinStream';
            if(!(var2 !== var3)) { _fun0001_ip = 2762; continue _fun0001 }
 560:
            var2 = 'bindOpenPins';
            if(!(var2 !== var3)) { _fun0001_ip = 2685; continue _fun0001 }
 573:
            var2 = 'bindOpenGdmCustomizeActionSheet';
            if(!(var2 !== var3)) { _fun0001_ip = 2638; continue _fun0001 }
 586:
            var2 = 'bindDismissMessage';
            if(!(var2 !== var3)) { _fun0001_ip = 2490; continue _fun0001 }
 599:
            var2 = 'bindTapUsername';
            if(!(var2 !== var3)) { _fun0001_ip = 2394; continue _fun0001 }
 612:
            var2 = 'bindTapCommandName';
            if(!(var2 !== var3)) { _fun0001_ip = 1714; continue _fun0001 }
 625:
            var2 = 'bindTapActivityText';
            if(!(var2 !== var3)) { _fun0001_ip = 1454; continue _fun0001 }
 638:
            var2 = 'bindOpenThreadChannel';
            if(!(var2 !== var3)) { _fun0001_ip = 1381; continue _fun0001 }
 651:
            var2 = 'bindJumpToMessage';
            if(!(var2 !== var3)) { _fun0001_ip = 1303; continue _fun0001 }
 664:
            var2 = 'bindOpenRoleSubscriptionOverview';
            if(!(var2 !== var3)) { _fun0001_ip = 1185; continue _fun0001 }
 677:
            var2 = 'bindUserSurvey';
            if(!(var2 !== var3)) { _fun0001_ip = 766; continue _fun0001 }
 687:
            var2 = 'bindInsertText';
            if(!(var2 === var3)) { _fun0001_ip = 3049; continue _fun0001 }
 700:
            var2 = var1 == var5;
            var7 = undefined;
            if(var2) { _fun0001_ip = 721; continue _fun0001 }
 709:
            var3 = var5.current;
            var2 = var1 == var3;
            var7 = var3;
 721:
            if(var2) { _fun0001_ip = 3049; continue _fun0001 }
 727:
            var6 = var7.insertText;
            var3 = var4.text;
            var11 = var4.addSpace;
            var2 = var1 == var11;
            if(var2) { _fun0001_ip = 754; continue _fun0001 }
 751:
            var2 = var11;
 754:
            var2 = var6.bind(var7)(var3, var1, var2);
            _fun0001_ip = 3049; continue _fun0001;
 766:
            var6 = _closure1_slot8;
            var3 = var6.getChannel;
            var2 = var4.message;
            var2 = var2.channel_id;
            var2 = var3.bind(var6)(var2);
            var3 = var1 == var2;
            var16 = undefined;
            var14 = undefined;
            if(var3) { _fun0001_ip = 809; continue _fun0001 }
 804:
            var14 = var2.guild_id;
 809:
            if(!(var1 != var14)) { _fun0001_ip = 3049; continue _fun0001 }
 816:
            var3 = var4.notificationType;
            var2 = _closure1_slot17;
            var2 = var2.TRENDING_CONTENT_PUSH;
            if(!(var2 !== var3)) { _fun0001_ip = 1051; continue _fun0001 }
 839:
            var2 = _closure1_slot17;
            var2 = var2.TOP_MESSAGE_PUSH;
            if(!(var2 !== var3)) { _fun0001_ip = 989; continue _fun0001 }
 856:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 22;
            var2 = var6[var2];
            var7 = var3.bind(var16)(var2);
            var2 = 37;
            var3 = var6[var2];
            var2 = var6.paths;
            var11 = var7.bind(var16)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 20;
            var2 = var6[var2];
            var7 = var3.bind(var16)(var2);
            var6 = var7.openLazy;
            var3 = {};
            var2 = _closure1_slot11;
            var2 = var2.MESSAGE_EMBED;
            var3['location'] = var2;
            var2 = var4.message;
            var2 = var2.id;
            var3['messageId'] = var2;
            var2 = var4.notificationType;
            if(!(var1 == var2)) { _fun0001_ip = 966; continue _fun0001 }
 956:
            var13 = _closure1_slot17;
            var2 = var13.TOP_MESSAGE_PUSH;
 966:
            var3['notificationType'] = var2;
            var2 = 'NotificationSurvey';
            var2 = var6.bind(var7)(var11, var2, var3);
            _fun0001_ip = 3049; continue _fun0001;
 989:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 36;
            var2 = var6[var2];
            var11 = var3.bind(var16)(var2);
            var7 = var11.openGuildHighlightNotificationForPush;
            var22 = var4.message;
            var21 = var4.notificationType;
            var2 = _closure1_slot11;
            var20 = var2.MESSAGE_EMBED;
            var24 = var11;
            var23 = var14;
            var2 = var24[var7](var23, var22, var21, var20, var19);
            _fun0001_ip = 3049; continue _fun0001;
 1051:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 36;
            var2 = var6[var2];
            var13 = var3.bind(var16)(var2);
            var11 = var13.openGuildHighlightNotificationForPush;
            var7 = var4.message;
            var6 = var4.notificationType;
            var2 = _closure1_slot11;
            var3 = var2.MESSAGE_EMBED;
            var2 = {};
            var18 = _closure1_slot6;
            var17 = var18.selectedSummary;
            var15 = var4.message;
            var15 = var15.channel_id;
            var15 = var17.bind(var18)(var15);
            var17 = var1 == var15;
            var16 = undefined;
            if(var17) { _fun0001_ip = 1139; continue _fun0001 }
 1134:
            var16 = var15.id;
 1139:
            var17 = var1 != var16;
            var15 = 'unknown';
            if(!var17) { _fun0001_ip = 1153; continue _fun0001 }
 1150:
            var15 = var16;
 1153:
            var2['summary_id'] = var15;
            var24 = var13;
            var23 = var14;
            var22 = var7;
            var21 = var6;
            var20 = var3;
            var19 = var2;
            var2 = var24[var11](var23, var22, var21, var20, var19, var18);
            _fun0001_ip = 3049; continue _fun0001;
 1185:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 34;
            var11 = var7[var3];
            var3 = undefined;
            var13 = var6.bind(var3)(var11);
            var11 = var13.transitionTo;
            var16 = _closure1_slot14;
            var15 = var16.CHANNEL;
            var14 = var4.guildId;
            var2 = _closure1_slot16;
            var2 = var2.ROLE_SUBSCRIPTIONS;
            var2 = var15.bind(var16)(var14, var2);
            var2 = var11.bind(var13)(var2);
            var2 = 35;
            var2 = var7[var2];
            var13 = var6.bind(var3)(var2);
            var11 = var13.trackRoleSubscriptionPurchaseMessageTierClick;
            var23 = var4.guildId;
            var22 = var4.channelId;
            var21 = var4.messageId;
            var20 = var4.roleSubscriptionListingId;
            var24 = var13;
            var2 = var24[var11](var23, var22, var21, var20, var19);
            _fun0001_ip = 3049; continue _fun0001;
 1303:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 28;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var3);
            var3 = var6.jumpToMessage;
            var2 = {};
            var7 = var4.targetChannelId;
            var2['channelId'] = var7;
            var7 = var4.targetMessageId;
            var2['messageId'] = var7;
            var2['flash'] = var8;
            var7 = var4.messageId;
            var2['returnMessageId'] = var7;
            var2 = var3.bind(var6)(var2);
            _fun0001_ip = 3049; continue _fun0001;
 1381:
            var7 = _closure1_slot8;
            var6 = var7.getChannel;
            var3 = var4.threadId;
            var3 = var6.bind(var7)(var3);
            if(!(var1 != var3)) { _fun0001_ip = 3049; continue _fun0001 }
 1411:
            var11 = var1 == var3;
            var7 = undefined;
            var6 = undefined;
            if(var11) { _fun0001_ip = 1427; continue _fun0001 }
 1422:
            var6 = var3.guild_id;
 1427:
            var3 = var3.id;
            var2 = _closure1_slot18;
            var2 = var2.EMBED;
            var2 = var10.bind(var7)(var6, var3, var2);
            _fun0001_ip = 3049; continue _fun0001;
 1454:
            var6 = _closure1_slot4;
            var3 = var6.getApplication;
            var2 = var4.applicationUserId;
            var11 = var3.bind(var6)(var2);
            if(!(var1 != var11)) { _fun0001_ip = 1595; continue _fun0001 }
 1482:
            var2 = var1 == var5;
            var14 = undefined;
            var6 = undefined;
            if(var2) { _fun0001_ip = 1505; continue _fun0001 }
 1493:
            var3 = var5.current;
            var2 = var1 == var3;
            var6 = var3;
 1505:
            if(var2) { _fun0001_ip = 3049; continue _fun0001 }
 1511:
            var3 = var6.openCustomKeyboard;
            var2 = {};
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 31;
            var7 = var15[var7];
            var7 = var13.bind(var14)(var7);
            var7 = var7.KeyboardTypes;
            var7 = var7.APP_LAUNCHER;
            var2['type'] = var7;
            var7 = {};
            var13 = _closure1_slot15;
            var13 = var13.APPLICATION_VIEW;
            var7['initialRouteName'] = var13;
            var7['application'] = var11;
            var7['initiallyExpanded'] = var8;
            var2['context'] = var7;
            var2 = var3.bind(var6)(var2);
            _fun0001_ip = 3049; continue _fun0001;
 1595:
            var2 = var1 == var5;
            var13 = undefined;
            var6 = undefined;
            if(var2) { _fun0001_ip = 1618; continue _fun0001 }
 1606:
            var3 = var5.current;
            var2 = var1 == var3;
            var6 = var3;
 1618:
            if(var2) { _fun0001_ip = 3049; continue _fun0001 }
 1624:
            var3 = var6.openCustomKeyboard;
            var2 = {};
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 31;
            var7 = var14[var7];
            var7 = var11.bind(var13)(var7);
            var7 = var7.KeyboardTypes;
            var7 = var7.APP_LAUNCHER;
            var2['type'] = var7;
            var7 = {};
            var10 = _closure1_slot15;
            var10 = var10.APPLICATION_VIEW;
            var7['initialRouteName'] = var10;
            var10 = var4.applicationUserId;
            var7['applicationId'] = var10;
            var7['initiallyExpanded'] = var8;
            var2['context'] = var7;
            var2 = var3.bind(var6)(var2);
            _fun0001_ip = 3049; continue _fun0001;
 1714:
            var6 = var1 == var12;
            var2 = undefined;
            var3 = undefined;
            if(var6) { _fun0001_ip = 1731; continue _fun0001 }
 1725:
            var3 = var12.interaction;
 1731:
            if(!(var1 != var3)) { _fun0001_ip = 2392; continue _fun0001 }
 1738:
            if(!(var1 != var9)) { _fun0001_ip = 2392; continue _fun0001 }
 1745:
            var7 = _closure1_slot10;
            var6 = var7.getUser;
            var3 = var4.userId;
            var7 = var6.bind(var7)(var3);
            if(!(var1 != var7)) { _fun0001_ip = 2390; continue _fun0001 }
 1775:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 30;
            var3 = var11[var3];
            var6 = var6.bind(var2)(var3);
            var3 = var6.isPrimaryEntryPointCommandMessage;
            var3 = var3.bind(var6)(var12);
            if(var3) { _fun0001_ip = 2022; continue _fun0001 }
 1812:
            var6 = var1 == var12;
            var3 = undefined;
            if(var6) { _fun0001_ip = 1827; continue _fun0001 }
 1821:
            var3 = var12.author;
 1827:
            if(!(var1 != var3)) { _fun0001_ip = 3049; continue _fun0001 }
 1834:
            var6 = _closure1_slot1;
            var14 = _closure1_slot2;
            var3 = 32;
            var3 = var14[var3];
            var6 = var6.bind(var2)(var3);
            var3 = {};
            var13 = _closure1_slot0;
            var11 = 33;
            var11 = var14[var11];
            var14 = var13.bind(var2)(var11);
            var13 = var14.getUserAuthor;
            var11 = var12.interaction;
            var11 = var11.user;
            var11 = var13.bind(var14)(var11, var9);
            var3['author'] = var11;
            var11 = var4.messageChannelId;
            var3['channelId'] = var11;
            var3['chatInputRef'] = var5;
            var11 = var4.messageId;
            var3['messageId'] = var11;
            var3['user'] = var7;
            var13 = _closure1_slot7;
            var11 = var1 == var12;
            var7 = undefined;
            if(var11) { _fun0001_ip = 1947; continue _fun0001 }
 1941:
            var7 = var12.author;
 1947:
            var11 = var13.prototype;
            var11 = Object.create(var11, {constructor: {value: var13}});
            var24 = var11;
            var23 = var7;
            var7 = new var24[var13](var23, var22);
            var7 = var7 instanceof Object ? var7 : var11;
            var3['applicationUser'] = var7;
            var7 = var9.getGuildId;
            var9 = var7.bind(var9)();
            var11 = var1 != var9;
            var7 = undefined;
            if(!var11) { _fun0001_ip = 1997; continue _fun0001 }
 1994:
            var7 = var9;
 1997:
            var3['guildId'] = var7;
            var7 = var4.messageType;
            var3['messageType'] = var7;
            var3 = var6.bind(var2)(var3);
            _fun0001_ip = 3049; continue _fun0001;
 2022:
            var3 = var12.applicationId;
            if(!(var1 != var3)) { _fun0001_ip = 2388; continue _fun0001 }
 2034:
            var7 = _closure1_slot8;
            var6 = var7.getChannel;
            var3 = var4.messageChannelId;
            var3 = var6.bind(var7)(var3);
            if(!(var1 != var3)) { _fun0001_ip = 2386; continue _fun0001 }
 2061:
            var7 = _closure1_slot3;
            var6 = {};
            var6['channel'] = var3;
            var3 = 'channel';
            var6['type'] = var3;
            var3 = var12.applicationId;
            var9 = var7.bind(var2)(var6, var3);
            var6 = var9.descriptor;
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 2110; continue _fun0001 }
 2105:
            var3 = var6.application;
 2110:
            if(!(var1 == var3)) { _fun0001_ip = 2238; continue _fun0001 }
 2117:
            var3 = var1 == var5;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2138; continue _fun0001 }
 2126:
            var6 = var5.current;
            var3 = var1 == var6;
            var7 = var6;
 2138:
            if(var3) { _fun0001_ip = 3049; continue _fun0001 }
 2144:
            var6 = var7.openCustomKeyboard;
            var3 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 31;
            var11 = var14[var11];
            var11 = var13.bind(var2)(var11);
            var11 = var11.KeyboardTypes;
            var11 = var11.APP_LAUNCHER;
            var3['type'] = var11;
            var11 = {};
            var13 = _closure1_slot15;
            var13 = var13.APPLICATION_VIEW;
            var11['initialRouteName'] = var13;
            var11['initiallyExpanded'] = var8;
            var12 = var12.applicationId;
            var11['applicationId'] = var12;
            var11['installOnDemand'] = var8;
            var3['context'] = var11;
            var3 = var6.bind(var7)(var3);
            _fun0001_ip = 3049; continue _fun0001;
 2238:
            var3 = var1 == var5;
            var6 = undefined;
            if(var3) { _fun0001_ip = 2259; continue _fun0001 }
 2247:
            var5 = var5.current;
            var3 = var1 == var5;
            var6 = var5;
 2259:
            if(var3) { _fun0001_ip = 3049; continue _fun0001 }
 2265:
            var5 = var6.openCustomKeyboard;
            var3 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 31;
            var7 = var12[var7];
            var7 = var11.bind(var2)(var7);
            var7 = var7.KeyboardTypes;
            var7 = var7.APP_LAUNCHER;
            var3['type'] = var7;
            var7 = {};
            var10 = _closure1_slot15;
            var10 = var10.APPLICATION_VIEW;
            var7['initialRouteName'] = var10;
            var7['initiallyExpanded'] = var8;
            var8 = var9.descriptor;
            var8 = var8.application;
            var7['application'] = var8;
            var8 = var9.isGuildInstalled;
            var8 = !var8;
            if(!var8) { _fun0001_ip = 2367; continue _fun0001 }
 2358:
            var9 = var9.isUserInstalled;
            var8 = !var9;
 2367:
            var7['installOnDemand'] = var8;
            var3['context'] = var7;
            var3 = var5.bind(var6)(var3);
            _fun0001_ip = 3049; continue _fun0001;
 2386:
            return var2;
 2388:
            return var2;
 2390:
            return var2;
 2392:
            return var2;
 2394:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 19;
            var2 = var8[var2];
            var5 = undefined;
            var3 = var7.bind(var5)(var2);
            var2 = {};
            var6 = var4.userId;
            var2['userId'] = var6;
            var6 = var4.messageChannelId;
            var2['channelId'] = var6;
            var6 = var4.messageId;
            var2['messageId'] = var6;
            var6 = 29;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.USERNAME;
            var6 = new Array(1);
            var6[0] = var7;
            var2['sourceAnalyticsLocations'] = var6;
            var2 = var3.bind(var5)(var2);
            _fun0001_ip = 3049; continue _fun0001;
 2490:
            var7 = _closure1_slot5;
            var6 = var7.getMessage;
            var8 = var4.message;
            var9 = var1 == var8;
            var2 = undefined;
            var5 = undefined;
            if(var9) { _fun0001_ip = 2524; continue _fun0001 }
 2519:
            var5 = var8.id;
 2524:
            var5 = var6.bind(var7)(var5);
            if(!(var1 != var5)) { _fun0001_ip = 2542; continue _fun0001 }
 2533:
            var5 = var5.isBlockedEdit;
            if(var5) { _fun0001_ip = 2583; continue _fun0001 }
 2542:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 28;
            var5 = var7[var5];
            var7 = var6.bind(var2)(var5);
            var6 = var7.dismissAutomatedMessage;
            var5 = var4.message;
            var5 = var6.bind(var7)(var5);
            _fun0001_ip = 3049; continue _fun0001;
 2583:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 27;
            var3 = var6[var3];
            var5 = var5.bind(var2)(var3);
            var3 = var5.removeAutomodMessageNotice;
            var6 = var4.message;
            var7 = var1 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 2628; continue _fun0001 }
 2623:
            var2 = var6.id;
 2628:
            var2 = var3.bind(var5)(var2);
            _fun0001_ip = 3049; continue _fun0001;
 2638:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 26;
            var2 = var5[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = var4.messageChannelId;
            var2['channelId'] = var6;
            var2 = var3.bind(var5)(var2);
            _fun0001_ip = 3049; continue _fun0001;
 2685:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 25;
            var8 = var6[var2];
            var3 = undefined;
            var9 = var5.bind(var3)(var8);
            var8 = var9.setSection;
            var7 = _closure1_slot12;
            var7 = var7.PINNED_MESSAGES;
            var7 = var8.bind(var9)(var7);
            var2 = var6[var2];
            var5 = var5.bind(var3)(var2);
            var3 = var5.open;
            var2 = var4.messageChannelId;
            var2 = var3.bind(var5)(var2);
            _fun0001_ip = 3049; continue _fun0001;
 2762:
            var5 = var4.stream;
            if(!(var1 != var5)) { _fun0001_ip = 2845; continue _fun0001 }
 2772:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 23;
            var3 = var7[var3];
            var6 = undefined;
            var9 = var8.bind(var6)(var3);
            var8 = var9.selectVoiceChannel;
            var3 = var5.channelId;
            var3 = var8.bind(var9)(var3);
            var3 = _closure1_slot0;
            var2 = 24;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.watchStreamAndTransitionToStream;
            var2 = var2.bind(var3)(var5);
            _fun0001_ip = 3049; continue _fun0001;
 2845:
            var2 = undefined;
            return var2;
 2849:
            var2 = var4.messageReference;
            if(!(var1 != var2)) { _fun0001_ip = 2985; continue _fun0001 }
 2862:
            var2 = var4.messageReference;
            var7 = var2.guild_id;
            if(!(var1 != var7)) { _fun0001_ip = 2981; continue _fun0001 }
 2877:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 20;
            var3 = var1[var3];
            var8 = undefined;
            var6 = var5.bind(var8)(var3);
            var5 = var6.openLazy;
            var3 = _closure1_slot0;
            var2 = 22;
            var2 = var1[var2];
            var3 = var3.bind(var8)(var2);
            var2 = 21;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var8)(var2, var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'GuildProfileActionSheet:';
            var2 = var2.bind(var1)(var7);
            var1 = {};
            var1['guildId'] = var7;
            var1 = var5.bind(var6)(var3, var2, var1);
            _fun0001_ip = 3049; continue _fun0001;
 2981:
            var1 = undefined;
            return var1;
 2985:
            var1 = undefined;
            return var1;
 2989:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = var4.userId;
            var1['userId'] = var5;
            var5 = var4.messageChannelId;
            var1['channelId'] = var5;
            var4 = var4.messageId;
            var1['messageId'] = var4;
            var1 = var2.bind(var3)(var1);
 3049:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleMessagesTapLink'] = var2;
    return var1;
})();