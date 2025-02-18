// app/modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: isActivityParticipantCurrentUserCurrentSession
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = arguments[1];
            oscard = undefined;
            if(!(tangon === oscard)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            tangon = _closure1_slot0;
 19:
            entity = tangon.getId;
            michal = entity.bind(tangon)();
            entity = tangon.getSessionId;
            tangon = entity.bind(tangon)();
            entity = zuuluu.userId;
            entity = entity === michal;
            if(!entity) { _fun00002_ip = 92; continue _fun00001 }
 51:
            report = zuuluu.sessionId;
            michal = null;
            michal = michal == report;
            if(michal) { _fun00002_ip = 76; continue _fun00001 }
 66:
            report = zuuluu.sessionId;
            michal = oscard === report;
 76:
            if(michal) { _fun00002_ip = 89; continue _fun00001 }
 79:
            zuuluu = zuuluu.sessionId;
            michal = zuuluu === tangon;
 89:
            entity = michal;
 92:
            return entity;
        }
    };
    zuuluu['isActivityParticipantCurrentUserCurrentSession'] = michal;
    return entity;
})();