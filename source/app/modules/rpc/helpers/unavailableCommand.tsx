// app/modules/rpc/helpers/unavailableCommand.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    mike = mike.RPCErrors;
    var _closure1_slot2 = mike;
    tango = {};
    mike = function(argFoo) { // Original name: handler
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = {};
        entity = _closure1_slot2;
        entity = entity.INVALID_COMMAND;
        zulu['errorCode'] = entity;
        entity = argFoo;
        report = entity.cmd;
        entity = global;
        entity = entity.HermesInternal;
        mike = entity.concat;
        entity = 'Unsupported command: ';
        oscar = mike.bind(entity)(report);
        mike = tango.prototype;
        mike = Object.create(mike, {constructor: {value: tango}});
        options = mike;
        golf = zulu;
        entity = new options[tango](golf, oscar, report);
        entity = entity instanceof Object ? entity : mike;
        throw entity;
    };
    tango['handler'] = mike;
    mike = {};
    report = function(argFoo) { // Original name: handler
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = {};
        entity = _closure1_slot2;
        entity = entity.INVALID_COMMAND;
        zulu['errorCode'] = entity;
        entity = argFoo;
        report = entity.cmd;
        entity = global;
        entity = entity.HermesInternal;
        mike = entity.concat;
        entity = 'Deprecated command: ';
        oscar = mike.bind(entity)(report);
        mike = tango.prototype;
        mike = Object.create(mike, {constructor: {value: tango}});
        options = mike;
        golf = zulu;
        entity = new options[tango](golf, oscar, report);
        entity = entity instanceof Object ? entity : mike;
        throw entity;
    };
    mike['handler'] = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/rpc/helpers/unavailableCommand.tsx';
    report = oscar.bind(golf)(report);
    zulu['unsupportedCommand'] = tango;
    zulu['deprecatedCommand'] = mike;
    return entity;
})();