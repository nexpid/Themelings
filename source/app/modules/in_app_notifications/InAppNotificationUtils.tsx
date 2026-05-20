// app/modules/in_app_notifications/InAppNotificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function hasMedia(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.hasFlag;
            var1 = _closure1_slot10;
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
                var1 = _closure1_slot9;
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
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.REACTION_MILESTONE_COUNTS;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot7 = var7;
    var7 = var4.InAppNotificationTypes;
    var _closure1_slot8 = var7;
    var7 = var4.MessageEmbedTypes;
    var _closure1_slot9 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/InAppNotificationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getNotificationTitle(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = arg3;
            var2 = arg4;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 5;
            var3 = var3[var10];
            var9 = undefined;
            var11 = var6.bind(var9)(var3);
            var8 = var11.computeChannelName;
            var18 = _closure1_slot5;
            var17 = _closure1_slot4;
            var16 = true;
            var20 = var11;
            var19 = var5;
            var7 = var20[var8](var19, var18, var17, var16, var15);
            var3 = null;
            var6 = var3 != var4;
            var12 = null;
            if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var10 = var8.bind(var9)(var6);
            var9 = var10.computeChannelName;
            var8 = _closure1_slot5;
            var6 = _closure1_slot4;
            var12 = var9.bind(var10)(var4, var8, var6);
case 10:
            var6 = arg2;
            var6 = var6.nick;
            var8 = var5.type;
            var5 = _closure1_slot7;
            var5 = var5.GROUP_DM;
            if(!(var5 !== var8)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_TEXT;
            if(!(var5 !== var8)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot7;
            var5 = var5.GUILD_ANNOUNCEMENT;
            if(!(var5 !== var8)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var5 = _closure1_slot7;
            var5 = var5.ANNOUNCEMENT_THREAD;
            if(!(var5 !== var8)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = _closure1_slot7;
            var5 = var5.PUBLIC_THREAD;
            if(!(var5 !== var8)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
            var1 = _closure1_slot7;
            var5 = var1.PRIVATE_THREAD;
            var1 = var6;
            if(!(var5 === var8)) { _fun0002_ip = 20; continue _fun0002 }
case 17:
            if(!(var3 == var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            if(!(var3 == var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var4 = global;
            var4 = var4.HermesInternal;
            var9 = var4.concat;
            var20 = '';
            var18 = ' (';
            var16 = ')';
            var19 = var6;
            var17 = var7;
            var4 = var20[var9](var19, var18, var17, var16, var15);
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var15 = var2.name;
            var5 = global;
            var5 = var5.HermesInternal;
            var11 = var5.concat;
            var20 = '';
            var18 = ' (';
            var16 = ', ';
            var14 = ')';
            var19 = var6;
            var17 = var7;
            var4 = var20[var11](var19, var18, var17, var16, var15, var14, var13);
case 25:
            _fun0002_ip = 26; continue _fun0002;
case 21:
            var5 = global;
            var5 = var5.HermesInternal;
            var11 = var5.concat;
            var20 = '';
            var18 = ' (';
            var16 = ', ';
            var14 = ')';
            var19 = var6;
            var17 = var7;
            var15 = var12;
            var4 = var20[var11](var19, var18, var17, var16, var15, var14, var13);
case 26:
            var1 = var4;
            _fun0002_ip = 20; continue _fun0002;
case 14:
            var1 = var6;
            if(!(var3 != var2)) { _fun0002_ip = 20; continue _fun0002 }
case 27:
            var15 = var2.name;
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var20 = '';
            var18 = ' (';
            var16 = ', ';
            var14 = ')';
            var19 = var6;
            var17 = var7;
            var1 = var20[var8](var19, var18, var17, var16, var15, var14, var13);
            _fun0002_ip = 20; continue _fun0002;
case 12:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var20 = '';
            var18 = ' (';
            var16 = ')';
            var19 = var6;
            var17 = var7;
            var1 = var20[var5](var19, var18, var17, var16, var15);
case 20:
            return var1;
        }
    };
    var3['getNotificationTitle'] = var4;
    var4 = function getNotificationBodyText(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = var2.notificationMessageContent;
            var1 = var2.isGdmAllReactionNotification;
            var7 = var2.messageAuthor;
            var8 = var2.emojiHook;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var3 = var4.trim;
            var4 = var3.bind(var4)();
            var3 = '';
            var2 = var3 !== var4;
case 28:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 6;
            var5 = var10[var3];
            var4 = undefined;
            var5 = var9.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.format;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            if(var1) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            if(var2) { _fun0003_ip = 32; continue _fun0003 }
case 10:
            var4 = var3.ZOzpKt;
            var1 = {};
            var1['emojiHook'] = var8;
            var1 = var5.bind(var6)(var4, var1);
            _fun0003_ip = 33; continue _fun0003;
case 32:
            var9 = var3.sHV43G;
            var4 = {};
            var4['emojiHook'] = var8;
            var1 = var5.bind(var6)(var9, var4);
case 33:
            _fun0003_ip = 34; continue _fun0003;
case 30:
            if(var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var4 = var3.FpJqb0;
            var2 = {};
            var2['emojiHook'] = var8;
            var9 = var7.nick;
            var2['username'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0003_ip = 37; continue _fun0003;
case 35:
            var4 = var3.MJPwfg;
            var3 = {};
            var3['emojiHook'] = var8;
            var7 = var7.nick;
            var3['username'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 37:
            var1 = var2;
case 34:
            return var1;
        }
    };
    var3['getNotificationBodyText'] = var4;
    var4 = function isReactionMilestoneNotification(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = _closure1_slot7;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var2)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.sumBy;
            var3 = arg1;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.count_details;
                    var4 = null;
                    var1 = var4 == var5;
                    var6 = undefined;
                    if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var6 = var5.burst;
case 40:
                    var7 = var4 != var6;
                    var1 = 0;
                    if(!var7) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var1 = var6;
case 42:
                    var6 = var4 == var5;
                    var3 = undefined;
                    if(var6) { _fun0005_ip = 44; continue _fun0005 }
case 2:
                    var3 = var5.normal;
case 44:
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var2 = var3;
case 45:
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = _closure1_slot6;
            var1 = var2.has;
            var1 = var1.bind(var2)(var3);
            return var1;
case 38:
            var1 = false;
            return var1;
        }
    };
    var3['isReactionMilestoneNotification'] = var4;
    var4 = function generateInAppNotificationId() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.v4;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['generateInAppNotificationId'] = var4;
    var4 = function useHasPreviewableMedia(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot11;
                var1 = _closure2_slot0;
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var4 = var4.bind(var5)(var2);
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var3 = _closure2_slot0;
                var5 = var3.messageSnapshots;
                var4 = var5.some;
                var3 = function(arg1) {
                    var3 = _closure1_slot11;
                    var1 = arg1;
                    var2 = var1.message;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
case 49:
                var1 = var2;
case 47:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useHasPreviewableMedia'] = var4;
    var2 = function extractGuildAndChannelAndMessageIdFromNotification(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var6 = var7.type;
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE;
            if(!(var2 !== var6)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var2 = _closure1_slot8;
            var2 = var2.REACTION;
            if(!(var2 !== var6)) { _fun0007_ip = 51; continue _fun0007 }
case 53:
            var2 = _closure1_slot8;
            var2 = var2.ALERT;
            if(!(var2 !== var6)) { _fun0007_ip = 54; continue _fun0007 }
case 46:
            var2 = _closure1_slot8;
            var2 = var2.FORUM_THREAD_CREATED;
            if(!(var2 !== var6)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var2 = _closure1_slot8;
            var2 = var2.MESSAGE_FAILED_TO_SEND;
            if(!(var2 !== var6)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var1 = _closure1_slot8;
            var5 = var1.MESSAGE_REMINDER;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(!(var5 === var6)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var8 = var7.channel;
            var5 = null;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var6 = var8.guild_id;
case 61:
            var8 = var7.channel;
            var9 = var5 == var8;
            var5 = undefined;
            if(var9) { _fun0007_ip = 33; continue _fun0007 }
case 63:
            var5 = var8.id;
case 33:
            var3 = var5;
            var4 = var6;
            var2 = undefined;
            _fun0007_ip = 59; continue _fun0007;
case 57:
            var3 = var7.channelId;
            var4 = undefined;
            var2 = undefined;
            _fun0007_ip = 59; continue _fun0007;
case 55:
            var8 = var7.thread;
            var5 = null;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0007_ip = 19; continue _fun0007 }
case 64:
            var6 = var8.guild_id;
case 19:
            var8 = var7.thread;
            var9 = var5 == var8;
            var5 = undefined;
            if(var9) { _fun0007_ip = 17; continue _fun0007 }
case 65:
            var5 = var8.id;
case 17:
            var3 = var5;
            var4 = var6;
            var2 = undefined;
            _fun0007_ip = 59; continue _fun0007;
case 54:
            var8 = var7.guild;
            var5 = null;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var6 = var8.id;
case 66:
            if(!(var5 == var6)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var9 = var7.channel;
            var10 = var5 == var9;
            var8 = undefined;
            if(var10) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var8 = var9.guild_id;
case 70:
            var6 = var8;
case 68:
            var8 = var7.channel;
            var9 = var5 == var8;
            var5 = undefined;
            if(var9) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var5 = var8.id;
case 72:
            var3 = var5;
            var4 = var6;
            var2 = undefined;
            _fun0007_ip = 59; continue _fun0007;
case 51:
            var5 = var7.guild;
            var8 = null;
            var9 = var8 == var5;
            var6 = undefined;
            if(var9) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var6 = var5.id;
case 74:
            if(!(var8 == var6)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var9 = var7.channel;
            var10 = var8 == var9;
            var5 = undefined;
            if(var10) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var5 = var9.guild_id;
case 78:
            var6 = var5;
case 76:
            var9 = var7.channel;
            var10 = var8 == var9;
            var5 = undefined;
            if(var10) { _fun0007_ip = 80; continue _fun0007 }
case 81:
            var5 = var9.id;
case 80:
            var7 = var7.message;
            var8 = var8 == var7;
            var1 = undefined;
            if(var8) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var1 = var7.id;
case 82:
            var2 = var1;
            var4 = var6;
            var3 = var5;
case 59:
            var1 = {};
            var1['guildId'] = var4;
            var1['channelId'] = var3;
            var1['messageId'] = var2;
            return var1;
        }
    };
    var3['extractGuildAndChannelAndMessageIdFromNotification'] = var2;
    return var1;
})();