// app/experiments/SafetyConsumerEducationBlockMute.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    verify = report.bind(entity)(tango);
    options = verify.createExperiment;
    golf = {'kind': 'user', 'id': '2023-01_consumer_education_launch', 'label': 'Safety Consumer Education Launch - Block/Mute'};
    tango = {'bucket': 0, 'enabled': false};
    golf['defaultConfig'] = tango;
    yankee = {'id': 1, 'label': 'Mute'};
    tango = 1;
    offset = {'bucket': 1, 'enabled': true};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Block'};
    romeo = {'bucket': 2, 'enabled': true};
    yankee['config'] = romeo;
    offset[1] = yankee;
    golf['treatments'] = offset;
    golf = options.bind(verify)(golf);
    var _closure1_slot0 = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'experiments/SafetyConsumerEducationBlockMute.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useIsSafetyConsumerEducationBlockMuteEnabled
        tango = _closure1_slot0;
        zulu = tango.useExperiment;
        mike = {};
        entity = 'b85a21_1';
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['useIsSafetyConsumerEducationBlockMuteEnabled'] = tango;
    mike = function() { // Original name: useIsSafetyConsumerEducationBlockMuteBucket
        tango = _closure1_slot0;
        zulu = tango.useExperiment;
        mike = {};
        entity = 'b85a21_2';
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.bucket;
        return entity;
    };
    zulu['useIsSafetyConsumerEducationBlockMuteBucket'] = mike;
    return entity;
})();