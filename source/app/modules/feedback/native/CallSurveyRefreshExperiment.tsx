// app/modules/feedback/native/CallSurveyRefreshExperiment.tsx
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
    tangon = {'kind': 'user', 'id': '2025-02_call_survey_refresh_native', 'label': 'Call Survey Refresh (Native)'};
    verify = {};
    offset = false;
    verify['showRefreshedSurvey'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Show refreshed survey'};
    verify = {};
    verify['showRefreshedSurvey'] = yankee;
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
    tangon = 'modules/feedback/native/CallSurveyRefreshExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useCallSurveyRefreshExperiment
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
    zuuluu['useCallSurveyRefreshExperiment'] = michal;
    return entity;
})();