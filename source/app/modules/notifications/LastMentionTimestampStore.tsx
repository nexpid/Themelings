// app/modules/notifications/LastMentionTimestampStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
case 0:
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
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
case 0:
                    var5 = arg1;
                    var1 = null;
                    var2 = var1 == var5;
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
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
case 9:
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
case 0:
                var6 = arg1;
                var5 = function age(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var5 = arg1;
                        var1 = null;
                        var2 = var1 == var5;
                        if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 10:
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
case 9:
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
                if(var8) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var8 = _closure1_slot14;
                var8 = var8[var6];
                var7 = var5.bind(var4)(var8);
case 11:
                var1['approx_seconds_since_last_guild_notification'] = var7;
                var8 = var2 == var6;
                var7 = null;
                if(var8) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var8 = _closure1_slot15;
                var8 = var8[var6];
                var7 = var5.bind(var4)(var8);
case 13:
                var1['approx_seconds_since_last_guild_mention'] = var7;
                var8 = var2 == var6;
                var7 = null;
                if(var8) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var8 = _closure1_slot17;
                var8 = var8[var6];
                var7 = var5.bind(var4)(var8);
case 15:
                var1['approx_seconds_since_last_guild_role_mention'] = var7;
                var7 = var2 == var6;
                var2 = null;
                if(var7) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var3 = _closure1_slot16;
                var3 = var3[var6];
                var2 = var5.bind(var4)(var3);
case 17:
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
case 0:
            var8 = function isRecent(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 19; continue _fun0007 }
case 10:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var3 = var2 - var3;
                    var2 = 60000;
                    var1 = var3 < var2;
case 19:
                    return var1;
                }
            };
            var2 = _closure1_slot10;
            var1 = undefined;
            var2 = var8.bind(var1)(var2);
            if(var2) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var2 = null;
            _closure1_slot10 = var2;
case 20:
            var2 = _closure1_slot11;
            var2 = var8.bind(var1)(var2);
            if(var2) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var2 = null;
            _closure1_slot11 = var2;
case 22:
            var2 = _closure1_slot12;
            var2 = var8.bind(var1)(var2);
            if(var2) { _fun0006_ip = 24; continue _fun0006 }
case 9:
            var2 = null;
            _closure1_slot12 = var2;
case 24:
            var2 = _closure1_slot13;
            var2 = var8.bind(var1)(var2);
            if(var2) { _fun0006_ip = 12; continue _fun0006 }
case 25:
            var2 = null;
            _closure1_slot13 = var2;
case 12:
            var5 = _closure1_slot14;
            for(var2 in var5)
case 26:
            {
case 8:
                var10 = var2;
                var9 = _closure1_slot14;
                var9 = var9[var10];
                var9 = var8.bind(var1)(var9);
                if(var9) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var9 = _closure1_slot14;
                var9 = delete var9[var10];
                _fun0006_ip = 26; continue _fun0006;
            }
case 28:
            var5 = _closure1_slot15;
            for(var2 in var5)
case 29:
            {
case 15:
                var10 = var2;
                var9 = _closure1_slot15;
                var9 = var9[var10];
                var9 = var8.bind(var1)(var9);
                if(var9) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var9 = _closure1_slot15;
                var9 = delete var9[var10];
                _fun0006_ip = 29; continue _fun0006;
            }
case 17:
            var5 = _closure1_slot17;
            for(var2 in var5)
case 31:
            {
case 32:
                var10 = var2;
                var9 = _closure1_slot17;
                var9 = var9[var10];
                var9 = var8.bind(var1)(var9);
                if(var9) { _fun0006_ip = 31; continue _fun0006 }
case 33:
                var9 = _closure1_slot17;
                var9 = delete var9[var10];
                _fun0006_ip = 31; continue _fun0006;
            }
case 34:
            var5 = _closure1_slot16;
            for(var2 in var5)
case 35:
            {
case 36:
                var10 = var2;
                var9 = _closure1_slot16;
                var9 = var9[var10];
                var9 = var8.bind(var1)(var9);
                if(var9) { _fun0006_ip = 35; continue _fun0006 }
case 37:
                var9 = _closure1_slot16;
                var9 = delete var9[var10];
                _fun0006_ip = 35; continue _fun0006;
            }
case 38:
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var5;
    var5 = function handleMessageNotificationShown(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
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
            if(!(var4 != var3)) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var8 = _closure1_slot14;
            var8[var3] = var2;
case 39:
            if(!var7) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            _closure1_slot11 = var2;
            if(!(var4 != var3)) { _fun0008_ip = 41; continue _fun0008 }
case 43:
            var7 = _closure1_slot15;
            var7[var3] = var2;
case 41:
            if(!var6) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            _closure1_slot12 = var2;
            if(!(var4 != var3)) { _fun0008_ip = 44; continue _fun0008 }
case 46:
            var6 = _closure1_slot17;
            var6[var3] = var2;
case 44:
            if(!var5) { _fun0008_ip = 47; continue _fun0008 }
case 8:
            _closure1_slot13 = var2;
            if(!(var4 != var3)) { _fun0008_ip = 47; continue _fun0008 }
case 14:
            var1 = _closure1_slot16;
            var1[var3] = var2;
case 47:
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
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notifications/LastMentionTimestampStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function trackMessageNotificationTimestamps(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var10 = arg2;
            var4 = _closure1_slot9;
            var1 = var4.getCurrentUser;
            var4 = var1.bind(var4)();
            var11 = null;
            var6 = var11 == var4;
            var1 = undefined;
            var13 = undefined;
            if(var6) { _fun0009_ip = 23; continue _fun0009 }
case 48:
            var13 = var4.id;
case 23:
            var _closure2_slot0 = var13;
            var7 = _closure1_slot8;
            var4 = var7.isSuppressEveryoneEnabled;
            var6 = var4.bind(var7)(var10);
            var4 = var7.isSuppressRolesEnabled;
            var8 = var4.bind(var7)(var10);
            var4 = var5.mentions;
            var9 = var11 != var4;
            if(!var9) { _fun0009_ip = 49; continue _fun0009 }
case 50:
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
case 49:
            var7 = var11 == var10;
            var4 = null;
            if(var7) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var7 = var11 == var13;
            var4 = null;
            if(var7) { _fun0009_ip = 51; continue _fun0009 }
case 53:
            var12 = _closure1_slot7;
            var7 = var12.getMember;
            var4 = var7.bind(var12)(var10, var13);
case 51:
            var _closure2_slot1 = var4;
            var7 = var5.mention_roles;
            var7 = var11 != var7;
            if(!var7) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var7 = var11 != var4;
case 54:
            if(!var7) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var4 = var4.roles;
            var7 = var11 != var4;
case 56:
            if(!var7) { _fun0009_ip = 58; continue _fun0009 }
case 59:
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
case 58:
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
            if(!var7) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var7 = !var8;
case 60:
            var2['roleMentioned'] = var7;
            var7 = var5.mention_everyone;
            var5 = true;
            var5 = var5 === var7;
            if(!var5) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var5 = !var6;
case 62:
            var2['everyoneMentioned'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['trackMessageNotificationTimestamps'] = var2;
    return var1;
})();