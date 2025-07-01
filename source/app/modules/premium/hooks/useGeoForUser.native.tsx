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
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 4;
            zuuluu = option[oscard];
            michal = undefined;
            offset = golfie.bind(michal)(zuuluu);
            verify = offset.useStateFromStores;
            zuuluu = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                    if(zuuluu) { _fun00004_ip = 67; continue _fun00003 }
 61:
                    entity = michal.countryCode;
 67:
                    return entity;
                }
            };
            tangon = verify.bind(offset)(tangon, zuuluu);
            zuuluu = option[oscard];
            yankee = golfie.bind(michal)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot5;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot5;
                entity = entity.ipLocation;
                return entity;
            };
            zuuluu = offset.bind(yankee)(verify, zuuluu);
            oscard = option[oscard];
            verify = golfie.bind(michal)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot4;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot4;
                entity = michal.isAuthenticated;
                entity = entity.bind(michal)();
                return entity;
            };
            option = option.bind(verify)(golfie, oscard);
            var _closure2_slot0 = option;
            golfie = _closure1_slot3;
            oscard = golfie.useEffect;
            report = new Array(2);
            report[0] = zuuluu;
            report[1] = option;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot0;
                    if(!entity) { _fun00006_ip = 28; continue _fun00005 }
 10:
                    michal = _closure1_slot5;
                    michal = michal.ipLocationLoaded;
                    entity = !michal;
 28:
                    if(!entity) { _fun00006_ip = 66; continue _fun00005 }
 31:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.fetchIpLocation;
                    entity = entity.bind(michal)();
 66:
                    entity = undefined;
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity, report);
            entity = {};
            entity['defaultBillingCountryCode'] = tangon;
            tangon = null;
            oscard = tangon == zuuluu;
            report = undefined;
            if(oscard) { _fun00002_ip = 189; continue _fun00001 }
 183:
            report = zuuluu.countryCode;
 189:
            entity['ipCountryCode'] = report;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 209; continue _fun00001 }
 203:
            michal = zuuluu.subdivisionCode;
 209:
            entity['ipSubdivisionCode'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();