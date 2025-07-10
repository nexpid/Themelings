// app/modules/collectibles/hooks/useMaybeFetchShopHome.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.useEffect;
    var _closure1_slot3 = option;
    option = tangon.useCallback;
    var _closure1_slot4 = option;
    tangon = tangon.useMemo;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/hooks/useMaybeFetchShopHome.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 600000;
    zuuluu['COLLECTIBLES_SHOP_HOME_CACHE_DURATION'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: useMaybeFetchCollectiblesShopHome
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argFoo;
            echoed = argBar;
            option = argBaz;
            var _closure2_slot0 = offset;
            var _closure2_slot1 = echoed;
            var _closure2_slot2 = option;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            report = 5;
            oscard = zuuluu[report];
            golfie = undefined;
            romeon = tangon.bind(golfie)(oscard);
            yankee = romeon.useStateFromStores;
            oscard = _closure1_slot6;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                entity = _closure1_slot6;
                entity = entity.hasLoadedExperiments;
                return entity;
            };
            kiloes = yankee.bind(romeon)(verify, oscard);
            var _closure2_slot3 = kiloes;
            oscard = zuuluu[report];
            romeon = tangon.bind(golfie)(oscard);
            yankee = romeon.useStateFromStores;
            oscard = _closure1_slot7;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                entity = _closure1_slot7;
                entity = entity.skipNumCategories;
                return entity;
            };
            verify = yankee.bind(romeon)(verify, oscard);
            var _closure2_slot4 = verify;
            foxtra = 6;
            oscard = zuuluu[foxtra];
            romeon = tangon.bind(golfie)(oscard);
            yankee = romeon.useShopVariantsReturnStyle;
            oscard = 'useMaybeFetchCollectiblesShopHome';
            result = yankee.bind(romeon)(oscard);
            var _closure2_slot5 = result;
            oscard = 7;
            zuuluu = zuuluu[oscard];
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.isDesktop;
            output = zuuluu.bind(tangon)();
            if(output) { _fun00002_ip = 208; continue _fun00001 }
 181:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.isWeb;
            output = zuuluu.bind(tangon)();
 208:
            var _closure2_slot6 = output;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[report];
            romeon = tangon.bind(golfie)(zuuluu);
            yankee = romeon.useStateFromStoresArray;
            zuuluu = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = _closure1_slot8;
                    entity = oscard.getShopBlocks;
                    report = _closure2_slot0;
                    zuuluu = entity.bind(oscard)(report);
                    entity = new Array(7);
                    entity[0] = zuuluu;
                    zuuluu = oscard.getLastSuccessfulFetch;
                    golfie = zuuluu.bind(oscard)(report);
                    oscard = null;
                    option = oscard != golfie;
                    report = 0;
                    if(!option) { _fun00004_ip = 62; continue _fun00003 }
 59:
                    report = golfie;
 62:
                    entity[1] = report;
                    option = _closure1_slot8;
                    golfie = option.getLastErrorTimestamp;
                    report = _closure2_slot0;
                    report = golfie.bind(option)(report);
                    oscard = oscard != report;
                    zuuluu = 0;
                    if(!oscard) { _fun00004_ip = 99; continue _fun00003 }
 96:
                    zuuluu = report;
 99:
                    entity[2] = zuuluu;
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getLastFetchOptions;
                    tangon = _closure2_slot0;
                    michal = michal.bind(zuuluu)(tangon);
                    entity[3] = michal;
                    michal = zuuluu.getFetchShopHomeError;
                    michal = michal.bind(zuuluu)(tangon);
                    entity[4] = michal;
                    michal = zuuluu.getIsFetchingShopHome;
                    michal = michal.bind(zuuluu)(tangon);
                    entity[5] = michal;
                    michal = zuuluu.getShopHomeConfigOverride;
                    michal = michal.bind(zuuluu)();
                    entity[6] = michal;
                    return entity;
                }
            };
            tangon = yankee.bind(romeon)(tangon, zuuluu);
            zuuluu = _closure1_slot2;
            romeon = zuuluu.bind(golfie)(tangon, oscard);
            zuuluu = 0;
            zuuluu = romeon[zuuluu];
            tangon = 1;
            yankee = romeon[tangon];
            var _closure2_slot7 = yankee;
            tangon = 2;
            backup = romeon[tangon];
            var _closure2_slot8 = backup;
            tangon = 3;
            oscard = romeon[tangon];
            var _closure2_slot9 = oscard;
            tangon = 4;
            tangon = romeon[tangon];
            var _closure2_slot10 = tangon;
            report = romeon[report];
            var _closure2_slot11 = report;
            sizing = romeon[foxtra];
            var _closure2_slot12 = sizing;
            foxtra = _closure1_slot5;
            romeon = new Array(5);
            romeon[0] = echoed;
            romeon[1] = result;
            romeon[2] = output;
            romeon[3] = sizing;
            romeon[4] = verify;
            verify = function() {
                entity = {};
                report = _closure2_slot1;
                oscard = entity;
                zuuluu = copyDataProperties(oscard, report);
                tangon = _closure2_slot5;
                zuuluu = 'variantsReturnStyle';
                entity[zuuluu] = tangon;
                tangon = _closure2_slot6;
                zuuluu = 'includeBundles';
                entity[zuuluu] = tangon;
                tangon = true;
                zuuluu = 'includePopularPicks';
                entity[zuuluu] = tangon;
                zuuluu = 'includeDynamicBlocks';
                entity[zuuluu] = tangon;
                tangon = _closure2_slot12;
                zuuluu = 'shopHomeConfig';
                entity[zuuluu] = tangon;
                zuuluu = _closure2_slot4;
                michal = 'skipNumCategories';
                entity[michal] = zuuluu;
                return entity;
            };
            verify = foxtra.bind(golfie)(verify, romeon);
            var _closure2_slot13 = verify;
            romeon = new Array(2);
            romeon[0] = oscard;
            romeon[1] = verify;
            oscard = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.areRequestOptionsEqual;
                michal = _closure2_slot9;
                entity = _closure2_slot13;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = !entity;
                return entity;
            };
            oscard = foxtra.bind(golfie)(oscard, romeon);
            var _closure2_slot14 = oscard;
            romeon = new Array(1);
            romeon[0] = yankee;
            yankee = function() {
                entity = global;
                michal = entity.Date;
                entity = michal.now;
                michal = entity.bind(michal)();
                entity = _closure2_slot7;
                michal = michal - entity;
                entity = 600000;
                entity = michal < entity;
                return entity;
            };
            foxtra = foxtra.bind(golfie)(yankee, romeon);
            var _closure2_slot15 = foxtra;
            romeon = _closure1_slot3;
            yankee = new Array(9);
            yankee[0] = kiloes;
            yankee[1] = report;
            yankee[2] = tangon;
            yankee[3] = backup;
            yankee[4] = foxtra;
            yankee[5] = oscard;
            yankee[6] = verify;
            yankee[7] = offset;
            yankee[8] = option;
            oscard = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00006_ip = 147; continue _fun00005 }
 13:
                    michal = _closure2_slot11;
                    if(michal) { _fun00006_ip = 147; continue _fun00005 }
 23:
                    michal = global;
                    zuuluu = michal.Date;
                    michal = zuuluu.now;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot8;
                    zuuluu = zuuluu - michal;
                    michal = 600000;
                    zuuluu = zuuluu < michal;
                    tangon = _closure2_slot10;
                    michal = null;
                    michal = michal != tangon;
                    if(!michal) { _fun00006_ip = 74; continue _fun00005 }
 71:
                    michal = zuuluu;
 74:
                    if(michal) { _fun00006_ip = 94; continue _fun00005 }
 77:
                    zuuluu = _closure2_slot14;
                    zuuluu = !zuuluu;
                    if(!zuuluu) { _fun00006_ip = 91; continue _fun00005 }
 87:
                    zuuluu = _closure2_slot15;
 91:
                    michal = zuuluu;
 94:
                    if(michal) { _fun00006_ip = 147; continue _fun00005 }
 97:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 8;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.fetchCollectiblesShopHome;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot13;
                    entity = _closure2_slot2;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 147:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = romeon.bind(golfie)(oscard, yankee);
            oscard = _closure1_slot4;
            michal = new Array(3);
            michal[0] = offset;
            michal[1] = verify;
            michal[2] = option;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.fetchCollectiblesShopHome;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot13;
                michal = _closure2_slot2;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            };
            michal = oscard.bind(golfie)(entity, michal);
            entity = {};
            entity['isFetchingShopHome'] = report;
            entity['fetchShopHomeError'] = tangon;
            entity['shopBlocks'] = zuuluu;
            entity['refreshShopHome'] = michal;
            return entity;
        }
    };
    zuuluu['useMaybeFetchCollectiblesShopHome'] = michal;
    return entity;
})();