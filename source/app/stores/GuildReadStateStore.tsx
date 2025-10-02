// app/stores/GuildReadStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
            _closure1_slot31 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot31 = var1;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot33;
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
            var7 = _closure1_slot33;
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
    var _closure1_slot32 = var1;
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
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function createGuildState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot28;
            var4 = null;
            if(!(var4 == var2)) { _fun0005_ip = 33; continue _fun0005 }
case 39:
            var2 = _closure1_slot27;
case 33:
            var5 = var1[var2];
            var1 = {'unread': false, 'unreadByType': null, 'unreadChannelId': null, 'lowImportanceMentionCount': 0, 'highImportanceMentionCount': 0, 'mentionCounts': null, 'ncMentionCount': 0};
            var2 = {};
            var1['unreadByType'] = var2;
            var3 = {};
            var1['mentionCounts'] = var3;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = var5.sentinel;
case 40:
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var2 = var3;
case 42:
            var1['sentinel'] = var2;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function getOrCreateGuildState(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot28;
            var5 = null;
            var2 = var6;
            if(!(var5 == var6)) { _fun0006_ip = 35; continue _fun0006 }
case 44:
            var2 = _closure1_slot27;
case 35:
            var7 = _closure1_slot28;
            var1 = var6;
            if(!(var5 == var1)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var1 = _closure1_slot27;
case 45:
            var1 = var7[var1];
            if(!(var5 == var1)) { _fun0006_ip = 47; continue _fun0006 }
case 6:
            var5 = _closure1_slot34;
            var4 = undefined;
            var1 = var5.bind(var4)(var6);
case 47:
            var3[var2] = var1;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function updateGuildUnreadSentinel(arg1) {
        var4 = _closure1_slot35;
        var1 = undefined;
        var2 = arg1;
        var4 = var4.bind(var1)(var2);
        var2 = var4.sentinel;
        var2 = var2 + 1;
        var4['sentinel'] = var2;
        var2 = _closure1_slot30;
        var2 = var2 + 1;
        _closure1_slot30 = var2;
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function disableUnreadForOptInChannel(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var2 = arg3;
            var3 = var6.guild_id;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0007_ip = 43; continue _fun0007 }
case 33:
            if(!var2) { _fun0007_ip = 41; continue _fun0007 }
case 35:
            var7 = _closure1_slot14;
            var5 = var6.type;
            var3 = undefined;
            var3 = var7.bind(var3)(var5);
            if(var3) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var5 = _closure1_slot21;
            var4 = var5.isChannelRecordOrParentOptedIn;
            var3 = var4.bind(var5)(var6);
case 48:
            var2 = !var3;
case 41:
            if(!var2) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var4 = 0;
            var3 = arg2;
            var2 = var4 === var3;
case 50:
            var1 = var2;
case 43:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function isCountableChannel(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var3 = arguments[1];
            var4 = arguments[2];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var3 = 0;
case 52:
            if(!(var4 === var7)) { _fun0008_ip = 35; continue _fun0008 }
case 54:
            var4 = false;
case 35:
            var1 = null;
            if(!(var1 != var5)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var1 = var5.isGuildVocal;
            var1 = var1.bind(var5)();
            if(!var1) { _fun0008_ip = 57; continue _fun0008 }
case 49:
            var1 = 0;
            if(!(var1 !== var3)) { _fun0008_ip = 58; continue _fun0008 }
case 57:
            var6 = var5.hasFlag;
            var1 = _closure1_slot24;
            var1 = var1.IS_GUILD_RESOURCE_CHANNEL;
            var1 = var6.bind(var5)(var1);
            if(var1) { _fun0008_ip = 59; continue _fun0008 }
case 60:
            var1 = 0;
            if(!(var1 !== var3)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            if(!var4) { _fun0008_ip = 63; continue _fun0008 }
case 61:
            var4 = var5.isThread;
            var4 = var4.bind(var5)();
            if(var4) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var9 = _closure1_slot21;
            var8 = var9.isGuildOrCategoryOrChannelMuted;
            var6 = var5.guild_id;
            var4 = var5.id;
            var4 = var8.bind(var9)(var6, var4);
            _fun0008_ip = 23; continue _fun0008;
case 64:
            var9 = _closure1_slot11;
            var8 = var9.isMuted;
            var6 = var5.id;
            var6 = var8.bind(var9)(var6);
            if(var6) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var11 = _closure1_slot21;
            var10 = var11.isGuildOrCategoryOrChannelMuted;
            var9 = var5.guild_id;
            var8 = var5.parent_id;
            var6 = var10.bind(var11)(var9, var8);
case 66:
            var4 = var6;
case 23:
            if(var4) { _fun0008_ip = 68; continue _fun0008 }
case 63:
            var4 = var5.isPrivate;
            var4 = var4.bind(var5)();
            if(var4) { _fun0008_ip = 29; continue _fun0008 }
case 69:
            var6 = _closure1_slot37;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 22;
            var4 = var9[var4];
            var9 = var8.bind(var7)(var4);
            var8 = var9.isOptInEnabledForGuild;
            var4 = var5.guild_id;
            var4 = var8.bind(var9)(var4);
            var4 = var6.bind(var7)(var5, var3, var4);
            if(var4) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var7 = _closure1_slot18;
            var6 = var7.can;
            var4 = var5.accessPermissions;
            var4 = var6.bind(var7)(var4, var5);
            if(var4) { _fun0008_ip = 29; continue _fun0008 }
case 72:
            var4 = false;
            return var4;
case 70:
            var4 = false;
            return var4;
case 29:
            var1 = var3 > var1;
            if(var1) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var4 = _closure1_slot21;
            var3 = var4.resolveUnreadSetting;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot26;
            var2 = var2.ALL_MESSAGES;
            var1 = var3 === var2;
case 73:
            return var1;
case 68:
            var1 = false;
            return var1;
case 59:
            var1 = false;
            return var1;
case 58:
            var1 = false;
            return var1;
case 55:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function computeIsCountableGuildChannel(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var9 = arg1;
            var7 = arg2;
            var2 = _closure1_slot13;
            var1 = var9.type;
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = !var1;
            if(var1) { _fun0009_ip = 75; continue _fun0009 }
case 76:
            var2 = 0;
            var1 = var2 !== var7;
case 75:
            if(!var1) { _fun0009_ip = 63; continue _fun0009 }
case 77:
            var4 = _closure1_slot18;
            var3 = var4.canBasicChannel;
            var8 = _closure1_slot12;
            var2 = var9.type;
            var2 = var8.bind(var5)(var2);
            var2 = var3.bind(var4)(var2, var9);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var4 = _closure1_slot37;
            var3 = arg3;
            var3 = var4.bind(var5)(var9, var7, var3);
            var3 = !var3;
            if(!var3) { _fun0009_ip = 23; continue _fun0009 }
case 80:
            var4 = 'flags';
            var5 = var4 in var9;
            var4 = !var5;
            if(!var5) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var8 = var9.hasFlag;
            var5 = _closure1_slot24;
            var5 = var5.IS_GUILD_RESOURCE_CHANNEL;
            var5 = var8.bind(var9)(var5);
            var4 = !var5;
case 81:
            if(!var4) { _fun0009_ip = 66; continue _fun0009 }
case 83:
            var5 = 0;
            var5 = var7 > var5;
            if(var5) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var8 = _closure1_slot21;
            var7 = var8.resolveUnreadSetting;
            var7 = var7.bind(var8)(var9);
            var6 = _closure1_slot26;
            var6 = var6.ALL_MESSAGES;
            var5 = var7 === var6;
case 84:
            var4 = var5;
case 66:
            var3 = var4;
case 23:
            var2 = var3;
case 78:
            var1 = var2;
case 63:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function sanitizeGuildId(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = _closure1_slot27;
            if(!(var2 !== var1)) { _fun0010_ip = 38; continue _fun0010 }
case 36:
            var2 = null;
            if(!(var2 !== var1)) { _fun0010_ip = 38; continue _fun0010 }
case 33:
            var2 = undefined;
            if(!(var2 !== var1)) { _fun0010_ip = 38; continue _fun0010 }
case 86:
            return var1;
case 38:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function isNonChannelUnread(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = _closure1_slot19;
            var1 = var2.hasUnread;
            var4 = var1.bind(var2)(var6, var5);
            var1 = _closure1_slot25;
            var2 = var1.GUILD_EVENT;
            var1 = var4;
            if(!(var5 === var2)) { _fun0011_ip = 61; continue _fun0011 }
case 87:
            var5 = _closure1_slot21;
            var2 = var5.isMuted;
            var2 = var2.bind(var5)(var6);
            var2 = !var2;
            if(!var2) { _fun0011_ip = 62; continue _fun0011 }
case 41:
            var5 = _closure1_slot21;
            var3 = var5.isMuteScheduledEventsEnabled;
            var3 = var3.bind(var5)(var6);
            var3 = !var3;
            if(!var3) { _fun0011_ip = 88; continue _fun0011 }
case 60:
            var3 = var4;
case 88:
            var2 = var3;
case 62:
            var1 = var2;
case 61:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function createNewStateFrom(arg1, arg2) {
        var3 = arg2;
        var4 = _closure1_slot34;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var1);
        var2 = {};
        var5 = var3.mentionCounts;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        var1['mentionCounts'] = var2;
        var2 = {};
        var5 = var3.unreadByType;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var1['unreadByType'] = var2;
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function updateGuildUnread(arg1) {
        var1 = arg1;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.values;
        var2 = {};
        var7 = var1.unreadByType;
        var8 = var2;
        var5 = copyDataProperties(var8, var7);
        var5 = _closure1_slot25;
        var6 = var5.GUILD_EVENT;
        var5 = undefined;
        var2[var6] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.some;
        var2 = function(arg1) {
            var1 = arg1;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1['unread'] = var2;
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = function updateNotificationCenterMentions(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var3 = _closure1_slot8;
            var3 = var3.tabFocused;
            if(var3) { _fun0012_ip = 89; continue _fun0012 }
case 90:
            var1 = _closure1_slot45;
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var1 = var1.bind(var8)(var6);
            var3 = global;
            var5 = var3.Math;
            var4 = var5.max;
            var3 = null;
            var9 = var3 == var6;
            if(var9) { _fun0012_ip = 51; continue _fun0012 }
case 48:
            var8 = var6.ncMentionCount;
case 51:
            var9 = var3 != var8;
            var3 = 0;
            var6 = 0;
            if(!var9) { _fun0012_ip = 91; continue _fun0012 }
case 92:
            var6 = var8;
case 91:
            var1 = var7 - var1;
            var1 = var6 + var1;
            var1 = var4.bind(var5)(var1, var3);
            var2['ncMentionCount'] = var1;
case 89:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function getGuildNotifCenterMentionCount(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = 0;
            var _closure2_slot1 = var3;
            var5 = _closure1_slot22;
            var4 = var5.getCurrentUser;
            var4 = var4.bind(var5)();
            var7 = null;
            var8 = var7 == var4;
            var5 = undefined;
            var6 = undefined;
            if(var8) { _fun0013_ip = 51; continue _fun0013 }
case 93:
            var9 = _closure1_slot19;
            var8 = var9.getNotifCenterReadState;
            var4 = var4.id;
            var6 = var8.bind(var9)(var4);
case 51:
            var _closure2_slot2 = var6;
            var4 = var7 == var2;
            if(var4) { _fun0013_ip = 42; continue _fun0013 }
case 92:
            var4 = var7 == var6;
case 42:
            if(var4) { _fun0013_ip = 94; continue _fun0013 }
case 60:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 23;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.keys;
            var2 = var2.mentionCounts;
            var4 = var3.bind(var4)(var2);
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure1_slot19;
                    var2 = var3.lastMessageId;
                    var7 = var2.bind(var3)(var5);
                    var2 = _closure2_slot2;
                    var6 = var2._ackMessageId;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.compare;
                    var4 = var2.bind(var4)(var7, var6);
                    var2 = 0;
                    if(!(var4 > var2)) { _fun0014_ip = 65; continue _fun0014 }
case 4:
                    var4 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.mentionCounts;
                    var2 = var2[var5];
                    var2 = var2.count;
                    var2 = var4 + var2;
                    _closure2_slot1 = var2;
case 65:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 94:
            var1 = _closure2_slot1;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function aggregateGuildState(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var5;
            var7 = _closure1_slot43;
            var3 = undefined;
            var7 = var7.bind(var3)(var5);
            var7 = 0;
            var5['lowImportanceMentionCount'] = var7;
            var5['highImportanceMentionCount'] = var7;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 23;
            var7 = var9[var7];
            var9 = var8.bind(var3)(var7);
            var8 = var9.forEach;
            var7 = var5.mentionCounts;
            var1 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.count;
                    var1 = var1.isMentionLowImportance;
                    var2 = _closure2_slot0;
                    if(var1) { _fun0016_ip = 77; continue _fun0016 }
case 95:
                    var1 = var2.highImportanceMentionCount;
                    var1 = var1 + var3;
                    var2['highImportanceMentionCount'] = var1;
                    _fun0016_ip = 96; continue _fun0016;
case 77:
                    var1 = var2.lowImportanceMentionCount;
                    var1 = var1 + var3;
                    var2['lowImportanceMentionCount'] = var1;
case 96:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var7, var1);
            var7 = var5.unread;
            var1 = var4.unread;
            var1 = var7 !== var1;
            if(var1) { _fun0015_ip = 97; continue _fun0015 }
case 98:
            var8 = var5.lowImportanceMentionCount;
            var7 = var4.lowImportanceMentionCount;
            var1 = var8 !== var7;
case 97:
            if(var1) { _fun0015_ip = 99; continue _fun0015 }
case 100:
            var8 = var5.highImportanceMentionCount;
            var7 = var4.highImportanceMentionCount;
            var1 = var8 !== var7;
case 99:
            if(!var1) { _fun0015_ip = 101; continue _fun0015 }
case 102:
            var9 = _closure1_slot28;
            var8 = null;
            var7 = var6;
            if(!(var8 == var6)) { _fun0015_ip = 103; continue _fun0015 }
case 104:
            var7 = _closure1_slot27;
case 103:
            var9[var7] = var5;
            if(!(var8 != var6)) { _fun0015_ip = 105; continue _fun0015 }
case 106:
            var7 = var5.unread;
            var9 = _closure1_slot29;
            if(var7) { _fun0015_ip = 107; continue _fun0015 }
case 108:
            var7 = var9.delete;
            var7 = var7.bind(var9)(var6);
            _fun0015_ip = 105; continue _fun0015;
case 107:
            var7 = var9.add;
            var7 = var7.bind(var9)(var6);
case 105:
            var7 = _closure1_slot30;
            var7 = var7 + 1;
            _closure1_slot30 = var7;
            var7 = _closure1_slot36;
            if(!(var8 == var6)) { _fun0015_ip = 109; continue _fun0015 }
case 110:
            var6 = _closure1_slot27;
case 109:
            var6 = var7.bind(var3)(var6);
            var2 = _closure1_slot44;
            var2 = var2.bind(var3)(var5, var4);
            var1 = true;
case 101:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function recountChannels(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var10 = arg2;
            var3 = _closure1_slot40;
            var5 = undefined;
            var2 = arg1;
            var4 = var3.bind(var5)(var2);
            var _closure2_slot0 = var4;
            var2 = _closure1_slot35;
            var3 = var2.bind(var5)(var4);
            var2 = _closure1_slot42;
            var2 = var2.bind(var5)(var4, var3);
            var _closure2_slot1 = var2;
            var7 = false;
            var _closure2_slot2 = var7;
            var8 = var10.forEach;
            var7 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure1_slot16;
                    var1 = var2.getChannel;
                    var1 = var1.bind(var2)(var6);
                    var7 = null;
                    if(!(var7 == var1)) { _fun0018_ip = 111; continue _fun0018 }
case 86:
                    var2 = _closure2_slot1;
                    var2 = var2.mentionCounts;
                    var2 = delete var2[var6];
                    _fun0018_ip = 112; continue _fun0018;
case 111:
                    var2 = var1.getGuildId;
                    var5 = var2.bind(var1)();
                    var3 = _closure2_slot0;
                    if(!(var5 === var3)) { _fun0018_ip = 112; continue _fun0018 }
case 5:
                    var5 = _closure1_slot19;
                    var3 = var5.getMentionCount;
                    var5 = var3.bind(var5)(var6);
                    var3 = _closure2_slot0;
                    var3 = var7 !== var3;
                    if(!var3) { _fun0018_ip = 113; continue _fun0018 }
case 114:
                    var7 = _closure2_slot2;
                    var3 = !var7;
case 113:
                    if(!var3) { _fun0018_ip = 115; continue _fun0018 }
case 116:
                    var9 = _closure1_slot19;
                    var8 = var9.hasUnread;
                    var7 = var1.id;
                    var3 = var8.bind(var9)(var7);
case 115:
                    if(!var3) { _fun0018_ip = 117; continue _fun0018 }
case 118:
                    var9 = _closure1_slot38;
                    var8 = undefined;
                    var7 = true;
                    var3 = var9.bind(var8)(var1, var5, var7);
case 117:
                    if(!var3) { _fun0018_ip = 119; continue _fun0018 }
case 120:
                    var3 = true;
                    _closure2_slot2 = var3;
                    var7 = _closure2_slot1;
                    var3 = var1.id;
                    var7['unreadChannelId'] = var3;
case 119:
                    var3 = 0;
                    if(!(var5 > var3)) { _fun0018_ip = 121; continue _fun0018 }
case 122:
                    var7 = _closure1_slot38;
                    var3 = undefined;
                    var3 = var7.bind(var3)(var1, var5);
                    if(var3) { _fun0018_ip = 123; continue _fun0018 }
case 121:
                    var3 = _closure2_slot1;
                    var7 = var3.mentionCounts;
                    var3 = var1.id;
                    var3 = delete var7[var3];
                    _fun0018_ip = 112; continue _fun0018;
case 123:
                    var2 = _closure2_slot1;
                    var3 = var2.mentionCounts;
                    var2 = var1.id;
                    var1 = {};
                    var1['count'] = var5;
                    var5 = _closure1_slot19;
                    var4 = var5.getIsMentionLowImportance;
                    var4 = var4.bind(var5)(var6);
                    var1['isMentionLowImportance'] = var4;
                    var3[var2] = var1;
case 112:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var8.bind(var10)(var7);
            var8 = var2.unreadByType;
            var7 = _closure1_slot25;
            var7 = var7.CHANNEL;
            var6 = _closure2_slot2;
            var8[var7] = var6;
            var7 = var2.unreadByType;
            var6 = _closure1_slot25;
            var6 = var6.CHANNEL;
            var7 = var7[var6];
            var8 = var3.unreadByType;
            var6 = _closure1_slot25;
            var6 = var6.CHANNEL;
            var6 = var8[var6];
            if(!(var7 !== var6)) { _fun0017_ip = 124; continue _fun0017 }
case 125:
            var7 = var2.unreadByType;
            var6 = _closure1_slot25;
            var6 = var6.CHANNEL;
            var6 = var7[var6];
            if(var6) { _fun0017_ip = 124; continue _fun0017 }
case 106:
            var8 = _closure1_slot16;
            var7 = var8.getChannel;
            var6 = var3.unreadChannelId;
            var8 = var7.bind(var8)(var6);
            var6 = null;
            if(!(var6 != var8)) { _fun0017_ip = 126; continue _fun0017 }
case 63:
            var9 = var10.includes;
            var7 = var8.id;
            var7 = var9.bind(var10)(var7);
            if(var7) { _fun0017_ip = 126; continue _fun0017 }
case 127:
            var10 = _closure1_slot19;
            var9 = var10.hasUnread;
            var7 = var8.id;
            var7 = var9.bind(var10)(var7);
            if(!var7) { _fun0017_ip = 126; continue _fun0017 }
case 25:
            var7 = _closure1_slot38;
            var7 = var7.bind(var5)(var8);
            if(!var7) { _fun0017_ip = 126; continue _fun0017 }
case 128:
            if(!(var6 != var4)) { _fun0017_ip = 129; continue _fun0017 }
case 130:
            var7 = _closure1_slot29;
            var6 = var7.add;
            var6 = var6.bind(var7)(var4);
case 129:
            var8 = var2.unreadByType;
            var6 = _closure1_slot25;
            var7 = var6.CHANNEL;
            var6 = true;
            var8[var7] = var6;
            _fun0017_ip = 124; continue _fun0017;
case 126:
            var6 = _closure1_slot49;
            var6 = var6.bind(var5)(var4);
            return var6;
case 124:
            var1 = _closure1_slot46;
            var1 = var1.bind(var5)(var4, var2, var3);
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function updateNonChannel(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 == var5)) { _fun0019_ip = 131; continue _fun0019 }
case 132:
            var1 = undefined;
            return var1;
case 131:
            var2 = _closure1_slot35;
            var4 = undefined;
            var3 = var2.bind(var4)(var5);
            var2 = _closure1_slot42;
            var2 = var2.bind(var4)(var5, var3);
            var8 = var2.unreadByType;
            var6 = _closure1_slot25;
            var7 = var6.GUILD_EVENT;
            var9 = _closure1_slot41;
            var6 = arg2;
            var6 = var9.bind(var4)(var5, var6);
            var8[var7] = var6;
            var1 = _closure1_slot46;
            var1 = var1.bind(var4)(var5, var2, var3);
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function recountGuild(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = _closure1_slot40;
            var5 = undefined;
            var1 = arg1;
            var6 = var3.bind(var5)(var1);
            var1 = _closure1_slot34;
            var4 = var1.bind(var5)(var6);
            var8 = null;
            if(!(var8 != var6)) { _fun0020_ip = 133; continue _fun0020 }
case 134:
            var3 = _closure1_slot21;
            var1 = var3.isMuted;
            var23 = var1.bind(var3)(var6);
            if(!var23) { _fun0020_ip = 135; continue _fun0020 }
case 136:
            var1 = false;
            var3 = arg2;
            if(!(var1 !== var3)) { _fun0020_ip = 137; continue _fun0020 }
case 135:
            var7 = _closure1_slot21;
            var3 = var7.getMutedChannels;
            var17 = var3.bind(var7)(var6);
            var7 = _closure1_slot21;
            var3 = var7.getChannelOverrides;
            var16 = var3.bind(var7)(var6);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 22;
            var3 = var9[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.isOptInEnabledForGuild;
            var15 = var3.bind(var7)(var6);
            var7 = _closure1_slot16;
            var3 = var7.getMutableBasicGuildChannelsForGuild;
            var14 = var3.bind(var7)(var6);
            var12 = var14;
            var9 = true;
            var22 = 0;
            var3 = undefined;
            for(var7 in var12)
case 138:
            {
case 139:
                var21 = var7;
                var19 = var14[var21];
                var27 = var23;
                if(var23) { _fun0020_ip = 140; continue _fun0020 }
case 141:
                var18 = var17.has;
                var27 = var18.bind(var17)(var21);
case 140:
                if(var27) { _fun0020_ip = 142; continue _fun0020 }
case 143:
                var18 = var19.parent_id;
                var18 = var8 != var18;
                if(!var18) { _fun0020_ip = 144; continue _fun0020 }
case 123:
                var24 = var17.has;
                var20 = var19.parent_id;
                var18 = var24.bind(var17)(var20);
case 144:
                var27 = var18;
case 142:
                var20 = var4.unreadByType;
                var18 = _closure1_slot25;
                var18 = var18.CHANNEL;
                var18 = var20[var18];
                var24 = _closure1_slot19;
                var20 = var24.getGuildChannelUnreadState;
                var35 = var24;
                var34 = var19;
                var33 = var15;
                var32 = var16;
                var31 = var27;
                var30 = var18;
                var20 = var35[var20](var34, var33, var32, var31, var30, var29);
                var25 = var20.mentionCount;
                var26 = var20.unread;
                var24 = var20.isMentionLowImportance;
                var20 = var25 > var22;
                if(var20) { _fun0020_ip = 145; continue _fun0020 }
case 146:
                if(var27) { _fun0020_ip = 138; continue _fun0020 }
case 145:
                var18 = !var18;
                if(!var18) { _fun0020_ip = 147; continue _fun0020 }
case 148:
                var27 = !var27;
                if(var27) { _fun0020_ip = 149; continue _fun0020 }
case 31:
                var27 = var20;
case 149:
                var18 = var27;
case 147:
                if(!var18) { _fun0020_ip = 150; continue _fun0020 }
case 58:
                var18 = var26;
case 150:
                if(var18) { _fun0020_ip = 151; continue _fun0020 }
case 152:
                var3 = var18;
                if(!var20) { _fun0020_ip = 138; continue _fun0020 }
case 151:
                var26 = _closure1_slot39;
                var26 = var26.bind(var5)(var19, var25, var15);
                var3 = var18;
                if(!var26) { _fun0020_ip = 138; continue _fun0020 }
case 153:
                if(!var18) { _fun0020_ip = 154; continue _fun0020 }
case 155:
                var27 = var4.unreadByType;
                var26 = _closure1_slot25;
                var26 = var26.CHANNEL;
                var27[var26] = var9;
                var4['unreadChannelId'] = var21;
case 154:
                var3 = var18;
                if(!var20) { _fun0020_ip = 138; continue _fun0020 }
case 156:
                if(var24) { _fun0020_ip = 157; continue _fun0020 }
case 158:
                var20 = var4.highImportanceMentionCount;
                var20 = var20 + var25;
                var4['highImportanceMentionCount'] = var20;
                _fun0020_ip = 159; continue _fun0020;
case 157:
                var20 = var4.lowImportanceMentionCount;
                var20 = var20 + var25;
                var4['lowImportanceMentionCount'] = var20;
case 159:
                var21 = var4.mentionCounts;
                var20 = var19.id;
                var19 = {};
                var19['count'] = var25;
                var19['isMentionLowImportance'] = var24;
                var21[var20] = var19;
                var3 = var18;
                _fun0020_ip = 138; continue _fun0020;
            }
case 160:
            var7 = _closure1_slot10;
            var3 = var7.getActiveJoinedThreadsForGuild;
            var21 = var3.bind(var7)(var6);
            var19 = var21;
            var26 = undefined;
            var25 = undefined;
            var24 = undefined;
            for(var16 in var19)
case 161:
            {
                var10 = var26;
                var7 = var25;
                var3 = var24;
case 162:
                var11 = var16;
                var14 = var21[var11];
                var26 = var10;
                var25 = var7;
                var24 = var3;
                var10 = var26;
                var7 = var25;
                var3 = var24;
                ForInLoopInit(obj_props_register=14, obj_register=13, iter_index_register=12, iter_size_register=11);
                if(var15 === undefined) { _fun0020_ip = 161; continue _fun0020 }
case 163:
                var26 = var10;
                var25 = var7;
                var24 = var3;
                ForInLoopNextIter(next_value_register=10, obj_props_register=14, obj_register=13, iter_index_register=12, iter_size_register=11);
                if(var11 === undefined) { _fun0020_ip = 161; continue _fun0020 }
case 164:
                var26 = var11;
                var25 = var4.unreadByType;
                var24 = _closure1_slot25;
                var24 = var24.CHANNEL;
                var24 = var25[var24];
                if(var24) { _fun0020_ip = 165; continue _fun0020 }
case 166:
                var27 = _closure1_slot19;
                var25 = var27.hasUnread;
                var25 = var25.bind(var27)(var26);
                var24 = !var25;
case 165:
                if(var24) { _fun0020_ip = 167; continue _fun0020 }
case 168:
                var27 = _closure1_slot11;
                var25 = var27.isMuted;
                var24 = var25.bind(var27)(var26);
case 167:
                if(var24) { _fun0020_ip = 169; continue _fun0020 }
case 170:
                var24 = var23;
case 169:
                if(var24) { _fun0020_ip = 171; continue _fun0020 }
case 172:
                var25 = var4.unreadByType;
                var24 = _closure1_slot25;
                var24 = var24.CHANNEL;
                var25[var24] = var9;
                var4['unreadChannelId'] = var26;
case 171:
                var25 = _closure1_slot19;
                var24 = var25.getMentionCount;
                var25 = var24.bind(var25)(var26);
                var27 = _closure1_slot19;
                var24 = var27.getIsMentionLowImportance;
                var24 = var24.bind(var27)(var26);
                var10 = var26;
                var7 = var25;
                var3 = var24;
                if(!(var25 > var22)) { _fun0020_ip = 163; continue _fun0020 }
case 173:
                if(var24) { _fun0020_ip = 174; continue _fun0020 }
case 175:
                var27 = var4.highImportanceMentionCount;
                var27 = var27 + var25;
                var4['highImportanceMentionCount'] = var27;
                _fun0020_ip = 176; continue _fun0020;
case 174:
                var27 = var4.lowImportanceMentionCount;
                var27 = var27 + var25;
                var4['lowImportanceMentionCount'] = var27;
case 176:
                var28 = var4.mentionCounts;
                var27 = {};
                var27['count'] = var25;
                var27['isMentionLowImportance'] = var24;
                var28[var26] = var27;
                var10 = var26;
                var7 = var25;
                var3 = var24;
                _fun0020_ip = 163; continue _fun0020;
            }
case 177:
            var7 = var4.unreadByType;
            var3 = _closure1_slot25;
            var3 = var3.GUILD_EVENT;
            var3 = var7[var3];
            var3 = !var3;
            if(!var3) { _fun0020_ip = 178; continue _fun0020 }
case 179:
            var10 = _closure1_slot41;
            var7 = _closure1_slot25;
            var7 = var7.GUILD_EVENT;
            var3 = var10.bind(var5)(var6, var7);
case 178:
            if(!var3) { _fun0020_ip = 180; continue _fun0020 }
case 181:
            var7 = var4.unreadByType;
            var3 = _closure1_slot25;
            var3 = var3.GUILD_EVENT;
            var7[var3] = var9;
            _fun0020_ip = 180; continue _fun0020;
case 137:
            return var1;
case 133:
            var3 = _closure1_slot16;
            var1 = var3.getMutablePrivateChannels;
            var13 = var1.bind(var3)();
            var11 = var13;
            var3 = false;
            var1 = 0;
            for(var7 in var11)
case 182:
            {
case 183:
                var17 = var7;
                var14 = var13[var17];
                var16 = _closure1_slot19;
                var15 = var16.getMentionCount;
                var17 = var15.bind(var16)(var17);
                var15 = var17 > var1;
                if(!var15) { _fun0020_ip = 184; continue _fun0020 }
case 185:
                var16 = _closure1_slot38;
                var15 = var16.bind(var5)(var14, var17);
case 184:
                if(!var15) { _fun0020_ip = 182; continue _fun0020 }
case 186:
                var15 = var4.highImportanceMentionCount;
                var15 = var15 + var17;
                var4['highImportanceMentionCount'] = var15;
                var16 = var4.mentionCounts;
                var15 = var14.id;
                var14 = {};
                var14['count'] = var17;
                var14['isMentionLowImportance'] = var3;
                var16[var15] = var14;
                _fun0020_ip = 182; continue _fun0020;
            }
case 180:
            var1 = _closure1_slot43;
            var1 = var1.bind(var5)(var4);
            var1 = _closure1_slot35;
            var3 = var1.bind(var5)(var6);
            var7 = var4.unread;
            var1 = var3.unread;
            var1 = var7 !== var1;
            if(var1) { _fun0020_ip = 187; continue _fun0020 }
case 188:
            var9 = var4.highImportanceMentionCount;
            var7 = var3.highImportanceMentionCount;
            var1 = var9 !== var7;
case 187:
            if(var1) { _fun0020_ip = 189; continue _fun0020 }
case 190:
            var9 = var4.lowImportanceMentionCount;
            var7 = var3.lowImportanceMentionCount;
            var1 = var9 !== var7;
case 189:
            if(!var1) { _fun0020_ip = 191; continue _fun0020 }
case 192:
            var9 = _closure1_slot28;
            var7 = var6;
            if(!(var8 == var6)) { _fun0020_ip = 193; continue _fun0020 }
case 194:
            var7 = _closure1_slot27;
case 193:
            var9[var7] = var4;
            if(!(var8 != var6)) { _fun0020_ip = 195; continue _fun0020 }
case 196:
            var7 = var4.unread;
            var9 = _closure1_slot29;
            if(var7) { _fun0020_ip = 197; continue _fun0020 }
case 198:
            var7 = var9.delete;
            var7 = var7.bind(var9)(var6);
            _fun0020_ip = 195; continue _fun0020;
case 197:
            var7 = var9.add;
            var7 = var7.bind(var9)(var6);
case 195:
            var7 = _closure1_slot30;
            var7 = var7 + 1;
            _closure1_slot30 = var7;
            var7 = _closure1_slot36;
            if(!(var8 == var6)) { _fun0020_ip = 199; continue _fun0020 }
case 200:
            var6 = _closure1_slot27;
case 199:
            var6 = var7.bind(var5)(var6);
            var2 = _closure1_slot44;
            var2 = var2.bind(var5)(var4, var3);
            var1 = true;
case 191:
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function handleOverlayInitialize(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guilds;
            var1 = {};
            _closure1_slot28 = var1;
            var4 = 0;
            _closure1_slot30 = var4;
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var10 = var2;
            var1 = new var10[var1](var9);
            var1 = var1 instanceof Object ? var1 : var2;
            _closure1_slot29 = var1;
            var2 = _closure1_slot49;
            var1 = undefined;
            var3 = null;
            var2 = var2.bind(var1)(var3);
            var2 = var6.length;
            var7 = var4 < var2;
            if(!var7) { _fun0021_ip = 82; continue _fun0021 }
case 42:
            var7 = var6[var4];
            if(!(var3 != var7)) { _fun0021_ip = 201; continue _fun0021 }
case 202:
            var8 = _closure1_slot49;
            var7 = var7.properties;
            var7 = var7.id;
            var7 = var8.bind(var1)(var7);
case 201:
            var4 = var4 + 1;
            if(var4 < var2) { _fun0021_ip = 42; continue _fun0021 }
case 82:
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function handleConnectionOpen(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guilds;
            var2 = var2.readState;
            var4 = {};
            _closure1_slot28 = var4;
            var4 = 0;
            _closure1_slot30 = var4;
            var4 = global;
            var5 = var4.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var5 = var5 instanceof Object ? var5 : var6;
            _closure1_slot29 = var5;
            var5 = var2.entries;
            var6 = var5.length;
            var5 = 500;
            var6 = var6 < var5;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var14 = var5;
            var4 = new var14[var4](var13);
            var5 = var4 instanceof Object ? var4 : var5;
            var _closure2_slot0 = var5;
            if(!var6) { _fun0022_ip = 99; continue _fun0022 }
case 203:
            var4 = var2.entries;
            var2 = var4.forEach;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.mention_count;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0023_ip = 7; continue _fun0023 }
case 204:
                    var5 = var4.mention_count;
                    var3 = 0;
                    var2 = var5 > var3;
case 7:
                    if(!var2) { _fun0023_ip = 83; continue _fun0023 }
case 37:
                    var2 = var4.read_state_type;
                    if(!(var1 != var2)) { _fun0023_ip = 62; continue _fun0023 }
case 77:
                    var3 = var4.read_state_type;
                    var2 = _closure1_slot25;
                    var2 = var2.CHANNEL;
                    if(!(var3 !== var2)) { _fun0023_ip = 62; continue _fun0023 }
case 51:
                    var5 = _closure2_slot0;
                    var3 = var5.add;
                    var2 = var4.id;
                    var2 = var3.bind(var5)(var2);
                    _fun0023_ip = 83; continue _fun0023;
case 62:
                    var3 = _closure2_slot0;
                    var2 = var3.add;
                    var6 = _closure1_slot16;
                    var5 = var6.getChannel;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0023_ip = 205; continue _fun0023 }
case 206:
                    var1 = var4.guild_id;
case 205:
                    var1 = var2.bind(var3)(var1);
case 83:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
case 99:
            var4 = _closure1_slot49;
            var1 = undefined;
            var2 = null;
            var2 = var4.bind(var1)(var2);
            var2 = _closure1_slot32;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0022_ip = 144; continue _fun0022 }
case 139:
            var10 = var3.value;
            var9 = _closure1_slot49;
            var8 = var10.id;
            var2 = undefined;
            if(!var6) { _fun0022_ip = 207; continue _fun0022 }
case 107:
            var11 = var5.has;
            var10 = var10.id;
            var2 = var11.bind(var5)(var10);
case 207:
            var2 = var9.bind(var1)(var8, var2);
            var8 = var4.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0022_ip = 139; continue _fun0022 }
case 144:
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function recomputeAllGuilds() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = {};
            _closure1_slot28 = var1;
            var2 = global;
            var1 = var2.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var8 = var3;
            var1 = new var8[var1](var7);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot29 = var1;
            var4 = _closure1_slot49;
            var1 = undefined;
            var3 = null;
            var3 = var4.bind(var1)(var3);
            var4 = var2.Object;
            var3 = var4.values;
            var6 = _closure1_slot17;
            var2 = var6.getGuildIds;
            var2 = var2.bind(var6)();
            var4 = var3.bind(var4)(var2);
            var2 = var4.length;
            var3 = 0;
            var2 = var3 < var2;
            if(!var2) { _fun0024_ip = 100; continue _fun0024 }
case 114:
            var6 = _closure1_slot49;
            var2 = var4[var3];
            var2 = var6.bind(var1)(var2);
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0024_ip = 114; continue _fun0024 }
case 100:
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot49;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot53 = var1;
    var1 = function handleGuildDelete(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var4 = _closure1_slot28;
            var1 = var2.id;
            var4 = var4[var1];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0025_ip = 43; continue _fun0025 }
case 37:
            var5 = _closure1_slot28;
            var4 = var2.id;
            var4 = delete var5[var4];
            var5 = _closure1_slot29;
            var4 = var5.delete;
            var2 = var2.id;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot30;
            var2 = var2 + 1;
            _closure1_slot30 = var2;
            var1 = true;
case 43:
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var1 = var2.id;
        var4 = var2.guild_id;
        var3 = _closure1_slot47;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot55 = var1;
    var1 = function handleWindowFocus() {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var4 = _closure1_slot16;
            var2 = var4.getChannel;
            var5 = _closure1_slot20;
            var1 = var5.getChannelId;
            var1 = var1.bind(var5)();
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0026_ip = 50; continue _fun0026 }
case 208:
            var5 = _closure1_slot47;
            var3 = var2.getGuildId;
            var4 = var3.bind(var2)();
            var2 = var2.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 50:
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var1 = function handleGuildMemberUpdate(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = arg1;
            var1 = var2.user;
            var4 = var2.guildId;
            var3 = var1.id;
            var5 = _closure1_slot15;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var3 === var1;
            if(!var1) { _fun0027_ip = 136; continue _fun0027 }
case 87:
            var3 = _closure1_slot49;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 136:
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var1 = function handleGenericUpdate(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = _closure1_slot16;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var4);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0028_ip = 40; continue _fun0028 }
case 46:
            var5 = _closure1_slot47;
            var3 = var2.getGuildId;
            var4 = var3.bind(var2)();
            var2 = var2.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 40:
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var1 = function handleMessageCreate(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = _closure1_slot16;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var5);
            var4 = null;
            if(!(var4 != var1)) { _fun0029_ip = 209; continue _fun0029 }
case 46:
            var3 = var1.guild_id;
            if(!(var4 != var3)) { _fun0029_ip = 143; continue _fun0029 }
case 6:
            var6 = _closure1_slot35;
            var4 = var1.guild_id;
            var3 = undefined;
            var3 = var6.bind(var3)(var4);
            var4 = var1.isThread;
            var4 = var4.bind(var1)();
            if(var4) { _fun0029_ip = 210; continue _fun0029 }
case 50:
            var8 = _closure1_slot21;
            var7 = var8.isGuildOrCategoryOrChannelMuted;
            var6 = var1.guild_id;
            var4 = var1.id;
            var4 = var7.bind(var8)(var6, var4);
            _fun0029_ip = 85; continue _fun0029;
case 210:
            var8 = _closure1_slot11;
            var7 = var8.hasJoined;
            var6 = var1.id;
            var6 = var7.bind(var8)(var6);
            var6 = !var6;
            if(var6) { _fun0029_ip = 120; continue _fun0029 }
case 211:
            var9 = _closure1_slot11;
            var8 = var9.isMuted;
            var7 = var1.id;
            var6 = var8.bind(var9)(var7);
case 120:
            var4 = var6;
case 85:
            if(var4) { _fun0029_ip = 212; continue _fun0029 }
case 104:
            var4 = var3.unreadByType;
            var3 = _closure1_slot25;
            var3 = var3.CHANNEL;
            var3 = var4[var3];
            if(!var3) { _fun0029_ip = 143; continue _fun0029 }
case 212:
            var4 = _closure1_slot19;
            var3 = var4.getMentionCount;
            var4 = var3.bind(var4)(var5);
            var3 = 0;
            if(!(var3 !== var4)) { _fun0029_ip = 213; continue _fun0029 }
case 143:
            var4 = _closure1_slot47;
            var2 = var1.getGuildId;
            var3 = var2.bind(var1)();
            var1 = var1.id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
case 213:
            var1 = false;
            return var1;
case 209:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var1 = function handleChannelSelect(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = var1.guildId;
            var1 = _closure1_slot23;
            var1 = var6 !== var1;
            if(!var1) { _fun0030_ip = 96; continue _fun0030 }
case 214:
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0030_ip = 32; continue _fun0030 }
case 215:
            var5 = _closure1_slot47;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = undefined;
            var2 = var5.bind(var3)(var6, var4);
case 32:
            var1 = var2;
case 96:
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = function handleChannelUpdate(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = _closure1_slot47;
        var2 = var1.getGuildId;
        var3 = var2.bind(var1)();
        var1 = var1.id;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot61 = var1;
    var1 = function handleChannelUpdates(arg1) {
        var2 = arg1;
        var4 = var2.channels;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 24;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var4 = var2.bind(var3)(var4);
        var3 = var4.groupBy;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.getGuildId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.reduce;
        var2 = function(arg1, arg2, arg3) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var2 = arg1;
                var4 = arg2;
                var5 = _closure1_slot47;
                var3 = var4.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var4 = var3.bind(var4)(var1);
                var3 = undefined;
                var1 = arg3;
                var1 = var5.bind(var3)(var1, var4);
                if(var1) { _fun0031_ip = 216; continue _fun0031 }
case 93:
                var1 = var2;
case 216:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot62 = var1;
    var1 = function handleBulkAck(arg1) {
        var2 = arg1;
        var4 = var2.channels;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 24;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var4 = var2.bind(var3)(var4);
        var3 = var4.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.channelId;
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg1) {
            var3 = _closure1_slot16;
            var2 = var3.getChannel;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.groupBy;
        var2 = function(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var3 = _closure1_slot16;
                var2 = var3.getChannel;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0032_ip = 217; continue _fun0032 }
case 76:
                var2 = var3.getGuildId;
                var1 = var2.bind(var3)();
case 217:
                return var1;
            }
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.reduce;
        var2 = function(arg1, arg2, arg3) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var2 = arg1;
                var5 = _closure1_slot47;
                var4 = undefined;
                var3 = arg3;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var1);
                if(var1) { _fun0033_ip = 7; continue _fun0033 }
case 214:
                var1 = var2;
case 7:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot63 = var1;
    var1 = function handleThreadUpdate(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = _closure1_slot47;
        var2 = var1.getGuildId;
        var3 = var2.bind(var1)();
        var5 = var1.id;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = var1.parent_id;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot64 = var1;
    var1 = function handleGuildEventUpdate(arg1) {
        var1 = arg1;
        var2 = var1.guildScheduledEvent;
        var4 = _closure1_slot48;
        var3 = var2.guild_id;
        var1 = _closure1_slot25;
        var2 = var1.GUILD_EVENT;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot65 = var1;
    var1 = function handleGuildEventDelete(arg1) {
        var1 = arg1;
        var2 = var1.guildScheduledEvent;
        var4 = _closure1_slot48;
        var3 = var2.guild_id;
        var1 = _closure1_slot25;
        var2 = var1.GUILD_EVENT;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot66 = var1;
    var1 = function handleGuildFeatureAck(arg1) {
        var1 = arg1;
        var4 = var1.id;
        var3 = var1.ackType;
        var2 = _closure1_slot48;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var _closure1_slot67 = var1;
    var1 = function handleThreadMemberUpdate(arg1) {
        var2 = arg1;
        var1 = var2.id;
        var4 = var2.guildId;
        var3 = _closure1_slot47;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot68 = var1;
    var1 = function handleThreadMembersUpdate(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 25;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.doesThreadMembersActionAffectMe;
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0034_ip = 3; continue _fun0034 }
case 87:
            var4 = _closure1_slot47;
            var3 = var2.guildId;
            var6 = var2.id;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 3:
            return var1;
        }
    };
    var _closure1_slot69 = var1;
    var1 = function handleThreadListSync(arg1) {
        var2 = arg1;
        var6 = var2.threads;
        var4 = var2.guildId;
        var3 = _closure1_slot47;
        var5 = var6.filter;
        var2 = function(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.hasJoined;
            var1 = arg1;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var5.bind(var6)(var2);
        var2 = var5.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var2 = var2.bind(var5)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot70 = var1;
    var1 = function handlePassiveUpdateV2(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channels;
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            if(!var1) { _fun0035_ip = 51; continue _fun0035 }
case 35:
            var5 = _closure1_slot47;
            var4 = var2.guildId;
            var6 = var2.channels;
            var3 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3 = var3.bind(var6)(var2);
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 51:
            return var1;
        }
    };
    var _closure1_slot71 = var1;
    var1 = function handleMarkGuildAsRead(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot49;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot72 = var1;
    var1 = function handleGuildUpdate(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot49;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot73 = var1;
    var1 = function handleUserGuildSettingsFullUpdate(arg1) {
        var2 = arg1;
        var5 = var2.userGuildSettings;
        var2 = global;
        var4 = var2.Set;
        var3 = var5.map;
        var2 = function(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var1 = arg1;
                var1 = var1.guild_id;
                var2 = null;
                if(!(var2 == var1)) { _fun0036_ip = 54; continue _fun0036 }
case 36:
                var1 = _closure1_slot27;
case 54:
                return var1;
            }
        };
        var7 = var3.bind(var5)(var2);
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var8 = var3;
        var2 = new var8[var4](var7, var6);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 23;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.keys;
        var2 = _closure1_slot28;
        var4 = var3.bind(var4)(var2);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var2 = arg1;
                var5 = arg2;
                var3 = _closure2_slot0;
                var1 = var3.has;
                var1 = var1.bind(var3)(var5);
                if(!var1) { _fun0037_ip = 208; continue _fun0037 }
case 86:
                var4 = _closure1_slot49;
                var3 = undefined;
                var1 = var4.bind(var3)(var5);
case 208:
                if(var1) { _fun0037_ip = 6; continue _fun0037 }
case 77:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot74 = var1;
    var1 = function handleClearNotifCenterGuildMentions() {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var6 = _closure1_slot28;
            var1 = 0;
            for(var2 in var6)
case 52:
            {
case 86:
                var9 = var2;
                var8 = _closure1_slot28;
                var8 = var8[var9];
                var8['ncMentionCount'] = var1;
                _fun0038_ip = 52; continue _fun0038;
            }
case 49:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot75 = var1;
    var1 = function handleUserGuildSettingsUpdate(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot49;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot76 = var1;
    var1 = function handleRecentMentionsSuccess(arg1) {
        var2 = arg1;
        var5 = var2.messages;
        var2 = global;
        var4 = var2.Set;
        var3 = var5.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.channel_id;
            return var1;
        };
        var6 = var3.bind(var5)(var2);
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var7 = var3;
        var2 = new var7[var4](var6, var5);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var1 = arg1;
                var4 = _closure1_slot16;
                var3 = var4.getChannel;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                if(!(var4 != var3)) { _fun0039_ip = 32; continue _fun0039 }
case 86:
                var4 = _closure1_slot47;
                var2 = var3.getGuildId;
                var3 = var2.bind(var3)();
                var2 = new Array(1);
                var2[0] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 32:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot77 = var1;
    var9 = global;
    var8 = var9.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var8 = 0;
    var4 = var6[var8];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.getBasicAccessPermissions;
    var _closure1_slot12 = var10;
    var10 = var7.isGuildVocalChannelType;
    var _closure1_slot13 = var10;
    var7 = var7.isThread;
    var _closure1_slot14 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot16 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot17 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var11.bind(var1)(var7);
    var10 = 14;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot18 = var10;
    var10 = 15;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot19 = var10;
    var10 = 16;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot20 = var10;
    var10 = 17;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot21 = var10;
    var10 = 18;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot22 = var10;
    var10 = 19;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var11 = var10.FAVORITES;
    var _closure1_slot23 = var11;
    var10 = var10.NULL_STRING_GUILD_ID;
    var11 = 20;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.ChannelFlags;
    var _closure1_slot24 = var11;
    var11 = 21;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var12 = var11.ReadStateTypes;
    var _closure1_slot25 = var12;
    var11 = var11.UnreadSetting;
    var _closure1_slot26 = var11;
    var _closure1_slot27 = var10;
    var10 = {};
    var _closure1_slot28 = var10;
    var9 = var9.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var16 = var10;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot29 = var9;
    var _closure1_slot30 = var8;
    var2 = function(arg1) {
        var4 = function GuildReadStateStore() {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = {};
                var7 = _closure1_slot51;
                var1['CONNECTION_OPEN'] = var7;
                var7 = _closure1_slot50;
                var1['OVERLAY_INITIALIZE'] = var7;
                var7 = function CACHE_LOADED_LAZY() {
                    var2 = _closure3_slot0;
                    var1 = var2.loadCache;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['CACHE_LOADED_LAZY'] = var7;
                var7 = _closure1_slot53;
                var1['GUILD_CREATE'] = var7;
                var7 = _closure1_slot54;
                var1['GUILD_DELETE'] = var7;
                var7 = _closure1_slot59;
                var1['MESSAGE_CREATE'] = var7;
                var7 = _closure1_slot58;
                var1['MESSAGE_ACK'] = var7;
                var8 = _closure1_slot63;
                var1['BULK_ACK'] = var8;
                var1['UPDATE_CHANNEL_DIMENSIONS'] = var7;
                var8 = _closure1_slot60;
                var1['CHANNEL_SELECT'] = var8;
                var8 = _closure1_slot55;
                var1['CHANNEL_DELETE'] = var8;
                var8 = _closure1_slot56;
                var1['WINDOW_FOCUS'] = var8;
                var8 = _closure1_slot72;
                var1['GUILD_ACK'] = var8;
                var8 = _closure1_slot73;
                var1['GUILD_ROLE_CREATE'] = var8;
                var1['GUILD_ROLE_DELETE'] = var8;
                var1['GUILD_ROLE_UPDATE'] = var8;
                var8 = _closure1_slot61;
                var1['CHANNEL_CREATE'] = var8;
                var8 = _closure1_slot62;
                var1['CHANNEL_UPDATES'] = var8;
                var8 = _closure1_slot64;
                var1['THREAD_CREATE'] = var8;
                var1['THREAD_UPDATE'] = var8;
                var1['THREAD_DELETE'] = var8;
                var8 = _closure1_slot70;
                var1['THREAD_LIST_SYNC'] = var8;
                var8 = _closure1_slot68;
                var1['THREAD_MEMBER_UPDATE'] = var8;
                var8 = _closure1_slot69;
                var1['THREAD_MEMBERS_UPDATE'] = var8;
                var8 = _closure1_slot71;
                var1['PASSIVE_UPDATE_V2'] = var8;
                var8 = _closure1_slot57;
                var1['GUILD_MEMBER_UPDATE'] = var8;
                var8 = _closure1_slot74;
                var1['USER_GUILD_SETTINGS_FULL_UPDATE'] = var8;
                var8 = _closure1_slot76;
                var1['USER_GUILD_SETTINGS_CHANNEL_UPDATE'] = var8;
                var1['USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK'] = var8;
                var1['USER_GUILD_SETTINGS_GUILD_UPDATE'] = var8;
                var1['USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE'] = var8;
                var8 = _closure1_slot67;
                var1['GUILD_FEATURE_ACK'] = var8;
                var8 = _closure1_slot65;
                var1['GUILD_SCHEDULED_EVENT_CREATE'] = var8;
                var1['GUILD_SCHEDULED_EVENT_UPDATE'] = var8;
                var8 = _closure1_slot66;
                var1['GUILD_SCHEDULED_EVENT_DELETE'] = var8;
                var1['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var7;
                var1['LOAD_MESSAGES_SUCCESS'] = var7;
                var1['CHANNEL_ACK'] = var7;
                var1['CHANNEL_LOCAL_ACK'] = var7;
                var8 = _closure1_slot52;
                var1['NOTIFICATION_SETTINGS_UPDATE'] = var8;
                var1['RECOMPUTE_READ_STATES'] = var8;
                var1['VOICE_CHANNEL_SELECT'] = var7;
                var1['ENABLE_AUTOMATIC_ACK'] = var7;
                var1['RESORT_THREADS'] = var7;
                var8 = _closure1_slot75;
                var1['NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS'] = var8;
                var1['TRY_ACK'] = var7;
                var7 = _closure1_slot77;
                var1['LOAD_RECENT_MENTIONS_SUCCESS'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot31;
                var1 = var1.bind(var4)();
                if(var1) { _fun0040_ip = 218; continue _fun0040 }
case 219:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0040_ip = 220; continue _fun0040;
case 218:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 220:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
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
            var12 = this;
            var11 = var12.waitFor;
            var22 = _closure1_slot16;
            var21 = _closure1_slot20;
            var20 = _closure1_slot19;
            var19 = _closure1_slot18;
            var18 = _closure1_slot15;
            var17 = _closure1_slot22;
            var16 = _closure1_slot21;
            var15 = _closure1_slot10;
            var14 = _closure1_slot11;
            var13 = _closure1_slot9;
            var23 = var12;
            var1 = var23[var11](var22, var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'loadCache';
        var5['key'] = var7;
        var7 = function value() {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var3 = this;
                var2 = var3.readSnapshot;
                var1 = _closure2_slot0;
                var1 = var1.LATEST_SNAPSHOT_VERSION;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0041_ip = 60; continue _fun0041 }
case 37:
                var3 = var1.guilds;
                _closure1_slot28 = var3;
                var3 = global;
                var4 = var3.Set;
                var5 = var1.unreadGuilds;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot29 = var1;
case 60:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.LATEST_SNAPSHOT_VERSION;
            var1['version'] = var2;
            var2 = {};
            var4 = _closure1_slot28;
            var2['guilds'] = var4;
            var4 = global;
            var5 = var4.Array;
            var4 = var5.from;
            var3 = _closure1_slot29;
            var3 = var4.bind(var5)(var3);
            var2['unreadGuilds'] = var3;
            var1['data'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasAnyUnread';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot29;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getStoreChangeSentinel';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getMutableUnreadGuilds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getMutableGuildStates';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasUnread';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot29;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getMentionCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot35;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var2 = var1.highImportanceMentionCount;
            var1 = var1.lowImportanceMentionCount;
            var1 = var2 + var1;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getIsMentionLowImportance';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot35;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var2 = var1.highImportanceMentionCount;
            var1 = 0;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getGuildHasUnreadIgnoreMuted';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot16;
                var2 = var3.getMutableGuildChannelsForGuild;
                var10 = var2.bind(var3)(var4);
                var8 = var10;
                var3 = 0;
                var15 = null;
                for(var5 in var8)
case 215:
                {
case 49:
                    var12 = var5;
                    var14 = var10[var12];
                    if(var15 == var14) { _fun0042_ip = 215; continue _fun0042 }
case 32:
                    var2 = var14.isGuildVocal;
                    var2 = var2.bind(var14)();
                    if(!var2) { _fun0042_ip = 221; continue _fun0042 }
case 40:
                    var11 = _closure1_slot19;
                    var2 = var11.getMentionCount;
                    var2 = var2.bind(var11)(var12);
                    if(var3 === var2) { _fun0042_ip = 215; continue _fun0042 }
case 221:
                    var13 = _closure1_slot18;
                    var11 = var13.can;
                    var2 = var14.accessPermissions;
                    var2 = var11.bind(var13)(var2, var14);
                    if(!var2) { _fun0042_ip = 215; continue _fun0042 }
case 222:
                    var11 = _closure1_slot19;
                    var2 = var11.hasUnreadOrMentions;
                    var2 = var2.bind(var11)(var12);
                    if(!var2) { _fun0042_ip = 215; continue _fun0042 }
case 118:
                    var2 = true;
                    return var2;
                }
case 94:
                var3 = _closure1_slot10;
                var2 = var3.getActiveJoinedThreadsForGuild;
                var14 = var2.bind(var3)(var4);
                var12 = var14;
                for(var9 in var12)
case 138:
                {
case 119:
                    var2 = var9;
                    var5 = _closure1_slot16;
                    var3 = var5.getChannel;
                    var3 = var3.bind(var5)(var2);
                    if(var15 == var3) { _fun0042_ip = 138; continue _fun0042 }
case 121:
                    var7 = var14[var2];
                    ForInLoopInit(obj_props_register=7, obj_register=6, iter_index_register=5, iter_size_register=4);
                    if(var8 === undefined) { _fun0042_ip = 138; continue _fun0042 }
case 223:
                    ForInLoopNextIter(next_value_register=2, obj_props_register=7, obj_register=6, iter_index_register=5, iter_size_register=4);
                    if(var3 === undefined) { _fun0042_ip = 138; continue _fun0042 }
case 123:
                    var17 = var3;
                    var16 = _closure1_slot19;
                    var2 = var16.hasUnreadOrMentions;
                    var2 = var2.bind(var16)(var17);
                    if(!var2) { _fun0042_ip = 223; continue _fun0042 }
case 224:
                    var2 = true;
                    return var2;
                }
case 225:
                var3 = _closure1_slot19;
                var2 = var3.hasUnreadOrMentions;
                var1 = _closure1_slot25;
                var1 = var1.GUILD_EVENT;
                var1 = var2.bind(var3)(var4, var1);
                var1 = !var1;
                var1 = !var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getTotalMentionCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var8 = _closure1_slot28;
                var3 = true;
                var2 = arg1;
                var3 = var3 === var2;
                var2 = 0;
                var1 = 0;
                for(var4 in var8)
case 38:
                {
                    var11 = var2;
                    var1 = var11;
case 77:
                    var14 = var4;
                    var10 = _closure1_slot28;
                    var10 = var10[var14];
                    var12 = var3;
                    if(!var12) { _fun0043_ip = 226; continue _fun0043 }
case 48:
                    var13 = _closure1_slot27;
                    var12 = var14 === var13;
case 226:
                    var2 = var11;
                    if(var12) { _fun0043_ip = 38; continue _fun0043 }
case 4:
                    var10 = var10.highImportanceMentionCount;
                    var2 = var11 + var10;
                    _fun0043_ip = 38; continue _fun0043;
                }
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getTotalNotificationsMentionCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var8 = _closure1_slot28;
                var3 = true;
                var2 = arg1;
                var3 = var3 === var2;
                var2 = 0;
                var1 = 0;
                for(var4 in var8)
case 38:
                {
                    var11 = var2;
                    var1 = var11;
case 77:
                    var14 = var4;
                    var10 = _closure1_slot28;
                    var10 = var10[var14];
                    var12 = var3;
                    if(!var12) { _fun0044_ip = 226; continue _fun0044 }
case 48:
                    var13 = _closure1_slot27;
                    var12 = var14 === var13;
case 226:
                    var2 = var11;
                    if(var12) { _fun0044_ip = 38; continue _fun0044 }
case 4:
                    var10 = var10.ncMentionCount;
                    var2 = var11 + var10;
                    _fun0044_ip = 38; continue _fun0044;
                }
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getPrivateChannelMentionCount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var2 = _closure1_slot28;
                var1 = _closure1_slot27;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0045_ip = 56; continue _fun0045 }
case 86:
                var2 = var3.highImportanceMentionCount;
case 56:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0045_ip = 93; continue _fun0045 }
case 217:
                var1 = var2;
case 93:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getMentionCountForPrivateChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var2 = _closure1_slot28;
                var1 = _closure1_slot27;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0046_ip = 227; continue _fun0046 }
case 86:
                var4 = var3.mentionCounts;
                var3 = arg1;
                var2 = var4[var3];
case 227:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0046_ip = 228; continue _fun0046 }
case 111:
                var1 = var2;
case 228:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getGuildChangeSentinel';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot35;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.sentinel;
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var7);
    var7 = 'GuildReadStateStore';
    var2['displayName'] = var7;
    var2['LATEST_SNAPSHOT_VERSION'] = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var16 = var4;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildReadStateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();