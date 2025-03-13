// app/modules/quests/experiments/MobileVideoQuestRolloutExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = {'id': '2025-05_mobile_video_quest_rollout', 'kind': 'user', 'label': 'Quests: Mobile Video Quest'};
    report = {'enabled': false, 'orientation': null};
    tangon['defaultConfig'] = report;
    yankee = {'id': 1, 'label': 'Enabled: Portrait'};
    report = 1;
    offset = {'enabled': true, 'orientation': 'portrait'};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Enabled: Landscape'};
    romeon = {'enabled': true, 'orientation': 'landscape'};
    yankee['config'] = romeon;
    offset[1] = yankee;
    tangon['treatments'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot0 = tangon;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/experiments/MobileVideoQuestRolloutExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['MobileVideoQuestExperiment'] = tangon;
    michal = function(argFoo) { // Original name: useIsMobileVideoQuestExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            michal = undefined;
            if(!(report === michal)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            report = true;
 22:
            tangon = _closure1_slot0;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useIsMobileVideoQuestExperimentEnabled'] = michal;
    return entity;
})();