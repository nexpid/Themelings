// app/modules/guild_scheduled_events/useEventException.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: _getEventException
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = null;
            zuuluu = entity == tangon;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 39; continue _fun00001 }
 23:
            zuuluu = tangon.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.event_exception_id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 39:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/useEventException.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useEventException
        michal = argBar;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot3;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        zuuluu = 1;
        report = report[zuuluu];
        zuuluu = undefined;
        oscard = oscard.bind(zuuluu)(report);
        report = oscard.useStateFromStoresArray;
        golfie = _closure1_slot2;
        michal = new Array(1);
        michal[0] = golfie;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot2;
                michal = zuuluu.getGuildScheduledEvent;
                entity = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = null;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00004_ip = 42; continue _fun00003 }
 36:
                entity = zuuluu.guild_scheduled_event_exceptions;
 42:
                if(!(michal == entity)) { _fun00004_ip = 50; continue _fun00003 }
 46:
                entity = new Array(0);
 50:
                return entity;
            }
        };
        michal = report.bind(oscard)(michal, entity);
        entity = argFoo;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getEventException
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = _closure1_slot2;
            michal = zuuluu.getGuildScheduledEvent;
            entity = argBar;
            report = michal.bind(zuuluu)(entity);
            entity = null;
            oscard = entity == report;
            zuuluu = undefined;
            michal = undefined;
            if(oscard) { _fun00006_ip = 44; continue _fun00005 }
 38:
            michal = report.guild_scheduled_event_exceptions;
 44:
            if(!(entity == michal)) { _fun00006_ip = 52; continue _fun00005 }
 48:
            michal = new Array(0);
 52:
            entity = argFoo;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    zuuluu['getEventException'] = michal;
    return entity;
})();