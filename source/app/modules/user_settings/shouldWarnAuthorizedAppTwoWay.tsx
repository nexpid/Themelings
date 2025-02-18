// app/modules/user_settings/shouldWarnAuthorizedAppTwoWay.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    tangon = function(argFoo) { // Original name: isAuthorizedAppTwoWay
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 0;
            entity = entity[oscard];
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            entity = entity.ConsoleOAuthApplications;
            entity = entity.XBOX_APPLICATION_ID;
            entity = entity === tangon;
            if(entity) { _fun00002_ip = 85; continue _fun00001 }
 46:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = zuuluu.bind(report)(michal);
            michal = michal.ConsoleOAuthApplicationsSets;
            zuuluu = michal.PLAYSTATION_APPLICATION_IDS;
            michal = zuuluu.has;
            entity = michal.bind(zuuluu)(tangon);
 85:
            return entity;
        }
    };
    var _closure1_slot2 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 1;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/user_settings/shouldWarnAuthorizedAppTwoWay.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useShouldWarnAuthorizedAppTwoWay
        zuuluu = _closure1_slot2;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useShouldWarnAuthorizedAppTwoWay'] = michal;
    return entity;
})();