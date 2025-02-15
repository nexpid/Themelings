// app/modules/rpc/server/commands/networking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    golf = entity.Object;
    tango = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(golf)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    verify = mike.RPC_LOCAL_SCOPE;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.Endpoints;
    var _closure1_slot3 = tango;
    tango = mike.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = mike.RPCCommands;
    mike = {};
    offset = tango.GET_NETWORKING_CONFIG;
    golf = {};
    golf['scope'] = verify;
    yankee = function() { // Original name: handler
        romeo = global;
        tango = romeo.Promise;
        zulu = tango.all;
        golf = _closure1_slot0;
        verify = _closure1_slot2;
        report = 2;
        mike = verify[report];
        oscar = undefined;
        mike = golf.bind(oscar)(mike);
        yankee = mike.HTTP;
        offset = yankee.get;
        mike = {'url': null, 'retries': 3, 'rejectWithError': false};
        foxtrot = romeo.location;
        foxtrot = foxtrot.protocol;
        romeo = romeo.window;
        romeo = romeo.GLOBAL_ENV;
        romeo = romeo.NETWORKING_ENDPOINT;
        romeo = foxtrot + romeo;
        mike['url'] = romeo;
        yankee = offset.bind(yankee)(mike);
        offset = yankee.then;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            entity = entity.address;
            return entity;
        };
        offset = offset.bind(yankee)(mike);
        mike = new Array(2);
        mike[0] = offset;
        report = verify[report];
        report = golf.bind(oscar)(report);
        golf = report.HTTP;
        oscar = golf.post;
        report = {'url': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
        options = _closure1_slot3;
        options = options.NETWORKING_TOKEN;
        report['url'] = options;
        golf = oscar.bind(golf)(report);
        oscar = golf.then;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            entity = entity.token;
            return entity;
        };
        report = oscar.bind(golf)(report);
        mike[1] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                entity = report[Symbol.iterator];
                report = entity().next;
                mike = report().value;
                zulu = entity;
                golf = undefined;
                tango = zulu === golf;
                zulu = undefined;
                if(tango) { _fun00002_ip = 27; continue _fun00001 }
 24:
                zulu = mike;
 27:
                mike = undefined;
                if(tango) { _fun00002_ip = 57; continue _fun00001 }
 32:
                oscar = report().value;
                report = entity;
                report = report === golf;
                mike = undefined;
                tango = report;
                if(report) { _fun00002_ip = 57; continue _fun00001 }
 51:
                mike = oscar;
                tango = report;
 57:
                if(tango) { _fun00002_ip = 63; continue _fun00001 }
 60:
                entity.return();
 63:
                entity = {};
                entity['address'] = zulu;
                entity['token'] = mike;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    offset = tango.NETWORKING_SYSTEM_METRICS;
    golf = {};
    golf['scope'] = verify;
    yankee = function(argFoo) { // Original name: handler
        mike = argFoo;
        entity = mike.socket;
        report = mike.args;
        entity = entity.application;
        entity = entity.id;
        report['application_id'] = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.track;
        mike = _closure1_slot4;
        mike = mike.NETWORKING_SYSTEM_METRICS;
        mike = zulu.bind(tango)(mike, report);
        return entity;
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    offset = tango.NETWORKING_PEER_METRICS;
    golf = {};
    golf['scope'] = verify;
    yankee = function(argFoo) { // Original name: handler
        mike = argFoo;
        entity = mike.socket;
        report = mike.args;
        entity = entity.application;
        entity = entity.id;
        report['application_id'] = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.track;
        mike = _closure1_slot4;
        mike = mike.NETWORKING_PEER_METRICS;
        mike = zulu.bind(tango)(mike, report);
        return entity;
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    golf = tango.NETWORKING_CREATE_TOKEN;
    tango = {};
    tango['scope'] = verify;
    options = function() { // Original name: handler
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {'url': null, 'retries': 1, 'oldFormErrors': true, 'rejectWithError': false};
        tango = _closure1_slot3;
        tango = tango.NETWORKING_TOKEN;
        entity['url'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/networking.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();