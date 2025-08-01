// app/modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function trackChannel() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot21;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 183; continue _fun0002 }
 16:
            var4 = _closure1_slot29;
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            if(var2) { _fun0002_ip = 38; continue _fun0002 }
 34:
            var2 = false;
            return var2;
 38:
            var4 = _closure1_slot28;
            var2 = _closure1_slot21;
            var5 = var4.bind(var1)(var2);
            var6 = var5.lastActionTime;
            var2 = global;
            var7 = var2.Date;
            var4 = var7.now;
            var7 = var4.bind(var7)();
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 13;
            var4 = var9[var4];
            var4 = var8.bind(var1)(var4);
            var4 = var4.Millis;
            var4 = var4.DAY;
            var4 = var7 - var4;
            if(!(var6 > var4)) { _fun0002_ip = 128; continue _fun0002 }
 114:
            var6 = var5.viewDuration;
            var4 = _closure1_slot17;
            if(!(!(var6 > var4))) { _fun0002_ip = 179; continue _fun0002 }
 128:
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var5['lastActionTime'] = var2;
            var6 = var5.viewDuration;
            var4 = _closure1_slot22;
            var4 = var2 - var4;
            var4 = var6 + var4;
            var5['viewDuration'] = var4;
            _closure1_slot22 = var2;
            return var1;
 179:
            var1 = false;
            return var1;
 183:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function startInterval() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot23;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0003_ip = 36; continue _fun0003 }
 13:
            var3 = global;
            var5 = var3.clearInterval;
            var4 = _closure1_slot23;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            _closure1_slot23 = var1;
 36:
            var1 = _closure1_slot12;
            var1 = var1.useNewNotifications;
            if(!var1) { _fun0003_ip = 117; continue _fun0003 }
 49:
            var1 = global;
            var5 = var1.setInterval;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 13;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.Millis;
            var3 = var1.SECOND;
            var1 = 15;
            var3 = var1 * var3;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot26;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    if(!var3) { _fun0004_ip = 30; continue _fun0004 }
 16:
                    var3 = _closure1_slot24;
                    var2 = var3.emitChange;
                    var2 = var2.bind(var3)();
 30:
                    return var1;
                }
            };
            var1 = var5.bind(var4)(var1, var3);
            _closure1_slot23 = var1;
 117:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function getOrCreateChannelState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot19;
            var3 = var3.channels;
            var3 = var2 in var3;
            if(var3) { _fun0005_ip = 51; continue _fun0005 }
 23:
            var3 = _closure1_slot19;
            var4 = var3.channels;
            var3 = {'lastActionTime': 0, 'viewDuration': 0, 'numSends': 0};
            var4[var2] = var3;
 51:
            var1 = _closure1_slot19;
            var1 = var1.channels;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function shouldTrackChannel(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot12;
            var1 = var1.useNewNotifications;
            if(var1) { _fun0006_ip = 23; continue _fun0006 }
 19:
            var1 = false;
            return var1;
 23:
            var3 = _closure1_slot20;
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0006_ip = 250; continue _fun0006 }
 43:
            var3 = _closure1_slot9;
            var1 = var3.getBasicChannel;
            var1 = var1.bind(var3)(var4);
            var4 = null;
            if(!(var4 != var1)) { _fun0006_ip = 246; continue _fun0006 }
 67:
            var3 = var1.guild_id;
            if(!(var4 != var3)) { _fun0006_ip = 246; continue _fun0006 }
 79:
            var6 = _closure1_slot12;
            var5 = var6.isGuildOrCategoryOrChannelMuted;
            var4 = var1.guild_id;
            var3 = var1.id;
            var3 = var5.bind(var6)(var4, var3);
            if(var3) { _fun0006_ip = 242; continue _fun0006 }
 111:
            var5 = _closure1_slot30;
            var4 = var1.guild_id;
            var3 = var1.id;
            var6 = undefined;
            var3 = var5.bind(var6)(var4, var3);
            if(var3) { _fun0006_ip = 238; continue _fun0006 }
 136:
            var5 = _closure1_slot30;
            var4 = var1.guild_id;
            var3 = var1.parent_id;
            var3 = var5.bind(var6)(var4, var3);
            if(var3) { _fun0006_ip = 234; continue _fun0006 }
 160:
            var4 = _closure1_slot12;
            var3 = var4.resolveUnreadSetting;
            var3 = var3.bind(var4)(var1);
            var6 = _closure1_slot12;
            var5 = var6.getChannelUnreadSetting;
            var4 = var1.guild_id;
            var1 = var1.id;
            var4 = var5.bind(var6)(var4, var1);
            var1 = _closure1_slot14;
            var1 = var1.UNSET;
            var1 = var4 === var1;
            if(!var1) { _fun0006_ip = 232; continue _fun0006 }
 218:
            var2 = _closure1_slot14;
            var2 = var2.ALL_MESSAGES;
            var1 = var3 !== var2;
 232:
            return var1;
 234:
            var1 = false;
            return var1;
 238:
            var1 = false;
            return var1;
 242:
            var1 = false;
            return var1;
 246:
            var1 = false;
            return var1;
 250:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function hasAnyOverride(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg2;
            var6 = null;
            if(!(var6 != var2)) { _fun0007_ip = 166; continue _fun0007 }
 12:
            var5 = _closure1_slot12;
            var3 = var5.getChannelOverrides;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            var5 = var1[var2];
            var1 = var6 != var5;
            if(!var1) { _fun0007_ip = 164; continue _fun0007 }
 44:
            var2 = var5.message_notifications;
            var2 = var6 != var2;
            if(!var2) { _fun0007_ip = 77; continue _fun0007 }
 57:
            var7 = var5.message_notifications;
            var3 = _closure1_slot13;
            var3 = var3.NULL;
            var2 = var7 !== var3;
 77:
            if(var2) { _fun0007_ip = 161; continue _fun0007 }
 80:
            var3 = var5.flags;
            var3 = var6 == var3;
            if(var3) { _fun0007_ip = 158; continue _fun0007 }
 92:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 15;
            var7 = var7[var6];
            var6 = undefined;
            var7 = var8.bind(var6)(var7);
            var6 = var7.hasAnyFlag;
            var5 = var5.flags;
            var8 = _closure1_slot15;
            var8 = var8.UNREADS_ALL_MESSAGES;
            var4 = _closure1_slot15;
            var4 = var4.UNREADS_ONLY_MENTIONS;
            var4 = var8 | var4;
            var4 = var6.bind(var7)(var5, var4);
            var3 = !var4;
 158:
            var2 = !var3;
 161:
            var1 = var2;
 164:
            return var1;
 166:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var2 = 0;
    var9 = var6[var2];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var13 = 1;
    var9 = var6[var13];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var16 = 2;
    var9 = var6[var16];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var11 = 5;
    var9 = var6[var11];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 8;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var9 = 9;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var14 = 10;
    var9 = var6[var14];
    var9 = var5.bind(var1)(var9);
    var9 = var9.UserNotificationSettings;
    var _closure1_slot13 = var9;
    var9 = 11;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.UnreadSetting;
    var _closure1_slot14 = var9;
    var9 = 12;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ChannelNotificationSettingsFlags;
    var _closure1_slot15 = var9;
    var10 = {};
    var9 = 13;
    var12 = var6[var9];
    var12 = var7.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var13 * var12;
    var10['timeSinceJoin'] = var12;
    var10['sends'] = var13;
    var12 = var6[var9];
    var12 = var7.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.MINUTE;
    var12 = var13 * var12;
    var10['viewTime'] = var12;
    var12 = new Array(4);
    var12[0] = var10;
    var10 = {};
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.Millis;
    var15 = var15.DAY;
    var15 = var13 * var15;
    var10['timeSinceJoin'] = var15;
    var10['sends'] = var16;
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.Millis;
    var15 = var15.MINUTE;
    var15 = var16 * var15;
    var10['viewTime'] = var15;
    var12[1] = var10;
    var10 = {};
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.Millis;
    var15 = var15.WEEK;
    var15 = var13 * var15;
    var10['timeSinceJoin'] = var15;
    var10['sends'] = var11;
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.Millis;
    var15 = var15.MINUTE;
    var15 = var11 * var15;
    var10['viewTime'] = var15;
    var12[2] = var10;
    var10 = {};
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.Millis;
    var15 = var15.DAYS_30;
    var15 = var13 * var15;
    var10['timeSinceJoin'] = var15;
    var10['sends'] = var14;
    var14 = var6[var9];
    var14 = var7.bind(var1)(var14);
    var14 = var14.Millis;
    var15 = var14.MINUTE;
    var14 = 30;
    var14 = var14 * var15;
    var10['viewTime'] = var14;
    var12[3] = var10;
    var _closure1_slot16 = var12;
    var10 = var12.length;
    var10 = var10 - var13;
    var10 = var12[var10];
    var10 = var10.viewTime;
    var10 = var11 * var10;
    var _closure1_slot17 = var10;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.WEEK;
    var _closure1_slot18 = var9;
    var9 = {};
    var10 = {};
    var9['channels'] = var10;
    var _closure1_slot19 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var20 = var9;
    var8 = new var20[var8](var19);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot20 = var8;
    var8 = null;
    var _closure1_slot21 = var8;
    var _closure1_slot22 = var2;
    var _closure1_slot23 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function UnreadSettingNoticeStore2Class() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg1;
                var5 = this;
                var2 = null;
                if(!(var2 != var1)) { _fun0009_ip = 31; continue _fun0009 }
 12:
                var2 = _closure1_slot19;
                var1 = var1.channels;
                var2['channels'] = var1;
 31:
                var4 = var5.syncWith;
                var2 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot27;
                var2 = var4.bind(var5)(var3, var2);
                var4 = var5.waitFor;
                var3 = _closure1_slot12;
                var2 = _closure1_slot11;
                var1 = _closure1_slot9;
                var1 = var4.bind(var5)(var3, var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getLastActionTime';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = _closure1_slot19;
                var2 = var1.channels;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0010_ip = 37; continue _fun0010 }
 31:
                var2 = var3.lastActionTime;
 37:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0010_ip = 49; continue _fun0010 }
 46:
                var1 = var2;
 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'maybeAutoUpgradeChannel';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var8 = arg1;
                var1 = _closure1_slot29;
                var7 = undefined;
                var1 = var1.bind(var7)(var8);
                if(var1) { _fun0011_ip = 24; continue _fun0011 }
 20:
                var1 = false;
                return var1;
 24:
                var2 = _closure1_slot9;
                var1 = var2.getBasicChannel;
                var4 = var1.bind(var2)(var8);
                var5 = null;
                var1 = var5 != var4;
                if(!var1) { _fun0011_ip = 57; continue _fun0011 }
 48:
                var2 = var4.guild_id;
                var1 = var5 != var2;
 57:
                if(!var1) { _fun0011_ip = 470; continue _fun0011 }
 63:
                var9 = _closure1_slot10;
                var6 = var9.getGuild;
                var2 = var4.guild_id;
                var2 = var6.bind(var9)(var2);
                var6 = var5 == var2;
                var10 = undefined;
                if(var6) { _fun0011_ip = 97; continue _fun0011 }
 91:
                var10 = var2.joinedAt;
 97:
                if(!(var5 == var10)) { _fun0011_ip = 129; continue _fun0011 }
 101:
                var2 = global;
                var2 = var2.Date;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var19 = var6;
                var2 = new var19[var2](var18);
                var10 = var2 instanceof Object ? var2 : var6;
 129:
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 14;
                var2 = var9[var2];
                var9 = var6.bind(var7)(var2);
                var6 = var9.age;
                var2 = var4.id;
                var11 = var6.bind(var9)(var2);
                var2 = global;
                var9 = var2.Date;
                var6 = var9.now;
                var9 = var6.bind(var9)();
                var6 = var10.getTime;
                var6 = var6.bind(var10)();
                var10 = var9 - var6;
                var9 = var2.Math;
                var6 = var9.min;
                var13 = var6.bind(var9)(var11, var10);
                var6 = _closure1_slot19;
                var9 = var6.channels;
                var6 = var4.id;
                var12 = var9[var6];
                var6 = var5 == var12;
                var5 = false;
                if(var6) { _fun0011_ip = 375; continue _fun0011 }
 244:
                var6 = var12.lastActionTime;
                var9 = var2.Date;
                var2 = var9.now;
                var9 = var2.bind(var9)();
                var2 = _closure1_slot18;
                var2 = var9 - var2;
                var2 = var6 < var2;
                var5 = false;
                if(var2) { _fun0011_ip = 375; continue _fun0011 }
 282:
                var10 = _closure1_slot16;
                var2 = var10.length;
                var9 = 0;
                var2 = var9 < var2;
                var5 = false;
                if(!var2) { _fun0011_ip = 375; continue _fun0011 }
 302:
                var2 = var10[var9];
                var14 = var2.timeSinceJoin;
                if(!(var13 < var14)) { _fun0011_ip = 358; continue _fun0011 }
 316:
                var15 = var12.numSends;
                var14 = var2.sends;
                var14 = var15 >= var14;
                var5 = true;
                if(var14) { _fun0011_ip = 375; continue _fun0011 }
 337:
                var14 = var12.viewDuration;
                var2 = var2.viewTime;
                var2 = var14 >= var2;
                var5 = true;
                if(var2) { _fun0011_ip = 375; continue _fun0011 }
 358:
                var9 = var9 + 1;
                var2 = var10.length;
                var2 = var9 < var2;
                var5 = false;
                if(var2) { _fun0011_ip = 302; continue _fun0011 }
 375:
                var2 = !var5;
                var2 = !var2;
                if(!var5) { _fun0011_ip = 467; continue _fun0011 }
 384:
                var5 = _closure1_slot19;
                var5 = var5.channels;
                var5 = delete var5[var8];
                var6 = _closure1_slot20;
                var5 = var6.add;
                var5 = var5.bind(var6)(var8);
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 16;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.updateChannelUnreadSetting;
                var5 = var4.guild_id;
                var4 = var4.id;
                var3 = _closure1_slot14;
                var3 = var3.ALL_MESSAGES;
                var3 = var6.bind(var7)(var5, var4, var3);
                var2 = true;
 467:
                var1 = var2;
 470:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'UnreadSettingNoticeStore2';
    var9['displayName'] = var2;
    var9['persistKey'] = var2;
    var2 = 18;
    var2 = var6[var2];
    var19 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleChannelSelect() {
        var2 = _closure1_slot26;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var4 = _closure1_slot11;
        var2 = var4.getChannelId;
        var2 = var2.bind(var4)();
        _closure1_slot21 = var2;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        _closure1_slot22 = var2;
        return var1;
    };
    var2['CHANNEL_SELECT'] = var7;
    var7 = function handleConnectionOpen() {
        var4 = _closure1_slot11;
        var1 = var4.getChannelId;
        var1 = var1.bind(var4)();
        _closure1_slot21 = var1;
        var4 = global;
        var5 = var4.Date;
        var1 = var5.now;
        var1 = var1.bind(var5)();
        _closure1_slot22 = var1;
        var5 = _closure1_slot27;
        var1 = undefined;
        var5 = var5.bind(var1)();
        var5 = var4.Date;
        var4 = var5.now;
        var5 = var4.bind(var5)();
        var4 = _closure1_slot18;
        var4 = var5 - var4;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 14;
        var4 = var6[var4];
        var5 = var5.bind(var1)(var4);
        var4 = var5.forEach;
        var3 = _closure1_slot19;
        var3 = var3.channels;
        var2 = function(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = arg1;
                var2 = var1.lastActionTime;
                var1 = _closure2_slot0;
                if(!(var2 < var1)) { _fun0012_ip = 40; continue _fun0012 }
 20:
                var1 = _closure1_slot19;
                var2 = var1.channels;
                var1 = arg2;
                var1 = delete var2[var1];
 40:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['CONNECTION_OPEN'] = var7;
    var7 = function handleMessageCreate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var1 = var2.optimistic;
            if(var1) { _fun0013_ip = 156; continue _fun0013 }
 15:
            var1 = var2.isPushNotification;
            if(var1) { _fun0013_ip = 156; continue _fun0013 }
 27:
            var1 = var2.message;
            var3 = var1.author;
            var1 = null;
            var4 = var1 == var3;
            var1 = undefined;
            var5 = undefined;
            if(var4) { _fun0013_ip = 56; continue _fun0013 }
 51:
            var5 = var3.id;
 56:
            var6 = _closure1_slot8;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            if(!(var5 === var4)) { _fun0013_ip = 152; continue _fun0013 }
 77:
            var5 = _closure1_slot29;
            var4 = var2.channelId;
            var4 = var5.bind(var1)(var4);
            if(var4) { _fun0013_ip = 98; continue _fun0013 }
 94:
            var4 = false;
            return var4;
 98:
            var3 = _closure1_slot28;
            var2 = var2.channelId;
            var3 = var3.bind(var1)(var2);
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['lastActionTime'] = var2;
            var2 = var3.numSends;
            var2 = var2 + 1;
            var3['numSends'] = var2;
            return var1;
 152:
            var1 = false;
            return var1;
 156:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var20 = var7;
    var18 = var2;
    var2 = new var20[var9](var19, var18, var17);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot24 = var2;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();