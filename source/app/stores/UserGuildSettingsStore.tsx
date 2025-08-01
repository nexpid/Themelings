// app/stores/UserGuildSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
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
            _closure1_slot35 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function updateUserGuildSettingsInternal(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var7 = arg2;
            var1 = _closure1_slot21;
            var9 = var1[var3];
            var6 = null;
            var4 = var6 == var9;
            var1 = undefined;
            var13 = undefined;
            if(var4) { _fun0002_ip = 38; continue _fun0002 }
 32:
            var13 = var9.channel_overrides;
 38:
            if(!(var6 == var13)) { _fun0002_ip = 44; continue _fun0002 }
 42:
            var13 = {};
 44:
            var8 = _closure1_slot44;
            var4 = var7.channel_overrides;
            var8 = var8.bind(var1)(var4);
            var4 = {};
            var10 = _closure1_slot43;
            var18 = var10.bind(var1)(var3);
            var19 = var4;
            var10 = copyDataProperties(var19, var18);
            var19 = var4;
            var18 = var9;
            var9 = copyDataProperties(var19, var18);
            var19 = var4;
            var18 = var7;
            var7 = copyDataProperties(var19, var18);
            var7 = 'channel_overrides';
            var4[var7] = var8;
            var8 = _closure1_slot26;
            var7 = var8.clearTimer;
            var7 = var7.bind(var8)(var3);
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 16;
            var10 = var9[var7];
            var12 = var8.bind(var1)(var10);
            var11 = var12.forEach;
            var10 = function(arg1) {
                var3 = _closure1_slot27;
                var2 = var3.clearTimer;
                var1 = arg1;
                var1 = var1.channel_id;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var10 = var11.bind(var12)(var13, var10);
            var10 = _closure1_slot37;
            var10 = var10.bind(var1)(var3, var4);
            var10 = _closure1_slot21;
            var10[var3] = var4;
            var11 = _closure1_slot29;
            var12 = _closure1_slot47;
            var10 = _closure1_slot21;
            var10 = var10[var3];
            var10 = var12.bind(var1)(var10);
            var11[var3] = var10;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.filter;
            var7 = var4.channel_overrides;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.hasFlag;
                    var2 = arg1;
                    var5 = var2.flags;
                    var2 = null;
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0003_ip = 53; continue _fun0003 }
 50:
                    var2 = var5;
 53:
                    var1 = _closure1_slot19;
                    var1 = var1.OPT_IN_ENABLED;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var10 = var8.bind(var9)(var7, var4);
            var7 = _closure1_slot30;
            var4 = global;
            var9 = var4.Set;
            var8 = var10.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel_id;
                return var1;
            };
            var19 = var8.bind(var10)(var5);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var20 = var8;
            var5 = new var20[var9](var19, var18);
            var5 = var5 instanceof Object ? var5 : var8;
            var7[var3] = var5;
            if(!(var6 != var3)) { _fun0002_ip = 483; continue _fun0002 }
 289:
            var8 = var4.Set;
            var5 = _closure1_slot30;
            var19 = var5[var3];
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var20 = var7;
            var5 = new var20[var8](var19, var18);
            var5 = var5 instanceof Object ? var5 : var7;
            var7 = _closure1_slot33;
            var7 = var7[var3];
            if(!(var6 == var7)) { _fun0002_ip = 337; continue _fun0002 }
 335:
            var7 = {};
 337:
            var11 = var7;
            var6 = 17;
            for(var8 in var11)
 351:
            {
 360:
                var14 = var8;
                var13 = var7[var14];
                var16 = _closure1_slot2;
                var15 = _closure1_slot3;
                var15 = var15[var6];
                var17 = var16.bind(var1)(var15);
                var16 = var17.hasFlag;
                var15 = var13.flags;
                var13 = _closure1_slot19;
                var13 = var13.OPT_IN_ENABLED;
                var13 = var16.bind(var17)(var15, var13);
                if(var13) { _fun0002_ip = 426; continue _fun0002 }
 414:
                var13 = var5.delete;
                var13 = var13.bind(var5)(var14);
                _fun0002_ip = 351; continue _fun0002;
 426:
                var13 = var5.add;
                var13 = var13.bind(var5)(var14);
                _fun0002_ip = 351; continue _fun0002;
            }
 438:
            var6 = var4.Object;
            var4 = var6.keys;
            var4 = var4.bind(var6)(var7);
            var6 = var4.length;
            var4 = 0;
            if(!(!(var6 > var4))) { _fun0002_ip = 475; continue _fun0002 }
 465:
            var4 = _closure1_slot34;
            var4 = delete var4[var3];
            _fun0002_ip = 483; continue _fun0002;
 475:
            var4 = _closure1_slot34;
            var4[var3] = var5;
 483:
            var2 = _closure1_slot22;
            var2 = delete var2[var3];
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function setMuteTimers(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var7;
            var4 = var3.muted;
            var1 = true;
            if(!(var1 === var4)) { _fun0004_ip = 66; continue _fun0004 }
 24:
            var6 = _closure1_slot26;
            var5 = var6.setTimer;
            var4 = var3.mute_config;
            var1 = function() {
                var4 = _closure1_slot38;
                var5 = _closure2_slot0;
                var3 = {};
                var1 = false;
                var3['muted'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var5, var3);
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 18;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'GUILD_MUTE_EXPIRED';
                var2['type'] = var6;
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var5.bind(var6)(var7, var4, var1);
            if(!var1) { _fun0004_ip = 66; continue _fun0004 }
 58:
            var1 = false;
            var3['muted'] = var1;
 66:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 16;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.forEach;
            var3 = var3.channel_overrides;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = var2.muted;
                    var3 = true;
                    if(!(var3 === var4)) { _fun0005_ip = 68; continue _fun0005 }
 21:
                    var6 = _closure1_slot27;
                    var5 = var6.setTimer;
                    var4 = var2.channel_id;
                    var3 = var2.mute_config;
                    var1 = function() {
                        var7 = _closure1_slot39;
                        var6 = _closure2_slot0;
                        var5 = _closure3_slot0;
                        var4 = var5.channel_id;
                        var3 = {};
                        var1 = false;
                        var3['muted'] = var1;
                        var1 = undefined;
                        var3 = var7.bind(var1)(var6, var4, var3);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 18;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'CHANNEL_MUTE_EXPIRED';
                        var2['type'] = var7;
                        var2['guildId'] = var6;
                        var5 = var5.channel_id;
                        var2['channelId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var5.bind(var6)(var4, var3, var1);
                    if(!var1) { _fun0005_ip = 68; continue _fun0005 }
 60:
                    var1 = false;
                    var2['muted'] = var1;
 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function updateUserGuildSettings(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot21;
            var7 = var2[var4];
            var3 = _closure1_slot36;
            var2 = {};
            var6 = null;
            var8 = var6 == var7;
            var1 = undefined;
            var5 = undefined;
            if(var8) { _fun0006_ip = 39; continue _fun0006 }
 33:
            var5 = var7.channel_overrides;
 39:
            if(!(var6 == var5)) { _fun0006_ip = 45; continue _fun0006 }
 43:
            var5 = {};
 45:
            var2['channel_overrides'] = var5;
            var9 = arg2;
            var10 = var2;
            var5 = copyDataProperties(var10, var9);
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function updateUserGuildChannelSettings(arg1, arg2, arg3) {
        var4 = arg1;
        var6 = arg2;
        var5 = _closure1_slot42;
        var1 = undefined;
        var3 = arg3;
        var5 = var5.bind(var1)(var4, var6, var3);
        var3 = _closure1_slot41;
        var2 = {};
        var2[var6] = var5;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function updateUserGuildChannelSettingsBulk(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var10;
            var3 = {};
            var _closure2_slot2 = var3;
            var5 = null;
            var1 = var5 != var4;
            var7 = null;
            if(!var1) { _fun0007_ip = 44; continue _fun0007 }
 33:
            var1 = _closure1_slot33;
            var7 = var1[var4];
 44:
            if(!(var5 == var7)) { _fun0007_ip = 50; continue _fun0007 }
 48:
            var7 = {};
 50:
            var _closure2_slot3 = var7;
            var9 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 19;
            var8 = var8[var1];
            var1 = undefined;
            var9 = var9.bind(var1)(var8);
            var8 = var9.keys;
            var9 = var8.bind(var9)(var10);
            var8 = var9.forEach;
            var6 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var6 = _closure1_slot42;
                    var5 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = var1[var4];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5, var4, var3);
                    var3 = _closure2_slot2;
                    var3[var4] = var5;
                    var3 = _closure2_slot3;
                    var2 = {};
                    var6 = var5.flags;
                    var5 = null;
                    var7 = var5 != var6;
                    var5 = 0;
                    if(!var7) { _fun0008_ip = 67; continue _fun0008 }
 64:
                    var5 = var6;
 67:
                    var2['flags'] = var5;
                    var3[var4] = var2;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6);
            if(!(var5 != var4)) { _fun0007_ip = 139; continue _fun0007 }
 108:
            var6 = _closure1_slot33;
            var5 = {};
            var11 = var6[var4];
            var12 = var5;
            var8 = copyDataProperties(var12, var11);
            var12 = var5;
            var11 = var7;
            var7 = copyDataProperties(var12, var11);
            var6[var4] = var5;
 139:
            var2 = _closure1_slot41;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function updateMultipleChannels(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var7 = arg2;
            var1 = _closure1_slot21;
            var9 = var1[var4];
            var6 = null;
            var3 = var6 == var9;
            var1 = undefined;
            var8 = undefined;
            if(var3) { _fun0009_ip = 36; continue _fun0009 }
 30:
            var8 = var9.channel_overrides;
 36:
            if(!(var6 == var8)) { _fun0009_ip = 42; continue _fun0009 }
 40:
            var8 = {};
 42:
            var3 = _closure1_slot36;
            var2 = {};
            var5 = var7;
            if(!(var6 != var9)) { _fun0009_ip = 80; continue _fun0009 }
 55:
            var6 = {};
            var11 = var6;
            var10 = var8;
            var8 = copyDataProperties(var11, var10);
            var11 = var6;
            var10 = var7;
            var7 = copyDataProperties(var11, var10);
            var5 = var6;
 80:
            var2['channel_overrides'] = var5;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function computeNewChannelSettings(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg2;
            var2 = _closure1_slot21;
            var1 = arg1;
            var5 = var2[var1];
            var1 = {};
            var1['channel_id'] = var3;
            var2 = false;
            var1['muted'] = var2;
            var4 = null;
            var6 = var4 == var5;
            var2 = undefined;
            if(var6) { _fun0010_ip = 47; continue _fun0010 }
 41:
            var2 = var5.channel_overrides;
 47:
            if(!(var4 == var2)) { _fun0010_ip = 53; continue _fun0010 }
 51:
            var2 = {};
 53:
            var7 = var2[var3];
            var8 = var1;
            var2 = copyDataProperties(var8, var7);
            var7 = arg3;
            var8 = var1;
            var2 = copyDataProperties(var8, var7);
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var4 = function getGuildDefaults(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = _closure1_slot14;
            var3 = var4.getGuild;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 == var3)) { _fun0011_ip = 38; continue _fun0011 }
 26:
            var2 = _closure1_slot16;
            var2 = var2.ALL_MESSAGES;
            _fun0011_ip = 44; continue _fun0011;
 38:
            var2 = var3.defaultMessageNotifications;
 44:
            var1 = _closure1_slot28;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot43 = var4;
    var2 = function convertChannelOverridesToMap() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arguments[0];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0012_ip = 11; continue _fun0012 }
 9:
            var5 = {};
 11:
            var1 = global;
            var1 = var1.Array;
            var2 = var5 instanceof var1;
            var1 = var5;
            if(!var2) { _fun0012_ip = 68; continue _fun0012 }
 29:
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 16;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.keyBy;
            var2 = 'channel_id';
            var1 = var3.bind(var4)(var5, var2);
 68:
            return var1;
        }
    };
    var _closure1_slot44 = var2;
    var1 = function getGuildSettings(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot21;
            var1 = var1[var4];
            var3 = null;
            if(!(var3 == var1)) { _fun0013_ip = 31; continue _fun0013 }
 20:
            var3 = _closure1_slot43;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 31:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function processAccountNotificationSettings(arg1) {
        var3 = arg1;
        var5 = _closure1_slot2;
        var6 = _closure1_slot3;
        var4 = 17;
        var7 = var6[var4];
        var1 = undefined;
        var10 = var5.bind(var1)(var7);
        var9 = var10.hasFlag;
        var8 = var3.flags;
        var7 = _closure1_slot17;
        var7 = var7.USE_NEW_NOTIFICATIONS;
        var7 = var9.bind(var10)(var8, var7);
        _closure1_slot23 = var7;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var6 = var7.hasFlag;
        var5 = var3.flags;
        var4 = _closure1_slot17;
        var4 = var4.MENTION_ON_ALL_MESSAGES;
        var4 = var6.bind(var7)(var5, var4);
        _closure1_slot24 = var4;
        _closure1_slot25 = var3;
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function mutedChannelsForGuild(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var1 = global;
            var3 = var1.Set;
            var5 = var4.channel_overrides;
            var1 = null;
            var5 = var1 != var5;
            if(!var5) { _fun0014_ip = 103; continue _fun0014 }
 28:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var5 = 16;
            var5 = var6[var5];
            var6 = undefined;
            var5 = var7.bind(var6)(var5);
            var4 = var4.channel_overrides;
            var6 = var5.bind(var6)(var4);
            var5 = var6.filter;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.computeIsMuted;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel_id;
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = var4.value;
            var1 = var2.bind(var4)();
 103:
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var9 = var2;
            var8 = var1;
            var1 = new var9[var3](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var11 = function handleGuildUpdate() {
        var1 = true;
        return var1;
    };
    var1 = function shouldUseNewUnreadBehavior() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = _closure1_slot23;
            if(!var1) { _fun0015_ip = 76; continue _fun0015 }
 10:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 20;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var5 = var2.NotificationsExperiment;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var2 = 'UserGuildSettingsStore';
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.enabled;
 76:
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var5 = global;
    var13 = var5.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var10);
    var13 = 0;
    var10 = var8[var13];
    var1 = undefined;
    var10 = var9.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 1;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 2;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 3;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 4;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 5;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 6;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot10 = var10;
    var10 = 7;
    var10 = var8[var10];
    var10 = var7.bind(var1)(var10);
    var12 = var10.THREAD_CHANNEL_TYPES;
    var _closure1_slot11 = var12;
    var10 = var10.isPrivate;
    var _closure1_slot12 = var10;
    var10 = 8;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot13 = var10;
    var10 = 9;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot14 = var10;
    var10 = 10;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot15 = var10;
    var10 = 11;
    var10 = var8[var10];
    var12 = var7.bind(var1)(var10);
    var10 = var12.HighlightSettings;
    var14 = var12.UserNotificationSettings;
    var _closure1_slot16 = var14;
    var12 = 12;
    var12 = var8[var12];
    var12 = var7.bind(var1)(var12);
    var12 = var12.AccountNotificationFlags;
    var _closure1_slot17 = var12;
    var12 = 13;
    var12 = var8[var12];
    var12 = var7.bind(var1)(var12);
    var12 = var12.UnreadSetting;
    var _closure1_slot18 = var12;
    var12 = 14;
    var12 = var8[var12];
    var12 = var7.bind(var1)(var12);
    var15 = var12.ChannelNotificationSettingsFlags;
    var _closure1_slot19 = var15;
    var12 = var12.GuildNotificationSettingsFlags;
    var _closure1_slot20 = var12;
    var12 = {};
    var _closure1_slot21 = var12;
    var12 = {};
    var _closure1_slot22 = var12;
    var12 = false;
    var _closure1_slot23 = var12;
    var _closure1_slot24 = var12;
    var12 = {};
    var12['flags'] = var13;
    var _closure1_slot25 = var12;
    var12 = 15;
    var13 = var8[var12];
    var13 = var9.bind(var1)(var13);
    var15 = var13.prototype;
    var15 = Object.create(var15, {constructor: {value: var13}});
    var21 = var15;
    var13 = new var21[var13](var20);
    var13 = var13 instanceof Object ? var13 : var15;
    var _closure1_slot26 = var13;
    var12 = var8[var12];
    var12 = var9.bind(var1)(var12);
    var13 = var12.prototype;
    var13 = Object.create(var13, {constructor: {value: var12}});
    var21 = var13;
    var12 = new var21[var12](var20);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot27 = var12;
    var16 = {'suppress_everyone': false, 'suppress_roles': false, 'mute_scheduled_events': false, 'mobile_push': true, 'muted': false, 'message_notifications': null, 'flags': 0, 'channel_overrides': null, 'notify_highlights': null, 'hide_muted_channels': false, 'version': 4294967295, 'mute_config': null};
    var12 = var14.ALL_MESSAGES;
    var16['message_notifications'] = var12;
    var12 = {};
    var16['channel_overrides'] = var12;
    var10 = var10.NULL;
    var16['notify_highlights'] = var10;
    var10 = {};
    var13 = var14.ALL_MESSAGES;
    var12 = {};
    var20 = var12;
    var19 = var16;
    var15 = copyDataProperties(var20, var19);
    var17 = var14.ALL_MESSAGES;
    var15 = 'message_notifications';
    var12[var15] = var17;
    var10[var13] = var12;
    var13 = var14.ONLY_MENTIONS;
    var12 = {};
    var20 = var12;
    var19 = var16;
    var16 = copyDataProperties(var20, var19);
    var14 = var14.ONLY_MENTIONS;
    var12[var15] = var14;
    var10[var13] = var12;
    var _closure1_slot28 = var10;
    var10 = {};
    var _closure1_slot29 = var10;
    var10 = {};
    var _closure1_slot30 = var10;
    var10 = var5.Set;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var21 = var12;
    var10 = new var21[var10](var20);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot31 = var10;
    var5 = var5.Set;
    var10 = var5.prototype;
    var10 = Object.create(var10, {constructor: {value: var5}});
    var21 = var10;
    var5 = new var21[var5](var20);
    var5 = var5 instanceof Object ? var5 : var10;
    var _closure1_slot32 = var5;
    var5 = {};
    var _closure1_slot33 = var5;
    var5 = {};
    var _closure1_slot34 = var5;
    var5 = 21;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.PersistedStore;
    var5 = function(arg1) {
        var4 = function UserGuildSettingsStoreClass() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot35;
                var1 = var1.bind(var3)();
                if(var1) { _fun0016_ip = 69; continue _fun0016 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0016_ip = 105; continue _fun0016;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
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
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = arg1;
                var9 = this;
                var8 = var9.waitFor;
                var13 = _closure1_slot15;
                var12 = _closure1_slot14;
                var11 = _closure1_slot9;
                var10 = _closure1_slot10;
                var14 = var9;
                var3 = var14[var8](var13, var12, var11, var10, var9);
                var3 = null;
                if(!(var3 != var4)) { _fun0017_ip = 182; continue _fun0017 }
 49:
                var6 = var4.useNewNotifications;
                var5 = var3 != var6;
                if(!var5) { _fun0017_ip = 65; continue _fun0017 }
 62:
                var5 = var6;
 65:
                _closure1_slot23 = var5;
                var5 = 'userGuildSettings';
                var5 = var5 in var4;
                if(!var5) { _fun0017_ip = 182; continue _fun0017 }
 80:
                var5 = var4.userGuildSettings;
                _closure1_slot21 = var5;
                var8 = _closure1_slot1;
                var5 = _closure1_slot3;
                var6 = 16;
                var7 = var5[var6];
                var5 = undefined;
                var8 = var8.bind(var5)(var7);
                var7 = var8.mapValues;
                var4 = var4.optedInChannelsByGuild;
                if(!(var3 == var4)) { _fun0017_ip = 130; continue _fun0017 }
 128:
                var4 = {};
 130:
                var3 = function(arg1) {
                    var1 = global;
                    var3 = var1.Set;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = arg1;
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var3 = var7.bind(var8)(var4, var3);
                _closure1_slot30 = var3;
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var2 = _closure1_slot21;
                var1 = function(arg1, arg2) {
                    var4 = _closure1_slot29;
                    var3 = _closure1_slot47;
                    var1 = undefined;
                    var2 = arg1;
                    var3 = var3.bind(var1)(var2);
                    var2 = arg2;
                    var4[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
 182:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(47);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot23;
            var1['useNewNotifications'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'mentionOnAllMessages';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSuppressEveryoneEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.suppress_everyone;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isSuppressRolesEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.suppress_roles;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isMuteScheduledEventsEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.mute_scheduled_events;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isMobilePushEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.mobile_push;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isMuted';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var4 = undefined;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 15;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.computeIsMuted;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isTemporarilyMuted';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var4 = undefined;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 15;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isTemporarilyMuted;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getMuteConfig';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.mute_config;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getMessageNotifications';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.message_notifications;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getChannelOverrides';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var3 = _closure1_slot45;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var1 = var1.channel_overrides;
                var2 = null;
                if(!(var2 == var1)) { _fun0018_ip = 31; continue _fun0018 }
 29:
                var1 = {};
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getNotifyHighlights';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.notify_highlights;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getGuildFlags';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot45;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.flags;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getChannelMessageNotifications';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var3 = this;
                var2 = var3.getChannelOverrides;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg2;
                var1 = var2[var1];
                var3 = null;
                if(!(var3 != var1)) { _fun0019_ip = 48; continue _fun0019 }
 30:
                var2 = var1.message_notifications;
                if(!(var3 != var2)) { _fun0019_ip = 48; continue _fun0019 }
 40:
                var1 = var1.message_notifications;
                _fun0019_ip = 61; continue _fun0019;
 48:
                var2 = _closure1_slot16;
                var1 = var2.NULL;
 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getChannelMuteConfig';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var3 = this;
                var2 = var3.getChannelOverrides;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg2;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0020_ip = 39; continue _fun0020 }
 33:
                var1 = var2.mute_config;
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getMutedChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = _closure1_slot29;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0021_ip = 24; continue _fun0021 }
 20:
                var1 = _closure1_slot31;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'isChannelMuted';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var5 = _closure1_slot13;
                var1 = var5.getChannel;
                var7 = var1.bind(var5)(var3);
                var5 = null;
                var6 = var5 == var7;
                var1 = undefined;
                if(var6) { _fun0022_ip = 47; continue _fun0022 }
 37:
                var6 = var7.getGuildId;
                var1 = var6.bind(var7)();
 47:
                if(!(var5 != var1)) { _fun0022_ip = 54; continue _fun0022 }
 51:
                var4 = var1;
 54:
                var1 = var2.getMutedChannels;
                var2 = var1.bind(var2)(var4);
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'isCategoryMuted';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var5 = this;
                var3 = _closure1_slot13;
                var2 = var3.getChannel;
                var1 = arg2;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0023_ip = 68; continue _fun0023 }
 29:
                var4 = var2.parent_id;
                var1 = var1 != var4;
                if(!var1) { _fun0023_ip = 66; continue _fun0023 }
 42:
                var3 = var5.getMutedChannels;
                var2 = arg1;
                var3 = var3.bind(var5)(var2);
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
 66:
                return var1;
 68:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'resolvedMessageNotifications';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var3 = arg1;
                var5 = this;
                var4 = var5.getChannelMessageNotifications;
                var2 = var3.guild_id;
                var1 = var3.id;
                var1 = var4.bind(var5)(var2, var1);
                var2 = _closure1_slot16;
                var2 = var2.NULL;
                if(!(var1 === var2)) { _fun0024_ip = 114; continue _fun0024 }
 45:
                var6 = var3.parent_id;
                var2 = null;
                if(!(var2 != var6)) { _fun0024_ip = 94; continue _fun0024 }
 57:
                var7 = var5.getChannelMessageNotifications;
                var6 = var3.guild_id;
                var2 = var3.parent_id;
                var2 = var7.bind(var5)(var6, var2);
                var4 = _closure1_slot16;
                var4 = var4.NULL;
                if(!(var2 === var4)) { _fun0024_ip = 112; continue _fun0024 }
 94:
                var4 = var5.getMessageNotifications;
                var3 = var3.guild_id;
                var3 = var4.bind(var5)(var3);
                return var3;
 112:
                return var2;
 114:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'resolveUnreadSetting';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var7 = arg1;
                var6 = this;
                var4 = _closure1_slot11;
                var3 = var4.has;
                var2 = var7.type;
                var2 = var3.bind(var4)(var2);
                if(var2) { _fun0025_ip = 265; continue _fun0025 }
 34:
                var4 = _closure1_slot12;
                var2 = var7.type;
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                if(var2) { _fun0025_ip = 253; continue _fun0025 }
 56:
                var2 = _closure1_slot48;
                var2 = var2.bind(var3)();
                if(var2) { _fun0025_ip = 79; continue _fun0025 }
 67:
                var2 = _closure1_slot18;
                var2 = var2.ALL_MESSAGES;
                return var2;
 79:
                var4 = var6.getChannelUnreadSetting;
                var3 = var7.guild_id;
                var2 = var7.id;
                var2 = var4.bind(var6)(var3, var2);
                var3 = _closure1_slot18;
                var3 = var3.UNSET;
                if(!(var2 === var3)) { _fun0025_ip = 251; continue _fun0025 }
 118:
                var4 = var7.parent_id;
                var3 = null;
                if(!(var3 != var4)) { _fun0025_ip = 167; continue _fun0025 }
 130:
                var5 = var6.getChannelUnreadSetting;
                var4 = var7.guild_id;
                var3 = var7.parent_id;
                var3 = var5.bind(var6)(var4, var3);
                var4 = _closure1_slot18;
                var4 = var4.UNSET;
                if(!(var3 === var4)) { _fun0025_ip = 249; continue _fun0025 }
 167:
                var5 = var6.getGuildUnreadSetting;
                var4 = var7.guild_id;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot18;
                var5 = var5.UNSET;
                if(!(var4 === var5)) { _fun0025_ip = 247; continue _fun0025 }
 197:
                var5 = var6.resolvedMessageNotifications;
                var6 = var5.bind(var6)(var7);
                var5 = _closure1_slot16;
                var5 = var5.ALL_MESSAGES;
                if(!(var6 !== var5)) { _fun0025_ip = 234; continue _fun0025 }
 222:
                var5 = _closure1_slot18;
                var5 = var5.ONLY_MENTIONS;
                _fun0025_ip = 244; continue _fun0025;
 234:
                var6 = _closure1_slot18;
                var5 = var6.ALL_MESSAGES;
 244:
                var4 = var5;
 247:
                return var4;
 249:
                return var3;
 251:
                return var2;
 253:
                var2 = _closure1_slot18;
                var2 = var2.ALL_MESSAGES;
                return var2;
 265:
                var1 = _closure1_slot18;
                var1 = var1.ALL_MESSAGES;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'isGuildOrCategoryOrChannelMuted';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var3 = this;
                var1 = var3.isMuted;
                var1 = var1.bind(var3)(var5);
                if(var1) { _fun0026_ip = 37; continue _fun0026 }
 23:
                var2 = var3.isCategoryMuted;
                var1 = var2.bind(var3)(var5, var4);
 37:
                if(var1) { _fun0026_ip = 52; continue _fun0026 }
 40:
                var2 = var3.isChannelMuted;
                var1 = var2.bind(var3)(var5, var4);
 52:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'allowNoMessages';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var3 = var4.isGuildOrCategoryOrChannelMuted;
                var2 = var5.guild_id;
                var1 = var5.id;
                var1 = var3.bind(var4)(var2, var1);
                if(var1) { _fun0027_ip = 59; continue _fun0027 }
 31:
                var2 = var4.resolvedMessageNotifications;
                var3 = var2.bind(var4)(var5);
                var2 = _closure1_slot16;
                var2 = var2.NO_MESSAGES;
                var1 = var3 === var2;
 59:
                if(var1) { _fun0027_ip = 98; continue _fun0027 }
 62:
                var3 = var4.isOptInEnabled;
                var2 = var5.guild_id;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0027_ip = 95; continue _fun0027 }
 81:
                var3 = var4.isChannelRecordOrParentOptedIn;
                var3 = var3.bind(var4)(var5);
                var2 = !var3;
 95:
                var1 = var2;
 98:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'allowAllMessages';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var3 = var4.isGuildOrCategoryOrChannelMuted;
                var2 = var5.guild_id;
                var1 = var5.id;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                if(!var1) { _fun0028_ip = 62; continue _fun0028 }
 34:
                var2 = var4.resolvedMessageNotifications;
                var3 = var2.bind(var4)(var5);
                var2 = _closure1_slot16;
                var2 = var2.ALL_MESSAGES;
                var1 = var3 === var2;
 62:
                if(!var1) { _fun0028_ip = 101; continue _fun0028 }
 65:
                var3 = var4.isOptInEnabled;
                var2 = var5.guild_id;
                var2 = var3.bind(var4)(var2);
                var2 = !var2;
                if(var2) { _fun0028_ip = 98; continue _fun0028 }
 87:
                var3 = var4.isChannelRecordOrParentOptedIn;
                var2 = var3.bind(var4)(var5);
 98:
                var1 = var2;
 101:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'isGuildCollapsed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var2 = _closure1_slot21;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0029_ip = 31; continue _fun0029 }
 25:
                var2 = var1.hide_muted_channels;
 31:
                var1 = true;
                var1 = var1 === var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'getAllSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot21;
            var1['userGuildSettings'] = var3;
            var3 = _closure1_slot29;
            var1['mutedChannels'] = var3;
            var2 = _closure1_slot30;
            var1['optedInChannelsByGuild'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getChannelIdFlags';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var3 = this;
                var2 = var3.getChannelOverrides;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg2;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0030_ip = 40; continue _fun0030 }
 35:
                var2 = var3.flags;
 40:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0030_ip = 52; continue _fun0030 }
 49:
                var1 = var2;
 52:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getChannelFlags';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var4 = this;
            var3 = var4.getChannelIdFlags;
            var2 = var1.guild_id;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'getNewForumThreadsCreated';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var4 = var2.getChannelOverrides;
                var1 = var3.guild_id;
                var4 = var4.bind(var2)(var1);
                var1 = var3.id;
                var4 = var4[var1];
                var5 = null;
                if(!(var5 != var4)) { _fun0031_ip = 148; continue _fun0031 }
 37:
                var1 = var4.flags;
                if(!(var5 != var1)) { _fun0031_ip = 148; continue _fun0031 }
 46:
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var8 = 17;
                var5 = var5[var8];
                var7 = undefined;
                var10 = var6.bind(var7)(var5);
                var9 = var10.hasFlag;
                var6 = var4.flags;
                var5 = _closure1_slot19;
                var5 = var5.NEW_FORUM_THREADS_ON;
                var5 = var9.bind(var10)(var6, var5);
                if(var5) { _fun0031_ip = 182; continue _fun0031 }
 101:
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var1 = _closure1_slot19;
                var1 = var1.NEW_FORUM_THREADS_OFF;
                var1 = var5.bind(var6)(var4, var1);
                if(var1) { _fun0031_ip = 178; continue _fun0031 }
 148:
                var1 = var2.resolvedMessageNotifications;
                var2 = var1.bind(var2)(var3);
                var1 = _closure1_slot16;
                var1 = var1.ALL_MESSAGES;
                var1 = var2 === var1;
                return var1;
 178:
                var1 = false;
                return var1;
 182:
                var1 = true;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'isOptInEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0032_ip = 111; continue _fun0032 }
 15:
                var6 = _closure1_slot9;
                var2 = var6.isFullServerPreview;
                var2 = var2.bind(var6)(var5);
                if(var2) { _fun0032_ip = 93; continue _fun0032 }
 36:
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var2 = 17;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.hasFlag;
                var2 = var4.getGuildFlags;
                var4 = var2.bind(var4)(var5);
                var2 = _closure1_slot20;
                var2 = var2.OPT_IN_CHANNELS_ON;
                var2 = var6.bind(var7)(var4, var2);
                _fun0032_ip = 108; continue _fun0032;
 93:
                var4 = _closure1_slot9;
                var3 = var4.isOptInEnabled;
                var2 = var3.bind(var4)(var5);
 108:
                var1 = var2;
 111:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'isChannelRecordOrParentOptedIn';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var4 = arg1;
                var8 = arg2;
                var7 = this;
                var5 = null;
                var1 = var5 != var4;
                if(!var1) { _fun0033_ip = 27; continue _fun0033 }
 18:
                var2 = var4.guild_id;
                var1 = var5 != var2;
 27:
                if(!var1) { _fun0033_ip = 99; continue _fun0033 }
 30:
                var6 = var7.isChannelOptedIn;
                var3 = var4.guild_id;
                var2 = var4.id;
                var2 = var6.bind(var7)(var3, var2, var8);
                if(var2) { _fun0033_ip = 96; continue _fun0033 }
 56:
                var3 = var4.parent_id;
                var3 = var5 != var3;
                if(!var3) { _fun0033_ip = 93; continue _fun0033 }
 69:
                var6 = var7.isChannelOptedIn;
                var5 = var4.guild_id;
                var4 = var4.parent_id;
                var3 = var6.bind(var7)(var5, var4, var8);
 93:
                var2 = var3;
 96:
                var1 = var2;
 99:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'isChannelOrParentOptedIn';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var4 = this;
            var3 = var4.isChannelRecordOrParentOptedIn;
            var5 = _closure1_slot13;
            var2 = var5.getChannel;
            var1 = arg2;
            var2 = var2.bind(var5)(var1);
            var1 = arg3;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'isChannelOptedIn';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = arguments[2];
                var7 = this;
                var6 = undefined;
                if(!(var2 === var6)) { _fun0034_ip = 20; continue _fun0034 }
 18:
                var2 = false;
 20:
                var5 = null;
                if(!(var5 != var4)) { _fun0034_ip = 188; continue _fun0034 }
 29:
                var9 = _closure1_slot9;
                var8 = var9.isFullServerPreview;
                var8 = var8.bind(var9)(var4);
                if(var8) { _fun0034_ip = 170; continue _fun0034 }
 50:
                if(!var2) { _fun0034_ip = 65; continue _fun0034 }
 53:
                var2 = _closure1_slot34;
                var2 = var2[var4];
                if(!(var5 == var2)) { _fun0034_ip = 150; continue _fun0034 }
 65:
                var2 = var7.getChannelOverrides;
                var2 = var2.bind(var7)(var4);
                var7 = var2[var3];
                var8 = var5 == var7;
                var2 = undefined;
                if(var8) { _fun0034_ip = 94; continue _fun0034 }
 89:
                var2 = var7.flags;
 94:
                var5 = var5 != var2;
                var7 = 0;
                if(!var5) { _fun0034_ip = 106; continue _fun0034 }
 103:
                var7 = var2;
 106:
                var5 = _closure1_slot2;
                var8 = _closure1_slot3;
                var2 = 17;
                var2 = var8[var2];
                var6 = var5.bind(var6)(var2);
                var5 = var6.hasFlag;
                var2 = _closure1_slot19;
                var2 = var2.OPT_IN_ENABLED;
                var2 = var5.bind(var6)(var7, var2);
                return var2;
 150:
                var2 = _closure1_slot34;
                var5 = var2[var4];
                var2 = var5.has;
                var2 = var2.bind(var5)(var3);
                return var2;
 170:
                var2 = _closure1_slot9;
                var1 = var2.isChannelOptedIn;
                var1 = var1.bind(var2)(var4, var3);
                return var1;
 188:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'getOptedInChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var5 = arg1;
                var2 = _closure1_slot9;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var5);
                if(var1) { _fun0035_ip = 44; continue _fun0035 }
 24:
                var1 = _closure1_slot30;
                var1 = var1[var5];
                var2 = null;
                if(!(var2 == var1)) { _fun0035_ip = 42; continue _fun0035 }
 38:
                var1 = _closure1_slot32;
 42:
                _fun0035_ip = 72; continue _fun0035;
 44:
                var4 = _closure1_slot9;
                var2 = var4.getViewingChannels;
                var2 = var2.bind(var4)(var5);
                var4 = null;
                if(!(var4 == var2)) { _fun0035_ip = 69; continue _fun0035 }
 65:
                var2 = _closure1_slot32;
 69:
                var1 = var2;
 72:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'getOptedInChannelsWithPendingUpdates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot34;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[34] = var5;
        var5 = {};
        var7 = 'getPendingChannelUpdates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot33;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[35] = var5;
        var5 = {};
        var7 = 'getGuildFavorites';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var3 = arg1;
                var6 = this;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot9;
                var1 = var5.isFullServerPreview;
                var5 = var1.bind(var5)(var3);
                var1 = null;
                if(var5) { _fun0036_ip = 129; continue _fun0036 }
 35:
                var5 = _closure1_slot22;
                var5 = var5[var3];
                if(!(var1 == var5)) { _fun0036_ip = 119; continue _fun0036 }
 47:
                var8 = _closure1_slot1;
                var7 = _closure1_slot3;
                var5 = 16;
                var7 = var7[var5];
                var5 = undefined;
                var8 = var8.bind(var5)(var7);
                var7 = var8.filter;
                var5 = var6.getChannelOverrides;
                var6 = var5.bind(var6)(var3);
                var5 = function(arg1) {
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                        var2 = arg1;
                        var4 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = undefined;
                        var8 = var4.bind(var3)(var1);
                        var7 = var8.hasFlag;
                        var1 = var2.flags;
                        var4 = null;
                        var9 = var4 != var1;
                        var6 = 0;
                        if(!var9) { _fun0037_ip = 53; continue _fun0037 }
 50:
                        var6 = var1;
 53:
                        var1 = _closure1_slot19;
                        var1 = var1.FAVORITED;
                        var1 = var7.bind(var8)(var6, var1);
                        if(!var1) { _fun0037_ip = 116; continue _fun0037 }
 72:
                        var6 = _closure1_slot13;
                        var5 = var6.getChannel;
                        var2 = var2.channel_id;
                        var2 = var5.bind(var6)(var2);
                        var4 = var4 == var2;
                        var3 = undefined;
                        if(var4) { _fun0037_ip = 105; continue _fun0037 }
 100:
                        var3 = var2.guild_id;
 105:
                        var2 = _closure3_slot0;
                        var1 = var3 === var2;
 116:
                        return var1;
                    }
                };
                var7 = var7.bind(var8)(var6, var5);
                var5 = _closure1_slot22;
                var6 = var7.map;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.channel_id;
                    return var1;
                };
                var4 = var6.bind(var7)(var4);
                var5[var3] = var4;
 119:
                var2 = _closure1_slot22;
                var2 = var2[var3];
                return var2;
 129:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[36] = var5;
        var5 = {};
        var7 = 'isFavorite';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var2 = _closure1_slot9;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var4);
                var1 = !var1;
                if(!var1) { _fun0038_ip = 71; continue _fun0038 }
 30:
                var2 = var3.getGuildFavorites;
                var5 = var2.bind(var3)(var4);
                var2 = null;
                var2 = var2 == var5;
                var3 = undefined;
                if(var2) { _fun0038_ip = 65; continue _fun0038 }
 52:
                var4 = var5.includes;
                var2 = arg2;
                var3 = var4.bind(var5)(var2);
 65:
                var2 = true;
                var1 = var2 === var3;
 71:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[37] = var5;
        var5 = {};
        var7 = 'isMessagesFavorite';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var3 = this;
                var1 = var3.getChannelOverrides;
                var2 = null;
                var3 = var1.bind(var3)(var2);
                var1 = arg1;
                var3 = var3[var1];
                var4 = var2 == var3;
                var5 = undefined;
                var1 = undefined;
                if(var4) { _fun0039_ip = 39; continue _fun0039 }
 34:
                var1 = var3.flags;
 39:
                var2 = var2 != var1;
                var4 = 0;
                if(!var2) { _fun0039_ip = 51; continue _fun0039 }
 48:
                var4 = var1;
 51:
                var3 = _closure1_slot2;
                var6 = _closure1_slot3;
                var2 = 17;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasFlag;
                var1 = _closure1_slot19;
                var1 = var1.FAVORITED;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[38] = var5;
        var5 = {};
        var7 = 'isAddedToMessages';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                var3 = this;
                var1 = var3.getChannelOverrides;
                var2 = null;
                var3 = var1.bind(var3)(var2);
                var1 = arg1;
                var3 = var3[var1];
                var4 = var2 == var3;
                var5 = undefined;
                var1 = undefined;
                if(var4) { _fun0040_ip = 39; continue _fun0040 }
 34:
                var1 = var3.flags;
 39:
                var2 = var2 != var1;
                var4 = 0;
                if(!var2) { _fun0040_ip = 51; continue _fun0040 }
 48:
                var4 = var1;
 51:
                var3 = _closure1_slot2;
                var6 = _closure1_slot3;
                var2 = 17;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasFlag;
                var1 = _closure1_slot19;
                var1 = var1.OPT_IN_ENABLED;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[39] = var5;
        var5 = {};
        var7 = 'getAddedToMessages';
        var5['key'] = var7;
        var7 = function value() {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                var1 = _closure1_slot30;
                var1 = var1.null;
                var3 = null;
                if(!(var3 == var1)) { _fun0041_ip = 23; continue _fun0041 }
 19:
                var1 = _closure1_slot32;
 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[40] = var5;
        var5 = {};
        var7 = 'accountNotificationSettings';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['get'] = var7;
        var1[41] = var5;
        var5 = {};
        var7 = 'useNewNotifications';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['get'] = var7;
        var1[42] = var5;
        var5 = {};
        var7 = 'getGuildUnreadSetting';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot48;
                var4 = undefined;
                var1 = var1.bind(var4)();
                if(var1) { _fun0042_ip = 31; continue _fun0042 }
 19:
                var1 = _closure1_slot18;
                var1 = var1.ALL_MESSAGES;
                return var1;
 31:
                var3 = var5.getGuildFlags;
                var1 = arg1;
                var5 = var3.bind(var5)(var1);
                var3 = _closure1_slot2;
                var1 = _closure1_slot3;
                var6 = 17;
                var1 = var1[var6];
                var7 = var3.bind(var4)(var1);
                var3 = var7.hasFlag;
                var1 = _closure1_slot20;
                var1 = var1.UNREADS_ALL_MESSAGES;
                var1 = var3.bind(var7)(var5, var1);
                if(var1) { _fun0042_ip = 152; continue _fun0042 }
 90:
                var3 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var6];
                var4 = var3.bind(var4)(var1);
                var3 = var4.hasFlag;
                var1 = _closure1_slot20;
                var1 = var1.UNREADS_ONLY_MENTIONS;
                var1 = var3.bind(var4)(var5, var1);
                var3 = _closure1_slot18;
                if(var1) { _fun0042_ip = 144; continue _fun0042 }
 136:
                var1 = var3.UNSET;
                _fun0042_ip = 150; continue _fun0042;
 144:
                var1 = var3.ONLY_MENTIONS;
 150:
                _fun0042_ip = 162; continue _fun0042;
 152:
                var2 = _closure1_slot18;
                var1 = var2.ALL_MESSAGES;
 162:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[43] = var5;
        var5 = {};
        var7 = 'resolveGuildUnreadSetting';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var3 = var4.getGuildFlags;
                var1 = var2.id;
                var7 = var3.bind(var4)(var1);
                var1 = _closure1_slot48;
                var6 = undefined;
                var1 = var1.bind(var6)();
                if(var1) { _fun0043_ip = 53; continue _fun0043 }
 38:
                var1 = _closure1_slot18;
                var1 = var1.ALL_MESSAGES;
                _fun0043_ip = 209; continue _fun0043;
 53:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var8 = 17;
                var4 = var4[var8];
                var9 = var5.bind(var6)(var4);
                var5 = var9.hasFlag;
                var4 = _closure1_slot20;
                var4 = var4.UNREADS_ALL_MESSAGES;
                var4 = var5.bind(var9)(var7, var4);
                if(var4) { _fun0043_ip = 196; continue _fun0043 }
 98:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var4 = var4[var8];
                var6 = var5.bind(var6)(var4);
                var5 = var6.hasFlag;
                var4 = _closure1_slot20;
                var4 = var4.UNREADS_ONLY_MENTIONS;
                var4 = var5.bind(var6)(var7, var4);
                if(var4) { _fun0043_ip = 184; continue _fun0043 }
 140:
                var4 = var2.defaultMessageNotifications;
                var2 = _closure1_slot16;
                var2 = var2.ALL_MESSAGES;
                if(!(var4 !== var2)) { _fun0043_ip = 172; continue _fun0043 }
 160:
                var2 = _closure1_slot18;
                var2 = var2.ONLY_MENTIONS;
                _fun0043_ip = 182; continue _fun0043;
 172:
                var4 = _closure1_slot18;
                var2 = var4.ALL_MESSAGES;
 182:
                _fun0043_ip = 194; continue _fun0043;
 184:
                var4 = _closure1_slot18;
                var2 = var4.ONLY_MENTIONS;
 194:
                _fun0043_ip = 206; continue _fun0043;
 196:
                var3 = _closure1_slot18;
                var2 = var3.ALL_MESSAGES;
 206:
                var1 = var2;
 209:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[44] = var5;
        var5 = {};
        var7 = 'getChannelRecordUnreadSetting';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var4 = this;
            var3 = var4.getChannelUnreadSetting;
            var2 = var1.guild_id;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[45] = var5;
        var5 = {};
        var7 = 'getChannelUnreadSetting';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                var4 = this;
                var3 = var4.getChannelIdFlags;
                var2 = arg1;
                var1 = arg2;
                var5 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot2;
                var1 = _closure1_slot3;
                var6 = 17;
                var1 = var1[var6];
                var4 = undefined;
                var7 = var3.bind(var4)(var1);
                var3 = var7.hasFlag;
                var1 = _closure1_slot19;
                var1 = var1.UNREADS_ALL_MESSAGES;
                var1 = var3.bind(var7)(var5, var1);
                if(var1) { _fun0044_ip = 133; continue _fun0044 }
 71:
                var3 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var6];
                var4 = var3.bind(var4)(var1);
                var3 = var4.hasFlag;
                var1 = _closure1_slot19;
                var1 = var1.UNREADS_ONLY_MENTIONS;
                var1 = var3.bind(var4)(var5, var1);
                var3 = _closure1_slot18;
                if(var1) { _fun0044_ip = 125; continue _fun0044 }
 117:
                var1 = var3.UNSET;
                _fun0044_ip = 131; continue _fun0044;
 125:
                var1 = var3.ONLY_MENTIONS;
 131:
                _fun0044_ip = 143; continue _fun0044;
 133:
                var2 = _closure1_slot18;
                var1 = var2.ALL_MESSAGES;
 143:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[46] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'UserGuildSettingsStore';
    var10['displayName'] = var5;
    var5 = 'collapsedGuilds';
    var10['persistKey'] = var5;
    var5 = 18;
    var5 = var8[var5];
    var20 = var9.bind(var1)(var5);
    var5 = {};
    var12 = function handleUserGuildSettingsFullUpdate(arg1) {
        var1 = arg1;
        var3 = var1.userGuildSettings;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = _closure1_slot36;
            var3 = var1.guild_id;
            var2 = {};
            var5 = {};
            var2['channel_overrides'] = var5;
            var7 = var2;
            var6 = var1;
            var1 = copyDataProperties(var7, var6);
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var5['USER_GUILD_SETTINGS_FULL_UPDATE'] = var12;
    var12 = function handleUserGuildSettingsGuildUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.settings;
        var2 = _closure1_slot38;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var5['USER_GUILD_SETTINGS_GUILD_UPDATE'] = var12;
    var12 = function handleUserGuildSettingsGuildAndChannelsUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var2 = var1.settings;
        var5 = _closure1_slot38;
        var1 = undefined;
        var5 = var5.bind(var1)(var4, var2);
        var3 = _closure1_slot40;
        var2 = var2.channel_overrides;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var5['USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE'] = var12;
    var12 = function handleUserGuildSettingsChannelUpdate(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.channelId;
            var3 = var1.settings;
            var6 = null;
            var1 = var6 != var5;
            if(!var1) { _fun0045_ip = 37; continue _fun0045 }
 28:
            var2 = var3.flags;
            var1 = var6 != var2;
 37:
            if(!var1) { _fun0045_ip = 80; continue _fun0045 }
 40:
            var2 = _closure1_slot33;
            var1 = {};
            var9 = var2[var5];
            var10 = var1;
            var6 = copyDataProperties(var10, var9);
            var6 = {};
            var7 = var3.flags;
            var6['flags'] = var7;
            var1[var4] = var6;
            var2[var5] = var1;
 80:
            var2 = _closure1_slot39;
            var1 = undefined;
            var2 = var2.bind(var1)(var5, var4, var3);
            return var1;
        }
    };
    var5['USER_GUILD_SETTINGS_CHANNEL_UPDATE'] = var12;
    var12 = function handleUserGuildSettingsChannelUpdateBulk(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.overrides;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0046_ip = 44; continue _fun0046 }
 23:
            var3 = _closure1_slot9;
            var2 = var3.isFullServerPreview;
            var2 = var2.bind(var3)(var5);
            var1 = !var2;
 44:
            if(!var1) { _fun0046_ip = 64; continue _fun0046 }
 47:
            var3 = _closure1_slot40;
            var2 = undefined;
            var2 = var3.bind(var2)(var5, var4);
            var1 = true;
 64:
            return var1;
        }
    };
    var5['USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK'] = var12;
    var12 = function handleConnectionOpen(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
            var9 = arg1;
            var4 = _closure1_slot46;
            var3 = var9.notificationSettings;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot26;
            var3 = var4.reset;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot27;
            var3 = var4.reset;
            var3 = var3.bind(var4)();
            var3 = var9.userGuildSettings;
            var3 = var3.partial;
            if(var3) { _fun0047_ip = 86; continue _fun0047 }
 68:
            var3 = {};
            _closure1_slot21 = var3;
            var3 = {};
            _closure1_slot29 = var3;
            var3 = {};
            _closure1_slot30 = var3;
 86:
            var3 = global;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var14 = var4;
            var3 = new var14[var3](var13);
            var7 = var3 instanceof Object ? var3 : var4;
            var _closure2_slot0 = var7;
            var9 = var9.userGuildSettings;
            var10 = var9.entries;
            var9 = var10.forEach;
            var2 = function(arg1) {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                    var2 = arg1;
                    var1 = 'channel_overrides';
                    var1 = var1 in var2;
                    if(var1) { _fun0048_ip = 22; continue _fun0048 }
 14:
                    var1 = {};
                    var2['channel_overrides'] = var1;
 22:
                    var4 = _closure1_slot36;
                    var3 = var2.guild_id;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3, var2);
                    var4 = var2.guild_id;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0048_ip = 75; continue _fun0048 }
 53:
                    var4 = _closure2_slot0;
                    var3 = var4.add;
                    var2 = var2.guild_id;
                    var2 = var3.bind(var4)(var2);
 75:
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2);
            var5 = _closure1_slot21;
            for(var2 in var5)
 157:
            {
 166:
                var11 = var2;
                var9 = var7.has;
                var9 = var9.bind(var7)(var11);
                if(var9) { _fun0047_ip = 157; continue _fun0047 }
 182:
                var10 = _closure1_slot37;
                var9 = _closure1_slot21;
                var9 = var9[var11];
                var9 = var10.bind(var1)(var11, var9);
                _fun0047_ip = 157; continue _fun0047;
            }
 202:
            return var1;
        }
    };
    var5['CONNECTION_OPEN'] = var12;
    var12 = function handleCacheLoaded(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
            var1 = arg1;
            var3 = var1.userGuildSettings;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0049_ip = 35; continue _fun0049 }
 18:
            var3 = var1.userGuildSettings;
            var4 = var3.length;
            var3 = 0;
            var2 = var3 !== var4;
 35:
            if(!var2) { _fun0049_ip = 82; continue _fun0049 }
 38:
            var2 = {};
            _closure1_slot21 = var2;
            var2 = {};
            _closure1_slot29 = var2;
            var2 = {};
            _closure1_slot30 = var2;
            var3 = var1.userGuildSettings;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                    var15 = arg1;
                    var4 = var15.guild_id;
                    var1 = _closure1_slot21;
                    var1[var4] = var15;
                    var1 = global;
                    var3 = var1.Set;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {constructor: {value: var3}});
                    var24 = var5;
                    var3 = new var24[var3](var23);
                    var6 = var3 instanceof Object ? var3 : var5;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var24 = var3;
                    var1 = new var24[var1](var23);
                    var3 = var1 instanceof Object ? var1 : var3;
                    var13 = var15.channel_overrides;
                    var9 = 17;
                    var1 = undefined;
                    var8 = null;
                    var5 = 15;
                    for(var10 in var13)
 100:
                    {
 112:
                        var17 = var10;
                        var16 = var15.channel_overrides;
                        var16 = var16[var17];
                        var19 = _closure1_slot0;
                        var18 = _closure1_slot3;
                        var18 = var18[var5];
                        var19 = var19.bind(var1)(var18);
                        var18 = var19.computeIsMuted;
                        var18 = var18.bind(var19)(var16);
                        if(!var18) { _fun0050_ip = 166; continue _fun0050 }
 156:
                        var18 = var6.add;
                        var18 = var18.bind(var6)(var17);
 166:
                        var19 = _closure1_slot2;
                        var18 = _closure1_slot3;
                        var18 = var18[var9];
                        var20 = var19.bind(var1)(var18);
                        var19 = var20.hasFlag;
                        var16 = var16.flags;
                        var21 = var8 != var16;
                        var18 = 0;
                        if(!var21) { _fun0050_ip = 206; continue _fun0050 }
 203:
                        var18 = var16;
 206:
                        var16 = _closure1_slot19;
                        var16 = var16.OPT_IN_ENABLED;
                        var16 = var19.bind(var20)(var18, var16);
                        if(!var16) { _fun0050_ip = 100; continue _fun0050 }
 225:
                        var16 = var3.add;
                        var16 = var16.bind(var3)(var17);
                        _fun0050_ip = 100; continue _fun0050;
                    }
 240:
                    var5 = _closure1_slot29;
                    var5[var4] = var6;
                    var2 = _closure1_slot30;
                    var2[var4] = var3;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 82:
            var1 = undefined;
            return var1;
        }
    };
    var5['CACHE_LOADED'] = var12;
    var12 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.allUserGuildSettings;
        var10 = var3.userGuildSettings;
        var9 = var3.mutedChannels;
        var _closure2_slot0 = var9;
        var5 = var3.optedInChannelsByGuild;
        var _closure2_slot1 = var5;
        var3 = {};
        var11 = var3;
        var1 = copyDataProperties(var11, var10);
        _closure1_slot21 = var3;
        var3 = {};
        _closure1_slot29 = var3;
        var3 = {};
        _closure1_slot30 = var3;
        var4 = _closure1_slot1;
        var6 = _closure1_slot3;
        var3 = 19;
        var7 = var6[var3];
        var1 = undefined;
        var8 = var4.bind(var1)(var7);
        var7 = var8.keys;
        var9 = var7.bind(var8)(var9);
        var8 = var9.forEach;
        var7 = function(arg1) {
            var3 = arg1;
            var2 = _closure1_slot29;
            var1 = global;
            var5 = var1.Set;
            var1 = _closure2_slot0;
            var6 = var1[var3];
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        };
        var7 = var8.bind(var9)(var7);
        var3 = var6[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.keys;
        var4 = var3.bind(var4)(var5);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = _closure1_slot30;
            var1 = global;
            var5 = var1.Set;
            var1 = _closure2_slot1;
            var6 = var1[var3];
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var5['OVERLAY_INITIALIZE'] = var12;
    var5['GUILD_CREATE'] = var11;
    var5['GUILD_UPDATE'] = var11;
    var12 = function handleToggleCollapseMuted(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot21;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0051_ip = 35; continue _fun0051 }
 25:
            var2 = _closure1_slot21;
            var4 = var2[var3];
            _fun0051_ip = 46; continue _fun0051;
 35:
            var5 = _closure1_slot43;
            var2 = undefined;
            var4 = var5.bind(var2)(var3);
 46:
            var2 = _closure1_slot21;
            var1 = {};
            var7 = var1;
            var6 = var4;
            var5 = copyDataProperties(var7, var6);
            var5 = 'guild_id';
            var1[var5] = var3;
            var5 = var4.hide_muted_channels;
            var4 = true;
            var4 = var4 === var5;
            var5 = !var4;
            var4 = 'hide_muted_channels';
            var1[var4] = var5;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var5['GUILD_TOGGLE_COLLAPSE_MUTED'] = var12;
    var5['IMPERSONATE_UPDATE'] = var11;
    var5['IMPERSONATE_STOP'] = var11;
    var11 = function handleRemovePendingUpdates(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var10 = var1.updates;
            var1 = null;
            if(!(var1 != var3)) { _fun0052_ip = 115; continue _fun0052 }
 20:
            var2 = _closure1_slot33;
            var8 = var2[var3];
            if(!(var1 != var8)) { _fun0052_ip = 111; continue _fun0052 }
 35:
            var6 = var10;
            var2 = 16;
            var1 = undefined;
            for(var3 in var6)
 51:
            {
 60:
                var11 = var3;
                var13 = _closure1_slot1;
                var12 = _closure1_slot3;
                var12 = var12[var2];
                var15 = var13.bind(var1)(var12);
                var14 = var15.isEqual;
                var13 = var10[var11];
                var12 = var8[var11];
                var12 = var14.bind(var15)(var13, var12);
                if(!var12) { _fun0052_ip = 51; continue _fun0052 }
 103:
                var11 = delete var8[var11];
                _fun0052_ip = 51; continue _fun0052;
            }
 109:
            return var1;
 111:
            var1 = false;
            return var1;
 115:
            var1 = false;
            return var1;
        }
    };
    var5['USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES'] = var11;
    var11 = function handleClearPendingUpdates(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var1 = null;
            if(!(var1 != var2)) { _fun0053_ip = 37; continue _fun0053 }
 14:
            var3 = _closure1_slot33;
            var3 = delete var3[var2];
            var1 = _closure1_slot34;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 37:
            var1 = false;
            return var1;
        }
    };
    var5['CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES'] = var11;
    var11 = function handleNotificationSettingsUpdate(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = _closure1_slot46;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var5['NOTIFICATION_SETTINGS_UPDATE'] = var11;
    var11 = function GUILD_MUTE_EXPIRED() {
        var1 = true;
        return var1;
    };
    var5['GUILD_MUTE_EXPIRED'] = var11;
    var6 = function CHANNEL_MUTE_EXPIRED() {
        var1 = true;
        return var1;
    };
    var5['CHANNEL_MUTE_EXPIRED'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var21 = var6;
    var19 = var5;
    var5 = new var21[var10](var20, var19, var18);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 22;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'stores/UserGuildSettingsStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['getGuildDefaults'] = var4;
    var3['convertChannelOverridesToMap'] = var2;
    return var1;
})();