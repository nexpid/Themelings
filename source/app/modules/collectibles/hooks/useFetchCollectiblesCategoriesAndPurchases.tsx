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
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            report = 3;
            zuuluu = michal[report];
            golfie = tangon.bind(offset)(zuuluu);
            oscard = golfie.useTriggerDebuggingAA;
            zuuluu = {'location': 'useFetchPurchases auto on', 'autoTrackExposure': true};
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = michal[report];
            golfie = tangon.bind(offset)(zuuluu);
            oscard = golfie.useTriggerDebuggingAA;
            zuuluu = {'location': 'useFetchPurchases auto off', 'autoTrackExposure': false};
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = 4;
            oscard = michal[zuuluu];
            verify = tangon.bind(offset)(oscard);
            golfie = verify.useShopVariantsReturnStyle;
            oscard = 'useFetchPurchases';
            yankee = golfie.bind(verify)(oscard);
            _closure2_slot2 = yankee;
            verify = 5;
            michal = michal[verify];
            golfie = tangon.bind(offset)(michal);
            oscard = golfie.useStateFromStoresArray;
            michal = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
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
            oscard = oscard.bind(golfie)(tangon, michal);
            tangon = _closure1_slot3;
            michal = 6;
            michal = tangon.bind(offset)(oscard, michal);
            tangon = 0;
            tangon = michal[tangon];
            oscard = 1;
            golfie = michal[oscard];
            oscard = 2;
            oscard = michal[oscard];
            _closure2_slot3 = oscard;
            report = michal[report];
            zuuluu = michal[zuuluu];
            michal = michal[verify];
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
                    entity = 6;
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
    report = function(argFoo) { // Original name: useFetchCollectiblesCategoriesAndPurchases
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            entity = null;
            michal = entity == option;
            report = undefined;
            oscard = undefined;
            if(michal) { _fun00006_ip = 22; continue _fun00005 }
 16:
            oscard = option.paymentGateway;
 22:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 3;
            verify = golfie[zuuluu];
            yankee = tangon.bind(report)(verify);
            offset = yankee.useTriggerDebuggingAA;
            verify = {'location': 'useFetchCollectiblesCategoriesAndPurchases auto on', 'autoTrackExposure': true};
            verify = offset.bind(yankee)(verify);
            zuuluu = golfie[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            tangon = verify.useTriggerDebuggingAA;
            zuuluu = {'location': 'useFetchCollectiblesCategoriesAndPurchases auto off', 'autoTrackExposure': false};
            zuuluu = tangon.bind(verify)(zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 7;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            zuuluu['paymentGateway'] = oscard;
            golfie = entity == option;
            oscard = undefined;
            if(golfie) { _fun00006_ip = 138; continue _fun00005 }
 132:
            oscard = option.noOp;
 138:
            zuuluu['noOp'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            offset = zuuluu.isFetching;
            golfie = zuuluu.categories;
            oscard = zuuluu.fetchCategoriesError;
            zuuluu = zuuluu.refreshCategories;
            tangon = _closure1_slot7;
            verify = entity == option;
            michal = undefined;
            if(verify) { _fun00006_ip = 191; continue _fun00005 }
 185:
            michal = option.stalePurchasesOK;
 191:
            verify = entity == option;
            entity = undefined;
            if(verify) { _fun00006_ip = 205; continue _fun00005 }
 200:
            entity = option.location;
 205:
            michal = tangon.bind(report)(michal, entity);
            option = michal.isClaiming;
            report = michal.fetchPurchasesError;
            tangon = michal.claimError;
            verify = michal.isFetching;
            entity = {};
            yankee = offset;
            if(yankee) { _fun00006_ip = 246; continue _fun00005 }
 243:
            yankee = verify;
 246:
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
    oscard = 8;
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