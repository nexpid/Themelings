// app/modules/message_request/hooks/useIsMessageRequest.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/hooks/useIsMessageRequest.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useIsMessageRequest
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            zulu = _closure1_slot2;
            mike = zulu.isMessageRequest;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useIsMessageRequest'] = tango;
    mike = function(argFoo) { // Original name: useIsEitherTypeOfMessageRequest
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot2;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            _fun89558: for(var _fun89558_ip = 0; ; ) switch(_fun89558_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun89558_ip = 63; continue _fun89558 }
 16:
                oscar = _closure1_slot2;
                report = oscar.isMessageRequest;
                mike = _closure2_slot0;
                mike = report.bind(oscar)(mike);
                if(mike) { _fun89558_ip = 60; continue _fun89558 }
 41:
                report = _closure1_slot3;
                tango = report.isSpam;
                zulu = _closure2_slot0;
                mike = tango.bind(report)(zulu);
 60:
                entity = mike;
 63:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsEitherTypeOfMessageRequest'] = mike;
    return entity;
})();