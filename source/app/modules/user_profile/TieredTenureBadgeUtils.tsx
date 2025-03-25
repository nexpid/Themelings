// app/modules/user_profile/TieredTenureBadgeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.TENURE_BADGES;
    var _closure1_slot2 = tangon;
    tangon = function(argFoo) { // Original name: getTieredTenureBadgeData
        michal = _closure1_slot2;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    var _closure1_slot3 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/user_profile/TieredTenureBadgeUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getTieredTenureBadgeData'] = tangon;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot3;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            entity = null;
            zuuluu = entity == zuuluu;
            if(zuuluu) { _fun00002_ip = 29; continue _fun00001 }
 26:
            entity = michal;
 29:
            return entity;
        }
    };
    zuuluu['getTieredTenureBadge'] = tangon;
    michal = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argBar;
            entity = null;
            if(!(entity != oscard)) { _fun00004_ip = 105; continue _fun00003 }
 9:
            report = _closure1_slot3;
            tangon = undefined;
            michal = argFoo;
            michal = report.bind(tangon)(michal);
            if(!(entity != michal)) { _fun00004_ip = 103; continue _fun00003 }
 30:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            report = 1;
            zuuluu = zuuluu[report];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(oscard);
            oscard = zuuluu.add;
            tangon = michal.tenureReqNumMonths;
            michal = 'months';
            michal = oscard.bind(zuuluu)(tangon, michal);
            tangon = zuuluu.add;
            michal = 'days';
            michal = tangon.bind(zuuluu)(report, michal);
            michal = zuuluu.toDate;
            michal = michal.bind(zuuluu)();
            return michal;
 103:
            return entity;
 105:
            return entity;
        }
    };
    zuuluu['getEarnedOnDate'] = michal;
    return entity;
})();