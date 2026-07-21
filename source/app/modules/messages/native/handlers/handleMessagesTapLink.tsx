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
case 0:
            var7 = arg1;
            var6 = arg2;
            var1 = var7.url;
            var10 = null;
            var1 = var10 != var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var7.url;
            var2 = '';
            var1 = var2 !== var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var7.url;
            var12 = var7.node;
            var4 = var10 == var12;
            var3 = false;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 14;
            var4 = var9[var4];
            var9 = undefined;
            var11 = var11.bind(var9)(var4);
            var4 = var11.isLinkTrusted;
            var4 = var4.bind(var11)(var12);
            var3 = false;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 15;
            var4 = var12[var4];
            var4 = var11.bind(var9)(var4);
            var4 = var4.bind(var9)(var8);
            var4 = var4.payload;
            var11 = var4.type;
            var8 = _closure1_slot13;
            var8 = var8.INVITE;
            var3 = false;
            if(!(var11 === var8)) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var8 = var4.inviteCode;
            var8 = var10 == var8;
            var3 = false;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 10:
            var11 = _closure1_slot9;
            var8 = var11.getInvite;
            var4 = var4.inviteCode;
            var8 = var8.bind(var11)(var4);
            var4 = var10 == var8;
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 16;
            var11 = var13[var11];
            var12 = var12.bind(var9)(var11);
            var11 = var12.isGuildScheduledEventInviteEmbed;
            var11 = var11.bind(var12)(var8);
            var4 = !var11;
case 11:
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 17;
            var5 = var12[var5];
            var5 = var11.bind(var9)(var5);
            var5 = var5.bind(var9)(var8);
            var4 = 0;
case 13:
            var3 = !var4;
case 6:
            if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 15;
            var4 = var9[var4];
            var9 = undefined;
            var8 = var8.bind(var9)(var4);
            var4 = var7.url;
            var4 = var8.bind(var9)(var4);
            var4 = var4.payload;
            var11 = var4.type;
            var8 = _closure1_slot13;
            var8 = var8.GAME_PROFILE;
            var2 = false;
            if(!(var11 === var8)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = var4.gameId;
            var8 = var10 != var6;
            var4 = undefined;
            if(!var8) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = var7.messageId;
            var8 = var10 != var8;
            var4 = undefined;
            if(!var8) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var13 = _closure1_slot10;
            var11 = var13.getMessage;
            var8 = var7.messageId;
            var11 = var11.bind(var13)(var6, var8);
            var13 = var10 == var11;
            var8 = undefined;
            if(var13) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var11 = var11.author;
            var8 = var11.id;
case 22:
            var4 = var8;
case 19:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 18;
            var5 = var13[var5];
            var5 = var8.bind(var9)(var5);
            var11 = var5.GameProfileSources;
            var5 = 19;
            var5 = var13[var5];
            var5 = var8.bind(var9)(var5);
            var9 = var5.default;
            var8 = var9.openGameProfileModal;
            var5 = {};
            var5['gameId'] = var12;
            var11 = var11.Deeplink;
            var5['source'] = var11;
            var5['sourceUserId'] = var4;
            var11 = {};
            var4 = true;
            var11['shouldOpenGameProfile'] = var4;
            var11['gameId'] = var12;
            var5['gameProfileModalChecks'] = var11;
            var5 = var8.bind(var9)(var5);
            var2 = true;
case 17:
            var3 = var2;
case 15:
            var1 = true;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 24:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 20;
            var3 = var5[var3];
            var11 = undefined;
            var5 = var4.bind(var11)(var3);
            var4 = var5.handleClick;
            var3 = {};
            var8 = var7.url;
            var3['href'] = var8;
            var8 = var7.node;
            var8 = var10 != var8;
            if(!var8) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 14;
            var9 = var12[var9];
            var11 = var10.bind(var11)(var9);
            var10 = var11.isLinkTrusted;
            var9 = var7.node;
            var8 = var10.bind(var11)(var9);
case 25:
            var3['trusted'] = var8;
            var7 = var7.messageId;
            var3['messageId'] = var7;
            var3['channelId'] = var6;
            var3 = var4.bind(var5)(var3);
            var1 = true;
case 4:
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticsLocations;
    var _closure1_slot12 = var8;
    var8 = var5.LinkingTypes;
    var _closure1_slot13 = var8;
    var5 = var5.Routes;
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AppLauncherRouteName;
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.StaticChannelRoute;
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NotificationTypes;
    var _closure1_slot17 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.OpenThreadAnalyticsLocations;
    var _closure1_slot18 = var5;
    var5 = 41;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/handlers/handleMessagesTapLink.tsx';
    var5 = var6.bind(var7)(var5);
    var3['handleMessagesTapURLLink'] = var4;
    var2 = function handleMessagesTapLink(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!(var9 !== var1)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var1 = var2.isAlertOrActionSheetOpen;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0002_ip = 29; continue _fun0002 }
case 27:
            var7 = _closure1_slot19;
            var2 = null;
            var8 = var2 == var10;
            var3 = undefined;
            var5 = undefined;
            if(var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var5 = var10.id;
case 30:
            var5 = var7.bind(var3)(var4, var5);
            if(var5) { _fun0002_ip = 29; continue _fun0002 }
case 32:
            var5 = var4.action;
            if(!(var2 != var5)) { _fun0002_ip = 29; continue _fun0002 }
case 33:
            var7 = var4.action;
            var5 = 'bindUserMenu';
            if(!(var5 !== var7)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var5 = 'bindGuildMenu';
            if(!(var5 !== var7)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var5 = 'bindJoinStream';
            if(!(var5 !== var7)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var5 = 'bindOpenPins';
            if(!(var5 !== var7)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var5 = 'bindOpenGdmCustomizeActionSheet';
            if(!(var5 !== var7)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var5 = 'bindDismissMessage';
            if(!(var5 !== var7)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var5 = 'bindTapUsername';
            if(!(var5 !== var7)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var5 = 'bindTapCommandName';
            if(!(var5 !== var7)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var5 = 'bindTapActivityText';
            if(!(var5 !== var7)) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var5 = 'bindOpenThreadChannel';
            if(!(var5 !== var7)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var5 = 'bindJumpToMessage';
            if(!(var5 !== var7)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var5 = 'bindOpenRoleSubscriptionOverview';
            if(!(var5 !== var7)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var5 = 'bindUserSurvey';
            if(!(var5 !== var7)) { _fun0002_ip = 23; continue _fun0002 }
case 58:
            var5 = 'bindInsertText';
            if(!(var5 === var7)) { _fun0002_ip = 29; continue _fun0002 }
case 59:
            var5 = var2 == var6;
            var13 = undefined;
            if(var5) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var7 = var6.current;
            var5 = var2 == var7;
            var13 = var7;
case 60:
            if(var5) { _fun0002_ip = 29; continue _fun0002 }
case 62:
            var8 = var13.insertText;
            var7 = var4.text;
            var14 = var4.addSpace;
            var5 = var2 == var14;
            if(var5) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var5 = var14;
case 63:
            var5 = var8.bind(var13)(var7, var2, var5);
            _fun0002_ip = 29; continue _fun0002;
case 23:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var5 = var4.message;
            var5 = var5.channel_id;
            var5 = var7.bind(var8)(var5);
            var7 = var2 == var5;
            var16 = undefined;
            if(var7) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var16 = var5.guild_id;
case 65:
            if(!(var2 != var16)) { _fun0002_ip = 29; continue _fun0002 }
case 67:
            var7 = var4.notificationType;
            var5 = _closure1_slot17;
            var5 = var5.TRENDING_CONTENT_PUSH;
            if(!(var5 !== var7)) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var5 = _closure1_slot17;
            var5 = var5.TOP_MESSAGE_PUSH;
            if(!(var5 !== var7)) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 25;
            var5 = var8[var5];
            var13 = var7.bind(var3)(var5);
            var5 = 40;
            var7 = var8[var5];
            var5 = var8.paths;
            var14 = var13.bind(var3)(var7, var5);
            var7 = _closure1_slot1;
            var5 = 23;
            var5 = var8[var5];
            var13 = var7.bind(var3)(var5);
            var8 = var13.openLazy;
            var7 = {};
            var5 = _closure1_slot12;
            var5 = var5.MESSAGE_EMBED;
            var7['location'] = var5;
            var5 = var4.message;
            var5 = var5.id;
            var7['messageId'] = var5;
            var5 = var4.notificationType;
            if(!(var2 == var5)) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var15 = _closure1_slot17;
            var5 = var15.TOP_MESSAGE_PUSH;
case 72:
            var7['notificationType'] = var5;
            var5 = 'NotificationSurvey';
            var5 = var8.bind(var13)(var14, var5, var7);
            _fun0002_ip = 29; continue _fun0002;
case 70:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 39;
            var5 = var8[var5];
            var14 = var7.bind(var3)(var5);
            var13 = var14.openGuildHighlightNotificationForPush;
            var23 = var4.message;
            var22 = var4.notificationType;
            var5 = _closure1_slot12;
            var21 = var5.MESSAGE_EMBED;
            var25 = var14;
            var24 = var16;
            var5 = var25[var13](var24, var23, var22, var21, var20);
            _fun0002_ip = 29; continue _fun0002;
case 68:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 39;
            var5 = var8[var5];
            var15 = var7.bind(var3)(var5);
            var14 = var15.openGuildHighlightNotificationForPush;
            var13 = var4.message;
            var8 = var4.notificationType;
            var5 = _closure1_slot12;
            var7 = var5.MESSAGE_EMBED;
            var5 = {};
            var19 = _closure1_slot6;
            var18 = var19.selectedSummary;
            var17 = var4.message;
            var17 = var17.channel_id;
            var17 = var18.bind(var19)(var17);
            var19 = var2 == var17;
            var18 = undefined;
            if(var19) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var18 = var17.id;
case 74:
            var19 = var2 != var18;
            var17 = 'unknown';
            if(!var19) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var17 = var18;
case 76:
            var5['summary_id'] = var17;
            var25 = var15;
            var24 = var16;
            var23 = var13;
            var22 = var8;
            var21 = var7;
            var20 = var5;
            var5 = var25[var14](var24, var23, var22, var21, var20, var19);
            _fun0002_ip = 29; continue _fun0002;
case 56:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 37;
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
            var5 = 38;
            var5 = var8[var5];
            var15 = var7.bind(var3)(var5);
            var14 = var15.trackRoleSubscriptionPurchaseMessageTierClick;
            var24 = var4.guildId;
            var23 = var4.channelId;
            var22 = var4.messageId;
            var21 = var4.roleSubscriptionListingId;
            var25 = var15;
            var5 = var25[var14](var24, var23, var22, var21, var20);
            _fun0002_ip = 29; continue _fun0002;
case 54:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 31;
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
            _fun0002_ip = 29; continue _fun0002;
case 52:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var5 = var4.threadId;
            var5 = var7.bind(var8)(var5);
            if(!(var2 != var5)) { _fun0002_ip = 29; continue _fun0002 }
case 78:
            var7 = var2 == var5;
            var8 = undefined;
            if(var7) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var8 = var5.guild_id;
case 79:
            var7 = var5.id;
            var5 = _closure1_slot18;
            var5 = var5.EMBED;
            var5 = var11.bind(var3)(var8, var7, var5);
            _fun0002_ip = 29; continue _fun0002;
case 50:
            var8 = _closure1_slot4;
            var7 = var8.getApplication;
            var5 = var4.applicationUserId;
            var13 = var7.bind(var8)(var5);
            if(!(var2 != var13)) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var5 = var2 == var6;
            var8 = undefined;
            if(var5) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var7 = var6.current;
            var5 = var2 == var7;
            var8 = var7;
case 83:
            if(var5) { _fun0002_ip = 29; continue _fun0002 }
case 85:
            var7 = var8.openCustomKeyboard;
            var5 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 34;
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
            _fun0002_ip = 29; continue _fun0002;
case 81:
            var5 = var2 == var6;
            var8 = undefined;
            if(var5) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var7 = var6.current;
            var5 = var2 == var7;
            var8 = var7;
case 86:
            if(var5) { _fun0002_ip = 29; continue _fun0002 }
case 88:
            var7 = var8.openCustomKeyboard;
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 34;
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
            _fun0002_ip = 29; continue _fun0002;
case 48:
            var7 = var2 == var12;
            var5 = undefined;
            if(var7) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var5 = var12.interaction;
case 89:
            if(!(var2 != var5)) { _fun0002_ip = 91; continue _fun0002 }
case 92:
            if(!(var2 != var10)) { _fun0002_ip = 91; continue _fun0002 }
case 93:
            var8 = _closure1_slot11;
            var7 = var8.getUser;
            var5 = var4.userId;
            var8 = var7.bind(var8)(var5);
            if(!(var2 != var8)) { _fun0002_ip = 94; continue _fun0002 }
case 95:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 33;
            var5 = var11[var5];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isPrimaryEntryPointCommandMessage;
            var5 = var5.bind(var7)(var12);
            if(var5) { _fun0002_ip = 96; continue _fun0002 }
case 97:
            var7 = var2 == var12;
            var5 = undefined;
            if(var7) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            var5 = var12.author;
case 98:
            if(!(var2 != var5)) { _fun0002_ip = 29; continue _fun0002 }
case 100:
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 35;
            var5 = var14[var5];
            var7 = var7.bind(var3)(var5);
            var5 = {};
            var13 = _closure1_slot0;
            var11 = 36;
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
            if(var11) { _fun0002_ip = 101; continue _fun0002 }
case 102:
            var8 = var12.author;
case 101:
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
            if(!var11) { _fun0002_ip = 103; continue _fun0002 }
case 104:
            var8 = var10;
case 103:
            var5['guildId'] = var8;
            var8 = var4.messageType;
            var5['messageType'] = var8;
            var5 = var7.bind(var3)(var5);
            _fun0002_ip = 29; continue _fun0002;
case 96:
            var5 = var12.applicationId;
            if(!(var2 != var5)) { _fun0002_ip = 105; continue _fun0002 }
case 106:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var5 = var4.messageChannelId;
            var5 = var7.bind(var8)(var5);
            if(!(var2 != var5)) { _fun0002_ip = 107; continue _fun0002 }
case 108:
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
            if(var8) { _fun0002_ip = 109; continue _fun0002 }
case 110:
            var5 = var7.application;
case 109:
            if(!(var2 == var5)) { _fun0002_ip = 111; continue _fun0002 }
case 112:
            var5 = var2 == var6;
            var8 = undefined;
            if(var5) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var7 = var6.current;
            var5 = var2 == var7;
            var8 = var7;
case 113:
            if(var5) { _fun0002_ip = 29; continue _fun0002 }
case 115:
            var7 = var8.openCustomKeyboard;
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 34;
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
            _fun0002_ip = 29; continue _fun0002;
case 111:
            var5 = var2 == var6;
            var7 = undefined;
            if(var5) { _fun0002_ip = 116; continue _fun0002 }
case 117:
            var6 = var6.current;
            var5 = var2 == var6;
            var7 = var6;
case 116:
            if(var5) { _fun0002_ip = 29; continue _fun0002 }
case 118:
            var6 = var7.openCustomKeyboard;
            var5 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 34;
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
            if(!var9) { _fun0002_ip = 119; continue _fun0002 }
case 120:
            var10 = var10.isUserInstalled;
            var9 = !var10;
case 119:
            var8['installOnDemand'] = var9;
            var5['context'] = var8;
            var5 = var6.bind(var7)(var5);
            _fun0002_ip = 29; continue _fun0002;
case 107:
            return var3;
case 105:
            return var3;
case 94:
            return var3;
case 91:
            return var3;
case 46:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 22;
            var5 = var9[var5];
            var6 = var8.bind(var3)(var5);
            var5 = {};
            var7 = var4.userId;
            var5['userId'] = var7;
            var7 = var4.messageChannelId;
            var5['channelId'] = var7;
            var7 = var4.messageId;
            var5['messageId'] = var7;
            var7 = 32;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var8 = var7.USERNAME;
            var7 = new Array(1);
            var7[0] = var8;
            var5['sourceAnalyticsLocations'] = var7;
            var5 = var6.bind(var3)(var5);
            _fun0002_ip = 29; continue _fun0002;
case 44:
            var7 = _closure1_slot5;
            var6 = var7.getMessage;
            var8 = var4.message;
            var9 = var2 == var8;
            var5 = undefined;
            if(var9) { _fun0002_ip = 121; continue _fun0002 }
case 122:
            var5 = var8.id;
case 121:
            var5 = var6.bind(var7)(var5);
            if(!(var2 != var5)) { _fun0002_ip = 123; continue _fun0002 }
case 124:
            var5 = var5.isBlockedEdit;
            if(var5) { _fun0002_ip = 125; continue _fun0002 }
case 123:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 31;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.dismissAutomatedMessage;
            var5 = var4.message;
            var5 = var6.bind(var7)(var5);
            _fun0002_ip = 29; continue _fun0002;
case 125:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 30;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.removeAutomodMessageNotice;
            var8 = var4.message;
            var9 = var2 == var8;
            var5 = undefined;
            if(var9) { _fun0002_ip = 126; continue _fun0002 }
case 127:
            var5 = var8.id;
case 126:
            var5 = var6.bind(var7)(var5);
            _fun0002_ip = 29; continue _fun0002;
case 42:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 29;
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var5 = {};
            var7 = var4.messageChannelId;
            var5['channelId'] = var7;
            var5 = var6.bind(var3)(var5);
            _fun0002_ip = 29; continue _fun0002;
case 40:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 28;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var4.messageChannelId;
            var5 = 'pinned-message-system-message';
            var5 = var7.bind(var3)(var6, var5);
            _fun0002_ip = 29; continue _fun0002;
case 38:
            var7 = var4.stream;
            if(!(var2 != var7)) { _fun0002_ip = 128; continue _fun0002 }
case 129:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 26;
            var5 = var8[var5];
            var9 = var6.bind(var3)(var5);
            var6 = var9.selectVoiceChannel;
            var5 = var7.channelId;
            var5 = var6.bind(var9)(var5);
            var6 = _closure1_slot0;
            var5 = 27;
            var5 = var8[var5];
            var6 = var6.bind(var3)(var5);
            var5 = var6.watchStreamAndTransitionToStream;
            var5 = var5.bind(var6)(var7);
            _fun0002_ip = 29; continue _fun0002;
case 128:
            return var3;
case 36:
            var5 = var4.messageReference;
            if(!(var2 != var5)) { _fun0002_ip = 130; continue _fun0002 }
case 131:
            var5 = var4.messageReference;
            var9 = var5.guild_id;
            if(!(var2 != var9)) { _fun0002_ip = 132; continue _fun0002 }
case 133:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 23;
            var5 = var2[var5];
            var8 = var6.bind(var3)(var5);
            var7 = var8.openLazy;
            var6 = _closure1_slot0;
            var5 = 25;
            var5 = var2[var5];
            var6 = var6.bind(var3)(var5);
            var5 = 24;
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
            _fun0002_ip = 29; continue _fun0002;
case 132:
            return var3;
case 130:
            return var3;
case 34:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 22;
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
case 29:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleMessagesTapLink'] = var2;
    return var1;
})();