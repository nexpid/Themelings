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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var10 = function handleAlertMessage() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 23;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.allowInAppNotifications;
            var1 = var1.bind(var2)();
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1 = false;
            return var1;
case 40:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var14 = 30;
            var1 = var1[var14];
            var2 = var2.bind(var4)(var1);
            var1 = var2.shouldShowRaidInAppNotification;
            var2 = var1.bind(var2)();
            var1 = var2.show;
            var10 = var2.guildId;
            if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var1 = null;
            if(!(var1 != var10)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
            var3 = _closure1_slot14;
            var2 = var3.getGuild;
            var9 = var2.bind(var3)(var10);
            var _closure2_slot0 = var9;
            if(!(var1 != var9)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var5 = _closure1_slot13;
            var3 = var5.getChannel;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 31;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var9);
            var11 = var3.bind(var5)(var2);
            var _closure2_slot1 = var11;
            var1 = var1 != var11;
            if(!var1) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var3 = _closure1_slot16;
            var2 = var3.getChannelId;
            var3 = var2.bind(var3)();
            var2 = var11.id;
            var2 = var3 !== var2;
            if(!var2) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var6 = _closure1_slot22;
            var5 = var6.wasRecentlyDismissed;
            var3 = {};
            var3['guild'] = var9;
            var3['channel'] = var11;
            var3 = var5.bind(var6)(var3);
            var3 = !var3;
            if(!var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var6 = _closure1_slot29;
            var5 = {};
            var7 = {};
            var13 = _closure1_slot20;
            var13 = var13.ALERT;
            var7['type'] = var13;
            var7['key'] = var10;
            var15 = _closure1_slot1;
            var10 = _closure1_slot2;
            var13 = 32;
            var13 = var10[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.Millis;
            var13 = var13.SECOND;
            var13 = var14 * var13;
            var7['duration'] = var13;
            var12 = function onDismiss() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 27;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.clearNotification;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot22;
                var3 = var4.dismissNotification;
                var2 = {};
                var6 = _closure2_slot0;
                var2['guild'] = var6;
                var5 = _closure2_slot1;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onDismiss'] = var12;
            var7['channel'] = var11;
            var7['guild'] = var9;
            var9 = _closure1_slot0;
            var8 = 28;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.generateInAppNotificationId;
            var8 = var8.bind(var9)();
            var7['inAppNotificationId'] = var8;
            var5['notification'] = var7;
            var5 = var6.bind(var4)(var5);
            var3 = undefined;
case 51:
            var2 = var3;
case 49:
            var1 = var2;
case 47:
            return var1;
case 45:
            var1 = false;
            return var1;
case 42:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var10;
    var9 = function handleEnqueueNotification(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = var1.notification;
            var3 = _closure1_slot30;
            var1 = undefined;
            var3 = var3.bind(var1)(var5);
            var9 = var3.guildId;
            var8 = var3.channelId;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 39;
            var3 = var6[var3];
            var7 = var4.bind(var1)(var3);
            var6 = var7.trackWithMetadata;
            var3 = _closure1_slot18;
            var4 = var3.IN_APP_NOTIFICATION_CREATED;
            var3 = {};
            var10 = var5.type;
            var3['type'] = var10;
            var3['guild_id'] = var9;
            var3['channel_id'] = var8;
            var8 = var5.inAppNotificationId;
            var3['in_app_notification_id'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            var4 = _closure1_slot24;
            var3 = var4.enqueue;
            var3 = var3.bind(var4)(var5);
            var4 = _closure1_slot23;
            var3 = null;
            if(!(var3 == var4)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var2 = _closure1_slot32;
            var2 = var2.bind(var1)();
case 53:
            return var1;
        }
    };
    var _closure1_slot29 = var9;
    var1 = function extractGuildAndChannelIdFromNotification(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var6 = var5.type;
            var2 = _closure1_slot20;
            var2 = var2.MESSAGE;
            if(!(var2 !== var6)) { _fun0007_ip = 55; continue _fun0007 }
case 38:
            var2 = _closure1_slot20;
            var2 = var2.ALERT;
            if(!(var2 !== var6)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var2 = _closure1_slot20;
            var2 = var2.REACTION;
            if(!(var2 !== var6)) { _fun0007_ip = 55; continue _fun0007 }
case 57:
            var2 = _closure1_slot20;
            var2 = var2.FORUM_THREAD_CREATED;
            if(!(var2 !== var6)) { _fun0007_ip = 58; continue _fun0007 }
case 4:
            var2 = _closure1_slot20;
            var2 = var2.MESSAGE_FAILED_TO_SEND;
            if(!(var2 !== var6)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var1 = _closure1_slot20;
            var4 = var1.MESSAGE_REMINDER;
            var3 = undefined;
            var2 = undefined;
            if(!(var4 === var6)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var6 = var5.channel;
            var7 = null;
            var8 = var7 == var6;
            var4 = undefined;
            if(var8) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var4 = var6.guild_id;
case 63:
            var6 = var5.channel;
            var7 = var7 == var6;
            var1 = undefined;
            if(var7) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var1 = var6.id;
case 65:
            var2 = var1;
            var3 = var4;
            _fun0007_ip = 61; continue _fun0007;
case 59:
            var2 = var5.channelId;
            var3 = undefined;
            _fun0007_ip = 61; continue _fun0007;
case 58:
            var6 = var5.thread;
            var7 = null;
            var8 = var7 == var6;
            var4 = undefined;
            if(var8) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var4 = var6.guild_id;
case 67:
            var6 = var5.thread;
            var7 = var7 == var6;
            var1 = undefined;
            if(var7) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var1 = var6.id;
case 69:
            var2 = var1;
            var3 = var4;
            _fun0007_ip = 61; continue _fun0007;
case 55:
            var7 = var5.guild;
            var6 = null;
            var8 = var6 == var7;
            var4 = undefined;
            if(var8) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var4 = var7.id;
case 71:
            if(!(var6 == var4)) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var8 = var5.channel;
            var9 = var6 == var8;
            var7 = undefined;
            if(var9) { _fun0007_ip = 28; continue _fun0007 }
case 75:
            var7 = var8.guild_id;
case 28:
            var4 = var7;
case 73:
            var5 = var5.channel;
            var6 = var6 == var5;
            var1 = undefined;
            if(var6) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var1 = var5.id;
case 76:
            var2 = var1;
            var3 = var4;
case 61:
            var1 = {};
            var1['guildId'] = var3;
            var1['channelId'] = var2;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function trackDismissed(arg1, arg2) {
        var6 = arg1;
        var3 = _closure1_slot30;
        var1 = undefined;
        var3 = var3.bind(var1)(var6);
        var8 = var3.guildId;
        var7 = var3.channelId;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 39;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot18;
        var3 = var2.IN_APP_NOTIFICATION_DISMISSED;
        var2 = {};
        var9 = var6.type;
        var2['type'] = var9;
        var2['guild_id'] = var8;
        var2['channel_id'] = var7;
        var7 = arg2;
        var2['dismiss_reason'] = var7;
        var6 = var6.inAppNotificationId;
        var2['in_app_notification_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function showNextNotification() {
        var3 = _closure1_slot24;
        var1 = var3.tryDrain;
        var1 = var1.bind(var3)();
        _closure1_slot23 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function rejectNotifications(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot24;
            var2 = var3.removeAll;
            var2 = var2.bind(var3)(var5);
            var2 = _closure1_slot23;
            var3 = null;
            if(!(var3 != var2)) { _fun0008_ip = 78; continue _fun0008 }
case 37:
            var4 = _closure1_slot23;
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            if(var4) { _fun0008_ip = 79; continue _fun0008 }
case 78:
            var4 = _closure1_slot23;
            if(!(var3 == var4)) { _fun0008_ip = 34; continue _fun0008 }
case 8:
            var5 = _closure1_slot32;
            var4 = undefined;
            var4 = var5.bind(var4)();
            _fun0008_ip = 80; continue _fun0008;
case 34:
            var4 = false;
            return var4;
case 79:
            _closure1_slot23 = var3;
            var1 = _closure1_slot32;
            var1 = var1.bind(var2)();
case 80:
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
    var2 = var5.bind(var1)(var2);
    var8 = var2.AnalyticEvents;
    var _closure1_slot18 = var8;
    var8 = var2.ChannelTypes;
    var _closure1_slot19 = var8;
    var8 = var2.InAppNotificationTypes;
    var _closure1_slot20 = var8;
    var2 = var2.MessageTypesSets;
    var _closure1_slot21 = var2;
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
            var5 = 16;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var8 = var1.guild;
                var7 = var1.channel;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
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
                if(!(var5 != var4)) { _fun0009_ip = 81; continue _fun0009 }
case 82:
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
                var2 = 18;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.bind(var1)();
                var2 = var3.bind(var4)(var5, var2);
case 81:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'wasRecentlyDismissed';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var8 = var1.guild;
                var6 = var1.channel;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 17;
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
                if(!(var1 != var4)) { _fun0010_ip = 70; continue _fun0010 }
case 83:
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
                if(!var1) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 18;
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
case 84:
                return var1;
case 70:
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
    var _closure1_slot22 = var2;
    var2 = null;
    var _closure1_slot23 = var2;
    var2 = function() {
        var4 = _closure1_slot7;
        var3 = function NotificationQueue() {
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['queue'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'enqueue';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = this;
                var2 = var1.isFull;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0011_ip = 11; continue _fun0011 }
case 86:
                var3 = var1.queue;
                var2 = var3.shift;
                var5 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var5)) { _fun0011_ip = 11; continue _fun0011 }
case 41:
                var4 = _closure1_slot31;
                var3 = undefined;
                var2 = 'evicted_from_queue';
                var2 = var4.bind(var3)(var5, var2);
case 11:
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
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.InAppNotificationDurationExperiment;
            var2 = var3.getConfig;
            var1 = {};
            var4 = 'NotificationQueueFullCheck';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var2 = var1.queueLengthLimit;
            var1 = this;
            var1 = var1.queue;
            var1 = var1.length;
            var1 = var1 >= var2;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'removeAll';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = _closure1_slot26;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var5 = var7.remove;
                var2 = this;
                var4 = var2.queue;
                var2 = arg1;
                var2 = var5.bind(var7)(var4, var2);
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = 'rejected_from_queue';
                if(var2) { _fun0012_ip = 87; continue _fun0012 }
case 4:
                var7 = _closure1_slot31;
                var2 = var3.value;
                var2 = var7.bind(var1)(var2, var4);
                var7 = var5.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0012_ip = 4; continue _fun0012 }
case 87:
                return var1;
            }
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
    var _closure1_slot24 = var2;
    var2 = 40;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function InAppNotificationStore() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 90; continue _fun0013;
case 88:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 90:
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
            var20 = _closure1_slot13;
            var19 = _closure1_slot8;
            var5 = _closure1_slot10;
            var17 = _closure1_slot14;
            var16 = _closure1_slot15;
            var15 = _closure1_slot16;
            var14 = _closure1_slot12;
            var13 = _closure1_slot17;
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
            var1 = _closure1_slot23;
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
    var2 = 41;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['POST_CONNECTION_OPEN'] = var10;
    var2['GUILD_UPDATE'] = var10;
    var10 = function handleIncomingMessage(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var4 = var1.message;
            var2 = var1.optimistic;
            var5 = var4.channel_id;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var3);
            var3 = var6.canViewPotentiallyNSFWChannel;
            var3 = var3.bind(var6)(var5);
            if(var3) { _fun0014_ip = 57; continue _fun0014 }
case 91:
            var3 = false;
            return var3;
case 57:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.bind(var1)(var4);
            if(!var3) { _fun0014_ip = 92; continue _fun0014 }
case 60:
            var3 = _closure1_slot21;
            var7 = var3.SELF_MENTIONABLE_SYSTEM;
            var6 = var7.has;
            var3 = var4.type;
            var3 = var6.bind(var7)(var3);
            if(var3) { _fun0014_ip = 92; continue _fun0014 }
case 93:
            var3 = false;
            return var3;
case 92:
            if(var2) { _fun0014_ip = 94; continue _fun0014 }
case 85:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 23;
            var2 = var2[var7];
            var3 = var3.bind(var1)(var2);
            var2 = var3.allowInAppNotifications;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0014_ip = 94; continue _fun0014 }
case 95:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 24;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0014_ip = 94; continue _fun0014 }
case 96:
            var3 = _closure1_slot9;
            var2 = var3.getChatOpen;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0014_ip = 94; continue _fun0014 }
case 55:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = var2[var7];
            var9 = var3.bind(var1)(var6);
            var6 = var9.shouldIncludeSelectedChannel;
            var6 = var6.bind(var9)();
            var2 = var2[var7];
            var3 = var3.bind(var1)(var2);
            var2 = var3.shouldNotify;
            var2 = var2.bind(var3)(var4, var5, var6);
            if(var2) { _fun0014_ip = 97; continue _fun0014 }
case 98:
            var2 = false;
            return var2;
case 97:
            var3 = _closure1_slot13;
            var2 = var3.getChannel;
            var5 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var5)) { _fun0014_ip = 99; continue _fun0014 }
case 100:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 25;
            var2 = var6[var2];
            var7 = var3.bind(var1)(var2);
            var2 = var7.createMessageRecord;
            var10 = var2.bind(var7)(var4);
            var2 = 26;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isMessageContentPreviewable;
            var2 = var2.bind(var3)(var10);
            if(var2) { _fun0014_ip = 101; continue _fun0014 }
case 102:
            var2 = false;
            return var2;
case 101:
            var3 = _closure1_slot11;
            var2 = var5.guild_id;
            var2 = var3.bind(var1)(var4, var2);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var4 = var2.InAppNotificationDurationExperiment;
            var3 = var4.getConfig;
            var2 = {};
            var9 = 'InAppNotif-enqueue-msg-or-reaction';
            var2['location'] = var9;
            var2 = var3.bind(var4)(var2);
            var9 = var2.duration;
            var3 = _closure1_slot29;
            var2 = {};
            var4 = {};
            var11 = _closure1_slot20;
            var11 = var11.MESSAGE;
            var4['type'] = var11;
            var13 = _closure1_slot14;
            var12 = var13.getGuild;
            var11 = var5.getGuildId;
            var11 = var11.bind(var5)();
            var11 = var12.bind(var13)(var11);
            var4['guild'] = var11;
            var4['channel'] = var5;
            var4['message'] = var10;
            var10 = var10.id;
            var4['key'] = var10;
            var4['duration'] = var9;
            var9 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var9;
            var9 = _closure1_slot13;
            var8 = var9.getChannel;
            var5 = var5.parent_id;
            var5 = var8.bind(var9)(var5);
            var4['parentChannel'] = var5;
            var5 = 28;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.generateInAppNotificationId;
            var5 = var5.bind(var6)();
            var4['inAppNotificationId'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 99:
            var1 = false;
            return var1;
case 94:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var10 = function handleReactionNotification(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var13 = var2.message;
            var5 = var2.route;
            var1 = var2.emoji;
            var _closure2_slot0 = var1;
            var8 = var2.reactorUserId;
            var3 = null;
            if(!(var3 != var13)) { _fun0015_ip = 103; continue _fun0015 }
case 104:
            var2 = var13.reactions;
            if(!(var3 != var2)) { _fun0015_ip = 103; continue _fun0015 }
case 105:
            if(!(var3 != var1)) { _fun0015_ip = 103; continue _fun0015 }
case 11:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 23;
            var2 = var1[var6];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.allowInAppNotifications;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0015_ip = 103; continue _fun0015 }
case 106:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 33;
            var2 = var7[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.tryParseChannelPath;
            var2 = var2.bind(var4)(var5);
            if(!(var3 == var2)) { _fun0015_ip = 65; continue _fun0015 }
case 107:
            var2 = {'channelId': null, 'guildId': null};
case 65:
            var16 = var2.channelId;
            var11 = var2.guildId;
            if(!(var3 != var16)) { _fun0015_ip = 108; continue _fun0015 }
case 109:
            if(!(var3 != var11)) { _fun0015_ip = 108; continue _fun0015 }
case 110:
            var4 = _closure1_slot13;
            var2 = var4.getChannel;
            var9 = var2.bind(var4)(var16);
            if(!(var3 != var9)) { _fun0015_ip = 111; continue _fun0015 }
case 112:
            var4 = _closure1_slot17;
            var2 = var4.getCurrentUser;
            var5 = var2.bind(var4)();
            var2 = var13.author;
            var7 = var3 == var2;
            var4 = undefined;
            if(var7) { _fun0015_ip = 113; continue _fun0015 }
case 114:
            var4 = var2.id;
case 113:
            var7 = var3 == var5;
            var2 = undefined;
            if(var7) { _fun0015_ip = 52; continue _fun0015 }
case 115:
            var2 = var5.id;
case 52:
            var7 = var9.type;
            var5 = _closure1_slot19;
            var5 = var5.GROUP_DM;
            if(!(var7 === var5)) { _fun0015_ip = 116; continue _fun0015 }
case 117:
            if(!(var4 === var2)) { _fun0015_ip = 118; continue _fun0015 }
case 116:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 35;
            var2 = var7[var2];
            var2 = var5.bind(var1)(var2);
            var4 = var2.ReactionNotifications;
            var2 = var4.getSetting;
            var4 = var2.bind(var4)();
            var2 = 36;
            var2 = var7[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.ReactionNotificationType;
            var2 = var2.NOTIFICATIONS_DISABLED;
            if(!(var4 === var2)) { _fun0015_ip = 119; continue _fun0015 }
case 30:
            var2 = false;
            return var2;
case 118:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 34;
            var2 = var5[var2];
            var5 = var4.bind(var1)(var2);
            var4 = var5.getConfig;
            var2 = {};
            var7 = 'handleReactionAdd';
            var2['location'] = var7;
            var2 = var4.bind(var5)(var2);
            var2 = var2.showSettingsToggle;
            if(var2) { _fun0015_ip = 120; continue _fun0015 }
case 121:
            var2 = false;
            return var2;
case 120:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 35;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var4 = var2.EnableGdmAllReactionNotifications;
            var2 = var4.getSetting;
            var2 = var2.bind(var4)();
            if(var2) { _fun0015_ip = 119; continue _fun0015 }
case 122:
            var2 = false;
            return var2;
case 119:
            var4 = var3 == var9;
            var2 = undefined;
            if(var4) { _fun0015_ip = 123; continue _fun0015 }
case 124:
            var2 = var9.type;
case 123:
            var2 = var3 != var2;
            if(!var2) { _fun0015_ip = 125; continue _fun0015 }
case 126:
            var5 = var9.type;
            var4 = _closure1_slot19;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var2 = var5 === var4;
case 125:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = 28;
            var4 = var4[var7];
            var15 = var5.bind(var1)(var4);
            var12 = var15.isReactionMilestoneNotification;
            var5 = var13.reactions;
            var17 = var3 == var9;
            var4 = undefined;
            if(var17) { _fun0015_ip = 127; continue _fun0015 }
case 128:
            var4 = var9.type;
case 127:
            var4 = var12.bind(var15)(var5, var4);
            if(var2) { _fun0015_ip = 129; continue _fun0015 }
case 130:
            var2 = var4;
case 129:
            var2 = !var2;
            var5 = _closure1_slot14;
            var4 = var5.getGuild;
            var12 = var4.bind(var5)(var11);
            var5 = _closure1_slot17;
            var4 = var5.getUser;
            var11 = var4.bind(var5)(var8);
            if(!(var3 == var11)) { _fun0015_ip = 131; continue _fun0015 }
case 132:
            if(var2) { _fun0015_ip = 133; continue _fun0015 }
case 131:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = var4[var6];
            var15 = var5.bind(var1)(var8);
            var8 = var15.shouldIncludeSelectedChannel;
            var15 = var8.bind(var15)();
            var8 = 37;
            var8 = var4[var8];
            var18 = var5.bind(var1)(var8);
            var17 = var18.getShowInAppReactionNotificationExperiment;
            var8 = 'handleReactionAdd';
            var8 = var17.bind(var18)(var8);
            var8 = var8.enabled;
            var4 = var4[var6];
            var6 = var5.bind(var1)(var4);
            var5 = var6.shouldNotifyForReaction;
            var4 = {};
            var4['message'] = var13;
            var4['channel'] = var9;
            var4['reactor'] = var11;
            var4['includeSelectedChannel'] = var15;
            var4['notifyMessageAuthor'] = var8;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0015_ip = 134; continue _fun0015 }
case 135:
            var4 = false;
            return var4;
case 134:
            var6 = var13.reactions;
            var5 = var6.find;
            var4 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.emoji;
                    var4 = var1.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4 === var1;
                    if(!var1) { _fun0016_ip = 136; continue _fun0016 }
case 37:
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = null;
                    var1 = var4 != var5;
case 136:
                    if(var1) { _fun0016_ip = 137; continue _fun0016 }
case 89:
                    var3 = var3.emoji;
                    var3 = var3.name;
                    var2 = _closure2_slot0;
                    var2 = var2.name;
                    var1 = var3 === var2;
case 137:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var5 = var3 != var4;
            var8 = undefined;
            if(!var5) { _fun0015_ip = 138; continue _fun0015 }
case 139:
            var8 = var4;
case 138:
            if(!(var3 == var8)) { _fun0015_ip = 140; continue _fun0015 }
case 141:
            if(var2) { _fun0015_ip = 142; continue _fun0015 }
case 140:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 19;
            var2 = var5[var2];
            var2 = var6.bind(var1)(var2);
            var4 = var2.InAppNotificationDurationExperiment;
            var3 = var4.getConfig;
            var2 = {};
            var15 = 'InAppNotif-enqueue-msg-or-reaction';
            var2['location'] = var15;
            var2 = var3.bind(var4)(var2);
            var15 = var2.duration;
            var3 = _closure1_slot29;
            var2 = {};
            var4 = {};
            var17 = _closure1_slot20;
            var17 = var17.REACTION;
            var4['type'] = var17;
            var4['key'] = var16;
            var4['duration'] = var15;
            var14 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var14;
            var4['channel'] = var9;
            var4['guild'] = var12;
            var4['user'] = var11;
            var11 = 25;
            var11 = var5[var11];
            var12 = var6.bind(var1)(var11);
            var11 = var12.createMessageRecord;
            var11 = var11.bind(var12)(var13);
            var4['message'] = var11;
            var11 = _closure1_slot13;
            var10 = var11.getChannel;
            var9 = var9.parent_id;
            var9 = var10.bind(var11)(var9);
            var4['parentChannel'] = var9;
            var4['reaction'] = var8;
            var5 = var5[var7];
            var6 = var6.bind(var1)(var5);
            var5 = var6.generateInAppNotificationId;
            var5 = var5.bind(var6)();
            var4['inAppNotificationId'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 142:
            var1 = false;
            return var1;
case 133:
            var1 = false;
            return var1;
case 111:
            var1 = false;
            return var1;
case 108:
            var1 = false;
            return var1;
case 103:
            var1 = false;
            return var1;
        }
    };
    var2['REACTION_NOTIFICATION_SENT'] = var10;
    var10 = function handleMessageReminderDue(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var6 = var1.savedMessage;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 38;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getConfig;
            var2 = {};
            var7 = 'inAppNotificationStore';
            var2['location'] = var7;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            if(!var2) { _fun0017_ip = 143; continue _fun0017 }
case 144:
            var3 = var6.message;
            var2 = null;
            if(!(var2 != var3)) { _fun0017_ip = 143; continue _fun0017 }
case 145:
            var7 = _closure1_slot13;
            var4 = var7.getChannel;
            var3 = var6.saveData;
            var3 = var3.channelId;
            var8 = var4.bind(var7)(var3);
            if(!(var2 != var8)) { _fun0017_ip = 143; continue _fun0017 }
case 146:
            var2 = var6.saveData;
            var9 = var2.channelId;
            var2 = var6.saveData;
            var7 = var2.messageId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var7 = var4.bind(var3)(var9, var2, var7);
            var3 = _closure1_slot29;
            var2 = {};
            var4 = {};
            var9 = _closure1_slot20;
            var9 = var9.MESSAGE_REMINDER;
            var4['type'] = var9;
            var4['key'] = var7;
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var9 = 32;
            var9 = var7[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.Millis;
            var10 = var9.SECOND;
            var9 = 10;
            var9 = var9 * var10;
            var4['duration'] = var9;
            var9 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var9;
            var4['channel'] = var8;
            var8 = var6.message;
            var8 = var8.author;
            var4['author'] = var8;
            var4['savedMessage'] = var6;
            var6 = _closure1_slot0;
            var5 = 28;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.generateInAppNotificationId;
            var5 = var5.bind(var6)();
            var4['inAppNotificationId'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
case 143:
            return var1;
        }
    };
    var2['MESSAGE_REMINDER_DUE'] = var10;
    var10 = function handleThreadCreate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channel;
            var1 = var1.isNewlyCreated;
            var4 = _closure1_slot13;
            var3 = var4.getChannel;
            var2 = var8.parent_id;
            var10 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var10)) { _fun0018_ip = 147; continue _fun0018 }
case 6:
            var3 = var10.isForumLikeChannel;
            var3 = var3.bind(var10)();
            if(!var3) { _fun0018_ip = 147; continue _fun0018 }
case 57:
            if(var1) { _fun0018_ip = 88; continue _fun0018 }
case 148:
            var1 = false;
            return var1;
case 88:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 23;
            var4 = var1[var3];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.allowInAppNotifications;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0018_ip = 59; continue _fun0018 }
case 149:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = var7[var3];
            var5 = var6.bind(var1)(var3);
            var4 = var5.shouldNotifyForForumThreadCreation;
            var3 = 29;
            var3 = var7[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.isChannelFocused;
            var3 = var3.bind(var6)();
            var3 = !var3;
            var3 = var4.bind(var5)(var8, var10, var3);
            if(var3) { _fun0018_ip = 150; continue _fun0018 }
case 59:
            var3 = false;
            return var3;
case 150:
            var5 = _closure1_slot17;
            var4 = var5.getUser;
            var3 = var8.ownerId;
            var11 = var4.bind(var5)(var3);
            if(!(var2 != var11)) { _fun0018_ip = 151; continue _fun0018 }
case 152:
            var5 = _closure1_slot14;
            var4 = var5.getGuild;
            var3 = var10.guild_id;
            var9 = var4.bind(var5)(var3);
            if(!(var2 != var9)) { _fun0018_ip = 153; continue _fun0018 }
case 154:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var4 = var2.InAppNotificationDurationExperiment;
            var3 = var4.getConfig;
            var2 = {};
            var5 = 'InAppNotif-enqueue-msg-or-reaction';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var5 = var2.duration;
            var3 = _closure1_slot29;
            var2 = {};
            var4 = {};
            var12 = _closure1_slot20;
            var12 = var12.FORUM_THREAD_CREATED;
            var4['type'] = var12;
            var4['thread'] = var8;
            var4['threadCreator'] = var11;
            var4['parentChannel'] = var10;
            var4['guild'] = var9;
            var8 = var8.id;
            var4['key'] = var8;
            var4['duration'] = var5;
            var5 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var5;
            var5 = 28;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.generateInAppNotificationId;
            var5 = var5.bind(var6)();
            var4['inAppNotificationId'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 153:
            var1 = false;
            return var1;
case 151:
            var1 = false;
            return var1;
case 147:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_CREATE'] = var10;
    var10 = function handleClearInAppNotification() {
        var2 = null;
        _closure1_slot23 = var2;
        var2 = _closure1_slot32;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CLEAR_IN_APP_NOTIFICATION'] = var10;
    var2['ENQUEUE_IN_APP_NOTIFICATION'] = var9;
    var9 = function handleChannelSelect(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var2 = var2.channelId;
            var _closure2_slot0 = var2;
            var3 = function predicate(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.type;
                    var1 = _closure1_slot20;
                    var1 = var1.MESSAGE;
                    var1 = var4 === var1;
                    if(!var1) { _fun0020_ip = 9; continue _fun0020 }
case 38:
                    var4 = var3.channel;
                    var5 = var4.id;
                    var4 = _closure2_slot0;
                    var1 = var5 === var4;
case 9:
                    if(var1) { _fun0020_ip = 155; continue _fun0020 }
case 156:
                    var5 = var3.type;
                    var4 = _closure1_slot20;
                    var4 = var4.MESSAGE_FAILED_TO_SEND;
                    var4 = var5 === var4;
                    if(!var4) { _fun0020_ip = 60; continue _fun0020 }
case 5:
                    var6 = var3.channelId;
                    var5 = _closure2_slot0;
                    var4 = var6 === var5;
case 60:
                    var1 = var4;
case 155:
                    if(var1) { _fun0020_ip = 157; continue _fun0020 }
case 15:
                    var4 = var3.type;
                    var2 = _closure1_slot20;
                    var2 = var2.ALERT;
                    var2 = var4 === var2;
                    if(!var2) { _fun0020_ip = 158; continue _fun0020 }
case 93:
                    var3 = var3.channel;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var2 = var4 === var3;
case 158:
                    var1 = var2;
case 157:
                    return var1;
                }
            };
            var4 = _closure1_slot23;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0019_ip = 136; continue _fun0019 }
case 159:
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = var3.bind(var4)(var5);
case 136:
            if(!var2) { _fun0019_ip = 160; continue _fun0019 }
case 89:
            var6 = _closure1_slot31;
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = 'notification_clicked';
            var2 = var6.bind(var4)(var5, var2);
case 160:
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleVoiceChatOpen(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var2 = var2.chatOpen;
            var _closure2_slot1 = var2;
            var3 = function predicate(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot20;
                    var1 = var1.MESSAGE;
                    var1 = var3 === var1;
                    if(!var1) { _fun0022_ip = 9; continue _fun0022 }
case 38:
                    var2 = var2.channel;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 9:
                    if(!var1) { _fun0022_ip = 161; continue _fun0022 }
case 156:
                    var1 = _closure2_slot1;
case 161:
                    return var1;
                }
            };
            var4 = _closure1_slot23;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0021_ip = 91; continue _fun0021 }
case 78:
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = var3.bind(var4)(var5);
case 91:
            if(!var2) { _fun0021_ip = 80; continue _fun0021 }
case 11:
            var6 = _closure1_slot31;
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = 'notification_clicked';
            var2 = var6.bind(var4)(var5, var2);
case 80:
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var9;
    var4 = function handleUserSettingsUpdate() {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var3 = function predicate(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot20;
                var1 = var1.MESSAGE;
                var1 = var2 === var1;
                return var1;
            };
            var4 = _closure1_slot23;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0023_ip = 162; continue _fun0023 }
case 163:
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = var3.bind(var4)(var5);
case 162:
            if(!var2) { _fun0023_ip = 11; continue _fun0023 }
case 164:
            var6 = _closure1_slot31;
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = 'settings_updated';
            var2 = var6.bind(var4)(var5, var2);
case 11:
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
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/native/InAppNotificationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();