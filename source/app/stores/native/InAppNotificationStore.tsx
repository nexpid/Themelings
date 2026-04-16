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
            var3 = _closure1_slot2;
            var1 = 31;
            var1 = var3[var1];
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
            var2 = 32;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var9);
            var11 = var3.bind(var5)(var2);
            var _closure2_slot1 = var11;
            var1 = var1 != var11;
            if(!var1) { _fun0005_ip = 47; continue _fun0005 }
case 20:
            var3 = _closure1_slot16;
            var2 = var3.getChannelId;
            var3 = var2.bind(var3)();
            var2 = var11.id;
            var2 = var3 !== var2;
            if(!var2) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var6 = _closure1_slot22;
            var5 = var6.wasRecentlyDismissed;
            var3 = {};
            var3['guild'] = var9;
            var3['channel'] = var11;
            var3 = var5.bind(var6)(var3);
            var3 = !var3;
            if(!var3) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var6 = _closure1_slot29;
            var5 = {};
            var7 = {};
            var13 = _closure1_slot20;
            var13 = var13.ALERT;
            var7['type'] = var13;
            var7['key'] = var10;
            var14 = _closure1_slot1;
            var10 = _closure1_slot2;
            var13 = 27;
            var13 = var10[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.Millis;
            var14 = var13.SECOND;
            var13 = 30;
            var13 = var13 * var14;
            var7['duration'] = var13;
            var12 = function onDismiss() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 28;
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
            var8 = 29;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.generateInAppNotificationId;
            var8 = var8.bind(var9)();
            var7['inAppNotificationId'] = var8;
            var5['notification'] = var7;
            var5 = var6.bind(var4)(var5);
            var3 = undefined;
case 50:
            var2 = var3;
case 48:
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
            var10 = var3.guildId;
            var9 = var3.channelId;
            var8 = var3.messageId;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 39;
            var3 = var6[var3];
            var7 = var4.bind(var1)(var3);
            var6 = var7.trackWithMetadata;
            var3 = _closure1_slot18;
            var4 = var3.IN_APP_NOTIFICATION_CREATED;
            var3 = {};
            var11 = var5.type;
            var3['type'] = var11;
            var3['guild_id'] = var10;
            var3['channel_id'] = var9;
            var9 = var5.inAppNotificationId;
            var3['in_app_notification_id'] = var9;
            var3['message_id'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            var4 = _closure1_slot24;
            var3 = var4.enqueue;
            var3 = var3.bind(var4)(var5);
            var4 = _closure1_slot23;
            var3 = null;
            if(!(var3 == var4)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var2 = _closure1_slot32;
            var2 = var2.bind(var1)();
case 52:
            return var1;
        }
    };
    var _closure1_slot29 = var9;
    var1 = function extractGuildAndChannelAndMessageIdFromNotification(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var6 = var7.type;
            var2 = _closure1_slot20;
            var2 = var2.MESSAGE;
            if(!(var2 !== var6)) { _fun0007_ip = 54; continue _fun0007 }
case 38:
            var2 = _closure1_slot20;
            var2 = var2.REACTION;
            if(!(var2 !== var6)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var2 = _closure1_slot20;
            var2 = var2.ALERT;
            if(!(var2 !== var6)) { _fun0007_ip = 56; continue _fun0007 }
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
            var5 = var1.MESSAGE_REMINDER;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(!(var5 === var6)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var8 = var7.channel;
            var5 = null;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var6 = var8.guild_id;
case 63:
            var8 = var7.channel;
            var9 = var5 == var8;
            var5 = undefined;
            if(var9) { _fun0007_ip = 65; continue _fun0007 }
case 52:
            var5 = var8.id;
case 65:
            var3 = var5;
            var4 = var6;
            var2 = undefined;
            _fun0007_ip = 61; continue _fun0007;
case 59:
            var3 = var7.channelId;
            var4 = undefined;
            var2 = undefined;
            _fun0007_ip = 61; continue _fun0007;
case 58:
            var8 = var7.thread;
            var5 = null;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var6 = var8.guild_id;
case 66:
            var8 = var7.thread;
            var9 = var5 == var8;
            var5 = undefined;
            if(var9) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var5 = var8.id;
case 68:
            var3 = var5;
            var4 = var6;
            var2 = undefined;
            _fun0007_ip = 61; continue _fun0007;
case 56:
            var8 = var7.guild;
            var5 = null;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var6 = var8.id;
case 70:
            if(!(var5 == var6)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var9 = var7.channel;
            var10 = var5 == var9;
            var8 = undefined;
            if(var10) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var8 = var9.guild_id;
case 74:
            var6 = var8;
case 72:
            var8 = var7.channel;
            var9 = var5 == var8;
            var5 = undefined;
            if(var9) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var5 = var8.id;
case 76:
            var3 = var5;
            var4 = var6;
            var2 = undefined;
            _fun0007_ip = 61; continue _fun0007;
case 54:
            var5 = var7.guild;
            var8 = null;
            var9 = var8 == var5;
            var6 = undefined;
            if(var9) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var6 = var5.id;
case 78:
            if(!(var8 == var6)) { _fun0007_ip = 80; continue _fun0007 }
case 81:
            var9 = var7.channel;
            var10 = var8 == var9;
            var5 = undefined;
            if(var10) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var5 = var9.guild_id;
case 82:
            var6 = var5;
case 80:
            var9 = var7.channel;
            var10 = var8 == var9;
            var5 = undefined;
            if(var10) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var5 = var9.id;
case 84:
            var7 = var7.message;
            var8 = var8 == var7;
            var1 = undefined;
            if(var8) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var1 = var7.id;
case 86:
            var2 = var1;
            var4 = var6;
            var3 = var5;
case 61:
            var1 = {};
            var1['guildId'] = var4;
            var1['channelId'] = var3;
            var1['messageId'] = var2;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function trackDismissed(arg1, arg2) {
        var6 = arg1;
        var3 = _closure1_slot30;
        var1 = undefined;
        var3 = var3.bind(var1)(var6);
        var9 = var3.guildId;
        var8 = var3.channelId;
        var7 = var3.messageId;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 39;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot18;
        var3 = var2.IN_APP_NOTIFICATION_DISMISSED;
        var2 = {};
        var10 = var6.type;
        var2['type'] = var10;
        var2['guild_id'] = var9;
        var2['channel_id'] = var8;
        var2['message_id'] = var7;
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
            if(!(var3 != var2)) { _fun0008_ip = 55; continue _fun0008 }
case 88:
            var4 = _closure1_slot23;
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            if(var4) { _fun0008_ip = 89; continue _fun0008 }
case 55:
            var4 = _closure1_slot23;
            if(!(var3 == var4)) { _fun0008_ip = 90; continue _fun0008 }
case 91:
            var5 = _closure1_slot32;
            var4 = undefined;
            var4 = var5.bind(var4)();
            _fun0008_ip = 92; continue _fun0008;
case 90:
            var4 = false;
            return var4;
case 89:
            _closure1_slot23 = var3;
            var1 = _closure1_slot32;
            var1 = var1.bind(var2)();
case 92:
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
            var2[8] = var8;
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
            var2[4] = var4;
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
                if(!(var5 != var4)) { _fun0009_ip = 93; continue _fun0009 }
case 94:
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
case 93:
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
                if(!(var1 != var4)) { _fun0010_ip = 49; continue _fun0010 }
case 92:
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
                if(!var1) { _fun0010_ip = 95; continue _fun0010 }
case 96:
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
case 95:
                return var1;
case 49:
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
case 97:
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
            var1 = this;
            var1 = var1.queue;
            var2 = var1.length;
            var1 = 2;
            var1 = var2 >= var1;
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
                var1 = 19;
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
                if(var2) { _fun0012_ip = 98; continue _fun0012 }
case 4:
                var7 = _closure1_slot31;
                var2 = var3.value;
                var2 = var7.bind(var1)(var2, var4);
                var7 = var5.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0012_ip = 4; continue _fun0012 }
case 98:
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
                if(var1) { _fun0013_ip = 89; continue _fun0013 }
case 99:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 100; continue _fun0013;
case 89:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 100:
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
            var6 = var4.channel_id;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var3);
            var3 = var7.canViewPotentiallyNSFWChannel;
            var3 = var3.bind(var7)(var6);
            if(var3) { _fun0014_ip = 57; continue _fun0014 }
case 101:
            var3 = false;
            return var3;
case 57:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var3 = var8[var3];
            var7 = var7.bind(var1)(var3);
            var3 = var7.shouldShowSpoilerGateForChannelId;
            var3 = var3.bind(var7)(var6);
            if(var3) { _fun0014_ip = 102; continue _fun0014 }
case 103:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 22;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.bind(var1)(var4);
            if(!var3) { _fun0014_ip = 104; continue _fun0014 }
case 105:
            var3 = _closure1_slot21;
            var8 = var3.SELF_MENTIONABLE_SYSTEM;
            var7 = var8.has;
            var3 = var4.type;
            var3 = var7.bind(var8)(var3);
            if(var3) { _fun0014_ip = 104; continue _fun0014 }
case 106:
            var3 = false;
            return var3;
case 104:
            if(var2) { _fun0014_ip = 107; continue _fun0014 }
case 108:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 23;
            var2 = var2[var8];
            var3 = var3.bind(var1)(var2);
            var2 = var3.allowInAppNotifications;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0014_ip = 107; continue _fun0014 }
case 109:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 24;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0014_ip = 107; continue _fun0014 }
case 110:
            var3 = _closure1_slot9;
            var2 = var3.getChatOpen;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0014_ip = 107; continue _fun0014 }
case 111:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = var2[var8];
            var9 = var3.bind(var1)(var7);
            var7 = var9.shouldIncludeSelectedChannel;
            var7 = var7.bind(var9)();
            var2 = var2[var8];
            var3 = var3.bind(var1)(var2);
            var2 = var3.shouldNotify;
            var2 = var2.bind(var3)(var4, var6, var7);
            if(var2) { _fun0014_ip = 112; continue _fun0014 }
case 113:
            var2 = false;
            return var2;
case 112:
            var3 = _closure1_slot13;
            var2 = var3.getChannel;
            var6 = var2.bind(var3)(var6);
            var2 = null;
            if(!(var2 != var6)) { _fun0014_ip = 114; continue _fun0014 }
case 115:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 25;
            var2 = var8[var2];
            var7 = var3.bind(var1)(var2);
            var2 = var7.createMessageRecord;
            var7 = var2.bind(var7)(var4);
            var2 = 26;
            var2 = var8[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isMessageContentPreviewable;
            var2 = var2.bind(var3)(var7);
            if(var2) { _fun0014_ip = 116; continue _fun0014 }
case 117:
            var2 = false;
            return var2;
case 116:
            var3 = _closure1_slot11;
            var2 = var6.guild_id;
            var2 = var3.bind(var1)(var4, var2);
            var3 = _closure1_slot29;
            var2 = {};
            var4 = {};
            var8 = _closure1_slot20;
            var8 = var8.MESSAGE;
            var4['type'] = var8;
            var10 = _closure1_slot14;
            var9 = var10.getGuild;
            var8 = var6.getGuildId;
            var8 = var8.bind(var6)();
            var8 = var9.bind(var10)(var8);
            var4['guild'] = var8;
            var4['channel'] = var6;
            var4['message'] = var7;
            var7 = var7.id;
            var4['key'] = var7;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var8 = 27;
            var8 = var7[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.Millis;
            var9 = var8.SECOND;
            var8 = 5;
            var8 = var8 * var9;
            var4['duration'] = var8;
            var8 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var8;
            var9 = _closure1_slot13;
            var8 = var9.getChannel;
            var6 = var6.parent_id;
            var6 = var8.bind(var9)(var6);
            var4['parentChannel'] = var6;
            var6 = _closure1_slot0;
            var5 = 29;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.generateInAppNotificationId;
            var5 = var5.bind(var6)();
            var4['inAppNotificationId'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 114:
            var1 = false;
            return var1;
case 107:
            var1 = false;
            return var1;
case 102:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var10 = function handleReactionNotification(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var4 = var2.message;
            var7 = var2.route;
            var1 = var2.emoji;
            var _closure2_slot0 = var1;
            var11 = var2.reactorUserId;
            var3 = null;
            if(!(var3 != var4)) { _fun0015_ip = 118; continue _fun0015 }
case 119:
            var2 = var4.reactions;
            if(!(var3 != var2)) { _fun0015_ip = 118; continue _fun0015 }
case 120:
            if(!(var3 != var1)) { _fun0015_ip = 118; continue _fun0015 }
case 11:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var14 = 23;
            var2 = var1[var14];
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var2 = var5.allowInAppNotifications;
            var2 = var2.bind(var5)();
            if(!var2) { _fun0015_ip = 118; continue _fun0015 }
case 121:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 33;
            var2 = var8[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.tryParseChannelPath;
            var2 = var2.bind(var5)(var7);
            if(!(var3 == var2)) { _fun0015_ip = 122; continue _fun0015 }
case 123:
            var2 = {'channelId': null, 'guildId': null};
case 122:
            var5 = var2.channelId;
            var12 = var2.guildId;
            if(!(var3 != var5)) { _fun0015_ip = 124; continue _fun0015 }
case 125:
            if(!(var3 != var12)) { _fun0015_ip = 124; continue _fun0015 }
case 126:
            var7 = _closure1_slot13;
            var2 = var7.getChannel;
            var9 = var2.bind(var7)(var5);
            if(!(var3 != var9)) { _fun0015_ip = 127; continue _fun0015 }
case 128:
            var7 = _closure1_slot17;
            var2 = var7.getCurrentUser;
            var8 = var2.bind(var7)();
            var2 = var4.author;
            var10 = var3 == var2;
            var7 = undefined;
            if(var10) { _fun0015_ip = 129; continue _fun0015 }
case 130:
            var7 = var2.id;
case 129:
            var10 = var3 == var8;
            var2 = undefined;
            if(var10) { _fun0015_ip = 131; continue _fun0015 }
case 132:
            var2 = var8.id;
case 131:
            var10 = var9.type;
            var8 = _closure1_slot19;
            var8 = var8.GROUP_DM;
            if(!(var10 === var8)) { _fun0015_ip = 133; continue _fun0015 }
case 134:
            if(!(var7 === var2)) { _fun0015_ip = 135; continue _fun0015 }
case 133:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 35;
            var2 = var10[var2];
            var2 = var8.bind(var1)(var2);
            var7 = var2.ReactionNotifications;
            var2 = var7.getSetting;
            var7 = var2.bind(var7)();
            var2 = 36;
            var2 = var10[var2];
            var2 = var8.bind(var1)(var2);
            var2 = var2.ReactionNotificationType;
            var2 = var2.NOTIFICATIONS_DISABLED;
            if(!(var7 === var2)) { _fun0015_ip = 136; continue _fun0015 }
case 30:
            var2 = false;
            return var2;
case 135:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 34;
            var2 = var8[var2];
            var8 = var7.bind(var1)(var2);
            var7 = var8.getConfig;
            var2 = {};
            var10 = 'handleReactionAdd';
            var2['location'] = var10;
            var2 = var7.bind(var8)(var2);
            var2 = var2.showSettingsToggle;
            if(var2) { _fun0015_ip = 137; continue _fun0015 }
case 138:
            var2 = false;
            return var2;
case 137:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 35;
            var2 = var8[var2];
            var2 = var7.bind(var1)(var2);
            var7 = var2.EnableGdmAllReactionNotifications;
            var2 = var7.getSetting;
            var2 = var2.bind(var7)();
            if(var2) { _fun0015_ip = 136; continue _fun0015 }
case 139:
            var2 = false;
            return var2;
case 136:
            var7 = var3 == var9;
            var2 = undefined;
            if(var7) { _fun0015_ip = 140; continue _fun0015 }
case 141:
            var2 = var9.type;
case 140:
            var2 = var3 != var2;
            if(!var2) { _fun0015_ip = 142; continue _fun0015 }
case 143:
            var8 = var9.type;
            var7 = _closure1_slot19;
            var7 = var7.GUILD_ANNOUNCEMENT;
            var2 = var8 === var7;
case 142:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 29;
            var8 = var8[var7];
            var16 = var10.bind(var1)(var8);
            var15 = var16.isReactionMilestoneNotification;
            var10 = var4.reactions;
            var17 = var3 == var9;
            var8 = undefined;
            if(var17) { _fun0015_ip = 144; continue _fun0015 }
case 145:
            var8 = var9.type;
case 144:
            var8 = var15.bind(var16)(var10, var8);
            if(var2) { _fun0015_ip = 146; continue _fun0015 }
case 147:
            var2 = var8;
case 146:
            var2 = !var2;
            var10 = _closure1_slot14;
            var8 = var10.getGuild;
            var12 = var8.bind(var10)(var12);
            var10 = _closure1_slot17;
            var8 = var10.getUser;
            var11 = var8.bind(var10)(var11);
            if(!(var3 == var11)) { _fun0015_ip = 148; continue _fun0015 }
case 149:
            if(var2) { _fun0015_ip = 150; continue _fun0015 }
case 148:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var15 = var8[var14];
            var16 = var10.bind(var1)(var15);
            var15 = var16.shouldIncludeSelectedChannel;
            var16 = var15.bind(var16)();
            var15 = 37;
            var15 = var8[var15];
            var18 = var10.bind(var1)(var15);
            var17 = var18.getShowInAppReactionNotificationExperiment;
            var15 = 'handleReactionAdd';
            var15 = var17.bind(var18)(var15);
            var15 = var15.enabled;
            var8 = var8[var14];
            var14 = var10.bind(var1)(var8);
            var10 = var14.shouldNotifyForReaction;
            var8 = {};
            var8['message'] = var4;
            var8['channel'] = var9;
            var8['reactor'] = var11;
            var8['includeSelectedChannel'] = var16;
            var8['notifyMessageAuthor'] = var15;
            var8 = var10.bind(var14)(var8);
            if(var8) { _fun0015_ip = 151; continue _fun0015 }
case 152:
            var8 = false;
            return var8;
case 151:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 25;
            var8 = var15[var8];
            var10 = var14.bind(var1)(var8);
            var8 = var10.createMessageRecord;
            var10 = var8.bind(var10)(var4);
            var8 = 26;
            var8 = var15[var8];
            var14 = var14.bind(var1)(var8);
            var8 = var14.isMessageContentPreviewable;
            var8 = var8.bind(var14)(var10);
            if(var8) { _fun0015_ip = 153; continue _fun0015 }
case 154:
            var8 = false;
            return var8;
case 153:
            var14 = var4.reactions;
            var8 = var14.find;
            var4 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.emoji;
                    var4 = var1.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4 === var1;
                    if(!var1) { _fun0016_ip = 155; continue _fun0016 }
case 37:
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = null;
                    var1 = var4 != var5;
case 155:
                    if(var1) { _fun0016_ip = 156; continue _fun0016 }
case 99:
                    var3 = var3.emoji;
                    var3 = var3.name;
                    var2 = _closure2_slot0;
                    var2 = var2.name;
                    var1 = var3 === var2;
case 156:
                    return var1;
                }
            };
            var4 = var8.bind(var14)(var4);
            var14 = var3 != var4;
            var8 = undefined;
            if(!var14) { _fun0015_ip = 157; continue _fun0015 }
case 158:
            var8 = var4;
case 157:
            if(!(var3 == var8)) { _fun0015_ip = 159; continue _fun0015 }
case 160:
            if(var2) { _fun0015_ip = 161; continue _fun0015 }
case 159:
            var3 = _closure1_slot29;
            var2 = {};
            var4 = {};
            var14 = _closure1_slot20;
            var14 = var14.REACTION;
            var4['type'] = var14;
            var4['key'] = var5;
            var15 = _closure1_slot1;
            var5 = _closure1_slot2;
            var14 = 27;
            var14 = var5[var14];
            var14 = var15.bind(var1)(var14);
            var14 = var14.Millis;
            var15 = var14.SECOND;
            var14 = 5;
            var14 = var14 * var15;
            var4['duration'] = var14;
            var13 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var13;
            var4['channel'] = var9;
            var4['guild'] = var12;
            var4['user'] = var11;
            var4['message'] = var10;
            var11 = _closure1_slot13;
            var10 = var11.getChannel;
            var9 = var9.parent_id;
            var9 = var10.bind(var11)(var9);
            var4['parentChannel'] = var9;
            var4['reaction'] = var8;
            var6 = _closure1_slot0;
            var5 = var5[var7];
            var6 = var6.bind(var1)(var5);
            var5 = var6.generateInAppNotificationId;
            var5 = var5.bind(var6)();
            var4['inAppNotificationId'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 161:
            var1 = false;
            return var1;
case 150:
            var1 = false;
            return var1;
case 127:
            var1 = false;
            return var1;
case 124:
            var1 = false;
            return var1;
case 118:
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
            if(!var2) { _fun0017_ip = 162; continue _fun0017 }
case 163:
            var3 = var6.message;
            var2 = null;
            if(!(var2 != var3)) { _fun0017_ip = 162; continue _fun0017 }
case 164:
            var7 = _closure1_slot13;
            var4 = var7.getChannel;
            var3 = var6.saveData;
            var3 = var3.channelId;
            var8 = var4.bind(var7)(var3);
            if(!(var2 != var8)) { _fun0017_ip = 162; continue _fun0017 }
case 165:
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
            var9 = 27;
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
                var1 = 28;
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
            var5 = 29;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.generateInAppNotificationId;
            var5 = var5.bind(var6)();
            var4['inAppNotificationId'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
case 162:
            return var1;
        }
    };
    var2['MESSAGE_REMINDER_DUE'] = var10;
    var10 = function handleThreadCreate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var1 = var1.isNewlyCreated;
            var4 = _closure1_slot13;
            var3 = var4.getChannel;
            var2 = var6.parent_id;
            var8 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var8)) { _fun0018_ip = 48; continue _fun0018 }
case 6:
            var3 = var8.isForumLikeChannel;
            var3 = var3.bind(var8)();
            if(!var3) { _fun0018_ip = 48; continue _fun0018 }
case 57:
            if(var1) { _fun0018_ip = 89; continue _fun0018 }
case 90:
            var1 = false;
            return var1;
case 89:
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 23;
            var4 = var1[var3];
            var1 = undefined;
            var7 = var7.bind(var1)(var4);
            var4 = var7.allowInAppNotifications;
            var4 = var4.bind(var7)();
            if(!var4) { _fun0018_ip = 166; continue _fun0018 }
case 167:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = var10[var3];
            var7 = var9.bind(var1)(var3);
            var4 = var7.shouldNotifyForForumThreadCreation;
            var3 = 30;
            var3 = var10[var3];
            var9 = var9.bind(var1)(var3);
            var3 = var9.isChannelFocused;
            var3 = var3.bind(var9)();
            var3 = !var3;
            var3 = var4.bind(var7)(var6, var8, var3);
            if(var3) { _fun0018_ip = 59; continue _fun0018 }
case 166:
            var3 = false;
            return var3;
case 59:
            var7 = _closure1_slot17;
            var4 = var7.getUser;
            var3 = var6.ownerId;
            var9 = var4.bind(var7)(var3);
            if(!(var2 != var9)) { _fun0018_ip = 168; continue _fun0018 }
case 169:
            var7 = _closure1_slot14;
            var4 = var7.getGuild;
            var3 = var8.guild_id;
            var7 = var4.bind(var7)(var3);
            if(!(var2 != var7)) { _fun0018_ip = 170; continue _fun0018 }
case 171:
            var3 = _closure1_slot29;
            var2 = {};
            var4 = {};
            var10 = _closure1_slot20;
            var10 = var10.FORUM_THREAD_CREATED;
            var4['type'] = var10;
            var4['thread'] = var6;
            var4['threadCreator'] = var9;
            var4['parentChannel'] = var8;
            var4['guild'] = var7;
            var6 = var6.id;
            var4['key'] = var6;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 27;
            var6 = var7[var6];
            var6 = var8.bind(var1)(var6);
            var6 = var6.Millis;
            var8 = var6.SECOND;
            var6 = 5;
            var6 = var6 * var8;
            var4['duration'] = var6;
            var6 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var6;
            var6 = _closure1_slot0;
            var5 = 29;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.generateInAppNotificationId;
            var5 = var5.bind(var6)();
            var4['inAppNotificationId'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 170:
            var1 = false;
            return var1;
case 168:
            var1 = false;
            return var1;
case 48:
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
                    if(var1) { _fun0020_ip = 172; continue _fun0020 }
case 173:
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
case 172:
                    if(var1) { _fun0020_ip = 174; continue _fun0020 }
case 15:
                    var4 = var3.type;
                    var2 = _closure1_slot20;
                    var2 = var2.ALERT;
                    var2 = var4 === var2;
                    if(!var2) { _fun0020_ip = 175; continue _fun0020 }
case 176:
                    var3 = var3.channel;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var2 = var4 === var3;
case 175:
                    var1 = var2;
case 174:
                    return var1;
                }
            };
            var4 = _closure1_slot23;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0019_ip = 155; continue _fun0019 }
case 177:
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = var3.bind(var4)(var5);
case 155:
            if(!var2) { _fun0019_ip = 178; continue _fun0019 }
case 99:
            var6 = _closure1_slot31;
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = 'notification_clicked';
            var2 = var6.bind(var4)(var5, var2);
case 178:
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
                    if(!var1) { _fun0022_ip = 179; continue _fun0022 }
case 173:
                    var1 = _closure2_slot1;
case 179:
                    return var1;
                }
            };
            var4 = _closure1_slot23;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0021_ip = 101; continue _fun0021 }
case 180:
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = var3.bind(var4)(var5);
case 101:
            if(!var2) { _fun0021_ip = 181; continue _fun0021 }
case 11:
            var6 = _closure1_slot31;
            var5 = _closure1_slot23;
            var4 = undefined;
            var2 = 'notification_clicked';
            var2 = var6.bind(var4)(var5, var2);
case 181:
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
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 23;
            var1 = var4[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.allowInAppNotifications;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(!var1) { _fun0023_ip = 182; continue _fun0023 }
case 119:
            var4 = _closure1_slot23;
            var3 = null;
            if(!(var3 != var4)) { _fun0023_ip = 156; continue _fun0023 }
case 99:
            var6 = _closure1_slot31;
            var5 = _closure1_slot23;
            var4 = 'settings_updated';
            var4 = var6.bind(var7)(var5, var4);
            _closure1_slot23 = var3;
case 156:
            var4 = _closure1_slot24;
            var3 = var4.removeAll;
            var2 = function() {
                var1 = true;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 182:
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