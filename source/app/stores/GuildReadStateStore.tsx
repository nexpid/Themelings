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
            _closure1_slot31 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot33;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot33;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function createGuildState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = _closure1_slot28;
            var4 = null;
            if(!(var4 == var2)) { _fun0005_ip = 20; continue _fun0005 }
 16:
            var2 = _closure1_slot27;
 20:
            var5 = var1[var2];
            var1 = {'unread': false, 'unreadByType': null, 'unreadChannelId': null, 'lowImportanceMentionCount': 0, 'highImportanceMentionCount': 0, 'mentionCounts': null, 'ncMentionCount': 0};
            var2 = {};
            var1['unreadByType'] = var2;
            var3 = {};
            var1['mentionCounts'] = var3;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0005_ip = 69; continue _fun0005 }
 63:
            var3 = var5.sentinel;
 69:
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0005_ip = 81; continue _fun0005 }
 78:
            var2 = var3;
 81:
            var1['sentinel'] = var2;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function getOrCreateGuildState(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot28;
            var5 = null;
            var2 = var6;
            if(!(var5 == var6)) { _fun0006_ip = 23; continue _fun0006 }
 19:
            var2 = _closure1_slot27;
 23:
            var7 = _closure1_slot28;
            var1 = var6;
            if(!(var5 == var1)) { _fun0006_ip = 38; continue _fun0006 }
 34:
            var1 = _closure1_slot27;
 38:
            var1 = var7[var1];
            if(!(var5 == var1)) { _fun0006_ip = 57; continue _fun0006 }
 46:
            var5 = _closure1_slot34;
            var4 = undefined;
            var1 = var5.bind(var4)(var6);
 57:
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
 0:
            var6 = arg1;
            var2 = arg3;
            var3 = var6.guild_id;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0007_ip = 78; continue _fun0007 }
 20:
            if(!var2) { _fun0007_ip = 63; continue _fun0007 }
 23:
            var7 = _closure1_slot14;
            var5 = var6.type;
            var3 = undefined;
            var3 = var7.bind(var3)(var5);
            if(var3) { _fun0007_ip = 60; continue _fun0007 }
 45:
            var5 = _closure1_slot21;
            var4 = var5.isChannelRecordOrParentOptedIn;
            var3 = var4.bind(var5)(var6);
 60:
            var2 = !var3;
 63:
            if(!var2) { _fun0007_ip = 75; continue _fun0007 }
 66:
            var4 = 0;
            var3 = arg2;
            var2 = var4 === var3;
 75:
            var1 = var2;
 78:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function isCountableChannel(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arg1;
            var3 = arguments[1];
            var4 = arguments[2];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0008_ip = 17; continue _fun0008 }
 15:
            var3 = 0;
 17:
            if(!(var4 === var7)) { _fun0008_ip = 23; continue _fun0008 }
 21:
            var4 = false;
 23:
            var1 = null;
            if(!(var1 != var5)) { _fun0008_ip = 339; continue _fun0008 }
 32:
            var1 = var5.isGuildVocal;
            var1 = var1.bind(var5)();
            if(!var1) { _fun0008_ip = 54; continue _fun0008 }
 45:
            var1 = 0;
            if(!(var1 !== var3)) { _fun0008_ip = 335; continue _fun0008 }
 54:
            var6 = var5.hasFlag;
            var1 = _closure1_slot24;
            var1 = var1.IS_GUILD_RESOURCE_CHANNEL;
            var1 = var6.bind(var5)(var1);
            if(var1) { _fun0008_ip = 331; continue _fun0008 }
 84:
            var1 = 0;
            if(!(var1 !== var3)) { _fun0008_ip = 93; continue _fun0008 }
 90:
            if(!var4) { _fun0008_ip = 193; continue _fun0008 }
 93:
            var4 = var5.isThread;
            var4 = var4.bind(var5)();
            if(var4) { _fun0008_ip = 134; continue _fun0008 }
 106:
            var9 = _closure1_slot21;
            var8 = var9.isGuildOrCategoryOrChannelMuted;
            var6 = var5.guild_id;
            var4 = var5.id;
            var4 = var8.bind(var9)(var6, var4);
            _fun0008_ip = 187; continue _fun0008;
 134:
            var9 = _closure1_slot11;
            var8 = var9.isMuted;
            var6 = var5.id;
            var6 = var8.bind(var9)(var6);
            if(var6) { _fun0008_ip = 184; continue _fun0008 }
 157:
            var11 = _closure1_slot21;
            var10 = var11.isGuildOrCategoryOrChannelMuted;
            var9 = var5.guild_id;
            var8 = var5.parent_id;
            var6 = var10.bind(var11)(var9, var8);
 184:
            var4 = var6;
 187:
            if(var4) { _fun0008_ip = 327; continue _fun0008 }
 193:
            var4 = var5.isPrivate;
            var4 = var4.bind(var5)();
            if(var4) { _fun0008_ip = 289; continue _fun0008 }
 206:
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
            if(var4) { _fun0008_ip = 285; continue _fun0008 }
 256:
            var7 = _closure1_slot18;
            var6 = var7.can;
            var4 = var5.accessPermissions;
            var4 = var6.bind(var7)(var4, var5);
            if(var4) { _fun0008_ip = 289; continue _fun0008 }
 281:
            var4 = false;
            return var4;
 285:
            var4 = false;
            return var4;
 289:
            var1 = var3 > var1;
            if(var1) { _fun0008_ip = 325; continue _fun0008 }
 296:
            var4 = _closure1_slot21;
            var3 = var4.resolveUnreadSetting;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot26;
            var2 = var2.ALL_MESSAGES;
            var1 = var3 === var2;
 325:
            return var1;
 327:
            var1 = false;
            return var1;
 331:
            var1 = false;
            return var1;
 335:
            var1 = false;
            return var1;
 339:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function computeIsCountableGuildChannel(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var9 = arg1;
            var7 = arg2;
            var2 = _closure1_slot13;
            var1 = var9.type;
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = !var1;
            if(var1) { _fun0009_ip = 37; continue _fun0009 }
 31:
            var2 = 0;
            var1 = var2 !== var7;
 37:
            if(!var1) { _fun0009_ip = 193; continue _fun0009 }
 43:
            var4 = _closure1_slot18;
            var3 = var4.canBasicChannel;
            var8 = _closure1_slot12;
            var2 = var9.type;
            var2 = var8.bind(var5)(var2);
            var2 = var3.bind(var4)(var2, var9);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0009_ip = 190; continue _fun0009 }
 82:
            var4 = _closure1_slot37;
            var3 = arg3;
            var3 = var4.bind(var5)(var9, var7, var3);
            var3 = !var3;
            if(!var3) { _fun0009_ip = 187; continue _fun0009 }
 102:
            var4 = 'flags';
            var5 = var4 in var9;
            var4 = !var5;
            if(!var5) { _fun0009_ip = 140; continue _fun0009 }
 116:
            var8 = var9.hasFlag;
            var5 = _closure1_slot24;
            var5 = var5.IS_GUILD_RESOURCE_CHANNEL;
            var5 = var8.bind(var9)(var5);
            var4 = !var5;
 140:
            if(!var4) { _fun0009_ip = 184; continue _fun0009 }
 143:
            var5 = 0;
            var5 = var7 > var5;
            if(var5) { _fun0009_ip = 181; continue _fun0009 }
 152:
            var8 = _closure1_slot21;
            var7 = var8.resolveUnreadSetting;
            var7 = var7.bind(var8)(var9);
            var6 = _closure1_slot26;
            var6 = var6.ALL_MESSAGES;
            var5 = var7 === var6;
 181:
            var4 = var5;
 184:
            var3 = var4;
 187:
            var2 = var3;
 190:
            var1 = var2;
 193:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function sanitizeGuildId(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var2 = _closure1_slot27;
            if(!(var2 !== var1)) { _fun0010_ip = 28; continue _fun0010 }
 14:
            var2 = null;
            if(!(var2 !== var1)) { _fun0010_ip = 28; continue _fun0010 }
 20:
            var2 = undefined;
            if(!(var2 !== var1)) { _fun0010_ip = 28; continue _fun0010 }
 26:
            return var1;
 28:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function isNonChannelUnread(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = _closure1_slot19;
            var1 = var2.hasUnread;
            var4 = var1.bind(var2)(var6, var5);
            var1 = _closure1_slot25;
            var2 = var1.GUILD_EVENT;
            var1 = var4;
            if(!(var5 === var2)) { _fun0011_ip = 93; continue _fun0011 }
 42:
            var5 = _closure1_slot21;
            var2 = var5.isMuted;
            var2 = var2.bind(var5)(var6);
            var2 = !var2;
            if(!var2) { _fun0011_ip = 90; continue _fun0011 }
 63:
            var5 = _closure1_slot21;
            var3 = var5.isMuteScheduledEventsEnabled;
            var3 = var3.bind(var5)(var6);
            var3 = !var3;
            if(!var3) { _fun0011_ip = 87; continue _fun0011 }
 84:
            var3 = var4;
 87:
            var2 = var3;
 90:
            var1 = var2;
 93:
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
 0:
            var2 = arg1;
            var6 = arg2;
            var3 = _closure1_slot8;
            var3 = var3.tabFocused;
            if(var3) { _fun0012_ip = 100; continue _fun0012 }
 22:
            var1 = _closure1_slot45;
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var1 = var1.bind(var8)(var6);
            var3 = global;
            var5 = var3.Math;
            var4 = var5.max;
            var3 = null;
            var9 = var3 == var6;
            if(var9) { _fun0012_ip = 66; continue _fun0012 }
 60:
            var8 = var6.ncMentionCount;
 66:
            var9 = var3 != var8;
            var3 = 0;
            var6 = 0;
            if(!var9) { _fun0012_ip = 80; continue _fun0012 }
 77:
            var6 = var8;
 80:
            var1 = var7 - var1;
            var1 = var6 + var1;
            var1 = var4.bind(var5)(var1, var3);
            var2['ncMentionCount'] = var1;
 100:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function getGuildNotifCenterMentionCount(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
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
            if(var8) { _fun0013_ip = 66; continue _fun0013 }
 44:
            var9 = _closure1_slot19;
            var8 = var9.getNotifCenterReadState;
            var4 = var4.id;
            var6 = var8.bind(var9)(var4);
 66:
            var _closure2_slot2 = var6;
            var4 = var7 == var2;
            if(var4) { _fun0013_ip = 81; continue _fun0013 }
 77:
            var4 = var7 == var6;
 81:
            if(var4) { _fun0013_ip = 135; continue _fun0013 }
 84:
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
 0:
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
                    if(!(var4 > var2)) { _fun0014_ip = 106; continue _fun0014 }
 74:
                    var4 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.mentionCounts;
                    var2 = var2[var5];
                    var2 = var2.count;
                    var2 = var4 + var2;
                    _closure2_slot1 = var2;
 106:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 135:
            var1 = _closure2_slot1;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function aggregateGuildState(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
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
 0:
                    var1 = arg1;
                    var3 = var1.count;
                    var1 = var1.isMentionLowImportance;
                    var2 = _closure2_slot0;
                    if(var1) { _fun0016_ip = 43; continue _fun0016 }
 25:
                    var1 = var2.highImportanceMentionCount;
                    var1 = var1 + var3;
                    var2['highImportanceMentionCount'] = var1;
                    _fun0016_ip = 59; continue _fun0016;
 43:
                    var1 = var2.lowImportanceMentionCount;
                    var1 = var1 + var3;
                    var2['lowImportanceMentionCount'] = var1;
 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var7, var1);
            var7 = var5.unread;
            var1 = var4.unread;
            var1 = var7 !== var1;
            if(var1) { _fun0015_ip = 120; continue _fun0015 }
 104:
            var8 = var5.lowImportanceMentionCount;
            var7 = var4.lowImportanceMentionCount;
            var1 = var8 !== var7;
 120:
            if(var1) { _fun0015_ip = 139; continue _fun0015 }
 123:
            var8 = var5.highImportanceMentionCount;
            var7 = var4.highImportanceMentionCount;
            var1 = var8 !== var7;
 139:
            if(!var1) { _fun0015_ip = 242; continue _fun0015 }
 142:
            var9 = _closure1_slot28;
            var8 = null;
            var7 = var6;
            if(!(var8 == var6)) { _fun0015_ip = 159; continue _fun0015 }
 155:
            var7 = _closure1_slot27;
 159:
            var9[var7] = var5;
            if(!(var8 != var6)) { _fun0015_ip = 202; continue _fun0015 }
 167:
            var7 = var5.unread;
            var9 = _closure1_slot29;
            if(var7) { _fun0015_ip = 192; continue _fun0015 }
 180:
            var7 = var9.delete;
            var7 = var7.bind(var9)(var6);
            _fun0015_ip = 202; continue _fun0015;
 192:
            var7 = var9.add;
            var7 = var7.bind(var9)(var6);
 202:
            var7 = _closure1_slot30;
            var7 = var7 + 1;
            _closure1_slot30 = var7;
            var7 = _closure1_slot36;
            if(!(var8 == var6)) { _fun0015_ip = 225; continue _fun0015 }
 221:
            var6 = _closure1_slot27;
 225:
            var6 = var7.bind(var3)(var6);
            var2 = _closure1_slot44;
            var2 = var2.bind(var3)(var5, var4);
            var1 = true;
 242:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function recountChannels(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
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
 0:
                    var6 = arg1;
                    var2 = _closure1_slot16;
                    var1 = var2.getChannel;
                    var1 = var1.bind(var2)(var6);
                    var7 = null;
                    if(!(var7 == var1)) { _fun0018_ip = 48; continue _fun0018 }
 26:
                    var2 = _closure2_slot1;
                    var2 = var2.mentionCounts;
                    var2 = delete var2[var6];
                    _fun0018_ip = 258; continue _fun0018;
 48:
                    var2 = var1.getGuildId;
                    var5 = var2.bind(var1)();
                    var3 = _closure2_slot0;
                    if(!(var5 === var3)) { _fun0018_ip = 258; continue _fun0018 }
 72:
                    var5 = _closure1_slot19;
                    var3 = var5.getMentionCount;
                    var5 = var3.bind(var5)(var6);
                    var3 = _closure2_slot0;
                    var3 = var7 !== var3;
                    if(!var3) { _fun0018_ip = 105; continue _fun0018 }
 98:
                    var7 = _closure2_slot2;
                    var3 = !var7;
 105:
                    if(!var3) { _fun0018_ip = 128; continue _fun0018 }
 108:
                    var9 = _closure1_slot19;
                    var8 = var9.hasUnread;
                    var7 = var1.id;
                    var3 = var8.bind(var9)(var7);
 128:
                    if(!var3) { _fun0018_ip = 146; continue _fun0018 }
 131:
                    var9 = _closure1_slot38;
                    var8 = undefined;
                    var7 = true;
                    var3 = var9.bind(var8)(var1, var5, var7);
 146:
                    if(!var3) { _fun0018_ip = 170; continue _fun0018 }
 149:
                    var3 = true;
                    _closure2_slot2 = var3;
                    var7 = _closure2_slot1;
                    var3 = var1.id;
                    var7['unreadChannelId'] = var3;
 170:
                    var3 = 0;
                    if(!(var5 > var3)) { _fun0018_ip = 191; continue _fun0018 }
 176:
                    var7 = _closure1_slot38;
                    var3 = undefined;
                    var3 = var7.bind(var3)(var1, var5);
                    if(var3) { _fun0018_ip = 212; continue _fun0018 }
 191:
                    var3 = _closure2_slot1;
                    var7 = var3.mentionCounts;
                    var3 = var1.id;
                    var3 = delete var7[var3];
                    _fun0018_ip = 258; continue _fun0018;
 212:
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
 258:
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
            if(!(var7 !== var6)) { _fun0017_ip = 299; continue _fun0017 }
 141:
            var7 = var2.unreadByType;
            var6 = _closure1_slot25;
            var6 = var6.CHANNEL;
            var6 = var7[var6];
            if(var6) { _fun0017_ip = 299; continue _fun0017 }
 167:
            var8 = _closure1_slot16;
            var7 = var8.getChannel;
            var6 = var3.unreadChannelId;
            var8 = var7.bind(var8)(var6);
            var6 = null;
            if(!(var6 != var8)) { _fun0017_ip = 288; continue _fun0017 }
 193:
            var9 = var10.includes;
            var7 = var8.id;
            var7 = var9.bind(var10)(var7);
            if(var7) { _fun0017_ip = 288; continue _fun0017 }
 211:
            var10 = _closure1_slot19;
            var9 = var10.hasUnread;
            var7 = var8.id;
            var7 = var9.bind(var10)(var7);
            if(!var7) { _fun0017_ip = 288; continue _fun0017 }
 234:
            var7 = _closure1_slot38;
            var7 = var7.bind(var5)(var8);
            if(!var7) { _fun0017_ip = 288; continue _fun0017 }
 246:
            if(!(var6 != var4)) { _fun0017_ip = 264; continue _fun0017 }
 250:
            var7 = _closure1_slot29;
            var6 = var7.add;
            var6 = var6.bind(var7)(var4);
 264:
            var8 = var2.unreadByType;
            var6 = _closure1_slot25;
            var7 = var6.CHANNEL;
            var6 = true;
            var8[var7] = var6;
            _fun0017_ip = 299; continue _fun0017;
 288:
            var6 = _closure1_slot49;
            var6 = var6.bind(var5)(var4);
            return var6;
 299:
            var1 = _closure1_slot46;
            var1 = var1.bind(var5)(var4, var2, var3);
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function updateNonChannel(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 == var5)) { _fun0019_ip = 13; continue _fun0019 }
 9:
            var1 = undefined;
            return var1;
 13:
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
 0:
            var3 = _closure1_slot40;
            var5 = undefined;
            var1 = arg1;
            var6 = var3.bind(var5)(var1);
            var1 = _closure1_slot34;
            var4 = var1.bind(var5)(var6);
            var8 = null;
            if(!(var8 != var6)) { _fun0020_ip = 882; continue _fun0020 }
 35:
            var3 = _closure1_slot21;
            var1 = var3.isMuted;
            var23 = var1.bind(var3)(var6);
            if(!var23) { _fun0020_ip = 65; continue _fun0020 }
 53:
            var1 = false;
            var3 = arg2;
            if(!(var1 !== var3)) { _fun0020_ip = 880; continue _fun0020 }
 65:
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
 161:
            {
 173:
                var21 = var7;
                var19 = var14[var21];
                var27 = var23;
                if(var23) { _fun0020_ip = 196; continue _fun0020 }
 186:
                var18 = var17.has;
                var27 = var18.bind(var17)(var21);
 196:
                if(var27) { _fun0020_ip = 231; continue _fun0020 }
 199:
                var18 = var19.parent_id;
                var18 = var8 != var18;
                if(!var18) { _fun0020_ip = 228; continue _fun0020 }
 212:
                var24 = var17.has;
                var20 = var19.parent_id;
                var18 = var24.bind(var17)(var20);
 228:
                var27 = var18;
 231:
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
                if(var20) { _fun0020_ip = 314; continue _fun0020 }
 308:
                if(var27) { _fun0020_ip = 161; continue _fun0020 }
 314:
                var18 = !var18;
                if(!var18) { _fun0020_ip = 332; continue _fun0020 }
 320:
                var27 = !var27;
                if(var27) { _fun0020_ip = 329; continue _fun0020 }
 326:
                var27 = var20;
 329:
                var18 = var27;
 332:
                if(!var18) { _fun0020_ip = 338; continue _fun0020 }
 335:
                var18 = var26;
 338:
                if(var18) { _fun0020_ip = 350; continue _fun0020 }
 341:
                var3 = var18;
                if(!var20) { _fun0020_ip = 161; continue _fun0020 }
 350:
                var26 = _closure1_slot39;
                var26 = var26.bind(var5)(var19, var25, var15);
                var3 = var18;
                if(!var26) { _fun0020_ip = 161; continue _fun0020 }
 370:
                if(!var18) { _fun0020_ip = 399; continue _fun0020 }
 373:
                var27 = var4.unreadByType;
                var26 = _closure1_slot25;
                var26 = var26.CHANNEL;
                var27[var26] = var9;
                var4['unreadChannelId'] = var21;
 399:
                var3 = var18;
                if(!var20) { _fun0020_ip = 161; continue _fun0020 }
 408:
                if(var24) { _fun0020_ip = 429; continue _fun0020 }
 411:
                var20 = var4.highImportanceMentionCount;
                var20 = var20 + var25;
                var4['highImportanceMentionCount'] = var20;
                _fun0020_ip = 445; continue _fun0020;
 429:
                var20 = var4.lowImportanceMentionCount;
                var20 = var20 + var25;
                var4['lowImportanceMentionCount'] = var20;
 445:
                var21 = var4.mentionCounts;
                var20 = var19.id;
                var19 = {};
                var19['count'] = var25;
                var19['isMentionLowImportance'] = var24;
                var21[var20] = var19;
                var3 = var18;
                _fun0020_ip = 161; continue _fun0020;
            }
 480:
            var7 = _closure1_slot10;
            var3 = var7.getActiveJoinedThreadsForGuild;
            var21 = var3.bind(var7)(var6);
            var19 = var21;
            var26 = undefined;
            var25 = undefined;
            var24 = undefined;
            for(var16 in var19)
 515:
            {
                var10 = var26;
                var7 = var25;
                var3 = var24;
 536:
                var11 = var16;
                var14 = var21[var11];
                var26 = var10;
                var25 = var7;
                var24 = var3;
                var10 = var26;
                var7 = var25;
                var3 = var24;
                ForInLoopInit(obj_props_register=14, obj_register=13, iter_index_register=12, iter_size_register=11);
                if(var15 === undefined) { _fun0020_ip = 515; continue _fun0020 }
 569:
                var26 = var10;
                var25 = var7;
                var24 = var3;
                ForInLoopNextIter(next_value_register=10, obj_props_register=14, obj_register=13, iter_index_register=12, iter_size_register=11);
                if(var11 === undefined) { _fun0020_ip = 515; continue _fun0020 }
 587:
                var26 = var11;
                var25 = var4.unreadByType;
                var24 = _closure1_slot25;
                var24 = var24.CHANNEL;
                var24 = var25[var24];
                if(var24) { _fun0020_ip = 631; continue _fun0020 }
 613:
                var27 = _closure1_slot19;
                var25 = var27.hasUnread;
                var25 = var25.bind(var27)(var26);
                var24 = !var25;
 631:
                if(var24) { _fun0020_ip = 649; continue _fun0020 }
 634:
                var27 = _closure1_slot11;
                var25 = var27.isMuted;
                var24 = var25.bind(var27)(var26);
 649:
                if(var24) { _fun0020_ip = 655; continue _fun0020 }
 652:
                var24 = var23;
 655:
                if(var24) { _fun0020_ip = 684; continue _fun0020 }
 658:
                var25 = var4.unreadByType;
                var24 = _closure1_slot25;
                var24 = var24.CHANNEL;
                var25[var24] = var9;
                var4['unreadChannelId'] = var26;
 684:
                var25 = _closure1_slot19;
                var24 = var25.getMentionCount;
                var25 = var24.bind(var25)(var26);
                var27 = _closure1_slot19;
                var24 = var27.getIsMentionLowImportance;
                var24 = var24.bind(var27)(var26);
                var10 = var26;
                var7 = var25;
                var3 = var24;
                if(!(var25 > var22)) { _fun0020_ip = 569; continue _fun0020 }
 730:
                if(var24) { _fun0020_ip = 751; continue _fun0020 }
 733:
                var27 = var4.highImportanceMentionCount;
                var27 = var27 + var25;
                var4['highImportanceMentionCount'] = var27;
                _fun0020_ip = 767; continue _fun0020;
 751:
                var27 = var4.lowImportanceMentionCount;
                var27 = var27 + var25;
                var4['lowImportanceMentionCount'] = var27;
 767:
                var28 = var4.mentionCounts;
                var27 = {};
                var27['count'] = var25;
                var27['isMentionLowImportance'] = var24;
                var28[var26] = var27;
                var10 = var26;
                var7 = var25;
                var3 = var24;
                _fun0020_ip = 569; continue _fun0020;
            }
 803:
            var7 = var4.unreadByType;
            var3 = _closure1_slot25;
            var3 = var3.GUILD_EVENT;
            var3 = var7[var3];
            var3 = !var3;
            if(!var3) { _fun0020_ip = 849; continue _fun0020 }
 829:
            var10 = _closure1_slot41;
            var7 = _closure1_slot25;
            var7 = var7.GUILD_EVENT;
            var3 = var10.bind(var5)(var6, var7);
 849:
            if(!var3) { _fun0020_ip = 1007; continue _fun0020 }
 855:
            var7 = var4.unreadByType;
            var3 = _closure1_slot25;
            var3 = var3.GUILD_EVENT;
            var7[var3] = var9;
            _fun0020_ip = 1007; continue _fun0020;
 880:
            return var1;
 882:
            var3 = _closure1_slot16;
            var1 = var3.getMutablePrivateChannels;
            var13 = var1.bind(var3)();
            var11 = var13;
            var3 = false;
            var1 = 0;
            for(var7 in var11)
 911:
            {
 920:
                var17 = var7;
                var14 = var13[var17];
                var16 = _closure1_slot19;
                var15 = var16.getMentionCount;
                var17 = var15.bind(var16)(var17);
                var15 = var17 > var1;
                if(!var15) { _fun0020_ip = 959; continue _fun0020 }
 949:
                var16 = _closure1_slot38;
                var15 = var16.bind(var5)(var14, var17);
 959:
                if(!var15) { _fun0020_ip = 911; continue _fun0020 }
 962:
                var15 = var4.highImportanceMentionCount;
                var15 = var15 + var17;
                var4['highImportanceMentionCount'] = var15;
                var16 = var4.mentionCounts;
                var15 = var14.id;
                var14 = {};
                var14['count'] = var17;
                var14['isMentionLowImportance'] = var3;
                var16[var15] = var14;
                _fun0020_ip = 911; continue _fun0020;
            }
 1007:
            var1 = _closure1_slot43;
            var1 = var1.bind(var5)(var4);
            var1 = _closure1_slot35;
            var3 = var1.bind(var5)(var6);
            var7 = var4.unread;
            var1 = var3.unread;
            var1 = var7 !== var1;
            if(var1) { _fun0020_ip = 1060; continue _fun0020 }
 1044:
            var9 = var4.highImportanceMentionCount;
            var7 = var3.highImportanceMentionCount;
            var1 = var9 !== var7;
 1060:
            if(var1) { _fun0020_ip = 1079; continue _fun0020 }
 1063:
            var9 = var4.lowImportanceMentionCount;
            var7 = var3.lowImportanceMentionCount;
            var1 = var9 !== var7;
 1079:
            if(!var1) { _fun0020_ip = 1180; continue _fun0020 }
 1082:
            var9 = _closure1_slot28;
            var7 = var6;
            if(!(var8 == var6)) { _fun0020_ip = 1097; continue _fun0020 }
 1093:
            var7 = _closure1_slot27;
 1097:
            var9[var7] = var4;
            if(!(var8 != var6)) { _fun0020_ip = 1140; continue _fun0020 }
 1105:
            var7 = var4.unread;
            var9 = _closure1_slot29;
            if(var7) { _fun0020_ip = 1130; continue _fun0020 }
 1118:
            var7 = var9.delete;
            var7 = var7.bind(var9)(var6);
            _fun0020_ip = 1140; continue _fun0020;
 1130:
            var7 = var9.add;
            var7 = var7.bind(var9)(var6);
 1140:
            var7 = _closure1_slot30;
            var7 = var7 + 1;
            _closure1_slot30 = var7;
            var7 = _closure1_slot36;
            if(!(var8 == var6)) { _fun0020_ip = 1163; continue _fun0020 }
 1159:
            var6 = _closure1_slot27;
 1163:
            var6 = var7.bind(var5)(var6);
            var2 = _closure1_slot44;
            var2 = var2.bind(var5)(var4, var3);
            var1 = true;
 1180:
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function handleOverlayInitialize(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
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
            if(!var7) { _fun0021_ip = 116; continue _fun0021 }
 81:
            var7 = var6[var4];
            if(!(var3 != var7)) { _fun0021_ip = 109; continue _fun0021 }
 89:
            var8 = _closure1_slot49;
            var7 = var7.properties;
            var7 = var7.id;
            var7 = var8.bind(var1)(var7);
 109:
            var4 = var4 + 1;
            if(var4 < var2) { _fun0021_ip = 81; continue _fun0021 }
 116:
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function handleConnectionOpen(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
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
            if(!var6) { _fun0022_ip = 139; continue _fun0022 }
 118:
            var4 = var2.entries;
            var2 = var4.forEach;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var4 = arg1;
                    var2 = var4.mention_count;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0023_ip = 30; continue _fun0023 }
 18:
                    var5 = var4.mention_count;
                    var3 = 0;
                    var2 = var5 > var3;
 30:
                    if(!var2) { _fun0023_ip = 143; continue _fun0023 }
 33:
                    var2 = var4.read_state_type;
                    if(!(var1 != var2)) { _fun0023_ip = 90; continue _fun0023 }
 43:
                    var3 = var4.read_state_type;
                    var2 = _closure1_slot25;
                    var2 = var2.CHANNEL;
                    if(!(var3 !== var2)) { _fun0023_ip = 90; continue _fun0023 }
 66:
                    var5 = _closure2_slot0;
                    var3 = var5.add;
                    var2 = var4.id;
                    var2 = var3.bind(var5)(var2);
                    _fun0023_ip = 143; continue _fun0023;
 90:
                    var3 = _closure2_slot0;
                    var2 = var3.add;
                    var6 = _closure1_slot16;
                    var5 = var6.getChannel;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0023_ip = 138; continue _fun0023 }
 133:
                    var1 = var4.guild_id;
 138:
                    var1 = var2.bind(var3)(var1);
 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
 139:
            var4 = _closure1_slot49;
            var1 = undefined;
            var2 = null;
            var2 = var4.bind(var1)(var2);
            var2 = _closure1_slot32;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0022_ip = 228; continue _fun0022 }
 173:
            var10 = var3.value;
            var9 = _closure1_slot49;
            var8 = var10.id;
            var2 = undefined;
            if(!var6) { _fun0022_ip = 207; continue _fun0022 }
 192:
            var11 = var5.has;
            var10 = var10.id;
            var2 = var11.bind(var5)(var10);
 207:
            var2 = var9.bind(var1)(var8, var2);
            var8 = var4.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0022_ip = 173; continue _fun0022 }
 228:
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function recomputeAllGuilds() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
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
            if(!var2) { _fun0024_ip = 123; continue _fun0024 }
 98:
            var6 = _closure1_slot49;
            var2 = var4[var3];
            var2 = var6.bind(var1)(var2);
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0024_ip = 98; continue _fun0024 }
 123:
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
 0:
            var1 = arg1;
            var2 = var1.guild;
            var4 = _closure1_slot28;
            var1 = var2.id;
            var4 = var4[var1];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0025_ip = 78; continue _fun0025 }
 33:
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
 78:
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
 0:
            var4 = _closure1_slot16;
            var2 = var4.getChannel;
            var5 = _closure1_slot20;
            var1 = var5.getChannelId;
            var1 = var1.bind(var5)();
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0026_ip = 75; continue _fun0026 }
 40:
            var5 = _closure1_slot47;
            var3 = var2.getGuildId;
            var4 = var3.bind(var2)();
            var2 = var2.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 75:
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var1 = function handleGuildMemberUpdate(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var2 = arg1;
            var1 = var2.user;
            var4 = var2.guildId;
            var3 = var1.id;
            var5 = _closure1_slot15;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var3 === var1;
            if(!var1) { _fun0027_ip = 53; continue _fun0027 }
 42:
            var3 = _closure1_slot49;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 53:
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var1 = function handleGenericUpdate(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = _closure1_slot16;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var4);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0028_ip = 69; continue _fun0028 }
 34:
            var5 = _closure1_slot47;
            var3 = var2.getGuildId;
            var4 = var3.bind(var2)();
            var2 = var2.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 69:
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var1 = function handleMessageCreate(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = _closure1_slot16;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var5);
            var4 = null;
            if(!(var4 != var1)) { _fun0029_ip = 240; continue _fun0029 }
 34:
            var3 = var1.guild_id;
            if(!(var4 != var3)) { _fun0029_ip = 199; continue _fun0029 }
 46:
            var6 = _closure1_slot35;
            var4 = var1.guild_id;
            var3 = undefined;
            var3 = var6.bind(var3)(var4);
            var4 = var1.isThread;
            var4 = var4.bind(var1)();
            if(var4) { _fun0029_ip = 103; continue _fun0029 }
 75:
            var8 = _closure1_slot21;
            var7 = var8.isGuildOrCategoryOrChannelMuted;
            var6 = var1.guild_id;
            var4 = var1.id;
            var4 = var7.bind(var8)(var6, var4);
            _fun0029_ip = 152; continue _fun0029;
 103:
            var8 = _closure1_slot11;
            var7 = var8.hasJoined;
            var6 = var1.id;
            var6 = var7.bind(var8)(var6);
            var6 = !var6;
            if(var6) { _fun0029_ip = 149; continue _fun0029 }
 129:
            var9 = _closure1_slot11;
            var8 = var9.isMuted;
            var7 = var1.id;
            var6 = var8.bind(var9)(var7);
 149:
            var4 = var6;
 152:
            if(var4) { _fun0029_ip = 178; continue _fun0029 }
 155:
            var4 = var3.unreadByType;
            var3 = _closure1_slot25;
            var3 = var3.CHANNEL;
            var3 = var4[var3];
            if(!var3) { _fun0029_ip = 199; continue _fun0029 }
 178:
            var4 = _closure1_slot19;
            var3 = var4.getMentionCount;
            var4 = var3.bind(var4)(var5);
            var3 = 0;
            if(!(var3 !== var4)) { _fun0029_ip = 236; continue _fun0029 }
 199:
            var4 = _closure1_slot47;
            var2 = var1.getGuildId;
            var3 = var2.bind(var1)();
            var1 = var1.id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
 236:
            var1 = false;
            return var1;
 240:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var1 = function handleChannelSelect(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = var1.guildId;
            var1 = _closure1_slot23;
            var1 = var6 !== var1;
            if(!var1) { _fun0030_ip = 59; continue _fun0030 }
 27:
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0030_ip = 56; continue _fun0030 }
 36:
            var5 = _closure1_slot47;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = undefined;
            var2 = var5.bind(var3)(var6, var4);
 56:
            var1 = var2;
 59:
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
 0:
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
                if(var1) { _fun0031_ip = 47; continue _fun0031 }
 44:
                var1 = var2;
 47:
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
 0:
                var3 = _closure1_slot16;
                var2 = var3.getChannel;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0032_ip = 41; continue _fun0032 }
 31:
                var2 = var3.getGuildId;
                var1 = var2.bind(var3)();
 41:
                return var1;
            }
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.reduce;
        var2 = function(arg1, arg2, arg3) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var2 = arg1;
                var5 = _closure1_slot47;
                var4 = undefined;
                var3 = arg3;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var1);
                if(var1) { _fun0033_ip = 30; continue _fun0033 }
 27:
                var1 = var2;
 30:
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
 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 25;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.doesThreadMembersActionAffectMe;
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0034_ip = 70; continue _fun0034 }
 42:
            var4 = _closure1_slot47;
            var3 = var2.guildId;
            var6 = var2.id;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = var4.bind(var5)(var3, var2);
 70:
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
 0:
            var2 = arg1;
            var1 = var2.channels;
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            if(!var1) { _fun0035_ip = 66; continue _fun0035 }
 23:
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
 66:
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
 0:
                var1 = arg1;
                var1 = var1.guild_id;
                var2 = null;
                if(!(var2 == var1)) { _fun0036_ip = 21; continue _fun0036 }
 14:
                var1 = _closure1_slot27;
 21:
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
 0:
                var2 = arg1;
                var5 = arg2;
                var3 = _closure2_slot0;
                var1 = var3.has;
                var1 = var1.bind(var3)(var5);
                if(!var1) { _fun0037_ip = 40; continue _fun0037 }
 26:
                var4 = _closure1_slot49;
                var3 = undefined;
                var1 = var4.bind(var3)(var5);
 40:
                if(var1) { _fun0037_ip = 46; continue _fun0037 }
 43:
                var1 = var2;
 46:
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
 0:
            var6 = _closure1_slot28;
            var1 = 0;
            for(var2 in var6)
 17:
            {
 26:
                var9 = var2;
                var8 = _closure1_slot28;
                var8 = var8[var9];
                var8['ncMentionCount'] = var1;
                _fun0038_ip = 17; continue _fun0038;
            }
 45:
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
 0:
                var1 = arg1;
                var4 = _closure1_slot16;
                var3 = var4.getChannel;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                if(!(var4 != var3)) { _fun0039_ip = 56; continue _fun0039 }
 26:
                var4 = _closure1_slot47;
                var2 = var3.getGuildId;
                var3 = var2.bind(var3)();
                var2 = new Array(1);
                var2[0] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
 56:
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
 0:
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
                if(var1) { _fun0040_ip = 430; continue _fun0040 }
 417:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0040_ip = 464; continue _fun0040;
 430:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 464:
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
 0:
                var3 = this;
                var2 = var3.readSnapshot;
                var1 = _closure2_slot0;
                var1 = var1.LATEST_SNAPSHOT_VERSION;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0041_ip = 84; continue _fun0041 }
 33:
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
 84:
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
 0:
                var4 = arg1;
                var3 = _closure1_slot16;
                var2 = var3.getMutableGuildChannelsForGuild;
                var10 = var2.bind(var3)(var4);
                var8 = var10;
                var3 = 0;
                var15 = null;
                for(var5 in var8)
 36:
                {
 45:
                    var12 = var5;
                    var14 = var10[var12];
                    if(var15 == var14) { _fun0042_ip = 36; continue _fun0042 }
 56:
                    var2 = var14.isGuildVocal;
                    var2 = var2.bind(var14)();
                    if(!var2) { _fun0042_ip = 88; continue _fun0042 }
 69:
                    var11 = _closure1_slot19;
                    var2 = var11.getMentionCount;
                    var2 = var2.bind(var11)(var12);
                    if(var3 === var2) { _fun0042_ip = 36; continue _fun0042 }
 88:
                    var13 = _closure1_slot18;
                    var11 = var13.can;
                    var2 = var14.accessPermissions;
                    var2 = var11.bind(var13)(var2, var14);
                    if(!var2) { _fun0042_ip = 36; continue _fun0042 }
 113:
                    var11 = _closure1_slot19;
                    var2 = var11.hasUnreadOrMentions;
                    var2 = var2.bind(var11)(var12);
                    if(!var2) { _fun0042_ip = 36; continue _fun0042 }
 131:
                    var2 = true;
                    return var2;
                }
 135:
                var3 = _closure1_slot10;
                var2 = var3.getActiveJoinedThreadsForGuild;
                var14 = var2.bind(var3)(var4);
                var12 = var14;
                for(var9 in var12)
 161:
                {
 170:
                    var2 = var9;
                    var5 = _closure1_slot16;
                    var3 = var5.getChannel;
                    var3 = var3.bind(var5)(var2);
                    if(var15 == var3) { _fun0042_ip = 161; continue _fun0042 }
 191:
                    var7 = var14[var2];
                    ForInLoopInit(obj_props_register=7, obj_register=6, iter_index_register=5, iter_size_register=4);
                    if(var8 === undefined) { _fun0042_ip = 161; continue _fun0042 }
 203:
                    ForInLoopNextIter(next_value_register=2, obj_props_register=7, obj_register=6, iter_index_register=5, iter_size_register=4);
                    if(var3 === undefined) { _fun0042_ip = 161; continue _fun0042 }
 212:
                    var17 = var3;
                    var16 = _closure1_slot19;
                    var2 = var16.hasUnreadOrMentions;
                    var2 = var2.bind(var16)(var17);
                    if(!var2) { _fun0042_ip = 203; continue _fun0042 }
 233:
                    var2 = true;
                    return var2;
                }
 237:
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
 0:
                var8 = _closure1_slot28;
                var3 = true;
                var2 = arg1;
                var3 = var3 === var2;
                var2 = 0;
                var1 = 0;
                for(var4 in var8)
 28:
                {
                    var11 = var2;
                    var1 = var11;
 43:
                    var14 = var4;
                    var10 = _closure1_slot28;
                    var10 = var10[var14];
                    var12 = var3;
                    if(!var12) { _fun0043_ip = 68; continue _fun0043 }
 60:
                    var13 = _closure1_slot27;
                    var12 = var14 === var13;
 68:
                    var2 = var11;
                    if(var12) { _fun0043_ip = 28; continue _fun0043 }
 74:
                    var10 = var10.highImportanceMentionCount;
                    var2 = var11 + var10;
                    _fun0043_ip = 28; continue _fun0043;
                }
 86:
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
 0:
                var8 = _closure1_slot28;
                var3 = true;
                var2 = arg1;
                var3 = var3 === var2;
                var2 = 0;
                var1 = 0;
                for(var4 in var8)
 28:
                {
                    var11 = var2;
                    var1 = var11;
 43:
                    var14 = var4;
                    var10 = _closure1_slot28;
                    var10 = var10[var14];
                    var12 = var3;
                    if(!var12) { _fun0044_ip = 68; continue _fun0044 }
 60:
                    var13 = _closure1_slot27;
                    var12 = var14 === var13;
 68:
                    var2 = var11;
                    if(var12) { _fun0044_ip = 28; continue _fun0044 }
 74:
                    var10 = var10.ncMentionCount;
                    var2 = var11 + var10;
                    _fun0044_ip = 28; continue _fun0044;
                }
 86:
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
 0:
                var2 = _closure1_slot28;
                var1 = _closure1_slot27;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0045_ip = 32; continue _fun0045 }
 26:
                var2 = var3.highImportanceMentionCount;
 32:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0045_ip = 44; continue _fun0045 }
 41:
                var1 = var2;
 44:
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
 0:
                var2 = _closure1_slot28;
                var1 = _closure1_slot27;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0046_ip = 39; continue _fun0046 }
 26:
                var4 = var3.mentionCounts;
                var3 = arg1;
                var2 = var4[var3];
 39:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0046_ip = 51; continue _fun0046 }
 48:
                var1 = var2;
 51:
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