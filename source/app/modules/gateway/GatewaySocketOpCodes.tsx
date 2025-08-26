// app/modules/gateway/GatewaySocketOpCodes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var13 = 0;
    var2 = var7[var13];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var12 = 1;
    var2 = var7[var12];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var11 = 2;
    var2 = var7[var11];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var10 = 3;
    var2 = var7[var10];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var9 = 4;
    var2 = var7[var9];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var8 = 5;
    var2 = var7[var8];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var2['DISPATCH'] = var13;
    var5 = 'DISPATCH';
    var2[var13] = var5;
    var2['HEARTBEAT'] = var12;
    var5 = 'HEARTBEAT';
    var2[var12] = var5;
    var2['IDENTIFY'] = var11;
    var5 = 'IDENTIFY';
    var2[var11] = var5;
    var2['PRESENCE_UPDATE'] = var10;
    var5 = 'PRESENCE_UPDATE';
    var2[var10] = var5;
    var2['VOICE_STATE_UPDATE'] = var9;
    var5 = 'VOICE_STATE_UPDATE';
    var2[var9] = var5;
    var2['VOICE_SERVER_PING'] = var8;
    var5 = 'VOICE_SERVER_PING';
    var2[var8] = var5;
    var8 = 6;
    var2['RESUME'] = var8;
    var5 = 'RESUME';
    var2[var8] = var5;
    var8 = 7;
    var2['RECONNECT'] = var8;
    var5 = 'RECONNECT';
    var2[var8] = var5;
    var5 = 8;
    var2['REQUEST_GUILD_MEMBERS'] = var5;
    var9 = 'REQUEST_GUILD_MEMBERS';
    var2[var5] = var9;
    var10 = 9;
    var2['INVALID_SESSION'] = var10;
    var9 = 'INVALID_SESSION';
    var2[var10] = var9;
    var10 = 10;
    var2['HELLO'] = var10;
    var9 = 'HELLO';
    var2[var10] = var9;
    var10 = 11;
    var2['HEARTBEAT_ACK'] = var10;
    var9 = 'HEARTBEAT_ACK';
    var2[var10] = var9;
    var10 = 13;
    var2['CALL_CONNECT'] = var10;
    var9 = 'CALL_CONNECT';
    var2[var10] = var9;
    var10 = 14;
    var2['GUILD_SUBSCRIPTIONS'] = var10;
    var9 = 'GUILD_SUBSCRIPTIONS';
    var2[var10] = var9;
    var10 = 18;
    var2['STREAM_CREATE'] = var10;
    var9 = 'STREAM_CREATE';
    var2[var10] = var9;
    var10 = 19;
    var2['STREAM_DELETE'] = var10;
    var9 = 'STREAM_DELETE';
    var2[var10] = var9;
    var10 = 20;
    var2['STREAM_WATCH'] = var10;
    var9 = 'STREAM_WATCH';
    var2[var10] = var9;
    var10 = 21;
    var2['STREAM_PING'] = var10;
    var9 = 'STREAM_PING';
    var2[var10] = var9;
    var10 = 22;
    var2['STREAM_SET_PAUSED'] = var10;
    var9 = 'STREAM_SET_PAUSED';
    var2[var10] = var9;
    var10 = 24;
    var2['REQUEST_GUILD_APPLICATION_COMMANDS'] = var10;
    var9 = 'REQUEST_GUILD_APPLICATION_COMMANDS';
    var2[var10] = var9;
    var10 = 28;
    var2['REQUEST_FORUM_UNREADS'] = var10;
    var9 = 'REQUEST_FORUM_UNREADS';
    var2[var10] = var9;
    var10 = 29;
    var2['REMOTE_COMMAND'] = var10;
    var9 = 'REMOTE_COMMAND';
    var2[var10] = var9;
    var10 = 30;
    var2['GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH'] = var10;
    var9 = 'GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH';
    var2[var10] = var9;
    var10 = 31;
    var2['REQUEST_SOUNDBOARD_SOUNDS'] = var10;
    var9 = 'REQUEST_SOUNDBOARD_SOUNDS';
    var2[var10] = var9;
    var10 = 34;
    var2['REQUEST_LAST_MESSAGES'] = var10;
    var9 = 'REQUEST_LAST_MESSAGES';
    var2[var10] = var9;
    var10 = 35;
    var2['SEARCH_RECENT_MEMBERS'] = var10;
    var9 = 'SEARCH_RECENT_MEMBERS';
    var2[var10] = var9;
    var10 = 36;
    var2['REQUEST_CHANNEL_STATUSES'] = var10;
    var9 = 'REQUEST_CHANNEL_STATUSES';
    var2[var10] = var9;
    var10 = 37;
    var2['GUILD_SUBSCRIPTIONS_BULK'] = var10;
    var9 = 'GUILD_SUBSCRIPTIONS_BULK';
    var2[var10] = var9;
    var10 = 38;
    var2['GUILD_CHANNELS_RESYNC'] = var10;
    var9 = 'GUILD_CHANNELS_RESYNC';
    var2[var10] = var9;
    var10 = 39;
    var2['REQUEST_CHANNEL_MEMBER_COUNT'] = var10;
    var9 = 'REQUEST_CHANNEL_MEMBER_COUNT';
    var2[var10] = var9;
    var10 = 40;
    var2['QOS_HEARTBEAT'] = var10;
    var9 = 'QOS_HEARTBEAT';
    var2[var10] = var9;
    var10 = 41;
    var2['UPDATE_TIME_SPENT_SESSION_ID'] = var10;
    var9 = 'UPDATE_TIME_SPENT_SESSION_ID';
    var2[var10] = var9;
    var10 = 43;
    var2['REQUEST_CHANNEL_INFO'] = var10;
    var9 = 'REQUEST_CHANNEL_INFO';
    var2[var10] = var9;
    var _closure1_slot8 = var2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.EventEmitter;
    var4 = function(arg1) {
        var4 = function GatewaySocketOpCodes() {
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
                var1 = _closure1_slot9;
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
        var1 = 'presenceUpdate';
        var5['key'] = var1;
        var1 = function value(arg1, arg2, arg3, arg4) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.PRESENCE_UPDATE;
            var1 = {};
            var5 = arg1;
            var1['status'] = var5;
            var5 = arg2;
            var1['since'] = var5;
            var5 = arg3;
            var1['activities'] = var5;
            var5 = arg4;
            var1['afk'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(21);
        var1[0] = var5;
        var5 = {};
        var7 = 'voiceStateUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var12 = var2.guildId;
                var1 = undefined;
                if(!(var12 === var1)) { _fun0003_ip = 19; continue _fun0003 }
 17:
                var12 = null;
 19:
                var8 = var2.channelId;
                if(!(var8 === var1)) { _fun0003_ip = 30; continue _fun0003 }
 28:
                var8 = null;
 30:
                var11 = var2.selfMute;
                if(!(var11 === var1)) { _fun0003_ip = 42; continue _fun0003 }
 40:
                var11 = false;
 42:
                var10 = var2.selfDeaf;
                if(!(var10 === var1)) { _fun0003_ip = 54; continue _fun0003 }
 52:
                var10 = false;
 54:
                var9 = var2.selfVideo;
                if(!(var9 === var1)) { _fun0003_ip = 66; continue _fun0003 }
 64:
                var9 = false;
 66:
                var6 = var2.preferredRegion;
                if(!(var6 === var1)) { _fun0003_ip = 78; continue _fun0003 }
 76:
                var6 = null;
 78:
                var3 = var2.preferredRegions;
                if(!(var3 === var1)) { _fun0003_ip = 90; continue _fun0003 }
 88:
                var3 = null;
 90:
                var7 = var2.videoStreamParameters;
                if(!(var7 === var1)) { _fun0003_ip = 102; continue _fun0003 }
 100:
                var7 = null;
 102:
                var2 = var2.flags;
                if(!(var2 === var1)) { _fun0003_ip = 113; continue _fun0003 }
 111:
                var2 = 0;
 113:
                var4 = {};
                var4['guild_id'] = var12;
                var4['channel_id'] = var8;
                var4['self_mute'] = var11;
                var4['self_deaf'] = var10;
                var4['self_video'] = var9;
                var4['flags'] = var2;
                var2 = null;
                var8 = var2 != var8;
                if(!var8) { _fun0003_ip = 168; continue _fun0003 }
 151:
                var10 = _closure1_slot7;
                var9 = var10.shouldIncludePreferredRegion;
                var8 = var9.bind(var10)();
 168:
                if(!var8) { _fun0003_ip = 185; continue _fun0003 }
 171:
                var4['preferred_region'] = var6;
                var4['preferred_regions'] = var3;
 185:
                if(!(var2 != var7)) { _fun0003_ip = 223; continue _fun0003 }
 189:
                var3 = var2 == var7;
                var2 = undefined;
                if(var3) { _fun0003_ip = 217; continue _fun0003 }
 198:
                var6 = var7.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.type;
                    var1['type'] = var3;
                    var3 = var2.rid;
                    var1['rid'] = var3;
                    var2 = var2.quality;
                    var1['quality'] = var2;
                    return var1;
                };
                var2 = var6.bind(var7)(var3);
 217:
                var4['tracks'] = var2;
 223:
                var3 = var5.send;
                var2 = _closure1_slot8;
                var2 = var2.VOICE_STATE_UPDATE;
                var2 = var3.bind(var5)(var2, var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'voiceServerPing';
        var5['key'] = var7;
        var7 = function value() {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.VOICE_SERVER_PING;
            var1 = null;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'requestGuildMembers';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg2;
            var4 = this;
            var8 = var1.query;
            var7 = var1.limit;
            var6 = var1.userIds;
            var5 = var1.presences;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.REQUEST_GUILD_MEMBERS;
            var1 = {};
            var9 = arg1;
            var1['guild_id'] = var9;
            var1['query'] = var8;
            var1['limit'] = var7;
            var1['user_ids'] = var6;
            var1['presences'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'searchRecentMembers';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg2;
                var4 = this;
                var8 = var1.query;
                var6 = var1.continuationToken;
                var3 = var4.send;
                var1 = _closure1_slot8;
                var2 = var1.SEARCH_RECENT_MEMBERS;
                var1 = {};
                var5 = arg1;
                var1['guild_id'] = var5;
                var5 = null;
                var9 = var5 != var8;
                var7 = '';
                if(!var9) { _fun0004_ip = 61; continue _fun0004 }
 58:
                var7 = var8;
 61:
                var1['query'] = var7;
                var7 = var5 != var6;
                var5 = null;
                if(!var7) { _fun0004_ip = 77; continue _fun0004 }
 74:
                var5 = var6;
 77:
                var1['continuation_token'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'updateGuildSubscriptions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var8 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var8;
                var1 = {};
                var _closure3_slot2 = var1;
                var4 = 0;
                var _closure3_slot3 = var4;
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var3);
                var3 = var7.keys;
                var8 = var3.bind(var7)(var8);
                var7 = var8.forEach;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var5 = arg1;
                        var1 = _closure3_slot1;
                        var4 = var1[var5];
                        var1 = global;
                        var6 = var1.JSON;
                        var3 = var6.stringify;
                        var1 = new Array(2);
                        var1[0] = var5;
                        var1[1] = var4;
                        var1 = var3.bind(var6)(var1);
                        var3 = var1.length;
                        var1 = _closure3_slot3;
                        var6 = var1 + var3;
                        var1 = 15360;
                        if(!(var6 > var1)) { _fun0006_ip = 120; continue _fun0006 }
 68:
                        var8 = _closure3_slot0;
                        var7 = var8.send;
                        var1 = _closure1_slot8;
                        var6 = var1.GUILD_SUBSCRIPTIONS_BULK;
                        var1 = {};
                        var9 = _closure3_slot2;
                        var1['subscriptions'] = var9;
                        var1 = var7.bind(var8)(var6, var1);
                        var1 = {};
                        _closure3_slot2 = var1;
                        var1 = 0;
                        _closure3_slot3 = var1;
 120:
                        var1 = _closure3_slot2;
                        var1[var5] = var4;
                        var1 = _closure3_slot3;
                        var1 = var1 + var3;
                        _closure3_slot3 = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var7.bind(var8)(var3);
                var3 = _closure3_slot3;
                if(!(var3 > var4)) { _fun0005_ip = 121; continue _fun0005 }
 88:
                var4 = var5.send;
                var2 = _closure1_slot8;
                var3 = var2.GUILD_SUBSCRIPTIONS_BULK;
                var2 = {};
                var6 = _closure3_slot2;
                var2['subscriptions'] = var6;
                var2 = var4.bind(var5)(var3, var2);
 121:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'callConnect';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.CALL_CONNECT;
            var1 = {};
            var5 = arg1;
            var1['channel_id'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'streamCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = arguments[3];
                var5 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0007_ip = 14; continue _fun0007 }
 12:
                var6 = null;
 14:
                var4 = var5.send;
                var2 = _closure1_slot8;
                var3 = var2.STREAM_CREATE;
                var2 = {};
                var7 = arg1;
                var2['type'] = var7;
                var7 = arg2;
                var2['guild_id'] = var7;
                var7 = arg3;
                var2['channel_id'] = var7;
                var2['preferred_region'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'streamWatch';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.STREAM_WATCH;
            var1 = {};
            var5 = arg1;
            var1['stream_key'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'streamPing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.STREAM_PING;
            var1 = {};
            var5 = arg1;
            var1['stream_key'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'streamDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.STREAM_DELETE;
            var1 = {};
            var5 = arg1;
            var1['stream_key'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'streamSetPaused';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.STREAM_SET_PAUSED;
            var1 = {};
            var5 = arg1;
            var1['stream_key'] = var5;
            var5 = arg2;
            var1['paused'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'requestForumUnreads';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var7 = arg3;
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.REQUEST_FORUM_UNREADS;
            var1 = {};
            var5 = arg1;
            var1['guild_id'] = var5;
            var5 = arg2;
            var1['channel_id'] = var5;
            var6 = var7.map;
            var5 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.threadId;
                var1['thread_id'] = var3;
                var2 = var2.ackMessageId;
                var1['ack_message_id'] = var2;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['threads'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'requestSoundboardSounds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.REQUEST_SOUNDBOARD_SOUNDS;
            var1 = {};
            var5 = arg1;
            var1['guild_ids'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'requestLastMessages';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.REQUEST_LAST_MESSAGES;
            var1 = {};
            var5 = arg1;
            var1['guild_id'] = var5;
            var5 = arg2;
            var1['channel_ids'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getDeletedEntityIdsNotMatchingHash';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4, arg5) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH;
            var1 = {};
            var5 = arg1;
            var1['guild_id'] = var5;
            var5 = arg2;
            var1['channel_ids_hash'] = var5;
            var5 = arg3;
            var1['role_ids_hash'] = var5;
            var5 = arg4;
            var1['emoji_ids_hash'] = var5;
            var5 = arg5;
            var1['sticker_ids_hash'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'triggerGuildChannelResync';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.GUILD_CHANNELS_RESYNC;
            var1 = {};
            var5 = arg1;
            var1['guild_id'] = var5;
            var5 = arg2;
            var1['obfuscated_channel_ids'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'requestChannelStatuses';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.REQUEST_CHANNEL_STATUSES;
            var1 = {};
            var5 = arg1;
            var1['guild_id'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'requestChannelInfo';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.REQUEST_CHANNEL_INFO;
            var1 = {};
            var5 = arg1;
            var1['guild_id'] = var5;
            var5 = arg2;
            var1['fields'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'requestChannelMemberCount';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.REQUEST_CHANNEL_MEMBER_COUNT;
            var1 = {};
            var5 = arg1;
            var1['guild_id'] = var5;
            var5 = arg2;
            var1['channel_id'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'remoteCommand';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot8;
            var2 = var1.REMOTE_COMMAND;
            var1 = {};
            var5 = arg1;
            var1['target_session_id'] = var5;
            var5 = arg2;
            var1['payload'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[20] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/gateway/GatewaySocketOpCodes.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['Opcode'] = var2;
    return var1;
})();