// app/modules/libdiscore/libdiscoreCriticalFlowExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
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
    tangon = {'kind': 'user', 'id': '2025-04_libdiscore_critical_flow', 'label': 'Require libdiscore to use the app'};
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
    offset = {'id': 1, 'label': 'Require libdiscore to use the app'};
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
    report = 'modules/libdiscore/libdiscoreCriticalFlowExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['LibDiscordCriticalFlowExperiment'] = tangon;
    michal = function() { // Original name: useShouldBlockBrowser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            entity = {};
            report = 'default';
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.enabled;
            if(!entity) { _fun00002_ip = 68; continue _fun00001 }
 36:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.isUnsupportedBrowser;
            entity = michal.bind(zuuluu)();
 68:
            if(!entity) { _fun00002_ip = 73; continue _fun00001 }
 71:
            entity = true;
 73:
            return entity;
        }
    };
    zuuluu['useShouldBlockBrowser'] = michal;
    return entity;
})();