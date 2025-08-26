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
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var10 = function handleAlertMessage() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.allowInAppNotifications;
            var1 = var1.bind(var2)();
            if(var1) { _fun0002_ip = 44; continue _fun0002 }
 40:
            var1 = false;
            return var1;
 44:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 30;
            var1 = var1[var12];
            var2 = var2.bind(var4)(var1);
            var1 = var2.shouldShowRaidInAppNotification;
            var2 = var1.bind(var2)();
            var1 = var2.show;
            var13 = var2.guildId;
            if(!var1) { _fun0002_ip = 350; continue _fun0002 }
 91:
            var1 = null;
            if(!(var1 != var13)) { _fun0002_ip = 350; continue _fun0002 }
 100:
            var3 = _closure1_slot15;
            var2 = var3.getGuild;
            var8 = var2.bind(var3)(var13);
            var _closure2_slot0 = var8;
            if(!(var1 != var8)) { _fun0002_ip = 346; continue _fun0002 }
 125:
            var5 = _closure1_slot14;
            var3 = var5.getChannel;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 31;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var8);
            var9 = var3.bind(var5)(var2);
            var _closure2_slot1 = var9;
            var1 = var1 != var9;
            if(!var1) { _fun0002_ip = 344; continue _fun0002 }
 178:
            var3 = _closure1_slot17;
            var2 = var3.getChannelId;
            var3 = var2.bind(var3)();
            var2 = var9.id;
            var2 = var3 !== var2;
            if(!var2) { _fun0002_ip = 341; continue _fun0002 }
 207:
            var6 = _closure1_slot23;
            var5 = var6.wasRecentlyDismissed;
            var3 = {};
            var3['guild'] = var8;
            var3['channel'] = var9;
            var3 = var5.bind(var6)(var3);
            var3 = !var3;
            if(!var3) { _fun0002_ip = 338; continue _fun0002 }
 240:
            var6 = _closure1_slot28;
            var5 = {};
            var7 = {};
            var14 = _closure1_slot20;
            var14 = var14.ALERT;
            var7['type'] = var14;
            var7['key'] = var13;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 32;
            var11 = var14[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.Millis;
            var11 = var11.SECOND;
            var11 = var12 * var11;
            var7['duration'] = var11;
            var10 = function onDismiss() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 29;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.clearNotification;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot23;
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
 338:
            var2 = var3;
 341:
            var1 = var2;
 344:
            return var1;
 346:
            var1 = false;
            return var1;
 350:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot27 = var10;
    var9 = function handleEnqueueNotification(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.notification;
            var3 = _closure1_slot25;
            var2 = var3.enqueue;
            var2 = var2.bind(var3)(var4);
            var3 = _closure1_slot24;
            var2 = null;
            if(!(var2 == var3)) { _fun0003_ip = 47; continue _fun0003 }
 37:
            var2 = _closure1_slot29;
            var1 = undefined;
            var1 = var2.bind(var1)();
 47:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot28 = var9;
    var1 = function showNextNotification() {
        var3 = _closure1_slot25;
        var1 = var3.tryDrain;
        var1 = var1.bind(var3)();
        _closure1_slot24 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function rejectNotifications(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot25;
            var2 = var3.removeAll;
            var2 = var2.bind(var3)(var5);
            var2 = _closure1_slot24;
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 47; continue _fun0004 }
 33:
            var4 = _closure1_slot24;
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            if(var4) { _fun0004_ip = 71; continue _fun0004 }
 47:
            var4 = _closure1_slot24;
            if(!(var3 == var4)) { _fun0004_ip = 67; continue _fun0004 }
 55:
            var5 = _closure1_slot29;
            var4 = undefined;
            var4 = var5.bind(var4)();
            _fun0004_ip = 83; continue _fun0004;
 67:
            var4 = false;
            return var4;
 71:
            _closure1_slot24 = var3;
            var1 = _closure1_slot29;
            var1 = var1.bind(var2)();
 83:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
    var8 = var2.ChannelTypes;
    var _closure1_slot19 = var8;
    var8 = var2.InAppNotificationTypes;
    var _closure1_slot20 = var8;
    var2 = var2.MessageTypesSets;
    var _closure1_slot21 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityPanelModes;
    var _closure1_slot22 = var2;
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                if(!(var5 != var4)) { _fun0005_ip = 143; continue _fun0005 }
 78:
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
 143:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'wasRecentlyDismissed';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                if(!(var1 != var4)) { _fun0006_ip = 208; continue _fun0006 }
 81:
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
                if(!var1) { _fun0006_ip = 206; continue _fun0006 }
 128:
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
 206:
                return var1;
 208:
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
    var _closure1_slot23 = var2;
    var2 = null;
    var _closure1_slot24 = var2;
    var2 = function() {
        var4 = _closure1_slot7;
        var3 = function NotificationQueue() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0007_ip = 15; continue _fun0007 }
 12:
                var3 = 2;
 15:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = this;
                var2 = var1.isFull;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0008_ip = 34; continue _fun0008 }
 18:
                var3 = var1.queue;
                var2 = var3.shift;
                var2 = var2.bind(var3)();
 34:
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
    var _closure1_slot25 = var2;
    var2 = 39;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function InAppNotificationStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 105; continue _fun0009;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
            var9 = var4.waitFor;
            var15 = _closure1_slot18;
            var14 = _closure1_slot14;
            var13 = _closure1_slot15;
            var12 = _closure1_slot16;
            var11 = _closure1_slot12;
            var5 = _closure1_slot10;
            var16 = var4;
            var10 = var5;
            var2 = var16[var9](var15, var14, var13, var12, var11, var10, var9);
            var3 = var4.syncWith;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot27;
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
            var1 = _closure1_slot24;
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
    var2 = 40;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['POST_CONNECTION_OPEN'] = var10;
    var2['GUILD_UPDATE'] = var10;
    var10 = function handleIncomingMessage(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.message;
            var2 = var1.optimistic;
            var5 = var4.channel_id;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 22;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var3);
            var3 = var7.canViewPotentiallyNSFWChannel;
            var3 = var3.bind(var7)(var5);
            if(var3) { _fun0010_ip = 62; continue _fun0010 }
 58:
            var3 = false;
            return var3;
 62:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 23;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.bind(var1)(var4);
            if(!var3) { _fun0010_ip = 122; continue _fun0010 }
 90:
            var3 = _closure1_slot21;
            var8 = var3.SELF_MENTIONABLE_SYSTEM;
            var7 = var8.has;
            var3 = var4.type;
            var3 = var7.bind(var8)(var3);
            if(var3) { _fun0010_ip = 122; continue _fun0010 }
 118:
            var3 = false;
            return var3;
 122:
            if(var2) { _fun0010_ip = 630; continue _fun0010 }
 128:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 24;
            var2 = var2[var8];
            var3 = var3.bind(var1)(var2);
            var2 = var3.allowInAppNotifications;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0010_ip = 630; continue _fun0010 }
 164:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 25;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0010_ip = 630; continue _fun0010 }
 200:
            var3 = _closure1_slot9;
            var2 = var3.getChatOpen;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0010_ip = 630; continue _fun0010 }
 221:
            var3 = _closure1_slot13;
            var2 = var3.getState;
            var3 = var2.bind(var3)();
            var2 = var3.isVoicePanelFullscreen;
            var2 = var2.bind(var3)();
            var7 = true;
            if(var2) { _fun0010_ip = 392; continue _fun0010 }
 253:
            var3 = _closure1_slot8;
            var2 = var3.getConnectedActivityLocation;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0010_ip = 303; continue _fun0010 }
 273:
            var9 = _closure1_slot8;
            var3 = var9.getActivityPanelMode;
            var9 = var3.bind(var9)();
            var3 = _closure1_slot22;
            var3 = var3.PANEL;
            var7 = true;
            if(!(var9 !== var3)) { _fun0010_ip = 392; continue _fun0010 }
 303:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 26;
            var3 = var10[var3];
            var9 = var9.bind(var1)(var3);
            var3 = var9.getRootNavigationRef;
            var9 = var3.bind(var9)();
            var2 = var2 == var9;
            if(var2) { _fun0010_ip = 353; continue _fun0010 }
 340:
            var3 = var9.isReady;
            var3 = var3.bind(var9)();
            var2 = !var3;
 353:
            if(var2) { _fun0010_ip = 389; continue _fun0010 }
 356:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 27;
            var3 = var10[var3];
            var9 = var9.bind(var1)(var3);
            var3 = var9.isChannelFocused;
            var3 = var3.bind(var9)();
            var2 = !var3;
 389:
            var7 = var2;
 392:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var3 = var3.bind(var1)(var2);
            var2 = var3.shouldNotify;
            var2 = var2.bind(var3)(var4, var5, var7);
            if(var2) { _fun0010_ip = 429; continue _fun0010 }
 425:
            var2 = false;
            return var2;
 429:
            var3 = _closure1_slot14;
            var2 = var3.getChannel;
            var5 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var5)) { _fun0010_ip = 626; continue _fun0010 }
 452:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 28;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.createMessageRecord;
            var7 = var2.bind(var3)(var4);
            var3 = _closure1_slot11;
            var2 = var5.guild_id;
            var2 = var3.bind(var1)(var4, var2);
            var3 = _closure1_slot28;
            var2 = {};
            var4 = {};
            var8 = _closure1_slot20;
            var8 = var8.MESSAGE;
            var4['type'] = var8;
            var10 = _closure1_slot15;
            var9 = var10.getGuild;
            var8 = var5.getGuildId;
            var8 = var8.bind(var5)();
            var8 = var9.bind(var10)(var8);
            var4['guild'] = var8;
            var4['channel'] = var5;
            var4['message'] = var7;
            var7 = var7.id;
            var4['key'] = var7;
            var7 = 5000;
            var4['duration'] = var7;
            var7 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var7;
            var7 = _closure1_slot14;
            var6 = var7.getChannel;
            var5 = var5.parent_id;
            var5 = var6.bind(var7)(var5);
            var4['parentChannel'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
 626:
            var1 = false;
            return var1;
 630:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var10 = function handleReactionNotification(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var10 = var2.message;
            var6 = var2.route;
            var1 = var2.emoji;
            var _closure2_slot0 = var1;
            var13 = var2.reactorUserId;
            var4 = null;
            if(!(var4 != var10)) { _fun0011_ip = 753; continue _fun0011 }
 41:
            var2 = var10.reactions;
            if(!(var4 != var2)) { _fun0011_ip = 753; continue _fun0011 }
 54:
            if(!(var4 != var1)) { _fun0011_ip = 753; continue _fun0011 }
 61:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 24;
            var2 = var1[var5];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.allowInAppNotifications;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0011_ip = 753; continue _fun0011 }
 102:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 33;
            var2 = var8[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.tryParseChannelPath;
            var2 = var2.bind(var3)(var6);
            if(!(var4 == var2)) { _fun0011_ip = 151; continue _fun0011 }
 137:
            var2 = {'channelId': null, 'guildId': null};
 151:
            var11 = var2.channelId;
            var9 = var2.guildId;
            if(!(var4 != var11)) { _fun0011_ip = 749; continue _fun0011 }
 168:
            var3 = _closure1_slot17;
            var2 = var3.getCurrentlySelectedChannelId;
            var2 = var2.bind(var3)();
            if(!(var2 !== var11)) { _fun0011_ip = 749; continue _fun0011 }
 189:
            if(!(var4 != var9)) { _fun0011_ip = 749; continue _fun0011 }
 196:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 34;
            var2 = var8[var2];
            var2 = var6.bind(var1)(var2);
            var3 = var2.ReactionNotifications;
            var2 = var3.getSetting;
            var3 = var2.bind(var3)();
            var2 = 35;
            var2 = var8[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.ReactionNotificationType;
            var2 = var2.NOTIFICATIONS_DISABLED;
            if(!(var3 !== var2)) { _fun0011_ip = 745; continue _fun0011 }
 263:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.shouldNotify;
            var2 = var2.bind(var3)(var10, var11);
            if(var2) { _fun0011_ip = 299; continue _fun0011 }
 295:
            var2 = false;
            return var2;
 299:
            var3 = _closure1_slot14;
            var2 = var3.getChannel;
            var6 = var2.bind(var3)(var11);
            var3 = var4 == var6;
            var2 = undefined;
            if(var3) { _fun0011_ip = 327; continue _fun0011 }
 322:
            var2 = var6.type;
 327:
            var3 = var4 != var2;
            if(!var3) { _fun0011_ip = 353; continue _fun0011 }
 334:
            var5 = var6.type;
            var2 = _closure1_slot19;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var3 = var5 === var2;
 353:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 36;
            var2 = var8[var2];
            var14 = var5.bind(var1)(var2);
            var8 = var14.isReactionMilestoneNotification;
            var5 = var10.reactions;
            var15 = var4 == var6;
            var2 = undefined;
            if(var15) { _fun0011_ip = 399; continue _fun0011 }
 394:
            var2 = var6.type;
 399:
            var2 = var8.bind(var14)(var5, var2);
            var8 = _closure1_slot15;
            var5 = var8.getGuild;
            var9 = var5.bind(var8)(var9);
            var8 = _closure1_slot18;
            var5 = var8.getUser;
            var8 = var5.bind(var8)(var13);
            if(!(var4 != var6)) { _fun0011_ip = 741; continue _fun0011 }
 441:
            if(!(var4 == var8)) { _fun0011_ip = 451; continue _fun0011 }
 445:
            if(!var3) { _fun0011_ip = 741; continue _fun0011 }
 451:
            var14 = var10.reactions;
            var13 = var14.find;
            var5 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = arg1;
                    var1 = var3.emoji;
                    var4 = var1.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4 === var1;
                    if(!var1) { _fun0012_ip = 48; continue _fun0012 }
 33:
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = null;
                    var1 = var4 != var5;
 48:
                    if(var1) { _fun0012_ip = 75; continue _fun0012 }
 51:
                    var3 = var3.emoji;
                    var3 = var3.name;
                    var2 = _closure2_slot0;
                    var2 = var2.name;
                    var1 = var3 === var2;
 75:
                    return var1;
                }
            };
            var13 = var13.bind(var14)(var5);
            var14 = var4 != var13;
            var5 = undefined;
            if(!var14) { _fun0011_ip = 486; continue _fun0011 }
 483:
            var5 = var13;
 486:
            if(!(var4 == var5)) { _fun0011_ip = 500; continue _fun0011 }
 490:
            if(var3) { _fun0011_ip = 500; continue _fun0011 }
 493:
            if(var2) { _fun0011_ip = 500; continue _fun0011 }
 496:
            var2 = false;
            return var2;
 500:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 37;
            var2 = var4[var2];
            var13 = var3.bind(var1)(var2);
            var4 = var13.getCurrentConfig;
            var3 = {};
            var2 = 'handleReactionAdd';
            var3['location'] = var2;
            var2 = {};
            var14 = true;
            var2['autoTrackExposure'] = var14;
            var2 = var4.bind(var13)(var3, var2);
            var3 = var2.enableInAppNotifications;
            var2 = var2.enableNotificationsForAllReactions;
            if(!var3) { _fun0011_ip = 571; continue _fun0011 }
 568:
            if(var2) { _fun0011_ip = 575; continue _fun0011 }
 571:
            var2 = false;
            return var2;
 575:
            var3 = _closure1_slot28;
            var2 = {};
            var4 = {};
            var13 = _closure1_slot20;
            var13 = var13.REACTION;
            var4['type'] = var13;
            var4['key'] = var11;
            var14 = _closure1_slot1;
            var11 = _closure1_slot2;
            var13 = 32;
            var13 = var11[var13];
            var13 = var14.bind(var1)(var13);
            var13 = var13.Millis;
            var14 = var13.SECOND;
            var13 = 5;
            var13 = var13 * var14;
            var4['duration'] = var13;
            var12 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var12;
            var4['channel'] = var6;
            var4['guild'] = var9;
            var4['user'] = var8;
            var9 = _closure1_slot0;
            var8 = 28;
            var8 = var11[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.createMessageRecord;
            var8 = var8.bind(var9)(var10);
            var4['message'] = var8;
            var8 = _closure1_slot14;
            var7 = var8.getChannel;
            var6 = var6.parent_id;
            var6 = var7.bind(var8)(var6);
            var4['parentChannel'] = var6;
            var4['reaction'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
 741:
            var1 = false;
            return var1;
 745:
            var1 = false;
            return var1;
 749:
            var1 = false;
            return var1;
 753:
            var1 = false;
            return var1;
        }
    };
    var2['REACTION_NOTIFICATION_SENT'] = var10;
    var10 = function handleMessageReminderDue(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var5 = var1.savedMessage;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 38;
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
            if(!var2) { _fun0013_ip = 292; continue _fun0013 }
 78:
            var3 = var5.message;
            var2 = null;
            if(!(var2 != var3)) { _fun0013_ip = 292; continue _fun0013 }
 92:
            var6 = _closure1_slot14;
            var4 = var6.getChannel;
            var3 = var5.saveData;
            var3 = var3.channelId;
            var6 = var4.bind(var6)(var3);
            if(!(var2 != var6)) { _fun0013_ip = 292; continue _fun0013 }
 124:
            var3 = _closure1_slot28;
            var2 = {};
            var4 = {};
            var8 = _closure1_slot20;
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
            var7 = 32;
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
                var1 = 29;
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
 292:
            return var1;
        }
    };
    var2['MESSAGE_REMINDER_DUE'] = var10;
    var10 = function handleThreadCreate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var5 = var1.channel;
            var1 = var1.isNewlyCreated;
            var4 = _closure1_slot14;
            var3 = var4.getChannel;
            var2 = var5.parent_id;
            var7 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var7)) { _fun0014_ip = 308; continue _fun0014 }
 46:
            var3 = var7.isForumLikeChannel;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0014_ip = 308; continue _fun0014 }
 62:
            if(var1) { _fun0014_ip = 69; continue _fun0014 }
 65:
            var1 = false;
            return var1;
 69:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 24;
            var4 = var1[var3];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.allowInAppNotifications;
            var4 = var4.bind(var6)();
            if(!var4) { _fun0014_ip = 162; continue _fun0014 }
 104:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = var10[var3];
            var6 = var8.bind(var1)(var3);
            var4 = var6.shouldNotifyForForumThreadCreation;
            var3 = 27;
            var3 = var10[var3];
            var8 = var8.bind(var1)(var3);
            var3 = var8.isChannelFocused;
            var3 = var3.bind(var8)();
            var3 = !var3;
            var3 = var4.bind(var6)(var5, var7, var3);
            if(var3) { _fun0014_ip = 166; continue _fun0014 }
 162:
            var3 = false;
            return var3;
 166:
            var6 = _closure1_slot18;
            var4 = var6.getUser;
            var3 = var5.ownerId;
            var8 = var4.bind(var6)(var3);
            if(!(var2 != var8)) { _fun0014_ip = 304; continue _fun0014 }
 191:
            var6 = _closure1_slot15;
            var4 = var6.getGuild;
            var3 = var7.guild_id;
            var6 = var4.bind(var6)(var3);
            if(!(var2 != var6)) { _fun0014_ip = 300; continue _fun0014 }
 214:
            var3 = _closure1_slot28;
            var2 = {};
            var4 = {};
            var9 = _closure1_slot20;
            var9 = var9.FORUM_THREAD_CREATED;
            var4['type'] = var9;
            var4['thread'] = var5;
            var4['threadCreator'] = var8;
            var4['parentChannel'] = var7;
            var4['guild'] = var6;
            var5 = var5.id;
            var4['key'] = var5;
            var5 = 5000;
            var4['duration'] = var5;
            var5 = function onDismiss() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearNotification;
                var2 = var2.bind(var3)();
                return var1;
            };
            var4['onDismiss'] = var5;
            var2['notification'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
 300:
            var1 = false;
            return var1;
 304:
            var1 = false;
            return var1;
 308:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_CREATE'] = var10;
    var10 = function handleClearInAppNotification() {
        var2 = null;
        _closure1_slot24 = var2;
        var2 = _closure1_slot29;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CLEAR_IN_APP_NOTIFICATION'] = var10;
    var2['ENQUEUE_IN_APP_NOTIFICATION'] = var9;
    var9 = function handleChannelSelect(arg1) {
        var2 = arg1;
        var2 = var2.channelId;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot30;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = arg1;
                var4 = var3.type;
                var1 = _closure1_slot20;
                var1 = var1.MESSAGE;
                var1 = var4 === var1;
                if(!var1) { _fun0015_ip = 49; continue _fun0015 }
 28:
                var4 = var3.channel;
                var5 = var4.id;
                var4 = _closure2_slot0;
                var1 = var5 === var4;
 49:
                if(var1) { _fun0015_ip = 93; continue _fun0015 }
 52:
                var5 = var3.type;
                var4 = _closure1_slot20;
                var4 = var4.MESSAGE_FAILED_TO_SEND;
                var4 = var5 === var4;
                if(!var4) { _fun0015_ip = 90; continue _fun0015 }
 74:
                var6 = var3.channelId;
                var5 = _closure2_slot0;
                var4 = var6 === var5;
 90:
                var1 = var4;
 93:
                if(var1) { _fun0015_ip = 142; continue _fun0015 }
 96:
                var4 = var3.type;
                var2 = _closure1_slot20;
                var2 = var2.ALERT;
                var2 = var4 === var2;
                if(!var2) { _fun0015_ip = 139; continue _fun0015 }
 118:
                var3 = var3.channel;
                var4 = var3.id;
                var3 = _closure2_slot0;
                var2 = var4 === var3;
 139:
                var1 = var2;
 142:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleVoiceChatOpen(arg1) {
        var2 = arg1;
        var3 = var2.channelId;
        var _closure2_slot0 = var3;
        var2 = var2.chatOpen;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot30;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var2 = arg1;
                var3 = var2.type;
                var1 = _closure1_slot20;
                var1 = var1.MESSAGE;
                var1 = var3 === var1;
                if(!var1) { _fun0016_ip = 49; continue _fun0016 }
 28:
                var2 = var2.channel;
                var3 = var2.id;
                var2 = _closure2_slot0;
                var1 = var3 === var2;
 49:
                if(!var1) { _fun0016_ip = 59; continue _fun0016 }
 52:
                var1 = _closure2_slot1;
 59:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var2['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var9;
    var4 = function handleUserSettingsUpdate() {
        var3 = _closure1_slot30;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure1_slot20;
            var1 = var1.MESSAGE;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/native/InAppNotificationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();