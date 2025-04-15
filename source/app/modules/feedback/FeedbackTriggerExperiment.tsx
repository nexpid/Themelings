// app/modules/feedback/FeedbackTriggerExperiment.tsx
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
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    option = report.bind(entity)(tangon);
    golfie = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-04_feedback_trigger_experiment', 'label': 'Feedback trigger logic changes'};
    verify = {};
    offset = false;
    verify['doGroupEligibilityCheck'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Do group eligibility check'};
    verify = {};
    verify['doGroupEligibilityCheck'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/feedback/FeedbackTriggerExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getFeedbackTriggerExperimentConfig
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            oscard = undefined;
            if(!(report === oscard)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            report = true;
 22:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            golfie = zuuluu.AVHoldoutExperiment;
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
    zuuluu['getFeedbackTriggerExperimentConfig'] = michal;
    return entity;
})();