// app/modules/media_engine/VideoHealthManagerExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    verify = report.bind(entity)(mike);
    options = verify.createExperiment;
    mike = {'kind': 'user', 'id': '2024-01_auto_disable_video_mobile_v2', 'label': 'Mobile performance: VideoHealthManager (v2)'};
    tango = 1;
    offset = {'featureEnabled': false, 'windowLength': 5, 'allowedPoorFpsRatio': 1, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    mike['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': '5 second window, 100% allowed poor fps ratio, 5 fps threshold, 15 second backoff'};
    offset = {'featureEnabled': true, 'windowLength': 5, 'allowedPoorFpsRatio': 1, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    yankee['config'] = offset;
    offset = new Array(4);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': '5 second window, 100% allowed poor fps ratio, 5 fps threshold, 10 second backoff'};
    romeo = {'featureEnabled': true, 'windowLength': 5, 'allowedPoorFpsRatio': 1, 'fpsThreshold': 5, 'backoffTimeSec': 10};
    yankee['config'] = romeo;
    offset[1] = yankee;
    yankee = {'id': 3, 'label': '10 second window, 70% allowed poor fps ratio, 5 fps threshold, 15 second backoff'};
    romeo = {'featureEnabled': true, 'windowLength': 10, 'allowedPoorFpsRatio': 0.7, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    yankee['config'] = romeo;
    offset[2] = yankee;
    yankee = {'id': 4, 'label': '10 second window, 90% allowed poor fps ratio, 5 fps threshold, 15 second backoff'};
    romeo = {'featureEnabled': true, 'windowLength': 10, 'allowedPoorFpsRatio': 0.9, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    yankee['config'] = romeo;
    offset[3] = yankee;
    mike['treatments'] = offset;
    mike = options.bind(verify)(mike);
    var _closure1_slot0 = mike;
    mike = {};
    options = function() { // Original name: isFeatureSupportedOnPlatform
        entity = true;
        return entity;
    };
    mike['isFeatureSupportedOnPlatform'] = options;
    golf = function(argFoo) { // Original name: getConfig
        _fun53153: for(var _fun53153_ip = 0; ; ) switch(_fun53153_ip) {
 0:
            zulu = this;
            report = _closure1_slot0;
            tango = report.getCurrentConfig;
            mike = {};
            entity = '508d6c_1';
            mike['location'] = entity;
            entity = {};
            oscar = argFoo;
            entity['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(mike, entity);
            mike = zulu.isFeatureSupportedOnPlatform;
            mike = mike.bind(zulu)();
            if(mike) { _fun53153_ip = 65; continue _fun53153 }
 57:
            mike = false;
            entity['featureEnabled'] = mike;
 65:
            return entity;
        }
    };
    mike['getConfig'] = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_engine/VideoHealthManagerExperiment.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();