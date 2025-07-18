// app/modules/notifications/LastMentionTimestampStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = null;
    var _closure1_slot10 = var4;
    var _closure1_slot11 = var4;
    var _closure1_slot12 = var4;
    var _closure1_slot13 = var4;
    var4 = {};
    var _closure1_slot14 = var4;
    var4 = {};
    var _closure1_slot15 = var4;
    var4 = {};
    var _closure1_slot16 = var4;
    var4 = {};
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Store;
    var4 = function(arg1) {
        var4 = function LastMentionTimestampStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot18;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getGlobalStats';
        var5['key'] = var1;
        var1 = function value() {
            var4 = function age(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var1 = null;
                    var2 = var1 == var5;
                    if(var2) { _fun0003_ip = 60; continue _fun0003 }
 12:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.floor;
                    var6 = var2.Date;
                    var2 = var6.now;
                    var2 = var2.bind(var6)();
                    var5 = var2 - var5;
                    var2 = 1000;
                    var2 = var5 / var2;
                    var1 = var3.bind(var4)(var2);
 60:
                    return var1;
                }
            };
            var1 = {};
            var5 = _closure1_slot10;
            var3 = undefined;
            var5 = var4.bind(var3)(var5);
            var1['approx_seconds_since_last_notification'] = var5;
            var5 = _closure1_slot11;
            var5 = var4.bind(var3)(var5);
            var1['approx_seconds_since_last_mention'] = var5;
            var5 = _closure1_slot12;
            var5 = var4.bind(var3)(var5);
            var1['approx_seconds_since_last_role_mention'] = var5;
            var2 = _closure1_slot13;
            var2 = var4.bind(var3)(var2);
            var1['approx_seconds_since_last_everyone_mention'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getStats';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg1;
                var5 = function age(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var5 = arg1;
                        var1 = null;
                        var2 = var1 == var5;
                        if(var2) { _fun0005_ip = 60; continue _fun0005 }
 12:
                        var2 = global;
                        var4 = var2.Math;
                        var3 = var4.floor;
                        var6 = var2.Date;
                        var2 = var6.now;
                        var2 = var2.bind(var6)();
                        var5 = var2 - var5;
                        var2 = 1000;
                        var2 = var5 / var2;
                        var1 = var3.bind(var4)(var2);
 60:
                        return var1;
                    }
                };
                var1 = {};
                var2 = _closure1_slot10;
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var1['approx_seconds_since_last_notification'] = var2;
                var2 = _closure1_slot11;
                var2 = var5.bind(var4)(var2);
                var1['approx_seconds_since_last_mention'] = var2;
                var2 = _closure1_slot12;
                var2 = var5.bind(var4)(var2);
                var1['approx_seconds_since_last_role_mention'] = var2;
                var2 = _closure1_slot13;
                var2 = var5.bind(var4)(var2);
                var1['approx_seconds_since_last_everyone_mention'] = var2;
                var2 = null;
                var8 = var2 == var6;
                var7 = null;
                if(var8) { _fun0004_ip = 97; continue _fun0004 }
 84:
                var8 = _closure1_slot14;
                var8 = var8[var6];
                var7 = var5.bind(var4)(var8);
 97:
                var1['approx_seconds_since_last_guild_notification'] = var7;
                var8 = var2 == var6;
                var7 = null;
                if(var8) { _fun0004_ip = 126; continue _fun0004 }
 113:
                var8 = _closure1_slot15;
                var8 = var8[var6];
                var7 = var5.bind(var4)(var8);
 126:
                var1['approx_seconds_since_last_guild_mention'] = var7;
                var8 = var2 == var6;
                var7 = null;
                if(var8) { _fun0004_ip = 155; continue _fun0004 }
 142:
                var8 = _closure1_slot17;
                var8 = var8[var6];
                var7 = var5.bind(var4)(var8);
 155:
                var1['approx_seconds_since_last_guild_role_mention'] = var7;
                var7 = var2 == var6;
                var2 = null;
                if(var7) { _fun0004_ip = 184; continue _fun0004 }
 171:
                var3 = _closure1_slot16;
                var3 = var3[var6];
                var2 = var5.bind(var4)(var3);
 184:
                var1['approx_seconds_since_last_guild_everyone_mention'] = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var7);
    var4 = 8;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function handleConnectionOpen() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = function isRecent(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 43; continue _fun0007 }
 12:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var3 = var2 - var3;
                    var2 = 60000;
                    var1 = var3 < var2;
 43:
                    return var1;
                }
            };
            var2 = _closure1_slot10;
            var1 = undefined;
            var2 = var8.bind(var1)(var2);
            if(var2) { _fun0006_ip = 30; continue _fun0006 }
 24:
            var2 = null;
            _closure1_slot10 = var2;
 30:
            var2 = _closure1_slot11;
            var2 = var8.bind(var1)(var2);
            if(var2) { _fun0006_ip = 48; continue _fun0006 }
 42:
            var2 = null;
            _closure1_slot11 = var2;
 48:
            var2 = _closure1_slot12;
            var2 = var8.bind(var1)(var2);
            if(var2) { _fun0006_ip = 66; continue _fun0006 }
 60:
            var2 = null;
            _closure1_slot12 = var2;
 66:
            var2 = _closure1_slot13;
            var2 = var8.bind(var1)(var2);
            if(var2) { _fun0006_ip = 84; continue _fun0006 }
 78:
            var2 = null;
            _closure1_slot13 = var2;
 84:
            var5 = _closure1_slot14;
            for(var2 in var5)
 96:
            {
 105:
                var10 = var2;
                var9 = _closure1_slot14;
                var9 = var9[var10];
                var9 = var8.bind(var1)(var9);
                if(var9) { _fun0006_ip = 96; continue _fun0006 }
 124:
                var9 = _closure1_slot14;
                var9 = delete var9[var10];
                _fun0006_ip = 96; continue _fun0006;
            }
 134:
            var5 = _closure1_slot15;
            for(var2 in var5)
 146:
            {
 155:
                var10 = var2;
                var9 = _closure1_slot15;
                var9 = var9[var10];
                var9 = var8.bind(var1)(var9);
                if(var9) { _fun0006_ip = 146; continue _fun0006 }
 174:
                var9 = _closure1_slot15;
                var9 = delete var9[var10];
                _fun0006_ip = 146; continue _fun0006;
            }
 184:
            var5 = _closure1_slot17;
            for(var2 in var5)
 196:
            {
 205:
                var10 = var2;
                var9 = _closure1_slot17;
                var9 = var9[var10];
                var9 = var8.bind(var1)(var9);
                if(var9) { _fun0006_ip = 196; continue _fun0006 }
 224:
                var9 = _closure1_slot17;
                var9 = delete var9[var10];
                _fun0006_ip = 196; continue _fun0006;
            }
 234:
            var5 = _closure1_slot16;
            for(var2 in var5)
 246:
            {
 255:
                var10 = var2;
                var9 = _closure1_slot16;
                var9 = var9[var10];
                var9 = var8.bind(var1)(var9);
                if(var9) { _fun0006_ip = 246; continue _fun0006 }
 274:
                var9 = _closure1_slot16;
                var9 = delete var9[var10];
                _fun0006_ip = 246; continue _fun0006;
            }
 284:
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var5;
    var5 = function handleMessageNotificationShown(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var7 = var1.mentioned;
            var6 = var1.roleMentioned;
            var5 = var1.everyoneMentioned;
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            _closure1_slot10 = var2;
            var4 = null;
            if(!(var4 != var3)) { _fun0008_ip = 64; continue _fun0008 }
 56:
            var8 = _closure1_slot14;
            var8[var3] = var2;
 64:
            if(!var7) { _fun0008_ip = 83; continue _fun0008 }
 67:
            _closure1_slot11 = var2;
            if(!(var4 != var3)) { _fun0008_ip = 83; continue _fun0008 }
 75:
            var7 = _closure1_slot15;
            var7[var3] = var2;
 83:
            if(!var6) { _fun0008_ip = 102; continue _fun0008 }
 86:
            _closure1_slot12 = var2;
            if(!(var4 != var3)) { _fun0008_ip = 102; continue _fun0008 }
 94:
            var6 = _closure1_slot17;
            var6[var3] = var2;
 102:
            if(!var5) { _fun0008_ip = 121; continue _fun0008 }
 105:
            _closure1_slot13 = var2;
            if(!(var4 != var3)) { _fun0008_ip = 121; continue _fun0008 }
 113:
            var1 = _closure1_slot16;
            var1[var3] = var2;
 121:
            var1 = undefined;
            return var1;
        }
    };
    var4['MESSAGE_NOTIFICATION_SHOWN'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var12 = var5;
    var10 = var4;
    var4 = new var12[var8](var11, var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 10;
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notifications/LastMentionTimestampStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function trackMessageNotificationTimestamps(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var10 = arg2;
            var4 = _closure1_slot9;
            var1 = var4.getCurrentUser;
            var4 = var1.bind(var4)();
            var11 = null;
            var6 = var11 == var4;
            var1 = undefined;
            var13 = undefined;
            if(var6) { _fun0009_ip = 42; continue _fun0009 }
 37:
            var13 = var4.id;
 42:
            var _closure2_slot0 = var13;
            var7 = _closure1_slot8;
            var4 = var7.isSuppressEveryoneEnabled;
            var6 = var4.bind(var7)(var10);
            var4 = var7.isSuppressRolesEnabled;
            var8 = var4.bind(var7)(var10);
            var4 = var5.mentions;
            var9 = var11 != var4;
            if(!var9) { _fun0009_ip = 107; continue _fun0009 }
 85:
            var12 = var5.mentions;
            var7 = var12.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var9 = var7.bind(var12)(var4);
 107:
            var7 = var11 == var10;
            var4 = null;
            if(var7) { _fun0009_ip = 141; continue _fun0009 }
 116:
            var7 = var11 == var13;
            var4 = null;
            if(var7) { _fun0009_ip = 141; continue _fun0009 }
 125:
            var12 = _closure1_slot7;
            var7 = var12.getMember;
            var4 = var7.bind(var12)(var10, var13);
 141:
            var _closure2_slot1 = var4;
            var7 = var5.mention_roles;
            var7 = var11 != var7;
            if(!var7) { _fun0009_ip = 162; continue _fun0009 }
 158:
            var7 = var11 != var4;
 162:
            if(!var7) { _fun0009_ip = 175; continue _fun0009 }
 165:
            var4 = var4.roles;
            var7 = var11 != var4;
 175:
            if(!var7) { _fun0009_ip = 200; continue _fun0009 }
 178:
            var11 = var5.mention_roles;
            var4 = var11.some;
            var3 = function(arg1) {
                var1 = _closure2_slot1;
                var3 = var1.roles;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var11)(var3);
 200:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 8;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var11 = 'MESSAGE_NOTIFICATION_SHOWN';
            var2['type'] = var11;
            var2['guildId'] = var10;
            var2['mentioned'] = var9;
            if(!var7) { _fun0009_ip = 252; continue _fun0009 }
 249:
            var7 = !var8;
 252:
            var2['roleMentioned'] = var7;
            var7 = var5.mention_everyone;
            var5 = true;
            var5 = var5 === var7;
            if(!var5) { _fun0009_ip = 275; continue _fun0009 }
 272:
            var5 = !var6;
 275:
            var2['everyoneMentioned'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['trackMessageNotificationTimestamps'] = var2;
    return var1;
})();