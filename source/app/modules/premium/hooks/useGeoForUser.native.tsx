// app/modules/premium/hooks/useGeoForUser.native.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/hooks/useGeoForUser.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useGeoForUser
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        report = 4;
        michal = option[report];
        oscard = undefined;
        offset = golfie.bind(oscard)(michal);
        verify = offset.useStateFromStores;
        michal = _closure1_slot6;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot6;
                zuuluu = tangon.getProduct;
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                michal = report.bind(entity)(michal);
                michal = michal.ProductIds;
                michal = michal.PREMIUM_TIER_2_MONTHLY;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = null;
                zuuluu = zuuluu == michal;
                if(zuuluu) { _fun00002_ip = 67; continue _fun00001 }
 61:
                entity = michal.countryCode;
 67:
                return entity;
            }
        };
        zuuluu = verify.bind(offset)(zuuluu, michal);
        michal = option[report];
        yankee = golfie.bind(oscard)(michal);
        offset = yankee.useStateFromStores;
        michal = _closure1_slot5;
        verify = new Array(1);
        verify[0] = michal;
        michal = function() {
            entity = _closure1_slot5;
            entity = entity.ipCountryCode;
            return entity;
        };
        michal = offset.bind(yankee)(verify, michal);
        report = option[report];
        option = golfie.bind(oscard)(report);
        golfie = option.useStateFromStores;
        report = _closure1_slot4;
        oscard = new Array(1);
        oscard[0] = report;
        report = function() {
            michal = _closure1_slot4;
            entity = michal.isAuthenticated;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = golfie.bind(option)(oscard, report);
        var _closure2_slot0 = golfie;
        oscard = _closure1_slot3;
        report = oscard.useEffect;
        tangon = new Array(2);
        tangon[0] = michal;
        tangon[1] = golfie;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot0;
                if(!entity) { _fun00004_ip = 26; continue _fun00003 }
 10:
                michal = _closure1_slot5;
                michal = michal.ipCountryCodeLoaded;
                entity = !michal;
 26:
                if(!entity) { _fun00004_ip = 64; continue _fun00003 }
 29:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.fetchIpCountryCode;
                entity = entity.bind(michal)();
 64:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(oscard)(entity, tangon);
        entity = {};
        entity['defaultBillingCountryCode'] = zuuluu;
        entity['ipCountryCode'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();