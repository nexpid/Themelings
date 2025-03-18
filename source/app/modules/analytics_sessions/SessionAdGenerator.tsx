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
            zuuluu = argFoo;
            entity = global;
            michal = entity.Date;
            entity = michal.now;
            option = entity.bind(michal)();
            entity = zuuluu.lastUsed;
            verify = option - entity;
            michal = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 1;
            entity = golfie[entity];
            oscard = undefined;
            entity = michal.bind(oscard)(entity);
            offset = entity.SESSION_IDLE_TIMEOUT_MINS;
            report = _closure1_slot1;
            michal = 2;
            entity = golfie[michal];
            entity = report.bind(oscard)(entity);
            entity = entity.Millis;
            entity = entity.MINUTE;
            entity = offset * entity;
            entity = verify > entity;
            zuuluu = zuuluu.initialized;
            zuuluu = option - zuuluu;
            tangon = _closure1_slot3;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.Millis;
            michal = michal.HOUR;
            michal = tangon * michal;
            michal = zuuluu > michal;
            if(entity) { _fun00002_ip = 146; continue _fun00001 }
 143:
            entity = michal;
 146:
            return entity;
        }
    };
    var _closure1_slot5 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 12;
    var _closure1_slot3 = entity;
    entity = null;
    var _closure1_slot4 = entity;
    entity = 3;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/analytics_sessions/SessionAdGenerator.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: getOrRefreshAdSession
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
            report = _closure1_slot4;
            michal = null;
            if(!(michal != report)) { _fun00004_ip = 76; continue _fun00003 }
 41:
            report = _closure1_slot5;
            michal = _closure1_slot4;
            michal = report.bind(golfie)(michal);
            if(michal) { _fun00004_ip = 76; continue _fun00003 }
 57:
            if(!entity) { _fun00004_ip = 70; continue _fun00003 }
 60:
            entity = _closure1_slot4;
            entity['lastUsed'] = tangon;
 70:
            entity = _closure1_slot4;
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
            _closure1_slot4 = michal;
            entity = michal;
 129:
            return entity;
        }
    };
    zuuluu['getOrRefreshAdSession'] = tangon;
    zuuluu['isAdSessionExpired'] = michal;
    return entity;
})();