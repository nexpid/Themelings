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
case 0:
            var3 = arg1;
            var1 = var3.message;
            var4 = var1.type;
            var2 = _closure1_slot2;
            var2 = var2.RECIPIENT_ADD;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var2 = var2.RECIPIENT_REMOVE;
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot2;
            var2 = var2.CALL;
            if(!(var2 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var2 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_ICON_CHANGE;
            if(!(var2 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_PINNED_MESSAGE;
            if(!(var2 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot2;
            var2 = var2.USER_JOIN;
            if(!(var2 !== var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST;
            if(!(var2 !== var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_1;
            if(!(var2 !== var4)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_2;
            if(!(var2 !== var4)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_BOOST_TIER_3;
            if(!(var2 !== var4)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_FOLLOW_ADD;
            if(!(var2 !== var4)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_STREAM;
            if(!(var2 !== var4)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_DISQUALIFIED;
            if(!(var2 !== var4)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_REQUALIFIED;
            if(!(var2 !== var4)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING;
            if(!(var2 !== var4)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING;
            if(!(var2 !== var4)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var2 = _closure1_slot2;
            var2 = var2.CHAT_INPUT_COMMAND;
            if(!(var2 !== var4)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var2 = _closure1_slot2;
            var2 = var2.CONTEXT_MENU_COMMAND;
            if(!(var2 !== var4)) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INVITE_REMINDER;
            if(!(var2 !== var4)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var2 = _closure1_slot2;
            var2 = var2.THREAD_CREATED;
            if(!(var2 !== var4)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var2 = _closure1_slot2;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var2 !== var4)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var2 = _closure1_slot2;
            var2 = var2.AUTO_MODERATION_ACTION;
            if(!(var2 !== var4)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var2 = _closure1_slot2;
            var2 = var2.ROLE_SUBSCRIPTION_PURCHASE;
            if(!(var2 !== var4)) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var2 = _closure1_slot2;
            var2 = var2.PURCHASE_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_START;
            if(!(var2 !== var4)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_END;
            if(!(var2 !== var4)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_TOPIC;
            if(!(var2 !== var4)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_SPEAKER;
            if(!(var2 !== var4)) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var2 = _closure1_slot2;
            var2 = var2.STAGE_RAISE_HAND;
            if(!(var2 !== var4)) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION;
            if(!(var2 !== var4)) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var2 = _closure1_slot2;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_ADDED;
            if(!(var2 !== var4)) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var2 = _closure1_slot2;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
            if(!(var2 !== var4)) { _fun0001_ip = 63; continue _fun0001 }
case 65:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_ENABLED;
            if(!(var2 !== var4)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_DISABLED;
            if(!(var2 !== var4)) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_REPORT_RAID;
            if(!(var2 !== var4)) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_INCIDENT_REPORT_FALSE_ALARM;
            if(!(var2 !== var4)) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_DEADCHAT_REVIVE_PROMPT;
            if(!(var2 !== var4)) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_GAMING_STATS_PROMPT;
            if(!(var2 !== var4)) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var2 = _closure1_slot2;
            var2 = var2.POLL_RESULT;
            if(!(var2 !== var4)) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_LINKED_TO_LOBBY;
            if(!(var2 !== var4)) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var2 = _closure1_slot2;
            var2 = var2.IN_GAME_MESSAGE_NUX;
            if(!(var2 !== var4)) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 84; continue _fun0001 }
case 86:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 84; continue _fun0001 }
case 87:
            var2 = _closure1_slot2;
            var2 = var2.EMOJI_ADDED;
            if(!(var2 !== var4)) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var2 = null;
            return var2;
case 88:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 35;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createEmojiAddedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 84:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 34;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createJoinRequestNotificationSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 82:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 33;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createInGameMessageNuxSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 80:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 32;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelLinkedToLobbySystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 78:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 31;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createPollResultSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 76:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 30;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGamingPromptSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 74:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 29;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createSimpleDeadchatPromptSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 72:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 28;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildReportFalseAlarmSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 70:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 27;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildReportRaidSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 68:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 26;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildAlertModeDisabledSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 66:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 26;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildAlertModeEnabledSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 63:
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
case 61:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 24;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createApplicationSubscriptionPurchaseSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 59:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 23;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageRaiseHandSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 57:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 22;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageSpeakerSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 55:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 21;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageTopicSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 53:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 20;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageEndSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 51:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 19;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageStartSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 49:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 18;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createPurchaseNotificationSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 47:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 17;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createRoleSubscriptionPurchaseSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 45:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 16;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createAutoModerationActionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 43:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 15;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createThreadStarterSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 41:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createNewThreadSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 39:
            var2 = null;
            return var2;
case 36:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 13;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createApplicationCommandSourceSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 34:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryGracePeriodFinalWarningSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 32:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryGracePeriodInitialWarningSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 30:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryRequalifiedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 28:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryDisqualifiedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 26:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 11;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildStreamSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 24:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 10;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelFollowAddSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 22:
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
case 20:
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
case 18:
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
case 16:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 8;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserPremiumGuildSubscriptionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 14:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserJoinSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 12:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelPinnedMessageSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 10:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChangeChannelIconSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 8:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChangeChannelNameSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 6:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createCallSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 4:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createRemoveRecipientSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 2:
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