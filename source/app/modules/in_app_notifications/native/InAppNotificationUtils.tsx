// app/modules/in_app_notifications/native/InAppNotificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function hasMedia(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.hasFlag;
            var1 = _closure1_slot9;
            var1 = var1.IS_VOICE_MESSAGE;
            var1 = var3.bind(var2)(var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.attachments;
            var4 = var3.length;
            var3 = 0;
            var1 = var4 > var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.embeds;
            var4 = var3.length;
            var3 = 0;
            var3 = var4 > var3;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var2.embeds;
            var5 = var6.every;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot8;
                var1 = var1.GIFV;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var5.bind(var6)(var4);
case 6:
            var1 = var3;
case 4:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var2.stickerItems;
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var4 = function extractMetadataFromNotification(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var7 = var9.type;
            var2 = _closure1_slot7;
            var2 = var2.MESSAGE;
            if(!(var2 !== var7)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = _closure1_slot7;
            var2 = var2.REACTION;
            if(!(var2 !== var7)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var2 = _closure1_slot7;
            var2 = var2.ALERT;
            if(!(var2 !== var7)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = _closure1_slot7;
            var2 = var2.FORUM_THREAD_CREATED;
            if(!(var2 !== var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = _closure1_slot7;
            var2 = var2.MESSAGE_FAILED_TO_SEND;
            if(!(var2 !== var7)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = _closure1_slot7;
            var1 = var1.MESSAGE_REMINDER;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(!(var1 === var7)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var7 = var9.channel;
            var1 = null;
            var10 = var1 == var7;
            var8 = undefined;
            if(var10) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var8 = var7.guild_id;
case 21:
            var10 = var9.channel;
            var11 = var1 == var10;
            var7 = undefined;
            if(var11) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var7 = var10.id;
case 23:
            var10 = var9.channel;
            var11 = var1 == var10;
            var1 = undefined;
            if(var11) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = var10.type;
case 25:
            var2 = var1;
            var5 = var8;
            var4 = var7;
            var3 = undefined;
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var4 = var9.channelId;
            var5 = undefined;
            var3 = undefined;
            var2 = undefined;
            _fun0002_ip = 19; continue _fun0002;
case 15:
            var8 = var9.thread;
            var6 = null;
            var10 = var6 == var8;
            var7 = undefined;
            if(var10) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var7 = var8.guild_id;
case 27:
            var8 = var9.thread;
            var10 = var6 == var8;
            var6 = undefined;
            if(var10) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var6 = var8.id;
case 29:
            var4 = var6;
            var5 = var7;
            var3 = undefined;
            var2 = undefined;
            _fun0002_ip = 19; continue _fun0002;
case 13:
            var7 = var9.guild;
            var1 = null;
            var10 = var1 == var7;
            var8 = undefined;
            if(var10) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var8 = var7.id;
case 31:
            if(!(var1 == var8)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var10 = var9.channel;
            var11 = var1 == var10;
            var7 = undefined;
            if(var11) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var7 = var10.guild_id;
case 35:
            var8 = var7;
case 33:
            var10 = var9.channel;
            var11 = var1 == var10;
            var7 = undefined;
            if(var11) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var7 = var10.id;
case 37:
            var10 = var9.channel;
            var11 = var1 == var10;
            var1 = undefined;
            if(var11) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var1 = var10.type;
case 39:
            var2 = var1;
            var5 = var8;
            var4 = var7;
            var3 = undefined;
            _fun0002_ip = 19; continue _fun0002;
case 10:
            var6 = var9.guild;
            var10 = null;
            var7 = var10 == var6;
            var8 = undefined;
            if(var7) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var8 = var6.id;
case 41:
            if(!(var10 == var8)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var7 = var9.channel;
            var11 = var10 == var7;
            var6 = undefined;
            if(var11) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var6 = var7.guild_id;
case 45:
            var8 = var6;
case 43:
            var6 = var9.channel;
            var11 = var10 == var6;
            var7 = undefined;
            if(var11) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var7 = var6.id;
case 47:
            var11 = var9.message;
            var12 = var10 == var11;
            var6 = undefined;
            if(var12) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var6 = var11.id;
case 49:
            var9 = var9.channel;
            var10 = var10 == var9;
            var1 = undefined;
            if(var10) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var1 = var9.type;
case 51:
            var2 = var1;
            var5 = var8;
            var4 = var7;
            var3 = var6;
case 19:
            var1 = {};
            var1['guildId'] = var5;
            var1['channelId'] = var4;
            var1['messageId'] = var3;
            var1['channelType'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.REACTION_MILESTONE_COUNTS;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot5 = var8;
    var8 = var5.ChannelTypes;
    var _closure1_slot6 = var8;
    var8 = var5.InAppNotificationTypes;
    var _closure1_slot7 = var8;
    var8 = var5.MessageEmbedTypes;
    var _closure1_slot8 = var8;
    var5 = var5.MessageFlags;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/in_app_notifications/native/InAppNotificationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isReactionMilestoneNotification(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var2 = _closure1_slot6;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var2)) { _fun0003_ip = 53; continue _fun0003 }
case 55:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.sumBy;
            var3 = arg1;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.count_details;
                    var4 = null;
                    var1 = var4 == var5;
                    var6 = undefined;
                    if(var1) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                    var6 = var5.burst;
case 55:
                    var7 = var4 != var6;
                    var1 = 0;
                    if(!var7) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                    var1 = var6;
case 57:
                    var6 = var4 == var5;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 59; continue _fun0004 }
case 2:
                    var3 = var5.normal;
case 59:
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0004_ip = 60; continue _fun0004 }
case 14:
                    var2 = var3;
case 60:
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = _closure1_slot4;
            var1 = var2.has;
            var1 = var1.bind(var2)(var3);
            return var1;
case 53:
            var1 = false;
            return var1;
        }
    };
    var3['isReactionMilestoneNotification'] = var5;
    var5 = function generateInAppNotificationId() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.v4;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['generateInAppNotificationId'] = var5;
    var5 = function useHasPreviewableMedia(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot10;
                var1 = _closure2_slot0;
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var4 = var4.bind(var5)(var2);
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                var3 = _closure2_slot0;
                var5 = var3.messageSnapshots;
                var4 = var5.some;
                var3 = function(arg1) {
                    var3 = _closure1_slot10;
                    var1 = arg1;
                    var2 = var1.message;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
case 63:
                var1 = var2;
case 61:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useHasPreviewableMedia'] = var5;
    var3['extractMetadataFromNotification'] = var4;
    var4 = function trackInAppNotificationAccessoryClicked(arg1, arg2) {
        var9 = arg1;
        var3 = _closure1_slot11;
        var1 = undefined;
        var3 = var3.bind(var1)(var9);
        var8 = var3.guildId;
        var7 = var3.channelId;
        var6 = var3.messageId;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot5;
        var3 = var2.IN_APP_NOTIFICATION_ACCESSORY_CLICKED;
        var2 = {};
        var10 = var9.type;
        var2['type'] = var10;
        var9 = var9.inAppNotificationId;
        var2['in_app_notification_id'] = var9;
        var2['notif_guild_id'] = var8;
        var2['notif_channel_id'] = var7;
        var2['message_id'] = var6;
        var6 = arg2;
        var2['accessory'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackInAppNotificationAccessoryClicked'] = var4;
    var2 = function trackDismissed(arg1) {
        var1 = arg1;
        var10 = var1.guildId;
        var9 = var1.channelId;
        var11 = var1.type;
        var8 = var1.dismissReason;
        var7 = var1.inAppNotificationId;
        var6 = var1.messageId;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot5;
        var3 = var2.IN_APP_NOTIFICATION_DISMISSED;
        var2 = {};
        var2['type'] = var11;
        var2['guild_id'] = var10;
        var2['channel_id'] = var9;
        var2['dismiss_reason'] = var8;
        var2['in_app_notification_id'] = var7;
        var2['message_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackDismissed'] = var2;
    return var1;
})();