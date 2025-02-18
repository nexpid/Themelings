// app/modules/quests/types/v2/Task.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = function(argFoo) { // Original name: _firstPartyTasksFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = {};
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            report = michal.bind(zuuluu)(oscard);
            michal = report.length;
            tangon = 0;
            michal = tangon < michal;
            zuuluu = null;
            if(!michal) { _fun00002_ip = 106; continue _fun00001 }
 39:
            golfie = report[tangon];
            option = oscard[golfie];
            if(!(zuuluu != option)) { _fun00002_ip = 94; continue _fun00001 }
 51:
            michal = {};
            verify = option.event_name;
            michal['eventName'] = verify;
            verify = option.target;
            michal['target'] = verify;
            option = option.external_ids;
            michal['externalIds'] = option;
            entity[golfie] = michal;
 94:
            tangon = tangon + 1;
            michal = report.length;
            if(tangon < michal) { _fun00002_ip = 39; continue _fun00001 }
 106:
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = function(argFoo) { // Original name: _thirdPartyTasksFromServer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            entity = {};
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            report = michal.bind(zuuluu)(oscard);
            michal = report.length;
            tangon = 0;
            michal = tangon < michal;
            zuuluu = null;
            if(!michal) { _fun00004_ip = 109; continue _fun00003 }
 39:
            golfie = report[tangon];
            option = oscard[golfie];
            if(!(zuuluu != option)) { _fun00004_ip = 97; continue _fun00003 }
 51:
            michal = {};
            verify = option.event_name;
            michal['eventName'] = verify;
            verify = option.title;
            michal['title'] = verify;
            verify = option.target;
            michal['target'] = verify;
            option = option.description;
            michal['description'] = option;
            entity[golfie] = michal;
 97:
            tangon = tangon + 1;
            michal = report.length;
            if(tangon < michal) { _fun00004_ip = 39; continue _fun00003 }
 109:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/types/v2/Task.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = michal.type;
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = 0;
            entity = entity[golfie];
            report = undefined;
            entity = oscard.bind(report)(entity);
            entity = entity.QuestTaskConfigTypes;
            entity = entity.FIRST_PARTY;
            if(!(entity !== tangon)) { _fun00006_ip = 184; continue _fun00005 }
 51:
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golfie];
            entity = oscard.bind(report)(entity);
            entity = entity.QuestTaskConfigTypes;
            entity = entity.THIRD_PARTY;
            if(!(entity !== tangon)) { _fun00006_ip = 86; continue _fun00005 }
 84:
            return report;
 86:
            entity = {};
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.QuestTaskConfigTypes;
            tangon = tangon.THIRD_PARTY;
            entity['type'] = tangon;
            oscard = _closure1_slot3;
            tangon = michal.tasks;
            tangon = oscard.bind(report)(tangon);
            entity['tasks'] = tangon;
            tangon = michal.enrollment_url;
            entity['enrollmentUrl'] = tangon;
            tangon = michal.developer_application_id;
            entity['developerApplicationId'] = tangon;
            tangon = michal.join_operator;
            entity['joinOperator'] = tangon;
            return entity;
 184:
            entity = {};
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.QuestTaskConfigTypes;
            tangon = tangon.FIRST_PARTY;
            entity['type'] = tangon;
            tangon = _closure1_slot2;
            zuuluu = michal.tasks;
            zuuluu = tangon.bind(report)(zuuluu);
            entity['tasks'] = zuuluu;
            michal = michal.join_operator;
            entity['joinOperator'] = michal;
            return entity;
        }
    };
    zuuluu['questTaskConfigFromServer'] = michal;
    return entity;
})();