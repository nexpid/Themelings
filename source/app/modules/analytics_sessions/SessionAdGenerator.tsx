// app/modules/analytics_sessions/SessionAdGenerator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    michal = function(argFoo) { // Original name: isAdSessionExpired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = global;
            michal = tangon.Date;
            entity = michal.now;
            option = entity.bind(michal)();
            entity = report.initialized;
            if(!(!(option < entity))) { _fun00002_ip = 160; continue _fun00001 }
 33:
            entity = report.lastUsed;
            zuuluu = option - entity;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 2;
            michal = verify[michal];
            golfie = undefined;
            michal = oscard.bind(golfie)(michal);
            offset = michal.SESSION_IDLE_TIMEOUT_MINS;
            oscard = _closure1_slot1;
            michal = 3;
            entity = verify[michal];
            entity = oscard.bind(golfie)(entity);
            entity = entity.Millis;
            entity = entity.MINUTE;
            entity = offset * entity;
            entity = zuuluu > entity;
            zuuluu = report.initialized;
            zuuluu = option - zuuluu;
            michal = verify[michal];
            michal = oscard.bind(golfie)(michal);
            michal = michal.Millis;
            oscard = michal.HOUR;
            michal = 12;
            michal = michal * oscard;
            michal = zuuluu > michal;
            if(entity) { _fun00002_ip = 158; continue _fun00001 }
 155:
            entity = michal;
 158:
            return entity;
 160:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.addBreadcrumb;
            entity = {};
            oscard = 'ad';
            entity['category'] = oscard;
            golfie = report.initialized;
            tangon = tangon.HermesInternal;
            oscard = tangon.concat;
            report = 'future facing timestamp Date.now(): ';
            tangon = ', initialized timestamp: ';
            tangon = oscard.bind(report)(option, tangon, golfie);
            entity['message'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = true;
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = null;
    var _closure1_slot3 = entity;
    entity = 4;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/analytics_sessions/SessionAdGenerator.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: getOrRefreshAdSession
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = arguments[0];
            golfie = undefined;
            if(!(entity === golfie)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            entity = false;
 11:
            michal = global;
            zuuluu = michal.Date;
            michal = zuuluu.now;
            tangon = michal.bind(zuuluu)();
            report = _closure1_slot3;
            michal = null;
            if(!(michal != report)) { _fun00004_ip = 76; continue _fun00003 }
 41:
            report = _closure1_slot4;
            michal = _closure1_slot3;
            michal = report.bind(golfie)(michal);
            if(michal) { _fun00004_ip = 76; continue _fun00003 }
 57:
            if(!entity) { _fun00004_ip = 70; continue _fun00003 }
 60:
            entity = _closure1_slot3;
            entity['lastUsed'] = tangon;
 70:
            entity = _closure1_slot3;
            _fun00004_ip = 129; continue _fun00003;
 76:
            michal = {};
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 0;
            report = option[report];
            oscard = oscard.bind(golfie)(report);
            report = oscard.v4;
            report = report.bind(oscard)();
            michal['uuid'] = report;
            michal['initialized'] = tangon;
            michal['lastUsed'] = tangon;
            _closure1_slot3 = michal;
            entity = michal;
 129:
            return entity;
        }
    };
    zuuluu['getOrRefreshAdSession'] = report;
    report = function() { // Original name: clearAdSession
        entity = null;
        _closure1_slot3 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['clearAdSession'] = report;
    tangon = function() { // Original name: getCurrentAdSession
        entity = _closure1_slot3;
        return entity;
    };
    zuuluu['getCurrentAdSession'] = tangon;
    zuuluu['isAdSessionExpired'] = michal;
    return entity;
})();