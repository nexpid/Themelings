// app/modules/game_console/GameConsoleActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: logRemoteCommand
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot7;
            zuuluu = michal.REMOTE_COMMAND_SENT;
            michal = {};
            golfie = argFoo;
            michal['command_type'] = golfie;
            option = _closure1_slot5;
            golfie = option.getSessionById;
            oscard = argBar;
            golfie = golfie.bind(option)(oscard);
            option = null;
            verify = option == golfie;
            oscard = undefined;
            if(verify) { _fun00002_ip = 100; continue _fun00001 }
 79:
            golfie = golfie.clientInfo;
            option = option == golfie;
            oscard = undefined;
            if(option) { _fun00002_ip = 100; continue _fun00001 }
 94:
            oscard = golfie.os;
 100:
            michal['remote_platform'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    golfie = function() { // Original name: disconnectRemote
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = golfie;
    entity = function() { // Original name: _disconnectRemote
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 447; continue _fun00003 }
 10:
                    michal = undefined;
                    zuuluu = undefined;
                    report = _closure1_slot6;
                    tangon = report.getAwaitingRemoteSessionInfo;
                    report = tangon.bind(report)();
                    tangon = null;
                    golfie = tangon == report;
                    option = undefined;
                    if(golfie) { _fun00004_ip = 48; continue _fun00003 }
 42:
                    option = report.nonce;
 48:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 6;
                    golfie = offset[golfie];
                    offset = verify.bind(michal)(golfie);
                    verify = offset.dispatch;
                    golfie = {};
                    yankee = 'REMOTE_SESSION_DISCONNECT';
                    golfie['type'] = yankee;
                    golfie = verify.bind(offset)(golfie);
                    zuuluu = new Array(0);
                    golfie = tangon == report;
                    verify = undefined;
                    if(golfie) { _fun00004_ip = 106; continue _fun00003 }
 101:
                    verify = report.type;
 106:
                    golfie = _closure1_slot9;
                    golfie = golfie.PLAYSTATION;
                    golfie = verify !== golfie;
                    if(!golfie) { _fun00004_ip = 151; continue _fun00003 }
 123:
                    verify = tangon == report;
                    offset = undefined;
                    if(verify) { _fun00004_ip = 137; continue _fun00003 }
 132:
                    offset = report.type;
 137:
                    verify = _closure1_slot9;
                    verify = verify.PLAYSTATION_STAGING;
                    golfie = offset !== verify;
 151:
                    if(golfie) { _fun00004_ip = 173; continue _fun00003 }
 154:
                    offset = tangon == report;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 169; continue _fun00003 }
 163:
                    verify = report.commandId;
 169:
                    golfie = tangon == verify;
 173:
                    if(golfie) { _fun00004_ip = 195; continue _fun00003 }
 176:
                    offset = tangon == report;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 191; continue _fun00003 }
 185:
                    verify = report.deviceId;
 191:
                    golfie = tangon == verify;
 195:
                    if(golfie) { _fun00004_ip = 239; continue _fun00003 }
 198:
                    verify = zuuluu;
                    golfie = verify.push;
                    romeon = _closure1_slot18;
                    yankee = report.type;
                    offset = report.deviceId;
                    report = report.commandId;
                    report = romeon.bind(michal)(yankee, offset, report);
                    report = golfie.bind(verify)(report);
 239:
                    if(!(tangon != option)) { _fun00004_ip = 265; continue _fun00003 }
 243:
                    golfie = zuuluu;
                    report = golfie.push;
                    tangon = _closure1_slot15;
                    tangon = tangon.bind(michal)(option);
                    tangon = report.bind(golfie)(tangon);
 265: // try_start_0
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.all;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=288);
 286:
                    return zuuluu;
 288:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 299; continue _fun00003 }
 294: // try_end0
                    _fun00004_ip = 444; continue _fun00003;
 299:
                    return zuuluu;
 302: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tangon = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = offset[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.show;
                    zuuluu = {};
                    verify = _closure1_slot0;
                    oscard = 8;
                    golfie = offset[oscard];
                    golfie = verify.bind(michal)(golfie);
                    yankee = golfie.intl;
                    option = yankee.string;
                    golfie = offset[oscard];
                    golfie = verify.bind(michal)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.LNhXcH;
                    golfie = option.bind(yankee)(golfie);
                    zuuluu['title'] = golfie;
                    golfie = offset[oscard];
                    golfie = verify.bind(michal)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    oscard = offset[oscard];
                    oscard = verify.bind(michal)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.QnKxtL;
                    oscard = golfie.bind(option)(oscard);
                    zuuluu['body'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 444:
                    return michal;
 447:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    oscard = function() { // Original name: getConnectNonce
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = oscard;
    entity = function() { // Original name: _getConnectNonce
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 248; continue _fun00005 }
 10:
                    oscard = undefined;
                    michal = undefined;
 14: // try_start_0
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getRTCConnectionId;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00006_ip = 71; continue _fun00005 }
 37:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.ConsoleHandoffType;
                    verify = zuuluu.CREATE_NEW_CALL;
                    _fun00006_ip = 103; continue _fun00005;
 71:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.ConsoleHandoffType;
                    verify = zuuluu.TRANSFER_EXISTING_CALL;
 103:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.post;
                    zuuluu = {};
                    golfie = _closure1_slot8;
                    golfie = golfie.CONNECT_REQUEST_CREATE;
                    zuuluu['url'] = golfie;
                    golfie = {};
                    option = {};
                    option['handoff_type'] = verify;
                    golfie['analytics_properties'] = option;
                    zuuluu['body'] = golfie;
                    golfie = false;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=187);
 185:
                    return zuuluu;
 187:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 206; continue _fun00005 }
 193:
                    tangon = zuuluu.body;
                    michal = tangon.nonce;
 204: // try_end0
                    _fun00006_ip = 245; continue _fun00005;
 206:
                    return zuuluu;
 209: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.captureException;
                    zuuluu = zuuluu.bind(tangon)(report);
 245:
                    return michal;
 248:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    report = function(argFoo) { // Original name: cancelConnectRequest
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 11;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        oscard = _closure1_slot8;
        report = oscard.CONNECT_REQUEST;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot15 = report;
    entity = function() { // Original name: _fetchDevices
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 269; continue _fun00007 }
 13:
                    oscard = offset;
                    report = undefined;
                    tangon = undefined;
                    option = _closure1_slot1;
                    michal = _closure1_slot2;
                    golfie = 6;
                    michal = michal[golfie];
                    verify = option.bind(report)(michal);
                    option = verify.dispatch;
                    michal = {};
                    yankee = 'GAME_CONSOLE_FETCH_DEVICES_START';
                    michal['type'] = yankee;
                    michal['platform'] = offset;
                    michal = option.bind(verify)(michal);
 70: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 11;
                    michal = verify[michal];
                    michal = option.bind(report)(michal);
                    verify = michal.HTTP;
                    option = verify.get;
                    michal = {};
                    romeon = _closure1_slot8;
                    yankee = romeon.CONSOLES_DEVICES;
                    offset = oscard;
                    offset = yankee.bind(romeon)(offset);
                    michal['url'] = offset;
                    offset = false;
                    michal['rejectWithError'] = offset;
                    michal = option.bind(verify)(michal);
                    SaveGenerator(address=139);
 137:
                    return michal;
 139:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(option) { _fun00008_ip = 214; continue _fun00007 }
 145:
                    tangon = michal;
 148: // try_end0
                    tangon = tangon.body;
                    tangon = tangon.devices;
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[golfie];
                    offset = verify.bind(report)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS';
                    option['type'] = yankee;
                    yankee = oscard;
                    option['platform'] = yankee;
                    option['devices'] = tangon;
                    option = verify.bind(offset)(option);
                    return tangon;
 214:
                    return michal;
 217: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'GAME_CONSOLE_FETCH_DEVICES_FAIL';
                    zuuluu['type'] = golfie;
                    zuuluu['platform'] = oscard;
                    zuuluu['error'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 269:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _sendConnectVoiceCommand
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 363; continue _fun00009 }
 13:
                    oscard = offset;
                    yankee = argBar;
                    romeon = argBaz;
                    foxtra = argCor;
                    report = undefined;
                    tangon = undefined;
                    option = _closure1_slot1;
                    michal = _closure1_slot2;
                    golfie = 6;
                    michal = michal[golfie];
                    verify = option.bind(report)(michal);
                    option = verify.dispatch;
                    michal = {};
                    backup = 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START';
                    michal['type'] = backup;
                    michal['platform'] = offset;
                    michal = option.bind(verify)(michal);
 79: // try_start_0
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    michal = 11;
                    michal = sizing[michal];
                    michal = kiloes.bind(report)(michal);
                    verify = michal.HTTP;
                    option = verify.post;
                    michal = {};
                    result = _closure1_slot8;
                    output = result.CONSOLES_DEVICES_COMMANDS;
                    backup = oscard;
                    offset = yankee;
                    offset = output.bind(result)(backup, offset);
                    michal['url'] = offset;
                    offset = {};
                    backup = 13;
                    backup = sizing[backup];
                    backup = kiloes.bind(report)(backup);
                    backup = backup.ConsoleCommands;
                    backup = backup.CONNECT_VOICE;
                    offset['command'] = backup;
                    backup = romeon;
                    kiloes = backup.id;
                    offset['channel_id'] = kiloes;
                    backup = backup.guild_id;
                    offset['guild_id'] = backup;
                    backup = foxtra;
                    offset['nonce'] = backup;
                    michal['body'] = offset;
                    offset = false;
                    michal['rejectWithError'] = offset;
                    michal = option.bind(verify)(michal);
                    SaveGenerator(address=217);
 215:
                    return michal;
 217:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(option) { _fun00010_ip = 308; continue _fun00009 }
 223:
                    tangon = michal;
 226: // try_end0
                    tangon = tangon.body;
                    tangon = tangon.id;
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[golfie];
                    offset = verify.bind(report)(option);
                    verify = offset.dispatch;
                    option = {};
                    backup = 'WAIT_FOR_REMOTE_SESSION';
                    option['type'] = backup;
                    backup = oscard;
                    option['sessionType'] = backup;
                    option['nonce'] = foxtra;
                    romeon = romeon.id;
                    option['channelId'] = romeon;
                    option['deviceId'] = yankee;
                    option['commandId'] = tangon;
                    option = verify.bind(offset)(option);
                    return tangon;
 308:
                    return michal;
 311: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL';
                    zuuluu['type'] = golfie;
                    zuuluu['platform'] = oscard;
                    zuuluu['error'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 363:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot17 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    tangon = function() { // Original name: cancelCommand
        entity = undefined;
        tangon = _closure1_slot19;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = tangon;
    entity = function() { // Original name: _cancelCommand
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    foxtra = argFoo;
                    romeon = argBar;
                    yankee = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 305; continue _fun00011 }
 19:
                    option = foxtra;
                    golfie = romeon;
                    oscard = yankee;
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    verify = 6;
                    michal = michal[verify];
                    report = undefined;
                    offset = tangon.bind(report)(michal);
                    tangon = offset.dispatch;
                    michal = {};
                    backup = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START';
                    michal['type'] = backup;
                    michal['platform'] = foxtra;
                    michal['deviceId'] = romeon;
                    michal['commandId'] = yankee;
                    michal = tangon.bind(offset)(michal);
 90: // try_start_0
                    tangon = _closure1_slot0;
                    offset = _closure1_slot2;
                    michal = 11;
                    michal = offset[michal];
                    michal = tangon.bind(report)(michal);
                    offset = michal.HTTP;
                    tangon = offset.del;
                    michal = {};
                    kiloes = _closure1_slot8;
                    backup = kiloes.CONSOLES_DEVICES_COMMAND;
                    foxtra = option;
                    romeon = golfie;
                    yankee = oscard;
                    yankee = backup.bind(kiloes)(foxtra, romeon, yankee);
                    michal['url'] = yankee;
                    yankee = false;
                    michal['rejectWithError'] = yankee;
                    michal = tangon.bind(offset)(michal);
                    SaveGenerator(address=168);
 166:
                    return michal;
 168:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00012_ip = 240; continue _fun00011 }
 174: // try_end0
                    offset = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[verify];
                    yankee = offset.bind(report)(tangon);
                    offset = yankee.dispatch;
                    tangon = {};
                    romeon = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS';
                    tangon['type'] = romeon;
                    romeon = option;
                    tangon['platform'] = romeon;
                    romeon = golfie;
                    tangon['deviceId'] = romeon;
                    romeon = oscard;
                    tangon['commandId'] = romeon;
                    tangon = offset.bind(yankee)(tangon);
                    return report;
 240:
                    return michal;
 243: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[verify];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    verify = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL';
                    zuuluu['type'] = verify;
                    zuuluu['platform'] = option;
                    zuuluu['deviceId'] = golfie;
                    zuuluu['commandId'] = oscard;
                    zuuluu['error'] = michal;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 305:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot19 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _transferToPlayStation
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    golfie = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 181; continue _fun00013 }
 16:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 14;
                    michal = tangon[michal];
                    oscard = undefined;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = zuuluu.maybeShowPTTAlert;
                    michal = michal.bind(zuuluu)(verify);
                    SaveGenerator(address=56);
 54:
                    return michal;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 178; continue _fun00013 }
 62:
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.bind(oscard)();
                    SaveGenerator(address=74);
 72:
                    return zuuluu;
 74:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 175; continue _fun00013 }
 80:
                    tangon = _closure1_slot13;
                    tangon = tangon.bind(oscard)();
                    SaveGenerator(address=92);
 90:
                    return tangon;
 92:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 172; continue _fun00013 }
 98:
                    offset = function() { // Original name: sendConnectVoiceCommand
                        entity = undefined;
                        tangon = _closure1_slot17;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    backup = argBar;
                    sizing = undefined;
                    kiloes = verify;
                    foxtra = golfie;
                    romeon = tangon;
                    report = sizing[offset](kiloes, backup, foxtra, romeon, yankee);
                    SaveGenerator(address=129);
 127:
                    return report;
 129:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun00014_ip = 169; continue _fun00013 }
 135:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    option = 15;
                    option = yankee[option];
                    option = offset.bind(oscard)(option);
                    golfie = golfie.id;
                    golfie = option.bind(oscard)(golfie, verify);
                    return oscard;
 169:
                    return report;
 172:
                    return tangon;
 175:
                    return zuuluu;
 178:
                    return michal;
 181:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = global;
    foxtra = entity.Object;
    romeon = foxtra.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, option);
    entity = 0;
    option = offset[entity];
    entity = undefined;
    option = yankee.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = offset[option];
    option = verify.bind(entity)(option);
    yankee = option.AnalyticEvents;
    var _closure1_slot7 = yankee;
    yankee = option.Endpoints;
    var _closure1_slot8 = yankee;
    option = option.PlatformTypes;
    var _closure1_slot9 = option;
    option = 16;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/game_console/GameConsoleActionCreators.tsx';
    option = verify.bind(offset)(option);
    option = function(argFoo, argBar, argBaz) { // Original name: waitForSession
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'WAIT_FOR_REMOTE_SESSION';
        michal['type'] = report;
        report = argFoo;
        michal['sessionType'] = report;
        report = argBaz;
        michal['nonce'] = report;
        report = argBar;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['waitForSession'] = option;
    zuuluu['disconnectRemote'] = golfie;
    golfie = function(argFoo) { // Original name: connectToRemote
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'REMOTE_SESSION_CONNECT';
        michal['type'] = report;
        report = argFoo;
        michal['sessionId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['connectToRemote'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: remoteVoiceStateUpdate
        tangon = argFoo;
        entity = argBar;
        offset = entity.selfMute;
        verify = entity.selfDeaf;
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 6;
        zuuluu = zuuluu[entity];
        entity = undefined;
        golfie = report.bind(entity)(zuuluu);
        oscard = golfie.dispatch;
        report = {};
        zuuluu = 'REMOTE_COMMAND';
        report['type'] = zuuluu;
        report['sessionId'] = tangon;
        option = {};
        zuuluu = 'VOICE_STATE_UPDATE';
        option['type'] = zuuluu;
        option['self_mute'] = offset;
        option['self_deaf'] = verify;
        report['payload'] = option;
        report = oscard.bind(golfie)(report);
        michal = _closure1_slot10;
        michal = michal.bind(entity)(zuuluu, tangon);
        return entity;
    };
    zuuluu['remoteVoiceStateUpdate'] = golfie;
    golfie = function(argFoo) { // Original name: remoteDisconnect
        report = argFoo;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 6;
        zuuluu = zuuluu[entity];
        entity = undefined;
        golfie = tangon.bind(entity)(zuuluu);
        oscard = golfie.dispatch;
        zuuluu = {};
        tangon = 'REMOTE_COMMAND';
        zuuluu['type'] = tangon;
        zuuluu['sessionId'] = report;
        option = {};
        tangon = 'DISCONNECT';
        option['type'] = tangon;
        zuuluu['payload'] = option;
        zuuluu = oscard.bind(golfie)(zuuluu);
        zuuluu = _closure1_slot10;
        zuuluu = zuuluu.bind(entity)(tangon, report);
        michal = _closure1_slot11;
        michal = michal.bind(entity)();
        return entity;
    };
    zuuluu['remoteDisconnect'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: remoteAudioSettingsUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.coerceAudioContextForProto;
            zuuluu = argBaz;
            verify = report.bind(oscard)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != verify)) { _fun00016_ip = 141; continue _fun00015 }
 48:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 6;
            zuuluu = oscard[zuuluu];
            golfie = report.bind(entity)(zuuluu);
            oscard = golfie.dispatch;
            report = {};
            zuuluu = 'REMOTE_COMMAND';
            report['type'] = zuuluu;
            report['sessionId'] = tangon;
            option = {};
            zuuluu = 'AUDIO_SETTINGS_UPDATE';
            option['type'] = zuuluu;
            option['context'] = verify;
            verify = argBar;
            option['id'] = verify;
            yankee = argCor;
            romeon = option;
            verify = copyDataProperties(romeon, yankee);
            report['payload'] = option;
            report = oscard.bind(golfie)(report);
            michal = _closure1_slot10;
            michal = michal.bind(entity)(zuuluu, tangon);
 141:
            return entity;
        }
    };
    zuuluu['remoteAudioSettingsUpdate'] = golfie;
    zuuluu['getConnectNonce'] = oscard;
    zuuluu['cancelConnectRequest'] = report;
    report = function() { // Original name: fetchDevices
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchDevices'] = report;
    report = function(argFoo, argBar) { // Original name: persistSelectedDeviceId
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GAME_CONSOLE_SELECT_DEVICE';
        michal['type'] = report;
        report = argFoo;
        michal['platform'] = report;
        report = argBar;
        michal['deviceId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['persistSelectedDeviceId'] = report;
    zuuluu['cancelCommand'] = tangon;
    michal = function() { // Original name: transferToPlayStation
        entity = undefined;
        tangon = _closure1_slot20;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['transferToPlayStation'] = michal;
    return entity;
})();