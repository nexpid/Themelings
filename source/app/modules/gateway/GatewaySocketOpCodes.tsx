// app/modules/gateway/GatewaySocketOpCodes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
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
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var5[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var1)(var6);
    var6 = var6.EventEmitter;
    var2 = function(arg1) {
        var4 = function GatewaySocketOpCodes() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot9;
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
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'presenceUpdate';
        var5['key'] = var1;
        var1 = function value(arg1, arg2, arg3, arg4) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.PRESENCE_UPDATE;
            var2 = {};
            var6 = arg1;
            var2['status'] = var6;
            var6 = arg2;
            var2['since'] = var6;
            var6 = arg3;
            var2['activities'] = var6;
            var6 = arg4;
            var2['afk'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(20);
        var1[0] = var5;
        var5 = {};
        var7 = 'voiceStateUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var12 = var2.guildId;
                var1 = undefined;
                if(!(var12 === var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var12 = null;
case 9:
                var8 = var2.channelId;
                if(!(var8 === var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var8 = null;
case 11:
                var11 = var2.selfMute;
                if(!(var11 === var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var11 = false;
case 13:
                var10 = var2.selfDeaf;
                if(!(var10 === var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var10 = false;
case 15:
                var9 = var2.selfVideo;
                if(!(var9 === var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var9 = false;
case 17:
                var6 = var2.preferredRegion;
                if(!(var6 === var1)) { _fun0003_ip = 19; continue _fun0003 }
case 4:
                var6 = null;
case 19:
                var3 = var2.preferredRegions;
                if(!(var3 === var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var3 = null;
case 20:
                var7 = var2.videoStreamParameters;
                if(!(var7 === var1)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var7 = null;
case 22:
                var2 = var2.flags;
                if(!(var2 === var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var2 = 0;
case 24:
                var4 = {};
                var4['guild_id'] = var12;
                var4['channel_id'] = var8;
                var4['self_mute'] = var11;
                var4['self_deaf'] = var10;
                var4['self_video'] = var9;
                var4['flags'] = var2;
                var2 = null;
                var8 = var2 != var8;
                if(!var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var10 = _closure1_slot8;
                var9 = var10.shouldIncludePreferredRegion;
                var8 = var9.bind(var10)();
case 26:
                if(!var8) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var4['preferred_region'] = var6;
                var4['preferred_regions'] = var3;
case 28:
                if(!(var2 != var7)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                var3 = var2 == var7;
                var2 = undefined;
                if(var3) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
case 32:
                var4['tracks'] = var2;
case 30:
                var3 = var5.send;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.Opcode;
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
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.VOICE_SERVER_PING;
            var2 = null;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'requestGuildMembers';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg2;
            var5 = this;
            var9 = var1.query;
            var8 = var1.limit;
            var7 = var1.userIds;
            var6 = var1.presences;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.REQUEST_GUILD_MEMBERS;
            var2 = {};
            var10 = arg1;
            var2['guild_id'] = var10;
            var2['query'] = var9;
            var2['limit'] = var8;
            var2['user_ids'] = var7;
            var2['presences'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'searchRecentMembers';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg2;
                var5 = this;
                var9 = var1.query;
                var7 = var1.continuationToken;
                var4 = var5.send;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.Opcode;
                var3 = var2.SEARCH_RECENT_MEMBERS;
                var2 = {};
                var6 = arg1;
                var2['guild_id'] = var6;
                var6 = null;
                var10 = var6 != var9;
                var8 = '';
                if(!var10) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var8 = var9;
case 34:
                var2['query'] = var8;
                var8 = var6 != var7;
                var6 = null;
                if(!var8) { _fun0004_ip = 36; continue _fun0004 }
case 23:
                var6 = var7;
case 36:
                var2['continuation_token'] = var6;
                var2 = var4.bind(var5)(var3, var2);
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
case 0:
                var8 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var8;
                var1 = {};
                var _closure3_slot2 = var1;
                var4 = 0;
                var _closure3_slot3 = var4;
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var3);
                var3 = var7.keys;
                var8 = var3.bind(var7)(var8);
                var7 = var8.forEach;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
                        if(!(var6 > var1)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                        var8 = _closure3_slot0;
                        var7 = var8.send;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 6;
                        var6 = var6[var1];
                        var1 = undefined;
                        var1 = var9.bind(var1)(var6);
                        var1 = var1.Opcode;
                        var6 = var1.GUILD_SUBSCRIPTIONS_BULK;
                        var1 = {};
                        var9 = _closure3_slot2;
                        var1['subscriptions'] = var9;
                        var1 = var7.bind(var8)(var6, var1);
                        var1 = {};
                        _closure3_slot2 = var1;
                        var1 = 0;
                        _closure3_slot3 = var1;
case 37:
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
                if(!(var3 > var4)) { _fun0005_ip = 39; continue _fun0005 }
case 21:
                var4 = var5.send;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.Opcode;
                var3 = var2.GUILD_SUBSCRIPTIONS_BULK;
                var2 = {};
                var6 = _closure3_slot2;
                var2['subscriptions'] = var6;
                var2 = var4.bind(var5)(var3, var2);
case 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'callConnect';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.CALL_CONNECT;
            var2 = {};
            var6 = arg1;
            var2['channel_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'streamCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arguments[3];
                var5 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                var6 = null;
case 40:
                var4 = var5.send;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.Opcode;
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
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.STREAM_WATCH;
            var2 = {};
            var6 = arg1;
            var2['stream_key'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'streamPing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.STREAM_PING;
            var2 = {};
            var6 = arg1;
            var2['stream_key'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'streamDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.STREAM_DELETE;
            var2 = {};
            var6 = arg1;
            var2['stream_key'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'streamSetPaused';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.STREAM_SET_PAUSED;
            var2 = {};
            var6 = arg1;
            var2['stream_key'] = var6;
            var6 = arg2;
            var2['paused'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'requestForumUnreads';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var8 = arg3;
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.REQUEST_FORUM_UNREADS;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['channel_id'] = var6;
            var7 = var8.map;
            var6 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.threadId;
                var1['thread_id'] = var3;
                var2 = var2.ackMessageId;
                var1['ack_message_id'] = var2;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['threads'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'requestSoundboardSounds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.REQUEST_SOUNDBOARD_SOUNDS;
            var2 = {};
            var6 = arg1;
            var2['guild_ids'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'requestLastMessages';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.REQUEST_LAST_MESSAGES;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['channel_ids'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getDeletedEntityIdsNotMatchingHash';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4, arg5) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['channel_ids_hash'] = var6;
            var6 = arg3;
            var2['role_ids_hash'] = var6;
            var6 = arg4;
            var2['emoji_ids_hash'] = var6;
            var6 = arg5;
            var2['sticker_ids_hash'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'triggerGuildChannelResync';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.GUILD_CHANNELS_RESYNC;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['obfuscated_channel_ids'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'requestChannelInfo';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.REQUEST_CHANNEL_INFO;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['fields'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'requestChannelMemberCount';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.REQUEST_CHANNEL_MEMBER_COUNT;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['channel_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'remoteCommand';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var5 = this;
            var4 = var5.send;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.Opcode;
            var3 = var2.REMOTE_COMMAND;
            var2 = {};
            var6 = arg1;
            var2['target_session_id'] = var6;
            var6 = arg2;
            var2['payload'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[19] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 9;
    var6 = var5[var6];
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/gateway/GatewaySocketOpCodes.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.Opcode;
    var3['Opcode'] = var2;
    return var1;
})();