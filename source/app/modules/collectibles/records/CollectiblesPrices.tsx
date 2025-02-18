// app/modules/collectibles/records/CollectiblesPrices.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getPriceFromServer;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/records/CollectiblesPrices.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getPricesFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            michal = null;
            if(!(michal != tangon)) { _fun00002_ip = 54; continue _fun00001 }
 15:
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = argBar;
                    report = _closure2_slot0;
                    tangon = null;
                    if(!(tangon != report)) { _fun00004_ip = 100; continue _fun00003 }
 19:
                    michal = _closure2_slot0;
                    report = michal[zuuluu];
                    michal = {};
                    tangon = {};
                    oscard = report.country_prices;
                    oscard = oscard.country_code;
                    tangon['countryCode'] = oscard;
                    report = report.country_prices;
                    golfie = report.prices;
                    oscard = golfie.map;
                    report = function(argFoo) {
                        tangon = _closure1_slot0;
                        zuuluu = undefined;
                        michal = argFoo;
                        entity = true;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    report = oscard.bind(golfie)(report);
                    tangon['prices'] = report;
                    michal['countryPrices'] = tangon;
                    tangon = {};
                    michal['paymentSourcePrices'] = tangon;
                    entity[zuuluu] = michal;
                    return entity;
 100:
                    return entity;
                }
            };
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            _fun00002_ip = 56; continue _fun00001;
 54:
            entity = {};
 56:
            return entity;
        }
    };
    zuuluu['getPricesFromServer'] = michal;
    return entity;
})();