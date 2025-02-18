// app/modules/guild_scheduled_events/useEventSchedule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _getEventSchedule
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            verify = argBaz;
            entity = zuuluu.recurrence_rule;
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 136; continue _fun00001 }
 18:
            if(!(michal != verify)) { _fun00002_ip = 136; continue _fun00001 }
 22:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 1;
            golfie = oscard[entity];
            tangon = undefined;
            option = report.bind(tangon)(golfie);
            golfie = option.getBaseScheduleForRecurrence;
            golfie = golfie.bind(option)(verify, zuuluu);
            entity = oscard[entity];
            oscard = report.bind(tangon)(entity);
            report = oscard.getScheduleForRecurrenceWithException;
            entity = argBar;
            entity = report.bind(oscard)(golfie, entity);
            golfie = entity.startDate;
            oscard = entity.endDate;
            entity = {};
            report = golfie.toDate;
            report = report.bind(golfie)();
            entity['startTime'] = report;
            report = michal == oscard;
            if(report) { _fun00002_ip = 129; continue _fun00001 }
 119:
            report = oscard.toDate;
            tangon = report.bind(oscard)();
 129:
            entity['endTime'] = tangon;
            return entity;
 136:
            entity = {};
            tangon = global;
            golfie = tangon.Date;
            yankee = zuuluu.scheduled_start_time;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            romeon = oscard;
            report = new romeon[golfie](yankee, offset);
            report = report instanceof Object ? report : oscard;
            entity['startTime'] = report;
            report = zuuluu.scheduled_end_time;
            report = michal != report;
            michal = null;
            if(!report) { _fun00002_ip = 224; continue _fun00001 }
 192:
            report = tangon.Date;
            yankee = zuuluu.scheduled_end_time;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            romeon = tangon;
            zuuluu = new romeon[report](yankee, offset);
            michal = zuuluu instanceof Object ? zuuluu : tangon;
 224:
            entity['endTime'] = michal;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/useEventSchedule.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useEventSchedule
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = null;
            if(!(entity == tangon)) { _fun00004_ip = 48; continue _fun00003 }
 12:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.getNextRecurrenceIdInEvent;
            tangon = entity.bind(michal)(report);
 48:
            zuuluu = _closure1_slot4;
            oscard = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            entity = michal[entity];
            michal = undefined;
            oscard = oscard.bind(michal)(entity);
            entity = report.id;
            entity = oscard.bind(michal)(tangon, entity);
            entity = zuuluu.bind(michal)(report, entity, tangon);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useEventScheduleById
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            report = undefined;
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.useStateFromStores;
            option = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getGuildScheduledEvent;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(golfie)(zuuluu, entity);
            entity = null;
            if(!(entity == oscard)) { _fun00006_ip = 102; continue _fun00005 }
 71:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 1;
            zuuluu = option[zuuluu];
            golfie = golfie.bind(report)(zuuluu);
            zuuluu = golfie.getNextRecurrenceIdInEvent;
            oscard = zuuluu.bind(golfie)(tangon);
 102:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 2;
            zuuluu = option[zuuluu];
            golfie = golfie.bind(report)(zuuluu);
            option = entity == tangon;
            zuuluu = undefined;
            if(option) { _fun00006_ip = 136; continue _fun00005 }
 131:
            zuuluu = tangon.id;
 136:
            zuuluu = golfie.bind(report)(oscard, zuuluu);
            golfie = entity == tangon;
            entity = null;
            if(golfie) { _fun00006_ip = 162; continue _fun00005 }
 151:
            michal = _closure1_slot4;
            entity = michal.bind(report)(tangon, zuuluu, oscard);
 162:
            return entity;
        }
    };
    zuuluu['useEventScheduleById'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getEventSchedule
        report = argFoo;
        tangon = argBar;
        zuuluu = _closure1_slot4;
        oscard = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 2;
        entity = michal[entity];
        michal = undefined;
        golfie = oscard.bind(michal)(entity);
        oscard = golfie.getEventException;
        entity = report.id;
        entity = oscard.bind(golfie)(tangon, entity);
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    zuuluu['getEventSchedule'] = michal;
    return entity;
})();