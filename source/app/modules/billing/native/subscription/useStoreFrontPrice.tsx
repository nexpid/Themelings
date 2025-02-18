// app/modules/billing/native/subscription/useStoreFrontPrice.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    report = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(report);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot3 = michal;
    michal = {};
    report = 'PRICE_AVAILABLE';
    michal['PRICE_AVAILABLE'] = report;
    report = 'SUBSCRIPTION_PLAN_UNAVAILABLE';
    michal['SUBSCRIPTION_PLAN_UNAVAILABLE'] = report;
    report = 'STOREFRONT_UNAVAILABLE';
    michal['STOREFRONT_UNAVAILABLE'] = report;
    report = 'MISMATCHING_COUNTRIES';
    michal['MISMATCHING_COUNTRIES'] = report;
    report = 'COUNTRY_PRICE_UNAVAILABLE';
    michal['COUNTRY_PRICE_UNAVAILABLE'] = report;
    var _closure1_slot4 = michal;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/billing/native/subscription/useStoreFrontPrice.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) { // Original name: useStoreFrontPrice
        oscard = argFoo;
        report = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                michal = null;
                if(!(michal != entity)) { _fun00002_ip = 213; continue _fun00001 }
 16:
                entity = _closure2_slot1;
                if(!(michal != entity)) { _fun00002_ip = 196; continue _fun00001 }
 27:
                option = _closure1_slot0;
                offset = _closure1_slot1;
                oscard = 2;
                entity = offset[oscard];
                golfie = undefined;
                foxtra = option.bind(golfie)(entity);
                romeon = foxtra.getCountryPrices;
                entity = _closure2_slot0;
                yankee = entity.id;
                verify = _closure1_slot3;
                report = verify.MOBILE;
                report = romeon.bind(foxtra)(yankee, report);
                oscard = offset[oscard];
                option = option.bind(golfie)(oscard);
                golfie = option.experimentalGetPrice;
                oscard = entity.id;
                entity = {};
                verify = verify.MOBILE;
                entity['purchaseType'] = verify;
                tangon = _closure2_slot1;
                verify = tangon.currency;
                entity['currency'] = verify;
                entity = golfie.bind(option)(oscard, entity);
                report = report.countryCode;
                tangon = tangon.country;
                if(!(report === tangon)) { _fun00002_ip = 181; continue _fun00001 }
 153:
                if(!(michal != entity)) { _fun00002_ip = 169; continue _fun00001 }
 157:
                michal = _closure1_slot4;
                michal = michal.PRICE_AVAILABLE;
                _fun00002_ip = 179; continue _fun00001;
 169:
                tangon = _closure1_slot4;
                michal = tangon.COUNTRY_PRICE_UNAVAILABLE;
 179:
                _fun00002_ip = 191; continue _fun00001;
 181:
                zuuluu = _closure1_slot4;
                michal = zuuluu.MISMATCHING_COUNTRIES;
 191:
                zuuluu = entity;
                _fun00002_ip = 228; continue _fun00001;
 196:
                entity = _closure1_slot4;
                michal = entity.STOREFRONT_UNAVAILABLE;
                zuuluu = undefined;
                _fun00002_ip = 228; continue _fun00001;
 213:
                entity = _closure1_slot4;
                michal = entity.SUBSCRIPTION_PLAN_UNAVAILABLE;
                zuuluu = undefined;
 228:
                entity = {};
                entity['price'] = zuuluu;
                entity['priceState'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['PriceStates'] = michal;
    return entity;
})();