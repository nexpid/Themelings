// app/modules/parent_tools/hooks/useHelpLineVisibility.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = global;
    offset = tangon.Object;
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
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    verify = tangon.Set;
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    foxtra = ['US'];
    backup = option;
    report = new backup[verify](foxtra, romeon);
    report = report instanceof Object ? report : option;
    var _closure1_slot6 = report;
    option = tangon.Set;
    tangon = option.prototype;
    report = Object.create(tangon, {constructor: {value: option}});
    foxtra = ['en-US', 'es-ES'];
    backup = report;
    tangon = new backup[option](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot7 = tangon;
    tangon = function() { // Original name: useShouldShowHelplineLink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            entity = 3;
            entity = option[entity];
            golfie = undefined;
            entity = zuuluu.bind(golfie)(entity);
            entity = entity.bind(golfie)();
            oscard = _closure1_slot0;
            tangon = 4;
            zuuluu = option[tangon];
            yankee = oscard.bind(golfie)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot5;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot5;
                entity = michal.getUserCountry;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = offset.bind(yankee)(verify, zuuluu);
            var _closure2_slot0 = zuuluu;
            tangon = option[tangon];
            option = oscard.bind(golfie)(tangon);
            golfie = option.useStateFromStores;
            tangon = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                entity = _closure1_slot4;
                entity = entity.locale;
                return entity;
            };
            tangon = golfie.bind(option)(oscard, tangon);
            option = _closure1_slot3;
            golfie = option.useEffect;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            report = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = null;
                    if(!(entity == michal)) { _fun00004_ip = 48; continue _fun00003 }
 13:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.fetchUserCountryCode;
                    entity = entity.bind(michal)();
 48:
                    entity = undefined;
                    return entity;
                }
            };
            report = golfie.bind(option)(report, oscard);
            entity = !entity;
            if(!entity) { _fun00002_ip = 156; continue _fun00001 }
 150:
            report = null;
            entity = report != zuuluu;
 156:
            if(!entity) { _fun00002_ip = 179; continue _fun00001 }
 159:
            oscard = _closure1_slot6;
            report = oscard.has;
            zuuluu = zuuluu.alpha2;
            entity = report.bind(oscard)(zuuluu);
 179:
            if(!entity) { _fun00002_ip = 196; continue _fun00001 }
 182:
            zuuluu = _closure1_slot7;
            michal = zuuluu.has;
            entity = michal.bind(zuuluu)(tangon);
 196:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/parent_tools/hooks/useHelpLineVisibility.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useShouldShowHelplineLink'] = tangon;
    michal = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 3;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = tangon.bind(zuuluu)(entity);
            entity = entity.bind(zuuluu)();
            michal = _closure1_slot8;
            michal = michal.bind(zuuluu)();
            entity = !entity;
            if(!entity) { _fun00006_ip = 46; continue _fun00005 }
 43:
            entity = !michal;
 46:
            return entity;
        }
    };
    zuuluu['useShouldShowThroughlineLink'] = michal;
    return entity;
})();