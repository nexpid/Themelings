// app/modules/media_uploads/experiments/MobileImageUploadTranscodeExperimentV2.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    golf = entity.Object;
    tango = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(golf)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(mike);
    tango = golf.createExperiment;
    mike = {'kind': 'user', 'id': '2024-05_mobile_image_transcoding_v2', 'label': 'Different mobile image transcoding settings for different users V2'};
    options = {'enabled': false, 'quality': 0.6};
    mike['defaultConfig'] = options;
    verify = {'id': 2, 'label': 'higher quality images'};
    options = {'enabled': true, 'quality': 0.9};
    verify['config'] = options;
    options = new Array(2);
    options[0] = verify;
    verify = {'id': 3, 'label': 'lower quality images'};
    offset = {'enabled': true, 'quality': 0.4};
    verify['config'] = offset;
    options[1] = verify;
    mike['treatments'] = options;
    mike = tango.bind(golf)(mike);
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_uploads/experiments/MobileImageUploadTranscodeExperimentV2.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();