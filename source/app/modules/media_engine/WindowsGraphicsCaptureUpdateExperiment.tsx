// app/modules/media_engine/WindowsGraphicsCaptureUpdateExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    foxtra = true;
    tangon['value'] = foxtra;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    verify = report.bind(entity)(tangon);
    option = verify.createExperiment;
    golfie = {'kind': 'user', 'id': '2025-04_wgc24h2api', 'label': 'Windows Graphics Capture 24H2 API'};
    tangon = {};
    offset = false;
    tangon['enabled'] = offset;
    golfie['defaultConfig'] = tangon;
    tangon = {'id': 1, 'label': 'Enable new API features'};
    offset = {};
    offset['enabled'] = foxtra;
    tangon['config'] = offset;
    offset = new Array(2);
    offset[0] = tangon;
    yankee = {'id': 2, 'label': 'Enable new API features (copy for holdout)'};
    tangon = 2;
    romeon = {};
    romeon['enabled'] = foxtra;
    yankee['config'] = romeon;
    offset[1] = yankee;
    golfie['treatments'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot2 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_engine/WindowsGraphicsCaptureUpdateExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getWindowsGraphicsCaptureUpdateExperimentConfig
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = arguments[1];
            oscard = undefined;
            if(!(report === oscard)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            report = true;
 14:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            golfie = zuuluu.AVHoldoutExperimentH12025;
            oscard = golfie.getCurrentConfig;
            tangon = {};
            tangon['location'] = entity;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = report;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            oscard = zuuluu.isInHoldout;
            tangon = _closure1_slot2;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['disable'] = oscard;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['getWindowsGraphicsCaptureUpdateExperimentConfig'] = michal;
    return entity;
})();