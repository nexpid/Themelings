// app/modules/guild_rooms/GuildRoomAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function resolveGuildId(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg2;
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot3;
            var3 = var5.getChannel;
            var2 = arg1;
            var6 = var3.bind(var5)(var2);
            var5 = var4 == var6;
            var3 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6.getGuildId;
            var3 = var5.bind(var6)();
case 4:
            var4 = var4 != var3;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3;
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function getUpdateProperties(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = {};
            var1 = var2.updateType;
            var3['update_type'] = var1;
            var1 = var2.updateReason;
            var3['update_reason'] = var1;
            var1 = var2.updateType;
            var4 = 'position';
            if(!(var4 !== var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = 'status_id';
            if(!(var5 !== var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = 'status_text';
            if(!(var6 !== var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = undefined;
            return var1;
case 12:
            var1 = {};
            var8 = var1;
            var7 = var3;
            var4 = copyDataProperties(var8, var7);
            var4 = var2.statusText;
            var1[5] = var4;
            return var1;
case 10:
            var1 = {};
            var8 = var1;
            var7 = var3;
            var4 = copyDataProperties(var8, var7);
            var4 = var2.statusId;
            var1[4] = var4;
            return var1;
case 8:
            var1 = {};
            var8 = var1;
            var7 = var3;
            var3 = copyDataProperties(var8, var7);
            var3 = var2.position;
            var4 = var3.x;
            var3 = new Array(2);
            var3[0] = var4;
            var2 = var2.position;
            var2 = var2.y;
            var3[1] = var2;
            var2 = 'position_v2';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getBaseProperties(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userId;
            var7 = var1.guildId;
            var2 = var1.channelId;
            var1 = null;
            if(!(var1 == var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = _closure1_slot2;
            var1 = var3.getId;
            var4 = var1.bind(var3)();
case 14:
            var3 = _closure1_slot6;
            var1 = var3.getRoomUsers;
            var3 = var1.bind(var3)(var2);
            var1 = {};
            var1['user_id'] = var4;
            var6 = _closure1_slot9;
            var5 = undefined;
            var5 = var6.bind(var5)(var2, var7);
            var1['guild_id'] = var5;
            var1['channel_id'] = var2;
            var2 = var3.size;
            var1['guild_room_user_count'] = var2;
            var2 = var3.has;
            var2 = var2.bind(var3)(var4);
            var1['guild_room_user_connected'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function withVoiceMetadata(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var11 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var6;
            var1 = function cleanup() {
                var4 = _closure1_slot4;
                var3 = var4.removeChangeListener;
                var2 = _closure2_slot4;
                var2 = var3.bind(var4)(var2);
                var2 = global;
                var3 = var2.clearTimeout;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot3 = var1;
            var3 = function onChange() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getMediaSessionId;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    if(!(var1 != var4)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var1 = _closure2_slot3;
                    var3 = undefined;
                    var1 = var1.bind(var3)();
                    var2 = _closure2_slot1;
                    var1 = {};
                    var6 = global;
                    var7 = var6.Object;
                    var6 = var7.keys;
                    var9 = _closure1_slot5;
                    var8 = var9.getVoiceStatesForChannel;
                    var5 = _closure2_slot0;
                    var5 = var8.bind(var9)(var5);
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.length;
                    var1['voice_state_count'] = var5;
                    var1['voice_media_session_id'] = var4;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot4 = var3;
            var5 = _closure1_slot4;
            var2 = var5.getMediaSessionId;
            var2 = var2.bind(var5)();
            var5 = null;
            if(!(var5 != var2)) { _fun0004_ip = 18; continue _fun0004 }
case 13:
            var5 = {};
            var7 = global;
            var9 = var7.Object;
            var8 = var9.keys;
            var10 = _closure1_slot5;
            var7 = var10.getVoiceStatesForChannel;
            var7 = var7.bind(var10)(var11);
            var7 = var8.bind(var9)(var7);
            var7 = var7.length;
            var5['voice_state_count'] = var7;
            var5['voice_media_session_id'] = var2;
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            _fun0004_ip = 19; continue _fun0004;
case 18:
            var2 = global;
            var7 = var2.setTimeout;
            var6 = undefined;
            var5 = function() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure2_slot1;
                var2 = {};
                var5 = global;
                var6 = var5.Object;
                var5 = var6.keys;
                var8 = _closure1_slot5;
                var7 = var8.getVoiceStatesForChannel;
                var4 = _closure2_slot0;
                var4 = var7.bind(var8)(var4);
                var4 = var5.bind(var6)(var4);
                var4 = var4.length;
                var2['voice_state_count'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 2500;
            var2 = var7.bind(var6)(var5, var2);
            var _closure2_slot2 = var2;
            var2 = _closure1_slot4;
            var1 = var2.addChangeListener;
            var1 = var1.bind(var2)(var3);
case 19:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSeatName;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_rooms/GuildRoomAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function trackGuildRoomObjectInteracted(arg1) {
        var4 = arg1;
        var1 = var4.interactionType;
        var _closure2_slot0 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['interactionType'] = var1;
        var7 = {};
        var6 = var4;
        var5 = var3;
        var1 = copyDataProperties(var7, var6, var5);
        var _closure2_slot1 = var1;
        var4 = _closure1_slot12;
        var3 = var1.channelId;
        var1 = undefined;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.GUILD_ROOM_OBJECT_INTERACTED;
            var2 = {};
            var8 = _closure1_slot11;
            var7 = _closure2_slot1;
            var9 = var8.bind(var1)(var7);
            var10 = var2;
            var7 = copyDataProperties(var10, var9);
            var7 = _closure2_slot0;
            var6 = 'interaction_type';
            var2[5] = var7;
            var9 = arg1;
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomObjectInteracted'] = var4;
    var4 = function trackGuildRoomInteracted(arg1) {
        var4 = arg1;
        var1 = var4.interactionType;
        var _closure2_slot0 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['interactionType'] = var1;
        var7 = {};
        var6 = var4;
        var5 = var3;
        var1 = copyDataProperties(var7, var6, var5);
        var _closure2_slot1 = var1;
        var4 = _closure1_slot12;
        var3 = var1.channelId;
        var1 = undefined;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.GUILD_ROOM_INTERACTED;
            var2 = {};
            var8 = _closure1_slot11;
            var7 = _closure2_slot1;
            var9 = var8.bind(var1)(var7);
            var10 = var2;
            var7 = copyDataProperties(var10, var9);
            var7 = _closure2_slot0;
            var6 = 'interaction_type';
            var2[5] = var7;
            var9 = arg1;
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomInteracted'] = var4;
    var4 = function trackGuildRoomLayoutToggled(arg1) {
        var4 = arg1;
        var1 = var4.location;
        var _closure2_slot0 = var1;
        var1 = var4.guildRoomOpen;
        var _closure2_slot1 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['location'] = var1;
        var3['guildRoomOpen'] = var1;
        var8 = {};
        var7 = var4;
        var6 = var3;
        var1 = copyDataProperties(var8, var7, var6);
        var _closure2_slot2 = var1;
        var4 = _closure1_slot12;
        var3 = var1.channelId;
        var1 = undefined;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.GUILD_ROOM_LAYOUT_TOGGLED;
            var2 = {};
            var8 = _closure1_slot11;
            var7 = _closure2_slot2;
            var9 = var8.bind(var1)(var7);
            var10 = var2;
            var7 = copyDataProperties(var10, var9);
            var8 = _closure2_slot0;
            var7 = 'location';
            var2[6] = var8;
            var7 = _closure2_slot1;
            var6 = 'guild_room_open';
            var2[5] = var7;
            var9 = arg1;
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomLayoutToggled'] = var4;
    var4 = function trackGuildRoomOpened(arg1) {
        var4 = arg1;
        var1 = var4.location;
        var _closure2_slot0 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['location'] = var1;
        var7 = {};
        var6 = var4;
        var5 = var3;
        var1 = copyDataProperties(var7, var6, var5);
        var _closure2_slot1 = var1;
        var4 = _closure1_slot12;
        var3 = var1.channelId;
        var1 = undefined;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.GUILD_ROOM_OPENED;
            var2 = {};
            var8 = _closure1_slot11;
            var7 = _closure2_slot1;
            var9 = var8.bind(var1)(var7);
            var10 = var2;
            var7 = copyDataProperties(var10, var9);
            var7 = _closure2_slot0;
            var6 = 'location';
            var2[5] = var7;
            var9 = arg1;
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomOpened'] = var4;
    var4 = function trackGuildRoomSeatSelected(arg1) {
        var4 = arg1;
        var1 = var4.actualSeatPosition;
        var _closure2_slot0 = var1;
        var1 = var4.targetSeatPosition;
        var _closure2_slot1 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['actualSeatPosition'] = var1;
        var3['targetSeatPosition'] = var1;
        var8 = {};
        var7 = var4;
        var6 = var3;
        var1 = copyDataProperties(var8, var7, var6);
        var _closure2_slot2 = var1;
        var4 = _closure1_slot12;
        var3 = var1.channelId;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot8;
                var3 = var2.GUILD_ROOM_SEAT_SELECTED;
                var2 = {};
                var9 = _closure1_slot11;
                var8 = _closure2_slot2;
                var14 = var9.bind(var1)(var8);
                var15 = var2;
                var8 = copyDataProperties(var15, var14);
                var12 = _closure1_slot7;
                var8 = _closure2_slot0;
                var10 = var8.x;
                var9 = var8.y;
                var10 = var12.bind(var1)(var10, var9);
                var9 = 'seat_name';
                var2[8] = var10;
                var9 = var8.x;
                var10 = new Array(2);
                var10[0] = var9;
                var9 = var8.y;
                var10[1] = var9;
                var9 = 'seat_position_v2';
                var2[8] = var10;
                var10 = var8.x;
                var8 = _closure2_slot1;
                var9 = null;
                var12 = var9 == var8;
                var8 = undefined;
                if(var12) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var12 = _closure2_slot1;
                var8 = var12.x;
case 20:
                if(!(var10 === var8)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var8 = _closure2_slot0;
                var10 = var8.y;
                var8 = _closure2_slot1;
                var9 = var9 == var8;
                var8 = undefined;
                if(var9) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                var9 = _closure2_slot1;
                var8 = var9.y;
case 24:
                var9 = 'user_selected';
                if(!(var10 !== var8)) { _fun0006_ip = 26; continue _fun0006 }
case 22:
                var9 = 'default';
case 26:
                var8 = 'update_reason';
                var2[7] = var9;
                var7 = _closure2_slot2;
                var13 = var7.channelId;
                var10 = new Array(0);
                var _closure3_slot0 = var10;
                var9 = new Array(0);
                var _closure3_slot1 = var9;
                var8 = new Array(0);
                var _closure3_slot2 = var8;
                var7 = new Array(0);
                var _closure3_slot3 = var7;
                var12 = _closure1_slot6;
                var11 = var12.getRoomUsers;
                var12 = var11.bind(var12)(var13);
                var11 = var12.forEach;
                var6 = function(arg1, arg2) {
                    var2 = arg1;
                    var5 = _closure3_slot0;
                    var4 = var5.push;
                    var1 = arg2;
                    var1 = var4.bind(var5)(var1);
                    var6 = _closure3_slot1;
                    var5 = var6.push;
                    var8 = _closure1_slot7;
                    var1 = var2.position;
                    var7 = var1.x;
                    var1 = var2.position;
                    var4 = var1.y;
                    var1 = undefined;
                    var4 = var8.bind(var1)(var7, var4);
                    var4 = var5.bind(var6)(var4);
                    var6 = _closure3_slot2;
                    var5 = var6.push;
                    var4 = var2.position;
                    var4 = var4.x;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure3_slot3;
                    var3 = var4.push;
                    var2 = var2.position;
                    var2 = var2.y;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var11.bind(var12)(var6);
                var6 = {};
                var6['seated_user_ids'] = var10;
                var6['seated_user_seat_names'] = var9;
                var6['seated_user_x_positions'] = var8;
                var6['seated_user_y_positions'] = var7;
                var15 = var2;
                var14 = var6;
                var6 = copyDataProperties(var15, var14);
                var14 = arg1;
                var15 = var2;
                var6 = copyDataProperties(var15, var14);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomSeatSelected'] = var4;
    var4 = function trackGuildRoomUserInteracted(arg1) {
        var4 = arg1;
        var1 = var4.targetUserId;
        var _closure2_slot0 = var1;
        var1 = var4.interactionType;
        var _closure2_slot1 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['targetUserId'] = var1;
        var3['interactionType'] = var1;
        var8 = {};
        var7 = var4;
        var6 = var3;
        var1 = copyDataProperties(var8, var7, var6);
        var _closure2_slot2 = var1;
        var4 = _closure1_slot12;
        var3 = var1.channelId;
        var1 = undefined;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.GUILD_ROOM_USER_INTERACTED;
            var2 = {};
            var8 = _closure1_slot11;
            var7 = _closure2_slot2;
            var9 = var8.bind(var1)(var7);
            var10 = var2;
            var7 = copyDataProperties(var10, var9);
            var8 = _closure2_slot0;
            var7 = 'target_user_id';
            var2[6] = var8;
            var7 = _closure2_slot1;
            var6 = 'interaction_type';
            var2[5] = var7;
            var9 = arg1;
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomUserInteracted'] = var4;
    var4 = function trackGuildRoomUserConnected(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot12;
        var3 = var1.channelId;
        var1 = undefined;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.GUILD_ROOM_USER_CONNECTED;
            var2 = {};
            var7 = _closure1_slot11;
            var6 = _closure2_slot0;
            var8 = var7.bind(var1)(var6);
            var9 = var2;
            var6 = copyDataProperties(var9, var8);
            var8 = arg1;
            var9 = var2;
            var6 = copyDataProperties(var9, var8);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomUserConnected'] = var4;
    var4 = function trackGuildRoomUserDisconnected(arg1) {
        var6 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.GUILD_ROOM_USER_DISCONNECTED;
        var2 = {};
        var8 = _closure1_slot11;
        var13 = var8.bind(var1)(var6);
        var14 = var2;
        var8 = copyDataProperties(var14, var13);
        var8 = global;
        var10 = var8.Object;
        var9 = var10.keys;
        var12 = _closure1_slot5;
        var11 = var12.getVoiceStatesForChannel;
        var8 = var6.channelId;
        var8 = var11.bind(var12)(var8);
        var8 = var9.bind(var10)(var8);
        var9 = var8.length;
        var8 = 'voice_state_count';
        var2[7] = var9;
        var8 = _closure1_slot6;
        var7 = var8.getMediaSessionId;
        var6 = var6.channelId;
        var7 = var7.bind(var8)(var6);
        var6 = 'voice_media_session_id';
        var2[5] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomUserDisconnected'] = var4;
    var2 = function trackGuildRoomUserUpdated(arg1) {
        var4 = arg1;
        var1 = var4.update;
        var _closure2_slot0 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['update'] = var1;
        var7 = {};
        var6 = var4;
        var5 = var3;
        var1 = copyDataProperties(var7, var6, var5);
        var _closure2_slot1 = var1;
        var4 = _closure1_slot12;
        var3 = var1.channelId;
        var1 = undefined;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.GUILD_ROOM_USER_UPDATED;
            var2 = {};
            var9 = _closure1_slot11;
            var8 = _closure2_slot1;
            var10 = var9.bind(var1)(var8);
            var11 = var2;
            var8 = copyDataProperties(var11, var10);
            var7 = _closure1_slot10;
            var6 = _closure2_slot0;
            var10 = var7.bind(var1)(var6);
            var11 = var2;
            var6 = copyDataProperties(var11, var10);
            var10 = arg1;
            var11 = var2;
            var6 = copyDataProperties(var11, var10);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['trackGuildRoomUserUpdated'] = var2;
    return var1;
})();