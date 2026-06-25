// app/utils/ReadyPayloadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var1 = function maybeIncludeInitialGuild(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg2;
            var1 = _closure1_slot4;
            var4 = null;
            var3 = var4 == var1;
            var1 = null;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = _closure1_slot4;
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
                var1 = _closure1_slot4;
                var1 = var1.guild;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            var1 = null;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 39:
            var2 = _closure1_slot4;
            var4 = var2.guild;
            var3 = arg3;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 36:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function restoreUsers(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var2 = var3.user_id;
                    if(!(var5 != var2)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 8;
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
case 45:
                    var1 = delete var3.user_id;
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 41:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function hydrateGuild(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = var3.data_mode;
            var1 = 'partial';
            if(!(var1 === var2)) { _fun0007_ip = 47; continue _fun0007 }
case 42:
            var1 = {};
            var2 = var3.id;
            var1['id'] = var2;
            var2 = var3.data_mode;
            var1['dataMode'] = var2;
            var2 = {};
            var7 = 'update';
            var2['op'] = var7;
            var4 = var3.partial_updates;
            var11 = var4.channels;
            var4 = null;
            var9 = var4 == var11;
            var6 = undefined;
            var8 = undefined;
            if(var9) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var10 = var11.map;
            var9 = function(arg1) {
                var4 = _closure1_slot3;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var8 = var10.bind(var11)(var9);
case 48:
            if(!(var4 == var8)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var8 = new Array(0);
case 50:
            var2['writes'] = var8;
            var8 = var3.partial_updates;
            var8 = var8.deleted_channel_ids;
            if(!(var4 == var8)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var8 = new Array(0);
case 52:
            var2['deletes'] = var8;
            var1['channels'] = var2;
            var2 = var3.channel_updates;
            var1['channelTimestampUpdates'] = var2;
            var2 = {};
            var2['op'] = var7;
            var8 = var3.partial_updates;
            var8 = var8.emojis;
            if(!(var4 == var8)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var8 = new Array(0);
case 54:
            var2['writes'] = var8;
            var8 = var3.partial_updates;
            var8 = var8.deleted_emoji_ids;
            if(!(var4 == var8)) { _fun0007_ip = 22; continue _fun0007 }
case 56:
            var8 = new Array(0);
case 22:
            var2['deletes'] = var8;
            var1['emojis'] = var2;
            var2 = var3.guild_scheduled_events;
            var1['guild_scheduled_events'] = var2;
            var2 = var3.experiments;
            var1['experiments'] = var2;
            var2 = var3.joined_at;
            var1['joined_at'] = var2;
            var2 = var3.last_messages;
            var1['lastMessages'] = var2;
            var2 = var3.member_count;
            var1['member_count'] = var2;
            var2 = var3.members;
            var1['members'] = var2;
            var2 = var3.premium_subscription_count;
            var1['premium_subscription_count'] = var2;
            var8 = var3.properties;
            var9 = var4 != var8;
            var2 = null;
            if(!var9) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var2 = var8;
case 57:
            var1['properties'] = var2;
            var2 = {};
            var2['op'] = var7;
            var8 = var3.partial_updates;
            var8 = var8.roles;
            if(!(var4 == var8)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var8 = new Array(0);
case 59:
            var2['writes'] = var8;
            var8 = var3.partial_updates;
            var8 = var8.deleted_role_ids;
            if(!(var4 == var8)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var8 = new Array(0);
case 61:
            var2['deletes'] = var8;
            var1['roles'] = var2;
            var2 = var3.stage_instances;
            var1['stage_instances'] = var2;
            var2 = {};
            var2['op'] = var7;
            var7 = var3.partial_updates;
            var7 = var7.stickers;
            if(!(var4 == var7)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var7 = new Array(0);
case 63:
            var2['writes'] = var7;
            var7 = var3.partial_updates;
            var7 = var7.deleted_sticker_ids;
            if(!(var4 == var7)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var7 = new Array(0);
case 65:
            var2['deletes'] = var7;
            var1['stickers'] = var2;
            var2 = var3.unable_to_sync_deletes;
            var1['unableToSyncDeletes'] = var2;
            var9 = var3.threads;
            var7 = var4 == var9;
            var2 = undefined;
            if(var7) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var8 = var9.map;
            var7 = function(arg1) {
                var4 = _closure1_slot3;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var8.bind(var9)(var7);
case 67:
            if(!(var4 == var2)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var2 = new Array(0);
case 69:
            var1['threads'] = var2;
            var4 = _closure1_slot12;
            var2 = var3.threads;
            var2 = var4.bind(var6)(var2);
            var1['threadMessages'] = var2;
            var2 = var3.version;
            var1['version'] = var2;
            var2 = var3.has_threads_subscription;
            var1['hasThreadsSubscription'] = var2;
            _fun0007_ip = 71; continue _fun0007;
case 47:
            var2 = {};
            var4 = var3.id;
            var2['id'] = var4;
            var4 = var3.data_mode;
            var2['dataMode'] = var4;
            var4 = {};
            var6 = 'full_sync';
            var4['op'] = var6;
            var7 = var3.emojis;
            var4['items'] = var7;
            var2['emojis'] = var4;
            var4 = var3.guild_scheduled_events;
            var2['guild_scheduled_events'] = var4;
            var4 = var3.experiments;
            var2['experiments'] = var4;
            var4 = var3.joined_at;
            var2['joined_at'] = var4;
            var4 = var3.last_messages;
            var2['lastMessages'] = var4;
            var4 = var3.member_count;
            var2['member_count'] = var4;
            var4 = var3.members;
            var2['members'] = var4;
            var4 = var3.premium_subscription_count;
            var2['premium_subscription_count'] = var4;
            var4 = var3.properties;
            var2['properties'] = var4;
            var4 = {};
            var4['op'] = var6;
            var7 = var3.roles;
            var4['items'] = var7;
            var2['roles'] = var4;
            var4 = var3.stage_instances;
            var2['stage_instances'] = var4;
            var4 = {};
            var4['op'] = var6;
            var7 = var3.stickers;
            var4['items'] = var7;
            var2['stickers'] = var4;
            var11 = var3.threads;
            var7 = null;
            var9 = var7 == var11;
            var8 = undefined;
            var4 = undefined;
            if(var9) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var10 = var11.map;
            var9 = function(arg1) {
                var4 = _closure1_slot3;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var4 = var10.bind(var11)(var9);
case 72:
            if(!(var7 == var4)) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var4 = new Array(0);
case 74:
            var2['threads'] = var4;
            var7 = _closure1_slot12;
            var4 = var3.threads;
            var4 = var7.bind(var8)(var4);
            var2['threadMessages'] = var4;
            var4 = {};
            var4['op'] = var6;
            var7 = var3.channels;
            var6 = var7.map;
            var5 = function(arg1) {
                var4 = arg1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var4['guild_id'] = var2;
                var3 = _closure1_slot3;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var4['items'] = var5;
            var2['channels'] = var4;
            var4 = var3.version;
            var2['version'] = var4;
            var3 = var3.has_threads_subscription;
            var2['hasThreadsSubscription'] = var3;
            var1 = var2;
case 71:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = function hydratePreviouslyUnavailableGuild(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var2 = var5.data_mode;
            var1 = 'partial';
            if(!(var1 === var2)) { _fun0008_ip = 76; continue _fun0008 }
case 42:
            var1 = {};
            var2 = var5.id;
            var1['id'] = var2;
            var2 = {};
            var7 = 'update';
            var2['op'] = var7;
            var3 = var5.partial_updates;
            var11 = var3.channels;
            var3 = null;
            var9 = var3 == var11;
            var6 = undefined;
            var8 = undefined;
            if(var9) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var10 = var11.map;
            var9 = function(arg1) {
                var4 = _closure1_slot3;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var8 = var10.bind(var11)(var9);
case 77:
            if(!(var3 == var8)) { _fun0008_ip = 79; continue _fun0008 }
case 80:
            var8 = new Array(0);
case 79:
            var2['writes'] = var8;
            var8 = var5.partial_updates;
            var8 = var8.deleted_channel_ids;
            if(!(var3 == var8)) { _fun0008_ip = 81; continue _fun0008 }
case 82:
            var8 = new Array(0);
case 81:
            var2['deletes'] = var8;
            var1['channels'] = var2;
            var2 = var5.channel_updates;
            var1['channelTimestampUpdates'] = var2;
            var2 = var5.activity_instances;
            var1['activity_instances'] = var2;
            var2 = {};
            var2['op'] = var7;
            var8 = var5.partial_updates;
            var8 = var8.emojis;
            if(!(var3 == var8)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var8 = new Array(0);
case 54:
            var2['writes'] = var8;
            var8 = var5.partial_updates;
            var8 = var8.deleted_emoji_ids;
            if(!(var3 == var8)) { _fun0008_ip = 22; continue _fun0008 }
case 56:
            var8 = new Array(0);
case 22:
            var2['deletes'] = var8;
            var1['emojis'] = var2;
            var2 = var5.guild_scheduled_events;
            var1['guild_scheduled_events'] = var2;
            var2 = var5.experiments;
            var1['experiments'] = var2;
            var2 = var5.joined_at;
            var1['joined_at'] = var2;
            var2 = var5.last_messages;
            var1['lastMessages'] = var2;
            var2 = var5.member_count;
            var1['member_count'] = var2;
            var2 = var5.members;
            var1['members'] = var2;
            var2 = var5.premium_subscription_count;
            var1['premium_subscription_count'] = var2;
            var2 = var5.presences;
            var1['presences'] = var2;
            var8 = var5.properties;
            var9 = var3 != var8;
            var2 = null;
            if(!var9) { _fun0008_ip = 83; continue _fun0008 }
case 84:
            var2 = var8;
case 83:
            var1['properties'] = var2;
            var2 = {};
            var2['op'] = var7;
            var8 = var5.partial_updates;
            var8 = var8.roles;
            if(!(var3 == var8)) { _fun0008_ip = 85; continue _fun0008 }
case 86:
            var8 = new Array(0);
case 85:
            var2['writes'] = var8;
            var8 = var5.partial_updates;
            var8 = var8.deleted_role_ids;
            if(!(var3 == var8)) { _fun0008_ip = 87; continue _fun0008 }
case 88:
            var8 = new Array(0);
case 87:
            var2['deletes'] = var8;
            var1['roles'] = var2;
            var2 = var5.stage_instances;
            var1['stage_instances'] = var2;
            var2 = {};
            var2['op'] = var7;
            var7 = var5.partial_updates;
            var7 = var7.stickers;
            if(!(var3 == var7)) { _fun0008_ip = 89; continue _fun0008 }
case 90:
            var7 = new Array(0);
case 89:
            var2['writes'] = var7;
            var7 = var5.partial_updates;
            var7 = var7.deleted_sticker_ids;
            if(!(var3 == var7)) { _fun0008_ip = 91; continue _fun0008 }
case 92:
            var7 = new Array(0);
case 91:
            var2['deletes'] = var7;
            var1['stickers'] = var2;
            var2 = var5.unable_to_sync_deletes;
            var1['unableToSyncDeletes'] = var2;
            var9 = var5.threads;
            var7 = var3 == var9;
            var2 = undefined;
            if(var7) { _fun0008_ip = 93; continue _fun0008 }
case 94:
            var8 = var9.map;
            var7 = function(arg1) {
                var4 = _closure1_slot3;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var8.bind(var9)(var7);
case 93:
            if(!(var3 == var2)) { _fun0008_ip = 95; continue _fun0008 }
case 96:
            var2 = new Array(0);
case 95:
            var1['threads'] = var2;
            var3 = _closure1_slot12;
            var2 = var5.threads;
            var2 = var3.bind(var6)(var2);
            var1['threadMessages'] = var2;
            var2 = var5.voice_states;
            var1['voice_states'] = var2;
            var2 = var5.version;
            var1['version'] = var2;
            var2 = var5.has_threads_subscription;
            var1['hasThreadsSubscription'] = var2;
            _fun0008_ip = 97; continue _fun0008;
case 76:
            var2 = {};
            var3 = var5.id;
            var2['id'] = var3;
            var3 = var5.guild_scheduled_events;
            var2['guild_scheduled_events'] = var3;
            var3 = var5.experiments;
            var2['experiments'] = var3;
            var3 = var5.joined_at;
            var2['joined_at'] = var3;
            var3 = var5.last_messages;
            var2['lastMessages'] = var3;
            var3 = var5.member_count;
            var2['member_count'] = var3;
            var3 = var5.members;
            var2['members'] = var3;
            var3 = var5.premium_subscription_count;
            var2['premium_subscription_count'] = var3;
            var3 = var5.properties;
            var2['properties'] = var3;
            var3 = {};
            var6 = 'full_sync';
            var3['op'] = var6;
            var7 = var5.roles;
            var3['items'] = var7;
            var2['roles'] = var3;
            var3 = var5.stage_instances;
            var2['stage_instances'] = var3;
            var11 = var5.threads;
            var7 = null;
            var9 = var7 == var11;
            var8 = undefined;
            var3 = undefined;
            if(var9) { _fun0008_ip = 98; continue _fun0008 }
case 99:
            var10 = var11.map;
            var9 = function(arg1) {
                var4 = _closure1_slot3;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var3 = var10.bind(var11)(var9);
case 98:
            if(!(var7 == var3)) { _fun0008_ip = 100; continue _fun0008 }
case 101:
            var3 = new Array(0);
case 100:
            var2['threads'] = var3;
            var7 = _closure1_slot12;
            var3 = var5.threads;
            var3 = var7.bind(var8)(var3);
            var2['threadMessages'] = var3;
            var3 = var5.presences;
            var2['presences'] = var3;
            var3 = var5.activity_instances;
            var2['activity_instances'] = var3;
            var3 = var5.voice_states;
            var2['voice_states'] = var3;
            var3 = var5.version;
            var2['version'] = var3;
            var3 = var5.has_threads_subscription;
            var2['hasThreadsSubscription'] = var3;
            var3 = {};
            var3['op'] = var6;
            var7 = var5.emojis;
            var3['items'] = var7;
            var2['emojis'] = var3;
            var3 = {};
            var3['op'] = var6;
            var7 = var5.stickers;
            var3['items'] = var7;
            var2['stickers'] = var3;
            var3 = {};
            var3['op'] = var6;
            var6 = var5.channels;
            var5 = var6.map;
            var4 = function(arg1) {
                var4 = arg1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var4['guild_id'] = var2;
                var3 = _closure1_slot3;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var3['items'] = var4;
            var2['channels'] = var3;
            var1 = var2;
case 97:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = function collectThreadMessages(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var1 = new Array(0);
            var6 = null;
            if(!(var6 != var3)) { _fun0009_ip = 102; continue _fun0009 }
case 103:
            var2 = _closure1_slot6;
            var5 = undefined;
            var4 = var2.bind(var5)(var3);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0009_ip = 102; continue _fun0009 }
case 104:
            var2 = var3.value;
            var7 = var2.most_recent_message;
            if(!(var6 != var7)) { _fun0009_ip = 35; continue _fun0009 }
case 105:
            var7 = var1.push;
            var2 = var2.most_recent_message;
            var2 = var7.bind(var1)(var2);
case 35:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0009_ip = 104; continue _fun0009 }
case 102:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.createChannelRecordFromServer;
    var _closure1_slot3 = var5;
    var5 = null;
    var _closure1_slot4 = var5;
    var5 = {};
    var _closure1_slot5 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/ReadyPayloadUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function hydrateReadySupplementalPayload(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
            var7 = _closure1_slot9;
            var4 = _closure1_slot5;
            var11 = var1 == var8;
            var9 = undefined;
            var3 = undefined;
            if(var11) { _fun0010_ip = 106; continue _fun0010 }
case 9:
            var3 = var8.friends;
case 106:
            var4 = var7.bind(var9)(var4, var3);
            var7 = var1 == var10;
            var3 = undefined;
            if(var7) { _fun0010_ip = 107; continue _fun0010 }
case 108:
            var8 = var10.map;
            var7 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = arg1;
                    var8 = arg2;
                    var6 = _closure1_slot9;
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot1;
                    var9 = null;
                    var10 = var9 == var3;
                    var5 = undefined;
                    var3 = undefined;
                    if(var10) { _fun0011_ip = 109; continue _fun0011 }
case 110:
                    var10 = _closure2_slot1;
                    var10 = var10.guilds;
                    var3 = var10[var8];
case 109:
                    var4 = var6.bind(var5)(var4, var3);
                    var6 = _closure1_slot9;
                    var3 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var9 = var9 == var1;
                    var1 = undefined;
                    if(var9) { _fun0011_ip = 9; continue _fun0011 }
case 111:
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
                    var1[1] = var5;
                    var2 = 'presences';
                    var1[1] = var4;
                    var2 = 'members';
                    var1[1] = var3;
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var7);
case 107:
            if(!(var1 == var3)) { _fun0010_ip = 112; continue _fun0010 }
case 43:
            var3 = new Array(0);
case 112:
            var8 = _closure1_slot8;
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
            if(!(var1 != var6)) { _fun0010_ip = 113; continue _fun0010 }
case 114:
            var1 = var3.push;
            var1 = var1.bind(var3)(var6);
case 113:
            var1 = {};
            _closure1_slot5 = var1;
            var1 = {};
            var14 = var1;
            var13 = var2;
            var2 = copyDataProperties(var14, var13);
            var2 = 'presences';
            var1[1] = var4;
            var2 = 'guilds';
            var1[1] = var3;
            return var1;
        }
    };
    var3['hydrateReadySupplementalPayload'] = var5;
    var5 = function preloadReadyPayloadData() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 1;
            var3 = var2[var3];
            var7 = undefined;
            var4 = var4.bind(var7)(var3);
            var3 = var4.database;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var5 = 2;
            var2 = var2[var5];
            var4 = var4.bind(var7)(var2);
            var2 = var4.isCacheEnabled;
            var2 = var2.bind(var4)();
            if(var2) { _fun0012_ip = 9; continue _fun0012 }
case 115:
            var2 = global;
            var6 = var2.Promise;
            var4 = var6.resolve;
            var2 = {};
            var6 = var4.bind(var6)(var2);
            _fun0012_ip = 116; continue _fun0012;
case 9:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var4 = var4.bind(var7)(var2);
            var2 = var4.getCommittedVersions;
            var6 = var2.bind(var4)();
case 116:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var4 = var4.bind(var7)(var2);
            var2 = var4.isCacheEnabled;
            var2 = var2.bind(var4)();
            if(var2) { _fun0012_ip = 117; continue _fun0012 }
case 118:
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
            _fun0012_ip = 119; continue _fun0012;
case 117:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var4 = var4.bind(var7)(var2);
            var2 = var4.getGuildIds;
            var5 = var2.bind(var4)();
case 119:
            var2 = null;
            if(!(var2 == var3)) { _fun0012_ip = 120; continue _fun0012 }
case 121:
            var2 = global;
            var8 = var2.Promise;
            var4 = var8.resolve;
            var2 = false;
            var4 = var4.bind(var8)(var2);
            _fun0012_ip = 122; continue _fun0012;
case 120:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.okAsync;
            var4 = var1.bind(var2)(var3);
case 122:
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
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var6 = arg1;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var2 = var6().value;
                    var3 = var1;
                    var8 = undefined;
                    var5 = var3 === var8;
                    var4 = undefined;
                    if(var5) { _fun0013_ip = 123; continue _fun0013 }
case 124:
                    var4 = var2;
case 123:
                    var3 = undefined;
                    if(var5) { _fun0013_ip = 125; continue _fun0013 }
case 126:
                    var7 = var6().value;
                    var2 = var1;
                    var2 = var2 === var8;
                    var3 = undefined;
                    var5 = var2;
                    if(var2) { _fun0013_ip = 125; continue _fun0013 }
case 109:
                    var3 = var7;
                    var5 = var2;
case 125:
                    var2 = undefined;
                    if(var5) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var8;
                    var2 = undefined;
                    var5 = var6;
                    if(var6) { _fun0013_ip = 127; continue _fun0013 }
case 129:
                    var2 = var7;
                    var5 = var6;
case 127:
                    if(var5) { _fun0013_ip = 80; continue _fun0013 }
case 130:
                    var1.return();
case 80:
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var7 = arg1;
            var6 = var7.users;
            var3 = var7.private_channels;
            var2 = var7.merged_members;
            var _closure2_slot0 = var2;
            var10 = var7.guilds;
            var5 = {'users': 0, 'private_channels': 0, 'merged_members': 0, 'guilds': 0};
            var2 = null;
            var14 = var5;
            var13 = null;
            var4 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var7;
            var12 = var5;
            var4 = copyDataProperties(var14, var13, var12);
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 1;
            var5 = var9[var5];
            var9 = undefined;
            var8 = var8.bind(var9)(var5);
            var5 = var8.database;
            var5 = var5.bind(var8)();
            var5 = var2 != var5;
            if(!var5) { _fun0014_ip = 131; continue _fun0014 }
case 132:
            var8 = arg3;
            var11 = var8.databaseOk;
            var8 = false;
            var5 = var8 === var11;
case 131:
            if(!var5) { _fun0014_ip = 113; continue _fun0014 }
case 133:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 6;
            var5 = var11[var5];
            var11 = var8.bind(var9)(var5);
            var8 = var11.replaceDisableAllDatabases;
            var5 = 'ReadyPayloadUtils: database was not ok';
            var5 = var8.bind(var11)(var5);
case 113:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 7;
            var5 = var11[var5];
            var11 = var8.bind(var9)(var5);
            var8 = var11.keyBy;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5 = var8.bind(var11)(var6, var5);
            _closure1_slot5 = var5;
            if(!(var2 != var3)) { _fun0014_ip = 134; continue _fun0014 }
case 135:
            var8 = var3.forEach;
            var5 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.recipient_ids;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0015_ip = 38; continue _fun0015 }
case 136:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 8;
                        var3 = var5[var3];
                        var6 = undefined;
                        var5 = var4.bind(var6)(var3);
                        var3 = _closure1_slot5;
                        var4 = var3[var2];
                        var3 = null;
                        var4 = var3 != var4;
                        var3 = 'Missing user in compressed ready payload';
                        var3 = var5.bind(var6)(var4, var3);
                        var1 = _closure1_slot5;
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
            var5 = var8.bind(var3)(var5);
case 134:
            var8 = var2 == var10;
            var5 = undefined;
            if(var8) { _fun0014_ip = 137; continue _fun0014 }
case 138:
            var11 = var10.map;
            var8 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.unavailable;
                    var2 = true;
                    var1 = var4;
                    if(!(var2 !== var3)) { _fun0016_ip = 129; continue _fun0016 }
case 139:
                    var7 = _closure1_slot9;
                    var6 = _closure1_slot5;
                    var5 = _closure2_slot0;
                    var3 = null;
                    var9 = var3 == var5;
                    var3 = undefined;
                    var5 = undefined;
                    if(var9) { _fun0016_ip = 140; continue _fun0016 }
case 5:
                    var9 = _closure2_slot0;
                    var8 = arg2;
                    var5 = var9[var8];
case 140:
                    var5 = var7.bind(var3)(var6, var5);
                    var4['members'] = var5;
                    var2 = _closure1_slot10;
                    var1 = var2.bind(var3)(var4);
case 129:
                    return var1;
                }
            };
            var5 = var11.bind(var10)(var8);
case 137:
            if(!(var2 == var5)) { _fun0014_ip = 24; continue _fun0014 }
case 141:
            var5 = new Array(0);
case 24:
            var8 = _closure1_slot8;
            var7 = arg2;
            var1 = function(arg1) {
                var3 = _closure1_slot10;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7, var10, var1);
            if(!(var2 != var7)) { _fun0014_ip = 142; continue _fun0014 }
case 143:
            var1 = var5.push;
            var1 = var1.bind(var5)(var7);
case 142:
            var1 = {};
            var14 = var1;
            var13 = var4;
            var4 = copyDataProperties(var14, var13);
            var4 = 'users';
            var1[3] = var6;
            var6 = new Array(0);
            var4 = 'presences';
            var1[3] = var6;
            var4 = 'guilds';
            var1[3] = var5;
            if(!(var2 == var3)) { _fun0014_ip = 144; continue _fun0014 }
case 145:
            var3 = new Array(0);
case 144:
            var2 = 'private_channels';
            var1[1] = var3;
            return var1;
        }
    };
    var3['hydrateReadyPayloadPrioritized'] = var5;
    var4 = function hydrateInitialGuild(arg1, arg2) {
        var4 = arg1;
        var2 = _closure1_slot11;
        var1 = undefined;
        var1 = var2.bind(var1)(var4);
        var2 = {};
        var2['guild'] = var4;
        var4 = arg2;
        var2['identifyTime'] = var4;
        _closure1_slot4 = var2;
        return var1;
    };
    var3['hydrateInitialGuild'] = var4;
    var3['hydratePreviouslyUnavailableGuild'] = var2;
    return var1;
})();