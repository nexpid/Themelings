// app/modules/rpc/server/commands/logs.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    tango = mike.RPCCommands;
    verify = mike.RPC_APPLICATION_LOGGING_CATEGORY;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    golf = mike.prototype;
    golf = Object.create(golf, {constructor: {value: mike}});
    foxtrot = golf;
    romeo = verify;
    mike = new foxtrot[mike](romeo, yankee);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot3 = mike;
    mike = {};
    golf = tango.CAPTURE_LOG;
    tango = {};
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        golf = tango.bind(report)();
        oscar = golf.max;
        tango = 10;
        oscar = oscar.bind(golf)(tango);
        tango = oscar.required;
        tango = tango.bind(oscar)();
        entity['level'] = tango;
        tango = report.string;
        oscar = tango.bind(report)();
        report = oscar.max;
        tango = 1000;
        report = report.bind(oscar)(tango);
        tango = report.required;
        tango = tango.bind(report)();
        entity['message'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['validation'] = verify;
    options = function(argFoo) { // Original name: handler
        _fun109637: for(var _fun109637_ip = 0; ; ) switch(_fun109637_ip) {
 0:
            entity = argFoo;
            zulu = entity.socket;
            entity = entity.args;
            report = entity.level;
            options = entity.message;
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 3;
            tango = tango[entity];
            entity = undefined;
            golf = oscar.bind(entity)(tango);
            oscar = golf.validatePostMessageTransport;
            tango = zulu.transport;
            tango = oscar.bind(golf)(tango);
            zulu = zulu.application;
            golf = zulu.id;
            zulu = global;
            zulu = zulu.HermesInternal;
            oscar = zulu.concat;
            tango = '';
            zulu = ' - ';
            tango = oscar.bind(tango)(golf, zulu, options);
            zulu = 'log';
            if(!(zulu !== report)) { _fun109637_ip = 214; continue _fun109637 }
 116:
            zulu = 'warn';
            if(!(zulu !== report)) { _fun109637_ip = 198; continue _fun109637 }
 124:
            zulu = 'debug';
            if(!(zulu !== report)) { _fun109637_ip = 181; continue _fun109637 }
 132:
            zulu = 'info';
            if(!(zulu !== report)) { _fun109637_ip = 164; continue _fun109637 }
 140:
            zulu = 'error';
            if(!(zulu === report)) { _fun109637_ip = 229; continue _fun109637 }
 148:
            report = _closure1_slot3;
            zulu = report.error;
            zulu = zulu.bind(report)(tango);
            _fun109637_ip = 229; continue _fun109637;
 164:
            report = _closure1_slot3;
            zulu = report.info;
            zulu = zulu.bind(report)(tango);
            _fun109637_ip = 229; continue _fun109637;
 181:
            report = _closure1_slot3;
            zulu = report.verbose;
            zulu = zulu.bind(report)(tango);
            _fun109637_ip = 229; continue _fun109637;
 198:
            report = _closure1_slot3;
            zulu = report.warn;
            zulu = zulu.bind(report)(tango);
            _fun109637_ip = 229; continue _fun109637;
 214:
            zulu = _closure1_slot3;
            mike = zulu.log;
            mike = mike.bind(zulu)(tango);
 229:
            return entity;
        }
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/logs.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();