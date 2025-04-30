// app/design/experiments/RiveExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.CommonTriggerPoints;
    tangon = 1;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-02_rive_staff_testing', 'label': 'Rive staff testing'};
    offset = {};
    yankee = false;
    offset['enabled'] = yankee;
    tangon['defaultConfig'] = offset;
    verify = verify.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = verify;
    offset = {'id': 0, 'label': 'Control'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 1, 'label': 'Enable Rive staff testing'};
    yankee = {};
    yankee['enabled'] = romeon;
    offset['config'] = yankee;
    verify[1] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/experiments/RiveExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['RiveExperiment'] = tangon;
    michal = function(argFoo) { // Original name: useRiveExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.useIsDesktopVisualRefreshEnabled;
            michal = global;
            michal = michal.HermesInternal;
            golfie = michal.concat;
            oscard = '';
            michal = '-rive-experiment';
            michal = golfie.bind(oscard)(report, michal);
            michal = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            entity = {};
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.enabled;
            if(!entity) { _fun00002_ip = 100; continue _fun00001 }
 97:
            entity = michal;
 100:
            return entity;
        }
    };
    zuuluu['useRiveExperiment'] = michal;
    return entity;
})();