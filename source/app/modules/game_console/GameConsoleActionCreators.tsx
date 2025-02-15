// app/modules/game_console/GameConsoleActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    yankee = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: logRemoteCommand
        _fun103171: for(var _fun103171_ip = 0; ; ) switch(_fun103171_ip) {
 0:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot7;
            zulu = mike.REMOTE_COMMAND_SENT;
            mike = {};
            golf = argFoo;
            mike['command_type'] = golf;
            options = _closure1_slot5;
            golf = options.getSessionById;
            oscar = argBar;
            golf = golf.bind(options)(oscar);
            options = null;
            verify = options == golf;
            oscar = undefined;
            if(verify) { _fun103171_ip = 100; continue _fun103171 }
 79:
            golf = golf.clientInfo;
            options = options == golf;
            oscar = undefined;
            if(options) { _fun103171_ip = 100; continue _fun103171 }
 94:
            oscar = golf.os;
 100:
            mike['remote_platform'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    golf = function() { // Original name: disconnectRemote
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = golf;
    entity = function() { // Original name: _disconnectRemote
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun103175: for(var _fun103175_ip = 0; ; ) switch(_fun103175_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun103175_ip = 443; continue _fun103175 }
 10:
                    mike = undefined;
                    zulu = undefined;
                    report = _closure1_slot6;
                    tango = report.getAwaitingRemoteSessionInfo;
                    report = tango.bind(report)();
                    tango = null;
                    golf = tango == report;
                    options = undefined;
                    if(golf) { _fun103175_ip = 48; continue _fun103175 }
 42:
                    options = report.nonce;
 48:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    golf = 6;
                    golf = offset[golf];
                    offset = verify.bind(mike)(golf);
                    verify = offset.dispatch;
                    golf = {};
                    yankee = 'REMOTE_SESSION_DISCONNECT';
                    golf['type'] = yankee;
                    golf = verify.bind(offset)(golf);
                    zulu = new Array(0);
                    golf = tango == report;
                    verify = undefined;
                    if(golf) { _fun103175_ip = 106; continue _fun103175 }
 101:
                    verify = report.type;
 106:
                    golf = _closure1_slot9;
                    golf = golf.PLAYSTATION;
                    golf = verify !== golf;
                    if(!golf) { _fun103175_ip = 151; continue _fun103175 }
 123:
                    verify = tango == report;
                    offset = undefined;
                    if(verify) { _fun103175_ip = 137; continue _fun103175 }
 132:
                    offset = report.type;
 137:
                    verify = _closure1_slot9;
                    verify = verify.PLAYSTATION_STAGING;
                    golf = offset !== verify;
 151:
                    if(golf) { _fun103175_ip = 173; continue _fun103175 }
 154:
                    offset = tango == report;
                    verify = undefined;
                    if(offset) { _fun103175_ip = 169; continue _fun103175 }
 163:
                    verify = report.commandId;
 169:
                    golf = tango == verify;
 173:
                    if(golf) { _fun103175_ip = 195; continue _fun103175 }
 176:
                    offset = tango == report;
                    verify = undefined;
                    if(offset) { _fun103175_ip = 191; continue _fun103175 }
 185:
                    verify = report.deviceId;
 191:
                    golf = tango == verify;
 195:
                    if(golf) { _fun103175_ip = 239; continue _fun103175 }
 198:
                    verify = zulu;
                    golf = verify.push;
                    romeo = _closure1_slot18;
                    yankee = report.type;
                    offset = report.deviceId;
                    report = report.commandId;
                    report = romeo.bind(mike)(yankee, offset, report);
                    report = golf.bind(verify)(report);
 239:
                    if(!(tango != options)) { _fun103175_ip = 265; continue _fun103175 }
 243:
                    golf = zulu;
                    report = golf.push;
                    tango = _closure1_slot15;
                    tango = tango.bind(mike)(options);
                    tango = report.bind(golf)(tango);
 265: // try_start_0
                    tango = global;
                    report = tango.Promise;
                    tango = report.all;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=288);
 286:
                    return zulu;
 288:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun103175_ip = 299; continue _fun103175 }
 294: // try_end0
                    _fun103175_ip = 440; continue _fun103175;
 299:
                    return zulu;
 302: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = 7;
                    zulu = offset[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.show;
                    zulu = {};
                    verify = _closure1_slot0;
                    oscar = 8;
                    golf = offset[oscar];
                    golf = verify.bind(mike)(golf);
                    yankee = golf.intl;
                    options = yankee.string;
                    golf = offset[oscar];
                    golf = verify.bind(mike)(golf);
                    golf = golf.t;
                    golf = golf.LNhXcH;
                    golf = options.bind(yankee)(golf);
                    zulu['title'] = golf;
                    golf = offset[oscar];
                    golf = verify.bind(mike)(golf);
                    options = golf.intl;
                    golf = options.string;
                    oscar = offset[oscar];
                    oscar = verify.bind(mike)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.QnKxtL;
                    oscar = golf.bind(options)(oscar);
                    zulu['body'] = oscar;
                    zulu = tango.bind(report)(zulu);
 440:
                    return mike;
 443:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    oscar = function() { // Original name: getConnectNonce
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = oscar;
    entity = function() { // Original name: _getConnectNonce
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun103179: for(var _fun103179_ip = 0; ; ) switch(_fun103179_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun103179_ip = 248; continue _fun103179 }
 10:
                    oscar = undefined;
                    mike = undefined;
 14: // try_start_0
                    tango = _closure1_slot4;
                    zulu = tango.getRTCConnectionId;
                    tango = zulu.bind(tango)();
                    zulu = null;
                    if(!(zulu == tango)) { _fun103179_ip = 71; continue _fun103179 }
 37:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 10;
                    zulu = report[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.ConsoleHandoffType;
                    verify = zulu.CREATE_NEW_CALL;
                    _fun103179_ip = 103; continue _fun103179;
 71:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 10;
                    zulu = report[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    zulu = zulu.ConsoleHandoffType;
                    verify = zulu.TRANSFER_EXISTING_CALL;
 103:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 11;
                    zulu = report[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    report = zulu.HTTP;
                    tango = report.post;
                    zulu = {};
                    golf = _closure1_slot8;
                    golf = golf.CONNECT_REQUEST_CREATE;
                    zulu['url'] = golf;
                    golf = {};
                    options = {};
                    options['handoff_type'] = verify;
                    golf['analytics_properties'] = options;
                    zulu['body'] = golf;
                    golf = false;
                    zulu['rejectWithError'] = golf;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=187);
 185:
                    return zulu;
 187:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun103179_ip = 206; continue _fun103179 }
 193:
                    tango = zulu.body;
                    mike = tango.nonce;
 204: // try_end0
                    _fun103179_ip = 245; continue _fun103179;
 206:
                    return zulu;
 209: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 12;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.captureException;
                    zulu = zulu.bind(tango)(report);
 245:
                    return mike;
 248:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    report = function(argFoo) { // Original name: cancelConnectRequest
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 11;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        oscar = _closure1_slot8;
        report = oscar.CONNECT_REQUEST;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot15 = report;
    entity = function() { // Original name: _fetchDevices
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun103183: for(var _fun103183_ip = 0; ; ) switch(_fun103183_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun103183_ip = 269; continue _fun103183 }
 13:
                    oscar = offset;
                    report = undefined;
                    tango = undefined;
                    options = _closure1_slot1;
                    mike = _closure1_slot2;
                    golf = 6;
                    mike = mike[golf];
                    verify = options.bind(report)(mike);
                    options = verify.dispatch;
                    mike = {};
                    yankee = 'GAME_CONSOLE_FETCH_DEVICES_START';
                    mike['type'] = yankee;
                    mike['platform'] = offset;
                    mike = options.bind(verify)(mike);
 70: // try_start_0
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    mike = 11;
                    mike = verify[mike];
                    mike = options.bind(report)(mike);
                    verify = mike.HTTP;
                    options = verify.get;
                    mike = {};
                    romeo = _closure1_slot8;
                    yankee = romeo.CONSOLES_DEVICES;
                    offset = oscar;
                    offset = yankee.bind(romeo)(offset);
                    mike['url'] = offset;
                    offset = false;
                    mike['rejectWithError'] = offset;
                    mike = options.bind(verify)(mike);
                    SaveGenerator(address=139);
 137:
                    return mike;
 139:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(options) { _fun103183_ip = 214; continue _fun103183 }
 145:
                    tango = mike;
 148: // try_end0
                    tango = tango.body;
                    tango = tango.devices;
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[golf];
                    offset = verify.bind(report)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS';
                    options['type'] = yankee;
                    yankee = oscar;
                    options['platform'] = yankee;
                    options['devices'] = tango;
                    options = verify.bind(offset)(options);
                    return tango;
 214:
                    return mike;
 217: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GAME_CONSOLE_FETCH_DEVICES_FAIL';
                    zulu['type'] = golf;
                    zulu['platform'] = oscar;
                    zulu['error'] = mike;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 269:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _sendConnectVoiceCommand
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun103186: for(var _fun103186_ip = 0; ; ) switch(_fun103186_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun103186_ip = 363; continue _fun103186 }
 13:
                    oscar = offset;
                    yankee = argBar;
                    romeo = argBaz;
                    foxtrot = argCorge;
                    report = undefined;
                    tango = undefined;
                    options = _closure1_slot1;
                    mike = _closure1_slot2;
                    golf = 6;
                    mike = mike[golf];
                    verify = options.bind(report)(mike);
                    options = verify.dispatch;
                    mike = {};
                    backup = 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START';
                    mike['type'] = backup;
                    mike['platform'] = offset;
                    mike = options.bind(verify)(mike);
 79: // try_start_0
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    mike = 11;
                    mike = sizing[mike];
                    mike = kilo.bind(report)(mike);
                    verify = mike.HTTP;
                    options = verify.post;
                    mike = {};
                    result = _closure1_slot8;
                    output = result.CONSOLES_DEVICES_COMMANDS;
                    backup = oscar;
                    offset = yankee;
                    offset = output.bind(result)(backup, offset);
                    mike['url'] = offset;
                    offset = {};
                    backup = 13;
                    backup = sizing[backup];
                    backup = kilo.bind(report)(backup);
                    backup = backup.ConsoleCommands;
                    backup = backup.CONNECT_VOICE;
                    offset['command'] = backup;
                    backup = romeo;
                    kilo = backup.id;
                    offset['channel_id'] = kilo;
                    backup = backup.guild_id;
                    offset['guild_id'] = backup;
                    backup = foxtrot;
                    offset['nonce'] = backup;
                    mike['body'] = offset;
                    offset = false;
                    mike['rejectWithError'] = offset;
                    mike = options.bind(verify)(mike);
                    SaveGenerator(address=217);
 215:
                    return mike;
 217:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(options) { _fun103186_ip = 308; continue _fun103186 }
 223:
                    tango = mike;
 226: // try_end0
                    tango = tango.body;
                    tango = tango.id;
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[golf];
                    offset = verify.bind(report)(options);
                    verify = offset.dispatch;
                    options = {};
                    backup = 'WAIT_FOR_REMOTE_SESSION';
                    options['type'] = backup;
                    backup = oscar;
                    options['sessionType'] = backup;
                    options['nonce'] = foxtrot;
                    romeo = romeo.id;
                    options['channelId'] = romeo;
                    options['deviceId'] = yankee;
                    options['commandId'] = tango;
                    options = verify.bind(offset)(options);
                    return tango;
 308:
                    return mike;
 311: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL';
                    zulu['type'] = golf;
                    zulu['platform'] = oscar;
                    zulu['error'] = mike;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 363:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    tango = function() { // Original name: cancelCommand
        entity = undefined;
        tango = _closure1_slot19;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot18 = tango;
    entity = function() { // Original name: _cancelCommand
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun103190: for(var _fun103190_ip = 0; ; ) switch(_fun103190_ip) {
 0:
                    StartGenerator();
                    foxtrot = argFoo;
                    romeo = argBar;
                    yankee = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun103190_ip = 305; continue _fun103190 }
 19:
                    options = foxtrot;
                    golf = romeo;
                    oscar = yankee;
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    verify = 6;
                    mike = mike[verify];
                    report = undefined;
                    offset = tango.bind(report)(mike);
                    tango = offset.dispatch;
                    mike = {};
                    backup = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START';
                    mike['type'] = backup;
                    mike['platform'] = foxtrot;
                    mike['deviceId'] = romeo;
                    mike['commandId'] = yankee;
                    mike = tango.bind(offset)(mike);
 90: // try_start_0
                    tango = _closure1_slot0;
                    offset = _closure1_slot2;
                    mike = 11;
                    mike = offset[mike];
                    mike = tango.bind(report)(mike);
                    offset = mike.HTTP;
                    tango = offset.del;
                    mike = {};
                    kilo = _closure1_slot8;
                    backup = kilo.CONSOLES_DEVICES_COMMAND;
                    foxtrot = options;
                    romeo = golf;
                    yankee = oscar;
                    yankee = backup.bind(kilo)(foxtrot, romeo, yankee);
                    mike['url'] = yankee;
                    yankee = false;
                    mike['rejectWithError'] = yankee;
                    mike = tango.bind(offset)(mike);
                    SaveGenerator(address=168);
 166:
                    return mike;
 168:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun103190_ip = 240; continue _fun103190 }
 174: // try_end0
                    offset = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[verify];
                    yankee = offset.bind(report)(tango);
                    offset = yankee.dispatch;
                    tango = {};
                    romeo = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS';
                    tango['type'] = romeo;
                    romeo = options;
                    tango['platform'] = romeo;
                    romeo = golf;
                    tango['deviceId'] = romeo;
                    romeo = oscar;
                    tango['commandId'] = romeo;
                    tango = offset.bind(yankee)(tango);
                    return report;
 240:
                    return mike;
 243: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[verify];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    verify = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL';
                    zulu['type'] = verify;
                    zulu['platform'] = options;
                    zulu['deviceId'] = golf;
                    zulu['commandId'] = oscar;
                    zulu['error'] = mike;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 305:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot19 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _transferToPlayStation
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun103193: for(var _fun103193_ip = 0; ; ) switch(_fun103193_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    golf = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun103193_ip = 181; continue _fun103193 }
 16:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 14;
                    mike = tango[mike];
                    oscar = undefined;
                    zulu = zulu.bind(oscar)(mike);
                    mike = zulu.maybeShowPTTAlert;
                    mike = mike.bind(zulu)(verify);
                    SaveGenerator(address=56);
 54:
                    return mike;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun103193_ip = 178; continue _fun103193 }
 62:
                    zulu = _closure1_slot11;
                    zulu = zulu.bind(oscar)();
                    SaveGenerator(address=74);
 72:
                    return zulu;
 74:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun103193_ip = 175; continue _fun103193 }
 80:
                    tango = _closure1_slot13;
                    tango = tango.bind(oscar)();
                    SaveGenerator(address=92);
 90:
                    return tango;
 92:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun103193_ip = 172; continue _fun103193 }
 98:
                    offset = function() { // Original name: sendConnectVoiceCommand
                        entity = undefined;
                        tango = _closure1_slot17;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    backup = argBar;
                    sizing = undefined;
                    kilo = verify;
                    foxtrot = golf;
                    romeo = tango;
                    report = sizing[offset](kilo, backup, foxtrot, romeo, yankee);
                    SaveGenerator(address=129);
 127:
                    return report;
 129:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun103193_ip = 169; continue _fun103193 }
 135:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    options = 15;
                    options = yankee[options];
                    options = offset.bind(oscar)(options);
                    golf = golf.id;
                    golf = options.bind(oscar)(golf, verify);
                    return oscar;
 169:
                    return report;
 172:
                    return tango;
 175:
                    return zulu;
 178:
                    return mike;
 181:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot20 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = global;
    foxtrot = entity.Object;
    romeo = foxtrot.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, options);
    entity = 0;
    options = offset[entity];
    entity = undefined;
    options = yankee.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = offset[options];
    options = verify.bind(entity)(options);
    yankee = options.AnalyticEvents;
    var _closure1_slot7 = yankee;
    yankee = options.Endpoints;
    var _closure1_slot8 = yankee;
    options = options.PlatformTypes;
    var _closure1_slot9 = options;
    options = 16;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/game_console/GameConsoleActionCreators.tsx';
    options = verify.bind(offset)(options);
    options = function(argFoo, argBar, argBaz) { // Original name: waitForSession
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'WAIT_FOR_REMOTE_SESSION';
        mike['type'] = report;
        report = argFoo;
        mike['sessionType'] = report;
        report = argBaz;
        mike['nonce'] = report;
        report = argBar;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['waitForSession'] = options;
    zulu['disconnectRemote'] = golf;
    golf = function(argFoo) { // Original name: connectToRemote
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'REMOTE_SESSION_CONNECT';
        mike['type'] = report;
        report = argFoo;
        mike['sessionId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['connectToRemote'] = golf;
    golf = function(argFoo, argBar) { // Original name: remoteVoiceStateUpdate
        tango = argFoo;
        entity = argBar;
        offset = entity.selfMute;
        verify = entity.selfDeaf;
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 6;
        zulu = zulu[entity];
        entity = undefined;
        golf = report.bind(entity)(zulu);
        oscar = golf.dispatch;
        report = {};
        zulu = 'REMOTE_COMMAND';
        report['type'] = zulu;
        report['sessionId'] = tango;
        options = {};
        zulu = 'VOICE_STATE_UPDATE';
        options['type'] = zulu;
        options['self_mute'] = offset;
        options['self_deaf'] = verify;
        report['payload'] = options;
        report = oscar.bind(golf)(report);
        mike = _closure1_slot10;
        mike = mike.bind(entity)(zulu, tango);
        return entity;
    };
    zulu['remoteVoiceStateUpdate'] = golf;
    golf = function(argFoo) { // Original name: remoteDisconnect
        report = argFoo;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 6;
        zulu = zulu[entity];
        entity = undefined;
        golf = tango.bind(entity)(zulu);
        oscar = golf.dispatch;
        zulu = {};
        tango = 'REMOTE_COMMAND';
        zulu['type'] = tango;
        zulu['sessionId'] = report;
        options = {};
        tango = 'DISCONNECT';
        options['type'] = tango;
        zulu['payload'] = options;
        zulu = oscar.bind(golf)(zulu);
        zulu = _closure1_slot10;
        zulu = zulu.bind(entity)(tango, report);
        mike = _closure1_slot11;
        mike = mike.bind(entity)();
        return entity;
    };
    zulu['remoteDisconnect'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: remoteAudioSettingsUpdate
        _fun103199: for(var _fun103199_ip = 0; ; ) switch(_fun103199_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.coerceAudioContextForProto;
            zulu = argBaz;
            verify = report.bind(oscar)(zulu);
            zulu = null;
            if(!(zulu != verify)) { _fun103199_ip = 141; continue _fun103199 }
 48:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 6;
            zulu = oscar[zulu];
            golf = report.bind(entity)(zulu);
            oscar = golf.dispatch;
            report = {};
            zulu = 'REMOTE_COMMAND';
            report['type'] = zulu;
            report['sessionId'] = tango;
            options = {};
            zulu = 'AUDIO_SETTINGS_UPDATE';
            options['type'] = zulu;
            options['context'] = verify;
            verify = argBar;
            options['id'] = verify;
            yankee = argCorge;
            romeo = options;
            verify = copyDataProperties(romeo, yankee);
            report['payload'] = options;
            report = oscar.bind(golf)(report);
            mike = _closure1_slot10;
            mike = mike.bind(entity)(zulu, tango);
 141:
            return entity;
        }
    };
    zulu['remoteAudioSettingsUpdate'] = golf;
    zulu['getConnectNonce'] = oscar;
    zulu['cancelConnectRequest'] = report;
    report = function() { // Original name: fetchDevices
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchDevices'] = report;
    report = function(argFoo, argBar) { // Original name: persistSelectedDeviceId
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GAME_CONSOLE_SELECT_DEVICE';
        mike['type'] = report;
        report = argFoo;
        mike['platform'] = report;
        report = argBar;
        mike['deviceId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['persistSelectedDeviceId'] = report;
    zulu['cancelCommand'] = tango;
    mike = function() { // Original name: transferToPlayStation
        entity = undefined;
        tango = _closure1_slot20;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['transferToPlayStation'] = mike;
    return entity;
})();