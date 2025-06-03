// app/modules/search_v2/native/hooks/useSearchScreenError.tsx
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
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot7 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/hooks/useSearchScreenError.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useMessageSearchErrorScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            verify = michal.searchContext;
            option = michal.tab;
            yankee = undefined;
            var _closure2_slot3 = yankee;
            report = _closure1_slot6;
            tangon = report.useState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.getSearchResultsQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = tangon.bind(report)(verify, zuuluu);
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(yankee)(zuuluu);
            zuuluu = oscard.getSearchTabFetchId;
            zuuluu = zuuluu.bind(oscard)(verify, option, golfie);
            var _closure2_slot0 = zuuluu;
            zuuluu = 6;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(yankee)(zuuluu);
            report = oscard.useStateFromStoresObject;
            zuuluu = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                tangon = _closure1_slot5;
                michal = tangon.getError;
                zuuluu = _closure2_slot0;
                michal = michal.bind(tangon)(zuuluu);
                entity['error'] = michal;
                michal = tangon.getIsFetching;
                michal = michal.bind(tangon)(zuuluu);
                entity['isFetching'] = michal;
                return entity;
            };
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            report = zuuluu.error;
            zuuluu = zuuluu.isFetching;
            var _closure2_slot1 = zuuluu;
            option = _closure1_slot4;
            oscard = option.useState;
            tangon = false;
            golfie = oscard.bind(option)(tangon);
            oscard = _closure1_slot3;
            tangon = 2;
            golfie = oscard.bind(yankee)(golfie, tangon);
            tangon = 0;
            tangon = golfie[tangon];
            oscard = 1;
            oscard = golfie[oscard];
            var _closure2_slot2 = oscard;
            golfie = option.useEffect;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    if(!michal) { _fun00004_ip = 23; continue _fun00003 }
 10:
                    zuuluu = _closure2_slot2;
                    michal = undefined;
                    entity = false;
                    entity = zuuluu.bind(michal)(entity);
 23:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(zuuluu, oscard);
            zuuluu = null;
            golfie = zuuluu == report;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 236; continue _fun00001 }
 226:
            golfie = report.getAnyErrorMessage;
            oscard = golfie.bind(report)();
 236:
            if(!(zuuluu == oscard)) { _fun00002_ip = 295; continue _fun00001 }
 240:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 7;
            option = romeon[golfie];
            option = offset.bind(yankee)(option);
            verify = option.intl;
            option = verify.string;
            golfie = romeon[golfie];
            golfie = offset.bind(yankee)(golfie);
            golfie = golfie.t;
            golfie = golfie.uvDZBQ;
            oscard = option.bind(verify)(golfie);
 295:
            _closure2_slot3 = oscard;
            option = _closure1_slot4;
            golfie = option.useCallback;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                zuuluu = _closure2_slot2;
                entity = undefined;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                michal = 8;
                michal = option[michal];
                tangon = golfie.bind(entity)(michal);
                zuuluu = tangon.open;
                michal = {};
                oscard = 'SEARCH_ERROR_TOAST';
                michal['key'] = oscard;
                oscard = 9;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                michal['icon'] = oscard;
                report = _closure2_slot3;
                michal['content'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = golfie.bind(option)(entity, michal);
            entity = {};
            golfie = zuuluu != report;
            entity['canShowErrorScreen'] = golfie;
            entity['errorScreenText'] = oscard;
            zuuluu = zuuluu != report;
            if(!zuuluu) { _fun00002_ip = 355; continue _fun00001 }
 352:
            zuuluu = !tangon;
 355:
            entity['canShowErrorToast'] = zuuluu;
            entity['showErrorToast'] = michal;
            return entity;
        }
    };
    zuuluu['useMessageSearchErrorScreen'] = tangon;
    michal = function(argFoo) { // Original name: useMessageTabCountsErrorText
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.searchContext;
            zuuluu = _closure1_slot6;
            michal = zuuluu.useState;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.getSearchResultsQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            report = michal.bind(zuuluu)(oscard, entity);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 5;
            entity = zuuluu[entity];
            option = undefined;
            zuuluu = michal.bind(option)(entity);
            michal = zuuluu.getSearchTabFetchId;
            entity = _closure1_slot7;
            report = michal.bind(zuuluu)(oscard, entity, report);
            michal = _closure1_slot5;
            entity = michal.getIsInitialFetchComplete;
            michal = entity.bind(michal)(report);
            entity = null;
            if(michal) { _fun00006_ip = 97; continue _fun00005 }
 95:
            return entity;
 97:
            zuuluu = _closure1_slot5;
            michal = zuuluu.getTotalCount;
            michal = michal.bind(zuuluu)(report);
            if(!(entity == michal)) { _fun00006_ip = 214; continue _fun00005 }
 116:
            zuuluu = _closure1_slot5;
            michal = zuuluu.getError;
            report = michal.bind(zuuluu)(report);
            zuuluu = entity == report;
            michal = null;
            if(zuuluu) { _fun00006_ip = 212; continue _fun00005 }
 140:
            zuuluu = report.getAnyErrorMessage;
            zuuluu = zuuluu.bind(report)();
            if(!(entity == zuuluu)) { _fun00006_ip = 209; continue _fun00005 }
 154:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 7;
            report = verify[tangon];
            report = golfie.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = verify[tangon];
            tangon = golfie.bind(option)(tangon);
            tangon = tangon.t;
            tangon = tangon.uvDZBQ;
            zuuluu = report.bind(oscard)(tangon);
 209:
            michal = zuuluu;
 212:
            return michal;
 214:
            return entity;
        }
    };
    zuuluu['useMessageTabCountsErrorText'] = michal;
    return entity;
})();