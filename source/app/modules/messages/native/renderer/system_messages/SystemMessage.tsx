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
    var4 = 36;
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
            if(!(var2 !== var4)) { _fun0001_ip = 2238; continue _fun0001 }
 33:
            var2 = _closure1_slot2;
            var2 = var2.RECIPIENT_REMOVE;
            if(!(var2 !== var4)) { _fun0001_ip = 2203; continue _fun0001 }
 50:
            var2 = _closure1_slot2;
            var2 = var2.CALL;
            if(!(var2 !== var4)) { _fun0001_ip = 2168; continue _fun0001 }
 67:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var2 !== var4)) { _fun0001_ip = 2133; continue _fun0001 }
 84:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_ICON_CHANGE;
            if(!(var2 !== var4)) { _fun0001_ip = 2098; continue _fun0001 }
 101:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_PINNED_MESSAGE;
            if(!(var2 !== var4)) { _fun0001_ip = 2063; continue _fun0001 }
 118:
            var2 = _closure1_slot2;
            var2 = var2.USER_JOIN;
            if(!(var2 !== var4)) { _fun0001_ip = 2028; continue _fun0001 }
 135:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST;
            if(!(var2 !== var4)) { _fun0001_ip = 1993; continue _fun0001 }
 152:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_1;
            if(!(var2 !== var4)) { _fun0001_ip = 1947; continue _fun0001 }
 169:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_2;
            if(!(var2 !== var4)) { _fun0001_ip = 1901; continue _fun0001 }
 186:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_3;
            if(!(var2 !== var4)) { _fun0001_ip = 1855; continue _fun0001 }
 203:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_FOLLOW_ADD;
            if(!(var2 !== var4)) { _fun0001_ip = 1820; continue _fun0001 }
 220:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_STREAM;
            if(!(var2 !== var4)) { _fun0001_ip = 1785; continue _fun0001 }
 237:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_DISQUALIFIED;
            if(!(var2 !== var4)) { _fun0001_ip = 1750; continue _fun0001 }
 254:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_REQUALIFIED;
            if(!(var2 !== var4)) { _fun0001_ip = 1715; continue _fun0001 }
 271:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING;
            if(!(var2 !== var4)) { _fun0001_ip = 1680; continue _fun0001 }
 288:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING;
            if(!(var2 !== var4)) { _fun0001_ip = 1645; continue _fun0001 }
 305:
            var2 = _closure1_slot2;
            var2 = var2.CHAT_INPUT_COMMAND;
            if(!(var2 !== var4)) { _fun0001_ip = 1610; continue _fun0001 }
 322:
            var2 = _closure1_slot2;
            var2 = var2.CONTEXT_MENU_COMMAND;
            if(!(var2 !== var4)) { _fun0001_ip = 1610; continue _fun0001 }
 339:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INVITE_REMINDER;
            if(!(var2 !== var4)) { _fun0001_ip = 1606; continue _fun0001 }
 356:
            var2 = _closure1_slot2;
            var2 = var2.THREAD_CREATED;
            if(!(var2 !== var4)) { _fun0001_ip = 1571; continue _fun0001 }
 373:
            var2 = _closure1_slot2;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var2 !== var4)) { _fun0001_ip = 1536; continue _fun0001 }
 390:
            var2 = _closure1_slot2;
            var2 = var2.AUTO_MODERATION_ACTION;
            if(!(var2 !== var4)) { _fun0001_ip = 1501; continue _fun0001 }
 407:
            var2 = _closure1_slot2;
            var2 = var2.ROLE_SUBSCRIPTION_PURCHASE;
            if(!(var2 !== var4)) { _fun0001_ip = 1466; continue _fun0001 }
 424:
            var2 = _closure1_slot2;
            var2 = var2.PURCHASE_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 1431; continue _fun0001 }
 441:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_START;
            if(!(var2 !== var4)) { _fun0001_ip = 1396; continue _fun0001 }
 458:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_END;
            if(!(var2 !== var4)) { _fun0001_ip = 1361; continue _fun0001 }
 475:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_TOPIC;
            if(!(var2 !== var4)) { _fun0001_ip = 1326; continue _fun0001 }
 492:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_SPEAKER;
            if(!(var2 !== var4)) { _fun0001_ip = 1291; continue _fun0001 }
 509:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_RAISE_HAND;
            if(!(var2 !== var4)) { _fun0001_ip = 1256; continue _fun0001 }
 526:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION;
            if(!(var2 !== var4)) { _fun0001_ip = 1221; continue _fun0001 }
 543:
            var2 = _closure1_slot2;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_ADDED;
            if(!(var2 !== var4)) { _fun0001_ip = 1175; continue _fun0001 }
 560:
            var2 = _closure1_slot2;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
            if(!(var2 !== var4)) { _fun0001_ip = 1175; continue _fun0001 }
 577:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_ENABLED;
            if(!(var2 !== var4)) { _fun0001_ip = 1140; continue _fun0001 }
 594:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_DISABLED;
            if(!(var2 !== var4)) { _fun0001_ip = 1105; continue _fun0001 }
 611:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_REPORT_RAID;
            if(!(var2 !== var4)) { _fun0001_ip = 1070; continue _fun0001 }
 628:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_REPORT_FALSE_ALARM;
            if(!(var2 !== var4)) { _fun0001_ip = 1035; continue _fun0001 }
 645:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DEADCHAT_REVIVE_PROMPT;
            if(!(var2 !== var4)) { _fun0001_ip = 1000; continue _fun0001 }
 662:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_GAMING_STATS_PROMPT;
            if(!(var2 !== var4)) { _fun0001_ip = 965; continue _fun0001 }
 679:
            var2 = _closure1_slot2;
            var2 = var2.POLL_RESULT;
            if(!(var2 !== var4)) { _fun0001_ip = 930; continue _fun0001 }
 696:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_LINKED_TO_LOBBY;
            if(!(var2 !== var4)) { _fun0001_ip = 895; continue _fun0001 }
 713:
            var2 = _closure1_slot2;
            var2 = var2.IN_GAME_MESSAGE_NUX;
            if(!(var2 !== var4)) { _fun0001_ip = 860; continue _fun0001 }
 730:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 825; continue _fun0001 }
 744:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 825; continue _fun0001 }
 758:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 825; continue _fun0001 }
 772:
            var2 = _closure1_slot2;
            var2 = var2.EMOJI_ADDED;
            if(!(var2 !== var4)) { _fun0001_ip = 790; continue _fun0001 }
 786:
            var2 = null;
            return var2;
 790:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 35;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createEmojiAddedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 825:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 34;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createJoinRequestNotificationSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 860:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 33;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createInGameMessageNuxSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 895:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 32;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelLinkedToLobbySystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 930:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 31;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createPollResultSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 965:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 30;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGamingPromptSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1000:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 29;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createSimpleDeadchatPromptSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1035:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 28;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildReportFalseAlarmSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1070:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 27;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildReportRaidSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1105:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 26;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildAlertModeDisabledSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1140:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 26;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildAlertModeEnabledSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1175:
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
 1221:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 24;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createApplicationSubscriptionPurchaseSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1256:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 23;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageRaiseHandSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1291:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 22;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageSpeakerSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1326:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 21;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageTopicSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1361:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 20;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageEndSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1396:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 19;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageStartSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1431:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 18;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createPurchaseNotificationSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1466:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 17;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createRoleSubscriptionPurchaseSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1501:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 16;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createAutoModerationActionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1536:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 15;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createThreadStarterSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1571:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createNewThreadSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1606:
            var2 = null;
            return var2;
 1610:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 13;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createApplicationCommandSourceSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1645:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryGracePeriodFinalWarningSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1680:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryGracePeriodInitialWarningSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1715:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryRequalifiedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1750:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryDisqualifiedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1785:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 11;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildStreamSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1820:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 10;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelFollowAddSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1855:
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
 1901:
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
 1947:
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
 1993:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 8;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserPremiumGuildSubscriptionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2028:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserJoinSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2063:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelPinnedMessageSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2098:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChangeChannelIconSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2133:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChangeChannelNameSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2168:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createCallSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2203:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createRemoveRecipientSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2238:
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