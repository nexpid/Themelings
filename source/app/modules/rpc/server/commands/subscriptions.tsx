// app/modules/rpc/server/commands/subscriptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot5 = mike;
    mike = {};
    verify = tango.SUBSCRIBE;
    golf = {};
    offset = function(argFoo) { // Original name: handler
        mike = argFoo;
        zulu = mike.server;
        var _closure2_slot0 = zulu;
        zulu = mike.socket;
        var _closure2_slot1 = zulu;
        zulu = mike.evt;
        var _closure2_slot2 = zulu;
        mike = mike.args;
        var _closure2_slot3 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 679; continue _fun00001 }
 12:
                    oscar = undefined;
                    var _closure4_slot0 = oscar;
                    var _closure4_slot1 = oscar;
                    zulu = _closure2_slot0;
                    tango = zulu.events;
                    zulu = _closure2_slot2;
                    verify = tango[zulu];
                    options = null;
                    if(!(options != verify)) { _fun00002_ip = 586; continue _fun00001 }
 52:
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = 3;
                    zulu = offset[zulu];
                    offset = golf.bind(oscar)(zulu);
                    zulu = _closure2_slot1;
                    zulu = zulu.authorization;
                    golf = zulu.scopes;
                    zulu = verify.scope;
                    zulu = offset.bind(oscar)(golf, zulu);
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    if(zulu) { _fun00002_ip = 174; continue _fun00001 }
 114:
                    zulu = 2;
                    zulu = offset[zulu];
                    foxtrot = golf.bind(oscar)(zulu);
                    romeo = {};
                    zulu = _closure1_slot5;
                    zulu = zulu.INVALID_PERMISSIONS;
                    romeo['errorCode'] = zulu;
                    zulu = foxtrot.prototype;
                    yankee = Object.create(zulu, {constructor: {value: foxtrot}});
                    output = 'Not authenticated or invalid scope';
                    echo = yankee;
                    result = romeo;
                    zulu = new echo[foxtrot](result, output, sizing);
                    zulu = zulu instanceof Object ? zulu : yankee;
                    throw zulu;
 174:
                    zulu = 4;
                    zulu = offset[zulu];
                    yankee = golf.bind(oscar)(zulu);
                    offset = yankee.track;
                    zulu = _closure1_slot4;
                    golf = zulu.RPC_SUBSCRIPTION_REQUESTED;
                    zulu = {};
                    romeo = _closure2_slot2;
                    zulu['event'] = romeo;
                    romeo = verify.scope;
                    foxtrot = 'object';
                    romeo = typeof romeo;
                    if(!(foxtrot !== romeo)) { _fun00002_ip = 237; continue _fun00001 }
 229:
                    romeo = verify.scope;
                    _fun00002_ip = 262; continue _fun00001;
 237:
                    foxtrot = global;
                    kilo = foxtrot.JSON;
                    backup = kilo.stringify;
                    foxtrot = verify.scope;
                    romeo = backup.bind(kilo)(foxtrot);
 262:
                    zulu['scope'] = romeo;
                    romeo = _closure2_slot1;
                    foxtrot = romeo.application;
                    foxtrot = foxtrot.id;
                    zulu['application_id'] = foxtrot;
                    romeo = romeo.authorization;
                    foxtrot = romeo.scopes;
                    romeo = foxtrot.toString;
                    romeo = romeo.bind(foxtrot)();
                    zulu['socket_scope'] = romeo;
                    zulu = offset.bind(yankee)(golf, zulu);
                    zulu = verify.validation;
                    if(!(options != zulu)) { _fun00002_ip = 401; continue _fun00001 }
 328:
                    golf = _closure2_slot0;
                    zulu = golf.getJoi;
                    zulu = zulu.bind(golf)();
                    SaveGenerator(address=346);
 344:
                    return zulu;
 346:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00002_ip = 583; continue _fun00001 }
 355:
                    romeo = zulu.validate;
                    yankee = _closure2_slot3;
                    golf = verify.validation;
                    offset = golf.bind(verify)(zulu);
                    golf = {};
                    foxtrot = false;
                    golf['convert'] = foxtrot;
                    golf = romeo.bind(zulu)(yankee, offset, golf);
                    golf = golf.error;
                    if(!(options == golf)) { _fun00002_ip = 515; continue _fun00001 }
 401:
                    options = verify.handler;
                    golf = {};
                    yankee = _closure2_slot3;
                    golf['args'] = yankee;
                    offset = _closure2_slot1;
                    golf['socket'] = offset;
                    golf = options.bind(verify)(golf);
                    _closure4_slot0 = golf;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 5;
                    golf = verify[golf];
                    verify = options.bind(oscar)(golf);
                    options = verify.getInitialSubscriptionPayload;
                    golf = _closure2_slot2;
                    golf = options.bind(verify)(offset, golf, yankee);
                    _closure4_slot1 = golf;
                    golf = global;
                    options = golf.Promise;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    result = function(argFoo) {
                        entity = global;
                        zulu = entity.setImmediate;
                        entity = undefined;
                        mike = function() {
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                options = _closure2_slot0;
                                golf = options.addSubscription;
                                romeo = _closure2_slot1;
                                yankee = _closure2_slot2;
                                offset = _closure2_slot3;
                                verify = _closure4_slot0;
                                foxtrot = options;
                                zulu = foxtrot[golf](romeo, yankee, offset, verify, options);
                                tango = _closure4_slot1;
                                zulu = null;
                                if(!(zulu != tango)) { _fun00004_ip = 83; continue _fun00003 }
 49:
                                report = _closure2_slot0;
                                tango = report.dispatchToSubscriptions;
                                zulu = _closure2_slot2;
                                mike = _closure4_slot1;
                                entity = function(argFoo) {
                                    entity = argFoo;
                                    entity = entity.socket;
                                    mike = entity.id;
                                    entity = _closure2_slot1;
                                    entity = entity.id;
                                    entity = mike === entity;
                                    return entity;
                                };
                                entity = tango.bind(report)(zulu, entity, mike);
 83:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = zulu.bind(entity)(mike);
                        zulu = {};
                        mike = _closure2_slot2;
                        zulu['evt'] = mike;
                        mike = argFoo;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    echo = golf;
                    report = new echo[options](result, output);
                    report = report instanceof Object ? report : golf;
                    return report;
 515:
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 2;
                    report = options[report];
                    options = golf.bind(oscar)(report);
                    golf = {};
                    tango = _closure1_slot5;
                    tango = tango.INVALID_PAYLOAD;
                    golf['errorCode'] = tango;
                    tango = options.prototype;
                    report = Object.create(tango, {constructor: {value: options}});
                    output = 'Invalid subscription parameters provided';
                    echo = report;
                    result = golf;
                    tango = new echo[options](result, output, sizing);
                    tango = tango instanceof Object ? tango : report;
                    throw tango;
 583:
                    return zulu;
 586:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 2;
                    tango = golf[tango];
                    report = report.bind(oscar)(tango);
                    tango = {};
                    zulu = _closure1_slot5;
                    zulu = zulu.INVALID_EVENT;
                    tango['errorCode'] = zulu;
                    oscar = _closure2_slot2;
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = 'Invalid event: ';
                    output = zulu.bind(mike)(oscar);
                    zulu = report.prototype;
                    zulu = Object.create(zulu, {constructor: {value: report}});
                    echo = zulu;
                    result = tango;
                    mike = new echo[report](result, output, sizing);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 679:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['handler'] = offset;
    mike[verify] = golf;
    golf = tango.UNSUBSCRIBE;
    tango = {};
    options = function(argFoo) { // Original name: handler
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tango = entity.server;
            zulu = entity.socket;
            report = entity.evt;
            mike = entity.args;
            entity = tango.events;
            oscar = entity[report];
            entity = null;
            if(!(entity != oscar)) { _fun00006_ip = 65; continue _fun00005 }
 43:
            entity = tango.removeSubscription;
            entity = entity.bind(tango)(zulu, report, mike);
            entity = {};
            entity['evt'] = report;
            return entity;
 65:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot5;
            entity = entity.INVALID_EVENT;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid event: ';
            options = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            offset = mike;
            verify = zulu;
            entity = new offset[tango](verify, options, golf);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/subscriptions.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();