// app/modules/local_push_notification/native/LocalPushNotificationStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function handleSchedule(arg1) {
        var3 = _closure1_slot13;
        var2 = var3.add;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function handleCancel(arg1) {
        var4 = arg1;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var3);
        var3 = var5.cancelLocalNotifications;
        var3 = var3.bind(var5)(var4);
        var3 = _closure1_slot13;
        var2 = var3.delete;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var _closure1_slot16 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.LocalNotificationTypes;
    var _closure1_slot10 = var9;
    var8 = var8.FIRE_DATE_FORMAT;
    var _closure1_slot11 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.VerificationLevels;
    var _closure1_slot12 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot13 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function LocalPushNotificationStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'isScheduled';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'LocalPushNotificationStore';
    var8['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleCheckScheduledNotifs() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.getScheduledLocalNotifications;
        var2 = function(arg1) {
            var4 = arg1;
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.userInfo;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 46; continue _fun0003 }
 18:
                    var2 = var2.userInfo;
                    var3 = var2.type;
                    var2 = _closure1_slot10;
                    var2 = var2.GUILD_VERIFICATION;
                    var1 = var3 === var2;
 46:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.userInfo;
                    var5 = var3.guildId;
                    var4 = _closure1_slot8;
                    var2 = var4.getGuild;
                    var4 = var2.bind(var4)(var5);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 68; continue _fun0004 }
 37:
                    var4 = _closure1_slot9;
                    var2 = var4.canChatInGuild;
                    var2 = var2.bind(var4)(var5);
                    if(var2) { _fun0004_ip = 68; continue _fun0004 }
 55:
                    var4 = _closure1_slot15;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0004_ip = 110; continue _fun0004;
 68:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.cancelLocalNotifications;
                    var4 = var4.bind(var5)(var3);
                    var1 = _closure1_slot16;
                    var1 = var1.bind(var2)(var3);
 110:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleGuildVerificationChecked(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var6 = var1.id;
            var2 = _closure1_slot8;
            var1 = var2.getGuild;
            var5 = var1.bind(var2)(var6);
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 442; continue _fun0005 }
 39:
            var3 = _closure1_slot9;
            var2 = var3.getCheck;
            var2 = var2.bind(var3)(var6);
            var3 = var2.canChat;
            if(var3) { _fun0005_ip = 438; continue _fun0005 }
 66:
            var6 = var5.verificationLevel;
            var3 = _closure1_slot12;
            var3 = var3.MEDIUM;
            if(!(var6 !== var3)) { _fun0005_ip = 109; continue _fun0005 }
 86:
            var6 = var5.verificationLevel;
            var3 = _closure1_slot12;
            var3 = var3.HIGH;
            if(!(var6 === var3)) { _fun0005_ip = 438; continue _fun0005 }
 109:
            var6 = var5.verificationLevel;
            var3 = _closure1_slot12;
            var3 = var3.MEDIUM;
            if(!(var3 !== var6)) { _fun0005_ip = 180; continue _fun0005 }
 129:
            var3 = _closure1_slot12;
            var3 = var3.HIGH;
            var7 = undefined;
            var10 = undefined;
            if(!(var3 === var6)) { _fun0005_ip = 213; continue _fun0005 }
 147:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var6 = var6.bind(var7)(var3);
            var3 = var2.memberDeadline;
            var10 = var6.bind(var7)(var3);
            _fun0005_ip = 213; continue _fun0005;
 180:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var3 = var6[var3];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var2 = var2.accountDeadline;
            var10 = var3.bind(var6)(var2);
 213:
            if(!(var1 != var10)) { _fun0005_ip = 438; continue _fun0005 }
 220:
            var3 = var10.isSameOrBefore;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var8 = undefined;
            var1 = var2.bind(var8)(var1);
            var2 = var1.bind(var8)();
            var1 = 'minute';
            var1 = var3.bind(var10)(var2, var1);
            if(var1) { _fun0005_ip = 438; continue _fun0005 }
 268:
            var6 = {};
            var1 = _closure1_slot10;
            var1 = var1.GUILD_VERIFICATION;
            var6['type'] = var1;
            var1 = var5.id;
            var6['guildId'] = var1;
            var1 = _closure1_slot15;
            var1 = var1.bind(var8)(var6);
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var3 = var2.bind(var8)(var1);
            var2 = var3.scheduleLocalNotification;
            var1 = {};
            var1['userInfo'] = var6;
            var7 = var10.format;
            var6 = _closure1_slot11;
            var6 = var7.bind(var10)(var6);
            var1['fireDate'] = var6;
            var5 = var5.name;
            var1['alertTitle'] = var5;
            var7 = _closure1_slot0;
            var4 = 11;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.hrDBa2;
            var4 = var5.bind(var6)(var4);
            var1['alertBody'] = var4;
            var4 = 'local';
            var1['category'] = var4;
            var1 = var2.bind(var3)(var1);
 438:
            var1 = undefined;
            return var1;
 442:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var9;
    var9 = function handleGuildDelete(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.guild;
            var3 = {};
            var4 = _closure1_slot10;
            var4 = var4.GUILD_VERIFICATION;
            var3['type'] = var4;
            var2 = var2.id;
            var3['guildId'] = var2;
            var4 = _closure1_slot13;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(!var2) { _fun0006_ip = 64; continue _fun0006 }
 53:
            var2 = _closure1_slot16;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 64:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var9;
    var4 = function handleCancelAll() {
        var3 = _closure1_slot13;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.cancelAllLocalNotifications;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/local_push_notification/native/LocalPushNotificationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();