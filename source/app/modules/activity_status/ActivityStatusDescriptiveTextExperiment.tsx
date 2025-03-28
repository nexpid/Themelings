// app/modules/activity_status/ActivityStatusDescriptiveTextExperiment.tsx
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
    tangon = {'kind': 'user', 'id': '2025-03_activity_status_descriptive_text', 'label': 'Activity Status Descriptive Text'};
    verify = {};
    offset = false;
    verify['descriptiveTextEnabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Descriptive text enabled'};
    verify = {};
    verify['descriptiveTextEnabled'] = yankee;
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
    tangon = 'modules/activity_status/ActivityStatusDescriptiveTextExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
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
            tangon = report.useIsInUserProfileAwarenessAndEngagementHoldout;
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
            return entity;
        }
    };
    zuuluu['useActivityStatusDescriptiveTextExperiment'] = michal;
    return entity;
})();