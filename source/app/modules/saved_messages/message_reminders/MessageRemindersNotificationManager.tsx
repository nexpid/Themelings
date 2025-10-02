// app/modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function scheduleNextNotification() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var6 = var7.getCurrentConfig;
            var5 = {};
            var4 = 'MessageRemindersNotificationManager';
            var5['location'] = var4;
            var4 = {};
            var8 = false;
            var4['autoTrackExposure'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var4 = var4.enabled;
            if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = _closure1_slot8;
            var4 = null;
            if(!(var4 != var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = global;
            var6 = var5.clearTimeout;
            var5 = _closure1_slot8;
            var5 = var6.bind(var1)(var5);
case 8:
            var6 = _closure1_slot7;
            var5 = var6.getMessageReminders;
            var7 = var5.bind(var6)();
            var6 = var7.find;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.saveData;
                    var3 = var1.dueAt;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = var2.saveData;
                    var3 = var2.dueAt;
                    var2 = global;
                    var2 = var2.Date;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var5 = var4;
                    var2 = new var5[var2](var4);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var1 = var3 > var2;
case 10:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var _closure2_slot0 = var5;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var7 = var5.saveData;
            var8 = var4 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var6 = var7.dueAt;
case 12:
            if(!(var4 == var6)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            _closure1_slot8 = var4;
            _fun0002_ip = 6; continue _fun0002;
case 15:
            var4 = global;
            var7 = var4.Date;
            var6 = var7.now;
            var7 = var6.bind(var7)();
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 8;
            var6 = var9[var6];
            var6 = var8.bind(var1)(var6);
            var6 = var6.Millis;
            var6 = var6.WEEK;
            var7 = var7 + var6;
            var6 = var5.saveData;
            var8 = var6.dueAt;
            var6 = var8.getTime;
            var6 = var6.bind(var8)();
            if(!(!(var6 > var7))) { _fun0002_ip = 6; continue _fun0002 }
case 17:
            var5 = var5.saveData;
            var6 = var5.dueAt;
            var5 = var6.getTime;
            var6 = var5.bind(var6)();
            var7 = var4.Date;
            var5 = var7.now;
            var5 = var5.bind(var7)();
            var5 = var6 - var5;
            var4 = var4.setTimeout;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var5 = var7.getCurrentConfig;
                    var4 = {};
                    var3 = 'MessageRemindersNotificationManager';
                    var4['location'] = var3;
                    var3 = {};
                    var8 = false;
                    var3['autoTrackExposure'] = var8;
                    var3 = var5.bind(var7)(var4, var3);
                    var3 = var3.enabled;
                    if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 7;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'MESSAGE_REMINDER_DUE';
                    var3['type'] = var7;
                    var3['savedMessage'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot10;
                    var2 = var2.bind(var1)();
case 18:
                    return var1;
                }
            };
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot8 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = null;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function MessageRemindersNotificationManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 20; continue _fun0005 }
case 19:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 21; continue _fun0005;
case 20:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 21:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function SAVED_MESSAGES_UPDATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUpdates;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['SAVED_MESSAGES_UPDATE'] = var4;
                var4 = function SAVED_MESSAGE_CREATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUpdates;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['SAVED_MESSAGE_CREATE'] = var4;
                var4 = function SAVED_MESSAGE_DELETE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUpdates;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['SAVED_MESSAGE_DELETE'] = var4;
                var1['actions'] = var3;
                var2 = function() {
                    var2 = _closure1_slot10;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1['handleUpdates'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();