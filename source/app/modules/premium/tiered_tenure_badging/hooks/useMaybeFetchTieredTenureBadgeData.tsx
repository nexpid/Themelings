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
    tangon = 6;
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
        golfie = oscard.bind(entity)(tangon);
        oscard = golfie.useIsPremiumSubscriber;
        tangon = _closure1_slot4;
        tangon = tangon.TIER_2;
        tangon = oscard.bind(golfie)(tangon);
        var _closure2_slot1 = tangon;
        tangon = _closure1_slot1;
        zuuluu = 4;
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
                if(!zuuluu) { _fun00002_ip = 80; continue _fun00001 }
 43:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 5;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot0;
                michal = michal.id;
                michal = zuuluu.bind(entity)(michal);
 80:
                return entity;
            }
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['useMaybeFetchTieredTenureBadgeData'] = michal;
    return entity;
})();