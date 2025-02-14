// app/modules/rpc/RPCServer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.TransportTypes;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot6 = golf;
    golf = tango.RPCEvents;
    var _closure1_slot7 = golf;
    golf = tango.RPCCommands;
    var _closure1_slot8 = golf;
    golf = tango.RPCCloseCodes;
    var _closure1_slot9 = golf;
    tango = tango.RPCErrors;
    var _closure1_slot10 = tango;
    tango = new Array(0);
    var _closure1_slot11 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: RPCServer
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = function() {
                entity = null;
                return entity;
            };
            zulu['getCurrentUser'] = tango;
            tango = function() {
                entity = undefined;
                return entity;
            };
            zulu['onConnect'] = tango;
            mike = function() {
                entity = undefined;
                return entity;
            };
            zulu['onDisconnect'] = mike;
            mike = {};
            zulu['events'] = mike;
            mike = {};
            zulu['commands'] = mike;
            mike = global;
            tango = mike.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            options = report;
            tango = new options[tango](golf);
            tango = tango instanceof Object ? tango : report;
            zulu['sockets'] = tango;
            tango = new Array(0);
            zulu['subscriptions'] = tango;
            mike = mike.Map;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['abortControllers'] = mike;
            mike = argFoo;
            zulu['getJoi'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'registerTransport';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            tango = argFoo;
            mike = this;
            var _closure3_slot0 = mike;
            report = tango.on;
            zulu = 'connect';
            mike = function(argFoo) {
                zulu = _closure3_slot0;
                mike = zulu.handleConnect;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = report.bind(tango)(zulu, mike);
            report = tango.on;
            zulu = 'request';
            mike = function(argFoo, argBar) {
                tango = _closure3_slot0;
                zulu = tango.handleRequest;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = report.bind(tango)(zulu, mike);
            zulu = tango.on;
            mike = 'disconnect';
            entity = function(argFoo, argBar) {
                tango = _closure3_slot0;
                zulu = tango.handleDisconnect;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(16);
        mike[0] = entity;
        entity = {};
        oscar = 'handleConnect';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun109941: for(var _fun109941_ip = 0; ; ) switch(_fun109941_ip) {
 0:
                tango = argFoo;
                options = this;
                mike = options.sockets;
                entity = mike.add;
                entity = entity.bind(mike)(tango);
                report = options.abortControllers;
                zulu = report.set;
                mike = global;
                entity = mike.AbortController;
                oscar = entity.prototype;
                oscar = Object.create(oscar, {constructor: {value: entity}});
                backup = oscar;
                entity = new backup[entity](foxtrot);
                entity = entity instanceof Object ? entity : oscar;
                entity = zulu.bind(report)(tango, entity);
                entity = options.onConnect;
                entity = entity.bind(options)(tango);
                golf = {};
                entity = tango.version;
                golf['v'] = entity;
                entity = {};
                zulu = mike.window;
                zulu = zulu.GLOBAL_ENV;
                zulu = zulu.CDN_HOST;
                entity['cdn_host'] = zulu;
                mike = mike.window;
                mike = mike.GLOBAL_ENV;
                mike = mike.API_ENDPOINT;
                entity['api_endpoint'] = mike;
                mike = 'production';
                entity['environment'] = mike;
                golf['config'] = entity;
                zulu = tango.transport;
                mike = _closure1_slot5;
                mike = mike.IPC;
                if(!(zulu === mike)) { _fun109941_ip = 226; continue _fun109941 }
 178:
                mike = options.getCurrentUser;
                report = mike.bind(options)();
                mike = null;
                if(!(mike != report)) { _fun109941_ip = 270; continue _fun109941 }
 193:
                oscar = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 6;
                mike = zulu[mike];
                zulu = undefined;
                mike = oscar.bind(zulu)(mike);
                mike = mike.bind(zulu)(report);
                golf['user'] = mike;
 226:
                oscar = options.dispatch;
                mike = _closure1_slot8;
                yankee = mike.DISPATCH;
                mike = _closure1_slot7;
                offset = mike.READY;
                romeo = null;
                backup = options;
                foxtrot = tango;
                verify = golf;
                mike = backup[oscar](foxtrot, romeo, yankee, offset, verify, options);
                mike = undefined;
                return mike;
 270:
                zulu = tango.close;
                entity = _closure1_slot9;
                mike = entity.CLOSE_NORMAL;
                entity = 'User logged out';
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleDisconnect';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun109942: for(var _fun109942_ip = 0; ; ) switch(_fun109942_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = zulu.removeSubscriptions;
                entity = entity.bind(zulu)(tango);
                mike = zulu.sockets;
                entity = mike.delete;
                entity = entity.bind(mike)(tango);
                mike = zulu.abortControllers;
                entity = mike.get;
                report = entity.bind(mike)(tango);
                entity = null;
                if(!(entity != report)) { _fun109942_ip = 72; continue _fun109942 }
 57:
                mike = report.abort;
                entity = 'DISCONNECTED';
                entity = mike.bind(report)(entity);
 72:
                mike = zulu.abortControllers;
                entity = mike.delete;
                entity = entity.bind(mike)(tango);
                mike = zulu.onDisconnect;
                entity = argBar;
                entity = mike.bind(zulu)(tango, entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'handleRequest';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = argFoo;
            var _closure3_slot1 = zulu;
            zulu = argBar;
            var _closure3_slot2 = zulu;
            var _closure3_slot3 = mike;
            mike = global;
            tango = mike.Promise;
            mike = tango.prototype;
            zulu = Object.create(mike, {constructor: {value: tango}});
            report = function(argFoo) {
                _fun109944: for(var _fun109944_ip = 0; ; ) switch(_fun109944_ip) {
 0:
                    mike = _closure3_slot2;
                    zulu = mike.nonce;
                    mike = null;
                    if(!(mike != zulu)) { _fun109944_ip = 449; continue _fun109944 }
 22:
                    zulu = _closure3_slot2;
                    tango = zulu.nonce;
                    zulu = '';
                    if(!(zulu !== tango)) { _fun109944_ip = 449; continue _fun109944 }
 43:
                    zulu = _closure3_slot2;
                    options = zulu.cmd;
                    zulu = _closure3_slot0;
                    zulu = zulu.commands;
                    tango = zulu[options];
                    if(!(mike != tango)) { _fun109944_ip = 348; continue _fun109944 }
 74:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    mike = 8;
                    report = report[mike];
                    mike = undefined;
                    golf = oscar.bind(mike)(report);
                    report = _closure3_slot1;
                    report = report.authorization;
                    oscar = report.scopes;
                    report = tango.scope;
                    report = golf.bind(mike)(oscar, report);
                    oscar = _closure1_slot0;
                    golf = _closure1_slot1;
                    if(report) { _fun109944_ip = 198; continue _fun109944 }
 138:
                    report = 7;
                    report = golf[report];
                    yankee = oscar.bind(mike)(report);
                    offset = {};
                    report = _closure1_slot10;
                    report = report.INVALID_PERMISSIONS;
                    offset['errorCode'] = report;
                    report = yankee.prototype;
                    verify = Object.create(report, {constructor: {value: yankee}});
                    romeo = 'Not authenticated or invalid scope';
                    backup = verify;
                    foxtrot = offset;
                    report = new backup[yankee](foxtrot, romeo, yankee);
                    report = report instanceof Object ? report : verify;
                    throw report;
 198:
                    report = 9;
                    report = golf[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.track;
                    zulu = _closure1_slot6;
                    report = zulu.RPC_COMMAND_SENT;
                    zulu = {};
                    zulu['command'] = options;
                    options = tango.scope;
                    verify = 'object';
                    options = typeof options;
                    if(!(verify !== options)) { _fun109944_ip = 257; continue _fun109944 }
 249:
                    options = tango.scope;
                    _fun109944_ip = 282; continue _fun109944;
 257:
                    verify = global;
                    yankee = verify.JSON;
                    offset = yankee.stringify;
                    verify = tango.scope;
                    options = offset.bind(yankee)(verify);
 282:
                    zulu['scope'] = options;
                    options = _closure3_slot1;
                    verify = options.application;
                    verify = verify.id;
                    zulu['application_id'] = verify;
                    options = options.authorization;
                    verify = options.scopes;
                    options = verify.toString;
                    options = options.bind(verify)();
                    zulu['socket_scope'] = options;
                    zulu = oscar.bind(golf)(report, zulu);
                    zulu = argFoo;
                    zulu = zulu.bind(mike)(tango);
                    return mike;
 348:
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    zulu = 7;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = {};
                    mike = _closure1_slot10;
                    mike = mike.INVALID_COMMAND;
                    zulu['errorCode'] = mike;
                    entity = _closure3_slot2;
                    report = entity.cmd;
                    entity = global;
                    entity = entity.HermesInternal;
                    mike = entity.concat;
                    entity = 'Invalid command: ';
                    romeo = mike.bind(entity)(report);
                    mike = tango.prototype;
                    mike = Object.create(mike, {constructor: {value: tango}});
                    backup = mike;
                    foxtrot = zulu;
                    entity = new backup[tango](foxtrot, romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
 449:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = {};
                    entity = _closure1_slot10;
                    entity = entity.INVALID_PAYLOAD;
                    zulu['errorCode'] = entity;
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    romeo = 'Payload requires a nonce';
                    backup = mike;
                    foxtrot = zulu;
                    entity = new backup[tango](foxtrot, romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            oscar = zulu;
            mike = new oscar[tango](report, tango);
            tango = mike instanceof Object ? mike : zulu;
            zulu = tango.then;
            mike = function(argFoo) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                mike = global;
                zulu = mike.Promise;
                mike = function() {
                    tango = _closure1_slot2;
                    zulu = undefined;
                    mike = function* (argFoo, argBar) {
                        entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                            _fun109948: for(var _fun109948_ip = 0; ; ) switch(_fun109948_ip) {
 0:
                                StartGenerator();
                                oscar = argFoo;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun109948_ip = 203; continue _fun109948 }
 15:
                                var _closure7_slot0 = oscar;
                                mike = argBar;
                                var _closure7_slot1 = mike;
                                mike = _closure4_slot0;
                                mike = mike.validation;
                                golf = null;
                                if(!(golf == mike)) { _fun109948_ip = 61; continue _fun109948 }
 45:
                                tango = _closure4_slot0;
                                mike = undefined;
                                mike = oscar.bind(mike)(tango);
                                _fun109948_ip = 195; continue _fun109948;
 61:
                                oscar = _closure3_slot3;
                                mike = oscar.getJoi;
                                mike = mike.bind(oscar)();
                                SaveGenerator(address=82);
 80:
                                return mike;
 82:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(oscar) { _fun109948_ip = 200; continue _fun109948 }
 88:
                                options = _closure1_slot0;
                                verify = _closure1_slot1;
                                oscar = 10;
                                oscar = verify[oscar];
                                verify = undefined;
                                options = options.bind(verify)(oscar);
                                report = _closure4_slot0;
                                oscar = report.validation;
                                golf = golf != oscar;
                                oscar = 'command.validation must not be null';
                                oscar = options.bind(verify)(golf, oscar);
                                golf = mike.validate;
                                tango = _closure3_slot2;
                                oscar = tango.args;
                                tango = report.validation;
                                romeo = tango.bind(report)(mike);
                                tango = {};
                                options = false;
                                tango['convert'] = options;
                                offset = function(argFoo) {
                                    _fun109949: for(var _fun109949_ip = 0; ; ) switch(_fun109949_ip) {
 0:
                                        entity = argFoo;
                                        mike = null;
                                        if(!(mike != entity)) { _fun109949_ip = 93; continue _fun109949 }
 9:
                                        zulu = _closure7_slot1;
                                        oscar = _closure1_slot0;
                                        report = _closure1_slot1;
                                        mike = 7;
                                        report = report[mike];
                                        mike = undefined;
                                        oscar = oscar.bind(mike)(report);
                                        report = {};
                                        tango = _closure1_slot10;
                                        tango = tango.INVALID_PAYLOAD;
                                        report['errorCode'] = tango;
                                        golf = entity.message;
                                        tango = oscar.prototype;
                                        tango = Object.create(tango, {constructor: {value: oscar}});
                                        verify = tango;
                                        options = report;
                                        entity = new verify[oscar](options, golf, oscar);
                                        entity = entity instanceof Object ? entity : tango;
                                        entity = zulu.bind(mike)(entity);
                                        _fun109949_ip = 114; continue _fun109949;
 93:
                                        zulu = _closure7_slot0;
                                        mike = _closure4_slot0;
                                        entity = undefined;
                                        entity = zulu.bind(entity)(mike);
 114:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                backup = mike;
                                foxtrot = oscar;
                                yankee = tango;
                                zulu = backup[golf](foxtrot, romeo, yankee, offset, verify);
 195:
                                zulu = undefined;
                                return zulu;
 200:
                                return mike;
 203:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    mike = tango.bind(zulu)(mike);
                    var _closure5_slot0 = mike;
                    entity = function() {
                        entity = undefined;
                        tango = _closure5_slot0;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    return entity;
                };
                entity = undefined;
                tango = mike.bind(entity)();
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                report = mike;
                entity = new report[zulu](tango, zulu);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun109951: for(var _fun109951_ip = 0; ; ) switch(_fun109951_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.handler;
                    entity = {};
                    tango = _closure3_slot1;
                    entity['socket'] = tango;
                    tango = _closure3_slot0;
                    entity['server'] = tango;
                    tango = _closure3_slot2;
                    oscar = tango.cmd;
                    entity['cmd'] = oscar;
                    oscar = tango.evt;
                    entity['evt'] = oscar;
                    oscar = tango.nonce;
                    entity['nonce'] = oscar;
                    oscar = tango.args;
                    tango = null;
                    if(!(tango == oscar)) { _fun109951_ip = 83; continue _fun109951 }
 81:
                    oscar = {};
 83:
                    entity['args'] = oscar;
                    oscar = function() { // Original name: isSocketConnected
                        mike = _closure3_slot0;
                        zulu = mike.sockets;
                        mike = zulu.has;
                        entity = _closure3_slot1;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity['isSocketConnected'] = oscar;
                    oscar = _closure3_slot0;
                    golf = oscar.abortControllers;
                    oscar = golf.get;
                    report = _closure3_slot1;
                    report = oscar.bind(golf)(report);
                    oscar = tango == report;
                    tango = undefined;
                    if(oscar) { _fun109951_ip = 141; continue _fun109951 }
 135:
                    tango = report.signal;
 141:
                    entity['signal'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                golf = _closure3_slot0;
                oscar = golf.dispatch;
                romeo = _closure3_slot1;
                entity = _closure3_slot2;
                yankee = entity.nonce;
                offset = entity.cmd;
                verify = null;
                options = argFoo;
                foxtrot = golf;
                entity = foxtrot[oscar](romeo, yankee, offset, verify, options, golf);
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                entity = argFoo;
                verify = entity.code;
                options = entity.message;
                report = _closure3_slot0;
                tango = report.error;
                romeo = _closure3_slot1;
                entity = _closure3_slot2;
                yankee = entity.nonce;
                offset = entity.cmd;
                foxtrot = report;
                entity = foxtrot[tango](romeo, yankee, offset, verify, options, golf);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'setCommandHandler';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            zulu = entity.commands;
            mike = argBar;
            entity = argFoo;
            zulu[entity] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'setEventHandler';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            zulu = entity.events;
            mike = argBar;
            entity = argFoo;
            zulu[entity] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'dispatch';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun109957: for(var _fun109957_ip = 0; ; ) switch(_fun109957_ip) {
 0:
                tango = argFoo;
                report = arguments[1];
                options = arguments[2];
                oscar = arguments[3];
                golf = arguments[4];
                entity = undefined;
                if(!(report === entity)) { _fun109957_ip = 23; continue _fun109957 }
 21:
                report = null;
 23:
                if(!(options === entity)) { _fun109957_ip = 40; continue _fun109957 }
 27:
                mike = _closure1_slot8;
                options = mike.DISPATCH;
 40:
                if(!(oscar === entity)) { _fun109957_ip = 46; continue _fun109957 }
 44:
                oscar = null;
 46:
                if(!(golf === entity)) { _fun109957_ip = 52; continue _fun109957 }
 50:
                golf = null;
 52:
                zulu = tango.send;
                mike = {};
                mike['cmd'] = options;
                mike['data'] = golf;
                mike['evt'] = oscar;
                mike['nonce'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'error';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun109958: for(var _fun109958_ip = 0; ; ) switch(_fun109958_ip) {
 0:
                options = arguments[1];
                golf = arguments[2];
                verify = arguments[3];
                mike = arguments[4];
                oscar = this;
                entity = undefined;
                if(!(options === entity)) { _fun109958_ip = 23; continue _fun109958 }
 21:
                options = null;
 23:
                if(!(golf === entity)) { _fun109958_ip = 40; continue _fun109958 }
 27:
                zulu = _closure1_slot8;
                golf = zulu.DISPATCH;
 40:
                if(!(verify === entity)) { _fun109958_ip = 57; continue _fun109958 }
 44:
                zulu = _closure1_slot10;
                verify = zulu.UNKNOWN_ERROR;
 57:
                if(!(mike === entity)) { _fun109958_ip = 67; continue _fun109958 }
 61:
                mike = 'Unknown Error';
 67:
                report = _closure1_slot0;
                offset = _closure1_slot1;
                tango = 9;
                tango = offset[tango];
                yankee = report.bind(entity)(tango);
                offset = yankee.track;
                tango = _closure1_slot6;
                report = tango.RPC_SERVER_ERROR_CAUGHT;
                tango = {};
                tango['command'] = golf;
                tango['code'] = verify;
                tango['message'] = mike;
                tango = offset.bind(yankee)(report, tango);
                report = oscar.dispatch;
                zulu = _closure1_slot7;
                backup = zulu.ERROR;
                zulu = {};
                zulu['code'] = verify;
                zulu['message'] = mike;
                output = argFoo;
                result = oscar;
                sizing = options;
                kilo = golf;
                foxtrot = zulu;
                mike = result[report](output, sizing, kilo, backup, foxtrot, romeo);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'isSubscribed';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = this;
            zulu = mike.subscriptions;
            mike = zulu.find;
            entity = function(argFoo) {
                _fun109960: for(var _fun109960_ip = 0; ; ) switch(_fun109960_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.socket;
                    entity = entity.application;
                    tango = entity.id;
                    entity = _closure3_slot0;
                    entity = tango === entity;
                    if(!entity) { _fun109960_ip = 47; continue _fun109960 }
 33:
                    zulu = zulu.evt;
                    mike = _closure3_slot1;
                    entity = zulu === mike;
 47:
                    return entity;
                }
            };
            mike = mike.bind(zulu)(entity);
            entity = undefined;
            entity = entity !== mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'getSubscription';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = argBaz;
            var _closure3_slot2 = mike;
            mike = this;
            zulu = mike.subscriptions;
            mike = zulu.find;
            entity = function(argFoo) {
                _fun109962: for(var _fun109962_ip = 0; ; ) switch(_fun109962_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.socket;
                    entity = _closure3_slot0;
                    entity = tango === entity;
                    if(!entity) { _fun109962_ip = 37; continue _fun109962 }
 23:
                    report = zulu.evt;
                    tango = _closure3_slot1;
                    entity = report === tango;
 37:
                    if(!entity) { _fun109962_ip = 87; continue _fun109962 }
 40:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 5;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.isEqual;
                    zulu = zulu.args;
                    mike = _closure3_slot2;
                    entity = tango.bind(report)(zulu, mike);
 87:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'addSubscription';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun109963: for(var _fun109963_ip = 0; ; ) switch(_fun109963_ip) {
 0:
                golf = argFoo;
                oscar = argBar;
                report = argBaz;
                offset = arguments[3];
                mike = this;
                entity = undefined;
                if(!(offset === entity)) { _fun109963_ip = 23; continue _fun109963 }
 21:
                offset = null;
 23:
                options = mike.dispatch;
                tango = options.bind;
                zulu = _closure1_slot8;
                backup = zulu.DISPATCH;
                romeo = null;
                result = options;
                output = mike;
                sizing = golf;
                kilo = null;
                foxtrot = oscar;
                yankee = result[tango](output, sizing, kilo, backup, foxtrot, romeo);
                zulu = mike.getSubscription;
                zulu = zulu.bind(mike)(golf, oscar, report);
                if(!(romeo == zulu)) { _fun109963_ip = 153; continue _fun109963 }
 85:
                tango = mike.subscriptions;
                zulu = tango.push;
                mike = {};
                mike['update'] = offset;
                mike['dispatch'] = yankee;
                options = null;
                if(!offset) { _fun109963_ip = 128; continue _fun109963 }
 112:
                verify = {};
                verify['prevState'] = romeo;
                verify['dispatch'] = yankee;
                options = offset.bind(entity)(verify);
 128:
                mike['prevState'] = options;
                mike['socket'] = golf;
                mike['evt'] = oscar;
                mike['args'] = report;
                mike = zulu.bind(tango)(mike);
 153:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'removeSubscription';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            entity = argBaz;
            var _closure3_slot2 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 5;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.remove;
            zulu = this;
            zulu = zulu.subscriptions;
            mike = function(argFoo) {
                _fun109965: for(var _fun109965_ip = 0; ; ) switch(_fun109965_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.socket;
                    entity = _closure3_slot0;
                    entity = tango === entity;
                    if(!entity) { _fun109965_ip = 37; continue _fun109965 }
 23:
                    report = zulu.evt;
                    tango = _closure3_slot1;
                    entity = report === tango;
 37:
                    if(!entity) { _fun109965_ip = 87; continue _fun109965 }
 40:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 5;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.isEqual;
                    zulu = zulu.args;
                    mike = _closure3_slot2;
                    entity = tango.bind(report)(zulu, mike);
 87:
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'removeSubscriptions';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 5;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.remove;
            zulu = this;
            zulu = zulu.subscriptions;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.socket;
                entity = _closure3_slot0;
                entity = mike === entity;
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'dispatchToSubscriptions';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun109968: for(var _fun109968_ip = 0; ; ) switch(_fun109968_ip) {
 0:
                oscar = argCorge;
                mike = this;
                var _closure3_slot0 = mike;
                zulu = argFoo;
                var _closure3_slot1 = zulu;
                zulu = argBar;
                var _closure3_slot2 = zulu;
                zulu = argBaz;
                var _closure3_slot3 = zulu;
                zulu = null;
                zulu = zulu != oscar;
                if(!zulu) { _fun109968_ip = 50; continue _fun109968 }
 42:
                tango = '';
                zulu = tango !== oscar;
 50:
                if(!zulu) { _fun109968_ip = 113; continue _fun109968 }
 53:
                golf = _closure1_slot11;
                tango = golf.includes;
                tango = tango.bind(golf)(oscar);
                golf = !tango;
                tango = !golf;
                if(!golf) { _fun109968_ip = 110; continue _fun109968 }
 79:
                golf = _closure1_slot11;
                report = golf.unshift;
                report = report.bind(golf)(oscar);
                oscar = golf.splice;
                report = 50;
                report = oscar.bind(golf)(report);
                tango = false;
 110:
                zulu = tango;
 113:
                if(zulu) { _fun109968_ip = 139; continue _fun109968 }
 116:
                zulu = mike.subscriptions;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun109969: for(var _fun109969_ip = 0; ; ) switch(_fun109969_ip) {
 0:
                        mike = argFoo;
                        tango = mike.evt;
                        zulu = _closure3_slot1;
                        if(!(tango === zulu)) { _fun109969_ip = 252; continue _fun109969 }
 23:
                        zulu = _closure3_slot2;
                        tango = 'function';
                        zulu = typeof zulu;
                        zulu = tango === zulu;
                        if(!zulu) { _fun109969_ip = 55; continue _fun109969 }
 41:
                        oscar = _closure3_slot2;
                        report = undefined;
                        report = oscar.bind(report)(mike);
                        zulu = !report;
 55:
                        if(zulu) { _fun109969_ip = 176; continue _fun109969 }
 58:
                        report = _closure3_slot2;
                        oscar = 'object';
                        report = typeof report;
                        report = oscar === report;
                        if(!report) { _fun109969_ip = 173; continue _fun109969 }
 76:
                        verify = _closure3_slot2;
                        romeo = mike.args;
                        oscar = null;
                        if(!(oscar == romeo)) { _fun109969_ip = 94; continue _fun109969 }
 92:
                        romeo = {};
 94:
                        yankee = _closure1_slot0;
                        foxtrot = _closure1_slot1;
                        oscar = 5;
                        golf = foxtrot[oscar];
                        offset = undefined;
                        options = yankee.bind(offset)(golf);
                        golf = options.isEqual;
                        oscar = foxtrot[oscar];
                        yankee = yankee.bind(offset)(oscar);
                        offset = yankee.pick;
                        oscar = global;
                        foxtrot = oscar.Object;
                        oscar = foxtrot.keys;
                        oscar = oscar.bind(foxtrot)(verify);
                        oscar = offset.bind(yankee)(romeo, oscar);
                        oscar = golf.bind(options)(verify, oscar);
                        report = !oscar;
 173:
                        zulu = report;
 176:
                        if(zulu) { _fun109969_ip = 252; continue _fun109969 }
 179:
                        zulu = _closure3_slot3;
                        zulu = typeof zulu;
                        if(!(tango === zulu)) { _fun109969_ip = 205; continue _fun109969 }
 190:
                        tango = _closure3_slot3;
                        zulu = undefined;
                        zulu = tango.bind(zulu)(mike);
                        _closure3_slot3 = zulu;
 205:
                        golf = _closure3_slot0;
                        oscar = golf.dispatch;
                        result = mike.socket;
                        zulu = _closure1_slot8;
                        sizing = zulu.DISPATCH;
                        kilo = mike.evt;
                        backup = _closure3_slot3;
                        output = null;
                        echo = golf;
                        entity = echo[oscar](result, output, sizing, kilo, backup, foxtrot);
 252:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
 139:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'updateSubscriptions';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.subscriptions;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun109971: for(var _fun109971_ip = 0; ; ) switch(_fun109971_ip) {
 0:
                    mike = argFoo;
                    entity = mike.update;
                    if(!entity) { _fun109971_ip = 29; continue _fun109971 }
 12:
                    entity = mike.update;
                    entity = entity.bind(mike)(mike);
                    mike['prevState'] = entity;
 29:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'storeWait';
        entity['key'] = oscar;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun109972: for(var _fun109972_ip = 0; ; ) switch(_fun109972_ip) {
 0:
                mike = argBar;
                tango = argBaz;
                zulu = this;
                var _closure3_slot0 = zulu;
                zulu = argFoo;
                var _closure3_slot1 = zulu;
                var _closure3_slot2 = mike;
                var _closure3_slot3 = tango;
                report = undefined;
                zulu = mike.bind(report)();
                if(zulu) { _fun109972_ip = 147; continue _fun109972 }
 39:
                mike = 0;
                if(!(mike !== tango)) { _fun109972_ip = 147; continue _fun109972 }
 45:
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                mike = 5;
                mike = oscar[mike];
                tango = tango.bind(report)(mike);
                mike = tango.uniqueId;
                mike = mike.bind(tango)();
                var _closure3_slot4 = mike;
                mike = function() { // Original name: removeSubscription
                    report = _closure3_slot0;
                    tango = report.removeSubscription;
                    zulu = _closure3_slot1;
                    mike = {};
                    entity = _closure3_slot4;
                    mike['uniqueId'] = entity;
                    entity = 'RPC_STORE_WAIT';
                    entity = tango.bind(report)(zulu, entity, mike);
                    return entity;
                };
                var _closure3_slot5 = mike;
                mike = global;
                report = mike.Promise;
                mike = report.prototype;
                tango = Object.create(mike, {constructor: {value: report}});
                golf = function(argFoo, argBar) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = argBar;
                    var _closure4_slot1 = entity;
                    entity = global;
                    oscar = entity.setTimeout;
                    report = _closure3_slot3;
                    golf = _closure1_slot0;
                    tango = _closure1_slot1;
                    entity = 11;
                    tango = tango[entity];
                    entity = undefined;
                    tango = golf.bind(entity)(tango);
                    tango = tango.Millis;
                    tango = tango.SECOND;
                    report = report * tango;
                    tango = function() {
                        mike = _closure3_slot5;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        zulu = _closure4_slot1;
                        mike = global;
                        report = mike.Error;
                        mike = report.prototype;
                        tango = Object.create(mike, {constructor: {value: report}});
                        oscar = 'timeout';
                        golf = tango;
                        mike = new golf[report](oscar, report);
                        mike = mike instanceof Object ? mike : tango;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = oscar.bind(entity)(tango, report);
                    var _closure4_slot2 = tango;
                    golf = _closure3_slot0;
                    oscar = golf.addSubscription;
                    yankee = _closure3_slot1;
                    tango = {};
                    zulu = _closure3_slot4;
                    tango['uniqueId'] = zulu;
                    offset = 'RPC_STORE_WAIT';
                    options = function() {
                        _fun109976: for(var _fun109976_ip = 0; ; ) switch(_fun109976_ip) {
 0:
                            mike = _closure3_slot2;
                            entity = undefined;
                            zulu = mike.bind(entity)();
                            if(!zulu) { _fun109976_ip = 45; continue _fun109976 }
 16:
                            mike = global;
                            report = mike.clearTimeout;
                            tango = _closure4_slot2;
                            tango = report.bind(entity)(tango);
                            mike = _closure4_slot0;
                            mike = mike.bind(entity)(zulu);
 45:
                            return entity;
                        }
                    };
                    romeo = golf;
                    verify = tango;
                    mike = romeo[oscar](yankee, offset, verify, options, golf);
                    return entity;
                };
                options = tango;
                mike = new options[report](golf, oscar);
                tango = mike instanceof Object ? mike : tango;
                mike = tango.then;
                entity = function(argFoo) {
                    mike = _closure3_slot5;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    entity = argFoo;
                    return entity;
                };
                entity = mike.bind(tango)(entity);
                return entity;
 147:
                entity = global;
                mike = entity.Promise;
                entity = mike.resolve;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        entity['value'] = report;
        mike[15] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/RPCServer.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();