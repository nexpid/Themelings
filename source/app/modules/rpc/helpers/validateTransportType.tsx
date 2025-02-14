// app/modules/rpc/helpers/validateTransportType.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.TransportTypes;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RPCErrors;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/helpers/validateTransportType.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: validateTransportType
        _fun109728: for(var _fun109728_ip = 0; ; ) switch(_fun109728_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot2;
            mike = mike.IPC;
            if(!(mike !== zulu)) { _fun109728_ip = 34; continue _fun109728 }
 20:
            mike = _closure1_slot2;
            mike = mike.POST_MESSAGE;
            if(!(mike === zulu)) { _fun109728_ip = 38; continue _fun109728 }
 34:
            mike = undefined;
            return mike;
 38:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot3;
            entity = entity.INVALID_COMMAND;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            report = 'Invalid transport.';
            golf = mike;
            oscar = zulu;
            entity = new golf[tango](oscar, report, tango);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    zulu['validateTransportType'] = mike;
    return entity;
})();