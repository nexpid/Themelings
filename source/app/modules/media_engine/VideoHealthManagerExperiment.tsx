// app/modules/media_engine/VideoHealthManagerExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    verify = report.bind(entity)(michal);
    option = verify.createExperiment;
    michal = {'kind': 'user', 'id': '2024-01_auto_disable_video_mobile_v2', 'label': 'Mobile performance: VideoHealthManager (v2)'};
    tangon = 1;
    offset = {'featureEnabled': false, 'windowLength': 5, 'allowedPoorFpsRatio': 1, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    michal['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': '5 second window, 100% allowed poor fps ratio, 5 fps threshold, 15 second backoff'};
    offset = {'featureEnabled': true, 'windowLength': 5, 'allowedPoorFpsRatio': 1, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    yankee['config'] = offset;
    offset = new Array(4);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': '5 second window, 100% allowed poor fps ratio, 5 fps threshold, 10 second backoff'};
    romeon = {'featureEnabled': true, 'windowLength': 5, 'allowedPoorFpsRatio': 1, 'fpsThreshold': 5, 'backoffTimeSec': 10};
    yankee['config'] = romeon;
    offset[1] = yankee;
    yankee = {'id': 3, 'label': '10 second window, 70% allowed poor fps ratio, 5 fps threshold, 15 second backoff'};
    romeon = {'featureEnabled': true, 'windowLength': 10, 'allowedPoorFpsRatio': 0.7, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    yankee['config'] = romeon;
    offset[2] = yankee;
    yankee = {'id': 4, 'label': '10 second window, 90% allowed poor fps ratio, 5 fps threshold, 15 second backoff'};
    romeon = {'featureEnabled': true, 'windowLength': 10, 'allowedPoorFpsRatio': 0.9, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    yankee['config'] = romeon;
    offset[3] = yankee;
    michal['treatments'] = offset;
    michal = option.bind(verify)(michal);
    var _closure1_slot0 = michal;
    michal = {};
    option = function() { // Original name: isFeatureSupportedOnPlatform
        entity = true;
        return entity;
    };
    michal['isFeatureSupportedOnPlatform'] = option;
    golfie = function(argFoo) { // Original name: getConfig
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = this;
            report = _closure1_slot0;
            tangon = report.getCurrentConfig;
            michal = {};
            entity = '508d6c_1';
            michal['location'] = entity;
            entity = {};
            oscard = argFoo;
            entity['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(michal, entity);
            michal = zuuluu.isFeatureSupportedOnPlatform;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00002_ip = 65; continue _fun00001 }
 57:
            michal = false;
            entity['featureEnabled'] = michal;
 65:
            return entity;
        }
    };
    michal['getConfig'] = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_engine/VideoHealthManagerExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();