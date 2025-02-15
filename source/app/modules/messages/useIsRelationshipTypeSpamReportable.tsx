// app/modules/messages/useIsRelationshipTypeSpamReportable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RelationshipTypes;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/useIsRelationshipTypeSpamReportable.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsRelationshipTypeSpamReportable
        _fun101647: for(var _fun101647_ip = 0; ; ) switch(_fun101647_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 2;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.useStateFromStores;
            zulu = _closure1_slot2;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getRelationshipType;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = report.bind(oscar)(tango, entity, zulu);
            entity = _closure1_slot3;
            entity = entity.NONE;
            entity = zulu === entity;
            if(entity) { _fun101647_ip = 104; continue _fun101647 }
 90:
            tango = _closure1_slot3;
            tango = tango.BLOCKED;
            entity = zulu === tango;
 104:
            if(entity) { _fun101647_ip = 121; continue _fun101647 }
 107:
            mike = _closure1_slot3;
            mike = mike.PENDING_INCOMING;
            entity = zulu === mike;
 121:
            return entity;
        }
    };
    zulu['useIsRelationshipTypeSpamReportable'] = mike;
    return entity;
})();