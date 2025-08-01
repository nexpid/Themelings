// app/modules/messages/native/renderer/system_messages/SystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MessageTypes;
    var _closure1_slot3 = var7;
    var4 = var4.BoostedGuildTiers;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/SystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.row;
            var1 = var5.message;
            var3 = var1.type;
            var2 = _closure1_slot3;
            var2 = var2.RECIPIENT_ADD;
            if(!(var2 !== var3)) { _fun0001_ip = 2312; continue _fun0001 }
 39:
            var2 = _closure1_slot3;
            var2 = var2.RECIPIENT_REMOVE;
            if(!(var2 !== var3)) { _fun0001_ip = 2271; continue _fun0001 }
 56:
            var2 = _closure1_slot3;
            var2 = var2.CALL;
            if(!(var2 !== var3)) { _fun0001_ip = 2230; continue _fun0001 }
 73:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var2 !== var3)) { _fun0001_ip = 2189; continue _fun0001 }
 90:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_ICON_CHANGE;
            if(!(var2 !== var3)) { _fun0001_ip = 2148; continue _fun0001 }
 107:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_PINNED_MESSAGE;
            if(!(var2 !== var3)) { _fun0001_ip = 2107; continue _fun0001 }
 124:
            var2 = _closure1_slot3;
            var2 = var2.USER_JOIN;
            if(!(var2 !== var3)) { _fun0001_ip = 2066; continue _fun0001 }
 141:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_BOOST;
            if(!(var2 !== var3)) { _fun0001_ip = 2025; continue _fun0001 }
 158:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_BOOST_TIER_1;
            if(!(var2 !== var3)) { _fun0001_ip = 1969; continue _fun0001 }
 175:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_BOOST_TIER_2;
            if(!(var2 !== var3)) { _fun0001_ip = 1913; continue _fun0001 }
 192:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_BOOST_TIER_3;
            if(!(var2 !== var3)) { _fun0001_ip = 1857; continue _fun0001 }
 209:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_FOLLOW_ADD;
            if(!(var2 !== var3)) { _fun0001_ip = 1816; continue _fun0001 }
 226:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_STREAM;
            if(!(var2 !== var3)) { _fun0001_ip = 1775; continue _fun0001 }
 243:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DISCOVERY_DISQUALIFIED;
            if(!(var2 !== var3)) { _fun0001_ip = 1720; continue _fun0001 }
 260:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DISCOVERY_REQUALIFIED;
            if(!(var2 !== var3)) { _fun0001_ip = 1720; continue _fun0001 }
 277:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING;
            if(!(var2 !== var3)) { _fun0001_ip = 1720; continue _fun0001 }
 294:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING;
            if(!(var2 !== var3)) { _fun0001_ip = 1720; continue _fun0001 }
 311:
            var2 = _closure1_slot3;
            var2 = var2.CHAT_INPUT_COMMAND;
            if(!(var2 !== var3)) { _fun0001_ip = 1679; continue _fun0001 }
 328:
            var2 = _closure1_slot3;
            var2 = var2.CONTEXT_MENU_COMMAND;
            if(!(var2 !== var3)) { _fun0001_ip = 1679; continue _fun0001 }
 345:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INVITE_REMINDER;
            if(!(var2 !== var3)) { _fun0001_ip = 1675; continue _fun0001 }
 362:
            var2 = _closure1_slot3;
            var2 = var2.THREAD_CREATED;
            if(!(var2 !== var3)) { _fun0001_ip = 1634; continue _fun0001 }
 379:
            var2 = _closure1_slot3;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var2 !== var3)) { _fun0001_ip = 1593; continue _fun0001 }
 396:
            var2 = _closure1_slot3;
            var2 = var2.AUTO_MODERATION_ACTION;
            if(!(var2 !== var3)) { _fun0001_ip = 1552; continue _fun0001 }
 413:
            var2 = _closure1_slot3;
            var2 = var2.ROLE_SUBSCRIPTION_PURCHASE;
            if(!(var2 !== var3)) { _fun0001_ip = 1511; continue _fun0001 }
 430:
            var2 = _closure1_slot3;
            var2 = var2.PURCHASE_NOTIFICATION;
            if(!(var2 !== var3)) { _fun0001_ip = 1470; continue _fun0001 }
 447:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_START;
            if(!(var2 !== var3)) { _fun0001_ip = 1429; continue _fun0001 }
 464:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_END;
            if(!(var2 !== var3)) { _fun0001_ip = 1388; continue _fun0001 }
 481:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_TOPIC;
            if(!(var2 !== var3)) { _fun0001_ip = 1347; continue _fun0001 }
 498:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_SPEAKER;
            if(!(var2 !== var3)) { _fun0001_ip = 1306; continue _fun0001 }
 515:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_RAISE_HAND;
            if(!(var2 !== var3)) { _fun0001_ip = 1265; continue _fun0001 }
 532:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION;
            if(!(var2 !== var3)) { _fun0001_ip = 1224; continue _fun0001 }
 549:
            var2 = _closure1_slot3;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_ADDED;
            if(!(var2 !== var3)) { _fun0001_ip = 1169; continue _fun0001 }
 566:
            var2 = _closure1_slot3;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
            if(!(var2 !== var3)) { _fun0001_ip = 1169; continue _fun0001 }
 583:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_ENABLED;
            if(!(var2 !== var3)) { _fun0001_ip = 1122; continue _fun0001 }
 600:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_DISABLED;
            if(!(var2 !== var3)) { _fun0001_ip = 1075; continue _fun0001 }
 617:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INCIDENT_REPORT_RAID;
            if(!(var2 !== var3)) { _fun0001_ip = 1034; continue _fun0001 }
 634:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INCIDENT_REPORT_FALSE_ALARM;
            if(!(var2 !== var3)) { _fun0001_ip = 993; continue _fun0001 }
 651:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DEADCHAT_REVIVE_PROMPT;
            if(!(var2 !== var3)) { _fun0001_ip = 952; continue _fun0001 }
 668:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_GAMING_STATS_PROMPT;
            if(!(var2 !== var3)) { _fun0001_ip = 911; continue _fun0001 }
 685:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
            if(!(var2 !== var3)) { _fun0001_ip = 870; continue _fun0001 }
 702:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
            if(!(var2 !== var3)) { _fun0001_ip = 870; continue _fun0001 }
 719:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
            if(!(var2 !== var3)) { _fun0001_ip = 870; continue _fun0001 }
 736:
            var2 = _closure1_slot3;
            var2 = var2.EMOJI_ADDED;
            if(!(var2 !== var3)) { _fun0001_ip = 829; continue _fun0001 }
 750:
            var2 = _closure1_slot3;
            var2 = var2.CHAT_WALLPAPER_SET;
            if(!(var2 !== var3)) { _fun0001_ip = 782; continue _fun0001 }
 764:
            var2 = _closure1_slot3;
            var2 = var2.CHAT_WALLPAPER_REMOVED;
            if(!(var2 !== var3)) { _fun0001_ip = 782; continue _fun0001 }
 778:
            var2 = null;
            return var2;
 782:
            var6 = _closure1_slot5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 38;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.ChatWallpaperNotAvailableOnMobileSystemMessage;
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 829:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 37;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 870:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 36;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 911:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 32;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 952:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 31;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 993:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 30;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1034:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 29;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1075:
            var6 = _closure1_slot5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 28;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.GuildAlertModeDisabledSystemMessage;
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1122:
            var6 = _closure1_slot5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 28;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.GuildAlertModeEnabledSystemMessage;
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1169:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 27;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var7 = var5.message;
            var7 = var7.type;
            var2['type'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1224:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 26;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1265:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 25;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1306:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 24;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1347:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 23;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1388:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 22;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1429:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1470:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1511:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1552:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1593:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1634:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1675:
            var2 = null;
            return var2;
 1679:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1720:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var7 = var5.message;
            var7 = var7.type;
            var2['type'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1775:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1816:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1857:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var7 = _closure1_slot4;
            var7 = var7.TIER_3;
            var2['tier'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1913:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var7 = _closure1_slot4;
            var7 = var7.TIER_2;
            var2['tier'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1969:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var7 = _closure1_slot4;
            var7 = var7.TIER_1;
            var2['tier'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 2025:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 2066:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 2107:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 2148:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 2189:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 2230:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 2271:
            var6 = _closure1_slot5;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['row'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 2312:
            var4 = _closure1_slot5;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['row'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createSystemMessageContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = var3.message;
            var4 = var1.type;
            var2 = _closure1_slot3;
            var2 = var2.RECIPIENT_ADD;
            if(!(var2 !== var4)) { _fun0002_ip = 2307; continue _fun0002 }
 33:
            var2 = _closure1_slot3;
            var2 = var2.RECIPIENT_REMOVE;
            if(!(var2 !== var4)) { _fun0002_ip = 2272; continue _fun0002 }
 50:
            var2 = _closure1_slot3;
            var2 = var2.CALL;
            if(!(var2 !== var4)) { _fun0002_ip = 2237; continue _fun0002 }
 67:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var2 !== var4)) { _fun0002_ip = 2202; continue _fun0002 }
 84:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_ICON_CHANGE;
            if(!(var2 !== var4)) { _fun0002_ip = 2167; continue _fun0002 }
 101:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_PINNED_MESSAGE;
            if(!(var2 !== var4)) { _fun0002_ip = 2132; continue _fun0002 }
 118:
            var2 = _closure1_slot3;
            var2 = var2.USER_JOIN;
            if(!(var2 !== var4)) { _fun0002_ip = 2097; continue _fun0002 }
 135:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_BOOST;
            if(!(var2 !== var4)) { _fun0002_ip = 2062; continue _fun0002 }
 152:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_BOOST_TIER_1;
            if(!(var2 !== var4)) { _fun0002_ip = 2016; continue _fun0002 }
 169:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_BOOST_TIER_2;
            if(!(var2 !== var4)) { _fun0002_ip = 1970; continue _fun0002 }
 186:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_BOOST_TIER_3;
            if(!(var2 !== var4)) { _fun0002_ip = 1924; continue _fun0002 }
 203:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_FOLLOW_ADD;
            if(!(var2 !== var4)) { _fun0002_ip = 1889; continue _fun0002 }
 220:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_STREAM;
            if(!(var2 !== var4)) { _fun0002_ip = 1854; continue _fun0002 }
 237:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DISCOVERY_DISQUALIFIED;
            if(!(var2 !== var4)) { _fun0002_ip = 1819; continue _fun0002 }
 254:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DISCOVERY_REQUALIFIED;
            if(!(var2 !== var4)) { _fun0002_ip = 1784; continue _fun0002 }
 271:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING;
            if(!(var2 !== var4)) { _fun0002_ip = 1749; continue _fun0002 }
 288:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING;
            if(!(var2 !== var4)) { _fun0002_ip = 1714; continue _fun0002 }
 305:
            var2 = _closure1_slot3;
            var2 = var2.CHAT_INPUT_COMMAND;
            if(!(var2 !== var4)) { _fun0002_ip = 1679; continue _fun0002 }
 322:
            var2 = _closure1_slot3;
            var2 = var2.CONTEXT_MENU_COMMAND;
            if(!(var2 !== var4)) { _fun0002_ip = 1679; continue _fun0002 }
 339:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INVITE_REMINDER;
            if(!(var2 !== var4)) { _fun0002_ip = 1675; continue _fun0002 }
 356:
            var2 = _closure1_slot3;
            var2 = var2.THREAD_CREATED;
            if(!(var2 !== var4)) { _fun0002_ip = 1640; continue _fun0002 }
 373:
            var2 = _closure1_slot3;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var2 !== var4)) { _fun0002_ip = 1605; continue _fun0002 }
 390:
            var2 = _closure1_slot3;
            var2 = var2.AUTO_MODERATION_ACTION;
            if(!(var2 !== var4)) { _fun0002_ip = 1570; continue _fun0002 }
 407:
            var2 = _closure1_slot3;
            var2 = var2.ROLE_SUBSCRIPTION_PURCHASE;
            if(!(var2 !== var4)) { _fun0002_ip = 1535; continue _fun0002 }
 424:
            var2 = _closure1_slot3;
            var2 = var2.PURCHASE_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0002_ip = 1500; continue _fun0002 }
 441:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_START;
            if(!(var2 !== var4)) { _fun0002_ip = 1465; continue _fun0002 }
 458:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_END;
            if(!(var2 !== var4)) { _fun0002_ip = 1430; continue _fun0002 }
 475:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_TOPIC;
            if(!(var2 !== var4)) { _fun0002_ip = 1395; continue _fun0002 }
 492:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_SPEAKER;
            if(!(var2 !== var4)) { _fun0002_ip = 1360; continue _fun0002 }
 509:
            var2 = _closure1_slot3;
            var2 = var2.STAGE_RAISE_HAND;
            if(!(var2 !== var4)) { _fun0002_ip = 1325; continue _fun0002 }
 526:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION;
            if(!(var2 !== var4)) { _fun0002_ip = 1290; continue _fun0002 }
 543:
            var2 = _closure1_slot3;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_ADDED;
            if(!(var2 !== var4)) { _fun0002_ip = 1244; continue _fun0002 }
 560:
            var2 = _closure1_slot3;
            var2 = var2.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
            if(!(var2 !== var4)) { _fun0002_ip = 1244; continue _fun0002 }
 577:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_ENABLED;
            if(!(var2 !== var4)) { _fun0002_ip = 1209; continue _fun0002 }
 594:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INCIDENT_ALERT_MODE_DISABLED;
            if(!(var2 !== var4)) { _fun0002_ip = 1174; continue _fun0002 }
 611:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INCIDENT_REPORT_RAID;
            if(!(var2 !== var4)) { _fun0002_ip = 1139; continue _fun0002 }
 628:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_INCIDENT_REPORT_FALSE_ALARM;
            if(!(var2 !== var4)) { _fun0002_ip = 1104; continue _fun0002 }
 645:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_DEADCHAT_REVIVE_PROMPT;
            if(!(var2 !== var4)) { _fun0002_ip = 1069; continue _fun0002 }
 662:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_GAMING_STATS_PROMPT;
            if(!(var2 !== var4)) { _fun0002_ip = 1034; continue _fun0002 }
 679:
            var2 = _closure1_slot3;
            var2 = var2.POLL_RESULT;
            if(!(var2 !== var4)) { _fun0002_ip = 999; continue _fun0002 }
 696:
            var2 = _closure1_slot3;
            var2 = var2.CHANNEL_LINKED_TO_LOBBY;
            if(!(var2 !== var4)) { _fun0002_ip = 964; continue _fun0002 }
 713:
            var2 = _closure1_slot3;
            var2 = var2.IN_GAME_MESSAGE_NUX;
            if(!(var2 !== var4)) { _fun0002_ip = 929; continue _fun0002 }
 730:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0002_ip = 894; continue _fun0002 }
 747:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0002_ip = 894; continue _fun0002 }
 764:
            var2 = _closure1_slot3;
            var2 = var2.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
            if(!(var2 !== var4)) { _fun0002_ip = 894; continue _fun0002 }
 778:
            var2 = _closure1_slot3;
            var2 = var2.EMOJI_ADDED;
            if(!(var2 !== var4)) { _fun0002_ip = 859; continue _fun0002 }
 792:
            var2 = _closure1_slot3;
            var2 = var2.CHAT_WALLPAPER_SET;
            if(!(var2 !== var4)) { _fun0002_ip = 824; continue _fun0002 }
 806:
            var2 = _closure1_slot3;
            var2 = var2.CHAT_WALLPAPER_REMOVED;
            if(!(var2 !== var4)) { _fun0002_ip = 824; continue _fun0002 }
 820:
            var2 = null;
            return var2;
 824:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 38;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChatWallpaperNotAvailableOnMobileSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 859:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 37;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createEmojiAddedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 894:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 36;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createJoinRequestNotificationSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 929:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 35;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createInGameMessageNuxSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 964:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 34;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelLinkedToLobbySystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 999:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 33;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createPollResultSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1034:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 32;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGamingPromptSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1069:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 31;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createSimpleDeadchatPromptSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1104:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 30;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildReportFalseAlarmSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1139:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 29;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildReportRaidSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1174:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 28;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildAlertModeDisabledSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1209:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 28;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildAlertModeEnabledSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1244:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 27;
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
            var4 = _closure1_slot2;
            var2 = 26;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createApplicationSubscriptionPurchaseSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1325:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 25;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageRaiseHandSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1360:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 24;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageSpeakerSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1395:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 23;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageTopicSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1430:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 22;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageEndSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1465:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createStageStartSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1500:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createPurchaseNotificationSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1535:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 19;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createRoleSubscriptionPurchaseSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1570:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 18;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createAutoModerationActionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1605:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createThreadStarterSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1640:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
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
            var4 = _closure1_slot2;
            var2 = 15;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createApplicationCommandSourceSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1714:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryGracePeriodFinalWarningSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1749:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryGracePeriodInitialWarningSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1784:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryRequalifiedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1819:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildDiscoveryDisqualifiedSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1854:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createGuildStreamSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1889:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelFollowAddSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 1924:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
            var2 = _closure1_slot4;
            var2 = var2.TIER_3;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1970:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
            var2 = _closure1_slot4;
            var2 = var2.TIER_2;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2016:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
            var2 = _closure1_slot4;
            var2 = var2.TIER_1;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2062:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserPremiumGuildSubscriptionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2097:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserJoinSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2132:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChannelPinnedMessageSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2167:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChangeChannelIconSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2202:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createChangeChannelNameSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2237:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createCallSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2272:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createRemoveRecipientSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 2307:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
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