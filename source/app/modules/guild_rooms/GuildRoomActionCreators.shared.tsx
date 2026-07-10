// app/modules/guild_rooms/GuildRoomActionCreators.shared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
                    var10 = arg3;
                    var2 = undefined;
                    var17 = undefined;
                    var5 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var13 = undefined;
case 4: // try_start_0
                    var3 = var10;
                    var8 = null;
                    if(!(var8 == var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var16 = _closure1_slot7;
                    _fun0001_ip = 7; continue _fun0001;
case 5:
                    var16 = var10;
case 7:
                    var17 = var16;
                    var9 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var3 = 4;
                    var3 = var14[var3];
                    var3 = var9.bind(var2)(var3);
                    var14 = var3.HTTP;
                    var9 = var14.post;
                    var3 = {};
                    var20 = _closure1_slot6;
                    var19 = var20.GUILD_ROOM_CONNECT;
                    var18 = var7;
                    var15 = var6;
                    var15 = var19.bind(var20)(var18, var15);
                    var3['url'] = var15;
                    var15 = {};
                    var15['position'] = var16;
                    var3['body'] = var15;
                    var15 = true;
                    var3['rejectWithError'] = var15;
                    var3 = var9.bind(var14)(var3);
                    SaveGenerator(address=142);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var9 = 5;
                    var9 = var16[var9];
                    var15 = var14.bind(var2)(var9);
                    var14 = var15.serverGuildRoomToClient;
                    var9 = var3.body;
                    var14 = var14.bind(var15)(var9);
                    var5 = var14;
                    var15 = _closure1_slot1;
                    var9 = 6;
                    var9 = var16[var9];
                    var16 = var15.bind(var2)(var9);
                    var15 = var16.dispatch;
                    var9 = {};
                    var18 = 'GUILD_ROOM_CONNECT';
                    var9['type'] = var18;
                    var9['room'] = var14;
                    var14 = var7;
                    var9['guildId'] = var14;
                    var9['pendingPosition'] = var17;
                    var9 = var15.bind(var16)(var9);
                    var9 = var6;
                    if(!(var9 !== var14)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 7;
                    var14 = var14[var9];
                    var16 = var15.bind(var2)(var14);
                    var15 = var16.trackGuildRoomUserConnected;
                    var14 = {};
                    var17 = var7;
                    var14['guildId'] = var17;
                    var17 = var6;
                    var14['channelId'] = var17;
                    var14 = var15.bind(var16)(var14);
                    var15 = var5.users;
                    var14 = var15.get;
                    var16 = _closure1_slot4;
                    var5 = var16.getId;
                    var5 = var5.bind(var16)();
                    var5 = var14.bind(var15)(var5);
                    var11 = var5;
                    if(!(var8 != var5)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
                    var8 = {'updateType': 'position', 'updateReason': 'default'};
                    var14 = var11;
                    var5 = var14.position;
                    var8['position'] = var5;
                    var5 = new Array(3);
                    var5[0] = var8;
                    var8 = {'updateType': 'status_id', 'updateReason': 'default'};
                    var15 = var14.statusId;
                    var8['statusId'] = var15;
                    var5[1] = var8;
                    var8 = {'updateType': 'status_text', 'updateReason': 'default'};
                    var14 = var14.statusText;
                    var8['statusText'] = var14;
                    var5[2] = var8;
                    var8 = 0;
                    var12 = 0;
                    var13 = var5;
                    var5 = var5.length;
                    if(!(var8 < var5)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var5 = var13;
                    var8 = var12;
                    var17 = var5[var8];
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var9];
                    var16 = var15.bind(var2)(var14);
                    var15 = var16.trackGuildRoomUserUpdated;
                    var14 = {};
                    var18 = var6;
                    var14['channelId'] = var18;
                    var14['update'] = var17;
                    var14 = var15.bind(var16)(var14);
                    var8 = var8 + 1;
                    var12 = var8;
                    var5 = var5.length;
                    if(var8 < var5) { _fun0001_ip = 16; continue _fun0001 }
case 15:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var9 = var8.bind(var2)(var5);
                    var8 = var9.trackGuildRoomSeatSelected;
                    var5 = {};
                    var12 = var7;
                    var5['guildId'] = var12;
                    var12 = var6;
                    var5['channelId'] = var12;
                    var11 = var11.position;
                    var5['actualSeatPosition'] = var11;
                    var5['targetSeatPosition'] = var10;
                    var5 = var8.bind(var9)(var5);
case 12:
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
case 17: // try_end0
                    _fun0001_ip = 18; continue _fun0001;
case 10:
                    return var3;
case 19: // catch_target0
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
case 18:
                    return var2;
case 2:
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
                    if(var2) { _fun0002_ip = 20; continue _fun0002 }
case 3:
                    var7 = arg1;
                    var6 = arg2;
case 21: // try_start_0
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
case 22:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var8 = var6;
                    var4 = var7;
                    if(!(var8 !== var4)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
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
case 26: // try_end0
                    _fun0002_ip = 28; continue _fun0002;
case 24:
                    return var2;
case 29: // catch_target0
                    CatchBlockStart(arg_register=1);
case 28:
                    var2 = undefined;
                    return var2;
case 20:
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
    var1 = function _guildRoomUpdate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var14 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var6 = arg1;
                    var13 = var14;
                    var11 = arg3;
                    var2 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var12 = undefined;
                    var10 = _closure1_slot5;
                    var9 = var10.getRoom;
                    var8 = var9.bind(var10)(var14);
                    var10 = _closure1_slot5;
                    var9 = var10.getRoomUsers;
                    var7 = var9.bind(var10)(var14);
case 32: // try_start_0
                    var9 = {};
                    var10 = 'GUILD_ROOM_LOCAL_UPDATE';
                    var9['type'] = var10;
                    var10 = var13;
                    var9['roomId'] = var10;
                    var4 = var9;
                    var10 = var11;
                    var9 = null;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var14 = var11;
                    var10 = var14.background;
case 33:
                    if(!(var9 != var10)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var14 = var4;
                    var10 = var11;
                    var10 = var10.background;
                    var14['background'] = var10;
case 35:
                    var10 = var11;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var14 = var11;
                    var10 = var14.user_position;
case 37:
                    if(!(var9 != var10)) { _fun0003_ip = 39; continue _fun0003 }
case 25:
                    var14 = var4;
                    var10 = var11;
                    var10 = var10.user_position;
                    var14['position'] = var10;
case 39:
                    var10 = var11;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var14 = var11;
                    var10 = var14.user_status_id;
case 40:
                    if(!(var9 != var10)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var14 = var4;
                    var10 = var11;
                    var10 = var10.user_status_id;
                    var14['statusId'] = var10;
case 42:
                    var10 = var11;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var14 = var11;
                    var10 = var14.user_status_text;
case 44:
                    if(!(var9 != var10)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var14 = var4;
                    var10 = var11;
                    var10 = var10.user_status_text;
                    var14['statusText'] = var10;
case 46:
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 6;
                    var10 = var14[var10];
                    var15 = var15.bind(var2)(var10);
                    var10 = var15.dispatch;
                    var4 = var10.bind(var15)(var4);
                    var10 = _closure1_slot0;
                    var4 = 4;
                    var4 = var14[var4];
                    var4 = var10.bind(var2)(var4);
                    var14 = var4.HTTP;
                    var10 = var14.post;
                    var4 = {};
                    var18 = _closure1_slot6;
                    var17 = var18.GUILD_ROOM_UPDATE;
                    var16 = var6;
                    var15 = var13;
                    var15 = var17.bind(var18)(var16, var15);
                    var4['url'] = var15;
                    var15 = var11;
                    var4['body'] = var15;
                    var15 = true;
                    var4['rejectWithError'] = var15;
                    var4 = var10.bind(var14)(var4);
                    SaveGenerator(address=371);
case 48:
                    return var4;
case 49:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 5;
                    var10 = var15[var10];
                    var15 = var14.bind(var2)(var10);
                    var14 = var15.serverGuildRoomToClient;
                    var10 = var4.body;
                    var5 = var14.bind(var15)(var10);
                    var14 = var6;
                    var10 = var13;
                    if(!(var14 !== var10)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                    var10 = var11;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0003_ip = 16; continue _fun0003 }
case 54:
                    var14 = var11;
                    var10 = var14.user_position;
case 16:
                    if(!(var9 != var10)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 7;
                    var10 = var15[var10];
                    var15 = var14.bind(var2)(var10);
                    var14 = var15.trackGuildRoomUserUpdated;
                    var10 = {};
                    var16 = var13;
                    var10['channelId'] = var16;
                    var16 = {'updateType': 'position', 'updateReason': 'user_selected'};
                    var17 = var11;
                    var17 = var17.user_position;
                    var16['position'] = var17;
                    var10['update'] = var16;
                    var10 = var14.bind(var15)(var10);
case 55:
                    var10 = var11;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                    var14 = var11;
                    var10 = var14.user_status_id;
case 57:
                    if(!(var9 != var10)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 7;
                    var10 = var15[var10];
                    var15 = var14.bind(var2)(var10);
                    var14 = var15.trackGuildRoomUserUpdated;
                    var10 = {};
                    var16 = var13;
                    var10['channelId'] = var16;
                    var16 = {'updateType': 'status_id', 'updateReason': 'user_selected'};
                    var17 = var11;
                    var17 = var17.user_status_id;
                    var16['statusId'] = var17;
                    var10['update'] = var16;
                    var10 = var14.bind(var15)(var10);
case 59:
                    var10 = var11;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0003_ip = 61; continue _fun0003 }
case 19:
                    var14 = var11;
                    var10 = var14.user_status_text;
case 61:
                    if(!(var9 != var10)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 7;
                    var10 = var15[var10];
                    var15 = var14.bind(var2)(var10);
                    var14 = var15.trackGuildRoomUserUpdated;
                    var10 = {};
                    var16 = var13;
                    var10['channelId'] = var16;
                    var16 = {'updateType': 'status_text', 'updateReason': 'user_selected'};
                    var17 = var11;
                    var17 = var17.user_status_text;
                    var16['statusText'] = var17;
                    var10['update'] = var16;
                    var10 = var14.bind(var15)(var10);
case 62:
                    var10 = var11;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var14 = var11;
                    var10 = var14.user_position;
case 64:
                    if(!(var9 != var10)) { _fun0003_ip = 52; continue _fun0003 }
case 66:
                    var14 = var5.users;
                    var10 = var14.get;
                    var15 = _closure1_slot4;
                    var5 = var15.getId;
                    var5 = var5.bind(var15)();
                    var5 = var10.bind(var14)(var5);
                    var12 = var5;
                    if(!(var9 != var5)) { _fun0003_ip = 52; continue _fun0003 }
case 67:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 7;
                    var5 = var10[var5];
                    var10 = var9.bind(var2)(var5);
                    var9 = var10.trackGuildRoomSeatSelected;
                    var5 = {};
                    var14 = var6;
                    var5['guildId'] = var14;
                    var5['channelId'] = var13;
                    var12 = var12.position;
                    var5['actualSeatPosition'] = var12;
                    var11 = var11.user_position;
                    var5['targetSeatPosition'] = var11;
                    var5 = var9.bind(var10)(var5);
case 52: // try_end0
                    _fun0003_ip = 68; continue _fun0003;
case 50:
                    return var4;
case 69: // catch_target0
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
case 68:
                    return var2;
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var5 = function guildRoomObjectCreate() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var5;
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
                    if(var2) { _fun0004_ip = 70; continue _fun0004 }
case 71:
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
case 72:
                    return var2;
case 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 74; continue _fun0004 }
case 75:
                    return var2;
case 74:
                    return var2;
case 70:
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
                    if(var2) { _fun0005_ip = 76; continue _fun0005 }
case 71:
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
case 77:
                    return var2;
case 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 79; continue _fun0005 }
case 80:
                    return var2;
case 79:
                    return var2;
case 76:
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
    var4 = function guildRoomObjectDelete() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var4;
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
                    if(var2) { _fun0006_ip = 76; continue _fun0006 }
case 71:
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
case 77:
                    return var2;
case 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                    return var2;
case 79:
                    return var2;
case 76:
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
    var1 = function _createGuildRoomNote() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 81; continue _fun0007 }
case 3:
                    var9 = arg1;
                    var5 = arg2;
                    var11 = arg3;
                    var10 = arg4;
case 82: // try_start_0
                    var8 = _closure1_slot11;
                    var7 = var9;
                    var4 = var5;
                    var2 = {};
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 10;
                    var12 = var12[var6];
                    var6 = undefined;
                    var12 = var13.bind(var6)(var12);
                    var12 = var12.GuildRoomObjectTypes;
                    var12 = var12.NOTE;
                    var2['object_type'] = var12;
                    var2['content'] = var11;
                    var2['position'] = var10;
                    var2 = var8.bind(var6)(var7, var4, var2);
                    SaveGenerator(address=95);
case 73:
                    return var2;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 28; continue _fun0007 }
case 83:
                    var7 = var5;
                    var4 = var9;
                    if(!(var7 !== var4)) { _fun0007_ip = 84; continue _fun0007 }
case 85:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var8 = var7.bind(var6)(var4);
                    var7 = var8.trackGuildRoomObjectInteracted;
                    var4 = {};
                    var10 = 'note_created';
                    var4['interactionType'] = var10;
                    var4['guildId'] = var9;
                    var9 = var5;
                    var4['channelId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 84:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var7 = 'GUILD_ROOM_NOTE_CREATE_COMPLETE';
                    var3['type'] = var7;
                    var7 = var5;
                    var3['roomId'] = var7;
                    var3 = var4.bind(var6)(var3);
case 29: // try_end0
                    _fun0007_ip = 86; continue _fun0007;
case 28:
                    return var2;
case 42: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'GUILD_ROOM_NOTE_CREATE_COMPLETE';
                    var2['type'] = var6;
                    var2['roomId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 86:
                    var2 = undefined;
                    return var2;
case 81:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _deleteGuildRoomNote() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 23; continue _fun0008 }
case 21:
                    var6 = _closure1_slot14;
                    var5 = {};
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.GuildRoomObjectTypes;
                    var2 = var2.NOTE;
                    var5['object_type'] = var2;
                    var11 = arg3;
                    var14 = undefined;
                    var13 = var8;
                    var12 = var7;
                    var10 = var5;
                    var2 = var14[var6](var13, var12, var11, var10, var9);
                    SaveGenerator(address=86);
case 87:
                    return var2;
case 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 11; continue _fun0008 }
case 89:
                    if(!(var7 !== var8)) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.trackGuildRoomObjectInteracted;
                    var4 = {};
                    var9 = 'note_deleted';
                    var4['interactionType'] = var9;
                    var4['guildId'] = var8;
                    var4['channelId'] = var7;
                    var4 = var5.bind(var6)(var4);
case 90:
                    return var3;
case 11:
                    return var2;
case 23:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _fetchGuildRoom() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 92; continue _fun0009 }
case 31:
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
case 88:
                    return var2;
case 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 94; continue _fun0009 }
case 95:
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
case 94:
                    return var2;
case 92:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot6 = var6;
    var6 = {'x': 0, 'y': 0};
    var _closure1_slot7 = var6;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_rooms/GuildRoomActionCreators.shared.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function guildRoomConnect() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomConnect'] = var6;
    var6 = function guildRoomDisconnect() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomDisconnect'] = var6;
    var6 = function guildRoomUpdate() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomUpdate'] = var6;
    var6 = function selectGuildRoomLocalPosition(arg1) {
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
    var3['selectGuildRoomLocalPosition'] = var6;
    var6 = function guildRoomToggleLayout(arg1, arg2) {
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
    var3['guildRoomToggleLayout'] = var6;
    var3['guildRoomObjectCreate'] = var5;
    var5 = function guildRoomObjectUpdate() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomObjectUpdate'] = var5;
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
    var4 = function deletePendingGuildRoomNote(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_ROOM_PENDING_NOTE_DELETE';
        var2['type'] = var5;
        var5 = arg1;
        var2['roomId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['deletePendingGuildRoomNote'] = var4;
    var4 = function createGuildRoomNote() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createGuildRoomNote'] = var4;
    var4 = function deleteGuildRoomNote() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteGuildRoomNote'] = var4;
    var2 = function fetchGuildRoom() {
        var1 = undefined;
        var4 = _closure1_slot18;
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