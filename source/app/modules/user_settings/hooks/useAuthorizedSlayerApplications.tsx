// app/modules/user_settings/hooks/useAuthorizedSlayerApplications.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchState;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/hooks/useAuthorizedSlayerApplications.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useAuthorizedSlayerApplications
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 2;
            michal = option[report];
            oscard = undefined;
            yankee = golfie.bind(oscard)(michal);
            offset = yankee.useStateFromStores;
            michal = _closure1_slot4;
            verify = new Array(1);
            verify[0] = michal;
            tangon = function() {
                michal = _closure1_slot4;
                entity = michal.getFetchState;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = offset.bind(yankee)(verify, tangon);
            report = option[report];
            golfie = golfie.bind(oscard)(report);
            oscard = golfie.useStateFromStores;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                michal = _closure1_slot4;
                entity = michal.getApps;
                entity = entity.bind(michal)();
                return entity;
            };
            report = oscard.bind(golfie)(report, michal);
            var _closure2_slot0 = report;
            option = _closure1_slot3;
            golfie = option.useMemo;
            oscard = new Array(1);
            oscard[0] = report;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure2_slot0;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 55; continue _fun00003 }
 15:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 3;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        michal = michal.bind(zuuluu)(entity);
                        entity = argFoo;
                        entity = entity.application;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.application;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00004_ip = 59; continue _fun00003;
 55:
                    entity = new Array(0);
 59:
                    return entity;
                }
            };
            michal = golfie.bind(option)(michal, oscard);
            golfie = option.useEffect;
            oscard = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetch;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            entity = new Array(0);
            entity = golfie.bind(option)(oscard, entity);
            entity = {};
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.FETCHING;
            zuuluu = tangon === zuuluu;
            if(!zuuluu) { _fun00002_ip = 173; continue _fun00001 }
 167:
            tangon = null;
            zuuluu = tangon == report;
 173:
            entity['showLoadingIndicator'] = zuuluu;
            entity['slayerSdkApplications'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();