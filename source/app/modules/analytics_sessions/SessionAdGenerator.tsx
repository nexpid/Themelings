// app/modules/analytics_sessions/SessionAdGenerator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: isAdSessionExpired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = global;
            michal = tangon.Date;
            entity = michal.now;
            option = entity.bind(michal)();
            entity = report.createdAtTimestamp;
            if(!(!(option < entity))) { _fun00002_ip = 101; continue _fun00001 }
 30:
            entity = report.lastUsedTimestamp;
            zuuluu = option - entity;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 2;
            oscard = oscard[entity];
            entity = undefined;
            entity = golfie.bind(entity)(oscard);
            entity = entity.SESSION_IDLE_TIMEOUT_MILLIS;
            entity = zuuluu > entity;
            zuuluu = report.createdAtTimestamp;
            zuuluu = option - zuuluu;
            michal = _closure1_slot3;
            michal = zuuluu > michal;
            if(entity) { _fun00002_ip = 99; continue _fun00001 }
 96:
            entity = michal;
 99:
            return entity;
 101:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.addBreadcrumb;
            entity = {};
            oscard = 'ad';
            entity['category'] = oscard;
            golfie = report.createdAtTimestamp;
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
    var _closure1_slot5 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    report = report.Millis;
    option = report.HOUR;
    report = 12;
    report = report * option;
    var _closure1_slot3 = report;
    report = null;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/analytics_sessions/SessionAdGenerator.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: getOrRefreshAdSession
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = arguments[0];
            oscard = undefined;
            if(!(entity === oscard)) { _fun00004_ip = 11; continue _fun00003 }
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
            michal = report.bind(oscard)(michal);
            if(michal) { _fun00004_ip = 76; continue _fun00003 }
 57:
            if(!entity) { _fun00004_ip = 70; continue _fun00003 }
 60:
            entity = _closure1_slot4;
            entity['lastUsedTimestamp'] = tangon;
 70:
            entity = _closure1_slot4;
            _fun00004_ip = 153; continue _fun00003;
 76:
            michal = {};
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            option = 1;
            option = golfie[option];
            verify = report.bind(oscard)(option);
            option = verify.v4;
            option = option.bind(verify)();
            michal['uuid'] = option;
            michal['createdAtTimestamp'] = tangon;
            michal['lastUsedTimestamp'] = tangon;
            tangon = 2;
            tangon = golfie[tangon];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.CLIENT_SESSION_STORAGE_VERSION;
            michal['version'] = tangon;
            _closure1_slot4 = michal;
            entity = michal;
 153:
            return entity;
        }
    };
    zuuluu['getOrRefreshAdSession'] = report;
    report = function() { // Original name: clearAdSession
        entity = null;
        _closure1_slot4 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['clearAdSession'] = report;
    tangon = function() { // Original name: getCurrentAdSession
        entity = _closure1_slot4;
        return entity;
    };
    zuuluu['getCurrentAdSession'] = tangon;
    zuuluu['isAdSessionExpired'] = michal;
    return entity;
})();