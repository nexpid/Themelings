// app/modules/billing/native/subscription/useStoreFrontPrice.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    report = golf[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(report);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot3 = mike;
    mike = {};
    report = 'PRICE_AVAILABLE';
    mike['PRICE_AVAILABLE'] = report;
    report = 'SUBSCRIPTION_PLAN_UNAVAILABLE';
    mike['SUBSCRIPTION_PLAN_UNAVAILABLE'] = report;
    report = 'STOREFRONT_UNAVAILABLE';
    mike['STOREFRONT_UNAVAILABLE'] = report;
    report = 'MISMATCHING_COUNTRIES';
    mike['MISMATCHING_COUNTRIES'] = report;
    report = 'COUNTRY_PRICE_UNAVAILABLE';
    mike['COUNTRY_PRICE_UNAVAILABLE'] = report;
    var _closure1_slot4 = mike;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/billing/native/subscription/useStoreFrontPrice.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: useStoreFrontPrice
        oscar = argFoo;
        report = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun98885: for(var _fun98885_ip = 0; ; ) switch(_fun98885_ip) {
 0:
                entity = _closure2_slot0;
                mike = null;
                if(!(mike != entity)) { _fun98885_ip = 213; continue _fun98885 }
 16:
                entity = _closure2_slot1;
                if(!(mike != entity)) { _fun98885_ip = 196; continue _fun98885 }
 27:
                options = _closure1_slot0;
                offset = _closure1_slot1;
                oscar = 2;
                entity = offset[oscar];
                golf = undefined;
                foxtrot = options.bind(golf)(entity);
                romeo = foxtrot.getCountryPrices;
                entity = _closure2_slot0;
                yankee = entity.id;
                verify = _closure1_slot3;
                report = verify.MOBILE;
                report = romeo.bind(foxtrot)(yankee, report);
                oscar = offset[oscar];
                options = options.bind(golf)(oscar);
                golf = options.experimentalGetPrice;
                oscar = entity.id;
                entity = {};
                verify = verify.MOBILE;
                entity['purchaseType'] = verify;
                tango = _closure2_slot1;
                verify = tango.currency;
                entity['currency'] = verify;
                entity = golf.bind(options)(oscar, entity);
                report = report.countryCode;
                tango = tango.country;
                if(!(report === tango)) { _fun98885_ip = 181; continue _fun98885 }
 153:
                if(!(mike != entity)) { _fun98885_ip = 169; continue _fun98885 }
 157:
                mike = _closure1_slot4;
                mike = mike.PRICE_AVAILABLE;
                _fun98885_ip = 179; continue _fun98885;
 169:
                tango = _closure1_slot4;
                mike = tango.COUNTRY_PRICE_UNAVAILABLE;
 179:
                _fun98885_ip = 191; continue _fun98885;
 181:
                zulu = _closure1_slot4;
                mike = zulu.MISMATCHING_COUNTRIES;
 191:
                zulu = entity;
                _fun98885_ip = 228; continue _fun98885;
 196:
                entity = _closure1_slot4;
                mike = entity.STOREFRONT_UNAVAILABLE;
                zulu = undefined;
                _fun98885_ip = 228; continue _fun98885;
 213:
                entity = _closure1_slot4;
                mike = entity.SUBSCRIPTION_PLAN_UNAVAILABLE;
                zulu = undefined;
 228:
                entity = {};
                entity['price'] = zulu;
                entity['priceState'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['PriceStates'] = mike;
    return entity;
})();