// app/modules/messages/native/renderer/system_messages/SystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.MessageTypes;
    var _closure1_slot2 = var7;
    var4 = var4.BoostedGuildTiers;
    var _closure1_slot3 = var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/SystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createSystemMessageContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.message;
            var4 = var1.type;
            var2 = _closure1_slot2;
            var2 = var2.RECIPIENT_ADD;
            if(!(var2 !== var4)) { _fun0001_ip = 2307; continue _fun0001 }
 33:
            var2 = _closure1_slot2;
            var2 = var2.RECIPIENT_REMOVE;
            if(!(var2 !== var4)) { _fun0001_ip = 2272; continue _fun0001 }
 50:
            var2 = _closure1_slot2;
            var2 = var2.CALL;
            if(!(var2 !== var4)) { _fun0001_ip = 2237; continue _fun0001 }
 67:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var2 !== var4)) { _fun0001_ip = 2202; continue _fun0001 }
 84:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_ICON_CHANGE;
            if(!(var2 !== var4)) { _fun0001_ip = 2167; continue _fun0001 }
 101:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_PINNED_MESSAGE;
            if(!(var2 !== var4)) { _fun0001_ip = 2132; continue _fun0001 }
 118:
            var2 = _closure1_slot2;
            var2 = var2.USER_JOIN;
            if(!(var2 !== var4)) { _fun0001_ip = 2097; continue _fun0001 }
 135:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST;
            if(!(var2 !== var4)) { _fun0001_ip = 2062; continue _fun0001 }
 152:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_1;
            if(!(var2 !== var4)) { _fun0001_ip = 2016; continue _fun0001 }
 169:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_2;
            if(!(var2 !== var4)) { _fun0001_ip = 1970; continue _fun0001 }
 186:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_3;
            if(!(var2 !== var4)) { _fun0001_ip = 1924; continue _fun0001 }
 203:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_FOLLOW_ADD;
            if(!(var2 !== var4)) { _fun0001_ip = 1889; continue _fun0001 }
 220:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_STREAM;
            if(!(var2 !== var4)) { _fun0001_ip = 1854; continue _fun0001 }
 237:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_DISQUALIFIED;
            if(!(var2 !== var4)) { _fun0001_ip = 1819; continue _fun0001 }
 254:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_REQUALIFIED;
            if(!(var2 !== var4)) { _fun0001_ip = 1784; continue _fun0001 }
 271:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING;
            if(!(var2 !== var4)) { _fun0001_ip = 1749; continue _fun0001 }
 288:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING;
            if(!(var2 !== var4)) { _fun0001_ip = 1714; continue _fun0001 }
 305:
            var2 = _closure1_slot2;
            var2 = var2.CHAT_INPUT_COMMAND;
            if(!(var2 !== var4)) { _fun0001_ip = 1679; continue _fun0001 }
 322:
            var2 = _closure1_slot2;
            var2 = var2.CONTEXT_MENU_COMMAND;
            if(!(var2 !== var4)) { _fun0001_ip = 1679; continue _fun0001 }
 339:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INVITE_REMINDER;
            if(!(var2 !== var4)) { _fun0001_ip = 1675; continue _fun0001 }
 356:
            var2 = _closure1_slot2;
            var2 = var2.THREAD_CREATED;
            if(!(var2 !== var4)) { _fun0001_ip = 1640; continue _fun0001 }
 373:
            var2 = _closure1_slot2;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var2 !== var4)) { _fun0001_ip = 1605; continue _fun0001 }
 390:
            var2 = _closure1_slot2;
            var2 = var2.AUTO_MODERATION_ACTION;
            if(!(var2 !== var4)) { _fun0001_ip = 1570; continue _fun0001 }
 407:
            var2 = _closure1_slot2;
            var2 = var2.ROLE_SUBSCRIPTION_PURCHASE;
            if(!(var2 !== var4)) { _fun0001_ip = 1535; continue _fun0001 }
 424:
            var2 = _closure1_slot2;
            var2 = var2.PURCHASE_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 1500; continue _fun0001 }
 441:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_START;
            if(!(var2 !== var4)) { _fun0001_ip = 1465; continue _fun0001 }
 458:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_END;
            if(!(var2 !== var4)) { _fun0001_ip = 1430; continue _fun0001 }
 475:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_TOPIC;
            if(!(var2 !== var4)) { _fun0001_ip = 1395; continue _fun0001 }
 492:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_SPEAKER;
            if(!(var2 !== var4)) { _fun0001_ip = 1360; continue _fun0001 }
 509:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_RAISE_HAND;
            if(!(var2 !== var4)) { _fun0001_ip = 1325; continue _fun0001 }
 526:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION;
            if(!(var2 !== var4)) { _fun0001_ip = 1290; continue _fun0001 }
 543:
            var2 = _closure1_slot2;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_ADDED;
            if(!(var2 !== var4)) { _fun0001_ip = 1244; continue _fun0001 }
 560:
            var2 = _closure1_slot2;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
            if(!(var2 !== var4)) { _fun0001_ip = 1244; continue _fun0001 }
 577:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_ENABLED;
            if(!(var2 !== var4)) { _fun0001_ip = 1209; continue _fun0001 }
 594:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_DISABLED;
            if(!(var2 !== var4)) { _fun0001_ip = 1174; continue _fun0001 }
 611:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_REPORT_RAID;
            if(!(var2 !== var4)) { _fun0001_ip = 1139; continue _fun0001 }
 628:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_REPORT_FALSE_ALARM;
            if(!(var2 !== var4)) { _fun0001_ip = 1104; continue _fun0001 }
 645:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DEADCHAT_REVIVE_PROMPT;
            if(!(var2 !== var4)) { _fun0001_ip = 1069; continue _fun0001 }
 662:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_GAMING_STATS_PROMPT;
            if(!(var2 !== var4)) { _fun0001_ip = 1034; continue _fun0001 }
 679:
            var2 = _closure1_slot2;
            var2 = var2.POLL_RESULT;
            if(!(var2 !== var4)) { _fun0001_ip = 999; continue _fun0001 }
 696:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_LINKED_TO_LOBBY;
            if(!(var2 !== var4)) { _fun0001_ip = 964; continue _fun0001 }
 713:
            var2 = _closure1_slot2;
            var2 = var2.IN_GAME_MESSAGE_NUX;
            if(!(var2 !== var4)) { _fun0001_ip = 929; continue _fun0001 }
 730:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 894; continue _fun0001 }
 747:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 894; continue _fun0001 }
 764:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 894; continue _fun0001 }
 778:
            var2 = _closure1_slot2;
            var2 = var2.EMOJI_ADDED;
            if(!(var2 !== var4)) { _fun0001_ip = 859; continue _fun0001 }
 792:
            var2 = _closure1_slot2;
            var2 = var2.CHAT_WALLPAPER_SET;
            if(!(var2 !== var4)) { _fun0001_ip = 824; continue _fun0001 }
 806:
            var2 = _closure1_slot2;
            var2 = var2.CHAT_WALLPAPER_REMOVED;
            if(!(var2 !== var4)) { _fun0001_ip = 824; continue _fun0001 }
 820:
            var2 = null;
            return var2;
 824:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 36;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChatWallpaperNotAvailableOnMobileSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 859:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 35;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createEmojiAddedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 894:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 34;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createJoinRequestNotificationSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 929:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 33;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createInGameMessageNuxSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 964:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 32;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelLinkedToLobbySystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 999:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 31;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createPollResultSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1034:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 30;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGamingPromptSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1069:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 29;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createSimpleDeadchatPromptSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1104:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 28;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildReportFalseAlarmSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1139:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 27;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildReportRaidSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1174:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 26;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildAlertModeDisabledSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1209:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 26;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildAlertModeEnabledSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1244:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 25;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.createPrivateChannelIntegrationSystemMessage;
            var2 = var3.message;
            var2 = var2.type;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1290:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 24;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createApplicationSubscriptionPurchaseSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1325:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 23;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageRaiseHandSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1360:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 22;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageSpeakerSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1395:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 21;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageTopicSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1430:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 20;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageEndSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1465:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 19;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageStartSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1500:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 18;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createPurchaseNotificationSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1535:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 17;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createRoleSubscriptionPurchaseSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1570:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 16;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createAutoModerationActionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1605:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 15;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createThreadStarterSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1640:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createNewThreadSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1675:
            var2 = null;
            return var2;
 1679:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 13;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createApplicationCommandSourceSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1714:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryGracePeriodFinalWarningSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1749:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryGracePeriodInitialWarningSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1784:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryRequalifiedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1819:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryDisqualifiedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1854:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 11;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildStreamSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1889:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 10;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelFollowAddSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1924:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 9;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
            var2 = _closure1_slot3;
            var2 = var2.TIER_3;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1970:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 9;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
            var2 = _closure1_slot3;
            var2 = var2.TIER_2;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2016:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 9;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
            var2 = _closure1_slot3;
            var2 = var2.TIER_1;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2062:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 8;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserPremiumGuildSubscriptionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2097:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserJoinSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2132:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelPinnedMessageSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2167:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChangeChannelIconSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2202:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChangeChannelNameSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2237:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createCallSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2272:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createRemoveRecipientSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2307:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.createAddRecipientSystemMessage;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['createSystemMessageContent'] = var2;
    return var1;
})();