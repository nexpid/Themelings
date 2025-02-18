// app/modules/activities/useFetchDeveloperActivityShelfItems.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    option = oscard[tangon];
    golfie = argBaz;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot3 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DevShelfFetchState;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useFetchDeveloperActivityShelfItems.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useFetchDeveloperActivityShelfItems
        oscard = _closure1_slot0;
        option = _closure1_slot1;
        zuuluu = 2;
        zuuluu = option[zuuluu];
        tangon = undefined;
        report = oscard.bind(tangon)(zuuluu);
        zuuluu = report.useIsActivitiesEnabledForCurrentPlatform;
        golfie = zuuluu.bind(report)();
        var _closure2_slot0 = golfie;
        zuuluu = 3;
        zuuluu = option[zuuluu];
        zuuluu = oscard.bind(tangon)(zuuluu);
        report = zuuluu.DeveloperMode;
        zuuluu = report.getSetting;
        report = zuuluu.bind(report)();
        var _closure2_slot1 = report;
        zuuluu = 4;
        zuuluu = option[zuuluu];
        verify = oscard.bind(tangon)(zuuluu);
        option = verify.useStateFromStores;
        zuuluu = _closure1_slot3;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        tangon = function() {
            michal = _closure1_slot3;
            entity = michal.getFetchState;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = new Array(0);
        oscard = option.bind(verify)(oscard, tangon, zuuluu);
        var _closure2_slot2 = oscard;
        tangon = _closure1_slot2;
        zuuluu = tangon.useEffect;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                if(!entity) { _fun00002_ip = 14; continue _fun00001 }
 10:
                entity = _closure2_slot1;
 14:
                if(!entity) { _fun00002_ip = 38; continue _fun00001 }
 17:
                zuuluu = _closure2_slot2;
                michal = _closure1_slot4;
                michal = michal.INITIALIZED;
                entity = zuuluu === michal;
 38:
                if(!entity) { _fun00002_ip = 76; continue _fun00001 }
 41:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.fetchDeveloperApplications;
                entity = entity.bind(michal)();
 76:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = null;
        return entity;
    };
    zuuluu['useFetchDeveloperActivityShelfItems'] = michal;
    return entity;
})();