// app/modules/collectibles/records/CollectiblesPrices.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.getPriceFromServer;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/records/CollectiblesPrices.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getPricesFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            mike = null;
            if(!(mike != tango)) { _fun00002_ip = 54; continue _fun00001 }
 15:
            mike = global;
            zulu = mike.Object;
            mike = zulu.keys;
            tango = mike.bind(zulu)(tango);
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zulu = argBar;
                    report = _closure2_slot0;
                    tango = null;
                    if(!(tango != report)) { _fun00004_ip = 100; continue _fun00003 }
 19:
                    mike = _closure2_slot0;
                    report = mike[zulu];
                    mike = {};
                    tango = {};
                    oscar = report.country_prices;
                    oscar = oscar.country_code;
                    tango['countryCode'] = oscar;
                    report = report.country_prices;
                    golf = report.prices;
                    oscar = golf.map;
                    report = function(argFoo) {
                        tango = _closure1_slot0;
                        zulu = undefined;
                        mike = argFoo;
                        entity = true;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    report = oscar.bind(golf)(report);
                    tango['prices'] = report;
                    mike['countryPrices'] = tango;
                    tango = {};
                    mike['paymentSourcePrices'] = tango;
                    entity[zulu] = mike;
                    return entity;
 100:
                    return entity;
                }
            };
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            _fun00002_ip = 56; continue _fun00001;
 54:
            entity = {};
 56:
            return entity;
        }
    };
    zulu['getPricesFromServer'] = mike;
    return entity;
})();