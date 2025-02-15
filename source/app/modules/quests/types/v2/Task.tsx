// app/modules/quests/types/v2/Task.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = function(argFoo) { // Original name: _firstPartyTasksFromServer
        _fun67271: for(var _fun67271_ip = 0; ; ) switch(_fun67271_ip) {
 0:
            oscar = argFoo;
            entity = {};
            mike = global;
            zulu = mike.Object;
            mike = zulu.keys;
            report = mike.bind(zulu)(oscar);
            mike = report.length;
            tango = 0;
            mike = tango < mike;
            zulu = null;
            if(!mike) { _fun67271_ip = 106; continue _fun67271 }
 39:
            golf = report[tango];
            options = oscar[golf];
            if(!(zulu != options)) { _fun67271_ip = 94; continue _fun67271 }
 51:
            mike = {};
            verify = options.event_name;
            mike['eventName'] = verify;
            verify = options.target;
            mike['target'] = verify;
            options = options.external_ids;
            mike['externalIds'] = options;
            entity[golf] = mike;
 94:
            tango = tango + 1;
            mike = report.length;
            if(tango < mike) { _fun67271_ip = 39; continue _fun67271 }
 106:
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = function(argFoo) { // Original name: _thirdPartyTasksFromServer
        _fun67272: for(var _fun67272_ip = 0; ; ) switch(_fun67272_ip) {
 0:
            oscar = argFoo;
            entity = {};
            mike = global;
            zulu = mike.Object;
            mike = zulu.keys;
            report = mike.bind(zulu)(oscar);
            mike = report.length;
            tango = 0;
            mike = tango < mike;
            zulu = null;
            if(!mike) { _fun67272_ip = 109; continue _fun67272 }
 39:
            golf = report[tango];
            options = oscar[golf];
            if(!(zulu != options)) { _fun67272_ip = 97; continue _fun67272 }
 51:
            mike = {};
            verify = options.event_name;
            mike['eventName'] = verify;
            verify = options.title;
            mike['title'] = verify;
            verify = options.target;
            mike['target'] = verify;
            options = options.description;
            mike['description'] = options;
            entity[golf] = mike;
 97:
            tango = tango + 1;
            mike = report.length;
            if(tango < mike) { _fun67272_ip = 39; continue _fun67272 }
 109:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/types/v2/Task.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun67273: for(var _fun67273_ip = 0; ; ) switch(_fun67273_ip) {
 0:
            mike = argFoo;
            tango = mike.type;
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            golf = 0;
            entity = entity[golf];
            report = undefined;
            entity = oscar.bind(report)(entity);
            entity = entity.QuestTaskConfigTypes;
            entity = entity.FIRST_PARTY;
            if(!(entity !== tango)) { _fun67273_ip = 184; continue _fun67273 }
 51:
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golf];
            entity = oscar.bind(report)(entity);
            entity = entity.QuestTaskConfigTypes;
            entity = entity.THIRD_PARTY;
            if(!(entity !== tango)) { _fun67273_ip = 86; continue _fun67273 }
 84:
            return report;
 86:
            entity = {};
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = oscar.bind(report)(tango);
            tango = tango.QuestTaskConfigTypes;
            tango = tango.THIRD_PARTY;
            entity['type'] = tango;
            oscar = _closure1_slot3;
            tango = mike.tasks;
            tango = oscar.bind(report)(tango);
            entity['tasks'] = tango;
            tango = mike.enrollment_url;
            entity['enrollmentUrl'] = tango;
            tango = mike.developer_application_id;
            entity['developerApplicationId'] = tango;
            tango = mike.join_operator;
            entity['joinOperator'] = tango;
            return entity;
 184:
            entity = {};
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = oscar.bind(report)(tango);
            tango = tango.QuestTaskConfigTypes;
            tango = tango.FIRST_PARTY;
            entity['type'] = tango;
            tango = _closure1_slot2;
            zulu = mike.tasks;
            zulu = tango.bind(report)(zulu);
            entity['tasks'] = zulu;
            mike = mike.join_operator;
            entity['joinOperator'] = mike;
            return entity;
        }
    };
    zulu['questTaskConfigFromServer'] = mike;
    return entity;
})();