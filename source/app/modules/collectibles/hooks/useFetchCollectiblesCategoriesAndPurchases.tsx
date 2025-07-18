// app/modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    tangon = function() { // Original name: useFetchPurchases
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            romeon = arguments[0];
            foxtra = arguments[1];
            offset = undefined;
            if(!(romeon === offset)) { _fun00002_ip = 16; continue _fun00001 }
 14:
            romeon = false;
 16:
            var _closure2_slot0 = romeon;
            var _closure2_slot1 = foxtra;
            var _closure2_slot2 = offset;
            var _closure2_slot3 = offset;
            var _closure2_slot4 = offset;
            var _closure2_slot5 = offset;
            var _closure2_slot6 = offset;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 3;
            michal = tangon[zuuluu];
            golfie = report.bind(offset)(michal);
            oscard = golfie.useShopVariantsReturnStyle;
            michal = 'useFetchPurchases';
            yankee = oscard.bind(golfie)(michal);
            _closure2_slot2 = yankee;
            michal = 4;
            tangon = tangon[michal];
            golfie = report.bind(offset)(tangon);
            oscard = golfie.useStateFromStoresArray;
            tangon = _closure1_slot6;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                entity = _closure1_slot6;
                zuuluu = entity.isFetching;
                entity = new Array(6);
                entity[0] = zuuluu;
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.isClaiming;
                entity[1] = zuuluu;
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.fetchError;
                entity[2] = zuuluu;
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.claimError;
                entity[3] = zuuluu;
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.purchases;
                entity[4] = zuuluu;
                michal = _closure1_slot6;
                michal = michal.hasPreviouslyFetched;
                entity[5] = michal;
                return entity;
            };
            oscard = oscard.bind(golfie)(report, tangon);
            report = _closure1_slot3;
            tangon = 6;
            verify = report.bind(offset)(oscard, tangon);
            tangon = 0;
            tangon = verify[tangon];
            report = 1;
            golfie = verify[report];
            report = 2;
            oscard = verify[report];
            _closure2_slot3 = oscard;
            report = verify[zuuluu];
            zuuluu = verify[michal];
            michal = 5;
            michal = verify[michal];
            _closure2_slot4 = michal;
            backup = _closure1_slot5;
            verify = _closure1_slot6;
            verify = verify.hasPreviouslyFetched;
            verify = backup.bind(offset)(verify);
            _closure2_slot5 = verify;
            kiloes = _closure1_slot4;
            backup = new Array(1);
            backup[0] = michal;
            verify = function() {
                michal = _closure2_slot5;
                entity = _closure2_slot4;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            verify = kiloes.bind(offset)(verify, backup);
            backup = _closure1_slot5;
            verify = _closure1_slot6;
            verify = verify.fetchError;
            verify = backup.bind(offset)(verify);
            _closure2_slot6 = verify;
            kiloes = _closure1_slot4;
            backup = new Array(1);
            backup[0] = oscard;
            verify = function() {
                michal = _closure2_slot6;
                entity = _closure2_slot3;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            verify = kiloes.bind(offset)(verify, backup);
            verify = _closure1_slot4;
            option = new Array(3);
            option[0] = foxtra;
            option[1] = romeon;
            option[2] = yankee;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = true;
                    entity = entity === michal;
                    if(!entity) { _fun00004_ip = 25; continue _fun00003 }
 16:
                    michal = _closure2_slot5;
                    entity = michal.current;
 25:
                    if(!entity) { _fun00004_ip = 43; continue _fun00003 }
 28:
                    michal = _closure2_slot6;
                    zuuluu = michal.current;
                    michal = null;
                    entity = michal == zuuluu;
 43:
                    if(entity) { _fun00004_ip = 101; continue _fun00003 }
 46:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.fetchCollectiblesPurchases;
                    entity = {};
                    report = _closure2_slot2;
                    entity['variantsReturnStyle'] = report;
                    tangon = _closure2_slot1;
                    entity['location'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            entity = verify.bind(offset)(entity, option);
            entity = {};
            entity['isClaiming'] = golfie;
            entity['fetchPurchasesError'] = oscard;
            entity['claimError'] = report;
            entity['isFetching'] = tangon;
            entity['purchases'] = zuuluu;
            entity['hasPreviouslyFetched'] = michal;
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    report = function(argFoo, argBar) { // Original name: useFetchCollectiblesCategoriesAndPurchases
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            entity = null;
            michal = entity == option;
            report = undefined;
            zuuluu = undefined;
            if(michal) { _fun00006_ip = 22; continue _fun00005 }
 16:
            zuuluu = option.paymentGateway;
 22:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 6;
            tangon = golfie[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['paymentGateway'] = zuuluu;
            golfie = entity == option;
            zuuluu = undefined;
            if(golfie) { _fun00006_ip = 67; continue _fun00005 }
 61:
            zuuluu = option.noOp;
 67:
            tangon['noOp'] = zuuluu;
            golfie = entity == option;
            zuuluu = undefined;
            if(golfie) { _fun00006_ip = 87; continue _fun00005 }
 81:
            zuuluu = option.logPerf;
 87:
            tangon['logPerf'] = zuuluu;
            golfie = entity == option;
            zuuluu = undefined;
            if(golfie) { _fun00006_ip = 107; continue _fun00005 }
 101:
            zuuluu = option.countryCode;
 107:
            tangon['countryCode'] = zuuluu;
            zuuluu = argBar;
            zuuluu = oscard.bind(report)(tangon, zuuluu);
            offset = zuuluu.isFetching;
            golfie = zuuluu.categories;
            oscard = zuuluu.fetchCategoriesError;
            zuuluu = zuuluu.refreshCategories;
            tangon = _closure1_slot7;
            verify = entity == option;
            michal = undefined;
            if(verify) { _fun00006_ip = 166; continue _fun00005 }
 158:
            michal = option.stalePurchasesOK;
 166:
            verify = entity == option;
            entity = undefined;
            if(verify) { _fun00006_ip = 180; continue _fun00005 }
 175:
            entity = option.location;
 180:
            michal = tangon.bind(report)(michal, entity);
            option = michal.isClaiming;
            report = michal.fetchPurchasesError;
            tangon = michal.claimError;
            verify = michal.isFetching;
            entity = {};
            yankee = offset;
            if(yankee) { _fun00006_ip = 221; continue _fun00005 }
 218:
            yankee = verify;
 221:
            entity['isFetching'] = yankee;
            entity['isFetchingCategories'] = offset;
            entity['isFetchingPurchases'] = verify;
            entity['isClaiming'] = option;
            entity['categories'] = golfie;
            golfie = michal.purchases;
            entity['purchases'] = golfie;
            entity['fetchCategoriesError'] = oscard;
            entity['fetchPurchasesError'] = report;
            entity['claimError'] = tangon;
            entity['refreshCategories'] = zuuluu;
            michal = michal.hasPreviouslyFetched;
            entity['hasPreviouslyFetched'] = michal;
            return entity;
        }
    };
    var _closure1_slot8 = report;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    offset = oscard.useEffect;
    var _closure1_slot4 = offset;
    oscard = oscard.useRef;
    var _closure1_slot5 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['useFetchPurchases'] = tangon;
    tangon = function(argFoo) {
        tangon = _closure1_slot7;
        zuuluu = undefined;
        michal = true;
        entity = argFoo;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useGetOrFetchPurchases'] = tangon;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot8;
            michal = {};
            tangon = null;
            if(!(tangon == entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            entity = {};
 20:
            oscard = michal;
            report = entity;
            entity = copyDataProperties(oscard, report);
            tangon = true;
            entity = 'stalePurchasesOK';
            michal[entity] = tangon;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['useGetOrFetchCollectiblesCategoriesAndPurchases'] = michal;
    return entity;
})();