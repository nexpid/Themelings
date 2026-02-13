// app/utils/ReadyPayloadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function maybeIncludeInitialGuild(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg2;
            var1 = _closure1_slot11;
            var4 = null;
            var3 = var4 == var1;
            var1 = null;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = _closure1_slot11;
            var5 = var3.identifyTime;
            var3 = arg1;
            var1 = null;
            if(!(var5 === var3)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            if(!(var4 != var6)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var5 = var6.some;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure1_slot11;
                var1 = var1.guild;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var1 = null;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 39:
            var2 = _closure1_slot11;
            var4 = var2.guild;
            var3 = arg3;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 36:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getRawEmojiForGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getGuildEmojis;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var4;
            if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 3:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.values;
            var1 = var2.bind(var3)(var4);
case 41:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function restoreUsers(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var2 = var3.user_id;
                    if(!(var5 != var2)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 12;
                    var1 = var6[var1];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var1);
                    var1 = _closure2_slot0;
                    var4 = var1[var2];
                    var5 = var5 != var4;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var9 = var4.concat;
                    var8 = 'Missing user[';
                    var4 = '] in compressed ready payload';
                    var4 = var9.bind(var8)(var2, var4);
                    var4 = var6.bind(var7)(var5, var4);
                    var1 = var1[var2];
                    var3['user'] = var1;
case 46:
                    var1 = delete var3.user_id;
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 42:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function popGuildCacheEntry(arg1) {
        var3 = arg1;
        var1 = _closure1_slot10;
        var1 = var1[var3];
        var2 = _closure1_slot10;
        var2 = delete var2[var3];
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function hydrateUpdateForEntity(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var3 = arg3;
            var2 = null;
            if(!(var4 == var2)) { _fun0008_ip = 37; continue _fun0008 }
case 48:
            var4 = new Array(0);
case 37:
            if(!(var3 == var2)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var3 = new Array(0);
case 49:
            var5 = global;
            var5 = var5.Set;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var15 = var7;
            var14 = var3;
            var5 = new var15[var5](var14, var13);
            var10 = var5 instanceof Object ? var5 : var7;
            var _closure2_slot0 = var10;
            var5 = _closure1_slot13;
            var9 = undefined;
            var8 = var5.bind(var9)(var4);
            var7 = var8.bind(var9)();
            var5 = var7.done;
            if(var5) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var5 = var7.value;
            var11 = var5.id;
            var5 = var10.add;
            var5 = var5.bind(var10)(var11);
            var11 = var8.bind(var9)();
            var5 = var11.done;
            var7 = var11;
            if(!var5) { _fun0008_ip = 52; continue _fun0008 }
case 51:
            var5 = var2 != var6;
            var2 = null;
            if(!var5) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var5 = var6.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var6 = var1.push;
            var5 = new Array(0);
            var12 = 0;
            var14 = var5;
            var13 = var4;
            var7 = arraySpread(var14, var13, var12);
            var14 = var6;
            var13 = var5;
            var12 = var1;
            var5 = apply(var14, var13, var12);
            var2 = var1;
case 53:
            var1 = {};
            var5 = 'update';
            var1['op'] = var5;
            var1['writes'] = var4;
            var1['deletes'] = var3;
            var1['items'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function hydrateGuild(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot18;
            var1 = var2.id;
            var7 = undefined;
            var5 = var5.bind(var7)(var1);
            var6 = var2.data_mode;
            var1 = 'partial';
            if(!(var1 === var6)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
            var6 = null;
            if(!(var6 != var5)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
            var1 = {};
            var8 = var2.id;
            var1['id'] = var8;
            var8 = var2.data_mode;
            var1['dataMode'] = var8;
            var8 = {};
            var9 = 'update';
            var8['op'] = var9;
            var9 = var2.partial_updates;
            var12 = var9.channels;
            var10 = var6 == var12;
            var9 = undefined;
            if(var10) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var11 = var12.map;
            var10 = function(arg1) {
                var4 = _closure1_slot6;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var9 = var11.bind(var12)(var10);
case 59:
            if(!(var6 == var9)) { _fun0009_ip = 61; continue _fun0009 }
case 44:
            var9 = new Array(0);
case 61:
            var8['writes'] = var9;
            var9 = var2.partial_updates;
            var9 = var9.deleted_channel_ids;
            if(!(var6 == var9)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var9 = new Array(0);
case 62:
            var8['deletes'] = var9;
            var1['channels'] = var8;
            var8 = var2.channel_updates;
            var1['channelTimestampUpdates'] = var8;
            var11 = _closure1_slot19;
            var10 = var5.emojis;
            var8 = var2.partial_updates;
            var9 = var8.emojis;
            var8 = var2.partial_updates;
            var8 = var8.deleted_emoji_ids;
            var8 = var11.bind(var7)(var10, var9, var8);
            var1['emojis'] = var8;
            var8 = var2.guild_scheduled_events;
            var1['guild_scheduled_events'] = var8;
            var8 = var2.joined_at;
            var1['joined_at'] = var8;
            var8 = var2.last_messages;
            var1['lastMessages'] = var8;
            var8 = var2.member_count;
            var1['member_count'] = var8;
            var8 = var2.members;
            var1['members'] = var8;
            var8 = var2.premium_subscription_count;
            var1['premium_subscription_count'] = var8;
            var9 = var2.properties;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var8 = var9;
case 64:
            var1['properties'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var8 = 15;
            var8 = var10[var8];
            var13 = var9.bind(var7)(var8);
            var12 = var13.filterRoleDeletes;
            var17 = var2.id;
            var16 = var5.roles;
            var8 = var2.partial_updates;
            var15 = var8.roles;
            var8 = var2.partial_updates;
            var14 = var8.deleted_role_ids;
            var18 = var13;
            var8 = var18[var12](var17, var16, var15, var14, var13);
            var1['roles'] = var8;
            var8 = var2.stage_instances;
            var1['stage_instances'] = var8;
            var10 = _closure1_slot19;
            var9 = var5.stickers;
            var5 = var2.partial_updates;
            var8 = var5.stickers;
            var5 = var2.partial_updates;
            var5 = var5.deleted_sticker_ids;
            var5 = var10.bind(var7)(var9, var8, var5);
            var1['stickers'] = var5;
            var5 = var2.unable_to_sync_deletes;
            var1['unableToSyncDeletes'] = var5;
            var10 = var2.threads;
            var8 = var6 == var10;
            var5 = undefined;
            if(var8) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var9 = var10.map;
            var8 = function(arg1) {
                var4 = _closure1_slot6;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var5 = var9.bind(var10)(var8);
case 66:
            if(!(var6 == var5)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var5 = new Array(0);
case 68:
            var1['threads'] = var5;
            var6 = _closure1_slot22;
            var5 = var2.threads;
            var5 = var6.bind(var7)(var5);
            var1['threadMessages'] = var5;
            var5 = var2.version;
            var1['version'] = var5;
            var5 = var2.has_threads_subscription;
            var1['hasThreadsSubscription'] = var5;
            return var1;
case 57:
            var8 = _closure1_slot9;
            var6 = var8.log;
            var11 = var2.id;
            var1 = global;
            var5 = var1.HermesInternal;
            var10 = var5.concat;
            var9 = 'no cache entry for partial guild (guild: ';
            var5 = ', type: ready)';
            var5 = var10.bind(var9)(var11, var5);
            var5 = var6.bind(var8)(var5);
            var5 = var1.Error;
            var1 = 'Guild data was missing from store, but hash was still available.';
            var1 = var5.bind(var7)(var1);
            throw var1;
case 55:
            var1 = {};
            var5 = var2.id;
            var1['id'] = var5;
            var5 = var2.data_mode;
            var1['dataMode'] = var5;
            var6 = {};
            var5 = 'full_sync';
            var6['op'] = var5;
            var8 = var2.emojis;
            var6['items'] = var8;
            var1['emojis'] = var6;
            var6 = var2.guild_scheduled_events;
            var1['guild_scheduled_events'] = var6;
            var6 = var2.joined_at;
            var1['joined_at'] = var6;
            var6 = var2.last_messages;
            var1['lastMessages'] = var6;
            var6 = var2.member_count;
            var1['member_count'] = var6;
            var6 = var2.members;
            var1['members'] = var6;
            var6 = var2.premium_subscription_count;
            var1['premium_subscription_count'] = var6;
            var6 = var2.properties;
            var1['properties'] = var6;
            var6 = var2.roles;
            var1['roles'] = var6;
            var6 = var2.stage_instances;
            var1['stage_instances'] = var6;
            var6 = {};
            var6['op'] = var5;
            var8 = var2.stickers;
            var6['items'] = var8;
            var1['stickers'] = var6;
            var11 = var2.threads;
            var8 = null;
            var9 = var8 == var11;
            var6 = undefined;
            if(var9) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var10 = var11.map;
            var9 = function(arg1) {
                var4 = _closure1_slot6;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var6 = var10.bind(var11)(var9);
case 70:
            if(!(var8 == var6)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var6 = new Array(0);
case 72:
            var1['threads'] = var6;
            var6 = _closure1_slot22;
            var3 = var2.threads;
            var3 = var6.bind(var7)(var3);
            var1['threadMessages'] = var3;
            var3 = {};
            var3['op'] = var5;
            var6 = var2.channels;
            var5 = var6.map;
            var4 = function(arg1) {
                var4 = arg1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var4['guild_id'] = var2;
                var3 = _closure1_slot6;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var3['items'] = var4;
            var1['channels'] = var3;
            var3 = var2.version;
            var1['version'] = var3;
            var2 = var2.has_threads_subscription;
            var1['hasThreadsSubscription'] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var2 = function hydratePreviouslyUnavailableGuild(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var4;
            var5 = null;
            if(!(var5 == var6)) { _fun0010_ip = 74; continue _fun0010 }
case 75:
            var7 = _closure1_slot18;
            var2 = var4.id;
            var1 = undefined;
            var6 = var7.bind(var1)(var2);
case 74:
            var2 = var4.data_mode;
            var1 = 'partial';
            if(!(var1 === var2)) { _fun0010_ip = 76; continue _fun0010 }
case 58:
            if(!(var5 != var6)) { _fun0010_ip = 77; continue _fun0010 }
case 7:
            var1 = {};
            var2 = var4.id;
            var1['id'] = var2;
            var2 = {};
            var7 = 'update';
            var2['op'] = var7;
            var7 = var4.partial_updates;
            var11 = var7.channels;
            var9 = var5 == var11;
            var7 = undefined;
            var8 = undefined;
            if(var9) { _fun0010_ip = 78; continue _fun0010 }
case 79:
            var10 = var11.map;
            var9 = function(arg1) {
                var4 = _closure1_slot6;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var8 = var10.bind(var11)(var9);
case 78:
            if(!(var5 == var8)) { _fun0010_ip = 80; continue _fun0010 }
case 81:
            var8 = new Array(0);
case 80:
            var2['writes'] = var8;
            var8 = var4.partial_updates;
            var8 = var8.deleted_channel_ids;
            if(!(var5 == var8)) { _fun0010_ip = 82; continue _fun0010 }
case 83:
            var8 = new Array(0);
case 82:
            var2['deletes'] = var8;
            var1['channels'] = var2;
            var2 = var4.channel_updates;
            var1['channelTimestampUpdates'] = var2;
            var2 = var4.activity_instances;
            var1['activity_instances'] = var2;
            var11 = _closure1_slot19;
            var10 = var6.emojis;
            var8 = var4.partial_updates;
            var9 = var8.emojis;
            var8 = var4.partial_updates;
            var8 = var8.deleted_emoji_ids;
            var8 = var11.bind(var7)(var10, var9, var8);
            var1['emojis'] = var8;
            var8 = var4.guild_scheduled_events;
            var1['guild_scheduled_events'] = var8;
            var8 = var4.joined_at;
            var1['joined_at'] = var8;
            var8 = var4.last_messages;
            var1['lastMessages'] = var8;
            var8 = var4.member_count;
            var1['member_count'] = var8;
            var8 = var4.members;
            var1['members'] = var8;
            var8 = var4.premium_subscription_count;
            var1['premium_subscription_count'] = var8;
            var8 = var4.presences;
            var1['presences'] = var8;
            var8 = var4.properties;
            if(!(var5 == var8)) { _fun0010_ip = 84; continue _fun0010 }
case 8:
            var8 = var6.properties;
case 84:
            var1['properties'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var8 = 15;
            var8 = var10[var8];
            var13 = var9.bind(var7)(var8);
            var12 = var13.filterRoleDeletes;
            var17 = var4.id;
            var16 = var6.roles;
            var8 = var4.partial_updates;
            var15 = var8.roles;
            var8 = var4.partial_updates;
            var14 = var8.deleted_role_ids;
            var18 = var13;
            var8 = var18[var12](var17, var16, var15, var14, var13);
            var1['roles'] = var8;
            var8 = var4.stage_instances;
            var1['stage_instances'] = var8;
            var10 = _closure1_slot19;
            var9 = var6.stickers;
            var6 = var4.partial_updates;
            var8 = var6.stickers;
            var6 = var4.partial_updates;
            var6 = var6.deleted_sticker_ids;
            var6 = var10.bind(var7)(var9, var8, var6);
            var1['stickers'] = var6;
            var6 = var4.unable_to_sync_deletes;
            var1['unableToSyncDeletes'] = var6;
            var10 = var4.threads;
            var8 = var5 == var10;
            var6 = undefined;
            if(var8) { _fun0010_ip = 85; continue _fun0010 }
case 69:
            var9 = var10.map;
            var8 = function(arg1) {
                var4 = _closure1_slot6;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var6 = var9.bind(var10)(var8);
case 85:
            if(!(var5 == var6)) { _fun0010_ip = 86; continue _fun0010 }
case 87:
            var6 = new Array(0);
case 86:
            var1['threads'] = var6;
            var6 = _closure1_slot22;
            var2 = var4.threads;
            var2 = var6.bind(var7)(var2);
            var1['threadMessages'] = var2;
            var2 = var4.voice_states;
            var1['voice_states'] = var2;
            var2 = var4.version;
            var1['version'] = var2;
            var2 = var4.has_threads_subscription;
            var1['hasThreadsSubscription'] = var2;
            return var1;
case 77:
            var7 = _closure1_slot9;
            var6 = var7.log;
            var10 = var4.id;
            var1 = global;
            var2 = var1.HermesInternal;
            var9 = var2.concat;
            var8 = 'no cache entry for partial guild (guild: ';
            var2 = ', type: post_ready)';
            var2 = var9.bind(var8)(var10, var2);
            var2 = var6.bind(var7)(var2);
            var6 = var1.Error;
            var2 = undefined;
            var1 = 'Guild data was missing from store, but hash was still available.';
            var1 = var6.bind(var2)(var1);
            throw var1;
case 76:
            var1 = {};
            var2 = var4.id;
            var1['id'] = var2;
            var2 = var4.guild_scheduled_events;
            var1['guild_scheduled_events'] = var2;
            var2 = var4.joined_at;
            var1['joined_at'] = var2;
            var2 = var4.last_messages;
            var1['lastMessages'] = var2;
            var2 = var4.member_count;
            var1['member_count'] = var2;
            var2 = var4.members;
            var1['members'] = var2;
            var2 = var4.premium_subscription_count;
            var1['premium_subscription_count'] = var2;
            var2 = var4.properties;
            var1['properties'] = var2;
            var2 = var4.roles;
            var1['roles'] = var2;
            var2 = var4.stage_instances;
            var1['stage_instances'] = var2;
            var9 = var4.threads;
            var7 = var5 == var9;
            var6 = undefined;
            var2 = undefined;
            if(var7) { _fun0010_ip = 88; continue _fun0010 }
case 89:
            var8 = var9.map;
            var7 = function(arg1) {
                var4 = _closure1_slot6;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var8.bind(var9)(var7);
case 88:
            if(!(var5 == var2)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
            var2 = new Array(0);
case 90:
            var1['threads'] = var2;
            var5 = _closure1_slot22;
            var2 = var4.threads;
            var2 = var5.bind(var6)(var2);
            var1['threadMessages'] = var2;
            var2 = var4.presences;
            var1['presences'] = var2;
            var2 = var4.activity_instances;
            var1['activity_instances'] = var2;
            var2 = var4.voice_states;
            var1['voice_states'] = var2;
            var2 = var4.version;
            var1['version'] = var2;
            var2 = var4.has_threads_subscription;
            var1['hasThreadsSubscription'] = var2;
            var2 = {};
            var5 = 'full_sync';
            var2['op'] = var5;
            var6 = var4.emojis;
            var2['items'] = var6;
            var1['emojis'] = var2;
            var2 = {};
            var2['op'] = var5;
            var6 = var4.stickers;
            var2['items'] = var6;
            var1['stickers'] = var2;
            var2 = {};
            var2['op'] = var5;
            var5 = var4.channels;
            var4 = var5.map;
            var3 = function(arg1) {
                var4 = arg1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var4['guild_id'] = var2;
                var3 = _closure1_slot6;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var2['items'] = var3;
            var1['channels'] = var2;
            return var1;
        }
    };
    var _closure1_slot21 = var2;
    var1 = function collectThreadMessages(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = new Array(0);
            var6 = null;
            if(!(var6 != var3)) { _fun0011_ip = 92; continue _fun0011 }
case 93:
            var2 = _closure1_slot13;
            var5 = undefined;
            var4 = var2.bind(var5)(var3);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0011_ip = 92; continue _fun0011 }
case 94:
            var2 = var3.value;
            var7 = var2.most_recent_message;
            if(!(var6 != var7)) { _fun0011_ip = 35; continue _fun0011 }
case 58:
            var7 = var1.push;
            var2 = var2.most_recent_message;
            var2 = var7.bind(var1)(var2);
case 35:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0011_ip = 94; continue _fun0011 }
case 92:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.createChannelRecordFromServer;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'ReadyPayloadUtils';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot9 = var5;
    var5 = {};
    var _closure1_slot10 = var5;
    var5 = null;
    var _closure1_slot11 = var5;
    var5 = {};
    var _closure1_slot12 = var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/ReadyPayloadUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function hydrateReadySupplementalPayload(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var10 = var4.guilds;
            var1 = var4.merged_members;
            var _closure2_slot0 = var1;
            var8 = var4.merged_presences;
            var _closure2_slot1 = var8;
            var3 = {'guilds': 0, 'merged_members': 0, 'merged_presences': 0};
            var1 = null;
            var14 = var3;
            var13 = null;
            var2 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var4;
            var12 = var3;
            var2 = copyDataProperties(var14, var13, var12);
            var7 = _closure1_slot17;
            var4 = _closure1_slot12;
            var11 = var1 == var8;
            var9 = undefined;
            var3 = undefined;
            if(var11) { _fun0012_ip = 11; continue _fun0012 }
case 52:
            var3 = var8.friends;
case 11:
            var4 = var7.bind(var9)(var4, var3);
            var7 = var1 == var10;
            var3 = undefined;
            if(var7) { _fun0012_ip = 44; continue _fun0012 }
case 95:
            var8 = var10.map;
            var7 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var8 = arg2;
                    var6 = _closure1_slot17;
                    var4 = _closure1_slot12;
                    var3 = _closure2_slot1;
                    var9 = null;
                    var10 = var9 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var10) { _fun0013_ip = 96; continue _fun0013 }
case 74:
                    var10 = _closure2_slot1;
                    var10 = var10.guilds;
                    var3 = var10[var8];
case 96:
                    var4 = var6.bind(var5)(var4, var3);
                    var6 = _closure1_slot17;
                    var3 = _closure1_slot12;
                    var1 = _closure2_slot0;
                    var9 = var9 == var1;
                    var1 = undefined;
                    if(var9) { _fun0013_ip = 9; continue _fun0013 }
case 97:
                    var7 = _closure2_slot0;
                    var1 = var7[var8];
case 9:
                    var3 = var6.bind(var5)(var3, var1);
                    var1 = {};
                    var12 = var1;
                    var11 = var2;
                    var6 = copyDataProperties(var12, var11);
                    var2 = var2.voice_states;
                    var5 = var5 === var2;
                    var2 = 'unavailable';
                    var1[var2] = var5;
                    var2 = 'presences';
                    var1[var2] = var4;
                    var2 = 'members';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var7);
case 44:
            if(!(var1 == var3)) { _fun0012_ip = 98; continue _fun0012 }
case 61:
            var3 = new Array(0);
case 98:
            var8 = _closure1_slot15;
            var7 = arg2;
            var6 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.members;
                var1['members'] = var3;
                var3 = var2.presences;
                var1['presences'] = var3;
                var3 = var2.activity_instances;
                var1['activity_instances'] = var3;
                var2 = var2.voice_states;
                var1['voice_states'] = var2;
                var2 = false;
                var1['unavailable'] = var2;
                return var1;
            };
            var6 = var8.bind(var9)(var7, var10, var6);
            if(!(var1 != var6)) { _fun0012_ip = 99; continue _fun0012 }
case 100:
            var1 = var3.push;
            var1 = var1.bind(var3)(var6);
case 99:
            var1 = {};
            _closure1_slot12 = var1;
            var1 = {};
            var14 = var1;
            var13 = var2;
            var2 = copyDataProperties(var14, var13);
            var2 = 'presences';
            var1[var2] = var4;
            var2 = 'guilds';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['hydrateReadySupplementalPayload'] = var5;
    var5 = function preloadReadyPayloadData() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var3 = 6;
            var3 = var2[var3];
            var7 = undefined;
            var4 = var4.bind(var7)(var3);
            var3 = var4.database;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var5 = 7;
            var2 = var2[var5];
            var4 = var4.bind(var7)(var2);
            var2 = var4.isCacheEnabled;
            var2 = var2.bind(var4)();
            if(var2) { _fun0014_ip = 101; continue _fun0014 }
case 102:
            var2 = global;
            var6 = var2.Promise;
            var4 = var6.resolve;
            var2 = {};
            var6 = var4.bind(var6)(var2);
            _fun0014_ip = 103; continue _fun0014;
case 101:
            var4 = _closure1_slot1;
            var8 = _closure1_slot3;
            var2 = 8;
            var2 = var8[var2];
            var4 = var4.bind(var7)(var2);
            var2 = var4.getCommittedVersions;
            var6 = var2.bind(var4)();
case 103:
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var4 = var4.bind(var7)(var2);
            var2 = var4.isCacheEnabled;
            var2 = var2.bind(var4)();
            if(var2) { _fun0014_ip = 104; continue _fun0014 }
case 105:
            var2 = global;
            var5 = var2.Promise;
            var4 = var5.resolve;
            var2 = var2.Set;
            var8 = var2.prototype;
            var8 = Object.create(var8, {constructor: {value: var2}});
            var10 = var8;
            var2 = new var10[var2](var9);
            var2 = var2 instanceof Object ? var2 : var8;
            var5 = var4.bind(var5)(var2);
            _fun0014_ip = 106; continue _fun0014;
case 104:
            var4 = _closure1_slot1;
            var8 = _closure1_slot3;
            var2 = 9;
            var2 = var8[var2];
            var4 = var4.bind(var7)(var2);
            var2 = var4.getGuildIds;
            var5 = var2.bind(var4)();
case 106:
            var2 = null;
            if(!(var2 == var3)) { _fun0014_ip = 107; continue _fun0014 }
case 108:
            var2 = global;
            var8 = var2.Promise;
            var4 = var8.resolve;
            var2 = false;
            var4 = var4.bind(var8)(var2);
            _fun0014_ip = 109; continue _fun0014;
case 107:
            var2 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 10;
            var1 = var8[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.okAsync;
            var4 = var1.bind(var2)(var3);
case 109:
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.all;
            var1 = new Array(3);
            var1[0] = var6;
            var1[1] = var5;
            var1[2] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var6 = arg1;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var2 = var6().value;
                    var3 = var1;
                    var8 = undefined;
                    var5 = var3 === var8;
                    var4 = undefined;
                    if(var5) { _fun0015_ip = 110; continue _fun0015 }
case 111:
                    var4 = var2;
case 110:
                    var3 = undefined;
                    if(var5) { _fun0015_ip = 112; continue _fun0015 }
case 113:
                    var7 = var6().value;
                    var2 = var1;
                    var2 = var2 === var8;
                    var3 = undefined;
                    var5 = var2;
                    if(var2) { _fun0015_ip = 112; continue _fun0015 }
case 96:
                    var3 = var7;
                    var5 = var2;
case 112:
                    var2 = undefined;
                    if(var5) { _fun0015_ip = 101; continue _fun0015 }
case 114:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var8;
                    var2 = undefined;
                    var5 = var6;
                    if(var6) { _fun0015_ip = 101; continue _fun0015 }
case 115:
                    var2 = var7;
                    var5 = var6;
case 101:
                    if(var5) { _fun0015_ip = 116; continue _fun0015 }
case 52:
                    var1.return();
case 116:
                    var1 = {};
                    var1['guildVersions'] = var4;
                    var1['guildChannels'] = var3;
                    var1['databaseOk'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['preloadReadyPayloadData'] = var5;
    var5 = function hydrateReadyPayloadPrioritized(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var6 = arg1;
            var16 = arg3;
            var7 = var6.users;
            var9 = var6.relationships;
            var3 = var6.private_channels;
            var2 = var6.merged_members;
            var _closure2_slot0 = var2;
            var11 = var6.guilds;
            var5 = {'users': 0, 'relationships': 0, 'private_channels': 0, 'merged_members': 0, 'guilds': 0};
            var2 = null;
            var25 = var5;
            var24 = null;
            var4 = silentSetPrototypeOf(var25, var24);
            var25 = {};
            var24 = var6;
            var23 = var5;
            var4 = copyDataProperties(var25, var24, var23);
            var6 = _closure1_slot1;
            var10 = _closure1_slot3;
            var5 = 6;
            var5 = var10[var5];
            var10 = undefined;
            var6 = var6.bind(var10)(var5);
            var5 = var6.database;
            var5 = var5.bind(var6)();
            var5 = var2 != var5;
            if(!var5) { _fun0016_ip = 117; continue _fun0016 }
case 118:
            var12 = var16.databaseOk;
            var6 = false;
            var5 = var6 === var12;
case 117:
            if(!var5) { _fun0016_ip = 119; continue _fun0016 }
case 98:
            var6 = _closure1_slot1;
            var12 = _closure1_slot3;
            var5 = 14;
            var5 = var12[var5];
            var12 = var6.bind(var10)(var5);
            var6 = var12.replaceDisableAllDatabases;
            var5 = 'ReadyPayloadUtils: database was not ok';
            var5 = var6.bind(var12)(var5);
case 119:
            var5 = {};
            _closure1_slot10 = var5;
            var6 = _closure1_slot8;
            var5 = var6.getGuildsArray;
            var6 = var5.bind(var6)();
            var12 = _closure1_slot5;
            var5 = var12.getRawStickersByGuild;
            var15 = var5.bind(var12)();
            var5 = _closure1_slot13;
            var14 = var5.bind(var10)(var6);
            var6 = var14.bind(var10)();
            var5 = var6.done;
            var13 = 13;
            var12 = var6;
            var6 = undefined;
            if(var5) { _fun0016_ip = 120; continue _fun0016 }
case 121:
            var5 = var12.value;
            var18 = var5.id;
            var17 = var16.guildVersions;
            var17 = var18 in var17;
            if(!var17) { _fun0016_ip = 10; continue _fun0016 }
case 122:
            var20 = var16.guildChannels;
            var19 = var20.has;
            var18 = var5.id;
            var17 = var19.bind(var20)(var18);
case 10:
            if(!var17) { _fun0016_ip = 123; continue _fun0016 }
case 25:
            var19 = _closure1_slot10;
            var18 = var5.id;
            var17 = {};
            var21 = _closure1_slot2;
            var20 = _closure1_slot3;
            var20 = var20[var13];
            var21 = var21.bind(var10)(var20);
            var20 = var21.toGuildProperties;
            var20 = var20.bind(var21)(var5);
            var17['properties'] = var20;
            var22 = _closure1_slot7;
            var21 = var22.getRolesSnapshot;
            var20 = var5.id;
            var20 = var21.bind(var22)(var20);
            var17['roles'] = var20;
            var21 = _closure1_slot16;
            var20 = var5.id;
            var20 = var21.bind(var10)(var20);
            var17['emojis'] = var20;
            var20 = var15.get;
            var5 = var5.id;
            var5 = var20.bind(var15)(var5);
            var21 = var2 != var5;
            var20 = null;
            if(!var21) { _fun0016_ip = 124; continue _fun0016 }
case 125:
            var20 = var5;
case 124:
            var17['stickers'] = var20;
            var19[var18] = var17;
            var6 = var5;
case 123:
            var17 = var14.bind(var10)();
            var5 = var17.done;
            var12 = var17;
            if(!var5) { _fun0016_ip = 121; continue _fun0016 }
case 120:
            var6 = _closure1_slot17;
            var12 = _closure1_slot1;
            var13 = _closure1_slot3;
            var5 = 11;
            var5 = var13[var5];
            var13 = var12.bind(var10)(var5);
            var12 = var13.keyBy;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5 = var12.bind(var13)(var7, var5);
            _closure1_slot12 = var5;
            var6 = var6.bind(var10)(var5, var9);
            if(!(var2 != var3)) { _fun0016_ip = 126; continue _fun0016 }
case 127:
            var9 = var3.forEach;
            var5 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.recipient_ids;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0017_ip = 38; continue _fun0017 }
case 128:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 12;
                        var3 = var5[var3];
                        var6 = undefined;
                        var5 = var4.bind(var6)(var3);
                        var3 = _closure1_slot12;
                        var4 = var3[var2];
                        var3 = null;
                        var4 = var3 != var4;
                        var3 = 'Missing user in compressed ready payload';
                        var3 = var5.bind(var6)(var4, var3);
                        var1 = _closure1_slot12;
                        var1 = var1[var2];
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1['recipients'] = var2;
case 38:
                    var1 = delete var1.recipient_ids;
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var9.bind(var3)(var5);
case 126:
            var9 = var2 == var11;
            var5 = undefined;
            if(var9) { _fun0016_ip = 129; continue _fun0016 }
case 130:
            var12 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.unavailable;
                    var2 = true;
                    var1 = var4;
                    if(!(var2 !== var3)) { _fun0018_ip = 115; continue _fun0018 }
case 75:
                    var7 = _closure1_slot17;
                    var6 = _closure1_slot12;
                    var5 = _closure2_slot0;
                    var3 = null;
                    var9 = var3 == var5;
                    var3 = undefined;
                    var5 = undefined;
                    if(var9) { _fun0018_ip = 131; continue _fun0018 }
case 5:
                    var9 = _closure2_slot0;
                    var8 = arg2;
                    var5 = var9[var8];
case 131:
                    var5 = var7.bind(var3)(var6, var5);
                    var4['members'] = var5;
                    var2 = _closure1_slot20;
                    var1 = var2.bind(var3)(var4);
case 115:
                    return var1;
                }
            };
            var5 = var12.bind(var11)(var9);
case 129:
            if(!(var2 == var5)) { _fun0016_ip = 132; continue _fun0016 }
case 133:
            var5 = new Array(0);
case 132:
            var9 = _closure1_slot15;
            var8 = arg2;
            var1 = function(arg1) {
                var3 = _closure1_slot20;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var8 = var9.bind(var10)(var8, var11, var1);
            if(!(var2 != var8)) { _fun0016_ip = 134; continue _fun0016 }
case 135:
            var1 = var5.push;
            var1 = var1.bind(var5)(var8);
case 134:
            var1 = {};
            var25 = var1;
            var24 = var4;
            var4 = copyDataProperties(var25, var24);
            var4 = 'users';
            var1[var4] = var7;
            var7 = new Array(0);
            var4 = 'presences';
            var1[var4] = var7;
            var4 = 'relationships';
            var1[var4] = var6;
            var4 = 'guilds';
            var1[var4] = var5;
            if(!(var2 == var3)) { _fun0016_ip = 136; continue _fun0016 }
case 137:
            var3 = new Array(0);
case 136:
            var2 = 'private_channels';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['hydrateReadyPayloadPrioritized'] = var5;
    var4 = function hydrateInitialGuild(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot8;
            var2 = var5.getGuild;
            var1 = var4.id;
            var8 = var2.bind(var5)(var1);
            var5 = _closure1_slot21;
            var7 = null;
            var6 = var7 == var8;
            var2 = undefined;
            var1 = undefined;
            if(var6) { _fun0019_ip = 138; continue _fun0019 }
case 56:
            var6 = {};
            var10 = _closure1_slot2;
            var11 = _closure1_slot3;
            var9 = 13;
            var9 = var11[var9];
            var10 = var10.bind(var2)(var9);
            var9 = var10.toGuildProperties;
            var9 = var9.bind(var10)(var8);
            var6['properties'] = var9;
            var11 = _closure1_slot7;
            var10 = var11.getRolesSnapshot;
            var9 = var8.id;
            var9 = var10.bind(var11)(var9);
            var6['roles'] = var9;
            var10 = _closure1_slot16;
            var9 = var8.id;
            var9 = var10.bind(var2)(var9);
            var6['emojis'] = var9;
            var10 = _closure1_slot5;
            var9 = var10.getRawStickersByGuild;
            var10 = var9.bind(var10)();
            var9 = var10.get;
            var8 = var8.id;
            var8 = var9.bind(var10)(var8);
            var9 = var7 != var8;
            var7 = null;
            if(!var9) { _fun0019_ip = 139; continue _fun0019 }
case 140:
            var7 = var8;
case 139:
            var6['stickers'] = var7;
            var1 = var6;
case 138:
            var1 = var5.bind(var2)(var4, var1);
            var2 = {};
            var2['guild'] = var4;
            var4 = arg2;
            var2['identifyTime'] = var4;
            _closure1_slot11 = var2;
            return var1;
        }
    };
    var3['hydrateInitialGuild'] = var4;
    var3['hydratePreviouslyUnavailableGuild'] = var2;
    return var1;
})();