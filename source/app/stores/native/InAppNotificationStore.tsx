// app/stores/native/InAppNotificationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var10 = function handleAlertMessage() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.allowInAppNotifications;
            var1 = var1.bind(var2)();
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = false;
            return var1;
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 31;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.shouldShowRaidInAppNotification;
            var2 = var1.bind(var2)();
            var1 = var2.show;
            var12 = var2.guildId;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = null;
            if(!(var1 != var12)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var3 = _closure1_slot15;
            var2 = var3.getGuild;
            var8 = var2.bind(var3)(var12);
            var _closure2_slot0 = var8;
            if(!(var1 != var8)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = _closure1_slot14;
            var3 = var5.getChannel;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 32;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var8);
            var9 = var3.bind(var5)(var2);
            var _closure2_slot1 = var9;
            var1 = var1 != var9;
            if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = _closure1_slot17;
            var2 = var3.getChannelId;
            var3 = var2.bind(var3)();
            var2 = var9.id;
            var2 = var3 !== var2;
            if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = _closure1_slot24;
            var5 = var6.wasRecentlyDismissed;
            var3 = {};
            var3['guild'] = var8;
            var3['channel'] = var9;
            var3 = var5.bind(var6)(var3);
            var3 = !var3;
            if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = _closure1_slot29;
            var5 = {};
            var7 = {};
            var13 = _closure1_slot21;
            var13 = var13.ALERT;
            var7['type'] = var13;
            var7['key'] = var12;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 33;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.Millis;
            var12 = var11.SECOND;
            var11 = 30;
            var11 = var11 * var12;
            var7['duration'] = var11;
            var10 = function onDismiss() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 30;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.clearNotification;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot24;
                var3 = var4.dismissNotification;
                var2 = {};
                var6 = _closure2_slot0;
                var2['guild'] = var6;
                var5 = _closure2_slot1;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onDismiss'] = var10;
            var7['channel'] = var9;
            var7['guild'] = var8;
            var5['notification'] = var7;
            var5 = var6.bind(var4)(var5);
            var3 = undefined;
case 17:
            var2 = var3;
case 15:
            var1 = var2;
case 13:
            return var1;
case 11:
            var1 = false;
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var10;
    var9 = function handleEnqueueNotification(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.notification;
            var3 = _closure1_slot26;
            var2 = var3.enqueue;
            var2 = var2.bind(var3)(var4);
            var3 = _closure1_slot25;
            var2 = null;
            if(!(var2 == var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = _closure1_slot32;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 19:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var9;
    var1 = function trackSuppressed(arg1, arg2, arg3) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 40;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot19;
        var3 = var2.IN_APP_NOTIFICATION_SUPPRESSED;
        var2 = {};
        var6 = arg1;
        var2['type'] = var6;
        var6 = arg2;
        var2['channel_id'] = var6;
        var6 = arg3;
        var2['guild_id'] = var6;
        var6 = '2026-01-in-app-notifications-negative-test';
        var2['suppress_reason'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function trackDismissed(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var4 = var8.type;
            var1 = _closure1_slot21;
            var1 = var1.MESSAGE;
            if(!(var1 !== var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var1 = _closure1_slot21;
            var1 = var1.ALERT;
            if(!(var1 !== var4)) { _fun0004_ip = 21; continue _fun0004 }
case 23:
            var1 = _closure1_slot21;
            var1 = var1.REACTION;
            if(!(var1 !== var4)) { _fun0004_ip = 21; continue _fun0004 }
case 24:
            var1 = _closure1_slot21;
            var1 = var1.FORUM_THREAD_CREATED;
            if(!(var1 !== var4)) { _fun0004_ip = 25; continue _fun0004 }
case 4:
            var1 = _closure1_slot21;
            var1 = var1.MESSAGE_FAILED_TO_SEND;
            if(!(var1 !== var4)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var1 = _closure1_slot21;
            var3 = var1.MESSAGE_REMINDER;
            var7 = undefined;
            var6 = undefined;
            if(!(var3 === var4)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var4 = var8.channel;
            var5 = null;
            var9 = var5 == var4;
            var3 = undefined;
            if(var9) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var3 = var4.guild_id;
case 30:
            var4 = var8.channel;
            var5 = var5 == var4;
            var1 = undefined;
            if(var5) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var1 = var4.id;
case 32:
            var6 = var1;
            var7 = var3;
            _fun0004_ip = 28; continue _fun0004;
case 26:
            var6 = var8.channelId;
            var7 = undefined;
            _fun0004_ip = 28; continue _fun0004;
case 25:
            var4 = var8.thread;
            var5 = null;
            var9 = var5 == var4;
            var3 = undefined;
            if(var9) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var3 = var4.guild_id;
case 34:
            var4 = var8.thread;
            var5 = var5 == var4;
            var1 = undefined;
            if(var5) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = var4.id;
case 36:
            var6 = var1;
            var7 = var3;
            _fun0004_ip = 28; continue _fun0004;
case 21:
            var4 = var8.guild;
            var5 = null;
            var9 = var5 == var4;
            var3 = undefined;
            if(var9) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var3 = var4.id;
case 38:
            if(!(var5 == var3)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var9 = var8.channel;
            var10 = var5 == var9;
            var4 = undefined;
            if(var10) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var4 = var9.guild_id;
case 42:
            var3 = var4;
case 40:
            var4 = var8.channel;
            var5 = var5 == var4;
            var1 = undefined;
            if(var5) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var1 = var4.id;
case 44:
            var6 = var1;
            var7 = var3;
case 28:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 40;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot19;
            var3 = var2.IN_APP_NOTIFICATION_DISMISSED;
            var2 = {};
            var8 = var8.type;
            var2['type'] = var8;
            var2['guild_id'] = var7;
            var2['channel_id'] = var6;
            var6 = arg2;
            var2['dismiss_reason'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function showNextNotification() {
        var3 = _closure1_slot26;
        var1 = var3.tryDrain;
        var1 = var1.bind(var3)();
        _closure1_slot25 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function rejectNotifications(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot26;
            var2 = var3.removeAll;
            var2 = var2.bind(var3)(var5);
            var2 = _closure1_slot25;
            var3 = null;
            if(!(var3 != var2)) { _fun0005_ip = 19; continue _fun0005 }
case 46:
            var4 = _closure1_slot25;
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            if(var4) { _fun0005_ip = 47; continue _fun0005 }
case 19:
            var4 = _closure1_slot25;
            if(!(var3 == var4)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var5 = _closure1_slot32;
            var4 = undefined;
            var4 = var5.bind(var4)();
            _fun0005_ip = 50; continue _fun0005;
case 48:
            var4 = false;
            return var4;
case 47:
            _closure1_slot25 = var3;
            var1 = _closure1_slot32;
            var1 = var1.bind(var2)();
case 50:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.trackMessageNotificationTimestamps;
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.AnalyticEvents;
    var _closure1_slot19 = var8;
    var8 = var2.ChannelTypes;
    var _closure1_slot20 = var8;
    var8 = var2.InAppNotificationTypes;
    var _closure1_slot21 = var8;
    var2 = var2.MessageTypesSets;
    var _closure1_slot22 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityPanelModes;
    var _closure1_slot23 = var2;
    var2 = function() {
        var4 = _closure1_slot7;
        var3 = function AlertDismissalHandler() {
            var3 = this;
            var5 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 18;
            var4 = var7[var5];
            var4 = var6.bind(var1)(var4);
            var4 = var4.GuildIncidentAlertTypes;
            var9 = var4.JOIN_RAID;
            var4 = global;
            var8 = var4.Map;
            var10 = var8.prototype;
            var10 = Object.create(var10, {constructor: {value: var8}});
            var13 = var10;
            var8 = new var13[var8](var12);
            var8 = var8 instanceof Object ? var8 : var10;
            var2[var9] = var8;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.GuildIncidentAlertTypes;
            var5 = var5.DM_RAID;
            var4 = var4.Map;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var13 = var6;
            var4 = new var13[var4](var12);
            var4 = var4 instanceof Object ? var4 : var6;
            var2[var5] = var4;
            var3['dissmissedAlertsMap'] = var2;
            var2 = {'amount': 1, 'unitOfTime': 'hour'};
            var3['threshold'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'key';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = arg1;
            var2 = var1.guild;
            var1 = var1.channel;
            var2 = var2.id;
            var1 = var1.id;
            var1 = var2 + var1;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'dismissNotification';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var8 = var1.guild;
                var7 = var1.channel;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 19;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.getIncidentAlertType;
                var10 = _closure1_slot10;
                var9 = var10.getGuildIncident;
                var4 = var8.id;
                var4 = var9.bind(var10)(var4);
                var4 = var5.bind(var6)(var4);
                var5 = null;
                if(!(var5 != var4)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                var6 = var3.key;
                var5 = {};
                var5['guild'] = var8;
                var5['channel'] = var7;
                var5 = var6.bind(var3)(var5);
                var3 = var3.dissmissedAlertsMap;
                var4 = var3[var4];
                var3 = var4.set;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 20;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.bind(var1)();
                var2 = var3.bind(var4)(var5, var2);
case 51:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'wasRecentlyDismissed';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var8 = var1.guild;
                var6 = var1.channel;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 19;
                var1 = var5[var1];
                var7 = undefined;
                var5 = var4.bind(var7)(var1);
                var4 = var5.getIncidentAlertType;
                var10 = _closure1_slot10;
                var9 = var10.getGuildIncident;
                var1 = var8.id;
                var1 = var9.bind(var10)(var1);
                var4 = var4.bind(var5)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0007_ip = 37; continue _fun0007 }
case 53:
                var5 = var2.key;
                var1 = {};
                var1['guild'] = var8;
                var1['channel'] = var6;
                var5 = var5.bind(var2)(var1);
                var1 = var2.dissmissedAlertsMap;
                var4 = var1[var4];
                var1 = var4.get;
                var4 = var1.bind(var4)(var5);
                var1 = var7 !== var4;
                if(!var1) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 20;
                var5 = var9[var3];
                var5 = var8.bind(var7)(var5);
                var6 = var5.bind(var7)();
                var5 = var6.diff;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var4 = var3.bind(var7)(var4);
                var3 = var2.threshold;
                var3 = var3.unitOfTime;
                var3 = var5.bind(var6)(var4, var3);
                var2 = var2.threshold;
                var2 = var2.amount;
                var1 = var3 < var2;
case 54:
                return var1;
case 37:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot24 = var2;
    var2 = null;
    var _closure1_slot25 = var2;
    var2 = function() {
        var4 = _closure1_slot7;
        var3 = function NotificationQueue() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                var3 = 2;
case 56:
                var5 = _closure1_slot6;
                var4 = _closure2_slot0;
                var4 = var5.bind(var1)(var2, var4);
                var4 = new Array(0);
                var2['queue'] = var4;
                var2['maxSize'] = var3;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'enqueue';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = this;
                var2 = var1.isFull;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                var3 = var1.queue;
                var2 = var3.shift;
                var2 = var2.bind(var3)();
case 58:
                var3 = var1.queue;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'tryDrain';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.queue;
            var1 = var2.shift;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isFull';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.queue;
            var2 = var2.length;
            var1 = var1.maxSize;
            var1 = var2 >= var1;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'removeAll';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.remove;
            var2 = this;
            var3 = var2.queue;
            var2 = arg1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot26 = var2;
    var2 = 41;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function InAppNotificationStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 62; continue _fun0010;
case 60:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 62:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var12 = var4.waitFor;
            var21 = _closure1_slot9;
            var20 = _closure1_slot14;
            var19 = _closure1_slot8;
            var5 = _closure1_slot10;
            var17 = _closure1_slot15;
            var16 = _closure1_slot16;
            var15 = _closure1_slot17;
            var14 = _closure1_slot12;
            var13 = _closure1_slot18;
            var22 = var4;
            var18 = var5;
            var2 = var22[var12](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
            var3 = var4.syncWith;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot28;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCurrentNotification';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'InAppNotificationStore';
    var8['displayName'] = var2;
    var2 = 42;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['POST_CONNECTION_OPEN'] = var10;
    var2['GUILD_UPDATE'] = var10;
    var10 = function handleIncomingMessage(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var6 = var1.message;
            var1 = var1.optimistic;
            var4 = var6.channel_id;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 22;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var7.bind(var5)(var3);
            var3 = var7.canViewPotentiallyNSFWChannel;
            var3 = var3.bind(var7)(var4);
            if(var3) { _fun0011_ip = 24; continue _fun0011 }
case 63:
            var3 = false;
            return var3;
case 24:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 23;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.bind(var5)(var6);
            if(!var3) { _fun0011_ip = 64; continue _fun0011 }
case 27:
            var3 = _closure1_slot22;
            var8 = var3.SELF_MENTIONABLE_SYSTEM;
            var7 = var8.has;
            var3 = var6.type;
            var3 = var7.bind(var8)(var3);
            if(var3) { _fun0011_ip = 64; continue _fun0011 }
case 65:
            var3 = false;
            return var3;
case 64:
            if(var1) { _fun0011_ip = 66; continue _fun0011 }
case 55:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 24;
            var1 = var1[var8];
            var3 = var3.bind(var5)(var1);
            var1 = var3.allowInAppNotifications;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0011_ip = 66; continue _fun0011 }
case 67:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 25;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isEnabled;
            var1 = var1.bind(var3)();
            if(var1) { _fun0011_ip = 66; continue _fun0011 }
case 68:
            var3 = _closure1_slot9;
            var1 = var3.getChatOpen;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 66; continue _fun0011 }
case 21:
            var3 = _closure1_slot13;
            var1 = var3.getState;
            var3 = var1.bind(var3)();
            var1 = var3.isVoicePanelFullscreen;
            var1 = var1.bind(var3)();
            var7 = true;
            if(var1) { _fun0011_ip = 69; continue _fun0011 }
case 70:
            var3 = _closure1_slot8;
            var1 = var3.getConnectedActivityLocation;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var3)) { _fun0011_ip = 71; continue _fun0011 }
case 72:
            var9 = _closure1_slot8;
            var3 = var9.getActivityPanelMode;
            var9 = var3.bind(var9)();
            var3 = _closure1_slot23;
            var3 = var3.PANEL;
            var7 = true;
            if(!(var9 !== var3)) { _fun0011_ip = 69; continue _fun0011 }
case 71:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 26;
            var3 = var10[var3];
            var9 = var9.bind(var5)(var3);
            var3 = var9.getRootNavigationRef;
            var9 = var3.bind(var9)();
            var1 = var1 == var9;
            if(var1) { _fun0011_ip = 8; continue _fun0011 }
case 73:
            var3 = var9.isReady;
            var3 = var3.bind(var9)();
            var1 = !var3;
case 8:
            if(var1) { _fun0011_ip = 74; continue _fun0011 }
case 75:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 27;
            var3 = var10[var3];
            var9 = var9.bind(var5)(var3);
            var3 = var9.isChannelFocused;
            var3 = var3.bind(var9)();
            var1 = !var3;
case 74:
            var7 = var1;
case 69:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var3 = var3.bind(var5)(var1);
            var1 = var3.shouldNotify;
            var1 = var1.bind(var3)(var6, var4, var7);
            if(var1) { _fun0011_ip = 76; continue _fun0011 }
case 77:
            var1 = false;
            return var1;
case 76:
            var3 = _closure1_slot14;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var1)) { _fun0011_ip = 78; continue _fun0011 }
case 79:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 28;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.getConfig;
            var3 = {};
            var8 = 'inAppNotificationNegativeTest';
            var3['location'] = var8;
            var3 = var4.bind(var7)(var3);
            var3 = var3.shouldSuppress;
            if(var3) { _fun0011_ip = 80; continue _fun0011 }
case 81:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 29;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.createMessageRecord;
            var7 = var3.bind(var4)(var6);
            var4 = _closure1_slot11;
            var3 = var1.guild_id;
            var3 = var4.bind(var5)(var6, var3);
            var4 = _closure1_slot29;
            var3 = {};
            var6 = {};
            var8 = _closure1_slot21;
            var8 = var8.MESSAGE;
            var6['type'] = var8;
            var10 = _closure1_slot15;
            var9 = var10.getGuild;
            var8 = var1.getGuildId;
            var8 = var8.bind(var1)();
            var8 = var9.bind(var10)(var8);
            var6['guild'] = var8;
            var6['channel'] = var1;
            var6['message'] = var7;
            var7 = var7.id;
            var6['key'] = var7;
            var7 = 5000;
            var6['duration'] = var7;
            var7 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var6['onDismiss'] = var7;
            var9 = _closure1_slot14;
            var8 = var9.getChannel;
            var7 = var1.parent_id;
            var7 = var8.bind(var9)(var7);
            var6['parentChannel'] = var7;
            var3['notification'] = var6;
            var3 = var4.bind(var5)(var3);
            return var5;
case 80:
            var4 = _closure1_slot30;
            var2 = _closure1_slot21;
            var3 = var2.MESSAGE;
            var2 = var1.id;
            var1 = var1.guild_id;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = false;
            return var1;
case 78:
            var1 = false;
            return var1;
case 66:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var10 = function handleReactionNotification(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var12 = var2.message;
            var6 = var2.route;
            var1 = var2.emoji;
            var _closure2_slot0 = var1;
            var10 = var2.reactorUserId;
            var2 = null;
            if(!(var2 != var12)) { _fun0012_ip = 82; continue _fun0012 }
case 83:
            var3 = var12.reactions;
            if(!(var2 != var3)) { _fun0012_ip = 82; continue _fun0012 }
case 84:
            if(!(var2 != var1)) { _fun0012_ip = 82; continue _fun0012 }
case 85:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 24;
            var3 = var3[var8];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.allowInAppNotifications;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0012_ip = 82; continue _fun0012 }
case 86:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 34;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.tryParseChannelPath;
            var3 = var3.bind(var4)(var6);
            if(!(var2 == var3)) { _fun0012_ip = 32; continue _fun0012 }
case 87:
            var3 = {'channelId': null, 'guildId': null};
case 32:
            var4 = var3.channelId;
            var3 = var3.guildId;
            if(!(var2 != var4)) { _fun0012_ip = 88; continue _fun0012 }
case 89:
            var7 = _closure1_slot17;
            var6 = var7.getCurrentlySelectedChannelId;
            var6 = var6.bind(var7)();
            if(!(var6 !== var4)) { _fun0012_ip = 88; continue _fun0012 }
case 90:
            if(!(var2 != var3)) { _fun0012_ip = 88; continue _fun0012 }
case 91:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 35;
            var6 = var11[var6];
            var6 = var9.bind(var5)(var6);
            var7 = var6.ReactionNotifications;
            var6 = var7.getSetting;
            var7 = var6.bind(var7)();
            var6 = 36;
            var6 = var11[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.ReactionNotificationType;
            var6 = var6.NOTIFICATIONS_DISABLED;
            if(!(var7 !== var6)) { _fun0012_ip = 92; continue _fun0012 }
case 93:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var7 = var7.bind(var5)(var6);
            var6 = var7.shouldNotify;
            var6 = var6.bind(var7)(var12, var4);
            if(var6) { _fun0012_ip = 94; continue _fun0012 }
case 95:
            var6 = false;
            return var6;
case 94:
            var7 = _closure1_slot14;
            var6 = var7.getChannel;
            var9 = var6.bind(var7)(var4);
            var7 = var2 == var9;
            var6 = undefined;
            if(var7) { _fun0012_ip = 96; continue _fun0012 }
case 97:
            var6 = var9.type;
case 96:
            var6 = var2 != var6;
            if(!var6) { _fun0012_ip = 8; continue _fun0012 }
case 98:
            var8 = var9.type;
            var7 = _closure1_slot20;
            var7 = var7.GUILD_ANNOUNCEMENT;
            var6 = var8 === var7;
case 8:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 37;
            var7 = var11[var7];
            var13 = var8.bind(var5)(var7);
            var11 = var13.isReactionMilestoneNotification;
            var8 = var12.reactions;
            var15 = var2 == var9;
            var7 = undefined;
            if(var15) { _fun0012_ip = 99; continue _fun0012 }
case 100:
            var7 = var9.type;
case 99:
            var7 = var11.bind(var13)(var8, var7);
            if(var6) { _fun0012_ip = 101; continue _fun0012 }
case 102:
            var6 = var7;
case 101:
            var6 = !var6;
            var8 = _closure1_slot15;
            var7 = var8.getGuild;
            var11 = var7.bind(var8)(var3);
            var8 = _closure1_slot18;
            var7 = var8.getUser;
            var10 = var7.bind(var8)(var10);
            if(!(var2 != var9)) { _fun0012_ip = 103; continue _fun0012 }
case 104:
            if(!(var2 == var10)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
            if(var6) { _fun0012_ip = 103; continue _fun0012 }
case 105:
            var13 = var12.reactions;
            var8 = var13.find;
            var7 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.emoji;
                    var4 = var1.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4 === var1;
                    if(!var1) { _fun0013_ip = 107; continue _fun0013 }
case 46:
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = null;
                    var1 = var4 != var5;
case 107:
                    if(var1) { _fun0013_ip = 108; continue _fun0013 }
case 61:
                    var3 = var3.emoji;
                    var3 = var3.name;
                    var2 = _closure2_slot0;
                    var2 = var2.name;
                    var1 = var3 === var2;
case 108:
                    return var1;
                }
            };
            var7 = var8.bind(var13)(var7);
            var13 = var2 != var7;
            var8 = undefined;
            if(!var13) { _fun0012_ip = 109; continue _fun0012 }
case 110:
            var8 = var7;
case 109:
            if(!(var2 == var8)) { _fun0012_ip = 111; continue _fun0012 }
case 112:
            if(var6) { _fun0012_ip = 113; continue _fun0012 }
case 111:
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 28;
            var6 = var13[var6];
            var13 = var7.bind(var5)(var6);
            var7 = var13.getConfig;
            var6 = {};
            var15 = 'inAppNotificationNegativeTest';
            var6['location'] = var15;
            var6 = var7.bind(var13)(var6);
            var6 = var6.shouldSuppress;
            if(var6) { _fun0012_ip = 114; continue _fun0012 }
case 115:
            var7 = var9.type;
            var6 = _closure1_slot20;
            var6 = var6.GROUP_DM;
            if(!(var7 === var6)) { _fun0012_ip = 116; continue _fun0012 }
case 117:
            var7 = _closure1_slot18;
            var6 = var7.getCurrentUser;
            var7 = var6.bind(var7)();
            var13 = var12.author;
            var15 = var2 == var13;
            var6 = undefined;
            if(var15) { _fun0012_ip = 118; continue _fun0012 }
case 119:
            var6 = var13.id;
case 118:
            var13 = var2 == var7;
            var2 = undefined;
            if(var13) { _fun0012_ip = 120; continue _fun0012 }
case 121:
            var2 = var7.id;
case 120:
            if(!(var6 !== var2)) { _fun0012_ip = 116; continue _fun0012 }
case 122:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 38;
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var6 = var7.getConfig;
            var2 = {};
            var13 = 'handleReactionAdd';
            var2['location'] = var13;
            var2 = var6.bind(var7)(var2);
            var2 = var2.showSettingsToggle;
            if(var2) { _fun0012_ip = 116; continue _fun0012 }
case 123:
            var2 = false;
            return var2;
case 116:
            var6 = _closure1_slot29;
            var2 = {};
            var7 = {};
            var13 = _closure1_slot21;
            var13 = var13.REACTION;
            var7['type'] = var13;
            var7['key'] = var4;
            var16 = _closure1_slot1;
            var13 = _closure1_slot2;
            var15 = 33;
            var15 = var13[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.Millis;
            var16 = var15.SECOND;
            var15 = 5;
            var15 = var15 * var16;
            var7['duration'] = var15;
            var14 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var7['onDismiss'] = var14;
            var7['channel'] = var9;
            var7['guild'] = var11;
            var7['user'] = var10;
            var11 = _closure1_slot0;
            var10 = 29;
            var10 = var13[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var11.createMessageRecord;
            var10 = var10.bind(var11)(var12);
            var7['message'] = var10;
            var11 = _closure1_slot14;
            var10 = var11.getChannel;
            var9 = var9.parent_id;
            var9 = var10.bind(var11)(var9);
            var7['parentChannel'] = var9;
            var7['reaction'] = var8;
            var2['notification'] = var7;
            var2 = var6.bind(var5)(var2);
            return var5;
case 114:
            var2 = _closure1_slot30;
            var1 = _closure1_slot21;
            var1 = var1.REACTION;
            var1 = var2.bind(var5)(var1, var4, var3);
            var1 = false;
            return var1;
case 113:
            var1 = false;
            return var1;
case 103:
            var1 = false;
            return var1;
case 92:
            var1 = false;
            return var1;
case 88:
            var1 = false;
            return var1;
case 82:
            var1 = false;
            return var1;
        }
    };
    var2['REACTION_NOTIFICATION_SENT'] = var10;
    var10 = function handleMessageReminderDue(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var5 = var1.savedMessage;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 39;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var4 = var6.getCurrentConfig;
            var3 = {};
            var2 = 'inAppNotificationStore';
            var3['location'] = var2;
            var2 = {};
            var8 = false;
            var2['autoTrackExposure'] = var8;
            var2 = var4.bind(var6)(var3, var2);
            var2 = var2.enabled;
            if(!var2) { _fun0014_ip = 124; continue _fun0014 }
case 52:
            var3 = var5.message;
            var2 = null;
            if(!(var2 != var3)) { _fun0014_ip = 124; continue _fun0014 }
case 125:
            var6 = _closure1_slot14;
            var4 = var6.getChannel;
            var3 = var5.saveData;
            var3 = var3.channelId;
            var6 = var4.bind(var6)(var3);
            if(!(var2 != var6)) { _fun0014_ip = 124; continue _fun0014 }
case 126:
            var3 = _closure1_slot29;
            var2 = {};
            var4 = {};
            var8 = _closure1_slot21;
            var8 = var8.MESSAGE_REMINDER;
            var4['type'] = var8;
            var8 = var5.saveData;
            var12 = var8.channelId;
            var8 = var5.saveData;
            var11 = var8.messageId;
            var8 = global;
            var8 = var8.HermesInternal;
            var10 = var8.concat;
            var9 = '';
            var8 = '-';
            var8 = var10.bind(var9)(var12, var8, var11);
            var4['key'] = var8;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 33;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.Millis;
            var8 = var7.SECOND;
            var7 = 10;
            var7 = var7 * var8;
            var4['duration'] = var7;
            var7 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var7;
            var4['channel'] = var6;
            var6 = var5.message;
            var6 = var6.author;
            var4['author'] = var6;
            var4['savedMessage'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
case 124:
            return var1;
        }
    };
    var2['MESSAGE_REMINDER_DUE'] = var10;
    var10 = function handleThreadCreate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var2 = var1.isNewlyCreated;
            var6 = _closure1_slot14;
            var3 = var6.getChannel;
            var1 = var4.parent_id;
            var3 = var3.bind(var6)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0015_ip = 127; continue _fun0015 }
case 128:
            var6 = var3.isForumLikeChannel;
            var6 = var6.bind(var3)();
            if(!var6) { _fun0015_ip = 127; continue _fun0015 }
case 24:
            if(var2) { _fun0015_ip = 60; continue _fun0015 }
case 129:
            var2 = false;
            return var2;
case 60:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 24;
            var6 = var6[var2];
            var7 = undefined;
            var8 = var8.bind(var7)(var6);
            var6 = var8.allowInAppNotifications;
            var6 = var6.bind(var8)();
            if(!var6) { _fun0015_ip = 26; continue _fun0015 }
case 130:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var2];
            var8 = var9.bind(var7)(var2);
            var6 = var8.shouldNotifyForForumThreadCreation;
            var2 = 27;
            var2 = var10[var2];
            var9 = var9.bind(var7)(var2);
            var2 = var9.isChannelFocused;
            var2 = var2.bind(var9)();
            var2 = !var2;
            var2 = var6.bind(var8)(var4, var3, var2);
            if(var2) { _fun0015_ip = 131; continue _fun0015 }
case 26:
            var2 = false;
            return var2;
case 131:
            var8 = _closure1_slot18;
            var6 = var8.getUser;
            var2 = var4.ownerId;
            var10 = var6.bind(var8)(var2);
            if(!(var1 != var10)) { _fun0015_ip = 132; continue _fun0015 }
case 133:
            var8 = _closure1_slot15;
            var6 = var8.getGuild;
            var2 = var3.guild_id;
            var9 = var6.bind(var8)(var2);
            var1 = var1 != var9;
            if(!var1) { _fun0015_ip = 99; continue _fun0015 }
case 134:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 28;
            var2 = var8[var2];
            var8 = var6.bind(var7)(var2);
            var6 = var8.getConfig;
            var2 = {};
            var11 = 'inAppNotificationNegativeTest';
            var2['location'] = var11;
            var2 = var6.bind(var8)(var2);
            var2 = var2.shouldSuppress;
            if(var2) { _fun0015_ip = 135; continue _fun0015 }
case 136:
            var6 = _closure1_slot29;
            var2 = {};
            var8 = {};
            var11 = _closure1_slot21;
            var11 = var11.FORUM_THREAD_CREATED;
            var8['type'] = var11;
            var8['thread'] = var4;
            var8['threadCreator'] = var10;
            var8['parentChannel'] = var3;
            var8['guild'] = var9;
            var9 = var4.id;
            var8['key'] = var9;
            var9 = 5000;
            var8['duration'] = var9;
            var9 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8['onDismiss'] = var9;
            var2['notification'] = var8;
            var2 = var6.bind(var7)(var2);
            var2 = undefined;
            _fun0015_ip = 137; continue _fun0015;
case 135:
            var6 = _closure1_slot30;
            var5 = _closure1_slot21;
            var5 = var5.FORUM_THREAD_CREATED;
            var4 = var4.id;
            var3 = var3.guild_id;
            var3 = var6.bind(var7)(var5, var4, var3);
            var2 = false;
case 137:
            var1 = var2;
case 99:
            return var1;
case 132:
            var1 = false;
            return var1;
case 127:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_CREATE'] = var10;
    var10 = function handleClearInAppNotification() {
        var2 = null;
        _closure1_slot25 = var2;
        var2 = _closure1_slot32;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CLEAR_IN_APP_NOTIFICATION'] = var10;
    var2['ENQUEUE_IN_APP_NOTIFICATION'] = var9;
    var9 = function handleChannelSelect(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var2 = var2.channelId;
            var _closure2_slot0 = var2;
            var3 = function predicate(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.type;
                    var1 = _closure1_slot21;
                    var1 = var1.MESSAGE;
                    var1 = var4 === var1;
                    if(!var1) { _fun0017_ip = 138; continue _fun0017 }
case 22:
                    var4 = var3.channel;
                    var5 = var4.id;
                    var4 = _closure2_slot0;
                    var1 = var5 === var4;
case 138:
                    if(var1) { _fun0017_ip = 139; continue _fun0017 }
case 140:
                    var5 = var3.type;
                    var4 = _closure1_slot21;
                    var4 = var4.MESSAGE_FAILED_TO_SEND;
                    var4 = var5 === var4;
                    if(!var4) { _fun0017_ip = 27; continue _fun0017 }
case 5:
                    var6 = var3.channelId;
                    var5 = _closure2_slot0;
                    var4 = var6 === var5;
case 27:
                    var1 = var4;
case 139:
                    if(var1) { _fun0017_ip = 141; continue _fun0017 }
case 142:
                    var4 = var3.type;
                    var2 = _closure1_slot21;
                    var2 = var2.ALERT;
                    var2 = var4 === var2;
                    if(!var2) { _fun0017_ip = 143; continue _fun0017 }
case 65:
                    var3 = var3.channel;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var2 = var4 === var3;
case 143:
                    var1 = var2;
case 141:
                    return var1;
                }
            };
            var4 = _closure1_slot25;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0016_ip = 107; continue _fun0016 }
case 20:
            var5 = _closure1_slot25;
            var4 = undefined;
            var2 = var3.bind(var4)(var5);
case 107:
            if(!var2) { _fun0016_ip = 144; continue _fun0016 }
case 61:
            var6 = _closure1_slot31;
            var5 = _closure1_slot25;
            var4 = undefined;
            var2 = 'notification_clicked';
            var2 = var6.bind(var4)(var5, var2);
case 144:
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleVoiceChatOpen(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var2 = var2.chatOpen;
            var _closure2_slot1 = var2;
            var3 = function predicate(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot21;
                    var1 = var1.MESSAGE;
                    var1 = var3 === var1;
                    if(!var1) { _fun0019_ip = 138; continue _fun0019 }
case 22:
                    var2 = var2.channel;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 138:
                    if(!var1) { _fun0019_ip = 145; continue _fun0019 }
case 140:
                    var1 = _closure2_slot1;
case 145:
                    return var1;
                }
            };
            var4 = _closure1_slot25;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0018_ip = 63; continue _fun0018 }
case 19:
            var5 = _closure1_slot25;
            var4 = undefined;
            var2 = var3.bind(var4)(var5);
case 63:
            if(!var2) { _fun0018_ip = 50; continue _fun0018 }
case 85:
            var6 = _closure1_slot31;
            var5 = _closure1_slot25;
            var4 = undefined;
            var2 = 'notification_clicked';
            var2 = var6.bind(var4)(var5, var2);
case 50:
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var9;
    var4 = function handleUserSettingsUpdate() {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = function predicate(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot21;
                var1 = var1.MESSAGE;
                var1 = var2 === var1;
                return var1;
            };
            var4 = _closure1_slot25;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0020_ip = 146; continue _fun0020 }
case 147:
            var5 = _closure1_slot25;
            var4 = undefined;
            var2 = var3.bind(var4)(var5);
case 146:
            if(!var2) { _fun0020_ip = 85; continue _fun0020 }
case 148:
            var6 = _closure1_slot31;
            var5 = _closure1_slot25;
            var4 = undefined;
            var2 = 'settings_updated';
            var2 = var6.bind(var4)(var5, var2);
case 85:
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/native/InAppNotificationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();