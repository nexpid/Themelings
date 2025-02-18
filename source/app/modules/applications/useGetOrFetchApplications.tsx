// app/modules/applications/useGetOrFetchApplications.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: useGetOrFetchApplications
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            zuuluu = arguments[1];
            var _closure2_slot0 = option;
            report = undefined;
            if(!(zuuluu === report)) { _fun00002_ip = 20; continue _fun00001 }
 18:
            zuuluu = true;
 20:
            var _closure2_slot1 = zuuluu;
            var _closure2_slot2 = report;
            golfie = _closure1_slot3;
            oscard = golfie.useRef;
            tangon = new Array(0);
            tangon = oscard.bind(golfie)(tangon);
            _closure2_slot2 = tangon;
            golfie = _closure1_slot3;
            oscard = golfie.useEffect;
            tangon = new Array(2);
            tangon[0] = option;
            tangon[1] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    if(!michal) { _fun00004_ip = 63; continue _fun00003 }
 10:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 2;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.areArraysShallowEqual;
                    tangon = _closure2_slot0;
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.current;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    michal = !zuuluu;
 63:
                    if(!michal) { _fun00004_ip = 187; continue _fun00003 }
 66:
                    tangon = _closure1_slot1;
                    offset = _closure1_slot2;
                    michal = 3;
                    michal = offset[michal];
                    verify = undefined;
                    oscard = tangon.bind(verify)(michal);
                    report = oscard.fetchApplications;
                    michal = 4;
                    michal = offset[michal];
                    tangon = tangon.bind(verify)(michal);
                    michal = _closure2_slot0;
                    golfie = tangon.bind(verify)(michal);
                    tangon = golfie.filter;
                    option = _closure1_slot0;
                    zuuluu = 5;
                    zuuluu = offset[zuuluu];
                    zuuluu = option.bind(verify)(zuuluu);
                    zuuluu = zuuluu.isNotNullish;
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.uniq;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = tangon.value;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = false;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    entity = _closure2_slot2;
                    entity['current'] = michal;
 187:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(zuuluu, tangon);
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 6;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useStateFromStoresArray;
            report = _closure1_slot4;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                zuuluu = _closure2_slot0;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tangon = argFoo;
                        entity = null;
                        michal = entity != tangon;
                        entity = undefined;
                        if(!michal) { _fun00006_ip = 32; continue _fun00005 }
 14:
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.getApplication;
                        entity = michal.bind(zuuluu)(tangon);
 32:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/applications/useGetOrFetchApplications.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useGetOrFetchApplication
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            tangon = true;
 14:
            michal = _closure1_slot5;
            entity = null;
            if(!(entity == oscard)) { _fun00008_ip = 33; continue _fun00007 }
 27:
            entity = new Array(0);
            _fun00008_ip = 44; continue _fun00007;
 33:
            report = new Array(1);
            report[0] = oscard;
            entity = report;
 44:
            michal = michal.bind(zuuluu)(entity, tangon);
            entity = 0;
            entity = michal[entity];
            return entity;
        }
    };
    zuuluu['useGetOrFetchApplication'] = michal;
    return entity;
})();