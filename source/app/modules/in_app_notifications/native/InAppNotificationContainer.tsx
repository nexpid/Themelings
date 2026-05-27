// app/modules/in_app_notifications/native/InAppNotificationContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function getRenderProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.notification;
            var _closure2_slot0 = var10;
            var7 = var1.canExpand;
            var6 = var1.isInExpandableNotificationExperiment;
            var21 = var1.isExpanded;
            var _closure2_slot1 = var21;
            var20 = var1.expandedSV;
            var3 = var1.setExpanded;
            var _closure2_slot2 = var3;
            var22 = var1.reaction;
            var9 = var1.onMessageSent;
            var3 = var1.onReactionPress;
            var _closure2_slot3 = var3;
            var19 = var1.notificationGestureY;
            var14 = var1.onDismiss;
            var8 = undefined;
            var _closure2_slot4 = var8;
            var _closure2_slot5 = var8;
            var _closure2_slot6 = var8;
            var _closure2_slot7 = var8;
            var _closure2_slot8 = var8;
            var _closure2_slot9 = var8;
            var _closure2_slot10 = var8;
            var _closure2_slot11 = var8;
            var _closure2_slot12 = var8;
            var _closure2_slot13 = var8;
            var _closure2_slot14 = var8;
            var3 = var10.type;
            var1 = _closure1_slot11;
            var1 = var1.MESSAGE;
            if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot11;
            var1 = var1.MESSAGE_FAILED_TO_SEND;
            if(!(var1 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot11;
            var1 = var1.FORUM_THREAD_CREATED;
            if(!(var1 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot11;
            var1 = var1.BUG_REPORTER;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = _closure1_slot11;
            var1 = var1.ALERT;
            if(!(var1 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = _closure1_slot11;
            var1 = var1.REACTION;
            if(!(var1 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = _closure1_slot11;
            var1 = var1.MESSAGE_REMINDER;
            if(!(var1 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = _closure1_slot11;
            var1 = var1.RESTRICTED_HOURS_WARNING;
            if(!(var1 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = {};
            var3 = null;
            var1['content'] = var3;
            return var1;
case 16:
            var1 = {};
            var3 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot12;
                var5 = var5.FAMILY_CENTER;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var3;
            var11 = _closure1_slot17;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 31;
            var3 = var12[var3];
            var4 = var4.bind(var8)(var3);
            var3 = {};
            var3['notification'] = var10;
            var3 = var11.bind(var8)(var4, var3);
            var1['content'] = var3;
            return var1;
case 14:
            var1 = {};
            var3 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 11;
                var6 = var5[var3];
                var1 = undefined;
                var7 = var4.bind(var1)(var6);
                var6 = var7.popAll;
                var6 = var6.bind(var7)();
                var3 = var5[var3];
                var10 = var4.bind(var1)(var3);
                var9 = var10.pushLazy;
                var6 = _closure1_slot0;
                var3 = 14;
                var3 = var5[var3];
                var7 = var6.bind(var1)(var3);
                var3 = 28;
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
                var3 = 29;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot13;
                var3 = var2.FOR_LATER_REMINDER_NOTIFICATION_CLICKED;
                var2 = {};
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
            var1['onPress'] = var3;
            var11 = _closure1_slot17;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 30;
            var3 = var12[var3];
            var4 = var4.bind(var8)(var3);
            var3 = {};
            var3['notification'] = var10;
            var3 = var11.bind(var8)(var4, var3);
            var1['content'] = var3;
            return var1;
case 12:
            var3 = var10.channel;
            _closure2_slot11 = var3;
            var11 = var10.guild;
            var1 = var10.message;
            _closure2_slot12 = var1;
            var4 = null;
            var12 = var4 == var11;
            var1 = undefined;
            if(var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var11.id;
case 18:
            if(!(var4 == var1)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = var3.guild_id;
case 20:
            _closure2_slot13 = var1;
            var1 = var3.id;
            _closure2_slot14 = var1;
            var1 = {};
            var4 = function onPress() {
                var4 = _closure1_slot37;
                var3 = {};
                var1 = _closure2_slot0;
                var6 = var1.type;
                var3['type'] = var6;
                var6 = 'notification_clicked';
                var3['dismissReason'] = var6;
                var6 = _closure2_slot13;
                var3['guildId'] = var6;
                var6 = _closure2_slot14;
                var3['channelId'] = var6;
                var6 = _closure2_slot12;
                var6 = var6.id;
                var3['messageId'] = var6;
                var1 = var1.inAppNotificationId;
                var3['inAppNotificationId'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 11;
                var6 = var4[var6];
                var7 = var3.bind(var1)(var6);
                var6 = var7.popAll;
                var6 = var6.bind(var7)();
                var6 = _closure1_slot0;
                var5 = 12;
                var5 = var4[var5];
                var8 = var6.bind(var1)(var5);
                var7 = var8.transitionToMessage;
                var5 = _closure2_slot11;
                var6 = var5.id;
                var2 = _closure2_slot12;
                var5 = var2.id;
                var2 = {};
                var9 = true;
                var2['navigationReplace'] = var9;
                var2 = var7.bind(var8)(var6, var5, var2);
                var2 = 22;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1['onPress'] = var4;
            var4 = function onSettingsPress() {
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 11;
                var3 = var1[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = var4.pushLazy;
                var5 = _closure1_slot0;
                var2 = 14;
                var2 = var1[var2];
                var5 = var5.bind(var6)(var2);
                var2 = 13;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var5.bind(var6)(var2, var1);
                var1 = {};
                var5 = _closure2_slot14;
                var1['channelId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['onSettingsPress'] = var4;
            var12 = _closure1_slot17;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 27;
            var4 = var13[var4];
            var11 = var11.bind(var8)(var4);
            var4 = {};
            var4['notification'] = var10;
            var4 = var12.bind(var8)(var11, var4);
            var1['content'] = var4;
            var3 = var3.type;
            var1['channelType'] = var3;
            return var1;
case 10:
            var1 = var10.channel;
            _closure2_slot10 = var1;
            var1 = {};
            var11 = _closure1_slot17;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 26;
            var3 = var12[var3];
            var4 = var4.bind(var8)(var3);
            var3 = {};
            var3['notification'] = var10;
            var3 = var11.bind(var8)(var4, var3);
            var1['content'] = var3;
            var3 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.transitionToChannel;
                var2 = _closure2_slot10;
                var3 = var2.id;
                var2 = {};
                var6 = true;
                var2['navigationReplace'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onPress'] = var3;
            return var1;
case 8:
            var1 = {};
            var11 = _closure1_slot17;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 25;
            var3 = var12[var3];
            var3 = var4.bind(var8)(var3);
            var4 = var3.BugReporterNotification;
            var3 = {};
            var3['notification'] = var10;
            var3 = var11.bind(var8)(var4, var3);
            var1['content'] = var3;
            var3 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var3 = var4.getField;
                    var1 = 'isReportOpen';
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var3 = _closure1_slot37;
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
                    var3 = 11;
                    var6 = var1[var3];
                    var8 = var4.bind(var7)(var6);
                    var6 = var8.popAll;
                    var6 = var6.bind(var8)();
                    var6 = 22;
                    var6 = var1[var6];
                    var8 = var4.bind(var7)(var6);
                    var6 = var8.clearNotification;
                    var6 = var6.bind(var8)();
                    var9 = _closure1_slot8;
                    var8 = var9.setState;
                    var6 = {};
                    var10 = true;
                    var6['isReportOpen'] = var10;
                    var6 = var8.bind(var9)(var6);
                    var3 = var1[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.pushLazy;
                    var6 = _closure1_slot0;
                    var2 = 14;
                    var2 = var1[var2];
                    var6 = var6.bind(var7)(var2);
                    var2 = 23;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var6.bind(var7)(var2, var1);
                    var1 = {};
                    var6 = var5.imageUri;
                    var1['screenshotUri'] = var6;
                    var5 = var5.image;
                    var1['screenshot'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var3;
            var3 = function onSettingsPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot12;
                var5 = var5.OVERVIEW;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onSettingsPress'] = var3;
            return var1;
case 6:
            var1 = var10.thread;
            _closure2_slot9 = var1;
            var1 = {};
            var11 = _closure1_slot17;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 21;
            var3 = var12[var3];
            var4 = var4.bind(var8)(var3);
            var3 = {};
            var3['notification'] = var10;
            var3 = var11.bind(var8)(var4, var3);
            var1['content'] = var3;
            var3 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.transitionToThread;
                var2 = _closure2_slot9;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var3;
            var3 = function onSettingsPress() {
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 11;
                var3 = var1[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = var4.pushLazy;
                var5 = _closure1_slot0;
                var2 = 14;
                var2 = var1[var2];
                var5 = var5.bind(var6)(var2);
                var2 = 13;
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
            var1['onSettingsPress'] = var3;
            return var1;
case 4:
            var1 = var10.channelId;
            _closure2_slot7 = var1;
            var1 = var10.messageId;
            _closure2_slot8 = var1;
            var1 = {};
            var11 = _closure1_slot17;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 20;
            var3 = var12[var3];
            var4 = var4.bind(var8)(var3);
            var3 = {};
            var3['notification'] = var10;
            var3 = var11.bind(var8)(var4, var3);
            var1['content'] = var3;
            var3 = function onPress() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 12;
                var2 = var9[var1];
                var1 = undefined;
                var6 = var8.bind(var1)(var2);
                var5 = var6.transitionToMessage;
                var4 = _closure2_slot7;
                var3 = _closure2_slot8;
                var2 = {};
                var7 = 19;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.JumpTypes;
                var7 = var7.INSTANT;
                var2['jumpType'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1['onPress'] = var3;
            return var1;
case 2:
            var4 = var10.channel;
            _closure2_slot4 = var4;
            var15 = var10.message;
            _closure2_slot5 = var15;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var3 = var3.bind(var8)(var1);
            var1 = var3.getMessageAuthor;
            var16 = var1.bind(var3)(var15);
            var18 = function onAccessibilityExpand() {
                var4 = _closure2_slot2;
                var1 = _closure2_slot1;
                var3 = !var1;
                var1 = undefined;
                var2 = 'accessibility_expand';
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            _closure2_slot6 = var18;
            var3 = undefined;
            if(!var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = {};
            var1 = 'expand_toggle';
            var11['name'] = var1;
            var17 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 15;
            var12 = var23[var1];
            var12 = var17.bind(var8)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var1 = var23[var1];
            var1 = var17.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.PbxI/x;
            var1 = var12.bind(var13)(var1);
            var11['label'] = var1;
            var1 = new Array(1);
            var1[0] = var11;
            var3 = var1;
case 24:
            var1 = {};
            var13 = _closure1_slot17;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 16;
            var11 = var17[var11];
            var12 = var12.bind(var8)(var11);
            var11 = {};
            var11['notification'] = var10;
            var23 = function onExpandPress() {
                var1 = {};
                var3 = _closure2_slot0;
                var4 = var3.type;
                var1['type'] = var4;
                var4 = _closure2_slot4;
                var4 = var4.guild_id;
                var1['guildId'] = var4;
                var4 = _closure2_slot4;
                var4 = var4.id;
                var1['channelId'] = var4;
                var4 = _closure2_slot5;
                var4 = var4.id;
                var1['messageId'] = var4;
                var3 = var3.inAppNotificationId;
                var1['inAppNotificationId'] = var3;
                var4 = 'quick_reaction';
                var1['accessory'] = var4;
                var13 = var1.type;
                var11 = var1.guildId;
                var10 = var1.channelId;
                var9 = var1.inAppNotificationId;
                var12 = var1.accessory;
                var8 = var1.messageId;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 32;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.trackWithMetadata;
                var3 = _closure1_slot13;
                var5 = var3.IN_APP_NOTIFICATION_ACCESSORY_CLICKED;
                var3 = {};
                var3['type'] = var13;
                var3['accessory'] = var12;
                var3['notif_guild_id'] = var11;
                var3['notif_channel_id'] = var10;
                var3['in_app_notification_id'] = var9;
                var3['message_id'] = var8;
                var3 = var6.bind(var7)(var5, var3);
                var3 = _closure2_slot2;
                var2 = _closure2_slot1;
                var2 = !var2;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var11['onExpandPress'] = var23;
            var11['reaction'] = var22;
            var11['expandedContentVisible'] = var21;
            var11['expandedSV'] = var20;
            var11['notificationGestureY'] = var19;
            var11['onAccessibilityExpand'] = var18;
            var11['onDismiss'] = var14;
            var11 = var13.bind(var8)(var12, var11);
            var1['content'] = var11;
            var12 = _closure1_slot0;
            var11 = 15;
            var13 = var17[var11];
            var13 = var12.bind(var8)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var11 = var17[var11];
            var11 = var12.bind(var8)(var11);
            var11 = var11.t;
            var12 = var11.Hjp1LH;
            var11 = {};
            var16 = var16.nick;
            var11['userName'] = var16;
            var15 = var15.content;
            var11['message'] = var15;
            var11 = var13.bind(var14)(var12, var11);
            var1['screenReaderAnnouncement'] = var11;
            var11 = function onPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 11;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.popAll;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 12;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.transitionToMessage;
                var3 = _closure2_slot4;
                var4 = var3.id;
                var2 = _closure2_slot5;
                var3 = var2.id;
                var2 = {};
                var7 = true;
                var2['navigationReplace'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1['onPress'] = var11;
            var11 = function onSettingsPress() {
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 11;
                var3 = var1[var3];
                var6 = undefined;
                var5 = var4.bind(var6)(var3);
                var4 = var5.pushLazy;
                var3 = _closure1_slot0;
                var2 = 14;
                var2 = var1[var2];
                var3 = var3.bind(var6)(var2);
                var2 = 13;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var6)(var2, var1);
                var2 = {};
                var1 = _closure2_slot4;
                var1 = var1.id;
                var2['channelId'] = var1;
                var1 = 'in-app-notification-settings-modal';
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var1['onSettingsPress'] = var11;
            var4 = var4.type;
            var1['channelType'] = var4;
            var4 = undefined;
            if(!var7) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var12 = _closure1_slot17;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 17;
            var7 = var13[var7];
            var7 = var11.bind(var8)(var7);
            var11 = var7.MessageNotificationReactBar;
            var7 = {};
            var7['notification'] = var10;
            var13 = function onReactionPress(arg1, arg2) {
                var5 = _closure2_slot3;
                var4 = _closure2_slot0;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var5.bind(var3)(var4, var2, var1);
                return var1;
            };
            var7['onReactionPress'] = var13;
            var4 = var12.bind(var8)(var11, var7);
case 26:
            var1['expandContent'] = var4;
            var4 = undefined;
            if(!var6) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = _closure1_slot17;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 18;
            var5 = var11[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.MessageReplyInput;
            var5 = {};
            var5['notification'] = var10;
            var5['onMessageSent'] = var9;
            var4 = var7.bind(var8)(var6, var5);
case 28:
            var1['expandContentFooter'] = var4;
            var1['accessibilityActions'] = var3;
            var2 = function onAccessibilityAction(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'expand_toggle';
                    if(!(var1 === var2)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onAccessibilityAction'] = var2;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
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
        var2 = _closure1_slot13;
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
    var _closure1_slot37 = var1;
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
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var9 = var4.StyleSheet;
    var _closure1_slot6 = var9;
    var4 = var4.Keyboard;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.InAppNotificationTypes;
    var _closure1_slot11 = var8;
    var8 = var4.UserSettingsSections;
    var _closure1_slot12 = var8;
    var8 = var4.AnalyticEvents;
    var _closure1_slot13 = var8;
    var8 = var4.AnalyticsSections;
    var _closure1_slot14 = var8;
    var8 = var4.AnalyticsObjects;
    var _closure1_slot15 = var8;
    var4 = var4.AnalyticsObjectTypes;
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = new Array(3);
    var8 = -100;
    var4[0] = var8;
    var4[1] = var7;
    var7 = 100;
    var4[2] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 200;
    var4['duration'] = var8;
    var7 = 8;
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
    var _closure1_slot20 = var4;
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
    var _closure1_slot21 = var4;
    var4 = {'extrapolateRight': 'clamp', 'extrapolateLeft': 'clamp'};
    var _closure1_slot22 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginLeft': 16, 'marginRight': 16};
    var4['animatedContainer'] = var9;
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'backgroundColor': 'transparent', 'marginTop': 8, 'top': 0, 'bottom': 0};
    var4['safeAreaContainer'] = var9;
    var9 = {'position': 'absolute', 'zIndex': 0};
    var4['backdrop'] = var9;
    var9 = {'overflow': 'hidden', 'alignSelf': 'center'};
    var4['expandContentContainer'] = var9;
    var9 = {'position': 'absolute', 'bottom': 4, 'left': 0, 'right': 0};
    var4['expandFooterContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx1(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('autodismissed');}}";
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx2(){const{runOnJS,setInitialized}=this.__closure;return runOnJS(setInitialized)(true);}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx3(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('timeout');}}";
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx4(){const{runOnJS,setPanning}=this.__closure;runOnJS(setPanning)(false);}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx5(event){const{velocityY,MIN_SWIPE_VELOCITY,MIN_SWIPE_DISTANCE,isExpandableNotification,notificationGestureY,expandedSV,runOnJS,setExpanded,withTiming,PAN_INPUT_RANGE,DEFAULT_ANIMATION_TIMING,handleDismissNotification,setPanning,withSpring}=this.__closure;const shouldDismiss=Math.abs(velocityY.get())>=MIN_SWIPE_VELOCITY||Math.abs(event.translationY)>=MIN_SWIPE_DISTANCE;if(isExpandableNotification&&event.translationY>MIN_SWIPE_DISTANCE){notificationGestureY.set(0);expandedSV.set(true);runOnJS(setExpanded)(true,'swipe');}else if(shouldDismiss&&event.translationY<=0){notificationGestureY.set(withTiming(event.translationY>0?PAN_INPUT_RANGE[2]:PAN_INPUT_RANGE[0],DEFAULT_ANIMATION_TIMING,'animate-always',function(finished){if(finished){runOnJS(handleDismissNotification)('swipe');}}));}else{runOnJS(setPanning)(false);notificationGestureY.set(withSpring(0,{damping:10,mass:1,stiffness:100,velocity:velocityY.get()},'animate-always'));}}";
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx6(event){const{startY,isExpandableNotification,notificationGestureY,velocityY}=this.__closure;const rawY=startY.get()+event.translationY;const newY=isExpandableNotification&&rawY>0?rawY:Math.min(rawY,startY.get());notificationGestureY.set(newY);velocityY.set(event.velocityY);}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx7(){const{startY,notificationGestureY,velocityY,runOnJS,setPanning}=this.__closure;startY.set(notificationGestureY.get());velocityY.set(0);runOnJS(setPanning)(true);}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = "function InAppNotificationContainerTsx8(finished){const{runOnJS,handleDismissNotification}=this.__closure;if(finished){runOnJS(handleDismissNotification)('swipe');}}";
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx9(){const{notificationGestureY,scale,isExpandableNotification,initialized,interpolate,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const gestureY=notificationGestureY.get();const scaleValue=scale.get();if(isExpandableNotification&&gestureY>0){return{transform:[{translateY:0},{scale:initialized?1:scaleValue}],opacity:initialized?1:scaleValue};}const scaleTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0.3,1,0.3],extrapolateConfig):scaleValue;const opacityTransform=initialized?interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig):scaleValue;return{transform:[{translateY:gestureY},{scale:scaleTransform}],opacity:opacityTransform};}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx10(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING)};}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx11(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING,withSpring}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),transform:[{translateY:withSpring(expandedSV.get()?0:-80,{dampingRatio:0.9,duration:350})},{scale:withTiming(expandedSV.get()?1:0.8,DEFAULT_ANIMATION_TIMING)}]};}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function InAppNotificationContainerTsx12(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),transform:[{scale:withTiming(expandedSV.get()?1:0.8,DEFAULT_ANIMATION_TIMING)}]};}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = 55;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/InAppNotificationContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppNotificationContainer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var30 = var1.notification;
            var _closure2_slot0 = var30;
            var4 = undefined;
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
            var1 = _closure1_slot23;
            var15 = var1.bind(var4)();
            var14 = _closure1_slot4;
            var3 = var14.useMemo;
            var2 = new Array(1);
            var2[0] = var30;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractGuildAndChannelAndMessageIdFromNotification;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var14)(var1, var2);
            var34 = var1.guildId;
            var _closure2_slot1 = var34;
            var27 = var1.channelId;
            var _closure2_slot2 = var27;
            var7 = var1.messageId;
            var _closure2_slot3 = var7;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = 8;
            var1 = var16[var17];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var26 = 0;
            var25 = var1.bind(var2)(var26);
            var _closure2_slot4 = var25;
            var1 = var16[var17];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var23 = var1.bind(var2)(var26);
            var _closure2_slot5 = var23;
            var1 = var16[var17];
            var3 = var9.bind(var4)(var1);
            var2 = var3.useSharedValue;
            var1 = 100;
            var36 = var2.bind(var3)(var1);
            var _closure2_slot6 = var36;
            var1 = var14.useState;
            var10 = false;
            var1 = var1.bind(var14)(var10);
            var6 = _closure1_slot3;
            var5 = 2;
            var1 = var6.bind(var4)(var1, var5);
            var21 = var1[var26];
            var _closure2_slot7 = var21;
            var3 = 1;
            var1 = var1[var3];
            var _closure2_slot8 = var1;
            var1 = var14.useState;
            var1 = var1.bind(var14)(var10);
            var1 = var6.bind(var4)(var1, var5);
            var37 = var1[var26];
            var _closure2_slot9 = var37;
            var19 = var1[var3];
            var _closure2_slot10 = var19;
            var1 = var14.useState;
            var1 = var1.bind(var14)(var10);
            var1 = var6.bind(var4)(var1, var5);
            var35 = var1[var26];
            var _closure2_slot11 = var35;
            var1 = var1[var3];
            var _closure2_slot12 = var1;
            var2 = var16[var17];
            var8 = var9.bind(var4)(var2);
            var2 = var8.useSharedValue;
            var10 = var2.bind(var8)(var10);
            var _closure2_slot13 = var10;
            var18 = _closure1_slot1;
            var2 = 34;
            var2 = var16[var2];
            var2 = var18.bind(var4)(var2);
            var12 = var2.bind(var4)(var10);
            var _closure2_slot14 = var12;
            var13 = var14.useCallback;
            var8 = new Array(5);
            var8[0] = var10;
            var8[1] = var30;
            var8[2] = var34;
            var8[3] = var27;
            var8[4] = var7;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var7 = arg2;
                    var2 = _closure2_slot13;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var5);
                    if(!var5) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 35;
                    var2 = var8[var2];
                    var3 = undefined;
                    var9 = var4.bind(var3)(var2);
                    var2 = var9.hideAllActionSheets;
                    var2 = var2.bind(var9)();
                    var2 = 32;
                    var2 = var8[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot13;
                    var2 = var1.IN_APP_NOTIFICATION_EXPANDED;
                    var1 = {};
                    var8 = _closure2_slot0;
                    var9 = var8.type;
                    var1['type'] = var9;
                    var9 = _closure2_slot1;
                    var1['notif_guild_id'] = var9;
                    var9 = _closure2_slot2;
                    var1['notif_channel_id'] = var9;
                    var8 = var8.inAppNotificationId;
                    var1['in_app_notification_id'] = var8;
                    var6 = _closure2_slot3;
                    var1['message_id'] = var6;
                    var6 = null;
                    var8 = var6 != var7;
                    var6 = 'unknown';
                    if(!var8) { _fun0005_ip = 34; continue _fun0005 }
case 3:
                    var6 = var7;
case 34:
                    var1['expand_source'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
case 32:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setActionSheetZIndex;
                    var2 = undefined;
                    if(!var5) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var2 = 1;
case 35:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var2, var8);
            var _closure2_slot15 = var8;
            var20 = var14.useCallback;
            var13 = new Array(2);
            var13[0] = var12;
            var13[1] = var8;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot14;
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var4 = _closure2_slot15;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var1 = true;
case 37:
                    return var1;
                }
            };
            var13 = var20.bind(var14)(var2, var13);
            var2 = 36;
            var2 = var16[var2];
            var2 = var18.bind(var4)(var2);
            var2 = var2.bind(var4)(var13, var12);
            var2 = var14.useState;
            var13 = null;
            var2 = var2.bind(var14)(var13);
            var2 = var6.bind(var4)(var2, var5);
            var6 = var2[var26];
            var5 = var2[var3];
            var _closure2_slot16 = var5;
            var3 = var14.useCallback;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var5;
            var2[2] = var1;
            var1 = function(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var4 = arg2;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 37;
                    var7 = var12[var5];
                    var1 = undefined;
                    var8 = var6.bind(var1)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var5 = var12[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.IMPACT_LIGHT;
                    var5 = var7.bind(var8)(var5);
                    var5 = 38;
                    var7 = var12[var5];
                    var11 = var6.bind(var1)(var7);
                    var10 = var11.addReaction;
                    var7 = var2.channel;
                    var9 = var7.id;
                    var7 = var2.message;
                    var17 = var7.id;
                    var7 = 39;
                    var7 = var12[var7];
                    var13 = var6.bind(var1)(var7);
                    var7 = var13.toReactionEmoji;
                    var16 = var7.bind(var13)(var4);
                    var5 = var12[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.ReactionLocations;
                    var15 = var5.IN_APP_NOTIFICATION;
                    var5 = {};
                    var12 = arg3;
                    var5['burst'] = var12;
                    var19 = var11;
                    var18 = var9;
                    var14 = var5;
                    var5 = var19[var10](var18, var17, var16, var15, var14, var13);
                    var7 = _closure1_slot10;
                    var6 = var7.ackMessageId;
                    var5 = var2.channel;
                    var5 = var5.id;
                    var9 = var6.bind(var7)(var5);
                    var5 = null;
                    var5 = var5 == var9;
                    if(var5) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 40;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.compare;
                    var6 = var2.message;
                    var6 = var6.id;
                    var7 = var7.bind(var8)(var9, var6);
                    var6 = 0;
                    var5 = var7 < var6;
case 39:
                    if(!var5) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var7 = var2.mentionCount;
                    var9 = _closure1_slot10;
                    var8 = var9.getMentionCount;
                    var6 = var2.channel;
                    var6 = var6.id;
                    var6 = var8.bind(var9)(var6);
                    var5 = var7 >= var6;
case 41:
                    if(!var5) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 41;
                    var5 = var7[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.ack;
                    var5 = var2.channel;
                    var18 = var5.id;
                    var5 = {};
                    var9 = _closure1_slot14;
                    var9 = var9.IN_APP_NOTIFICATION;
                    var5['section'] = var9;
                    var9 = _closure1_slot15;
                    var9 = var9.ACK_IN_APP_NOTIFICATION_ACTION;
                    var5['object'] = var9;
                    var3 = _closure1_slot16;
                    var3 = var3.ACK_SEMI_AUTOMATIC;
                    var5['objectType'] = var3;
                    var2 = var2.message;
                    var14 = var2.id;
                    var19 = var8;
                    var17 = var5;
                    var16 = true;
                    var15 = true;
                    var2 = var19[var7](var18, var17, var16, var15, var14, var13);
case 43:
                    var5 = _closure2_slot15;
                    var3 = false;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot16;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot12;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5 = var3.bind(var14)(var1, var2);
            var3 = var14.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var4 = _closure2_slot15;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot12;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var3.bind(var14)(var1, var2);
            var1 = 42;
            var1 = var16[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useCanExpandInAppNotification;
            var14 = 'InAppNotificationContainer';
            var1 = var1.bind(var2)(var14);
            var1 = var1.canExpand;
            var2 = 43;
            var2 = var16[var2];
            var9 = var9.bind(var4)(var2);
            var2 = var9.useInAppNotificationReact;
            var2 = var2.bind(var9)(var14);
            var14 = var2.quickReact;
            var9 = var30.type;
            var2 = _closure1_slot11;
            var2 = var2.MESSAGE;
            var33 = var9 === var2;
            if(!var33) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var33 = var1;
case 45:
            _closure2_slot17 = var33;
            var16 = _closure1_slot4;
            var9 = var16.useCallback;
            var2 = new Array(4);
            var2[0] = var30;
            var2[1] = var34;
            var2[2] = var27;
            var2[3] = var7;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var6 = arg1;
                    var3 = null;
                    if(!(var3 != var6)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var4 = _closure1_slot37;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var7 = var5.type;
                    var2['type'] = var7;
                    var7 = _closure2_slot1;
                    var2['guildId'] = var7;
                    var7 = _closure2_slot2;
                    var2['channelId'] = var7;
                    var2['dismissReason'] = var6;
                    var5 = var5.inAppNotificationId;
                    var2['inAppNotificationId'] = var5;
                    var1 = _closure2_slot3;
                    var2['messageId'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
case 47:
                    var2 = _closure2_slot0;
                    var2 = var2.onDismiss;
                    if(!(var3 != var2)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var2 = _closure2_slot0;
                    var1 = var2.onDismiss;
                    var1 = var1.bind(var2)();
case 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var9.bind(var16)(var1, var2);
            _closure2_slot18 = var22;
            var2 = _closure1_slot36;
            var1 = {};
            var1['notification'] = var30;
            var9 = var33;
            if(var9) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var9 = var14;
case 51:
            var1['canExpand'] = var9;
            var1['isInExpandableNotificationExperiment'] = var33;
            var1['isExpanded'] = var12;
            var1['expandedSV'] = var10;
            var1['setExpanded'] = var8;
            var1['reaction'] = var6;
            var1['onReactionPress'] = var5;
            var1['onMessageSent'] = var3;
            var3 = null;
            if(!var33) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var3 = var25;
case 53:
            var1['notificationGestureY'] = var3;
            var3 = null;
            if(!var33) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var3 = var22;
case 55:
            var1['onDismiss'] = var3;
            var2 = var2.bind(var4)(var1);
            var28 = var2.content;
            var1 = var2.screenReaderAnnouncement;
            _closure2_slot19 = var1;
            var6 = var2.onPress;
            _closure2_slot20 = var6;
            var5 = var2.onSettingsPress;
            _closure2_slot21 = var5;
            var16 = var2.channelType;
            _closure2_slot22 = var16;
            var24 = var2.expandContent;
            var14 = var2.expandContentFooter;
            var31 = var2.accessibilityActions;
            var29 = var2.onAccessibilityAction;
            var9 = _closure1_slot4;
            var2 = var9.useRef;
            var2 = var2.bind(var9)(var13);
            _closure2_slot23 = var2;
            var18 = var9.useEffect;
            var3 = new Array(3);
            var3[0] = var35;
            var3[1] = var25;
            var3[2] = var22;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot11;
                    if(!var2) { _fun0009_ip = 31; continue _fun0009 }
case 57:
                    var3 = _closure2_slot23;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 == var4;
case 31:
                    if(!var2) { _fun0009_ip = 58; continue _fun0009 }
case 23:
                    var2 = _closure2_slot23;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var4 = _closure2_slot4;
                        var3 = var4.set;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var1 = 44;
                        var5 = var14[var1];
                        var1 = undefined;
                        var9 = var13.bind(var1)(var5);
                        var8 = var9.withTiming;
                        var6 = _closure1_slot19;
                        var5 = 0;
                        var7 = var6[var5];
                        var17 = _closure1_slot21;
                        var5 = function n(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 8;
                                var1 = var3[var1];
                                var3 = undefined;
                                var4 = var2.bind(var3)(var1);
                                var2 = var4.runOnJS;
                                var1 = _closure2_slot18;
                                var2 = var2.bind(var4)(var1);
                                var1 = 'autodismissed';
                                var1 = var2.bind(var3)(var1);
case 59:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var10 = {};
                        var12 = 8;
                        var12 = var14[var12];
                        var12 = var13.bind(var1)(var12);
                        var12 = var12.runOnJS;
                        var10['runOnJS'] = var12;
                        var11 = _closure2_slot18;
                        var10['handleDismissNotification'] = var11;
                        var5['__closure'] = var10;
                        var10 = 1150739008183.0;
                        var5['__workletHash'] = var10;
                        var2 = _closure1_slot24;
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
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var18.bind(var9)(var2, var3);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var18 = 45;
            var20 = var2[var18];
            var39 = var3.bind(var4)(var20);
            var38 = var39.useUnmountEffect;
            var20 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.setActionSheetZIndex;
                    var2 = var2.bind(var4)(var1);
                    var4 = _closure2_slot23;
                    var5 = var4.current;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                    var4 = global;
                    var5 = var4.clearTimeout;
                    var4 = _closure2_slot23;
                    var4 = var4.current;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.cancelAnimation;
                    var2 = _closure2_slot4;
                    var2 = var3.bind(var4)(var2);
case 61:
                    return var1;
                }
            };
            var20 = var38.bind(var39)(var20);
            var20 = _closure1_slot1;
            var18 = var2[var18];
            var20 = var20.bind(var4)(var18);
            var18 = function() {
                var4 = _closure2_slot5;
                var3 = var4.set;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 44;
                var5 = var14[var5];
                var12 = undefined;
                var9 = var13.bind(var12)(var5);
                var8 = var9.withTiming;
                var17 = _closure1_slot20;
                var6 = function n() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot8;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = {};
                var11 = 8;
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot8;
                var5['setInitialized'] = var10;
                var6['__closure'] = var5;
                var5 = 11548697745556.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot25;
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
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.cancelAnimation;
                    var1 = _closure2_slot5;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var18 = var20.bind(var4)(var18);
            var20 = var9.useEffect;
            var18 = new Array(7);
            var18[0] = var21;
            var38 = var30.type;
            var18[1] = var38;
            var18[2] = var34;
            var18[3] = var27;
            var38 = var30.inAppNotificationId;
            var18[4] = var38;
            var18[5] = var7;
            var18[6] = var16;
            var16 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0012_ip = 63; continue _fun0012 }
case 57:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 29;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
                    var2 = var1.IN_APP_NOTIFICATION_SHOWN;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var7 = var6.type;
                    var1['type'] = var7;
                    var7 = _closure2_slot1;
                    var1['guild_id'] = var7;
                    var7 = _closure2_slot2;
                    var1['channel_id'] = var7;
                    var6 = var6.inAppNotificationId;
                    var1['in_app_notification_id'] = var6;
                    var6 = _closure2_slot3;
                    var1['message_id'] = var6;
                    var5 = _closure2_slot22;
                    var1['channel_type'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var20.bind(var9)(var16, var18);
            var16 = var30.duration;
            _closure2_slot24 = var16;
            var20 = var9.useEffect;
            var18 = new Array(9);
            var18[0] = var21;
            var18[1] = var37;
            var18[2] = var30;
            var18[3] = var36;
            var18[4] = var22;
            var18[5] = var12;
            var18[6] = var10;
            var18[7] = var16;
            var18[8] = var35;
            var16 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0013_ip = 64; continue _fun0013 }
case 31:
                    var3 = _closure2_slot24;
                    var2 = inf;
                    if(!(var3 !== var2)) { _fun0013_ip = 64; continue _fun0013 }
case 66:
                    var2 = _closure2_slot14;
                    if(var2) { _fun0013_ip = 64; continue _fun0013 }
case 67:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0013_ip = 64; continue _fun0013 }
case 68:
                    var4 = _closure2_slot6;
                    var2 = var4.get;
                    var6 = var2.bind(var4)();
                    var3 = var4.set;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 44;
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
                    var11 = 8;
                    var5 = var14[var11];
                    var5 = var13.bind(var12)(var5);
                    var5 = var5.Easing;
                    var5 = var5.linear;
                    var7['easing'] = var5;
                    var6 = function n(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0014_ip = 69; continue _fun0014 }
case 60:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot18;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'timeout';
                            var1 = var2.bind(var3)(var1);
case 69:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot18;
                    var5['handleDismissNotification'] = var10;
                    var6['__closure'] = var5;
                    var5 = 14406601796666.0;
                    var6['__workletHash'] = var5;
                    var2 = _closure1_slot26;
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
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.cancelAnimation;
                        var2 = _closure2_slot6;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var20.bind(var9)(var16, var18);
            var16 = var2[var17];
            var18 = var3.bind(var4)(var16);
            var16 = var18.useSharedValue;
            var20 = var16.bind(var18)(var26);
            _closure2_slot25 = var20;
            var16 = var2[var17];
            var18 = var3.bind(var4)(var16);
            var16 = var18.useSharedValue;
            var16 = var16.bind(var18)(var26);
            _closure2_slot26 = var16;
            var37 = var9.useCallback;
            var26 = new Array(2);
            var26[0] = var16;
            var26[1] = var25;
            var18 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
                    if(var1) { _fun0015_ip = 70; continue _fun0015 }
case 71:
                    var4 = var3.Math;
                    var3 = var4.abs;
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var3 = var3.bind(var4)(var2);
                    var2 = 5;
                    var1 = var3 >= var2;
case 70:
                    return var1;
                }
            };
            var37 = var37.bind(var9)(var18, var26);
            _closure2_slot27 = var37;
            var26 = var9.useCallback;
            var18 = new Array(8);
            var18[0] = var37;
            var37 = var30.type;
            var18[1] = var37;
            var37 = var30.inAppNotificationId;
            var18[2] = var37;
            var18[3] = var34;
            var18[4] = var27;
            var18[5] = var7;
            var18[6] = var36;
            var18[7] = var12;
            var7 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = arg2;
                    var3 = _closure2_slot27;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    if(!var3) { _fun0016_ip = 72; continue _fun0016 }
case 73:
                    var4 = _closure2_slot14;
                    var3 = !var4;
case 72:
                    if(var3) { _fun0016_ip = 74; continue _fun0016 }
case 75:
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
                    var7 = _closure2_slot1;
                    var4['notif_guild_id'] = var7;
                    var7 = _closure2_slot2;
                    var4['notif_channel_id'] = var7;
                    var7 = _closure2_slot3;
                    var4['message_id'] = var7;
                    var3 = var3.inAppNotificationId;
                    var4['in_app_notification_id'] = var3;
                    var3 = global;
                    var8 = var3.Math;
                    var7 = var8.floor;
                    var3 = _closure2_slot6;
                    var10 = 'number';
                    var3 = typeof var3;
                    if(!(var10 !== var3)) { _fun0016_ip = 3; continue _fun0016 }
case 76:
                    var10 = _closure2_slot6;
                    var3 = var10.get;
                    var3 = var3.bind(var10)();
                    _fun0016_ip = 77; continue _fun0016;
case 3:
                    var3 = _closure2_slot6;
case 77:
                    var3 = var7.bind(var8)(var3);
                    var4['percent'] = var3;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0016_ip = 74; continue _fun0016 }
case 78:
                    var2 = var2.bind(var1)();
case 74:
                    return var1;
                }
            };
            var18 = var26.bind(var9)(var7, var18);
            _closure2_slot28 = var18;
            var26 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var18;
            var7[1] = var6;
            var6 = function() {
                var4 = _closure2_slot28;
                var2 = _closure1_slot13;
                var3 = var2.IN_APP_NOTIFICATION_CLICKED;
                var2 = _closure2_slot20;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var37 = var26.bind(var9)(var6, var7);
            var7 = var9.useCallback;
            var6 = new Array(4);
            var6[0] = var18;
            var6[1] = var5;
            var6[2] = var33;
            var6[3] = var8;
            var5 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var6 = _closure2_slot28;
                    var1 = _closure1_slot13;
                    var5 = var1.IN_APP_NOTIFICATION_LONG_PRESSED;
                    var4 = _closure2_slot21;
                    var1 = undefined;
                    var4 = var6.bind(var1)(var5, var4);
                    var4 = _closure2_slot17;
                    if(var4) { _fun0017_ip = 79; continue _fun0017 }
case 80:
                    var5 = _closure2_slot28;
                    var3 = _closure1_slot13;
                    var4 = var3.IN_APP_NOTIFICATION_LONG_PRESSED;
                    var3 = _closure2_slot21;
                    var3 = var5.bind(var1)(var4, var3);
                    _fun0017_ip = 81; continue _fun0017;
case 79:
                    var4 = _closure2_slot15;
                    var3 = true;
                    var2 = 'long_press';
                    var2 = var4.bind(var1)(var3, var2);
case 81:
                    return var1;
                }
            };
            var34 = var7.bind(var9)(var5, var6);
            var9 = 46;
            var2 = var2[var9];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Gesture;
            var2 = var3.Pan;
            var5 = var2.bind(var3)();
            var3 = var5.enabled;
            var2 = !var12;
            if(!var2) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var2 = !var35;
case 82:
            var7 = var3.bind(var5)(var2);
            var6 = var7.onBegin;
            var3 = function vi() {
                var4 = _closure2_slot25;
                var3 = var4.set;
                var5 = _closure2_slot4;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                var4 = _closure2_slot26;
                var3 = var4.set;
                var1 = 0;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.runOnJS;
                var2 = _closure2_slot10;
                var3 = var3.bind(var4)(var2);
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18 = {};
            var18['startY'] = var20;
            var18['notificationGestureY'] = var25;
            var18['velocityY'] = var16;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var26 = var5[var17];
            var26 = var2.bind(var4)(var26);
            var26 = var26.runOnJS;
            var18['runOnJS'] = var26;
            var18['setPanning'] = var19;
            var3['__closure'] = var18;
            var18 = 11316955045022.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot30;
            var3['__initData'] = var18;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onUpdate;
            var3 = function Yi(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure2_slot25;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = var1.translationY;
                    var7 = var4 + var3;
                    var3 = _closure2_slot17;
                    if(!var3) { _fun0018_ip = 71; continue _fun0018 }
case 84:
                    var3 = 0;
                    var5 = var7;
                    if(!(!(var5 > var3))) { _fun0018_ip = 85; continue _fun0018 }
case 71:
                    var3 = global;
                    var6 = var3.Math;
                    var4 = var6.min;
                    var8 = _closure2_slot25;
                    var3 = var8.get;
                    var3 = var3.bind(var8)();
                    var5 = var4.bind(var6)(var7, var3);
case 85:
                    var4 = _closure2_slot4;
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
            var18 = {};
            var18['startY'] = var20;
            var18['isExpandableNotification'] = var33;
            var18['notificationGestureY'] = var25;
            var18['velocityY'] = var16;
            var3['__closure'] = var18;
            var18 = 16677375054247.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot29;
            var3['__initData'] = var18;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onEnd;
            var3 = function Di(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var5 = arg1;
                    var3 = global;
                    var6 = var3.Math;
                    var4 = var6.abs;
                    var7 = _closure2_slot26;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var4 = var4.bind(var6)(var2);
                    var2 = 100;
                    var2 = var4 >= var2;
                    if(var2) { _fun0019_ip = 85; continue _fun0019 }
case 86:
                    var6 = var3.Math;
                    var4 = var6.abs;
                    var3 = var5.translationY;
                    var4 = var4.bind(var6)(var3);
                    var3 = 25;
                    var2 = var4 >= var3;
case 85:
                    var3 = _closure2_slot17;
                    if(!var3) { _fun0019_ip = 87; continue _fun0019 }
case 88:
                    var4 = var5.translationY;
                    var3 = 25;
                    if(!(!(var4 > var3))) { _fun0019_ip = 89; continue _fun0019 }
case 87:
                    if(!var2) { _fun0019_ip = 90; continue _fun0019 }
case 91:
                    var2 = var5.translationY;
                    var6 = 0;
                    if(!(!(var2 <= var6))) { _fun0019_ip = 92; continue _fun0019 }
case 90:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 8;
                    var2 = var9[var2];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot10;
                    var3 = var3.bind(var4)(var2);
                    var2 = false;
                    var2 = var3.bind(var7)(var2);
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var2 = 47;
                    var2 = var9[var2];
                    var10 = var8.bind(var7)(var2);
                    var9 = var10.withSpring;
                    var8 = {'damping': 10, 'mass': 1, 'stiffness': 100};
                    var7 = _closure2_slot26;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var8['velocity'] = var2;
                    var7 = 0;
                    var2 = 'animate-always';
                    var2 = var9.bind(var10)(var7, var8, var2);
                    var2 = var3.bind(var4)(var2);
                    _fun0019_ip = 93; continue _fun0019;
case 92:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 44;
                    var7 = var9[var7];
                    var13 = undefined;
                    var9 = var8.bind(var13)(var7);
                    var8 = var9.withTiming;
                    var5 = var5.translationY;
                    if(!(!(var5 > var6))) { _fun0019_ip = 94; continue _fun0019 }
case 95:
                    var5 = _closure1_slot19;
                    var7 = var5[var6];
                    _fun0019_ip = 96; continue _fun0019;
case 94:
                    var6 = _closure1_slot19;
                    var5 = 2;
                    var7 = var6[var5];
case 96:
                    var17 = _closure1_slot21;
                    var5 = function t(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0020_ip = 59; continue _fun0020 }
case 60:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot18;
                            var2 = var2.bind(var4)(var1);
                            var1 = 'swipe';
                            var1 = var2.bind(var3)(var1);
case 59:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = {};
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 8;
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.runOnJS;
                    var10['runOnJS'] = var11;
                    var11 = _closure2_slot18;
                    var10['handleDismissNotification'] = var11;
                    var5['__closure'] = var10;
                    var10 = 1684596854482.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot31;
                    var5['__initData'] = var2;
                    var16 = 'animate-always';
                    var19 = var9;
                    var18 = var7;
                    var15 = var5;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
                    _fun0019_ip = 93; continue _fun0019;
case 89:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot13;
                    var2 = var3.set;
                    var4 = true;
                    var2 = var2.bind(var3)(var4);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.runOnJS;
                    var1 = _closure2_slot15;
                    var2 = var2.bind(var5)(var1);
                    var1 = 'swipe';
                    var1 = var2.bind(var3)(var4, var1);
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = {'velocityY': null, 'MIN_SWIPE_VELOCITY': 100, 'MIN_SWIPE_DISTANCE': 25};
            var18['velocityY'] = var16;
            var18['isExpandableNotification'] = var33;
            var18['notificationGestureY'] = var25;
            var18['expandedSV'] = var10;
            var16 = var5[var17];
            var16 = var2.bind(var4)(var16);
            var16 = var16.runOnJS;
            var18['runOnJS'] = var16;
            var18['setExpanded'] = var8;
            var16 = 44;
            var8 = var5[var16];
            var8 = var2.bind(var4)(var8);
            var8 = var8.withTiming;
            var18['withTiming'] = var8;
            var20 = _closure1_slot19;
            var18['PAN_INPUT_RANGE'] = var20;
            var8 = _closure1_slot21;
            var18['DEFAULT_ANIMATION_TIMING'] = var8;
            var18['handleDismissNotification'] = var22;
            var18['setPanning'] = var19;
            var22 = 47;
            var26 = var5[var22];
            var26 = var2.bind(var4)(var26);
            var26 = var26.withSpring;
            var18['withSpring'] = var26;
            var3['__closure'] = var18;
            var18 = 5165226193044.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot28;
            var3['__initData'] = var18;
            var7 = var6.bind(var7)(var3);
            var6 = var7.onFinalize;
            var3 = function bi() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot10;
                var3 = var3.bind(var4)(var2);
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18 = {};
            var26 = var5[var17];
            var26 = var2.bind(var4)(var26);
            var26 = var26.runOnJS;
            var18['runOnJS'] = var26;
            var18['setPanning'] = var19;
            var3['__closure'] = var18;
            var18 = 2178187669683.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot27;
            var3['__initData'] = var18;
            var19 = var6.bind(var7)(var3);
            var3 = var5[var17];
            var7 = var2.bind(var4)(var3);
            var6 = var7.useAnimatedStyle;
            var3 = function Ri() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var11 = var1.bind(var2)();
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var1 = _closure2_slot17;
                    if(!var1) { _fun0021_ip = 71; continue _fun0021 }
case 84:
                    var6 = 0;
                    if(!(!(var11 > var6))) { _fun0021_ip = 97; continue _fun0021 }
case 71:
                    var1 = {};
                    var3 = {};
                    var3['translateY'] = var11;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var8 = _closure2_slot7;
                    var7 = var4;
                    if(!var8) { _fun0021_ip = 98; continue _fun0021 }
case 99:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var9 = 8;
                    var10 = var10[var9];
                    var9 = undefined;
                    var13 = var12.bind(var9)(var10);
                    var12 = var13.interpolate;
                    var16 = _closure1_slot19;
                    var14 = _closure1_slot22;
                    var15 = [0.3, 1, 0.3];
                    var18 = var13;
                    var17 = var11;
                    var7 = var18[var12](var17, var16, var15, var14, var13);
case 98:
                    var3['scale'] = var7;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    var3 = _closure2_slot7;
                    var2 = var4;
                    if(!var3) { _fun0021_ip = 100; continue _fun0021 }
case 101:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 8;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.interpolate;
                    var16 = _closure1_slot19;
                    var14 = _closure1_slot22;
                    var15 = [0, 1, 0];
                    var18 = var10;
                    var17 = var11;
                    var2 = var18[var9](var17, var16, var15, var14, var13);
case 100:
                    var1['opacity'] = var2;
                    _fun0021_ip = 102; continue _fun0021;
case 97:
                    var2 = {};
                    var3 = {};
                    var3['translateY'] = var6;
                    var6 = new Array(2);
                    var6[0] = var3;
                    var7 = {};
                    var9 = _closure2_slot7;
                    var3 = 1;
                    var8 = var3;
                    if(var9) { _fun0021_ip = 103; continue _fun0021 }
case 42:
                    var8 = var4;
case 103:
                    var7['scale'] = var8;
                    var6[1] = var7;
                    var2['transform'] = var6;
                    var5 = _closure2_slot7;
                    if(var5) { _fun0021_ip = 104; continue _fun0021 }
case 105:
                    var3 = var4;
case 104:
                    var2['opacity'] = var3;
                    var1 = var2;
case 102:
                    return var1;
                }
            };
            var18 = {};
            var18['notificationGestureY'] = var25;
            var18['scale'] = var23;
            var18['isExpandableNotification'] = var33;
            var18['initialized'] = var21;
            var21 = var5[var17];
            var21 = var2.bind(var4)(var21);
            var21 = var21.interpolate;
            var18['interpolate'] = var21;
            var18['PAN_INPUT_RANGE'] = var20;
            var20 = _closure1_slot22;
            var18['extrapolateConfig'] = var20;
            var3['__closure'] = var18;
            var18 = 16646039956641.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot32;
            var3['__initData'] = var18;
            var39 = var6.bind(var7)(var3);
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure2_slot19;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0022_ip = 59; continue _fun0022 }
case 106:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 48;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot19;
                    var1 = var2.bind(var3)(var1);
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var1 = 49;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var6.bind(var7)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 50;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var21 = var1.width;
            var20 = var1.height;
            var1 = var5[var17];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function zi() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 44;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot13;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0023_ip = 67; continue _fun0023 }
case 107:
                    var3 = 1;
case 67:
                    var2 = _closure1_slot21;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var23 = var5[var16];
            var23 = var2.bind(var4)(var23);
            var23 = var23.withTiming;
            var7['withTiming'] = var23;
            var7['expandedSV'] = var10;
            var7['DEFAULT_ANIMATION_TIMING'] = var8;
            var1['__closure'] = var7;
            var7 = 17343110607400.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot33;
            var1['__initData'] = var7;
            var27 = var3.bind(var6)(var1);
            var1 = var5[var17];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function Wi() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 44;
                    var2 = var2[var9];
                    var8 = undefined;
                    var10 = var3.bind(var8)(var2);
                    var7 = var10.withTiming;
                    var3 = _closure2_slot13;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var6 = 0;
                    if(!var3) { _fun0024_ip = 67; continue _fun0024 }
case 107:
                    var6 = 1;
case 67:
                    var3 = _closure1_slot21;
                    var3 = var7.bind(var10)(var6, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 47;
                    var6 = var10[var6];
                    var10 = var7.bind(var8)(var6);
                    var7 = var10.withSpring;
                    var11 = _closure2_slot13;
                    var6 = var11.get;
                    var11 = var6.bind(var11)();
                    var6 = -80;
                    if(!var11) { _fun0024_ip = 108; continue _fun0024 }
case 90:
                    var6 = 0;
case 108:
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
                    var8 = _closure2_slot13;
                    var5 = var8.get;
                    var8 = var5.bind(var8)();
                    var5 = 0.8;
                    if(!var8) { _fun0024_ip = 109; continue _fun0024 }
case 110:
                    var5 = 1;
case 109:
                    var4 = _closure1_slot21;
                    var4 = var6.bind(var7)(var5, var4);
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var23 = var5[var16];
            var23 = var2.bind(var4)(var23);
            var23 = var23.withTiming;
            var7['withTiming'] = var23;
            var7['expandedSV'] = var10;
            var7['DEFAULT_ANIMATION_TIMING'] = var8;
            var22 = var5[var22];
            var22 = var2.bind(var4)(var22);
            var22 = var22.withSpring;
            var7['withSpring'] = var22;
            var1['__closure'] = var7;
            var7 = 1094883825331.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot34;
            var1['__initData'] = var7;
            var25 = var3.bind(var6)(var1);
            var1 = var5[var17];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function ji() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 44;
                    var3 = var3[var8];
                    var7 = undefined;
                    var9 = var4.bind(var7)(var3);
                    var6 = var9.withTiming;
                    var5 = _closure2_slot13;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = 0;
                    if(!var3) { _fun0025_ip = 67; continue _fun0025 }
case 107:
                    var5 = 1;
case 67:
                    var3 = _closure1_slot21;
                    var3 = var6.bind(var9)(var5, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.withTiming;
                    var7 = _closure2_slot13;
                    var4 = var7.get;
                    var7 = var4.bind(var7)();
                    var4 = 0.8;
                    if(!var7) { _fun0025_ip = 111; continue _fun0025 }
case 112:
                    var4 = 1;
case 111:
                    var2 = _closure1_slot21;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var16 = var5[var16];
            var16 = var2.bind(var4)(var16);
            var16 = var16.withTiming;
            var7['withTiming'] = var16;
            var7['expandedSV'] = var10;
            var7['DEFAULT_ANIMATION_TIMING'] = var8;
            var1['__closure'] = var7;
            var7 = 11360245409289.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot35;
            var1['__initData'] = var7;
            var16 = var3.bind(var6)(var1);
            var3 = _closure1_slot18;
            var1 = 51;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.OverlayView;
            var1 = {};
            var5 = _closure1_slot6;
            var5 = var5.absoluteFill;
            var1['style'] = var5;
            var23 = 'box-none';
            var1['pointerEvents'] = var23;
            var8 = _closure1_slot17;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = var15.backdrop;
            var7 = new Array(2);
            var7[0] = var10;
            var10 = {};
            var10['width'] = var21;
            var10['height'] = var20;
            var7[1] = var10;
            var5['style'] = var7;
            var21 = 'none';
            var7 = var21;
            if(!var12) { _fun0004_ip = 113; continue _fun0004 }
case 114:
            var7 = 'auto';
case 113:
            var5['pointerEvents'] = var7;
            var26 = _closure1_slot17;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var20 = 52;
            var20 = var10[var20];
            var20 = var7.bind(var4)(var20);
            var22 = var20.Backdrop;
            var20 = {};
            var20['style'] = var27;
            var27 = function onDismiss() {
                var2 = _closure1_slot7;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var3 = _closure2_slot15;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20['onDismiss'] = var27;
            var27 = 15;
            var38 = var10[var27];
            var38 = var7.bind(var4)(var38);
            var40 = var38.intl;
            var38 = var40.string;
            var27 = var10[var27];
            var27 = var7.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27["9sewOj"];
            var27 = var38.bind(var40)(var27);
            var20['accessibilityLabel'] = var27;
            var20 = var26.bind(var4)(var22, var20);
            var5['children'] = var20;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot18;
            var6 = 53;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {'top': true, 'bottom': true, 'style': null, 'pointerEvents': 'box-none'};
            var10 = var15.safeAreaContainer;
            var6['style'] = var10;
            var10 = undefined;
            if(!var18) { _fun0004_ip = 115; continue _fun0004 }
case 116:
            var10 = 'no-hide-descendants';
case 115:
            var6['importantForAccessibility'] = var10;
            var18 = _closure1_slot17;
            var26 = _closure1_slot0;
            var38 = _closure1_slot2;
            var9 = var38[var9];
            var9 = var26.bind(var4)(var9);
            var10 = var9.GestureDetector;
            var9 = {};
            var9['gesture'] = var19;
            var22 = _closure1_slot17;
            var20 = _closure1_slot1;
            var19 = var38[var17];
            var19 = var20.bind(var4)(var19);
            var20 = var19.View;
            var19 = {};
            var40 = var15.animatedContainer;
            var27 = new Array(2);
            var27[0] = var40;
            var27[1] = var39;
            var19['style'] = var27;
            var19['pointerEvents'] = var23;
            var27 = _closure1_slot17;
            var23 = 54;
            var23 = var38[var23];
            var23 = var26.bind(var4)(var23);
            var26 = var23.NotificationPressable;
            var23 = {};
            var23['onPress'] = var37;
            var23['onLongPress'] = var34;
            var38 = var30.duration;
            var37 = inf;
            var34 = undefined;
            if(!(var38 !== var37)) { _fun0004_ip = 117; continue _fun0004 }
case 118:
            var34 = var36;
case 117:
            var23['percent'] = var34;
            var34 = var12;
            if(var34) { _fun0004_ip = 119; continue _fun0004 }
case 120:
            var34 = var35;
case 119:
            var23['hideProgress'] = var34;
            var23['isExpandableNotification'] = var33;
            var32 = function onAccessibilityEscape() {
                var3 = _closure2_slot18;
                var2 = undefined;
                var1 = 'accessibility_escape';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var23['onAccessibilityEscape'] = var32;
            var23['accessibilityActions'] = var31;
            var30 = var30.type;
            var23['type'] = var30;
            var23['onAccessibilityAction'] = var29;
            var23['children'] = var28;
            var23 = var27.bind(var4)(var26, var23);
            var19['children'] = var23;
            var19 = var22.bind(var4)(var20, var19);
            var9['children'] = var19;
            var10 = var18.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var18 = var13 != var24;
            var10 = null;
            if(!var18) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            var20 = _closure1_slot17;
            var19 = _closure1_slot5;
            var18 = {};
            var22 = var15.expandContentContainer;
            var18['style'] = var22;
            if(!var12) { _fun0004_ip = 123; continue _fun0004 }
case 124:
            var21 = 'auto';
case 123:
            var18['pointerEvents'] = var21;
            var23 = _closure1_slot17;
            var22 = _closure1_slot1;
            var21 = _closure1_slot2;
            var21 = var21[var17];
            var21 = var22.bind(var4)(var21);
            var22 = var21.View;
            var21 = {};
            var21['style'] = var25;
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var18['children'] = var21;
            var10 = var20.bind(var4)(var19, var18);
case 121:
            var9[1] = var10;
            var10 = null;
            if(!var12) { _fun0004_ip = 125; continue _fun0004 }
case 126:
            var12 = var13 != var14;
            var10 = null;
            if(!var12) { _fun0004_ip = 125; continue _fun0004 }
case 127:
            var13 = _closure1_slot17;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var17];
            var11 = var12.bind(var4)(var11);
            var12 = var11.View;
            var11 = {};
            var17 = var15.expandFooterContainer;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var11['style'] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 125:
            var9[2] = var10;
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