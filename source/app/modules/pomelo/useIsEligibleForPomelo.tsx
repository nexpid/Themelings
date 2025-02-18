// app/modules/pomelo/useIsEligibleForPomelo.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: eligible
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 25; continue _fun00001 }
 12:
            michal = zuuluu.isPomelo;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 25:
            if(!entity) { _fun00002_ip = 59; continue _fun00001 }
 28:
            michal = zuuluu.hasVerifiedEmailOrPhone;
            michal = michal.bind(zuuluu)();
            zuuluu = !michal;
            michal = !zuuluu;
            if(zuuluu) { _fun00002_ip = 56; continue _fun00001 }
 47:
            zuuluu = argBar;
            zuuluu = !zuuluu;
            michal = !zuuluu;
 56:
            entity = michal;
 59:
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
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/pomelo/useIsEligibleForPomelo.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = _closure1_slot2;
        michal = zuuluu.getCurrentUser;
        zuuluu = michal.bind(zuuluu)();
        report = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        entity = michal[entity];
        michal = undefined;
        report = report.bind(michal)(entity);
        entity = report.getPomeloEligibility;
        entity = entity.bind(report)();
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    zuuluu['isEligibleForPomelo'] = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        michal = 2;
        michal = oscard[michal];
        zuuluu = undefined;
        option = report.bind(zuuluu)(michal);
        golfie = option.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure1_slot2;
            entity = michal.getCurrentUser;
            entity = entity.bind(michal)();
            return entity;
        };
        michal = golfie.bind(option)(michal, entity);
        entity = 1;
        entity = oscard[entity];
        report = report.bind(zuuluu)(entity);
        entity = report.usePomeloEligibility;
        entity = entity.bind(report)();
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useIsEligibleForPomelo'] = michal;
    return entity;
})();