// app/modules/analytics_sessions/SessionUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/analytics_sessions/SessionUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 30;
    zuuluu['SESSION_IDLE_TIMEOUT_MINS'] = tangon;
    tangon = function(argFoo) { // Original name: isSessionExpired
        entity = argFoo;
        michal = entity.lastUsed;
        entity = 1800000;
        michal = entity + michal;
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