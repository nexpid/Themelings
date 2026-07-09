// app/modules/guild_rooms/GuildRoomActionCreators.shared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _guildRoomConnect() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = arg1;
                    var6 = arg2;
                    var15 = arg3;
                    var2 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var10 = undefined;
                    var11 = undefined;
case 4: // try_start_0
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 4;
                    var3 = var12[var3];
                    var3 = var9.bind(var2)(var3);
                    var12 = var3.HTTP;
                    var9 = var12.post;
                    var3 = {};
                    var17 = _closure1_slot6;
                    var16 = var17.GUILD_ROOM_CONNECT;
                    var14 = var7;
                    var13 = var6;
                    var13 = var16.bind(var17)(var14, var13);
                    var3['url'] = var13;
                    var13 = {};
                    var14 = var15;
                    var13['position'] = var14;
                    var3['body'] = var13;
                    var13 = true;
                    var3['rejectWithError'] = var13;
                    var3 = var9.bind(var12)(var3);
                    SaveGenerator(address=119);
case 5:
                    return var3;
case 6:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 5;
                    var9 = var14[var9];
                    var13 = var12.bind(var2)(var9);
                    var12 = var13.serverGuildRoomToClient;
                    var9 = var3.body;
                    var12 = var12.bind(var13)(var9);
                    var8 = var12;
                    var13 = _closure1_slot1;
                    var9 = 6;
                    var9 = var14[var9];
                    var14 = var13.bind(var2)(var9);
                    var13 = var14.dispatch;
                    var9 = {};
                    var16 = 'GUILD_ROOM_CONNECT';
                    var9['type'] = var16;
                    var9['room'] = var12;
                    var12 = var7;
                    var9['guildId'] = var12;
                    var9['pendingPosition'] = var15;
                    var9 = var13.bind(var14)(var9);
                    var9 = var6;
                    if(!(var9 !== var12)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 7;
                    var12 = var12[var9];
                    var14 = var13.bind(var2)(var12);
                    var13 = var14.trackGuildRoomUserConnected;
                    var12 = {};
                    var15 = var7;
                    var12['guildId'] = var15;
                    var15 = var6;
                    var12['channelId'] = var15;
                    var12 = var13.bind(var14)(var12);
                    var13 = var8.users;
                    var12 = var13.get;
                    var14 = _closure1_slot4;
                    var8 = var14.getId;
                    var8 = var8.bind(var14)();
                    var12 = var12.bind(var13)(var8);
                    var5 = var12;
                    var8 = null;
                    if(!(var8 != var12)) { _fun0001_ip = 9; continue _fun0001 }
case 11:
                    var8 = {'updateType': 'position', 'updateReason': 'default'};
                    var12 = var5;
                    var5 = var12.position;
                    var8['position'] = var5;
                    var5 = new Array(3);
                    var5[0] = var8;
                    var8 = {'updateType': 'status_id', 'updateReason': 'default'};
                    var13 = var12.statusId;
                    var8['statusId'] = var13;
                    var5[1] = var8;
                    var8 = {'updateType': 'status_text', 'updateReason': 'default'};
                    var12 = var12.statusText;
                    var8['statusText'] = var12;
                    var5[2] = var8;
                    var8 = 0;
                    var10 = 0;
                    var11 = var5;
                    var5 = var5.length;
                    if(!(var8 < var5)) { _fun0001_ip = 9; continue _fun0001 }
case 12:
                    var5 = var11;
                    var8 = var10;
                    var15 = var5[var8];
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var9];
                    var14 = var13.bind(var2)(var12);
                    var13 = var14.trackGuildRoomUserUpdated;
                    var12 = {};
                    var16 = var6;
                    var12['channelId'] = var16;
                    var12['update'] = var15;
                    var12 = var13.bind(var14)(var12);
                    var8 = var8 + 1;
                    var10 = var8;
                    var5 = var5.length;
                    if(var8 < var5) { _fun0001_ip = 12; continue _fun0001 }
case 9:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var8 = var9.bind(var2)(var4);
                    var5 = var8.fireSurveyAction;
                    var4 = 9;
                    var4 = var10[var4];
                    var4 = var9.bind(var2)(var4);
                    var4 = var4.SurveyActionTypes;
                    var4 = var4.GUILD_ROOM_JOINED;
                    var4 = var5.bind(var8)(var4);
case 13: // try_end0
                    _fun0001_ip = 14; continue _fun0001;
case 7:
                    return var3;
case 15: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'GUILD_ROOM_CONNECT_FAILURE';
                    var3['type'] = var8;
                    var3['guildId'] = var7;
                    var3['roomId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 14:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _guildRoomDisconnect() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 3:
                    var7 = arg1;
                    var6 = arg2;
case 17: // try_start_0
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 6;
                    var2 = var8[var2];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var2);
                    var4 = var9.dispatch;
                    var2 = {};
                    var10 = 'GUILD_ROOM_DISCONNECT';
                    var2['type'] = var10;
                    var11 = _closure1_slot4;
                    var10 = var11.getId;
                    var10 = var10.bind(var11)();
                    var2['userId'] = var10;
                    var12 = var6;
                    var2['roomId'] = var12;
                    var2 = var4.bind(var9)(var2);
                    var4 = _closure1_slot0;
                    var2 = 4;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var4 = var8.post;
                    var2 = {};
                    var11 = _closure1_slot6;
                    var10 = var11.GUILD_ROOM_DISCONNECT;
                    var9 = var7;
                    var9 = var10.bind(var11)(var9, var12);
                    var2['url'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=154);
case 18:
                    return var2;
case 19:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var8 = var6;
                    var4 = var7;
                    if(!(var8 !== var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.trackGuildRoomUserDisconnected;
                    var3 = {};
                    var3['guildId'] = var7;
                    var3['channelId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 22: // try_end0
                    _fun0002_ip = 24; continue _fun0002;
case 20:
                    return var2;
case 25: // catch_target0
                    CatchBlockStart(arg_register=1);
case 24:
                    var2 = undefined;
                    return var2;
case 16:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _guildRoomUpdate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var6 = arg1;
                    var11 = var9;
                    var12 = arg3;
                    var2 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot5;
                    var4 = var5.getRoom;
                    var8 = var4.bind(var5)(var9);
                    var5 = _closure1_slot5;
                    var4 = var5.getRoomUsers;
                    var7 = var4.bind(var5)(var9);
case 28: // try_start_0
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 6;
                    var4 = var9[var4];
                    var13 = var5.bind(var2)(var4);
                    var5 = var13.dispatch;
                    var4 = {};
                    var10 = 'GUILD_ROOM_LOCAL_UPDATE';
                    var4['type'] = var10;
                    var16 = var11;
                    var4['roomId'] = var16;
                    var10 = var12;
                    var14 = var10.background;
                    var4['background'] = var14;
                    var14 = var10.user_position;
                    var4['position'] = var14;
                    var14 = var10.user_status_id;
                    var4['statusId'] = var14;
                    var14 = var10.user_status_text;
                    var4['statusText'] = var14;
                    var4 = var5.bind(var13)(var4);
                    var5 = _closure1_slot0;
                    var4 = 4;
                    var4 = var9[var4];
                    var4 = var5.bind(var2)(var4);
                    var9 = var4.HTTP;
                    var5 = var9.post;
                    var4 = {};
                    var15 = _closure1_slot6;
                    var14 = var15.GUILD_ROOM_UPDATE;
                    var13 = var6;
                    var13 = var14.bind(var15)(var13, var16);
                    var4['url'] = var13;
                    var4['body'] = var10;
                    var10 = true;
                    var4['rejectWithError'] = var10;
                    var4 = var5.bind(var9)(var4);
                    SaveGenerator(address=228);
case 29:
                    return var4;
case 30:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var9 = var6;
                    var5 = var11;
                    if(!(var9 !== var5)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var5 = var12;
                    var9 = null;
                    var10 = var9 == var5;
                    var5 = undefined;
                    if(var10) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var10 = var12;
                    var5 = var10.user_position;
case 35:
                    if(!(var9 != var5)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 7;
                    var5 = var13[var5];
                    var13 = var10.bind(var2)(var5);
                    var10 = var13.trackGuildRoomUserUpdated;
                    var5 = {};
                    var14 = var11;
                    var5['channelId'] = var14;
                    var14 = {'updateType': 'position', 'updateReason': 'user_selected'};
                    var15 = var12;
                    var15 = var15.user_position;
                    var14['position'] = var15;
                    var5['update'] = var14;
                    var5 = var10.bind(var13)(var5);
case 37:
                    var5 = var12;
                    var10 = var9 == var5;
                    var5 = undefined;
                    if(var10) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var10 = var12;
                    var5 = var10.user_status_id;
case 39:
                    if(!(var9 != var5)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 7;
                    var5 = var13[var5];
                    var13 = var10.bind(var2)(var5);
                    var10 = var13.trackGuildRoomUserUpdated;
                    var5 = {};
                    var14 = var11;
                    var5['channelId'] = var14;
                    var14 = {'updateType': 'status_id', 'updateReason': 'user_selected'};
                    var15 = var12;
                    var15 = var15.user_status_id;
                    var14['statusId'] = var15;
                    var5['update'] = var14;
                    var5 = var10.bind(var13)(var5);
case 41:
                    var5 = var12;
                    var10 = var9 == var5;
                    var5 = undefined;
                    if(var10) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var10 = var12;
                    var5 = var10.user_status_text;
case 43:
                    if(!(var9 != var5)) { _fun0003_ip = 33; continue _fun0003 }
case 45:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 7;
                    var5 = var10[var5];
                    var10 = var9.bind(var2)(var5);
                    var9 = var10.trackGuildRoomUserUpdated;
                    var5 = {};
                    var5['channelId'] = var11;
                    var11 = {'updateType': 'status_text', 'updateReason': 'user_selected'};
                    var12 = var12.user_status_text;
                    var11['statusText'] = var12;
                    var5['update'] = var11;
                    var5 = var9.bind(var10)(var5);
case 33: // try_end0
                    _fun0003_ip = 46; continue _fun0003;
case 31:
                    return var4;
case 47: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'GUILD_ROOM_UPDATE_FAILURE';
                    var3['type'] = var9;
                    var3['originalRoom'] = var8;
                    var3['originalRoomUsers'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 46:
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function guildRoomObjectCreate() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _guildRoomObjectCreate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var7 = var8.GUILD_ROOM_OBJECT_CREATE;
                    var6 = arg1;
                    var5 = arg2;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['url'] = var5;
                    var5 = arg3;
                    var2['body'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=93);
case 50:
                    return var2;
case 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    return var2;
case 52:
                    return var2;
case 48:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _guildRoomObjectUpdate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 54; continue _fun0005 }
case 49:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.GUILD_ROOM_OBJECT_UPDATE;
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var5 = var8.bind(var9)(var7, var6, var5);
                    var2['url'] = var5;
                    var5 = arg4;
                    var2['body'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=97);
case 55:
                    return var2;
case 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    return var2;
case 57:
                    return var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _guildRoomObjectDelete() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 54; continue _fun0006 }
case 49:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.GUILD_ROOM_OBJECT_DELETE;
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var5 = var8.bind(var9)(var7, var6, var5);
                    var2['url'] = var5;
                    var5 = arg4;
                    var2['body'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=97);
case 55:
                    return var2;
case 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    return var2;
case 57:
                    return var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _createGuildRoomNote() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 59; continue _fun0007 }
case 27:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var4 = var8[var3];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var9 = 'GUILD_ROOM_NOTE_CREATE_START';
                    var4['type'] = var9;
                    var4['roomId'] = var6;
                    var4 = var5.bind(var7)(var4);
                    var5 = _closure1_slot10;
                    var4 = {};
                    var7 = _closure1_slot0;
                    var2 = 10;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.GuildRoomObjectTypes;
                    var2 = var2.NOTE;
                    var4['object_type'] = var2;
                    var2 = arg3;
                    var4['content'] = var2;
                    var2 = arg4;
                    var4['position'] = var2;
                    var2 = arg1;
                    var2 = var5.bind(var3)(var2, var6, var4);
                    SaveGenerator(address=132);
case 60:
                    return var2;
case 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    return var3;
case 62:
                    return var2;
case 59:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _fetchGuildRoom() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 64; continue _fun0008 }
case 27:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.GUILD_ROOM;
                    var7 = arg2;
                    var7 = var9.bind(var10)(var8, var7);
                    var2['url'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=88);
case 65:
                    return var2;
case 66:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 5;
                    var5 = var6[var5];
                    var9 = var7.bind(var3)(var5);
                    var7 = var9.serverGuildRoomToClient;
                    var5 = var2.body;
                    var7 = var7.bind(var9)(var5);
                    var5 = _closure1_slot1;
                    var4 = 6;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'GUILD_ROOM_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var4['guildId'] = var8;
                    var4['room'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 67:
                    return var2;
case 64:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot6 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_rooms/GuildRoomActionCreators.shared.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function guildRoomConnect() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomConnect'] = var5;
    var5 = function guildRoomDisconnect() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomDisconnect'] = var5;
    var5 = function guildRoomUpdate() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomUpdate'] = var5;
    var5 = function selectGuildRoomLocalPosition(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_ROOM_LOCAL_POSITION_REQUESTED';
        var2['type'] = var5;
        var5 = arg1;
        var2['position'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['selectGuildRoomLocalPosition'] = var5;
    var5 = function guildRoomToggleLayout(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_ROOM_TOGGLE_LAYOUT';
        var2['type'] = var5;
        var5 = arg1;
        var2['roomId'] = var5;
        var5 = arg2;
        var2['clearLayout'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['guildRoomToggleLayout'] = var5;
    var3['guildRoomObjectCreate'] = var4;
    var4 = function guildRoomObjectUpdate() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomObjectUpdate'] = var4;
    var4 = function guildRoomObjectDelete() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomObjectDelete'] = var4;
    var4 = function createPendingGuildRoomNote(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_ROOM_PENDING_NOTE_CREATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['roomId'] = var5;
        var5 = arg2;
        var2['note'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['createPendingGuildRoomNote'] = var4;
    var4 = function createGuildRoomNote() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createGuildRoomNote'] = var4;
    var2 = function fetchGuildRoom() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGuildRoom'] = var2;
    return var1;
})();