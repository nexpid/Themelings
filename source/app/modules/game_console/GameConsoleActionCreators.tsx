// app/modules/game_console/GameConsoleActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var1 = function logRemoteCommand(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.REMOTE_COMMAND_SENT;
            var2 = {};
            var7 = arg1;
            var2['command_type'] = var7;
            var8 = _closure1_slot5;
            var7 = var8.getSessionById;
            var6 = arg2;
            var7 = var7.bind(var8)(var6);
            var8 = null;
            var9 = var8 == var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 100; continue _fun0001 }
 79:
            var7 = var7.clientInfo;
            var8 = var8 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 100; continue _fun0001 }
 94:
            var6 = var7.os;
 100:
            var2['remote_platform'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var7 = function disconnectRemote() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var7;
    var1 = function _disconnectRemote() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 447; continue _fun0002 }
 10:
                    var2 = undefined;
                    var3 = undefined;
                    var5 = _closure1_slot6;
                    var4 = var5.getAwaitingRemoteSessionInfo;
                    var5 = var4.bind(var5)();
                    var4 = null;
                    var7 = var4 == var5;
                    var8 = undefined;
                    if(var7) { _fun0002_ip = 48; continue _fun0002 }
 42:
                    var8 = var5.nonce;
 48:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 6;
                    var7 = var10[var7];
                    var10 = var9.bind(var2)(var7);
                    var9 = var10.dispatch;
                    var7 = {};
                    var11 = 'REMOTE_SESSION_DISCONNECT';
                    var7['type'] = var11;
                    var7 = var9.bind(var10)(var7);
                    var3 = new Array(0);
                    var7 = var4 == var5;
                    var9 = undefined;
                    if(var7) { _fun0002_ip = 106; continue _fun0002 }
 101:
                    var9 = var5.type;
 106:
                    var7 = _closure1_slot9;
                    var7 = var7.PLAYSTATION;
                    var7 = var9 !== var7;
                    if(!var7) { _fun0002_ip = 151; continue _fun0002 }
 123:
                    var9 = var4 == var5;
                    var10 = undefined;
                    if(var9) { _fun0002_ip = 137; continue _fun0002 }
 132:
                    var10 = var5.type;
 137:
                    var9 = _closure1_slot9;
                    var9 = var9.PLAYSTATION_STAGING;
                    var7 = var10 !== var9;
 151:
                    if(var7) { _fun0002_ip = 173; continue _fun0002 }
 154:
                    var10 = var4 == var5;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 169; continue _fun0002 }
 163:
                    var9 = var5.commandId;
 169:
                    var7 = var4 == var9;
 173:
                    if(var7) { _fun0002_ip = 195; continue _fun0002 }
 176:
                    var10 = var4 == var5;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 191; continue _fun0002 }
 185:
                    var9 = var5.deviceId;
 191:
                    var7 = var4 == var9;
 195:
                    if(var7) { _fun0002_ip = 239; continue _fun0002 }
 198:
                    var9 = var3;
                    var7 = var9.push;
                    var12 = _closure1_slot18;
                    var11 = var5.type;
                    var10 = var5.deviceId;
                    var5 = var5.commandId;
                    var5 = var12.bind(var2)(var11, var10, var5);
                    var5 = var7.bind(var9)(var5);
 239:
                    if(!(var4 != var8)) { _fun0002_ip = 265; continue _fun0002 }
 243:
                    var7 = var3;
                    var5 = var7.push;
                    var4 = _closure1_slot15;
                    var4 = var4.bind(var2)(var8);
                    var4 = var5.bind(var7)(var4);
 265: // try_start_0
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.all;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=288);
 286:
                    return var3;
 288:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 299; continue _fun0002 }
 294: // try_end0
                    _fun0002_ip = 444; continue _fun0002;
 299:
                    return var3;
 302: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 7;
                    var3 = var10[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var9 = _closure1_slot0;
                    var6 = 8;
                    var7 = var10[var6];
                    var7 = var9.bind(var2)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var2)(var7);
                    var7 = var7.t;
                    var7 = var7.LNhXcH;
                    var7 = var8.bind(var11)(var7);
                    var3['title'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var2)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.QnKxtL;
                    var6 = var7.bind(var8)(var6);
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
 444:
                    return var2;
 447:
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
    var6 = function getConnectNonce() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var6;
    var1 = function _getConnectNonce() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 248; continue _fun0003 }
 10:
                    var6 = undefined;
                    var2 = undefined;
 14: // try_start_0
                    var4 = _closure1_slot4;
                    var3 = var4.getRTCConnectionId;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 71; continue _fun0003 }
 37:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.ConsoleHandoffType;
                    var9 = var3.CREATE_NEW_CALL;
                    _fun0003_ip = 103; continue _fun0003;
 71:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.ConsoleHandoffType;
                    var9 = var3.TRANSFER_EXISTING_CALL;
 103:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.CONNECT_REQUEST_CREATE;
                    var3['url'] = var7;
                    var7 = {};
                    var8 = {};
                    var8['handoff_type'] = var9;
                    var7['analytics_properties'] = var8;
                    var3['body'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=187);
 185:
                    return var3;
 187:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 206; continue _fun0003 }
 193:
                    var4 = var3.body;
                    var2 = var4.nonce;
 204: // try_end0
                    _fun0003_ip = 245; continue _fun0003;
 206:
                    return var3;
 209: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
 245:
                    return var2;
 248:
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
    var5 = function cancelConnectRequest(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var6 = _closure1_slot8;
        var5 = var6.CONNECT_REQUEST;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot15 = var5;
    var1 = function _fetchDevices() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 269; continue _fun0004 }
 13:
                    var6 = var10;
                    var5 = undefined;
                    var4 = undefined;
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 6;
                    var2 = var2[var7];
                    var9 = var8.bind(var5)(var2);
                    var8 = var9.dispatch;
                    var2 = {};
                    var11 = 'GAME_CONSOLE_FETCH_DEVICES_START';
                    var2['type'] = var11;
                    var2['platform'] = var10;
                    var2 = var8.bind(var9)(var2);
 70: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 11;
                    var2 = var9[var2];
                    var2 = var8.bind(var5)(var2);
                    var9 = var2.HTTP;
                    var8 = var9.get;
                    var2 = {};
                    var12 = _closure1_slot8;
                    var11 = var12.CONSOLES_DEVICES;
                    var10 = var6;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var10 = false;
                    var2['rejectWithError'] = var10;
                    var2 = var8.bind(var9)(var2);
                    SaveGenerator(address=139);
 137:
                    return var2;
 139:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 214; continue _fun0004 }
 145:
                    var4 = var2;
 148: // try_end0
                    var4 = var4.body;
                    var4 = var4.devices;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var7];
                    var10 = var9.bind(var5)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS';
                    var8['type'] = var11;
                    var11 = var6;
                    var8['platform'] = var11;
                    var8['devices'] = var4;
                    var8 = var9.bind(var10)(var8);
                    return var4;
 214:
                    return var2;
 217: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GAME_CONSOLE_FETCH_DEVICES_FAIL';
                    var3['type'] = var7;
                    var3['platform'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 269:
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
    var1 = function _sendConnectVoiceCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 363; continue _fun0005 }
 13:
                    var6 = var10;
                    var11 = arg2;
                    var12 = arg3;
                    var13 = arg4;
                    var5 = undefined;
                    var4 = undefined;
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 6;
                    var2 = var2[var7];
                    var9 = var8.bind(var5)(var2);
                    var8 = var9.dispatch;
                    var2 = {};
                    var14 = 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START';
                    var2['type'] = var14;
                    var2['platform'] = var10;
                    var2 = var8.bind(var9)(var2);
 79: // try_start_0
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var2 = 11;
                    var2 = var16[var2];
                    var2 = var15.bind(var5)(var2);
                    var9 = var2.HTTP;
                    var8 = var9.post;
                    var2 = {};
                    var18 = _closure1_slot8;
                    var17 = var18.CONSOLES_DEVICES_COMMANDS;
                    var14 = var6;
                    var10 = var11;
                    var10 = var17.bind(var18)(var14, var10);
                    var2['url'] = var10;
                    var10 = {};
                    var14 = 13;
                    var14 = var16[var14];
                    var14 = var15.bind(var5)(var14);
                    var14 = var14.ConsoleCommands;
                    var14 = var14.CONNECT_VOICE;
                    var10['command'] = var14;
                    var14 = var12;
                    var15 = var14.id;
                    var10['channel_id'] = var15;
                    var14 = var14.guild_id;
                    var10['guild_id'] = var14;
                    var14 = var13;
                    var10['nonce'] = var14;
                    var2['body'] = var10;
                    var10 = false;
                    var2['rejectWithError'] = var10;
                    var2 = var8.bind(var9)(var2);
                    SaveGenerator(address=217);
 215:
                    return var2;
 217:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0005_ip = 308; continue _fun0005 }
 223:
                    var4 = var2;
 226: // try_end0
                    var4 = var4.body;
                    var4 = var4.id;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var7];
                    var10 = var9.bind(var5)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var14 = 'WAIT_FOR_REMOTE_SESSION';
                    var8['type'] = var14;
                    var14 = var6;
                    var8['sessionType'] = var14;
                    var8['nonce'] = var13;
                    var12 = var12.id;
                    var8['channelId'] = var12;
                    var8['deviceId'] = var11;
                    var8['commandId'] = var4;
                    var8 = var9.bind(var10)(var8);
                    return var4;
 308:
                    return var2;
 311: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL';
                    var3['type'] = var7;
                    var3['platform'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 363:
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
    var4 = function cancelCommand() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var4;
    var1 = function _cancelCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var13 = arg1;
                    var12 = arg2;
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 305; continue _fun0006 }
 19:
                    var8 = var13;
                    var7 = var12;
                    var6 = var11;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var9 = 6;
                    var2 = var2[var9];
                    var5 = undefined;
                    var10 = var4.bind(var5)(var2);
                    var4 = var10.dispatch;
                    var2 = {};
                    var14 = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START';
                    var2['type'] = var14;
                    var2['platform'] = var13;
                    var2['deviceId'] = var12;
                    var2['commandId'] = var11;
                    var2 = var4.bind(var10)(var2);
 90: // try_start_0
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 11;
                    var2 = var10[var2];
                    var2 = var4.bind(var5)(var2);
                    var10 = var2.HTTP;
                    var4 = var10.del;
                    var2 = {};
                    var15 = _closure1_slot8;
                    var14 = var15.CONSOLES_DEVICES_COMMAND;
                    var13 = var8;
                    var12 = var7;
                    var11 = var6;
                    var11 = var14.bind(var15)(var13, var12, var11);
                    var2['url'] = var11;
                    var11 = false;
                    var2['rejectWithError'] = var11;
                    var2 = var4.bind(var10)(var2);
                    SaveGenerator(address=168);
 166:
                    return var2;
 168:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 240; continue _fun0006 }
 174: // try_end0
                    var10 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var11 = var10.bind(var5)(var4);
                    var10 = var11.dispatch;
                    var4 = {};
                    var12 = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS';
                    var4['type'] = var12;
                    var12 = var8;
                    var4['platform'] = var12;
                    var12 = var7;
                    var4['deviceId'] = var12;
                    var12 = var6;
                    var4['commandId'] = var12;
                    var4 = var10.bind(var11)(var4);
                    return var5;
 240:
                    return var2;
 243: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var9];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL';
                    var3['type'] = var9;
                    var3['platform'] = var8;
                    var3['deviceId'] = var7;
                    var3['commandId'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 305:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function _transferToPlayStation() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    var7 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 179; continue _fun0007 }
 16:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.maybeShowPTTAlert;
                    var2 = var2.bind(var3)(var9);
                    SaveGenerator(address=56);
 54:
                    return var2;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 176; continue _fun0007 }
 62:
                    var3 = _closure1_slot11;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=74);
 72:
                    return var3;
 74:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 173; continue _fun0007 }
 80:
                    var4 = _closure1_slot13;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=92);
 90:
                    return var4;
 92:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 170; continue _fun0007 }
 98:
                    var10 = function sendConnectVoiceCommand() {
                        var1 = undefined;
                        var4 = _closure1_slot17;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var14 = arg2;
                    var16 = undefined;
                    var15 = var9;
                    var13 = var7;
                    var12 = var4;
                    var5 = var16[var10](var15, var14, var13, var12, var11);
                    SaveGenerator(address=127);
 125:
                    return var5;
 127:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0007_ip = 167; continue _fun0007 }
 133:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 15;
                    var8 = var11[var8];
                    var8 = var10.bind(var6)(var8);
                    var7 = var7.id;
                    var7 = var8.bind(var6)(var7, var9);
                    return var6;
 167:
                    return var5;
 170:
                    return var4;
 173:
                    return var3;
 176:
                    return var2;
 179:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.AnalyticEvents;
    var _closure1_slot7 = var11;
    var11 = var8.Endpoints;
    var _closure1_slot8 = var11;
    var8 = var8.PlatformTypes;
    var _closure1_slot9 = var8;
    var8 = 16;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/game_console/GameConsoleActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function waitForSession(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'WAIT_FOR_REMOTE_SESSION';
        var2['type'] = var5;
        var5 = arg1;
        var2['sessionType'] = var5;
        var5 = arg3;
        var2['nonce'] = var5;
        var5 = arg2;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['waitForSession'] = var8;
    var3['disconnectRemote'] = var7;
    var7 = function connectToRemote(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'REMOTE_SESSION_CONNECT';
        var2['type'] = var5;
        var5 = arg1;
        var2['sessionId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['connectToRemote'] = var7;
    var7 = function remoteVoiceStateUpdate(arg1, arg2) {
        var4 = arg1;
        var1 = arg2;
        var10 = var1.selfMute;
        var9 = var1.selfDeaf;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var3);
        var6 = var7.dispatch;
        var5 = {};
        var3 = 'REMOTE_COMMAND';
        var5['type'] = var3;
        var5['sessionId'] = var4;
        var8 = {};
        var3 = 'VOICE_STATE_UPDATE';
        var8['type'] = var3;
        var8['self_mute'] = var10;
        var8['self_deaf'] = var9;
        var5['payload'] = var8;
        var5 = var6.bind(var7)(var5);
        var2 = _closure1_slot10;
        var2 = var2.bind(var1)(var3, var4);
        return var1;
    };
    var3['remoteVoiceStateUpdate'] = var7;
    var7 = function remoteDisconnect(arg1) {
        var5 = arg1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var6 = var7.dispatch;
        var3 = {};
        var4 = 'REMOTE_COMMAND';
        var3['type'] = var4;
        var3['sessionId'] = var5;
        var8 = {};
        var4 = 'DISCONNECT';
        var8['type'] = var4;
        var3['payload'] = var8;
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot10;
        var3 = var3.bind(var1)(var4, var5);
        var2 = _closure1_slot11;
        var2 = var2.bind(var1)();
        return var1;
    };
    var3['remoteDisconnect'] = var7;
    var7 = function remoteAudioSettingsUpdate(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.coerceAudioContextForProto;
            var3 = arg3;
            var9 = var5.bind(var6)(var3);
            var3 = null;
            if(!(var3 != var9)) { _fun0008_ip = 141; continue _fun0008 }
 48:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var7 = var5.bind(var1)(var3);
            var6 = var7.dispatch;
            var5 = {};
            var3 = 'REMOTE_COMMAND';
            var5['type'] = var3;
            var5['sessionId'] = var4;
            var8 = {};
            var3 = 'AUDIO_SETTINGS_UPDATE';
            var8['type'] = var3;
            var8['context'] = var9;
            var9 = arg2;
            var8['id'] = var9;
            var11 = arg4;
            var12 = var8;
            var9 = copyDataProperties(var12, var11);
            var5['payload'] = var8;
            var5 = var6.bind(var7)(var5);
            var2 = _closure1_slot10;
            var2 = var2.bind(var1)(var3, var4);
 141:
            return var1;
        }
    };
    var3['remoteAudioSettingsUpdate'] = var7;
    var3['getConnectNonce'] = var6;
    var3['cancelConnectRequest'] = var5;
    var5 = function fetchDevices() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchDevices'] = var5;
    var5 = function persistSelectedDeviceId(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GAME_CONSOLE_SELECT_DEVICE';
        var2['type'] = var5;
        var5 = arg1;
        var2['platform'] = var5;
        var5 = arg2;
        var2['deviceId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['persistSelectedDeviceId'] = var5;
    var3['cancelCommand'] = var4;
    var2 = function transferToPlayStation() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['transferToPlayStation'] = var2;
    return var1;
})();