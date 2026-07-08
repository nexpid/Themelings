// app/modules/guild_rooms/GuildRoomActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
                    var14 = arg1;
                    var8 = arg2;
                    var15 = arg3;
                    var2 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var9 = undefined;
                    var10 = undefined;
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 3;
                    var3 = var11[var3];
                    var3 = var7.bind(var2)(var3);
                    var11 = var3.HTTP;
                    var7 = var11.post;
                    var3 = {};
                    var17 = _closure1_slot5;
                    var16 = var17.GUILD_ROOM_CONNECT;
                    var13 = var14;
                    var12 = var8;
                    var12 = var16.bind(var17)(var13, var12);
                    var3['url'] = var12;
                    var12 = {};
                    var13 = var15;
                    var12['position'] = var13;
                    var3['body'] = var12;
                    var12 = true;
                    var3['rejectWithError'] = var12;
                    var3 = var7.bind(var11)(var3);
                    SaveGenerator(address=119);
case 5:
                    return var3;
case 6:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 4;
                    var7 = var13[var7];
                    var12 = var11.bind(var2)(var7);
                    var11 = var12.serverGuildRoomToClient;
                    var7 = var3.body;
                    var11 = var11.bind(var12)(var7);
                    var6 = var11;
                    var12 = _closure1_slot1;
                    var7 = 5;
                    var7 = var13[var7];
                    var13 = var12.bind(var2)(var7);
                    var12 = var13.dispatch;
                    var7 = {};
                    var16 = 'GUILD_ROOM_CONNECT';
                    var7['type'] = var16;
                    var7['room'] = var11;
                    var11 = var14;
                    var7['guildId'] = var11;
                    var7['pendingPosition'] = var15;
                    var7 = var12.bind(var13)(var7);
                    var7 = var8;
                    if(!(var7 !== var11)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 6;
                    var11 = var11[var7];
                    var13 = var12.bind(var2)(var11);
                    var12 = var13.trackGuildRoomUserConnected;
                    var11 = {};
                    var11['guildId'] = var14;
                    var14 = var8;
                    var11['channelId'] = var14;
                    var11 = var12.bind(var13)(var11);
                    var12 = var6.users;
                    var11 = var12.get;
                    var13 = _closure1_slot4;
                    var6 = var13.getId;
                    var6 = var6.bind(var13)();
                    var11 = var11.bind(var12)(var6);
                    var5 = var11;
                    var6 = null;
                    if(!(var6 != var11)) { _fun0001_ip = 9; continue _fun0001 }
case 11:
                    var6 = {'updateType': 'position', 'updateReason': 'default'};
                    var11 = var5;
                    var5 = var11.position;
                    var6['position'] = var5;
                    var5 = new Array(3);
                    var5[0] = var6;
                    var6 = {'updateType': 'status_id', 'updateReason': 'default'};
                    var12 = var11.statusId;
                    var6['statusId'] = var12;
                    var5[1] = var6;
                    var6 = {'updateType': 'status_text', 'updateReason': 'default'};
                    var11 = var11.statusText;
                    var6['statusText'] = var11;
                    var5[2] = var6;
                    var6 = 0;
                    var9 = 0;
                    var10 = var5;
                    var5 = var5.length;
                    if(!(var6 < var5)) { _fun0001_ip = 9; continue _fun0001 }
case 12:
                    var5 = var10;
                    var6 = var9;
                    var14 = var5[var6];
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var7];
                    var13 = var12.bind(var2)(var11);
                    var12 = var13.trackGuildRoomUserUpdated;
                    var11 = {};
                    var15 = var8;
                    var11['channelId'] = var15;
                    var11['update'] = var14;
                    var11 = var12.bind(var13)(var11);
                    var6 = var6 + 1;
                    var9 = var6;
                    var5 = var5.length;
                    if(var6 < var5) { _fun0001_ip = 12; continue _fun0001 }
case 9:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var6 = var7.bind(var2)(var4);
                    var5 = var6.fireSurveyAction;
                    var4 = 8;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.SurveyActionTypes;
                    var4 = var4.GUILD_ROOM_JOINED;
                    var4 = var5.bind(var6)(var4);
case 13: // try_end0
                    _fun0001_ip = 14; continue _fun0001;
case 7:
                    return var3;
case 15: // catch_target0
                    CatchBlockStart(arg_register=2);
case 14:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
                    var2 = 5;
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
                    var2 = 3;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var4 = var8.post;
                    var2 = {};
                    var11 = _closure1_slot5;
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
                    var3 = 6;
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
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _guildRoomUpdate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 3:
                    var4 = arg1;
                    var6 = arg2;
                    var7 = arg3;
case 27: // try_start_0
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 5;
                    var2 = var9[var2];
                    var5 = undefined;
                    var11 = var8.bind(var5)(var2);
                    var8 = var11.dispatch;
                    var2 = {};
                    var10 = 'GUILD_ROOM_LOCAL_UPDATE';
                    var2['type'] = var10;
                    var14 = var6;
                    var2['roomId'] = var14;
                    var10 = var7;
                    var12 = var10.background;
                    var2['background'] = var12;
                    var12 = var10.user_position;
                    var2['position'] = var12;
                    var12 = var10.user_status_id;
                    var2['statusId'] = var12;
                    var12 = var10.user_status_text;
                    var2['statusText'] = var12;
                    var2 = var8.bind(var11)(var2);
                    var8 = _closure1_slot0;
                    var2 = 3;
                    var2 = var9[var2];
                    var2 = var8.bind(var5)(var2);
                    var9 = var2.HTTP;
                    var8 = var9.post;
                    var2 = {};
                    var13 = _closure1_slot5;
                    var12 = var13.GUILD_ROOM_UPDATE;
                    var11 = var4;
                    var11 = var12.bind(var13)(var11, var14);
                    var2['url'] = var11;
                    var2['body'] = var10;
                    var10 = true;
                    var2['rejectWithError'] = var10;
                    var2 = var8.bind(var9)(var2);
                    SaveGenerator(address=191);
case 28:
                    return var2;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var8 = var4;
                    var4 = var6;
                    if(!(var8 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 20:
                    var4 = var7;
                    var8 = null;
                    var9 = var8 == var4;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var9 = var7;
                    var4 = var9.user_position;
case 33:
                    if(!(var8 != var4)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 6;
                    var4 = var10[var4];
                    var10 = var9.bind(var5)(var4);
                    var9 = var10.trackGuildRoomUserUpdated;
                    var4 = {};
                    var11 = var6;
                    var4['channelId'] = var11;
                    var11 = {'updateType': 'position', 'updateReason': 'user_selected'};
                    var12 = var7;
                    var12 = var12.user_position;
                    var11['position'] = var12;
                    var4['update'] = var11;
                    var4 = var9.bind(var10)(var4);
case 35:
                    var4 = var7;
                    var9 = var8 == var4;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var9 = var7;
                    var4 = var9.user_status_id;
case 37:
                    if(!(var8 != var4)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 6;
                    var4 = var10[var4];
                    var10 = var9.bind(var5)(var4);
                    var9 = var10.trackGuildRoomUserUpdated;
                    var4 = {};
                    var11 = var6;
                    var4['channelId'] = var11;
                    var11 = {'updateType': 'status_id', 'updateReason': 'user_selected'};
                    var12 = var7;
                    var12 = var12.user_status_id;
                    var11['statusId'] = var12;
                    var4['update'] = var11;
                    var4 = var9.bind(var10)(var4);
case 39:
                    var4 = var7;
                    var9 = var8 == var4;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var9 = var7;
                    var4 = var9.user_status_text;
case 41:
                    if(!(var8 != var4)) { _fun0003_ip = 32; continue _fun0003 }
case 43:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.trackGuildRoomUserUpdated;
                    var3 = {};
                    var3['channelId'] = var6;
                    var6 = {'updateType': 'status_text', 'updateReason': 'user_selected'};
                    var7 = var7.user_status_text;
                    var6['statusText'] = var7;
                    var3['update'] = var6;
                    var3 = var4.bind(var5)(var3);
case 32: // try_end0
                    _fun0003_ip = 44; continue _fun0003;
case 30:
                    return var2;
case 45: // catch_target0
                    CatchBlockStart(arg_register=1);
case 44:
                    var2 = undefined;
                    return var2;
case 26:
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
                    if(var2) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot5;
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
case 48:
                    return var2;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    return var2;
case 50:
                    return var2;
case 46:
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
                    if(var2) { _fun0005_ip = 52; continue _fun0005 }
case 47:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot5;
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
case 53:
                    return var2;
case 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    return var2;
case 55:
                    return var2;
case 52:
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
                    if(var2) { _fun0006_ip = 52; continue _fun0006 }
case 47:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var9 = _closure1_slot5;
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
case 53:
                    return var2;
case 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    return var2;
case 55:
                    return var2;
case 52:
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_rooms/GuildRoomActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function guildRoomConnect() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomConnect'] = var4;
    var4 = function guildRoomDisconnect() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomDisconnect'] = var4;
    var4 = function guildRoomUpdate() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomUpdate'] = var4;
    var4 = function selectGuildRoomLocalPosition(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
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
    var3['selectGuildRoomLocalPosition'] = var4;
    var4 = function guildRoomToggleLayout(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
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
    var3['guildRoomToggleLayout'] = var4;
    var4 = function guildRoomObjectCreate() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomObjectCreate'] = var4;
    var4 = function guildRoomObjectUpdate() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomObjectUpdate'] = var4;
    var2 = function guildRoomObjectDelete() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['guildRoomObjectDelete'] = var2;
    return var1;
})();