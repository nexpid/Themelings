// app/modules/custom_status/experiments/CustomStatusLabelsExperiment.tsx
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
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    verify = report.bind(entity)(tangon);
    option = verify.createExperiment;
    golfie = {'kind': 'user', 'id': '2025-04_custom_status_labels', 'label': 'Custom Status Labels Experiment'};
    tangon = {'enabledWithActivityStatus': false, 'enabledWithoutActivityStatus': false};
    golfie['defaultConfig'] = tangon;
    tangon = {'id': 1, 'label': 'Enable custom status labels'};
    offset = {'enabledWithActivityStatus': true, 'enabledWithoutActivityStatus': false};
    tangon['config'] = offset;
    offset = new Array(2);
    offset[0] = tangon;
    yankee = {'id': 2, 'label': 'Enable custom status labels without activity status text update'};
    tangon = 2;
    romeon = {'enabledWithActivityStatus': false, 'enabledWithoutActivityStatus': true};
    yankee['config'] = romeon;
    offset[1] = yankee;
    golfie['treatments'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot2 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/custom_status/experiments/CustomStatusLabelsExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsEligibleForCustomStatusLabelsExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            oscard = michal.autoTrackExposure;
            report = undefined;
            if(!(oscard === report)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            oscard = true;
 22:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.isInUserProfileEditingHoldout;
            zuuluu = {};
            zuuluu['location'] = entity;
            zuuluu['autoTrackExposure'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscard;
            entity['disable'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            zuuluu = entity.enabledWithActivityStatus;
            michal = entity.enabledWithoutActivityStatus;
            entity = {};
            tangon = zuuluu;
            if(tangon) { _fun00002_ip = 124; continue _fun00001 }
 121:
            tangon = michal;
 124:
            entity['isEligibleForCustomStatusLabels'] = tangon;
            entity['enabledWithActivityStatus'] = zuuluu;
            entity['enabledWithoutActivityStatus'] = michal;
            return entity;
        }
    };
    zuuluu['useIsEligibleForCustomStatusLabelsExperiment'] = michal;
    return entity;
})();