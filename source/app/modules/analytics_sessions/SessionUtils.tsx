// app/modules/analytics_sessions/SessionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    golfie = entity.Object;
    report = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    report = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    tangon = tangon.Millis;
    report = tangon.MINUTE;
    tangon = 30;
    report = tangon * report;
    var _closure1_slot0 = report;
    tangon = 1;
    golfie = oscard[tangon];
    oscard = argBar;
    option = oscard.bind(entity)(golfie);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/analytics_sessions/SessionUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['SESSION_IDLE_TIMEOUT_MILLIS'] = report;
    zuuluu['CLIENT_SESSION_STORAGE_VERSION'] = tangon;
    tangon = function(argFoo) { // Original name: isSessionExpired
        michal = _closure1_slot0;
        entity = argFoo;
        entity = entity.lastUsedTimestamp;
        michal = michal + entity;
        entity = global;
        zuuluu = entity.Date;
        entity = zuuluu.now;
        entity = entity.bind(zuuluu)();
        michal = michal - entity;
        entity = 0;
        entity = michal <= entity;
        return entity;
    };
    zuuluu['isSessionExpired'] = tangon;
    michal = function(argFoo) { // Original name: timestampOrZero
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity != tangon;
            entity = 0;
            if(!michal) { _fun00002_ip = 29; continue _fun00001 }
 14:
            michal = global;
            zuuluu = michal.Number;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 29:
            return entity;
        }
    };
    zuuluu['timestampOrZero'] = michal;
    return entity;
})();