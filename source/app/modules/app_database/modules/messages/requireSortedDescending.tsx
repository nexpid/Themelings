// app/modules/app_database/modules/messages/requireSortedDescending.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 2;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/messages/requireSortedDescending.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: requireSortedDescending
        _fun58459: for(var _fun58459_ip = 0; ; ) switch(_fun58459_ip) {
 0:
            verify = argFoo;
            tango = _closure1_slot0;
            entity = _closure1_slot1;
            report = 0;
            zulu = entity[report];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            oscar = verify.length;
            zulu = 2;
            zulu = oscar <= zulu;
            if(zulu) { _fun58459_ip = 105; continue _fun58459 }
 42:
            oscar = _closure1_slot0;
            mike = _closure1_slot1;
            offset = 1;
            mike = mike[offset];
            options = oscar.bind(entity)(mike);
            golf = options.compare;
            mike = verify[report];
            oscar = mike.id;
            mike = verify.length;
            mike = mike - offset;
            mike = verify[mike];
            mike = mike.id;
            mike = golf.bind(options)(oscar, mike);
            zulu = mike >= report;
 105:
            mike = 'messages must be sorted in descending order.';
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    zulu['requireSortedDescending'] = mike;
    return entity;
})();