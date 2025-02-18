// app/modules/rpc/RPCServer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.TransportTypes;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot6 = golfie;
    golfie = tangon.RPCEvents;
    var _closure1_slot7 = golfie;
    golfie = tangon.RPCCommands;
    var _closure1_slot8 = golfie;
    golfie = tangon.RPCCloseCodes;
    var _closure1_slot9 = golfie;
    tangon = tangon.RPCErrors;
    var _closure1_slot10 = tangon;
    tangon = new Array(0);
    var _closure1_slot11 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: RPCServer
            zuuluu = this;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = function() {
                entity = null;
                return entity;
            };
            zuuluu['getCurrentUser'] = tangon;
            tangon = function() {
                entity = undefined;
                return entity;
            };
            zuuluu['onConnect'] = tangon;
            michal = function() {
                entity = undefined;
                return entity;
            };
            zuuluu['onDisconnect'] = michal;
            michal = {};
            zuuluu['events'] = michal;
            michal = {};
            zuuluu['commands'] = michal;
            michal = global;
            tangon = michal.Set;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            option = report;
            tangon = new option[tangon](golfie);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['sockets'] = tangon;
            tangon = new Array(0);
            zuuluu['subscriptions'] = tangon;
            michal = michal.Map;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['abortControllers'] = michal;
            michal = argFoo;
            zuuluu['getJoi'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'registerTransport';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            tangon = argFoo;
            michal = this;
            var _closure3_slot0 = michal;
            report = tangon.on;
            zuuluu = 'connect';
            michal = function(argFoo) {
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleConnect;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = report.bind(tangon)(zuuluu, michal);
            report = tangon.on;
            zuuluu = 'request';
            michal = function(argFoo, argBar) {
                tangon = _closure3_slot0;
                zuuluu = tangon.handleRequest;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = report.bind(tangon)(zuuluu, michal);
            zuuluu = tangon.on;
            michal = 'disconnect';
            entity = function(argFoo, argBar) {
                tangon = _closure3_slot0;
                zuuluu = tangon.handleDisconnect;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(16);
        michal[0] = entity;
        entity = {};
        oscard = 'handleConnect';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                option = this;
                michal = option.sockets;
                entity = michal.add;
                entity = entity.bind(michal)(tangon);
                report = option.abortControllers;
                zuuluu = report.set;
                michal = global;
                entity = michal.AbortController;
                oscard = entity.prototype;
                oscard = Object.create(oscard, {constructor: {value: entity}});
                backup = oscard;
                entity = new backup[entity](foxtra);
                entity = entity instanceof Object ? entity : oscard;
                entity = zuuluu.bind(report)(tangon, entity);
                entity = option.onConnect;
                entity = entity.bind(option)(tangon);
                golfie = {};
                entity = tangon.version;
                golfie['v'] = entity;
                entity = {};
                zuuluu = michal.window;
                zuuluu = zuuluu.GLOBAL_ENV;
                zuuluu = zuuluu.CDN_HOST;
                entity['cdn_host'] = zuuluu;
                michal = michal.window;
                michal = michal.GLOBAL_ENV;
                michal = michal.API_ENDPOINT;
                entity['api_endpoint'] = michal;
                michal = 'production';
                entity['environment'] = michal;
                golfie['config'] = entity;
                zuuluu = tangon.transport;
                michal = _closure1_slot5;
                michal = michal.IPC;
                if(!(zuuluu === michal)) { _fun00002_ip = 226; continue _fun00001 }
 178:
                michal = option.getCurrentUser;
                report = michal.bind(option)();
                michal = null;
                if(!(michal != report)) { _fun00002_ip = 270; continue _fun00001 }
 193:
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 6;
                michal = zuuluu[michal];
                zuuluu = undefined;
                michal = oscard.bind(zuuluu)(michal);
                michal = michal.bind(zuuluu)(report);
                golfie['user'] = michal;
 226:
                oscard = option.dispatch;
                michal = _closure1_slot8;
                yankee = michal.DISPATCH;
                michal = _closure1_slot7;
                offset = michal.READY;
                romeon = null;
                backup = option;
                foxtra = tangon;
                verify = golfie;
                michal = backup[oscard](foxtra, romeon, yankee, offset, verify, option);
                michal = undefined;
                return michal;
 270:
                zuuluu = tangon.close;
                entity = _closure1_slot9;
                michal = entity.CLOSE_NORMAL;
                entity = 'User logged out';
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'handleDisconnect';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                entity = zuuluu.removeSubscriptions;
                entity = entity.bind(zuuluu)(tangon);
                michal = zuuluu.sockets;
                entity = michal.delete;
                entity = entity.bind(michal)(tangon);
                michal = zuuluu.abortControllers;
                entity = michal.get;
                report = entity.bind(michal)(tangon);
                entity = null;
                if(!(entity != report)) { _fun00004_ip = 72; continue _fun00003 }
 57:
                michal = report.abort;
                entity = 'DISCONNECTED';
                entity = michal.bind(report)(entity);
 72:
                michal = zuuluu.abortControllers;
                entity = michal.delete;
                entity = entity.bind(michal)(tangon);
                michal = zuuluu.onDisconnect;
                entity = argBar;
                entity = michal.bind(zuuluu)(tangon, entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'handleRequest';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = argFoo;
            var _closure3_slot1 = zuuluu;
            zuuluu = argBar;
            var _closure3_slot2 = zuuluu;
            var _closure3_slot3 = michal;
            michal = global;
            tangon = michal.Promise;
            michal = tangon.prototype;
            zuuluu = Object.create(michal, {constructor: {value: tangon}});
            report = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure3_slot2;
                    zuuluu = michal.nonce;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 449; continue _fun00005 }
 22:
                    zuuluu = _closure3_slot2;
                    tangon = zuuluu.nonce;
                    zuuluu = '';
                    if(!(zuuluu !== tangon)) { _fun00006_ip = 449; continue _fun00005 }
 43:
                    zuuluu = _closure3_slot2;
                    option = zuuluu.cmd;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.commands;
                    tangon = zuuluu[option];
                    if(!(michal != tangon)) { _fun00006_ip = 348; continue _fun00005 }
 74:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    michal = 8;
                    report = report[michal];
                    michal = undefined;
                    golfie = oscard.bind(michal)(report);
                    report = _closure3_slot1;
                    report = report.authorization;
                    oscard = report.scopes;
                    report = tangon.scope;
                    report = golfie.bind(michal)(oscard, report);
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot1;
                    if(report) { _fun00006_ip = 198; continue _fun00005 }
 138:
                    report = 7;
                    report = golfie[report];
                    yankee = oscard.bind(michal)(report);
                    offset = {};
                    report = _closure1_slot10;
                    report = report.INVALID_PERMISSIONS;
                    offset['errorCode'] = report;
                    report = yankee.prototype;
                    verify = Object.create(report, {constructor: {value: yankee}});
                    romeon = 'Not authenticated or invalid scope';
                    backup = verify;
                    foxtra = offset;
                    report = new backup[yankee](foxtra, romeon, yankee);
                    report = report instanceof Object ? report : verify;
                    throw report;
 198:
                    report = 9;
                    report = golfie[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.track;
                    zuuluu = _closure1_slot6;
                    report = zuuluu.RPC_COMMAND_SENT;
                    zuuluu = {};
                    zuuluu['command'] = option;
                    option = tangon.scope;
                    verify = 'object';
                    option = typeof option;
                    if(!(verify !== option)) { _fun00006_ip = 257; continue _fun00005 }
 249:
                    option = tangon.scope;
                    _fun00006_ip = 282; continue _fun00005;
 257:
                    verify = global;
                    yankee = verify.JSON;
                    offset = yankee.stringify;
                    verify = tangon.scope;
                    option = offset.bind(yankee)(verify);
 282:
                    zuuluu['scope'] = option;
                    option = _closure3_slot1;
                    verify = option.application;
                    verify = verify.id;
                    zuuluu['application_id'] = verify;
                    option = option.authorization;
                    verify = option.scopes;
                    option = verify.toString;
                    option = option.bind(verify)();
                    zuuluu['socket_scope'] = option;
                    zuuluu = oscard.bind(golfie)(report, zuuluu);
                    zuuluu = argFoo;
                    zuuluu = zuuluu.bind(michal)(tangon);
                    return michal;
 348:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 7;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = {};
                    michal = _closure1_slot10;
                    michal = michal.INVALID_COMMAND;
                    zuuluu['errorCode'] = michal;
                    entity = _closure3_slot2;
                    report = entity.cmd;
                    entity = global;
                    entity = entity.HermesInternal;
                    michal = entity.concat;
                    entity = 'Invalid command: ';
                    romeon = michal.bind(entity)(report);
                    michal = tangon.prototype;
                    michal = Object.create(michal, {constructor: {value: tangon}});
                    backup = michal;
                    foxtra = zuuluu;
                    entity = new backup[tangon](foxtra, romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
 449:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 7;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = {};
                    entity = _closure1_slot10;
                    entity = entity.INVALID_PAYLOAD;
                    zuuluu['errorCode'] = entity;
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    romeon = 'Payload requires a nonce';
                    backup = michal;
                    foxtra = zuuluu;
                    entity = new backup[tangon](foxtra, romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            oscard = zuuluu;
            michal = new oscard[tangon](report, tangon);
            tangon = michal instanceof Object ? michal : zuuluu;
            zuuluu = tangon.then;
            michal = function(argFoo) {
                michal = argFoo;
                var _closure4_slot0 = michal;
                michal = global;
                zuuluu = michal.Promise;
                michal = function() {
                    tangon = _closure1_slot2;
                    zuuluu = undefined;
                    michal = function* (argFoo, argBar) {
                        entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                StartGenerator();
                                oscard = argFoo;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00008_ip = 203; continue _fun00007 }
 15:
                                var _closure7_slot0 = oscard;
                                michal = argBar;
                                var _closure7_slot1 = michal;
                                michal = _closure4_slot0;
                                michal = michal.validation;
                                golfie = null;
                                if(!(golfie == michal)) { _fun00008_ip = 61; continue _fun00007 }
 45:
                                tangon = _closure4_slot0;
                                michal = undefined;
                                michal = oscard.bind(michal)(tangon);
                                _fun00008_ip = 195; continue _fun00007;
 61:
                                oscard = _closure3_slot3;
                                michal = oscard.getJoi;
                                michal = michal.bind(oscard)();
                                SaveGenerator(address=82);
 80:
                                return michal;
 82:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(oscard) { _fun00008_ip = 200; continue _fun00007 }
 88:
                                option = _closure1_slot0;
                                verify = _closure1_slot1;
                                oscard = 10;
                                oscard = verify[oscard];
                                verify = undefined;
                                option = option.bind(verify)(oscard);
                                report = _closure4_slot0;
                                oscard = report.validation;
                                golfie = golfie != oscard;
                                oscard = 'command.validation must not be null';
                                oscard = option.bind(verify)(golfie, oscard);
                                golfie = michal.validate;
                                tangon = _closure3_slot2;
                                oscard = tangon.args;
                                tangon = report.validation;
                                romeon = tangon.bind(report)(michal);
                                tangon = {};
                                option = false;
                                tangon['convert'] = option;
                                offset = function(argFoo) {
                                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                        entity = argFoo;
                                        michal = null;
                                        if(!(michal != entity)) { _fun00010_ip = 93; continue _fun00009 }
 9:
                                        zuuluu = _closure7_slot1;
                                        oscard = _closure1_slot0;
                                        report = _closure1_slot1;
                                        michal = 7;
                                        report = report[michal];
                                        michal = undefined;
                                        oscard = oscard.bind(michal)(report);
                                        report = {};
                                        tangon = _closure1_slot10;
                                        tangon = tangon.INVALID_PAYLOAD;
                                        report['errorCode'] = tangon;
                                        golfie = entity.message;
                                        tangon = oscard.prototype;
                                        tangon = Object.create(tangon, {constructor: {value: oscard}});
                                        verify = tangon;
                                        option = report;
                                        entity = new verify[oscard](option, golfie, oscard);
                                        entity = entity instanceof Object ? entity : tangon;
                                        entity = zuuluu.bind(michal)(entity);
                                        _fun00010_ip = 114; continue _fun00009;
 93:
                                        zuuluu = _closure7_slot0;
                                        michal = _closure4_slot0;
                                        entity = undefined;
                                        entity = zuuluu.bind(entity)(michal);
 114:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                backup = michal;
                                foxtra = oscard;
                                yankee = tangon;
                                zuuluu = backup[golfie](foxtra, romeon, yankee, offset, verify);
 195:
                                zuuluu = undefined;
                                return zuuluu;
 200:
                                return michal;
 203:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure5_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure5_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                entity = undefined;
                tangon = michal.bind(entity)();
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.handler;
                    entity = {};
                    tangon = _closure3_slot1;
                    entity['socket'] = tangon;
                    tangon = _closure3_slot0;
                    entity['server'] = tangon;
                    tangon = _closure3_slot2;
                    oscard = tangon.cmd;
                    entity['cmd'] = oscard;
                    oscard = tangon.evt;
                    entity['evt'] = oscard;
                    oscard = tangon.nonce;
                    entity['nonce'] = oscard;
                    oscard = tangon.args;
                    tangon = null;
                    if(!(tangon == oscard)) { _fun00012_ip = 83; continue _fun00011 }
 81:
                    oscard = {};
 83:
                    entity['args'] = oscard;
                    oscard = function() { // Original name: isSocketConnected
                        michal = _closure3_slot0;
                        zuuluu = michal.sockets;
                        michal = zuuluu.has;
                        entity = _closure3_slot1;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity['isSocketConnected'] = oscard;
                    oscard = _closure3_slot0;
                    golfie = oscard.abortControllers;
                    oscard = golfie.get;
                    report = _closure3_slot1;
                    report = oscard.bind(golfie)(report);
                    oscard = tangon == report;
                    tangon = undefined;
                    if(oscard) { _fun00012_ip = 141; continue _fun00011 }
 135:
                    tangon = report.signal;
 141:
                    entity['signal'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                golfie = _closure3_slot0;
                oscard = golfie.dispatch;
                romeon = _closure3_slot1;
                entity = _closure3_slot2;
                yankee = entity.nonce;
                offset = entity.cmd;
                verify = null;
                option = argFoo;
                foxtra = golfie;
                entity = foxtra[oscard](romeon, yankee, offset, verify, option, golfie);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function(argFoo) {
                entity = argFoo;
                verify = entity.code;
                option = entity.message;
                report = _closure3_slot0;
                tangon = report.error;
                romeon = _closure3_slot1;
                entity = _closure3_slot2;
                yankee = entity.nonce;
                offset = entity.cmd;
                foxtra = report;
                entity = foxtra[tangon](romeon, yankee, offset, verify, option, golfie);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'setCommandHandler';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            zuuluu = entity.commands;
            michal = argBar;
            entity = argFoo;
            zuuluu[entity] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'setEventHandler';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            zuuluu = entity.events;
            michal = argBar;
            entity = argFoo;
            zuuluu[entity] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'dispatch';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                report = arguments[1];
                option = arguments[2];
                oscard = arguments[3];
                golfie = arguments[4];
                entity = undefined;
                if(!(report === entity)) { _fun00014_ip = 23; continue _fun00013 }
 21:
                report = null;
 23:
                if(!(option === entity)) { _fun00014_ip = 40; continue _fun00013 }
 27:
                michal = _closure1_slot8;
                option = michal.DISPATCH;
 40:
                if(!(oscard === entity)) { _fun00014_ip = 46; continue _fun00013 }
 44:
                oscard = null;
 46:
                if(!(golfie === entity)) { _fun00014_ip = 52; continue _fun00013 }
 50:
                golfie = null;
 52:
                zuuluu = tangon.send;
                michal = {};
                michal['cmd'] = option;
                michal['data'] = golfie;
                michal['evt'] = oscard;
                michal['nonce'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'error';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                option = arguments[1];
                golfie = arguments[2];
                verify = arguments[3];
                michal = arguments[4];
                oscard = this;
                entity = undefined;
                if(!(option === entity)) { _fun00016_ip = 23; continue _fun00015 }
 21:
                option = null;
 23:
                if(!(golfie === entity)) { _fun00016_ip = 40; continue _fun00015 }
 27:
                zuuluu = _closure1_slot8;
                golfie = zuuluu.DISPATCH;
 40:
                if(!(verify === entity)) { _fun00016_ip = 57; continue _fun00015 }
 44:
                zuuluu = _closure1_slot10;
                verify = zuuluu.UNKNOWN_ERROR;
 57:
                if(!(michal === entity)) { _fun00016_ip = 67; continue _fun00015 }
 61:
                michal = 'Unknown Error';
 67:
                report = _closure1_slot0;
                offset = _closure1_slot1;
                tangon = 9;
                tangon = offset[tangon];
                yankee = report.bind(entity)(tangon);
                offset = yankee.track;
                tangon = _closure1_slot6;
                report = tangon.RPC_SERVER_ERROR_CAUGHT;
                tangon = {};
                tangon['command'] = golfie;
                tangon['code'] = verify;
                tangon['message'] = michal;
                tangon = offset.bind(yankee)(report, tangon);
                report = oscard.dispatch;
                zuuluu = _closure1_slot7;
                backup = zuuluu.ERROR;
                zuuluu = {};
                zuuluu['code'] = verify;
                zuuluu['message'] = michal;
                output = argFoo;
                result = oscard;
                sizing = option;
                kiloes = golfie;
                foxtra = zuuluu;
                michal = result[report](output, sizing, kiloes, backup, foxtra, romeon);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'isSubscribed';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = this;
            zuuluu = michal.subscriptions;
            michal = zuuluu.find;
            entity = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.socket;
                    entity = entity.application;
                    tangon = entity.id;
                    entity = _closure3_slot0;
                    entity = tangon === entity;
                    if(!entity) { _fun00018_ip = 47; continue _fun00017 }
 33:
                    zuuluu = zuuluu.evt;
                    michal = _closure3_slot1;
                    entity = zuuluu === michal;
 47:
                    return entity;
                }
            };
            michal = michal.bind(zuuluu)(entity);
            entity = undefined;
            entity = entity !== michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'getSubscription';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = argBaz;
            var _closure3_slot2 = michal;
            michal = this;
            zuuluu = michal.subscriptions;
            michal = zuuluu.find;
            entity = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.socket;
                    entity = _closure3_slot0;
                    entity = tangon === entity;
                    if(!entity) { _fun00020_ip = 37; continue _fun00019 }
 23:
                    report = zuuluu.evt;
                    tangon = _closure3_slot1;
                    entity = report === tangon;
 37:
                    if(!entity) { _fun00020_ip = 87; continue _fun00019 }
 40:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    tangon = 5;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.isEqual;
                    zuuluu = zuuluu.args;
                    michal = _closure3_slot2;
                    entity = tangon.bind(report)(zuuluu, michal);
 87:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'addSubscription';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                golfie = argFoo;
                oscard = argBar;
                report = argBaz;
                offset = arguments[3];
                michal = this;
                entity = undefined;
                if(!(offset === entity)) { _fun00022_ip = 23; continue _fun00021 }
 21:
                offset = null;
 23:
                option = michal.dispatch;
                tangon = option.bind;
                zuuluu = _closure1_slot8;
                backup = zuuluu.DISPATCH;
                romeon = null;
                result = option;
                output = michal;
                sizing = golfie;
                kiloes = null;
                foxtra = oscard;
                yankee = result[tangon](output, sizing, kiloes, backup, foxtra, romeon);
                zuuluu = michal.getSubscription;
                zuuluu = zuuluu.bind(michal)(golfie, oscard, report);
                if(!(romeon == zuuluu)) { _fun00022_ip = 153; continue _fun00021 }
 85:
                tangon = michal.subscriptions;
                zuuluu = tangon.push;
                michal = {};
                michal['update'] = offset;
                michal['dispatch'] = yankee;
                option = null;
                if(!offset) { _fun00022_ip = 128; continue _fun00021 }
 112:
                verify = {};
                verify['prevState'] = romeon;
                verify['dispatch'] = yankee;
                option = offset.bind(entity)(verify);
 128:
                michal['prevState'] = option;
                michal['socket'] = golfie;
                michal['evt'] = oscard;
                michal['args'] = report;
                michal = zuuluu.bind(tangon)(michal);
 153:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'removeSubscription';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            entity = argBaz;
            var _closure3_slot2 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.remove;
            zuuluu = this;
            zuuluu = zuuluu.subscriptions;
            michal = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.socket;
                    entity = _closure3_slot0;
                    entity = tangon === entity;
                    if(!entity) { _fun00024_ip = 37; continue _fun00023 }
 23:
                    report = zuuluu.evt;
                    tangon = _closure3_slot1;
                    entity = report === tangon;
 37:
                    if(!entity) { _fun00024_ip = 87; continue _fun00023 }
 40:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    tangon = 5;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.isEqual;
                    zuuluu = zuuluu.args;
                    michal = _closure3_slot2;
                    entity = tangon.bind(report)(zuuluu, michal);
 87:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'removeSubscriptions';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.remove;
            zuuluu = this;
            zuuluu = zuuluu.subscriptions;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.socket;
                entity = _closure3_slot0;
                entity = michal === entity;
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'dispatchToSubscriptions';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                oscard = argCor;
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = argFoo;
                var _closure3_slot1 = zuuluu;
                zuuluu = argBar;
                var _closure3_slot2 = zuuluu;
                zuuluu = argBaz;
                var _closure3_slot3 = zuuluu;
                zuuluu = null;
                zuuluu = zuuluu != oscard;
                if(!zuuluu) { _fun00026_ip = 50; continue _fun00025 }
 42:
                tangon = '';
                zuuluu = tangon !== oscard;
 50:
                if(!zuuluu) { _fun00026_ip = 113; continue _fun00025 }
 53:
                golfie = _closure1_slot11;
                tangon = golfie.includes;
                tangon = tangon.bind(golfie)(oscard);
                golfie = !tangon;
                tangon = !golfie;
                if(!golfie) { _fun00026_ip = 110; continue _fun00025 }
 79:
                golfie = _closure1_slot11;
                report = golfie.unshift;
                report = report.bind(golfie)(oscard);
                oscard = golfie.splice;
                report = 50;
                report = oscard.bind(golfie)(report);
                tangon = false;
 110:
                zuuluu = tangon;
 113:
                if(zuuluu) { _fun00026_ip = 139; continue _fun00025 }
 116:
                zuuluu = michal.subscriptions;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        michal = argFoo;
                        tangon = michal.evt;
                        zuuluu = _closure3_slot1;
                        if(!(tangon === zuuluu)) { _fun00028_ip = 252; continue _fun00027 }
 23:
                        zuuluu = _closure3_slot2;
                        tangon = 'function';
                        zuuluu = typeof zuuluu;
                        zuuluu = tangon === zuuluu;
                        if(!zuuluu) { _fun00028_ip = 55; continue _fun00027 }
 41:
                        oscard = _closure3_slot2;
                        report = undefined;
                        report = oscard.bind(report)(michal);
                        zuuluu = !report;
 55:
                        if(zuuluu) { _fun00028_ip = 176; continue _fun00027 }
 58:
                        report = _closure3_slot2;
                        oscard = 'object';
                        report = typeof report;
                        report = oscard === report;
                        if(!report) { _fun00028_ip = 173; continue _fun00027 }
 76:
                        verify = _closure3_slot2;
                        romeon = michal.args;
                        oscard = null;
                        if(!(oscard == romeon)) { _fun00028_ip = 94; continue _fun00027 }
 92:
                        romeon = {};
 94:
                        yankee = _closure1_slot0;
                        foxtra = _closure1_slot1;
                        oscard = 5;
                        golfie = foxtra[oscard];
                        offset = undefined;
                        option = yankee.bind(offset)(golfie);
                        golfie = option.isEqual;
                        oscard = foxtra[oscard];
                        yankee = yankee.bind(offset)(oscard);
                        offset = yankee.pick;
                        oscard = global;
                        foxtra = oscard.Object;
                        oscard = foxtra.keys;
                        oscard = oscard.bind(foxtra)(verify);
                        oscard = offset.bind(yankee)(romeon, oscard);
                        oscard = golfie.bind(option)(verify, oscard);
                        report = !oscard;
 173:
                        zuuluu = report;
 176:
                        if(zuuluu) { _fun00028_ip = 252; continue _fun00027 }
 179:
                        zuuluu = _closure3_slot3;
                        zuuluu = typeof zuuluu;
                        if(!(tangon === zuuluu)) { _fun00028_ip = 205; continue _fun00027 }
 190:
                        tangon = _closure3_slot3;
                        zuuluu = undefined;
                        zuuluu = tangon.bind(zuuluu)(michal);
                        _closure3_slot3 = zuuluu;
 205:
                        golfie = _closure3_slot0;
                        oscard = golfie.dispatch;
                        result = michal.socket;
                        zuuluu = _closure1_slot8;
                        sizing = zuuluu.DISPATCH;
                        kiloes = michal.evt;
                        backup = _closure3_slot3;
                        output = null;
                        echoed = golfie;
                        entity = echoed[oscard](result, output, sizing, kiloes, backup, foxtra);
 252:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
 139:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'updateSubscriptions';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            zuuluu = entity.subscriptions;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    michal = argFoo;
                    entity = michal.update;
                    if(!entity) { _fun00030_ip = 29; continue _fun00029 }
 12:
                    entity = michal.update;
                    entity = entity.bind(michal)(michal);
                    michal['prevState'] = entity;
 29:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'storeWait';
        entity['key'] = oscard;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = argBar;
                tangon = argBaz;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                zuuluu = argFoo;
                var _closure3_slot1 = zuuluu;
                var _closure3_slot2 = michal;
                var _closure3_slot3 = tangon;
                report = undefined;
                zuuluu = michal.bind(report)();
                if(zuuluu) { _fun00032_ip = 147; continue _fun00031 }
 39:
                michal = 0;
                if(!(michal !== tangon)) { _fun00032_ip = 147; continue _fun00031 }
 45:
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 5;
                michal = oscard[michal];
                tangon = tangon.bind(report)(michal);
                michal = tangon.uniqueId;
                michal = michal.bind(tangon)();
                var _closure3_slot4 = michal;
                michal = function() { // Original name: removeSubscription
                    report = _closure3_slot0;
                    tangon = report.removeSubscription;
                    zuuluu = _closure3_slot1;
                    michal = {};
                    entity = _closure3_slot4;
                    michal['uniqueId'] = entity;
                    entity = 'RPC_STORE_WAIT';
                    entity = tangon.bind(report)(zuuluu, entity, michal);
                    return entity;
                };
                var _closure3_slot5 = michal;
                michal = global;
                report = michal.Promise;
                michal = report.prototype;
                tangon = Object.create(michal, {constructor: {value: report}});
                golfie = function(argFoo, argBar) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = argBar;
                    var _closure4_slot1 = entity;
                    entity = global;
                    oscard = entity.setTimeout;
                    report = _closure3_slot3;
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot1;
                    entity = 11;
                    tangon = tangon[entity];
                    entity = undefined;
                    tangon = golfie.bind(entity)(tangon);
                    tangon = tangon.Millis;
                    tangon = tangon.SECOND;
                    report = report * tangon;
                    tangon = function() {
                        michal = _closure3_slot5;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        zuuluu = _closure4_slot1;
                        michal = global;
                        report = michal.Error;
                        michal = report.prototype;
                        tangon = Object.create(michal, {constructor: {value: report}});
                        oscard = 'timeout';
                        golfie = tangon;
                        michal = new golfie[report](oscard, report);
                        michal = michal instanceof Object ? michal : tangon;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = oscard.bind(entity)(tangon, report);
                    var _closure4_slot2 = tangon;
                    golfie = _closure3_slot0;
                    oscard = golfie.addSubscription;
                    yankee = _closure3_slot1;
                    tangon = {};
                    zuuluu = _closure3_slot4;
                    tangon['uniqueId'] = zuuluu;
                    offset = 'RPC_STORE_WAIT';
                    option = function() {
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            michal = _closure3_slot2;
                            entity = undefined;
                            zuuluu = michal.bind(entity)();
                            if(!zuuluu) { _fun00034_ip = 45; continue _fun00033 }
 16:
                            michal = global;
                            report = michal.clearTimeout;
                            tangon = _closure4_slot2;
                            tangon = report.bind(entity)(tangon);
                            michal = _closure4_slot0;
                            michal = michal.bind(entity)(zuuluu);
 45:
                            return entity;
                        }
                    };
                    romeon = golfie;
                    verify = tangon;
                    michal = romeon[oscard](yankee, offset, verify, option, golfie);
                    return entity;
                };
                option = tangon;
                michal = new option[report](golfie, oscard);
                tangon = michal instanceof Object ? michal : tangon;
                michal = tangon.then;
                entity = function(argFoo) {
                    michal = _closure3_slot5;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    entity = argFoo;
                    return entity;
                };
                entity = michal.bind(tangon)(entity);
                return entity;
 147:
                entity = global;
                michal = entity.Promise;
                entity = michal.resolve;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        entity['value'] = report;
        michal[15] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/RPCServer.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();