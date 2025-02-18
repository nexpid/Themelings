// app/modules/collectibles/hooks/useFetchCollectiblesAndProfileEffects.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/hooks/useFetchCollectiblesAndProfileEffects.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFetchCollectiblesAndProfileEffects
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot2;
            yankee = 3;
            michal = romeon[yankee];
            verify = undefined;
            zuuluu = zuuluu.bind(verify)(michal);
            michal = {};
            tangon = argFoo;
            michal['location'] = tangon;
            michal = zuuluu.bind(verify)(michal);
            golfie = michal.isFetching;
            option = michal.fetchCategoriesError;
            oscard = michal.fetchPurchasesError;
            zuuluu = michal.categories;
            michal = michal.purchases;
            report = _closure1_slot0;
            tangon = 4;
            tangon = romeon[tangon];
            foxtra = report.bind(verify)(tangon);
            romeon = foxtra.useStateFromStoresArray;
            tangon = _closure1_slot5;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot5;
                zuuluu = michal.isFetching;
                entity = new Array(3);
                entity[0] = zuuluu;
                zuuluu = michal.fetchError;
                entity[1] = zuuluu;
                michal = michal.profileEffects;
                entity[2] = michal;
                return entity;
            };
            report = romeon.bind(foxtra)(report, tangon);
            tangon = _closure1_slot3;
            yankee = tangon.bind(verify)(report, yankee);
            tangon = 0;
            verify = yankee[tangon];
            tangon = 1;
            report = yankee[tangon];
            tangon = 2;
            tangon = yankee[tangon];
            romeon = _closure1_slot4;
            yankee = romeon.useEffect;
            offset = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.fetchUserProfileEffects;
                michal = true;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = new Array(0);
            entity = yankee.bind(romeon)(offset, entity);
            entity = {};
            if(golfie) { _fun00002_ip = 182; continue _fun00001 }
 179:
            golfie = verify;
 182:
            entity['isFetching'] = golfie;
            golfie = null;
            if(!(golfie != option)) { _fun00002_ip = 196; continue _fun00001 }
 193:
            oscard = option;
 196:
            if(!(golfie != oscard)) { _fun00002_ip = 203; continue _fun00001 }
 200:
            report = oscard;
 203:
            entity['combinedError'] = report;
            entity['profileEffects'] = tangon;
            entity['categories'] = zuuluu;
            entity['purchases'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();