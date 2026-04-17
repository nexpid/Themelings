// app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function hasMultipleChannelsOnStack() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.getRootNavigationRef;
            var2 = var1.bind(var2)();
            var7 = null;
            if(!(var7 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.isReady;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2.getRootState;
            var1 = var1.bind(var2)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 10;
            var2 = var2[var6];
            var4 = var3.bind(var8)(var2);
            var3 = var4.coerceMainRoute;
            var2 = var1.routes;
            var1 = 0;
            var2 = var2[var1];
            var2 = var3.bind(var4)(var2);
            var4 = var7 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var2.state;
case 5:
            if(!(var7 != var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var2.state;
            var5 = var3.routes;
            var2 = var2.state;
            var4 = var2.index;
            var10 = var1 <= var4;
            var3 = 2;
            var2 = 0;
            var1 = 0;
            if(!var10) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var6];
            var12 = var11.bind(var8)(var10);
            var11 = var12.coerceChannelRoute;
            var10 = var5[var1];
            var11 = var11.bind(var12)(var10);
            var10 = var2;
            if(!(var7 != var11)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var2 + 1;
            if(!(!(var10 >= var3))) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var1 = var1 + 1;
            var2 = var10;
            if(var1 <= var4) { _fun0001_ip = 10; continue _fun0001 }
case 9:
            var1 = false;
            return var1;
case 13:
            var1 = true;
            return var1;
case 7:
            var1 = false;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function getRenderProps(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.notification;
            var _closure2_slot0 = var8;
            var15 = var1.isExpanded;
            var2 = var1.setExpanded;
            var _closure2_slot1 = var2;
            var16 = var1.reaction;
            var4 = var1.onReactionPress;
            var _closure2_slot2 = var4;
            var6 = undefined;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var _closure2_slot9 = var6;
            var _closure2_slot10 = var6;
            var _closure2_slot11 = var6;
            var _closure2_slot12 = var6;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var2 = var8.type;
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE;
            if(!(var1 !== var2)) { _fun0002_ip = 14; continue _fun0002 }
case 6:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_FAILED_TO_SEND;
            if(!(var1 !== var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = _closure1_slot8;
            var1 = var1.FORUM_THREAD_CREATED;
            if(!(var1 !== var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = _closure1_slot8;
            var1 = var1.BUG_REPORTER;
            if(!(var1 !== var2)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = _closure1_slot8;
            var1 = var1.ALERT;
            if(!(var1 !== var2)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = _closure1_slot8;
            var1 = var1.REACTION;
            if(!(var1 !== var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var1 = _closure1_slot8;
            var1 = var1.MESSAGE_REMINDER;
            if(!(var1 !== var2)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = {};
            var2 = null;
            var1['content'] = var2;
            return var1;
case 25:
            var1 = var8.channel;
            var5 = var1.guild_id;
            _closure2_slot13 = var5;
            var2 = var1.id;
            _closure2_slot14 = var2;
            var1 = {};
            var9 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 12;
                var6 = var5[var3];
                var1 = undefined;
                var7 = var4.bind(var1)(var6);
                var6 = var7.popAll;
                var6 = var6.bind(var7)();
                var3 = var5[var3];
                var10 = var4.bind(var1)(var3);
                var9 = var10.pushLazy;
                var6 = _closure1_slot0;
                var3 = 16;
                var3 = var5[var3];
                var7 = var6.bind(var1)(var3);
                var3 = 29;
                var6 = var5[var3];
                var3 = var5.paths;
                var14 = var7.bind(var1)(var6, var3);
                var7 = {};
                var3 = 'modal';
                var7['presentation'] = var3;
                var13 = {};
                var12 = 'for-later-modal';
                var15 = var10;
                var11 = var7;
                var3 = var15[var9](var14, var13, var12, var11, var10);
                var3 = _closure2_slot0;
                var7 = var3.savedMessage;
                var6 = var3.author;
                var3 = 30;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.FOR_LATER_REMINDER_NOTIFICATION_CLICKED;
                var2 = {};
                var9 = _closure2_slot13;
                var2['guild_id'] = var9;
                var8 = _closure2_slot14;
                var2['channel_id'] = var8;
                var7 = var7.saveData;
                var7 = var7.messageId;
                var2['message_id'] = var7;
                var6 = var6.id;
                var2['message_author_id'] = var6;
                var6 = 'IN_APP';
                var2['notification_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onPress'] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 31;
            var9 = var12[var9];
            var10 = var10.bind(var6)(var9);
            var9 = {};
            var9['notification'] = var8;
            var9 = var11.bind(var6)(var10, var9);
            var1['content'] = var9;
            var1['guildId'] = var5;
            var1['channelId'] = var2;
            return var1;
case 23:
            var5 = var8.channel;
            _closure2_slot9 = var5;
            var9 = var8.guild;
            var2 = var8.message;
            _closure2_slot10 = var2;
            var1 = null;
            var11 = var1 == var9;
            var10 = undefined;
            if(var11) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var10 = var9.id;
case 27:
            if(!(var1 == var10)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var10 = var5.guild_id;
case 29:
            _closure2_slot11 = var10;
            var9 = var5.id;
            _closure2_slot12 = var9;
            var1 = {};
            var11 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot31;
                    var4 = {};
                    var1 = _closure2_slot0;
                    var6 = var1.type;
                    var4['type'] = var6;
                    var6 = 'notification_clicked';
                    var4['dismissReason'] = var6;
                    var6 = _closure2_slot11;
                    var4['guildId'] = var6;
                    var6 = _closure2_slot12;
                    var4['channelId'] = var6;
                    var6 = _closure2_slot10;
                    var6 = var6.id;
                    var4['messageId'] = var6;
                    var1 = var1.inAppNotificationId;
                    var4['inAppNotificationId'] = var1;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 12;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var4 = _closure1_slot29;
                    var4 = var4.bind(var1)();
                    var9 = true;
                    if(var4) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var6 = var4.InAppNotificationNavigationExperiment;
                    var5 = var6.getConfig;
                    var4 = {};
                    var7 = 'in-app-notification';
                    var4['location'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.enableStackNavigation;
                    var9 = !var4;
case 31:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 14;
                    var5 = var4[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.transitionToMessage;
                    var5 = _closure2_slot9;
                    var6 = var5.id;
                    var3 = _closure2_slot10;
                    var5 = var3.id;
                    var3 = {};
                    var3['navigationReplace'] = var9;
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var3 = _closure1_slot1;
                    var2 = 23;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.clearNotification;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var1['onPress'] = var11;
            var11 = function onSettingsPress() {
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 12;
                var3 = var1[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = var4.pushLazy;
                var5 = _closure1_slot0;
                var2 = 16;
                var2 = var1[var2];
                var5 = var5.bind(var6)(var2);
                var2 = 15;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var5.bind(var6)(var2, var1);
                var1 = {};
                var5 = _closure2_slot12;
                var1['channelId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['onSettingsPress'] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 28;
            var11 = var14[var11];
            var12 = var12.bind(var6)(var11);
            var11 = {};
            var11['notification'] = var8;
            var11 = var13.bind(var6)(var12, var11);
            var1['content'] = var11;
            var1['guildId'] = var10;
            var1['channelId'] = var9;
            var5 = var5.type;
            var1['channelType'] = var5;
            var2 = var2.id;
            var1['messageId'] = var2;
            return var1;
case 21:
            var2 = var8.channel;
            _closure2_slot8 = var2;
            var1 = {};
            var10 = _closure1_slot11;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 27;
            var5 = var11[var5];
            var9 = var9.bind(var6)(var5);
            var5 = {};
            var5['notification'] = var8;
            var5 = var10.bind(var6)(var9, var5);
            var1['content'] = var5;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.transitionToChannel;
                var2 = _closure2_slot8;
                var3 = var2.id;
                var2 = {};
                var6 = true;
                var2['navigationReplace'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = var2.guild_id;
            var1['guildId'] = var5;
            var2 = var2.id;
            var1['channelId'] = var2;
            return var1;
case 19:
            var1 = {};
            var9 = _closure1_slot11;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 26;
            var2 = var10[var2];
            var2 = var5.bind(var6)(var2);
            var5 = var2.BugReporterNotification;
            var2 = {};
            var2['notification'] = var8;
            var2 = var9.bind(var6)(var5, var2);
            var1['content'] = var2;
            var2 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getField;
                    var1 = 'isReportOpen';
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0004_ip = 2; continue _fun0004 }
case 33:
                    var3 = _closure1_slot31;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var4 = var5.type;
                    var1['type'] = var4;
                    var4 = 'notification_clicked';
                    var1['dismissReason'] = var4;
                    var4 = var5.inAppNotificationId;
                    var1['inAppNotificationId'] = var4;
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 12;
                    var6 = var1[var3];
                    var8 = var4.bind(var7)(var6);
                    var6 = var8.popAll;
                    var6 = var6.bind(var8)();
                    var6 = 23;
                    var6 = var1[var6];
                    var8 = var4.bind(var7)(var6);
                    var6 = var8.clearNotification;
                    var6 = var6.bind(var8)();
                    var9 = _closure1_slot6;
                    var8 = var9.setState;
                    var6 = {};
                    var10 = true;
                    var6['isReportOpen'] = var10;
                    var6 = var8.bind(var9)(var6);
                    var3 = var1[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.pushLazy;
                    var6 = _closure1_slot0;
                    var2 = 16;
                    var2 = var1[var2];
                    var6 = var6.bind(var7)(var2);
                    var2 = 24;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var6.bind(var7)(var2, var1);
                    var1 = {};
                    var6 = var5.imageUri;
                    var1['screenshotUri'] = var6;
                    var5 = var5.image;
                    var1['screenshot'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var2;
            var2 = function onSettingsPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot9;
                var5 = var5.OVERVIEW;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onSettingsPress'] = var2;
            return var1;
case 17:
            var2 = var8.thread;
            _closure2_slot7 = var2;
            var1 = {};
            var10 = _closure1_slot11;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 22;
            var5 = var11[var5];
            var9 = var9.bind(var6)(var5);
            var5 = {};
            var5['notification'] = var8;
            var5 = var10.bind(var6)(var9, var5);
            var1['content'] = var5;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.transitionToThread;
                var2 = _closure2_slot7;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = function onSettingsPress() {
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 12;
                var3 = var1[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = var4.pushLazy;
                var5 = _closure1_slot0;
                var2 = 16;
                var2 = var1[var2];
                var5 = var5.bind(var6)(var2);
                var2 = 15;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var5.bind(var6)(var2, var1);
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.parentChannel;
                var5 = var5.id;
                var1['channelId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['onSettingsPress'] = var5;
            var5 = var2.guild_id;
            var1['guildId'] = var5;
            var2 = var2.id;
            var1['channelId'] = var2;
            return var1;
case 15:
            var2 = var8.channelId;
            _closure2_slot5 = var2;
            var1 = var8.messageId;
            _closure2_slot6 = var1;
            var1 = {};
            var10 = _closure1_slot11;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 21;
            var5 = var11[var5];
            var9 = var9.bind(var6)(var5);
            var5 = {};
            var5['notification'] = var8;
            var5 = var10.bind(var6)(var9, var5);
            var1['content'] = var5;
            var5 = function onPress() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 14;
                var2 = var9[var1];
                var1 = undefined;
                var6 = var8.bind(var1)(var2);
                var5 = var6.transitionToMessage;
                var4 = _closure2_slot5;
                var3 = _closure2_slot6;
                var2 = {};
                var7 = 20;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.JumpTypes;
                var7 = var7.INSTANT;
                var2['jumpType'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1['onPress'] = var5;
            var1['channelId'] = var2;
            return var1;
case 14:
            var5 = var8.channel;
            _closure2_slot3 = var5;
            var2 = var8.message;
            _closure2_slot4 = var2;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 11;
            var1 = var14[var1];
            var9 = var10.bind(var6)(var1);
            var1 = var9.getMessageAuthor;
            var13 = var1.bind(var9)(var2);
            var1 = {};
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var9 = 17;
            var9 = var14[var9];
            var11 = var11.bind(var6)(var9);
            var9 = {};
            var9['notification'] = var8;
            var17 = function onExpandPress() {
                var1 = {};
                var3 = _closure2_slot0;
                var4 = var3.type;
                var1['type'] = var4;
                var4 = _closure2_slot3;
                var4 = var4.guild_id;
                var1['guildId'] = var4;
                var4 = _closure2_slot3;
                var4 = var4.id;
                var1['channelId'] = var4;
                var4 = _closure2_slot4;
                var4 = var4.id;
                var1['messageId'] = var4;
                var3 = var3.inAppNotificationId;
                var1['inAppNotificationId'] = var3;
                var3 = 'quick_reaction';
                var1['accessory'] = var3;
                var12 = var1.type;
                var10 = var1.guildId;
                var9 = var1.channelId;
                var8 = var1.inAppNotificationId;
                var11 = var1.accessory;
                var7 = var1.messageId;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 32;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.trackWithMetadata;
                var3 = _closure1_slot10;
                var4 = var3.IN_APP_NOTIFICATION_ACCESSORY_CLICKED;
                var3 = {};
                var3['type'] = var12;
                var3['accessory'] = var11;
                var3['notif_guild_id'] = var10;
                var3['notif_channel_id'] = var9;
                var3['in_app_notification_id'] = var8;
                var3['message_id'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var3 = _closure2_slot1;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9['onExpandPress'] = var17;
            var9['reaction'] = var16;
            var9['expandedContentVisible'] = var15;
            var9 = var12.bind(var6)(var11, var9);
            var1['content'] = var9;
            var9 = 18;
            var11 = var14[var9];
            var11 = var10.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var9 = var14[var9];
            var9 = var10.bind(var6)(var9);
            var9 = var9.t;
            var10 = var9.Hjp1LH;
            var9 = {};
            var13 = var13.nick;
            var9['userName'] = var13;
            var13 = var2.content;
            var9['message'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var1['screenReaderAnnouncement'] = var9;
            var9 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popAll;
                    var3 = var3.bind(var4)();
                    var3 = _closure1_slot29;
                    var3 = var3.bind(var1)();
                    var7 = true;
                    if(var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 13;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.InAppNotificationNavigationExperiment;
                    var4 = var5.getConfig;
                    var3 = {};
                    var6 = 'in-app-notification';
                    var3['location'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.enableStackNavigation;
                    var7 = !var3;
case 34:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.transitionToMessage;
                    var3 = _closure2_slot3;
                    var4 = var3.id;
                    var2 = _closure2_slot4;
                    var3 = var2.id;
                    var2 = {};
                    var2['navigationReplace'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var1['onPress'] = var9;
            var9 = function onSettingsPress() {
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 12;
                var3 = var1[var3];
                var6 = undefined;
                var5 = var4.bind(var6)(var3);
                var4 = var5.pushLazy;
                var3 = _closure1_slot0;
                var2 = 16;
                var2 = var1[var2];
                var3 = var3.bind(var6)(var2);
                var2 = 15;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var6)(var2, var1);
                var2 = {};
                var1 = _closure2_slot3;
                var1 = var1.id;
                var2['channelId'] = var1;
                var1 = 'in-app-notification-settings-modal';
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var1['onSettingsPress'] = var9;
            var9 = var5.guild_id;
            var1['guildId'] = var9;
            var9 = var5.id;
            var1['channelId'] = var9;
            var5 = var5.type;
            var1['channelType'] = var5;
            var2 = var2.id;
            var1['messageId'] = var2;
            var2 = null;
            var4 = var2 != var4;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var5 = _closure1_slot11;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 19;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.MessageNotificationReactBar;
            var3 = {};
            var3['notification'] = var8;
            var7 = function onReactionPress(arg1, arg2) {
                var5 = _closure2_slot2;
                var4 = _closure2_slot0;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var5.bind(var3)(var4, var2, var1);
                return var1;
            };
            var3['onReactionPress'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 36:
            var1['expandContent'] = var2;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function trackDismissed(arg1) {
        var1 = arg1;
        var10 = var1.guildId;
        var9 = var1.channelId;
        var11 = var1.type;
        var8 = var1.dismissReason;
        var7 = var1.inAppNotificationId;
        var6 = var1.messageId;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 32;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot10;
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
    var _closure1_slot31 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var7 = 0;
    var4 = var6[var7];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var9 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var9);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.InAppNotificationTypes;
    var _closure1_slot8 = var8;
    var8 = var4.UserSettingsSections;
    var _closure1_slot9 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = new Array(3);
    var8 = -100;
    var4[0] = var8;
    var4[1] = var7;
    var7 = 100;
    var4[2] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 200;
    var4['duration'] = var8;
    var7 = 7;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var11 = var9.Easing;
    var10 = var11.in;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var9 = var9.Easing;
    var9 = var9.ease;
    var9 = var10.bind(var11)(var9);
    var4['easing'] = var9;
    var _closure1_slot14 = var4;
    var4 = {};
    var4['duration'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var9 = var8.Easing;
    var8 = var9.out;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Easing;
    var7 = var7.ease;
    var7 = var8.bind(var9)(var7);
    var4['easing'] = var7;
    var _closure1_slot15 = var4;
    var4 = {'extrapolateRight': 'clamp', 'extrapolateLeft': 'clamp'};
    var _closure1_slot16 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginLeft': 16, 'marginRight': 16};
    var4['animatedContainer'] = var9;
    var10 = 'absolute';
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'backgroundColor': 'transparent', 'marginTop': 8};
    var4['safeAreaContainer'] = var9;
    var9 = {};
    var9['position'] = var10;
    var4['backdrop'] = var9;
    var9 = {'overflow': 'hidden', 'alignSelf': 'center'};
    var4['expandContentContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx1(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('autodismissed');}}";
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx2(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx3(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}";
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx4(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx5(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,disableSwipeDown,notificationGestureY,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,runOnJS,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;const validSwipeDirection=disableSwipeDown?event.translationY<=0:true;if(shouldDismiss&&validSwipeDirection){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx6(event){const{disableSwipeDown,startY,notificationGestureY,velocityY}=this.__closure;const newY=disableSwipeDown?Math.min(startY.get()+event.translationY,startY.get()):startY.get()+event.translationY;notificationGestureY.set(newY);velocityY.set(event.velocityY);}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx7(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx8(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}";
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx9(){const{initialized,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig,scale}=this.__closure;const scaleTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scale.get();const opacityTransform=initialized?interpolate(notificationGestureY.get(),PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scale.get();return{transform:[{translateY:notificationGestureY.get()},{scale:scaleTransform}],opacity:opacityTransform};}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx10(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING)};}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx11(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING,withSpring}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),transform:[{translateY:withSpring(expandedSV.get()?0:-80,{dampingRatio:0.9,duration:350})},{scale:withTiming(expandedSV.get()?1:0.8,DEFAULT_ANIMATION_TIMING)}]};}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = 52;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppNotificationContainer(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var27 = var1.notification;
            var _closure2_slot0 = var27;
            var4 = undefined;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var1 = _closure1_slot17;
            var20 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var19 = 7;
            var1 = var6[var19];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useSharedValue;
            var30 = 0;
            var23 = var1.bind(var3)(var30);
            var _closure2_slot1 = var23;
            var1 = var6[var19];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useSharedValue;
            var15 = var1.bind(var3)(var30);
            var _closure2_slot2 = var15;
            var1 = var6[var19];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useSharedValue;
            var1 = 100;
            var29 = var3.bind(var5)(var1);
            var _closure2_slot3 = var29;
            var9 = _closure1_slot4;
            var1 = var9.useState;
            var10 = false;
            var1 = var1.bind(var9)(var10);
            var11 = _closure1_slot3;
            var5 = 2;
            var1 = var11.bind(var4)(var1, var5);
            var25 = var1[var30];
            var _closure2_slot4 = var25;
            var8 = 1;
            var1 = var1[var8];
            var _closure2_slot5 = var1;
            var1 = var9.useState;
            var1 = var1.bind(var9)(var10);
            var1 = var11.bind(var4)(var1, var5);
            var33 = var1[var30];
            var _closure2_slot6 = var33;
            var13 = var1[var8];
            var _closure2_slot7 = var13;
            var1 = var9.useState;
            var1 = var1.bind(var9)(var10);
            var1 = var11.bind(var4)(var1, var5);
            var28 = var1[var30];
            var _closure2_slot8 = var28;
            var1 = var1[var8];
            var _closure2_slot9 = var1;
            var3 = var6[var19];
            var7 = var2.bind(var4)(var3);
            var3 = var7.useSharedValue;
            var18 = var3.bind(var7)(var10);
            var _closure2_slot10 = var18;
            var12 = _closure1_slot1;
            var3 = 33;
            var3 = var6[var3];
            var3 = var12.bind(var4)(var3);
            var16 = var3.bind(var4)(var18);
            var _closure2_slot11 = var16;
            var10 = var9.useCallback;
            var7 = new Array(1);
            var7[0] = var18;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot10;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var5);
                    if(!var5) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 34;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideAllActionSheets;
                    var1 = var1.bind(var2)();
case 38:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 34;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setActionSheetZIndex;
                    var2 = undefined;
                    if(!var5) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var2 = 1;
case 40:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var7 = var10.bind(var9)(var3, var7);
            var _closure2_slot12 = var7;
            var17 = var9.useCallback;
            var10 = new Array(2);
            var10[0] = var16;
            var10[1] = var7;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot11;
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var4 = _closure2_slot12;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var1 = true;
case 42:
                    return var1;
                }
            };
            var10 = var17.bind(var9)(var3, var10);
            var3 = 35;
            var3 = var6[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.bind(var4)(var10, var16);
            var3 = var9.useState;
            var10 = null;
            var3 = var3.bind(var9)(var10);
            var5 = var11.bind(var4)(var3, var5);
            var3 = var5[var30];
            var11 = var5[var8];
            var _closure2_slot13 = var11;
            var8 = var9.useCallback;
            var5 = new Array(3);
            var5[0] = var7;
            var5[1] = var11;
            var5[2] = var1;
            var1 = function(arg1, arg2, arg3) {
                var5 = arg1;
                var4 = arg2;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 36;
                var6 = var10[var2];
                var1 = undefined;
                var7 = var3.bind(var1)(var6);
                var6 = var7.triggerHapticFeedback;
                var2 = var10[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_LIGHT;
                var2 = var6.bind(var7)(var2);
                var2 = 37;
                var6 = var10[var2];
                var9 = var3.bind(var1)(var6);
                var8 = var9.addReaction;
                var6 = var5.channel;
                var7 = var6.id;
                var5 = var5.message;
                var15 = var5.id;
                var5 = 38;
                var5 = var10[var5];
                var11 = var3.bind(var1)(var5);
                var5 = var11.toReactionEmoji;
                var14 = var5.bind(var11)(var4);
                var2 = var10[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.ReactionLocations;
                var13 = var2.IN_APP_NOTIFICATION;
                var2 = {};
                var10 = arg3;
                var2['burst'] = var10;
                var17 = var9;
                var16 = var7;
                var12 = var2;
                var2 = var17[var8](var16, var15, var14, var13, var12, var11);
                var5 = _closure2_slot12;
                var3 = false;
                var3 = var5.bind(var1)(var3);
                var3 = _closure2_slot13;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot9;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var8.bind(var9)(var1, var5);
            var1 = 39;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.InAppNotificationReactExperiment;
            var2 = var6.useConfig;
            var1 = {};
            var8 = 'InAppNotificationContainer';
            var1['location'] = var8;
            var1 = var2.bind(var6)(var1);
            var6 = var1.quickReact;
            var2 = _closure1_slot30;
            var1 = {};
            var1['notification'] = var27;
            var1['isExpanded'] = var16;
            var1['setExpanded'] = var7;
            var1['reaction'] = var3;
            var3 = undefined;
            if(!var6) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var3 = var5;
case 44:
            var1['onReactionPress'] = var3;
            var2 = var2.bind(var4)(var1);
            var26 = var2.content;
            var1 = var2.screenReaderAnnouncement;
            _closure2_slot14 = var1;
            var6 = var2.onPress;
            _closure2_slot15 = var6;
            var5 = var2.onSettingsPress;
            _closure2_slot16 = var5;
            var32 = var2.guildId;
            _closure2_slot17 = var32;
            var31 = var2.channelId;
            _closure2_slot18 = var31;
            var7 = var2.messageId;
            _closure2_slot19 = var7;
            var12 = var2.channelType;
            _closure2_slot20 = var12;
            var17 = var2.expandContent;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 40;
            var8 = var2[var8];
            var8 = var3.bind(var4)(var8);
            var11 = var8.InAppNotificationDismissExperiment;
            var9 = var11.useConfig;
            var8 = {};
            var21 = 'in-app-notification';
            var8['location'] = var21;
            var8 = var9.bind(var11)(var8);
            var11 = var8.disableSwipeDown;
            _closure2_slot21 = var11;
            var9 = _closure1_slot4;
            var22 = var9.useCallback;
            var21 = new Array(4);
            var21[0] = var27;
            var21[1] = var32;
            var21[2] = var31;
            var21[3] = var7;
            var8 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var6 = arg1;
                    var3 = null;
                    if(!(var3 != var6)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var4 = _closure1_slot31;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var7 = var5.type;
                    var2['type'] = var7;
                    var7 = _closure2_slot17;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot18;
                    var2['channelId'] = var7;
                    var2['dismissReason'] = var6;
                    var5 = var5.inAppNotificationId;
                    var2['inAppNotificationId'] = var5;
                    var1 = _closure2_slot19;
                    var2['messageId'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
case 46:
                    var2 = _closure2_slot0;
                    var2 = var2.onDismiss;
                    if(!(var3 != var2)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var2 = _closure2_slot0;
                    var1 = var2.onDismiss;
                    var1 = var1.bind(var2)();
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var22.bind(var9)(var8, var21);
            _closure2_slot22 = var8;
            var21 = var9.useRef;
            var21 = var21.bind(var9)(var10);
            _closure2_slot23 = var21;
            var34 = var9.useEffect;
            var22 = new Array(3);
            var22[0] = var28;
            var22[1] = var23;
            var22[2] = var8;
            var21 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot8;
                    if(!var2) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var3 = _closure2_slot23;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 == var4;
case 50:
                    if(!var2) { _fun0010_ip = 52; continue _fun0010 }
case 33:
                    var2 = _closure2_slot23;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var4 = _closure2_slot1;
                        var3 = var4.set;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var1 = 41;
                        var5 = var14[var1];
                        var1 = undefined;
                        var9 = var13.bind(var1)(var5);
                        var8 = var9.withTiming;
                        var6 = _closure1_slot13;
                        var5 = 0;
                        var7 = var6[var5];
                        var17 = _closure1_slot15;
                        var5 = function i(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 7;
                                var1 = var3[var1];
                                var3 = undefined;
                                var4 = var2.bind(var3)(var1);
                                var2 = var4.runOnJS;
                                var1 = _closure2_slot22;
                                var2 = var2.bind(var4)(var1);
                                var1 = 'autodismissed';
                                var1 = var2.bind(var3)(var1);
case 53:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var10 = {};
                        var12 = 7;
                        var12 = var14[var12];
                        var12 = var13.bind(var1)(var12);
                        var12 = var12.runOnJS;
                        var10['runOnJS'] = var12;
                        var11 = _closure2_slot22;
                        var10['handleDismissNotification'] = var11;
                        var5['__closure'] = var10;
                        var10 = 1150739008183.0;
                        var5['__workletHash'] = var10;
                        var2 = _closure1_slot18;
                        var5['__initData'] = var2;
                        var16 = 'respect-motion-settings';
                        var19 = var9;
                        var18 = var7;
                        var15 = var5;
                        var2 = var19[var8](var18, var17, var16, var15, var14);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = 1500;
                    var1 = var5.bind(var4)(var3, var1);
                    var2['current'] = var1;
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var21 = var34.bind(var9)(var21, var22);
            var21 = 42;
            var22 = var2[var21];
            var35 = var3.bind(var4)(var22);
            var34 = var35.useUnmountEffect;
            var22 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 34;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.setActionSheetZIndex;
                    var2 = var2.bind(var4)(var1);
                    var4 = _closure2_slot23;
                    var5 = var4.current;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0012_ip = 55; continue _fun0012 }
case 56:
                    var4 = global;
                    var5 = var4.clearTimeout;
                    var4 = _closure2_slot23;
                    var4 = var4.current;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.cancelAnimation;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
case 55:
                    return var1;
                }
            };
            var22 = var34.bind(var35)(var22);
            var22 = _closure1_slot1;
            var21 = var2[var21];
            var22 = var22.bind(var4)(var21);
            var21 = function() {
                var4 = _closure2_slot2;
                var3 = var4.set;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 41;
                var5 = var14[var5];
                var12 = undefined;
                var9 = var13.bind(var12)(var5);
                var8 = var9.withTiming;
                var17 = _closure1_slot14;
                var6 = function i() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot5;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = {};
                var11 = 7;
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot5;
                var5['setInitialized'] = var10;
                var6['__closure'] = var5;
                var5 = 11548697745556.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot19;
                var6['__initData'] = var2;
                var18 = 1;
                var16 = 'respect-motion-settings';
                var19 = var9;
                var15 = var6;
                var2 = var19[var8](var18, var17, var16, var15, var14);
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.cancelAnimation;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var21 = var22.bind(var4)(var21);
            var22 = var9.useEffect;
            var21 = new Array(7);
            var21[0] = var25;
            var34 = var27.type;
            var21[1] = var34;
            var21[2] = var32;
            var21[3] = var31;
            var34 = var27.inAppNotificationId;
            var21[4] = var34;
            var21[5] = var7;
            var21[6] = var12;
            var12 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0013_ip = 57; continue _fun0013 }
case 51:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.IN_APP_NOTIFICATION_SHOWN;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var7 = var6.type;
                    var1['type'] = var7;
                    var7 = _closure2_slot17;
                    var1['guild_id'] = var7;
                    var7 = _closure2_slot18;
                    var1['channel_id'] = var7;
                    var6 = var6.inAppNotificationId;
                    var1['in_app_notification_id'] = var6;
                    var6 = _closure2_slot19;
                    var1['message_id'] = var6;
                    var5 = _closure2_slot20;
                    var1['channel_type'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var22.bind(var9)(var12, var21);
            var12 = var27.duration;
            _closure2_slot24 = var12;
            var22 = var9.useEffect;
            var21 = new Array(9);
            var21[0] = var25;
            var21[1] = var33;
            var21[2] = var27;
            var21[3] = var29;
            var21[4] = var8;
            var21[5] = var16;
            var21[6] = var18;
            var21[7] = var12;
            var21[8] = var28;
            var12 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0014_ip = 58; continue _fun0014 }
case 59:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0014_ip = 58; continue _fun0014 }
case 50:
                    var3 = _closure2_slot24;
                    var2 = inf;
                    if(!(var3 !== var2)) { _fun0014_ip = 58; continue _fun0014 }
case 60:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0014_ip = 58; continue _fun0014 }
case 61:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0014_ip = 58; continue _fun0014 }
case 62:
                    var4 = _closure2_slot3;
                    var2 = var4.get;
                    var6 = var2.bind(var4)();
                    var3 = var4.set;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 41;
                    var5 = var14[var5];
                    var12 = undefined;
                    var9 = var13.bind(var12)(var5);
                    var8 = var9.withTiming;
                    var7 = {};
                    var5 = 100;
                    var6 = var6 / var5;
                    var5 = _closure2_slot24;
                    var5 = var6 * var5;
                    var7['duration'] = var5;
                    var11 = 7;
                    var5 = var14[var11];
                    var5 = var13.bind(var12)(var5);
                    var5 = var5.Easing;
                    var5 = var5.linear;
                    var7['easing'] = var5;
                    var6 = function i(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0015_ip = 63; continue _fun0015 }
case 54:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot22;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'timeout';
                            var1 = var2.bind(var3)(var1);
case 63:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot22;
                    var5['handleDismissNotification'] = var10;
                    var6['__closure'] = var5;
                    var5 = 14406601796666.0;
                    var6['__workletHash'] = var5;
                    var2 = _closure1_slot20;
                    var6['__initData'] = var2;
                    var18 = 0;
                    var16 = 'animate-always';
                    var19 = var9;
                    var17 = var7;
                    var15 = var6;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.cancelAnimation;
                        var2 = _closure2_slot3;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var22.bind(var9)(var12, var21);
            var12 = var2[var19];
            var21 = var3.bind(var4)(var12);
            var12 = var21.useSharedValue;
            var22 = var12.bind(var21)(var30);
            _closure2_slot25 = var22;
            var12 = var2[var19];
            var21 = var3.bind(var4)(var12);
            var12 = var21.useSharedValue;
            var21 = var12.bind(var21)(var30);
            _closure2_slot26 = var21;
            var33 = var9.useCallback;
            var30 = new Array(2);
            var30[0] = var21;
            var30[1] = var23;
            var12 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = global;
                    var5 = var3.Math;
                    var4 = var5.abs;
                    var6 = _closure2_slot26;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var4 = var4.bind(var5)(var1);
                    var1 = 100;
                    var1 = var4 >= var1;
                    if(var1) { _fun0016_ip = 64; continue _fun0016 }
case 65:
                    var4 = var3.Math;
                    var3 = var4.abs;
                    var5 = _closure2_slot1;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var3 = var3.bind(var4)(var2);
                    var2 = 5;
                    var1 = var3 >= var2;
case 64:
                    return var1;
                }
            };
            var33 = var33.bind(var9)(var12, var30);
            _closure2_slot27 = var33;
            var30 = var9.useCallback;
            var12 = new Array(7);
            var12[0] = var33;
            var33 = var27.type;
            var12[1] = var33;
            var33 = var27.inAppNotificationId;
            var12[2] = var33;
            var12[3] = var32;
            var12[4] = var31;
            var12[5] = var7;
            var12[6] = var29;
            var7 = function(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = arg2;
                    var3 = _closure2_slot27;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    if(var3) { _fun0017_ip = 66; continue _fun0017 }
case 67:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 32;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.trackWithMetadata;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var7 = var3.type;
                    var4['type'] = var7;
                    var7 = _closure2_slot17;
                    var4['notif_guild_id'] = var7;
                    var7 = _closure2_slot18;
                    var4['notif_channel_id'] = var7;
                    var7 = _closure2_slot19;
                    var4['message_id'] = var7;
                    var3 = var3.inAppNotificationId;
                    var4['in_app_notification_id'] = var3;
                    var3 = global;
                    var8 = var3.Math;
                    var7 = var8.floor;
                    var3 = _closure2_slot3;
                    var10 = 'number';
                    var3 = typeof var3;
                    if(!(var10 !== var3)) { _fun0017_ip = 68; continue _fun0017 }
case 69:
                    var10 = _closure2_slot3;
                    var3 = var10.get;
                    var3 = var3.bind(var10)();
                    _fun0017_ip = 70; continue _fun0017;
case 68:
                    var3 = _closure2_slot3;
case 70:
                    var3 = var7.bind(var8)(var3);
                    var4['percent'] = var3;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0017_ip = 66; continue _fun0017 }
case 71:
                    var2 = var2.bind(var1)();
case 66:
                    return var1;
                }
            };
            var12 = var30.bind(var9)(var7, var12);
            _closure2_slot28 = var12;
            var30 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var6;
            var6 = function() {
                var4 = _closure2_slot28;
                var2 = _closure1_slot10;
                var3 = var2.IN_APP_NOTIFICATION_CLICKED;
                var2 = _closure2_slot15;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var31 = var30.bind(var9)(var6, var7);
            var7 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var12;
            var6[1] = var5;
            var5 = function() {
                var4 = _closure2_slot28;
                var2 = _closure1_slot10;
                var3 = var2.IN_APP_NOTIFICATION_LONG_PRESSED;
                var2 = _closure2_slot16;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var30 = var7.bind(var9)(var5, var6);
            var9 = 43;
            var2 = var2[var9];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Gesture;
            var2 = var3.Pan;
            var5 = var2.bind(var3)();
            var3 = var5.enabled;
            var2 = !var16;
            if(!var2) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var2 = !var28;
case 72:
            var7 = var3.bind(var5)(var2);
            var6 = var7.onBegin;
            var3 = function mi() {
                var4 = _closure2_slot25;
                var3 = var4.set;
                var5 = _closure2_slot1;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                var4 = _closure2_slot26;
                var3 = var4.set;
                var1 = 0;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.runOnJS;
                var2 = _closure2_slot7;
                var3 = var3.bind(var4)(var2);
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = {};
            var12['startY'] = var22;
            var12['notificationGestureY'] = var23;
            var12['velocityY'] = var21;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var32 = var5[var19];
            var32 = var2.bind(var4)(var32);
            var32 = var32.runOnJS;
            var12['runOnJS'] = var32;
            var12['setPanning'] = var13;
            var3['__closure'] = var12;
            var12 = 11316955045022.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot24;
            var3['__initData'] = var12;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onUpdate;
            var3 = function Ai(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var3 = _closure2_slot21;
                    if(var3) { _fun0018_ip = 74; continue _fun0018 }
case 75:
                    var4 = _closure2_slot25;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = var1.translationY;
                    var5 = var4 + var3;
                    _fun0018_ip = 76; continue _fun0018;
case 74:
                    var3 = global;
                    var7 = var3.Math;
                    var6 = var7.min;
                    var4 = _closure2_slot25;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = var1.translationY;
                    var4 = var4 + var3;
                    var8 = _closure2_slot25;
                    var3 = var8.get;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var4, var3);
case 76:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5);
                    var3 = _closure2_slot26;
                    var2 = var3.set;
                    var1 = var1.velocityY;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = {};
            var12['disableSwipeDown'] = var11;
            var12['startY'] = var22;
            var12['notificationGestureY'] = var23;
            var12['velocityY'] = var21;
            var3['__closure'] = var12;
            var12 = 13539117634737.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot23;
            var3['__initData'] = var12;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onEnd;
            var3 = function Ni(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = arg1;
                    var1 = global;
                    var5 = var1.Math;
                    var3 = var5.abs;
                    var6 = _closure2_slot26;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var3 = var3.bind(var5)(var2);
                    var2 = 100;
                    var2 = var3 >= var2;
                    if(var2) { _fun0019_ip = 77; continue _fun0019 }
case 35:
                    var5 = var1.Math;
                    var3 = var5.abs;
                    var1 = var4.translationY;
                    var3 = var3.bind(var5)(var1);
                    var1 = 25;
                    var2 = var3 >= var1;
case 77:
                    var1 = _closure2_slot21;
                    var1 = !var1;
                    if(var1) { _fun0019_ip = 78; continue _fun0019 }
case 79:
                    var5 = var4.translationY;
                    var3 = 0;
                    var1 = var5 <= var3;
case 78:
                    if(!var2) { _fun0019_ip = 80; continue _fun0019 }
case 81:
                    if(var1) { _fun0019_ip = 82; continue _fun0019 }
case 80:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var1 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var1);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot7;
                    var2 = var2.bind(var3)(var1);
                    var1 = false;
                    var1 = var2.bind(var5)(var1);
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = 44;
                    var1 = var7[var1];
                    var8 = var6.bind(var5)(var1);
                    var7 = var8.withSpring;
                    var6 = {'damping': 10, 'mass': 1, 'stiffness': 100};
                    var5 = _closure2_slot26;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var6['velocity'] = var1;
                    var5 = 0;
                    var1 = 'animate-always';
                    var1 = var7.bind(var8)(var5, var6, var1);
                    var1 = var2.bind(var3)(var1);
                    _fun0019_ip = 83; continue _fun0019;
case 82:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 41;
                    var5 = var7[var5];
                    var13 = undefined;
                    var8 = var6.bind(var13)(var5);
                    var7 = var8.withTiming;
                    var4 = var4.translationY;
                    var5 = 0;
                    if(!(!(var4 > var5))) { _fun0019_ip = 84; continue _fun0019 }
case 85:
                    var4 = _closure1_slot13;
                    var6 = var4[var5];
                    _fun0019_ip = 86; continue _fun0019;
case 84:
                    var5 = _closure1_slot13;
                    var4 = 2;
                    var6 = var5[var4];
case 86:
                    var17 = _closure1_slot15;
                    var4 = function n(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0020_ip = 53; continue _fun0020 }
case 54:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot22;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'swipe';
                            var1 = var2.bind(var3)(var1);
case 53:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 7;
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.runOnJS;
                    var9['runOnJS'] = var11;
                    var10 = _closure2_slot22;
                    var9['handleDismissNotification'] = var10;
                    var4['__closure'] = var9;
                    var9 = 1684596854482.0;
                    var4['__workletHash'] = var9;
                    var1 = _closure1_slot25;
                    var4['__initData'] = var1;
                    var16 = 'animate-always';
                    var19 = var8;
                    var18 = var6;
                    var15 = var4;
                    var1 = var19[var7](var18, var17, var16, var15, var14);
                    var1 = var2.bind(var3)(var1);
case 83:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = {'velocityY': null, 'MIN_SWIPE_VELOCITY': 100, 'MIN_SWIPE_DISTANCE': 25};
            var12['velocityY'] = var21;
            var12['disableSwipeDown'] = var11;
            var12['notificationGestureY'] = var23;
            var22 = 41;
            var11 = var5[var22];
            var11 = var2.bind(var4)(var11);
            var11 = var11.withTiming;
            var12['withTiming'] = var11;
            var21 = _closure1_slot13;
            var12['PAN_INPUT_RANGE'] = var21;
            var11 = _closure1_slot15;
            var12['DEFAULT_ANIMATION_TIMING'] = var11;
            var32 = var5[var19];
            var32 = var2.bind(var4)(var32);
            var32 = var32.runOnJS;
            var12['runOnJS'] = var32;
            var12['handleDismissNotification'] = var8;
            var12['setPanning'] = var13;
            var8 = 44;
            var32 = var5[var8];
            var32 = var2.bind(var4)(var32);
            var32 = var32.withSpring;
            var12['withSpring'] = var32;
            var3['__closure'] = var12;
            var12 = 16269129257265.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot22;
            var3['__initData'] = var12;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onFinalize;
            var3 = function hi() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot7;
                var3 = var3.bind(var4)(var2);
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = {};
            var32 = var5[var19];
            var32 = var2.bind(var4)(var32);
            var32 = var32.runOnJS;
            var12['runOnJS'] = var32;
            var12['setPanning'] = var13;
            var3['__closure'] = var12;
            var12 = 2178187669683.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot21;
            var3['__initData'] = var12;
            var13 = var6.bind(var7)(var3);
            var3 = var5[var19];
            var7 = var2.bind(var4)(var3);
            var6 = var7.useAnimatedStyle;
            var3 = function Si() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0021_ip = 50; continue _fun0021 }
case 51:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var5 = var1.bind(var2)();
                    _fun0021_ip = 41; continue _fun0021;
case 50:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var4);
                    var7 = var8.interpolate;
                    var4 = _closure2_slot1;
                    var2 = var4.get;
                    var13 = var2.bind(var4)();
                    var12 = _closure1_slot13;
                    var10 = _closure1_slot16;
                    var11 = [0.3, 1, 0.3];
                    var14 = var8;
                    var5 = var14[var7](var13, var12, var11, var10, var9);
case 41:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0021_ip = 57; continue _fun0021 }
case 87:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    _fun0021_ip = 88; continue _fun0021;
case 57:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var6 = var6[var4];
                    var4 = undefined;
                    var9 = var7.bind(var4)(var6);
                    var8 = var9.interpolate;
                    var6 = _closure2_slot1;
                    var4 = var6.get;
                    var13 = var4.bind(var6)();
                    var12 = _closure1_slot13;
                    var10 = _closure1_slot16;
                    var11 = [0, 1, 0];
                    var14 = var9;
                    var2 = var14[var8](var13, var12, var11, var10, var9);
case 88:
                    var1 = {};
                    var4 = {};
                    var6 = _closure2_slot1;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var4['translateY'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var4['scale'] = var5;
                    var3[1] = var4;
                    var1['transform'] = var3;
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['initialized'] = var25;
            var25 = var5[var19];
            var25 = var2.bind(var4)(var25);
            var25 = var25.interpolate;
            var12['interpolate'] = var25;
            var12['notificationGestureY'] = var23;
            var12['PAN_INPUT_RANGE'] = var21;
            var21 = _closure1_slot16;
            var12['extrapolateConfig'] = var21;
            var12['scale'] = var15;
            var3['__closure'] = var12;
            var12 = 15190200094228.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot26;
            var3['__initData'] = var12;
            var25 = var6.bind(var7)(var3);
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0022_ip = 53; continue _fun0022 }
case 75:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 45;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot14;
                    var1 = var2.bind(var3)(var1);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var1 = 46;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var6.bind(var7)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 47;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var21 = var1.width;
            var15 = var1.height;
            var1 = var5[var19];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function Di() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 41;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot10;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0023_ip = 61; continue _fun0023 }
case 89:
                    var3 = 1;
case 61:
                    var2 = _closure1_slot15;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var23 = var5[var22];
            var23 = var2.bind(var4)(var23);
            var23 = var23.withTiming;
            var7['withTiming'] = var23;
            var7['expandedSV'] = var18;
            var7['DEFAULT_ANIMATION_TIMING'] = var11;
            var1['__closure'] = var7;
            var7 = 17343110607400.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot27;
            var1['__initData'] = var7;
            var32 = var3.bind(var6)(var1);
            var1 = var5[var19];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function Ri() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 41;
                    var2 = var2[var9];
                    var8 = undefined;
                    var10 = var3.bind(var8)(var2);
                    var7 = var10.withTiming;
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var6 = 0;
                    if(!var3) { _fun0024_ip = 61; continue _fun0024 }
case 89:
                    var6 = 1;
case 61:
                    var3 = _closure1_slot15;
                    var3 = var7.bind(var10)(var6, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 44;
                    var6 = var10[var6];
                    var10 = var7.bind(var8)(var6);
                    var7 = var10.withSpring;
                    var11 = _closure2_slot10;
                    var6 = var11.get;
                    var11 = var6.bind(var11)();
                    var6 = -80;
                    if(!var11) { _fun0024_ip = 90; continue _fun0024 }
case 91:
                    var6 = 0;
case 90:
                    var2 = {'dampingRatio': 0.9, 'duration': 350};
                    var2 = var7.bind(var10)(var6, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.withTiming;
                    var8 = _closure2_slot10;
                    var5 = var8.get;
                    var8 = var5.bind(var8)();
                    var5 = 0.8;
                    if(!var8) { _fun0024_ip = 92; continue _fun0024 }
case 24:
                    var5 = 1;
case 92:
                    var4 = _closure1_slot15;
                    var4 = var6.bind(var7)(var5, var4);
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var22 = var5[var22];
            var22 = var2.bind(var4)(var22);
            var22 = var22.withTiming;
            var7['withTiming'] = var22;
            var7['expandedSV'] = var18;
            var7['DEFAULT_ANIMATION_TIMING'] = var11;
            var8 = var5[var8];
            var8 = var2.bind(var4)(var8);
            var8 = var8.withSpring;
            var7['withSpring'] = var8;
            var1['__closure'] = var7;
            var7 = 1094883825331.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot28;
            var1['__initData'] = var7;
            var18 = var3.bind(var6)(var1);
            var3 = _closure1_slot12;
            var1 = 48;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.OverlayView;
            var1 = {};
            var8 = _closure1_slot11;
            var6 = _closure1_slot5;
            var5 = {};
            var11 = var20.backdrop;
            var7 = new Array(2);
            var7[0] = var11;
            var11 = {};
            var11['width'] = var21;
            var11['height'] = var15;
            var7[1] = var11;
            var5['style'] = var7;
            var15 = 'none';
            var7 = var15;
            if(!var16) { _fun0006_ip = 93; continue _fun0006 }
case 94:
            var7 = 'auto';
case 93:
            var5['pointerEvents'] = var7;
            var23 = _closure1_slot11;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var21 = 49;
            var21 = var11[var21];
            var21 = var7.bind(var4)(var21);
            var22 = var21.Backdrop;
            var21 = {};
            var21['style'] = var32;
            var24 = function onDismiss() {
                var3 = _closure2_slot12;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var21['onDismiss'] = var24;
            var24 = true;
            var21['aria-hidden'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var5['children'] = var21;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var6 = 50;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {'top': true, 'style': null, 'pointerEvents': 'box-none'};
            var11 = var20.safeAreaContainer;
            var6['style'] = var11;
            var11 = undefined;
            if(!var12) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var11 = 'no-hide-descendants';
case 95:
            var6['importantForAccessibility'] = var11;
            var12 = _closure1_slot11;
            var24 = _closure1_slot0;
            var32 = _closure1_slot2;
            var9 = var32[var9];
            var9 = var24.bind(var4)(var9);
            var11 = var9.GestureDetector;
            var9 = {};
            var9['gesture'] = var13;
            var22 = _closure1_slot11;
            var21 = _closure1_slot1;
            var13 = var32[var19];
            var13 = var21.bind(var4)(var13);
            var21 = var13.View;
            var13 = {};
            var33 = var20.animatedContainer;
            var23 = new Array(2);
            var23[0] = var33;
            var23[1] = var25;
            var13['style'] = var23;
            var25 = _closure1_slot11;
            var23 = 51;
            var23 = var32[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.NotificationPressable;
            var23 = {};
            var23['onPress'] = var31;
            var23['onLongPress'] = var30;
            var31 = var27.duration;
            var30 = inf;
            var27 = undefined;
            if(!(var31 !== var30)) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var27 = var29;
case 97:
            var23['percent'] = var27;
            var27 = var16;
            if(var27) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            var27 = var28;
case 99:
            var23['hideProgress'] = var27;
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var13['children'] = var23;
            var13 = var22.bind(var4)(var21, var13);
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var11 = var10 != var17;
            var10 = null;
            if(!var11) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            var13 = _closure1_slot11;
            var12 = _closure1_slot5;
            var11 = {};
            var20 = var20.expandContentContainer;
            var11['style'] = var20;
            if(!var16) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var15 = 'auto';
case 103:
            var11['pointerEvents'] = var15;
            var16 = _closure1_slot11;
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var19];
            var14 = var15.bind(var4)(var14);
            var15 = var14.View;
            var14 = {};
            var14['style'] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 101:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();