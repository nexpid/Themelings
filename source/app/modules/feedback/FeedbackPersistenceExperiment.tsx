// app/modules/feedback/FeedbackPersistenceExperiment.tsx
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
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    yankee = {'persistToBackend': false, 'showMobileOptOuts': false};
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    option = report.bind(entity)(tangon);
    golfie = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-05_feedback_persistence_experiment', 'label': 'Feedback metadata persistence'};
    tangon['defaultConfig'] = yankee;
    offset = {'id': 1, 'label': 'Persist impression times and opt-outs to backend; show mobile opt-outs'};
    verify = {};
    kiloes = verify;
    backup = yankee;
    yankee = copyDataProperties(kiloes, backup);
    yankee = 'persistToBackend';
    verify[yankee] = romeon;
    yankee = 'showMobileOptOuts';
    verify[yankee] = romeon;
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
    tangon = 'modules/feedback/FeedbackPersistenceExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getFeedbackPersistenceExperimentConfig
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
    zuuluu['getFeedbackPersistenceExperimentConfig'] = tangon;
    michal = function(argFoo) { // Original name: useFeedbackPersistenceExperiment
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.location;
            report = michal.autoTrackExposure;
            oscard = undefined;
            if(!(report === oscard)) { _fun00004_ip = 22; continue _fun00003 }
 20:
            report = true;
 22:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            golfie = zuuluu.AVHoldoutExperimentH12025;
            oscard = golfie.useExperiment;
            tangon = {};
            tangon['location'] = entity;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = report;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            oscard = zuuluu.isInHoldout;
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            entity['disable'] = oscard;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useFeedbackPersistenceExperiment'] = michal;
    return entity;
})();