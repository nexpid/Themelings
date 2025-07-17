// app/modules/soundpacks/CameraToggleSoundExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    verify = oscard.bind(entity)(tangon);
    option = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-07_camera_toggle_sound', 'label': 'Camera Toggle Sound'};
    report = {'enabled': false, 'inExperiment': false};
    tangon['defaultConfig'] = report;
    report = {'id': 0, 'label': 'Sound does not play when camera is toggled'};
    offset = {'enabled': false, 'inExperiment': true};
    report['config'] = offset;
    offset = new Array(2);
    offset[0] = report;
    yankee = {'id': 1, 'label': 'Sound plays when camera is toggled'};
    report = 1;
    romeon = {'enabled': true, 'inExperiment': true};
    yankee['config'] = romeon;
    offset[1] = yankee;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot0 = tangon;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createApexExperiment;
    report = {'name': '2025-07-camera-toggle-sound', 'kind': 'user'};
    offset = {'enabled': false, 'inExperiment': false};
    report['defaultConfig'] = offset;
    offset = {};
    yankee = {'enabled': false, 'inExperiment': true};
    offset[0] = yankee;
    yankee = {'enabled': true, 'inExperiment': true};
    offset[1] = yankee;
    report['variations'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/soundpacks/CameraToggleSoundExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function() { // Original name: isCameraToggleSoundEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = _closure1_slot0;
            tangon = oscard.getCurrentConfig;
            zuuluu = {};
            report = 'soundpacks';
            zuuluu['location'] = report;
            entity = {};
            golfie = true;
            entity['autoTrackExposure'] = golfie;
            zuuluu = tangon.bind(oscard)(zuuluu, entity);
            entity = zuuluu.enabled;
            zuuluu = zuuluu.inExperiment;
            if(zuuluu) { _fun00002_ip = 80; continue _fun00001 }
 54:
            tangon = _closure1_slot1;
            zuuluu = tangon.getConfig;
            michal = {};
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity = michal.enabled;
 80:
            return entity;
        }
    };
    zuuluu['isCameraToggleSoundEnabled'] = michal;
    return entity;
})();