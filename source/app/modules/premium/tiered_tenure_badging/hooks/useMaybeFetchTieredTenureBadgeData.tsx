// app/modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumTypes;
    var _closure1_slot4 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useMaybeFetchTieredTenureBadgeData
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 2;
        tangon = report[entity];
        entity = undefined;
        verify = oscard.bind(entity)(tangon);
        option = verify.useStateFromStores;
        tangon = _closure1_slot3;
        golfie = new Array(1);
        golfie[0] = tangon;
        tangon = function() {
            michal = _closure1_slot3;
            entity = michal.getCurrentUser;
            entity = entity.bind(michal)();
            return entity;
        };
        tangon = option.bind(verify)(golfie, tangon);
        var _closure2_slot0 = tangon;
        tangon = 3;
        tangon = report[tangon];
        option = oscard.bind(entity)(tangon);
        golfie = option.useIsPremiumSubscriber;
        tangon = _closure1_slot4;
        tangon = tangon.TIER_2;
        tangon = golfie.bind(option)(tangon);
        var _closure2_slot1 = tangon;
        tangon = 4;
        tangon = report[tangon];
        oscard = oscard.bind(entity)(tangon);
        tangon = oscard.useTieredTenureBadgesExperiment;
        tangon = tangon.bind(oscard)();
        tangon = tangon.enabled;
        var _closure2_slot2 = tangon;
        tangon = _closure1_slot1;
        zuuluu = 5;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                tangon = null;
                report = tangon == entity;
                entity = undefined;
                zuuluu = undefined;
                if(report) { _fun00002_ip = 29; continue _fun00001 }
 20:
                report = _closure2_slot0;
                zuuluu = report.id;
 29:
                zuuluu = tangon != zuuluu;
                if(!zuuluu) { _fun00002_ip = 40; continue _fun00001 }
 36:
                zuuluu = _closure2_slot1;
 40:
                if(!zuuluu) { _fun00002_ip = 47; continue _fun00001 }
 43:
                zuuluu = _closure2_slot2;
 47:
                if(!zuuluu) { _fun00002_ip = 93; continue _fun00001 }
 50:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 6;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.fetchProfile;
                michal = _closure2_slot0;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
 93:
                return entity;
            }
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['useMaybeFetchTieredTenureBadgeData'] = michal;
    return entity;
})();