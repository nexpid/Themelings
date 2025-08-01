// app/modules/recents/RecentMentionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            _closure1_slot32 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function updateChannelMentionCount(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var6 = var2.addedMessages;
            var3 = var2.deletedMessages;
            var2 = null;
            if(!(var2 != var6)) { _fun0002_ip = 38; continue _fun0002 }
 23:
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot24;
                    var3 = var2.getChannelId;
                    var3 = var3.bind(var2)();
                    var4 = var4[var3];
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 50; continue _fun0003 }
 30:
                    var5 = _closure1_slot24;
                    var3 = var2.getChannelId;
                    var4 = var3.bind(var2)();
                    var3 = 0;
                    var5[var4] = var3;
 50:
                    var3 = _closure1_slot24;
                    var1 = var2.getChannelId;
                    var2 = var1.bind(var2)();
                    var1 = var3[var2];
                    var1 = var1 + 1;
                    var3[var2] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
 38:
            if(!(var2 != var3)) { _fun0002_ip = 57; continue _fun0002 }
 42:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = arg1;
                    var3 = _closure1_slot24;
                    var2 = var7.getChannelId;
                    var2 = var2.bind(var7)();
                    var3 = var3[var2];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 94; continue _fun0004 }
 30:
                    var3 = _closure1_slot24;
                    var2 = var7.getChannelId;
                    var2 = var2.bind(var7)();
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.max;
                    var4 = _closure1_slot24;
                    var1 = var7.getChannelId;
                    var1 = var1.bind(var7)();
                    var4 = var4[var1];
                    var1 = 1;
                    var4 = var4 - var1;
                    var1 = 0;
                    var1 = var5.bind(var6)(var1, var4);
                    var3[var2] = var1;
 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 57:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function findOrCreateMessageRecord(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = _closure1_slot8;
            var2 = var1 instanceof var2;
            if(var2) { _fun0005_ip = 84; continue _fun0005 }
 17:
            var6 = _closure1_slot11;
            var5 = var6.getMessage;
            var4 = var1.channel_id;
            var2 = var1.id;
            var2 = var5.bind(var6)(var4, var2);
            var4 = null;
            if(!(var4 == var2)) { _fun0005_ip = 82; continue _fun0005 }
 49:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 16;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.createMessageRecord;
            var2 = var3.bind(var4)(var1);
 82:
            return var2;
 84:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var4 = function hasMentionNotificationEnabled(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var4 = _closure1_slot10;
            var3 = var4.getBasicChannel;
            var1 = var8.channel_id;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 280; continue _fun0006 }
 35:
            var4 = _closure1_slot21;
            var6 = var4.GUILD_TEXTUAL;
            var5 = var6.has;
            var4 = var3.type;
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0006_ip = 280; continue _fun0006 }
 66:
            var7 = _closure1_slot15;
            var6 = var7.isGuildOrCategoryOrChannelMuted;
            var5 = var3.guild_id;
            var4 = var3.id;
            var4 = var6.bind(var7)(var5, var4);
            if(var4) { _fun0006_ip = 276; continue _fun0006 }
 98:
            var5 = _closure1_slot15;
            var4 = var5.resolvedMessageNotifications;
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot20;
            var4 = var4.ALL_MESSAGES;
            if(!(var4 !== var5)) { _fun0006_ip = 272; continue _fun0006 }
 130:
            var4 = _closure1_slot20;
            var4 = var4.ONLY_MENTIONS;
            if(!(var4 !== var5)) { _fun0006_ip = 158; continue _fun0006 }
 144:
            var4 = _closure1_slot20;
            var4 = var4.NO_MESSAGES;
            var4 = false;
            return var4;
 158:
            var6 = _closure1_slot15;
            var5 = var6.isSuppressEveryoneEnabled;
            var4 = var3.guild_id;
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot15;
            var4 = var5.isSuppressRolesEnabled;
            var3 = var3.guild_id;
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot16;
            var3 = var4.getCurrentUser;
            var7 = var3.bind(var4)();
            var1 = var1 != var7;
            if(!var1) { _fun0006_ip = 270; continue _fun0006 }
 218:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['message'] = var8;
            var7 = var7.id;
            var2['userId'] = var7;
            var2['suppressEveryone'] = var6;
            var2['suppressRoles'] = var5;
            var1 = var3.bind(var4)(var2);
 270:
            return var1;
 272:
            var1 = true;
            return var1;
 276:
            var1 = false;
            return var1;
 280:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot35 = var4;
    var2 = function parseMessage(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var6 = arguments[1];
            var8 = undefined;
            if(!(var6 === var8)) { _fun0007_ip = 14; continue _fun0007 }
 12:
            var6 = null;
 14:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var1 = var2.bind(var8)(var1);
            var1 = var1.bind(var8)(var3);
            if(!var1) { _fun0007_ip = 77; continue _fun0007 }
 45:
            var1 = _closure1_slot19;
            var4 = var1.SELF_MENTIONABLE_SYSTEM;
            var2 = var4.has;
            var1 = var3.type;
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0007_ip = 77; continue _fun0007 }
 73:
            var1 = null;
            return var1;
 77:
            var1 = null;
            if(!(var1 == var6)) { _fun0007_ip = 88; continue _fun0007 }
 83:
            var6 = var3.channel_id;
 88:
            var4 = _closure1_slot10;
            var2 = var4.getChannel;
            var12 = var2.bind(var4)(var6);
            if(!(var1 != var12)) { _fun0007_ip = 493; continue _fun0007 }
 109:
            var4 = var12.type;
            var2 = _closure1_slot18;
            var2 = var2.DM;
            if(!(var4 !== var2)) { _fun0007_ip = 493; continue _fun0007 }
 131:
            var2 = _closure1_slot28;
            var4 = var2.guildFilter;
            var2 = _closure1_slot17;
            var2 = var2.THIS_SERVER;
            if(!(var4 === var2)) { _fun0007_ip = 186; continue _fun0007 }
 155:
            var2 = var12.getGuildId;
            var4 = var2.bind(var12)();
            var6 = _closure1_slot14;
            var2 = var6.getGuildId;
            var2 = var2.bind(var6)();
            if(!(var4 === var2)) { _fun0007_ip = 491; continue _fun0007 }
 186:
            var4 = _closure1_slot9;
            var2 = var4.getId;
            var9 = var2.bind(var4)();
            var4 = _closure1_slot13;
            var2 = var4.isBlockedOrIgnoredForMessage;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0007_ip = 489; continue _fun0007 }
 221:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 21;
            var2 = var6[var2];
            var2 = var4.bind(var8)(var2);
            var2 = var2.bind(var8)(var3, var9);
            if(var2) { _fun0007_ip = 489; continue _fun0007 }
 253:
            var2 = _closure1_slot34;
            var3 = var2.bind(var8)(var3);
            var2 = _closure1_slot28;
            var2 = var2.everyoneFilter;
            var7 = !var2;
            var2 = _closure1_slot28;
            var2 = var2.roleFilter;
            var6 = !var2;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var10 = 17;
            var2 = var2[var10];
            var4 = var4.bind(var8)(var2);
            var2 = {};
            var2['message'] = var3;
            var2['userId'] = var9;
            var2['suppressEveryone'] = var7;
            var2['suppressRoles'] = var6;
            var4 = var4.bind(var8)(var2);
            var2 = null;
            if(!var4) { _fun0007_ip = 487; continue _fun0007 }
 341:
            var4 = _closure1_slot31;
            if(!var4) { _fun0007_ip = 377; continue _fun0007 }
 348:
            var11 = _closure1_slot12;
            var7 = var11.ackMessageId;
            var6 = var12.id;
            var7 = var7.bind(var11)(var6);
            var6 = var3.id;
            var4 = var7 !== var6;
 377:
            if(!var4) { _fun0007_ip = 472; continue _fun0007 }
 380:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var7 = var7.bind(var8)(var6);
            var6 = {};
            var6['message'] = var3;
            var6['userId'] = var9;
            var11 = _closure1_slot15;
            var10 = var11.isSuppressEveryoneEnabled;
            var9 = var12.getGuildId;
            var9 = var9.bind(var12)();
            var9 = var10.bind(var11)(var9);
            var6['suppressEveryone'] = var9;
            var11 = _closure1_slot15;
            var10 = var11.isSuppressRolesEnabled;
            var9 = var12.getGuildId;
            var9 = var9.bind(var12)();
            var9 = var10.bind(var11)(var9);
            var6['suppressRoles'] = var9;
            var4 = var7.bind(var8)(var6);
 472:
            var2 = var3;
            if(!var4) { _fun0007_ip = 487; continue _fun0007 }
 478:
            var4 = false;
            _closure1_slot31 = var4;
            var2 = var3;
 487:
            return var2;
 489:
            return var1;
 491:
            return var1;
 493:
            return var1;
        }
    };
    var _closure1_slot36 = var2;
    var1 = function deleteMessage(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot25;
            var5 = var1[var4];
            var1 = null;
            if(!(var1 != var5)) { _fun0008_ip = 127; continue _fun0008 }
 26:
            var1 = _closure1_slot25;
            var1 = delete var1[var4];
            var8 = _closure1_slot33;
            var7 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 18;
            var9 = var6[var4];
            var1 = undefined;
            var12 = var5.bind(var1)(var9);
            var11 = var12.filter;
            var10 = _closure1_slot23;
            var9 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var9 = var11.bind(var12)(var10, var9);
            var7['deletedMessages'] = var9;
            var7 = var8.bind(var1)(var7);
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.filter;
            var4 = _closure1_slot23;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot23 = var2;
            return var1;
 127:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var13 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot37;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var15 = function handleSetRecentMentionsFilters(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = {};
            var11 = _closure1_slot28;
            var12 = var1;
            var4 = copyDataProperties(var12, var11);
            var _closure2_slot0 = var1;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 18;
            var7 = var6[var4];
            var1 = undefined;
            var8 = var5.bind(var1)(var7);
            var7 = var8.defaults;
            var4 = var6[var4];
            var10 = var5.bind(var1)(var4);
            var9 = var10.pick;
            var5 = arg1;
            var4 = ['guildFilter', 'roleFilter', 'everyoneFilter'];
            var5 = var9.bind(var10)(var5, var4);
            var4 = _closure1_slot28;
            var4 = var7.bind(var8)(var5, var4);
            _closure1_slot28 = var4;
            var5 = _closure1_slot0;
            var4 = 15;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var7 = var4.Storage;
            var6 = var7.set;
            var5 = _closure1_slot22;
            var4 = _closure1_slot28;
            var4 = var6.bind(var7)(var5, var4);
            var7 = function changesTo(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot0;
                    var4 = var1[var3];
                    var1 = _closure1_slot28;
                    var1 = var1[var3];
                    var1 = var4 !== var1;
                    if(!var1) { _fun0010_ip = 47; continue _fun0010 }
 32:
                    var2 = _closure1_slot28;
                    var3 = var2[var3];
                    var2 = arg2;
                    var1 = var3 === var2;
 47:
                    return var1;
                }
            };
            var4 = _closure1_slot17;
            var5 = var4.THIS_SERVER;
            var4 = 'guildFilter';
            var5 = var7.bind(var1)(var4, var5);
            if(var5) { _fun0009_ip = 179; continue _fun0009 }
 167:
            var6 = 'everyoneFilter';
            var4 = false;
            var5 = var7.bind(var1)(var6, var4);
 179:
            if(var5) { _fun0009_ip = 194; continue _fun0009 }
 182:
            var6 = 'roleFilter';
            var4 = false;
            var5 = var7.bind(var1)(var6, var4);
 194:
            var4 = {};
            _closure1_slot25 = var4;
            var4 = new Array(0);
            var _closure2_slot1 = var4;
            if(!var5) { _fun0009_ip = 230; continue _fun0009 }
 211:
            var7 = _closure1_slot23;
            var6 = var7.forEach;
            var5 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = _closure1_slot36;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0011_ip = 55; continue _fun0011 }
 23:
                    var5 = _closure2_slot1;
                    var4 = var5.push;
                    var4 = var4.bind(var5)(var2);
                    var4 = _closure1_slot25;
                    var3 = var2.id;
                    var2 = true;
                    var4[var3] = var2;
 55:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
 230:
            _closure1_slot23 = var4;
            var2 = function resetChannelMentionCount(arg1) {
                var3 = arg1;
                var1 = {};
                _closure1_slot24 = var1;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = arg1;
                        var4 = _closure1_slot24;
                        var3 = var2.getChannelId;
                        var3 = var3.bind(var2)();
                        var4 = var4[var3];
                        var3 = null;
                        if(!(var3 == var4)) { _fun0012_ip = 50; continue _fun0012 }
 30:
                        var5 = _closure1_slot24;
                        var3 = var2.getChannelId;
                        var4 = var3.bind(var2)();
                        var3 = 0;
                        var5[var4] = var3;
 50:
                        var3 = _closure1_slot24;
                        var1 = var2.getChannelId;
                        var2 = var1.bind(var2)();
                        var1 = var3[var2];
                        var1 = var1 + 1;
                        var3[var2] = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var1)(var4);
            var2 = _closure1_slot23;
            var4 = var2.length;
            var2 = 0;
            if(!(var2 === var4)) { _fun0009_ip = 265; continue _fun0009 }
 259:
            var2 = false;
            _closure1_slot29 = var2;
 265:
            return var1;
        }
    };
    var _closure1_slot38 = var15;
    var14 = function handleConnectionOpen() {
        var1 = new Array(0);
        _closure1_slot23 = var1;
        var1 = {};
        _closure1_slot25 = var1;
        var1 = false;
        _closure1_slot29 = var1;
        _closure1_slot31 = var1;
        var1 = {};
        _closure1_slot24 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot39 = var14;
    var11 = function handleRelationshipUpdate() {
        var5 = _closure1_slot33;
        var4 = {};
        var7 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 18;
        var6 = var6[var1];
        var1 = undefined;
        var9 = var7.bind(var1)(var6);
        var8 = var9.filter;
        var7 = _closure1_slot23;
        var6 = function(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.isBlockedOrIgnoredForMessage;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var8.bind(var9)(var7, var6);
        var4['deletedMessages'] = var6;
        var4 = var5.bind(var1)(var4);
        var5 = _closure1_slot23;
        var4 = var5.filter;
        var2 = function(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.isBlockedOrIgnoredForMessage;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var2 = var4.bind(var5)(var2);
        _closure1_slot23 = var2;
        return var1;
    };
    var12 = function handleDeleteChannel(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var _closure2_slot0 = var1;
        var4 = new Array(0);
        var _closure2_slot1 = var4;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 18;
        var5 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var5);
        var6 = var7.filter;
        var5 = _closure1_slot23;
        var3 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = arg1;
                var3 = var4.channel_id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var3 !== var1;
                if(var1) { _fun0013_ip = 59; continue _fun0013 }
 27:
                var5 = _closure1_slot25;
                var3 = var4.id;
                var3 = delete var5[var3];
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                var1 = false;
 59:
                return var1;
            }
        };
        var3 = var6.bind(var7)(var5, var3);
        _closure1_slot23 = var3;
        var3 = _closure1_slot33;
        var2 = {};
        var2['deletedMessages'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = global;
    var17 = var1.Object;
    var10 = var17.defineProperty;
    var5 = {};
    var16 = true;
    var5['value'] = var16;
    var1 = '__esModule';
    var1 = var10.bind(var17)(var3, var1, var5);
    var10 = 0;
    var5 = var8[var10];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 11;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 12;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 13;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot16 = var5;
    var5 = 14;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var20 = var5.RecentMentionsFilters;
    var _closure1_slot17 = var20;
    var17 = var5.ChannelTypes;
    var _closure1_slot18 = var17;
    var17 = var5.MessageTypesSets;
    var _closure1_slot19 = var17;
    var17 = var5.UserNotificationSettings;
    var _closure1_slot20 = var17;
    var5 = var5.ChannelTypesSets;
    var _closure1_slot21 = var5;
    var19 = 'recentMentionFilterSettings';
    var _closure1_slot22 = var19;
    var5 = new Array(0);
    var _closure1_slot23 = var5;
    var5 = {};
    var _closure1_slot24 = var5;
    var5 = {};
    var _closure1_slot25 = var5;
    var5 = false;
    var _closure1_slot26 = var5;
    var _closure1_slot27 = var16;
    var16 = 15;
    var16 = var8[var16];
    var16 = var7.bind(var1)(var16);
    var18 = var16.Storage;
    var17 = var18.get;
    var16 = {'guildFilter': null, 'everyoneFilter': true, 'roleFilter': true};
    var20 = var20.ALL_SERVERS;
    var16['guildFilter'] = var20;
    var16 = var17.bind(var18)(var19, var16);
    var _closure1_slot28 = var16;
    var _closure1_slot29 = var5;
    var _closure1_slot30 = var10;
    var _closure1_slot31 = var5;
    var5 = 22;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.Store;
    var5 = function(arg1) {
        var4 = function RecentMentionsStore() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
                var1 = _closure1_slot32;
                var1 = var1.bind(var3)();
                if(var1) { _fun0014_ip = 69; continue _fun0014 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0014_ip = 105; continue _fun0014;
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
            var7 = this;
            var6 = var7.waitFor;
            var12 = _closure1_slot16;
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = _closure1_slot12;
            var8 = _closure1_slot15;
            var13 = var7;
            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(14);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasLoadedEver';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'lastLoaded';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getMentions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = _closure1_slot29;
                if(var1) { _fun0015_ip = 30; continue _fun0015 }
 10:
                var1 = _closure1_slot23;
                var3 = var1.length;
                var1 = 0;
                var3 = var3 > var1;
                var1 = null;
                if(!var3) { _fun0015_ip = 34; continue _fun0015 }
 30:
                var1 = _closure1_slot23;
 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSettingsFilteredMentions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = _closure1_slot29;
                if(var1) { _fun0016_ip = 30; continue _fun0016 }
 10:
                var1 = _closure1_slot23;
                var3 = var1.length;
                var1 = 0;
                var3 = var3 > var1;
                var1 = null;
                if(!var3) { _fun0016_ip = 48; continue _fun0016 }
 30:
                var4 = _closure1_slot23;
                var3 = var4.filter;
                var2 = _closure1_slot35;
                var1 = var3.bind(var4)(var2);
 48:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasMention';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot25;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'loading';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasMore';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'guildFilter';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot28;
            var1 = var1.guildFilter;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'everyoneFilter';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot28;
            var1 = var1.everyoneFilter;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'roleFilter';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot28;
            var1 = var1.roleFilter;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'mentionsAreStale';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'mentionCountByChannel';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['get'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getMentionCountForChannel';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var2 = _closure1_slot24;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0017_ip = 28; continue _fun0017 }
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[13] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'RecentMentionsStore';
    var10['displayName'] = var5;
    var5 = 23;
    var5 = var8[var5];
    var23 = var9.bind(var1)(var5);
    var5 = {};
    var16 = function handleLoadMentions(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = true;
            _closure1_slot26 = var2;
            var2 = null;
            var2 = var2 == var3;
            if(!var2) { _fun0018_ip = 50; continue _fun0018 }
 26:
            var3 = _closure1_slot28;
            var4 = var3.guildFilter;
            var3 = _closure1_slot17;
            var3 = var3.THIS_SERVER;
            var2 = var4 === var3;
 50:
            if(!var2) { _fun0018_ip = 81; continue _fun0018 }
 53:
            var3 = _closure1_slot38;
            var2 = {};
            var1 = _closure1_slot17;
            var1 = var1.ALL_SERVERS;
            var2['guildFilter'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 81:
            var1 = undefined;
            return var1;
        }
    };
    var5['LOAD_RECENT_MENTIONS'] = var16;
    var16 = function handleLoadMentionsSuccess(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var2 = var1.hasMoreAfter;
            var9 = var1.messages;
            var5 = var1.isAfter;
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = 18;
            var6 = var1[var4];
            var1 = undefined;
            var8 = var7.bind(var1)(var6);
            var7 = var8.map;
            var6 = _closure1_slot34;
            var8 = var7.bind(var8)(var9, var6);
            var7 = _closure1_slot33;
            var6 = {};
            var6['addedMessages'] = var8;
            var6 = var7.bind(var1)(var6);
            if(var5) { _fun0019_ip = 92; continue _fun0019 }
 80:
            _closure1_slot23 = var8;
            var5 = {};
            _closure1_slot25 = var5;
            _fun0019_ip = 110; continue _fun0019;
 92:
            var6 = _closure1_slot23;
            var5 = var6.concat;
            var5 = var5.bind(var6)(var8);
            _closure1_slot23 = var5;
 110:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = var5[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.forEach;
            var4 = function(arg1) {
                var3 = _closure1_slot25;
                var1 = arg1;
                var2 = var1.id;
                var1 = true;
                var3[var2] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var6.bind(var7)(var8, var4);
            var4 = false;
            _closure1_slot26 = var4;
            _closure1_slot27 = var2;
            var4 = _closure1_slot0;
            var2 = 19;
            var2 = var5[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.now;
            var2 = var2.bind(var4)();
            _closure1_slot30 = var2;
            var2 = true;
            _closure1_slot29 = var2;
            return var1;
        }
    };
    var5['LOAD_RECENT_MENTIONS_SUCCESS'] = var16;
    var16 = function handleLoadMentionsFailure() {
        var1 = false;
        _closure1_slot26 = var1;
        var1 = undefined;
        return var1;
    };
    var5['LOAD_RECENT_MENTIONS_FAILURE'] = var16;
    var5['SET_RECENT_MENTIONS_FILTER'] = var15;
    var15 = function handleClearMentions() {
        var2 = _closure1_slot39;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var5['CLEAR_MENTIONS'] = var15;
    var15 = function handleTruncateMentions(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var7 = var1.size;
            var4 = _closure1_slot33;
            var2 = {};
            var5 = _closure1_slot23;
            var1 = var5.slice;
            var1 = var1.bind(var5)(var7);
            var2['deletedMessages'] = var1;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = _closure1_slot23;
            var2 = var2.length;
            var4 = var7;
            if(!(var4 < var2)) { _fun0020_ip = 96; continue _fun0020 }
 59:
            var5 = _closure1_slot25;
            var2 = _closure1_slot23;
            var2 = var2[var4];
            var2 = var2.id;
            var2 = delete var5[var2];
            var4 = var4 + 1;
            var2 = _closure1_slot23;
            var2 = var2.length;
            if(var4 < var2) { _fun0020_ip = 59; continue _fun0020 }
 96:
            var2 = _closure1_slot23;
            var4 = var2.length;
            var6 = _closure1_slot23;
            var5 = var6.slice;
            var2 = 0;
            var2 = var5.bind(var6)(var2, var7);
            _closure1_slot23 = var2;
            var2 = var2.length;
            if(!(var4 > var2)) { _fun0020_ip = 141; continue _fun0020 }
 135:
            var2 = true;
            _closure1_slot27 = var2;
 141:
            return var1;
        }
    };
    var5['TRUNCATE_MENTIONS'] = var15;
    var15 = function handleChannelSelect() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = _closure1_slot28;
            var3 = var1.guildFilter;
            var1 = _closure1_slot17;
            var1 = var1.THIS_SERVER;
            if(!(var3 === var1)) { _fun0021_ip = 37; continue _fun0021 }
 27:
            var1 = false;
            _closure1_slot29 = var1;
            var1 = undefined;
            return var1;
 37:
            var1 = false;
            return var1;
        }
    };
    var5['CHANNEL_SELECT'] = var15;
    var5['CONNECTION_OPEN'] = var14;
    var14 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var _closure2_slot0 = var1;
        var4 = new Array(0);
        var _closure2_slot1 = var4;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 18;
        var5 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var5);
        var6 = var7.filter;
        var5 = _closure1_slot23;
        var3 = function(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot10;
                var3 = var5.getChannel;
                var1 = var4.channel_id;
                var5 = var3.bind(var5)(var1);
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0022_ip = 60; continue _fun0022 }
 34:
                var3 = var5.getGuildId;
                var5 = var3.bind(var5)();
                var3 = _closure2_slot0;
                var3 = var3.id;
                var1 = var5 !== var3;
 60:
                if(var1) { _fun0022_ip = 95; continue _fun0022 }
 63:
                var3 = _closure1_slot25;
                var2 = var4.id;
                var2 = delete var3[var2];
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                var1 = false;
 95:
                return var1;
            }
        };
        var3 = var6.bind(var7)(var5, var3);
        _closure1_slot23 = var3;
        var3 = _closure1_slot33;
        var2 = {};
        var2['deletedMessages'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var5['GUILD_DELETE'] = var14;
    var14 = function handleIncomingMessage(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var6 = var1.message;
            var2 = _closure1_slot16;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var4 = null;
            if(!(var4 != var1)) { _fun0023_ip = 187; continue _fun0023 }
 38:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var5 = var5[var2];
            var2 = undefined;
            var9 = var8.bind(var2)(var5);
            var8 = var9.isRawMessageMentioned;
            var5 = {};
            var5['rawMessage'] = var6;
            var1 = var1.id;
            var5['userId'] = var1;
            var1 = false;
            var5['suppressRoles'] = var1;
            var5['suppressEveryone'] = var1;
            var5 = var8.bind(var9)(var5);
            if(!var5) { _fun0023_ip = 187; continue _fun0023 }
 102:
            var5 = _closure1_slot36;
            var6 = var5.bind(var2)(var6, var7);
            if(!(var4 != var6)) { _fun0023_ip = 185; continue _fun0023 }
 116:
            var5 = _closure1_slot23;
            var4 = var5.slice;
            var5 = var4.bind(var5)();
            _closure1_slot23 = var5;
            var4 = var5.unshift;
            var4 = var4.bind(var5)(var6);
            var7 = _closure1_slot25;
            var5 = var6.id;
            var4 = true;
            var7[var5] = var4;
            var4 = _closure1_slot33;
            var3 = {};
            var5 = new Array(1);
            var5[0] = var6;
            var3['addedMessages'] = var5;
            var3 = var4.bind(var2)(var3);
            return var2;
 185:
            return var1;
 187:
            var1 = false;
            return var1;
        }
    };
    var5['MESSAGE_CREATE'] = var14;
    var14 = function handleMessageUpdate(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var2 = arg1;
            var1 = var2.message;
            var6 = var1.id;
            var _closure2_slot0 = var6;
            var3 = null;
            if(!(var3 != var6)) { _fun0024_ip = 158; continue _fun0024 }
 28:
            var1 = _closure1_slot25;
            var1 = var1[var6];
            if(!(var3 != var1)) { _fun0024_ip = 158; continue _fun0024 }
 43:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 18;
            var6 = var6[var1];
            var1 = undefined;
            var8 = var7.bind(var1)(var6);
            var7 = var8.findIndex;
            var6 = _closure1_slot23;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var7.bind(var8)(var6, var4);
            var7 = _closure1_slot23;
            var6 = var7.slice;
            var6 = var6.bind(var7)();
            _closure1_slot23 = var6;
            var7 = var6[var4];
            if(!(var3 != var7)) { _fun0024_ip = 156; continue _fun0024 }
 111:
            var3 = _closure1_slot23;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 16;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.updateMessageRecord;
            var2 = var2.message;
            var2 = var5.bind(var6)(var7, var2);
            var3[var4] = var2;
 156:
            return var1;
 158:
            var1 = false;
            return var1;
        }
    };
    var5['MESSAGE_UPDATE'] = var14;
    var5['MESSAGE_DELETE'] = var13;
    var5['RECENT_MENTION_DELETE'] = var13;
    var13 = function handleMessageDeleteBulk(arg1) {
        var1 = arg1;
        var5 = var1.ids;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 18;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.forEach;
        var2 = _closure1_slot37;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var5['MESSAGE_DELETE_BULK'] = var13;
    var5['CHANNEL_DELETE'] = var12;
    var5['THREAD_DELETE'] = var12;
    var5['RELATIONSHIP_ADD'] = var11;
    var5['RELATIONSHIP_REMOVE'] = var11;
    var5['RELATIONSHIP_UPDATE'] = var11;
    var6 = function handleSetRecentMentionsStale() {
        var1 = true;
        _closure1_slot31 = var1;
        var1 = undefined;
        return var1;
    };
    var5['SET_RECENT_MENTIONS_STALE'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var24 = var6;
    var22 = var5;
    var5 = new var24[var10](var23, var22, var21);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 24;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/recents/RecentMentionsStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['hasMentionNotificationEnabled'] = var4;
    var3['parseMessage'] = var2;
    return var1;
})();